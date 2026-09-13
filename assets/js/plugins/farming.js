const GROUP_LABEL = {
  Arid: "Pustynie i Badlandy",
  Savanna: "Sawanna",
  Jungle: "Dżungla",
  Tropical: "Tropikalne",
  Chilly: "Chłodne",
  Temperate: "Umiarkowane",
  RiverAndCoasts: "Rzeki i Wybrzeża",
  Nether: "Nether",
  Oceans: "Oceany"
};

const CROP_ITEMS = [
  { materials: [{ key: "BAMBOO", name: "Bambus", icon: "https://minecraft.wiki/images/Bamboo_%28item%29_JE1_BE1.png" }] },
  { materials: [{ key: "COCOA", name: "Kakao", icon: "https://minecraft.wiki/images/Cocoa_Beans_JE4_BE3.png" }] },
  { materials: [{ key: "SUGAR_CANE", name: "Trzcina Cukrowa", icon: "https://minecraft.wiki/images/Sugar_Cane_%28item%29_JE3_BE3.png" }] },
  { materials: [{ key: "MELON", name: "Melon", icon: "https://minecraft.wiki/images/Melon_JE2_BE2.png", render: "smooth" }] },
  { materials: [{ key: "CACTUS", name: "Kaktus", icon: "https://minecraft.wiki/images/Cactus_JE4.png", render: "smooth" }] },
  {
    materials: [
      { key: "WHEAT", name: "Pszenica", icon: "https://minecraft.wiki/images/Wheat_JE2_BE2.png" },
      { key: "BEETROOTS", name: "Burak", icon: "https://minecraft.wiki/images/Beetroot_JE2_BE2.png" },
      { key: "CARROTS", name: "Marchew", icon: "https://minecraft.wiki/images/Carrot_JE3_BE2.png" },
      { key: "POTATO", name: "Ziemniak", icon: "https://minecraft.wiki/images/Potato_JE3_BE2.png" }
    ]
  },
  { materials: [{ key: "PUMPKIN", name: "Dynia", icon: "https://minecraft.wiki/images/Pumpkin_JE3.png", render: "smooth" }] },
  { materials: [{ key: "SWEET_BERRY_BUSH", name: "Słodkie Jagody", icon: "https://minecraft.wiki/images/Sweet_Berries_JE1_BE1.png" }] },
  { materials: [{ key: "NETHER_WART", name: "Netherowa Brodawka", icon: "https://minecraft.wiki/images/Nether_Wart_%28item%29_JE2_BE1.png" }] },
  {
    materials: [
      { key: "CRIMSON_FUNGUS", name: "Szkarłatny Grzyb", icon: "https://minecraft.wiki/images/Crimson_Fungus_%28texture%29_JE1_BE1.png" },
      { key: "WEEPING_VINES", name: "Płaczące Pnącza", icon: "https://minecraft.wiki/images/Weeping_Vines_Plant_%28texture%29_JE1.png" },
    ]
  },
  {
    materials: [
      { key: "WARPED_FUNGUS", name: "Spaczony Grzyb", icon: "https://minecraft.wiki/images/Warped_Fungus_%28item%29_JE2_BE1.png" },
      { key: "TWISTING_VINES", name: "Skręcone Pnącza", icon: "https://minecraft.wiki/images/Twisting_Vines_Plant_%28texture%29_JE1_BE1.png" }
    ]
  },

  { materials: [{ key: "KELP", name: "Wodorost", icon: "https://minecraft.wiki/images/Kelp_%28item%29_JE1_BE2.png" }] }
];

function titleCaseBiome(enumName) {
  return enumName.split("_").map(w => w[0] + w.slice(1).toLowerCase()).join(" ");
}

function computeTiers(materialCfg, biomeGroups) {
  const claimed = new Set();
  const tiers = [];
  (materialCfg.BiomeGroup.Groups || []).forEach(groupName => {
    const remaining = (biomeGroups[groupName] || []).filter(b => !claimed.has(b));
    remaining.forEach(b => claimed.add(b));
    if (remaining.length === 0) return;
    tiers.push({
      speed: materialCfg.BiomeGroup[groupName].GrowthRate,
      label: GROUP_LABEL[groupName] || groupName,
      biomes: remaining
    });
  });
  tiers.push({ speed: materialCfg.Default.GrowthRate, label: "Pozostałe", biomes: null });
  tiers.sort((a, b) => b.speed - a.speed);
  return tiers;
}

async function loadFarmCrops() {
  const [biomeGroups, growthModifiers] = await Promise.all([
    fetch("assets/data/BiomeGroups.yml").then(r => r.text()).then(t => jsyaml.load(t)),
    fetch("assets/data/GrowthModifiers.yml").then(r => r.text()).then(t => jsyaml.load(t))
  ]);

  window.farmCrops = CROP_ITEMS.map(crop => {
    const perMaterialTiers = crop.materials.map(m => computeTiers(growthModifiers[m.key], biomeGroups));
    const serialized = perMaterialTiers.map(t => JSON.stringify(t));
    if (new Set(serialized).size > 1) {
      console.warn(`farming: bundled materials [${crop.materials.map(m => m.key).join(", ")}] have different growth data`);
    }
    return {
      items: crop.materials.map(m => ({ icon: m.icon, render: m.render, name: m.name })),
      tiers: perMaterialTiers[0]
    };
  });
}

const farmCropsReady = loadFarmCrops().catch(err => console.error("farming: failed to load", err));

function speedClass(speed) {
  return speed === 100 ? "speed-max" : speed > 50 ? "speed-mid" : "speed-low";
}

function centerOpaquePixels(img) {
  const { naturalWidth: w, naturalHeight: h } = img;
  if (!w || !h) return;
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);
  let data;
  try { data = ctx.getImageData(0, 0, w, h).data; } catch { return; }
  let minX = w, minY = h, maxX = -1, maxY = -1;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      if (data[(y * w + x) * 4 + 3] === 0) continue;
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
    }
  }
  if (maxX < 0) return;
  const scale = img.width / w;
  img.style.translate = `${Math.round((w - minX - maxX - 1) / 2 * scale)}px ${Math.round((h - minY - maxY - 1) / 2 * scale)}px`;
}

function renderFarmTable() {
  const tbody = document.querySelector(".farm-table tbody");
  if (!tbody) return;
  if (!window.farmCrops) {
    farmCropsReady.then(() => {
      if (document.querySelector(".farm-table")) renderFarmTable();
    });
    return;
  }
  tbody.innerHTML = window.farmCrops.map((crop, i) => {
    const altClass = i % 2 === 1 ? ' class="alt"' : "";
    const nameCell = crop.items
      .map(item => `<span class="crop-name-item"><span class="crop-slot"><img class="crop-icon${item.render === "smooth" ? " smooth" : ""}" crossorigin="anonymous" src="${item.icon}" alt=""></span>${item.name}</span>`)
      .join("\n      ");
    return crop.tiers.map((tier, ti) => {
      const biomesHtml = tier.biomes
        ? `<span class="biome-entry-label hint" data-tippy-content="${tier.biomes.map(titleCaseBiome).join(", ")}">${tier.label}<i class="bi bi-question-circle"></i></span>`
        : `<span class="biome-entry-label fallback">${tier.label}</span>`;
      const nameTd = ti === 0 ? `<td class="crop-name" rowspan="${crop.tiers.length}">\n    <div class="crop-names">\n      ${nameCell}\n    </div>\n  </td>` : "";
      const speedHtml = `<span class="speed-meter hint ${speedClass(tier.speed)}" data-tippy-content="${tier.speed}%" role="img" aria-label="${tier.speed}%"><span class="speed-track"><span class="speed-fill" style="width: ${tier.speed}%"></span></span></span>`;
      return `<tr${altClass}>${nameTd}<td class="crop-speed">${speedHtml}</td><td>\n    ${biomesHtml}\n  </td></tr>`;
    }).join("\n");
  }).join("\n");

  tbody.querySelectorAll(".crop-icon").forEach(img => {
    if (img.complete) centerOpaquePixels(img);
    else img.addEventListener("load", () => centerOpaquePixels(img), { once: true });
    img.addEventListener("error", () => img.removeAttribute("crossorigin"), { once: true });
  });

  tbody.querySelectorAll("[data-tippy-content]").forEach(el => {
    if (el._tippy) return;
    el.tabIndex = 0;
    tippy(el, { placement: "top", theme: "firedot", trigger: "mouseenter focus click" });
  });
}

function farmTablePlugin(hook) {
  hook.doneEach(function() {
    if (document.querySelector(".farm-table")) renderFarmTable();
  });
}

window.$docsify = window.$docsify || {};
window.$docsify.plugins = (window.$docsify.plugins || []).concat(farmTablePlugin);
