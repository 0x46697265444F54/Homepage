<style>
.translation {
    margin-left: 0.25em;
    font-weight: normal;
}
.enchant-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 0.75em;
    margin-top: 1em;
}
.enchant-card {
    border-radius: 8px;
    border: 1px solid var(--color-mono-3);
    background-color: var(--color-mono-1);
    box-shadow: 0 0 8px 4px rgba(0,0,0,0.15);
    padding: 0.75em 0.85em 0.75em;
    display: flex;
    flex-direction: column;
    gap: 0.4em;
}
.enchant-card .ec-title {
    font-weight: bold;
    color: var(--heading-color);
    font-size: 1.05em;
    margin: 0;
    display: flex;
    align-items: center;
    gap: 0.3em;
}
.enchant-card .ec-title .translation {
    font-size: 0.9em;
    color: var(--color-mono-5);
    font-weight: normal;
    flex-shrink: 1;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.ec-level-badge {
    margin-left: auto;
    flex-shrink: 0;
    align-self: center;
    font-weight: normal;
    font-size: 0.78em;
    color: var(--color-mono-5);
    background-color: var(--color-mono-2);
    border: 1px solid var(--color-mono-3);
    border-radius: 4px;
    padding: 0.1em 0.45em;
    line-height: 1.4;
    white-space: nowrap;
}
.enchant-card .ec-desc {
    font-size: 0.9em;
    margin: 0;
    color: var(--color-text);
    padding-bottom: 0.25em;
}
.ec-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.85em;
    margin: 0 !important;
    border: none !important;
}
.ec-table tr + tr > td {
    border-top: 1px solid var(--color-mono-2);
}
.ec-table td, .ec-table th {
    border-left: none !important;
    border-right: none !important;
    border-bottom: none !important;
    padding: 0.28em 0;
    vertical-align: middle;
    color: var(--color-text);
}
.ec-table td.ec-label {
    color: var(--color-mono-5);
    white-space: nowrap;
    padding-right: 0.6em;
    width: 1%;
}
.ec-table td.ec-label::after {
    content: ":";
}
.ec-table td strong {
    color: var(--heading-color);
    font-family: 'Ubuntu Mono', monospace;
}
.ec-icons-inline {
    display: flex;
    flex-wrap: wrap;
    gap: 0.3em;
    align-items: center;
}
.item-icon {
    image-rendering: auto;
    height: 20px;
    width: auto;
    vertical-align: -4px;
}
.source-tag {
    display: inline-block;
    font-size: 0.9em;
    padding: 0.05em 0.4em;
    border-radius: 4px;
    background-color: var(--color-mono-2);
    margin-right: 0.2em;
}
.source-tag.st-zaklinanie  { color: #c9a227; background-color: rgba(201, 162,  39, 0.15); }
.source-tag.st-lowienie    { color: #4a9edd; background-color: rgba( 74, 158, 221, 0.15); }
.source-tag.st-eksploracja { color: #4caf6e; background-color: rgba( 76, 175, 110, 0.15); }
.source-tag.st-skarbiec    { color: #b06adb; background-color: rgba(176, 106, 219, 0.15); }
</style>

# Zaklęcia
Na serwerze dostępne są nowe, unikalne zaklęcia na przedmioty, których zadaniem jest ułatwienie rozgrywki na wielu płaszczyznach. Większość enchantów można uzyskać za pomocą stołu do zaklęć, ale zdobycie niektórych z nich wymaga trochę więcej wysiłku.

<div class="callout note">

Informacje na temat zaklęć są też dostępne pod komendą **/enchantments** na naszym serwerze.

</div>


### Broń

<div class="enchant-grid">

<div class="enchant-card">
<p class="ec-title">Znawca Stworów <span class="translation">(Scholar of Mobs)</span><span class="ec-level-badge">Maks. III</span></p>
<p class="ec-desc">Zabite moby dają więcej punktów doświadczenia.</p>
<table class="ec-table">
<tr><td class="ec-label">Przeznaczenie</td><td><span class="ec-icons-inline"><img class="item-icon" src="https://minecraft.wiki/images/Iron_Sword_JE2_BE2.png" alt="Miecz"><img class="item-icon" src="https://minecraft.wiki/images/Iron_Spear_JE1_BE1.png" alt="Włócznia"><img class="item-icon" src="https://minecraft.wiki/images/Iron_Axe_JE5_BE2.png" alt="Siekiera"><img class="item-icon" src="https://minecraft.wiki/images/Trident_%28item%29_JE2_BE1.png" alt="Trójząb"><img class="item-icon" src="https://minecraft.wiki/images/Mace_JE1_BE1.png" alt="Buzdygan"></span></td></tr>
<tr><td class="ec-label">Wyklucza</td><td>Grabież, Szczęście, Jedwabny Dotyk, Znawca Bloków</td></tr>
<tr><td class="ec-label">Zdobycie</td><td><span class="source-tag st-zaklinanie">Zaklinanie</span><span class="source-tag st-lowienie">Łowienie</span><span class="source-tag st-eksploracja">Eksploracja</span></td></tr>
</table>
</div>

<div class="enchant-card">
<p class="ec-title">Zasięg <span class="translation">(Reach)</span><span class="ec-level-badge">Maks. III</span></p>
<p class="ec-desc">Zwiększa zasięg o <strong>0.25</strong> bloku za każdy poziom.</p>
<table class="ec-table">
<tr><td class="ec-label">Przeznaczenie</td><td><span class="ec-icons-inline"><img class="item-icon" src="https://minecraft.wiki/images/Iron_Sword_JE2_BE2.png" alt="Miecz"><img class="item-icon" src="https://minecraft.wiki/images/Iron_Spear_JE1_BE1.png" alt="Włócznia"><img class="item-icon" src="https://minecraft.wiki/images/Iron_Axe_JE5_BE2.png" alt="Siekiera"></span></td></tr>
<tr><td class="ec-label">Wyklucza</td><td>Szerokie Ostrze, Poręczność, Krytyczne Uderzenie</td></tr>
<tr><td class="ec-label">Zdobycie</td><td><span class="source-tag st-zaklinanie">Zaklinanie</span><span class="source-tag st-lowienie">Łowienie</span><span class="source-tag st-eksploracja">Eksploracja</span></td></tr>
</table>
</div>

<div class="enchant-card">
<p class="ec-title">Poręczność <span class="translation">(Swift Strike)</span><span class="ec-level-badge">Maks. III</span></p>
<p class="ec-desc">Zwiększa szybkość ataku o <strong>12.5%</strong> za każdy poziom.</p>
<table class="ec-table">
<tr><td class="ec-label">Przeznaczenie</td><td><span class="ec-icons-inline"><img class="item-icon" src="https://minecraft.wiki/images/Iron_Sword_JE2_BE2.png" alt="Miecz"><img class="item-icon" src="https://minecraft.wiki/images/Iron_Spear_JE1_BE1.png" alt="Włócznia"><img class="item-icon" src="https://minecraft.wiki/images/Iron_Axe_JE5_BE2.png" alt="Siekiera"></span></td></tr>
<tr><td class="ec-label">Wyklucza</td><td>Szerokie Ostrze, Zasięg, Krytyczne Uderzenie</td></tr>
<tr><td class="ec-label">Zdobycie</td><td><span class="source-tag st-zaklinanie">Zaklinanie</span><span class="source-tag st-lowienie">Łowienie</span><span class="source-tag st-eksploracja">Eksploracja</span></td></tr>
</table>
</div>

<div class="enchant-card">
<p class="ec-title">Krytyczne Uderzenie <span class="translation">(Critical Strike)</span><span class="ec-level-badge">Maks. III</span></p>
<p class="ec-desc">Zwiększa obrażenia krytyczne o <strong>7.5%</strong> za każdy poziom.</p>
<table class="ec-table">
<tr><td class="ec-label">Przeznaczenie</td><td><span class="ec-icons-inline"><img class="item-icon" src="https://minecraft.wiki/images/Iron_Sword_JE2_BE2.png" alt="Miecz"><img class="item-icon" src="https://minecraft.wiki/images/Iron_Spear_JE1_BE1.png" alt="Włócznia"><img class="item-icon" src="https://minecraft.wiki/images/Iron_Axe_JE5_BE2.png" alt="Siekiera"></span></td></tr>
<tr><td class="ec-label">Wyklucza</td><td>Szerokie Ostrze, Zasięg, Poręczność</td></tr>
<tr><td class="ec-label">Zdobycie</td><td><span class="source-tag st-zaklinanie">Zaklinanie</span><span class="source-tag st-lowienie">Łowienie</span><span class="source-tag st-eksploracja">Eksploracja</span></td></tr>
</table>
</div>

<div class="enchant-card">
<p class="ec-title">Zatrucie <span class="translation">(Poison Aspect)</span><span class="ec-level-badge">Maks. II</span></p>
<p class="ec-desc">Uderzona ofiara otrzymuje efekt trucizny.</p>
<table class="ec-table">
<tr><td class="ec-label">Przeznaczenie</td><td><span class="ec-icons-inline"><img class="item-icon" src="https://minecraft.wiki/images/Iron_Sword_JE2_BE2.png" alt="Miecz"><img class="item-icon" src="https://minecraft.wiki/images/Iron_Spear_JE1_BE1.png" alt="Włócznia"><img class="item-icon" src="https://minecraft.wiki/images/Iron_Axe_JE5_BE2.png" alt="Siekiera"></span></td></tr>
<tr><td class="ec-label">Wyklucza</td><td>Zaklęty Ogień, Spowolnienie, Osłabienie, Obumieranie</td></tr>
<tr><td class="ec-label">Zdobycie</td><td><span class="source-tag st-zaklinanie">Zaklinanie</span><span class="source-tag st-lowienie">Łowienie</span><span class="source-tag st-eksploracja">Eksploracja</span></td></tr>
</table>
</div>

<div class="enchant-card">
<p class="ec-title">Spowolnienie <span class="translation">(Slowness Aspect)</span><span class="ec-level-badge">Maks. II</span></p>
<p class="ec-desc">Uderzona ofiara otrzymuje efekt spowolnienia.</p>
<table class="ec-table">
<tr><td class="ec-label">Przeznaczenie</td><td><span class="ec-icons-inline"><img class="item-icon" src="https://minecraft.wiki/images/Iron_Sword_JE2_BE2.png" alt="Miecz"><img class="item-icon" src="https://minecraft.wiki/images/Iron_Spear_JE1_BE1.png" alt="Włócznia"><img class="item-icon" src="https://minecraft.wiki/images/Iron_Axe_JE5_BE2.png" alt="Siekiera"></span></td></tr>
<tr><td class="ec-label">Wyklucza</td><td>Zaklęty Ogień, Zatrucie, Osłabienie, Obumieranie</td></tr>
<tr><td class="ec-label">Zdobycie</td><td><span class="source-tag st-zaklinanie">Zaklinanie</span><span class="source-tag st-lowienie">Łowienie</span><span class="source-tag st-eksploracja">Eksploracja</span></td></tr>
</table>
</div>

<div class="enchant-card">
<p class="ec-title">Osłabienie <span class="translation">(Weakness Aspect)</span><span class="ec-level-badge">Maks. II</span></p>
<p class="ec-desc">Uderzona ofiara otrzymuje efekt osłabienia.</p>
<table class="ec-table">
<tr><td class="ec-label">Przeznaczenie</td><td><span class="ec-icons-inline"><img class="item-icon" src="https://minecraft.wiki/images/Iron_Sword_JE2_BE2.png" alt="Miecz"><img class="item-icon" src="https://minecraft.wiki/images/Iron_Spear_JE1_BE1.png" alt="Włócznia"><img class="item-icon" src="https://minecraft.wiki/images/Iron_Axe_JE5_BE2.png" alt="Siekiera"></span></td></tr>
<tr><td class="ec-label">Wyklucza</td><td>Zaklęty Ogień, Zatrucie, Spowolnienie, Obumieranie</td></tr>
<tr><td class="ec-label">Zdobycie</td><td><span class="source-tag st-zaklinanie">Zaklinanie</span><span class="source-tag st-lowienie">Łowienie</span><span class="source-tag st-eksploracja">Eksploracja</span></td></tr>
</table>
</div>

<div class="enchant-card">
<p class="ec-title">Obumieranie <span class="translation">(Wither Aspect)</span><span class="ec-level-badge">Maks. II</span></p>
<p class="ec-desc">Uderzona ofiara otrzymuje efekt obumierania.</p>
<table class="ec-table">
<tr><td class="ec-label">Przeznaczenie</td><td><span class="ec-icons-inline"><img class="item-icon" src="https://minecraft.wiki/images/Iron_Sword_JE2_BE2.png" alt="Miecz"><img class="item-icon" src="https://minecraft.wiki/images/Iron_Spear_JE1_BE1.png" alt="Włócznia"><img class="item-icon" src="https://minecraft.wiki/images/Iron_Axe_JE5_BE2.png" alt="Siekiera"></span></td></tr>
<tr><td class="ec-label">Wyklucza</td><td>Zaklęty Ogień, Zatrucie, Spowolnienie, Osłabienie</td></tr>
<tr><td class="ec-label">Zdobycie</td><td><span class="source-tag st-zaklinanie">Zaklinanie</span><span class="source-tag st-lowienie">Łowienie</span><span class="source-tag st-eksploracja">Eksploracja</span></td></tr>
</table>
</div>

<div class="enchant-card">
<p class="ec-title">Oszczędność <span class="translation">(Replenish)</span><span class="ec-level-badge">Maks. I</span></p>
<p class="ec-desc">Co druga wystrzelona strzała nie zostaje utracona.</p>
<table class="ec-table">
<tr><td class="ec-label">Przeznaczenie</td><td><span class="ec-icons-inline"><img class="item-icon" src="https://minecraft.wiki/images/Bow_JE2_BE1.png" alt="Łuk"><img class="item-icon" src="https://minecraft.wiki/images/Crossbow.png" alt="Kusza"></span></td></tr>
<tr><td class="ec-label">Wyklucza</td><td>Nieskończoność</td></tr>
<tr><td class="ec-label">Zdobycie</td><td><span class="source-tag st-zaklinanie">Zaklinanie</span><span class="source-tag st-lowienie">Łowienie</span><span class="source-tag st-eksploracja">Eksploracja</span></td></tr>
</table>
</div>

</div>

### Zbroja

<div class="enchant-grid">

<div class="enchant-card">
<p class="ec-title">Żywotność <span class="translation">(Rejuvenation)</span><span class="ec-level-badge">Maks. III</span></p>
<p class="ec-desc">Zwiększa maks. ilość punktów życia.</p>
<table class="ec-table">
<tr><td class="ec-label">Przeznaczenie</td><td><span class="ec-icons-inline"><img class="item-icon" src="https://minecraft.wiki/images/Shield_JE2_BE1.png" alt="Tarcza"></span></td></tr>
<tr><td class="ec-label">Zdobycie</td><td><span class="source-tag st-lowienie">Łowienie</span><span class="source-tag st-eksploracja">Eksploracja</span></td></tr>
</table>
</div>

<div class="enchant-card">
<p class="ec-title">Tarcza Soniczna <span class="translation">(Sonic Shield)</span><span class="ec-level-badge">Maks. I</span></p>
<p class="ec-desc">Blokowanie chroni przed falą dźwiękową Wardena.</p>
<table class="ec-table">
<tr><td class="ec-label">Przeznaczenie</td><td><span class="ec-icons-inline"><img class="item-icon" src="https://minecraft.wiki/images/Shield_JE2_BE1.png" alt="Tarcza"></span></td></tr>
<tr><td class="ec-label">Zdobycie</td><td><span class="source-tag st-lowienie">Łowienie</span><span class="source-tag st-eksploracja">Eksploracja</span></td></tr>
</table>
</div>

<div class="enchant-card">
<p class="ec-title">Grawitacja <span class="translation">(Gravity)</span><span class="ec-level-badge">Maks. I</span></p>
<p class="ec-desc">Pozwala na wyższy, ale wolniejszy i lżejszy skok.</p>
<table class="ec-table">
<tr><td class="ec-label">Przeznaczenie</td><td><span class="ec-icons-inline"><img class="item-icon" src="https://minecraft.wiki/images/Iron_Boots_%28item%29_JE2_BE2.png" alt="Buty"></span></td></tr>
<tr><td class="ec-label">Wyklucza</td><td>Powolne Opadanie</td></tr>
<tr><td class="ec-label">Zdobycie</td><td><span class="source-tag st-lowienie">Łowienie</span><span class="source-tag st-eksploracja">Eksploracja</span><span class="source-tag st-skarbiec">Skarbiec</span></td></tr>
</table>
</div>

<div class="enchant-card">
<p class="ec-title">Ognisty Piechur <span class="translation">(Scorch Walker)</span><span class="ec-level-badge">Maks. II</span></p>
<p class="ec-desc">Zamienia powierzchnię lawy w magmę.</p>
<table class="ec-table">
<tr><td class="ec-label">Przeznaczenie</td><td><span class="ec-icons-inline"><img class="item-icon" src="https://minecraft.wiki/images/Iron_Boots_%28item%29_JE2_BE2.png" alt="Buty"></span></td></tr>
<tr><td class="ec-label">Wyklucza</td><td>Mroźny Piechur, Głębinowy Wędrowiec</td></tr>
<tr><td class="ec-label">Zdobycie</td><td><span class="source-tag st-lowienie">Łowienie</span><span class="source-tag st-eksploracja">Eksploracja</span></td></tr>
</table>
</div>

<div class="enchant-card">
<p class="ec-title">Sonic<span class="ec-level-badge">Maks. III</span></p>
<p class="ec-desc">Zwiększa prędkość poruszania się o <strong>7.5%</strong> za każdy poziom.</p>
<table class="ec-table">
<tr><td class="ec-label">Przeznaczenie</td><td><span class="ec-icons-inline"><img class="item-icon" src="https://minecraft.wiki/images/Iron_Boots_%28item%29_JE2_BE2.png" alt="Buty"></span></td></tr>
<tr><td class="ec-label">Wyklucza</td><td>Prędkość Dusz, Głębinowy Wędrowiec, Grawitacja</td></tr>
<tr><td class="ec-label">Zdobycie</td><td><span class="source-tag st-zaklinanie">Zaklinanie</span><span class="source-tag st-lowienie">Łowienie</span><span class="source-tag st-eksploracja">Eksploracja</span></td></tr>
</table>
</div>

<div class="enchant-card">
<p class="ec-title">Wędrowiec <span class="translation">(Stride)</span><span class="ec-level-badge">Maks. I</span></p>
<p class="ec-desc">Pozwala wchodzić po pełnych blokach jak po schodach.</p>
<table class="ec-table">
<tr><td class="ec-label">Przeznaczenie</td><td><span class="ec-icons-inline"><img class="item-icon" src="https://minecraft.wiki/images/Iron_Leggings_%28item%29_JE2_BE2.png" alt="Nogawice"></span></td></tr>
<tr><td class="ec-label">Zdobycie</td><td><span class="source-tag st-zaklinanie">Zaklinanie</span><span class="source-tag st-lowienie">Łowienie</span><span class="source-tag st-eksploracja">Eksploracja</span></td></tr>
</table>
</div>

</div>

### Narzędzia

<div class="enchant-grid">

<div class="enchant-card">
<p class="ec-title">Magnes <span class="translation">(Magnet)</span><span class="ec-level-badge">Maks. I</span></p>
<p class="ec-desc">Zdobyte surowce wpadają bezpośrednio do ekwipunku.</p>
<table class="ec-table">
<tr><td class="ec-label">Przeznaczenie</td><td><span class="ec-icons-inline"><img class="item-icon" src="https://minecraft.wiki/images/Iron_Pickaxe_JE3_BE2.png" alt="Kilof"><img class="item-icon" src="https://minecraft.wiki/images/Iron_Hoe_JE2_BE2.png" alt="Motyka"><img class="item-icon" src="https://minecraft.wiki/images/Iron_Sword_JE2_BE2.png" alt="Miecz"><img class="item-icon" src="https://minecraft.wiki/images/Iron_Spear_JE1_BE1.png" alt="Włócznia"><img class="item-icon" src="https://minecraft.wiki/images/Mace_JE1_BE1.png" alt="Buzdygan"><img class="item-icon" src="https://minecraft.wiki/images/Trident_%28item%29_JE2_BE1.png" alt="Trójząb"><img class="item-icon" src="https://minecraft.wiki/images/Bow_JE2_BE1.png" alt="Łuk"><img class="item-icon" src="https://minecraft.wiki/images/Crossbow.png" alt="Kusza"></span></td></tr>
<tr><td class="ec-label">Wyklucza</td><td>Jedwabny Dotyk</td></tr>
<tr><td class="ec-label">Zdobycie</td><td><span class="source-tag st-zaklinanie">Zaklinanie</span><span class="source-tag st-lowienie">Łowienie</span><span class="source-tag st-eksploracja">Eksploracja</span></td></tr>
</table>
</div>

<div class="enchant-card">
<p class="ec-title">Znawca Bloków <span class="translation">(Scholar of Blocks)</span><span class="ec-level-badge">Maks. III</span></p>
<p class="ec-desc">Wykopane bloki dają więcej punktów doświadczenia.</p>
<table class="ec-table">
<tr><td class="ec-label">Przeznaczenie</td><td><span class="ec-icons-inline"><img class="item-icon" src="https://minecraft.wiki/images/Iron_Pickaxe_JE3_BE2.png" alt="Kilof"><img class="item-icon" src="https://minecraft.wiki/images/Iron_Shovel_JE3_BE2.png" alt="Łopata"><img class="item-icon" src="https://minecraft.wiki/images/Iron_Hoe_JE2_BE2.png" alt="Motyka"></span></td></tr>
<tr><td class="ec-label">Wyklucza</td><td>Grabież, Szczęście, Jedwabny Dotyk, Znawca Stworów</td></tr>
<tr><td class="ec-label">Zdobycie</td><td><span class="source-tag st-zaklinanie">Zaklinanie</span><span class="source-tag st-lowienie">Łowienie</span><span class="source-tag st-eksploracja">Eksploracja</span></td></tr>
</table>
</div>

<div class="enchant-card">
<p class="ec-title">Ogrodnik <span class="translation">(Gardener)</span><span class="ec-level-badge">Maks. I</span></p>
<p class="ec-desc">Zebrane plony zostają ponownie zasadzone.</p>
<table class="ec-table">
<tr><td class="ec-label">Przeznaczenie</td><td><span class="ec-icons-inline"><img class="item-icon" src="https://minecraft.wiki/images/Iron_Hoe_JE2_BE2.png" alt="Motyka"></span></td></tr>
<tr><td class="ec-label">Zdobycie</td><td><span class="source-tag st-zaklinanie">Zaklinanie</span><span class="source-tag st-lowienie">Łowienie</span><span class="source-tag st-eksploracja">Eksploracja</span></td></tr>
</table>
</div>

<div class="enchant-card">
<p class="ec-title">Wabik <span class="translation">(Bait)</span><span class="ec-level-badge">Maks. I</span></p>
<p class="ec-desc">Szansa na złowienie kilku przedmiotów za jednym razem.</p>
<table class="ec-table">
<tr><td class="ec-label">Przeznaczenie</td><td><span class="ec-icons-inline"><img class="item-icon" src="https://minecraft.wiki/images/Fishing_Rod_JE2_BE2.png" alt="Wędka"></span></td></tr>
<tr><td class="ec-label">Zdobycie</td><td><span class="source-tag st-zaklinanie">Zaklinanie</span><span class="source-tag st-lowienie">Łowienie</span><span class="source-tag st-eksploracja">Eksploracja</span></td></tr>
</table>
</div>

<div class="enchant-card">
<p class="ec-title">Kołowrotek <span class="translation">(Reel)</span><span class="ec-level-badge">Maks. I</span></p>
<p class="ec-desc">Automatycznie wyciąga przedmiot z wody po jego złowieniu.</p>
<table class="ec-table">
<tr><td class="ec-label">Przeznaczenie</td><td><span class="ec-icons-inline"><img class="item-icon" src="https://minecraft.wiki/images/Fishing_Rod_JE2_BE2.png" alt="Wędka"></span></td></tr>
<tr><td class="ec-label">Zdobycie</td><td><span class="source-tag st-zaklinanie">Zaklinanie</span><span class="source-tag st-lowienie">Łowienie</span><span class="source-tag st-eksploracja">Eksploracja</span></td></tr>
</table>
</div>

</div>