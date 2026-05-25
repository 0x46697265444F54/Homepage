<style>
.page {
    p, ul, ol {
        margin: 0.25em 0 0.25em 0;
    }
}
.translation {
    margin-left: 0.25em;
    font-weight: normal;
    color: var(--base-color)
}
.farm-table-wrap {
    overflow-x: auto;
    overflow-y: visible;
    margin-bottom: 1.75em;
    border-radius: 8px;
    border: 1px solid var(--color-mono-3);
    background-color: var(--color-mono-1);
    box-shadow: 0 0 8px 4px rgba(0,0,0,0.15);
}
.farm-table {
    width: 100%;
    table-layout: auto;
    border-collapse: collapse;
    font-size: 0.88em;
    min-width: 650px;
    margin: 0 !important;
    display: table;
}
.farm-table th,
.farm-table td {
    padding: 0.4em 0.75em;
    border: none;
    vertical-align: middle;
}
.farm-table thead th {
    text-align: left;
    color: var(--color-mono-5);
    font-weight: normal;
    white-space: nowrap;
    border-bottom: 1px solid var(--color-mono-3);
    background-color: var(--color-mono-2);
}
.farm-table thead th:not(:last-child) {
    border-right: 1px solid var(--color-mono-3);
}
.farm-table tbody tr {
    border-top: 1px solid var(--color-mono-3);
}
.farm-table tbody tr:first-child {
    border-top: none;
}
.farm-table td.crop-name {
    font-weight: bold;
    font-size: 1em;
    color: var(--heading-color);
    white-space: nowrap;
    width: auto;
    border-right: 1px solid var(--color-mono-3);
    vertical-align: middle;
}
.farm-table td.crop-speed {
    white-space: nowrap;
    width: 1%;
    font-size: 1em;
    border-right: 1px solid var(--color-mono-3);
    vertical-align: middle;
}
.farm-table tbody tr.alt td {
    background-color: color-mix(in srgb, var(--color-mono-3), transparent 65%);
}
.farm-table td:last-child {
    vertical-align: middle;
}
.biome-entry {
    display: block;
    font-size: 1em;
    line-height: 1.7;
    color: var(--color-mono-5);
}
.biome-entry-label {
    color: var(--heading-color);
    font-weight: normal;
}
.biome-entry-label::after {
    content: "\00a0";
}
.biome-entry-names {
    color: var(--color-mono-5);
}
.crop-icon {
    image-rendering: pixelated;
    width: 22px;
    height: 22px;
    vertical-align: middle;
    margin-right: 0.5em;
    margin-bottom: 2px;
}
.speed-100 { color: #259646; font-weight: bold; }
.speed-mid { color: #cf940a; font-weight: bold; }
.speed-low { color: #e04f44; font-weight: bold; }
</style>

# Rolnictwo
Rolnictwo na serwerze zostało zmodyfikowane na potrzeby balansu i dynamiki rozgrywki. Prędkość wzrostu upraw jest teraz zależna od biomu, na którym się znajdują. Ma to na celu zachęcenie graczy do eksploracji świata w poszukiwaniu nowych biomów i zakładania na nich farm, a także ograniczenie wpływu automatycznych farm na gospodarkę serwera.
- Prędkość wzrostu upraw jest teraz zależna od biomu, na którym się znajdują.
- Niektóre rodzaje upraw są unikalne dla poszczególnych biomów (np. **Bambus**) i na innych biomach rosną z bardzo niską prędkością.
- Pełny kompostownik w pobliżu upraw zwiększa prędkość ich wzrostu o 20%. Efekt się nie stackuje, a łączna prędkość wzrostu nie może przekroczyć 100%.

<div class="callout note">

Informacje na temat upraw są też dostępne pod komendą **/farm** na naszym serwerze.

</div>

<br>

<div class="farm-table-wrap">
<table class="farm-table">
<thead><tr><th>Uprawa</th><th>Prędkość</th><th>Biomy</th></tr></thead>
<tbody>
<tr id="bambus">
  <td class="crop-name" rowspan="2"><img class="crop-icon" src="https://minecraft.wiki/images/Bamboo_%28item%29_JE1_BE1.png" alt="">Bambus <span class="translation">(Bamboo)</span></td>
  <td class="crop-speed"><span class="speed-100">100%</span></td>
  <td>
    <span class="biome-entry"><span class="biome-entry-label">Dżungla</span>(<span class="biome-entry-names">Jungle, Bamboo Jungle, Sparse Jungle</span>)</span>
    <span class="biome-entry"><span class="biome-entry-label">Bagna</span>(<span class="biome-entry-names">Swamp, Mangrove Swamp</span>)</span>
  </td>
</tr>
<tr>
  <td class="crop-speed"><span class="speed-low">5%</span></td>
  <td><span class="biome-entry-label">Pozostałe</span></td>
</tr>
<tr id="kakao" class="alt">
  <td class="crop-name" rowspan="2"><img class="crop-icon" src="https://minecraft.wiki/images/Cocoa_Beans_JE4_BE3.png" alt="">Kakao <span class="translation">(Cocoa Beans)</span></td>
  <td class="crop-speed"><span class="speed-100">100%</span></td>
  <td>
    <span class="biome-entry"><span class="biome-entry-label">Dżungla</span>(<span class="biome-entry-names">Jungle, Bamboo Jungle, Sparse Jungle</span>)</span>
  </td>
</tr>
<tr class="alt">
  <td class="crop-speed"><span class="speed-low">5%</span></td>
  <td><span class="biome-entry-label">Pozostałe</span></td>
</tr>
<tr id="trzcina-cukrowa">
  <td class="crop-name" rowspan="4"><img class="crop-icon" src="https://minecraft.wiki/images/Sugar_Cane_%28item%29_JE3_BE3.png" alt="">Trzcina Cukrowa <span class="translation">(Sugar Cane)</span></td>
  <td class="crop-speed"><span class="speed-100">100%</span></td>
  <td>
    <span class="biome-entry"><span class="biome-entry-label">Dżungla</span>(<span class="biome-entry-names">Jungle, Bamboo Jungle, Sparse Jungle</span>)</span>
    <span class="biome-entry"><span class="biome-entry-label">Bagna</span>(<span class="biome-entry-names">Swamp, Mangrove Swamp</span>)</span>
  </td>
</tr>
<tr>
  <td class="crop-speed"><span class="speed-mid">65%</span></td>
  <td>
    <span class="biome-entry"><span class="biome-entry-label">Rzeki i Wybrzeża</span>(<span class="biome-entry-names">River, Beach</span>)</span>
  </td>
</tr>
<tr>
  <td class="crop-speed"><span class="speed-low">35%</span></td>
  <td>
    <span class="biome-entry"><span class="biome-entry-label">Oceany</span>(<span class="biome-entry-names">Ocean, Deep Ocean, Lukewarm Ocean, Deep Lukewarm Ocean, Warm Ocean</span>)</span>
    <span class="biome-entry"><span class="biome-entry-label">Lasy</span>(<span class="biome-entry-names">Forest, Birch Forest, Dark Forest, Flower Forest, Old Growth Birch Forest</span>)</span>
    <span class="biome-entry"><span class="biome-entry-label">Równiny i Łąki</span>(<span class="biome-entry-names">Plains, Sunflower Plains, Meadow, Cherry Grove, Mushroom Fields</span>)</span>
  </td>
</tr>
<tr>
  <td class="crop-speed"><span class="speed-low">5%</span></td>
  <td><span class="biome-entry-label">Pozostałe</span></td>
</tr>
<tr id="melony" class="alt">
  <td class="crop-name" rowspan="3"><img class="crop-icon" src="https://minecraft.wiki/images/Melon_JE2_BE2.png" alt="">Melony <span class="translation">(Melon)</span></td>
  <td class="crop-speed"><span class="speed-100">100%</span></td>
  <td>
    <span class="biome-entry"><span class="biome-entry-label">Dżungla</span>(<span class="biome-entry-names">Jungle, Bamboo Jungle, Sparse Jungle</span>)</span>
    <span class="biome-entry"><span class="biome-entry-label">Bagna</span>(<span class="biome-entry-names">Swamp, Mangrove Swamp</span>)</span>
  </td>
</tr>
<tr class="alt">
  <td class="crop-speed"><span class="speed-low">25%</span></td>
  <td>
    <span class="biome-entry"><span class="biome-entry-label">Oceany</span>(<span class="biome-entry-names">Ocean, Deep Ocean, Lukewarm Ocean, Deep Lukewarm Ocean, Warm Ocean</span>)</span>
    <span class="biome-entry"><span class="biome-entry-label">Lasy</span>(<span class="biome-entry-names">Forest, Birch Forest, Dark Forest, Flower Forest, Old Growth Birch Forest</span>)</span>
    <span class="biome-entry"><span class="biome-entry-label">Równiny i Łąki</span>(<span class="biome-entry-names">Plains, Sunflower Plains, Meadow, Cherry Grove, Mushroom Fields</span>)</span>
  </td>
</tr>
<tr class="alt">
  <td class="crop-speed"><span class="speed-low">5%</span></td>
  <td><span class="biome-entry-label">Pozostałe</span></td>
</tr>
<tr id="kaktusy">
  <td class="crop-name" rowspan="2"><img class="crop-icon" src="https://minecraft.wiki/images/Cactus_JE4.png" alt="">Kaktusy <span class="translation">(Cactus)</span></td>
  <td class="crop-speed"><span class="speed-100">100%</span></td>
  <td>
    <span class="biome-entry"><span class="biome-entry-label">Pustynie i Badlandy</span>(<span class="biome-entry-names">Desert, Badlands, Eroded Badlands, Wooded Badlands</span>)</span>
  </td>
</tr>
<tr>
  <td class="crop-speed"><span class="speed-low">5%</span></td>
  <td><span class="biome-entry-label">Pozostałe</span></td>
</tr>
<tr id="pszenica" class="alt">
  <td class="crop-name" rowspan="4">
    <img class="crop-icon" src="https://minecraft.wiki/images/Wheat_JE2_BE2.png" alt="">Pszenica <span class="translation">(Wheat)</span><br>
    <img class="crop-icon" src="https://minecraft.wiki/images/Beetroot_JE2_BE2.png" alt=""><span id="buraki">Buraki <span class="translation">(Beetroot)</span></span><br>
    <img class="crop-icon" src="https://minecraft.wiki/images/Carrot_JE3_BE2.png" alt=""><span id="marchewki">Marchewki <span class="translation">(Carrot)</span></span><br>
    <img class="crop-icon" src="https://minecraft.wiki/images/Potato_JE3_BE2.png" alt=""><span id="ziemniaki">Ziemniaki <span class="translation">(Potato)</span></span>
  </td>
  <td class="crop-speed"><span class="speed-100">100%</span></td>
  <td>
    <span class="biome-entry"><span class="biome-entry-label">Oceany</span>(<span class="biome-entry-names">Ocean, Deep Ocean, Lukewarm Ocean, Deep Lukewarm Ocean, Warm Ocean</span>)</span>
    <span class="biome-entry"><span class="biome-entry-label">Lasy</span>(<span class="biome-entry-names">Forest, Birch Forest, Dark Forest, Flower Forest, Old Growth Birch Forest</span>)</span>
    <span class="biome-entry"><span class="biome-entry-label">Równiny i Łąki</span>(<span class="biome-entry-names">Plains, Sunflower Plains, Meadow, Cherry Grove, Mushroom Fields</span>)</span>
    <span class="biome-entry"><span class="biome-entry-label">Rzeki i Wybrzeża</span>(<span class="biome-entry-names">River, Beach</span>)</span>
  </td>
</tr>
<tr class="alt">
  <td class="crop-speed"><span class="speed-mid">75%</span></td>
  <td>
    <span class="biome-entry"><span class="biome-entry-label">Sawanna</span>(<span class="biome-entry-names">Savanna, Savanna Plateau</span>)</span>
  </td>
</tr>
<tr class="alt">
  <td class="crop-speed"><span class="speed-mid">60%</span></td>
  <td>
    <span class="biome-entry"><span class="biome-entry-label">Tajga</span>(<span class="biome-entry-names">Taiga, Old Growth Pine Taiga, Old Growth Spruce Taiga</span>)</span>
    <span class="biome-entry"><span class="biome-entry-label">Zimne Oceany</span>(<span class="biome-entry-names">Cold Ocean, Deep Cold Ocean, Stony Shore</span>)</span>
  </td>
</tr>
<tr class="alt">
  <td class="crop-speed"><span class="speed-low">50%</span></td>
  <td><span class="biome-entry-label">Pozostałe</span></td>
</tr>
<tr id="dynie">
  <td class="crop-name" rowspan="3"><img class="crop-icon" src="https://minecraft.wiki/images/Pumpkin_JE3.png" alt="">Dynie <span class="translation">(Pumpkin)</span></td>
  <td class="crop-speed"><span class="speed-100">100%</span></td>
  <td>
    <span class="biome-entry"><span class="biome-entry-label">Tajga</span>(<span class="biome-entry-names">Taiga, Old Growth Pine Taiga, Old Growth Spruce Taiga</span>)</span>
    <span class="biome-entry"><span class="biome-entry-label">Zimne Oceany</span>(<span class="biome-entry-names">Cold Ocean, Deep Cold Ocean, Stony Shore</span>)</span>
  </td>
</tr>
<tr>
  <td class="crop-speed"><span class="speed-mid">85%</span></td>
  <td>
    <span class="biome-entry"><span class="biome-entry-label">Oceany</span>(<span class="biome-entry-names">Ocean, Deep Ocean, Lukewarm Ocean, Deep Lukewarm Ocean, Warm Ocean</span>)</span>
    <span class="biome-entry"><span class="biome-entry-label">Lasy</span>(<span class="biome-entry-names">Forest, Birch Forest, Dark Forest, Flower Forest, Old Growth Birch Forest</span>)</span>
    <span class="biome-entry"><span class="biome-entry-label">Równiny i Łąki</span>(<span class="biome-entry-names">Plains, Sunflower Plains, Meadow, Cherry Grove, Mushroom Fields</span>)</span>
    <span class="biome-entry"><span class="biome-entry-label">Rzeki i Wybrzeża</span>(<span class="biome-entry-names">River, Beach</span>)</span>
  </td>
</tr>
<tr>
  <td class="crop-speed"><span class="speed-low">50%</span></td>
  <td><span class="biome-entry-label">Pozostałe</span></td>
</tr>
<tr id="slodkie-jagody" class="alt">
  <td class="crop-name" rowspan="3"><img class="crop-icon" src="https://minecraft.wiki/images/Sweet_Berries_JE1_BE1.png" alt="">Słodkie Jagody <span class="translation">(Sweet Berries)</span></td>
  <td class="crop-speed"><span class="speed-100">100%</span></td>
  <td>
    <span class="biome-entry"><span class="biome-entry-label">Tajga</span>(<span class="biome-entry-names">Taiga, Old Growth Pine Taiga, Old Growth Spruce Taiga</span>)</span>
    <span class="biome-entry"><span class="biome-entry-label">Zimne Oceany</span>(<span class="biome-entry-names">Cold Ocean, Deep Cold Ocean, Stony Shore</span>)</span>
  </td>
</tr>
<tr class="alt">
  <td class="crop-speed"><span class="speed-mid">60%</span></td>
  <td>
    <span class="biome-entry"><span class="biome-entry-label">Oceany</span>(<span class="biome-entry-names">Ocean, Deep Ocean, Lukewarm Ocean, Deep Lukewarm Ocean, Warm Ocean</span>)</span>
    <span class="biome-entry"><span class="biome-entry-label">Lasy</span>(<span class="biome-entry-names">Forest, Birch Forest, Dark Forest, Flower Forest, Old Growth Birch Forest</span>)</span>
    <span class="biome-entry"><span class="biome-entry-label">Równiny i Łąki</span>(<span class="biome-entry-names">Plains, Sunflower Plains, Meadow, Cherry Grove, Mushroom Fields</span>)</span>
    <span class="biome-entry"><span class="biome-entry-label">Rzeki i Wybrzeża</span>(<span class="biome-entry-names">River, Beach</span>)</span>
  </td>
</tr>
<tr class="alt">
  <td class="crop-speed"><span class="speed-low">25%</span></td>
  <td><span class="biome-entry-label">Pozostałe</span></td>
</tr>
<tr id="netherowe-brodawki">
  <td class="crop-name" rowspan="2"><img class="crop-icon" src="https://minecraft.wiki/images/Nether_Wart_%28item%29_JE2_BE1.png" alt="">Netherowe Brodawki <span class="translation">(Nether Wart)</span></td>
  <td class="crop-speed"><span class="speed-100">100%</span></td>
  <td>
    <span class="biome-entry"><span class="biome-entry-label">Nether</span>(<span class="biome-entry-names">Nether Wastes, Soul Sand Valley, Crimson Forest, Warped Forest, Basalt Deltas</span>)</span>
  </td>
</tr>
<tr>
  <td class="crop-speed"><span class="speed-low">10%</span></td>
  <td><span class="biome-entry-label">Pozostałe</span></td>
</tr>
<tr id="szkarlatne-grzyby" class="alt">
  <td class="crop-name" rowspan="2">
    <img class="crop-icon" src="https://minecraft.wiki/images/Warped_Fungus_%28item%29_JE2_BE1.png" alt=""><span id="placzace-pnacza">Szkarłatne Grzyby <span class="translation">(Warped Fungus)</span></span><br>
    <img class="crop-icon" src="https://minecraft.wiki/images/Weeping_Vines_Plant_%28texture%29_JE1.png" alt=""><span id="spaczone-grzyby">Płaczące Pnącza <span class="translation">(Warped Vines)</span></span><br>
    <img class="crop-icon" src="https://minecraft.wiki/images/Crimson_Fungus_%28texture%29_JE1_BE1.png" alt=""><span id="spaczone-pnacza">Spaczone Grzyby <span class="translation">(Crimson Fungus)</span></span><br>
    <img class="crop-icon" src="https://minecraft.wiki/images/Twisting_Vines_Plant_%28texture%29_JE1_BE1.png" alt="">Spaczone Pnącza <span class="translation">(Crimson Vines)</span>
  </td>
  <td class="crop-speed"><span class="speed-100">100%</span></td>
  <td>
    <span class="biome-entry"><span class="biome-entry-label">Nether</span>(<span class="biome-entry-names">Crimson Forest, Warped Forest</span>)</span>
  </td>
</tr>
<tr class="alt">
  <td class="crop-speed"><span class="speed-low">0%</span></td>
  <td><span class="biome-entry-label">Pozostałe</span></td>
</tr>
<tr id="wodorosty">
  <td class="crop-name" rowspan="2"><img class="crop-icon" src="https://minecraft.wiki/images/Kelp_%28item%29_JE1_BE2.png" alt="">Wodorosty <span class="translation">(Kelp)</span></td>
  <td class="crop-speed"><span class="speed-100">100%</span></td>
  <td>
    <span class="biome-entry"><span class="biome-entry-label">Oceany</span>(<span class="biome-entry-names">Ocean, Deep Ocean, Lukewarm Ocean, Deep Lukewarm Ocean, Cold Ocean, Deep Cold Ocean</span>)</span>
  </td>
</tr>
<tr>
  <td class="crop-speed"><span class="speed-low">0%</span></td>
  <td><span class="biome-entry-label">Pozostałe</span></td>
</tr>
</tbody>
</table>
</div>