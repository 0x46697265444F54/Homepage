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
  { materials: [{ key: "BAMBOO", name: "Bambus", english: "Bamboo", icon: "https://minecraft.wiki/images/Bamboo_%28item%29_JE1_BE1.png" }] },
  { materials: [{ key: "COCOA", name: "Kakao", english: "Cocoa Beans", icon: "https://minecraft.wiki/images/Cocoa_Beans_JE4_BE3.png" }] },
  { materials: [{ key: "SUGAR_CANE", name: "Trzcina Cukrowa", english: "Sugar Cane", icon: "https://minecraft.wiki/images/Sugar_Cane_%28item%29_JE3_BE3.png" }] },
  { materials: [{ key: "MELON", name: "Melon", english: "Melon", icon: "https://minecraft.wiki/images/Melon_JE2_BE2.png", render: "smooth" }] },
  { materials: [{ key: "CACTUS", name: "Kaktus", english: "Cactus", icon: "https://minecraft.wiki/images/Cactus_JE4.png", render: "smooth" }] },
  {
    materials: [
      { key: "WHEAT", name: "Pszenica", english: "Wheat", icon: "https://minecraft.wiki/images/Wheat_JE2_BE2.png" },
      { key: "BEETROOTS", name: "Burak", english: "Beetroot", icon: "https://minecraft.wiki/images/Beetroot_JE2_BE2.png" },
      { key: "CARROTS", name: "Marchew", english: "Carrot", icon: "https://minecraft.wiki/images/Carrot_JE3_BE2.png" },
      { key: "POTATO", name: "Ziemniak", english: "Potato", icon: "https://minecraft.wiki/images/Potato_JE3_BE2.png" }
    ]
  },
  { materials: [{ key: "PUMPKIN", name: "Dynia", english: "Pumpkin", icon: "https://minecraft.wiki/images/Pumpkin_JE3.png", render: "smooth" }] },
  { materials: [{ key: "SWEET_BERRY_BUSH", name: "Słodkie Jagody", english: "Sweet Berries", icon: "https://minecraft.wiki/images/Sweet_Berries_JE1_BE1.png" }] },
  { materials: [{ key: "NETHER_WART", name: "Netherowa Brodawka", english: "Nether Wart", icon: "https://minecraft.wiki/images/Nether_Wart_%28item%29_JE2_BE1.png" }] },
  {
    materials: [
      { key: "CRIMSON_FUNGUS", name: "Szkarłatny Grzyb", english: "Crimson Fungus", icon: "https://minecraft.wiki/images/Crimson_Fungus_%28texture%29_JE1_BE1.png" },
      { key: "WEEPING_VINES", name: "Płaczące Pnącza", english: "Weeping Vines", icon: "https://minecraft.wiki/images/Weeping_Vines_Plant_%28texture%29_JE1.png" },
    ]
  },
  {
    materials: [
      { key: "WARPED_FUNGUS", name: "Spaczony Grzyb", english: "Warped Fungus", icon: "https://minecraft.wiki/images/Warped_Fungus_%28item%29_JE2_BE1.png" },
      { key: "TWISTING_VINES", name: "Skręcone Pnącza", english: "Twisting Vines", icon: "https://minecraft.wiki/images/Twisting_Vines_Plant_%28texture%29_JE1_BE1.png" }
    ]
  },

  { materials: [{ key: "KELP", name: "Wodorost", english: "Kelp", icon: "https://minecraft.wiki/images/Kelp_%28item%29_JE1_BE2.png" }] }
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

  window.farmCrops = CROP_ITEMS.flatMap(crop => crop.materials.map(material => ({
    id: `farm-${material.key.toLowerCase().replaceAll("_", "-")}`,
    items: [{ icon: material.icon, render: material.render, name: material.name, english: material.english }],
    tiers: computeTiers(growthModifiers[material.key], biomeGroups)
  })));
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

function renderFarmCards() {
  const container = document.querySelector(".farm-cards");
  if (!container) return;
  if (!window.farmCrops) {
    farmCropsReady.then(() => {
      if (window.farmCrops) renderFarmCards();
      else if (container.isConnected) container.textContent = "Nie udało się załadować upraw. Odśwież stronę lub sprawdź /farm na serwerze.";
    });
    return;
  }
  container.innerHTML = window.farmCrops.map(crop => {
    const names = crop.items
      .map(item => `<span class="crop-name-item"><span class="crop-slot"><img data-no-zoom class="crop-icon${item.render === "smooth" ? " smooth" : ""}" crossorigin="anonymous" src="${item.icon}" alt=""></span><span class="crop-title">${item.name}<span class="translation" lang="en">${item.english}</span></span></span>`)
      .join("\n");
    const tiers = crop.tiers.map((tier, i) => `
      <div class="farm-tier${i === 0 ? " best" : ""}${tier.biomes ? " hint" : " fallback"}"${tier.biomes ? ` tabindex="0" data-tippy-content="${tier.biomes.map(titleCaseBiome).join(", ")}"` : ""}>
        ${tier.biomes
          ? `<span class="biome-entry-label">${tier.label}<i class="bi bi-question-circle" aria-hidden="true"></i></span>`
          : `<span class="biome-entry-label">${tier.label}</span>`}
        <span class="speed-track ${speedClass(tier.speed)}" aria-hidden="true"><span class="speed-fill" style="width: ${tier.speed}%"></span></span>
        <span class="farm-speed">${tier.speed}%</span>
      </div>`).join("\n");
    return `<article id="${crop.id}" class="farm-card panel" aria-label="${crop.items.map(item => item.name).join(", ")}">
      <div class="crop-names">${names}</div>
      <div class="farm-tiers">${tiers}</div>
    </article>`;
  }).join("\n");

  searchRevealTarget();

  container.querySelectorAll("[data-tippy-content]").forEach(el => {
    tippy(el, { placement: "top", theme: "firedot", trigger: "mouseenter focus click" });
  });

  container.querySelectorAll(".crop-icon").forEach(img => {
    if (img.complete) centerOpaquePixels(img);
    else img.addEventListener("load", () => centerOpaquePixels(img), { once: true });
    img.addEventListener("error", () => img.removeAttribute("crossorigin"), { once: true });
  });
}

function farmCardsPlugin(hook) {
  hook.doneEach(renderFarmCards);
}

window.$docsify = window.$docsify || {};
window.$docsify.plugins = (window.$docsify.plugins || []).concat(farmCardsPlugin);
