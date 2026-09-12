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
  { materials: [{ key: "BAMBOO", name: "Bambus", en: "Bamboo", icon: "https://minecraft.wiki/images/Bamboo_%28item%29_JE1_BE1.png" }] },
  { materials: [{ key: "COCOA", name: "Kakao", en: "Cocoa Beans", icon: "https://minecraft.wiki/images/Cocoa_Beans_JE4_BE3.png" }] },
  { materials: [{ key: "SUGAR_CANE", name: "Trzcina Cukrowa", en: "Sugar Cane", icon: "https://minecraft.wiki/images/Sugar_Cane_%28item%29_JE3_BE3.png" }] },
  { materials: [{ key: "MELON", name: "Melony", en: "Melon", icon: "https://minecraft.wiki/images/Melon_JE2_BE2.png" }] },
  { materials: [{ key: "CACTUS", name: "Kaktusy", en: "Cactus", icon: "https://minecraft.wiki/images/Cactus_JE4.png" }] },
  {
    materials: [
      { key: "WHEAT", name: "Pszenica", en: "Wheat", icon: "https://minecraft.wiki/images/Wheat_JE2_BE2.png" },
      { key: "BEETROOTS", name: "Buraki", en: "Beetroot", icon: "https://minecraft.wiki/images/Beetroot_JE2_BE2.png" },
      { key: "CARROTS", name: "Marchewki", en: "Carrot", icon: "https://minecraft.wiki/images/Carrot_JE3_BE2.png" },
      { key: "POTATO", name: "Ziemniaki", en: "Potato", icon: "https://minecraft.wiki/images/Potato_JE3_BE2.png" }
    ]
  },
  { materials: [{ key: "PUMPKIN", name: "Dynie", en: "Pumpkin", icon: "https://minecraft.wiki/images/Pumpkin_JE3.png" }] },
  { materials: [{ key: "SWEET_BERRY_BUSH", name: "Słodkie Jagody", en: "Sweet Berries", icon: "https://minecraft.wiki/images/Sweet_Berries_JE1_BE1.png" }] },
  { materials: [{ key: "NETHER_WART", name: "Netherowe Brodawki", en: "Nether Wart", icon: "https://minecraft.wiki/images/Nether_Wart_%28item%29_JE2_BE1.png" }] },
  {
    materials: [
      { key: "WARPED_FUNGUS", name: "Spaczone Grzyby", en: "Warped Fungus", icon: "https://minecraft.wiki/images/Warped_Fungus_%28item%29_JE2_BE1.png" },
      { key: "WEEPING_VINES", name: "Płaczące Pnącza", en: "Weeping Vines", icon: "https://minecraft.wiki/images/Weeping_Vines_Plant_%28texture%29_JE1.png" },
      { key: "CRIMSON_FUNGUS", name: "Szkarłatne Grzyby", en: "Crimson Fungus", icon: "https://minecraft.wiki/images/Crimson_Fungus_%28texture%29_JE1_BE1.png" },
      { key: "TWISTING_VINES", name: "Skręcone Pnącza", en: "Twisting Vines", icon: "https://minecraft.wiki/images/Twisting_Vines_Plant_%28texture%29_JE1_BE1.png" }
    ]
  },
  { materials: [{ key: "KELP", name: "Wodorosty", en: "Kelp", icon: "https://minecraft.wiki/images/Kelp_%28item%29_JE1_BE2.png" }] }
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
      items: crop.materials.map(m => ({ icon: m.icon, name: m.name, en: m.en })),
      tiers: perMaterialTiers[0]
    };
  });
}

const farmCropsReady = loadFarmCrops().catch(err => console.error("farming: failed to load", err));

function speedClass(speed) {
  return speed === 100 ? "speed-max" : speed > 50 ? "speed-mid" : "speed-low";
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
      .map(item => `<span class="crop-name-item"><img class="crop-icon hint" src="${item.icon}" alt="" data-tippy-content="${item.en}">${item.name}</span>`)
      .join("\n    ");
    return crop.tiers.map((tier, ti) => {
      const biomesHtml = tier.biomes
        ? `<span class="biome-entry-label hint" data-tippy-content="${tier.biomes.map(titleCaseBiome).join(", ")}">${tier.label}<i class="bi bi-question-circle"></i></span>`
        : `<span class="biome-entry-label fallback">${tier.label}</span>`;
      const nameTd = ti === 0 ? `<td class="crop-name" rowspan="${crop.tiers.length}">\n    ${nameCell}\n  </td>` : "";
      const speedHtml = `<span class="speed-meter hint ${speedClass(tier.speed)}" data-tippy-content="${tier.speed}%" role="img" aria-label="${tier.speed}%"><span class="speed-track"><span class="speed-fill" style="width: ${tier.speed}%"></span></span></span>`;
      return `<tr${altClass}>${nameTd}<td class="crop-speed">${speedHtml}</td><td>\n    ${biomesHtml}\n  </td></tr>`;
    }).join("\n");
  }).join("\n");

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
