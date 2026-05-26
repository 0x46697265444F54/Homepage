<style>
.page p {
    margin-top: 0;
}

/* Tab widget */
.recipe-tabs {
    margin: 0.5em 0 0.75em;
}
.recipe-tabs input[type="radio"] {
    display: none;
}
.recipe-tabs .tab-labels-wrap {
    position: relative;
    margin-bottom: 10px;
}
.recipe-tabs .tab-labels-wrap::after {
    content: '';
    position: absolute;
    top: 0; bottom: 0;
    width: 24px;
    pointer-events: none;
    z-index: 1;
    right: 0;
    background: linear-gradient(to left, var(--color-bg), transparent);
}
.recipe-tabs .tab-labels {
    display: flex;
    flex-wrap: nowrap;
    gap: 4px;
    overflow-x: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
    padding: 2px 4px;
}
.recipe-tabs .tab-labels::-webkit-scrollbar {
    display: none;
}
.recipe-tabs .tab-labels label {
    padding: 4px 14px;
    border-radius: 6px;
    border: 1px solid var(--color-mono-3);
    background: var(--color-mono-1);
    color: var(--color-text);
    font-size: 0.9em;
    cursor: pointer;
    user-select: none;
    transition: background 0.15s, color 0.15s, border-color 0.15s;
}
.recipe-tabs .tab-labels label:hover {
    filter: brightness(1.2);
}

/* Crafting recipe images (408×264) */
.recipe-tabs .tab-panel img,
.recipe-img {
    height: 220px !important;
    max-width: 100% !important;
    width: auto !important;
    margin: 0 4px 4px 0 !important;
    image-rendering: crisp-edges;
}
/* Pixel-art upgrade images (102×30) — 4× scale, fluid on narrow screens */
.recipe-tabs .tab-panel img.upgrade-img {
    width: 408px !important;
    max-width: 100% !important;
    height: auto !important;
    image-rendering: pixelated;
    margin: 0 8px 8px 0 !important;
}
.recipe-tabs .tab-panel {
    display: none;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 0;
}

/* Material button colors */
.recipe-tabs .tab-labels label { --mat: var(--color-mono-4); }
.recipe-tabs .tab-labels label[data-color="copper"]    { --mat: #b87333; }
.recipe-tabs .tab-labels label[data-color="iron"]      { --mat: #a8a8b0; }
.recipe-tabs .tab-labels label[data-color="gold"]      { --mat: #f0c030; }
.recipe-tabs .tab-labels label[data-color="diamond"]   { --mat: #4de8e8; }
.recipe-tabs .tab-labels label[data-color="netherite"] { --mat: #c4917f; }
.recipe-tabs .tab-labels label[data-color="enderite"]  { --mat: #e792e8; }

.recipe-tabs .tab-labels label[data-color] {
    opacity: 0.45;
}

/* Active state — per radio ID */
/* --- Template tabs --- */
.recipe-tabs #tmpl-copper:checked  ~ .tab-labels-wrap .tab-labels label[for="tmpl-copper"],
.recipe-tabs #tmpl-iron:checked    ~ .tab-labels-wrap .tab-labels label[for="tmpl-iron"],
.recipe-tabs #tmpl-diamond:checked ~ .tab-labels-wrap .tab-labels label[for="tmpl-diamond"],
.recipe-tabs #tmpl-netherite:checked ~ .tab-labels-wrap .tab-labels label[for="tmpl-netherite"],
.recipe-tabs #tmpl-enderite:checked  ~ .tab-labels-wrap .tab-labels label[for="tmpl-enderite"],
/* --- Tool upgrade tabs --- */
.recipe-tabs #eq-miedz:checked    ~ .tab-labels-wrap .tab-labels label[for="eq-miedz"],
.recipe-tabs #eq-zelazo:checked   ~ .tab-labels-wrap .tab-labels label[for="eq-zelazo"],
.recipe-tabs #eq-diament:checked  ~ .tab-labels-wrap .tab-labels label[for="eq-diament"],
.recipe-tabs #eq-netheryt:checked ~ .tab-labels-wrap .tab-labels label[for="eq-netheryt"],
.recipe-tabs #eq-enderyt:checked  ~ .tab-labels-wrap .tab-labels label[for="eq-enderyt"],
/* --- Armor upgrade tabs --- */
.recipe-tabs #ar-miedz:checked    ~ .tab-labels-wrap .tab-labels label[for="ar-miedz"],
.recipe-tabs #ar-zelazo:checked   ~ .tab-labels-wrap .tab-labels label[for="ar-zelazo"],
.recipe-tabs #ar-diament:checked  ~ .tab-labels-wrap .tab-labels label[for="ar-diament"],
.recipe-tabs #ar-netheryt:checked ~ .tab-labels-wrap .tab-labels label[for="ar-netheryt"],
.recipe-tabs #ar-enderyt:checked  ~ .tab-labels-wrap .tab-labels label[for="ar-enderyt"] {
    background: color-mix(in srgb, var(--mat), transparent 75%);
    border-color: color-mix(in srgb, var(--mat), transparent 20%);
    color: color-mix(in srgb, var(--mat), white 40%);
    opacity: 1;
}

/* Visible panels */
.recipe-tabs #tmpl-copper:checked  ~ .tab-panels #tmpl-panel-copper,
.recipe-tabs #tmpl-iron:checked    ~ .tab-panels #tmpl-panel-iron,
.recipe-tabs #tmpl-diamond:checked ~ .tab-panels #tmpl-panel-diamond,
.recipe-tabs #tmpl-netherite:checked ~ .tab-panels #tmpl-panel-netherite,
.recipe-tabs #tmpl-enderite:checked  ~ .tab-panels #tmpl-panel-enderite,
.recipe-tabs #eq-miedz:checked    ~ .tab-panels #eq-panel-miedz,
.recipe-tabs #eq-zelazo:checked   ~ .tab-panels #eq-panel-zelazo,
.recipe-tabs #eq-diament:checked  ~ .tab-panels #eq-panel-diament,
.recipe-tabs #eq-netheryt:checked ~ .tab-panels #eq-panel-netheryt,
.recipe-tabs #eq-enderyt:checked  ~ .tab-panels #eq-panel-enderyt,
.recipe-tabs #ar-miedz:checked    ~ .tab-panels #ar-panel-miedz,
.recipe-tabs #ar-zelazo:checked   ~ .tab-panels #ar-panel-zelazo,
.recipe-tabs #ar-diament:checked  ~ .tab-panels #ar-panel-diament,
.recipe-tabs #ar-netheryt:checked ~ .tab-panels #ar-panel-netheryt,
.recipe-tabs #ar-enderyt:checked  ~ .tab-panels #ar-panel-enderyt {
    display: flex;
}
</style>

<!-- PAGE BEGINS HERE -->

# Receptury
Część domyślnych receptur została zmodyfikowana na potrzeby balansu i dynamiki rozgrywki.

<br>

<div class="page">

### Wyposażenie :id=wyposazenie
W stole rzemieślniczym wytworzyć można tylko podstawowe narzędzia i zbroję.  
Wyższe poziomy można uzyskać poprzez ulepszenie istniejących przedmiotów w **Stole Kowalskim**, przy użyciu **Szablonów Ulepszeń**.

<img class="recipe-img" src="assets/img/crafting_recipes/smithing_table.png" alt="Stół Kowalski: 4x Deski, 2x Sztabka Żelaza" data-no-zoom>

### Szablony Ulepszeń :id=szablony-ulepszen
Układ jest dowolny, a zamiast <strong>Łupkowego Bruku</strong> (Cobbled Deepslate) można też użyć <strong>Łupku</strong> (Deepslate).

<div class="recipe-tabs">
    <input type="radio" name="tmpl-tabs" id="tmpl-copper" checked>
    <input type="radio" name="tmpl-tabs" id="tmpl-iron">
    <input type="radio" name="tmpl-tabs" id="tmpl-diamond">
    <input type="radio" name="tmpl-tabs" id="tmpl-netherite">
    <input type="radio" name="tmpl-tabs" id="tmpl-enderite">
    <div class="tab-labels-wrap"><div class="tab-labels">
        <label for="tmpl-copper" data-color="copper">Miedź</label>
        <label for="tmpl-iron" data-color="iron">Żelazo</label>
        <label for="tmpl-diamond" data-color="diamond">Diament</label>
        <label for="tmpl-netherite" data-color="netherite">Netheryt</label>
        <label for="tmpl-enderite" data-color="enderite">Enderyt</label>
    </div></div>
    <div class="tab-panels">
        <div class="tab-panel" id="tmpl-panel-copper">
            <img src="assets/img/crafting_recipes/copper_upgrade.png" alt="Miedziane Ulepszenie: 6x Deepslate, 3x Sztabka Miedzi" data-no-zoom>
        </div>
        <div class="tab-panel" id="tmpl-panel-iron">
            <img src="assets/img/crafting_recipes/iron_upgrade.png" alt="Żelazne Ulepszenie: 6x Deepslate, 3x Sztabka Żelaza" data-no-zoom>
        </div>
        <div class="tab-panel" id="tmpl-panel-diamond">
            <img src="assets/img/crafting_recipes/diamond_upgrade.png" alt="Diamentowe Ulepszenie: 6x Deepslate, 3x Diament" data-no-zoom>
        </div>
        <div class="tab-panel" id="tmpl-panel-netherite">
            <img src="assets/img/crafting_recipes/netherite_upgrade.png" alt="Netherytowe Ulepszenie: 6x Deepslate, 3x Sztabka Netherytu" data-no-zoom>
        </div>
        <div class="tab-panel" id="tmpl-panel-enderite">
            <img src="assets/img/crafting_recipes/enderite_upgrade.png" alt="Enderytowe Ulepszenie: 6x Deepslate, 3x Sztabka Enderytu" data-no-zoom>
        </div>
    </div>
</div>

### Ulepszanie Wyposażenia :id=ulepszanie-wyposazenia
Ulepszone przedmioty nie tracą zaklęć ani innych parametrów.

<div class="recipe-tabs">
    <input type="radio" name="eq-tabs" id="eq-miedz" checked>
    <input type="radio" name="eq-tabs" id="eq-zelazo">
    <input type="radio" name="eq-tabs" id="eq-diament">
    <input type="radio" name="eq-tabs" id="eq-netheryt">
    <input type="radio" name="eq-tabs" id="eq-enderyt">
    <div class="tab-labels-wrap"><div class="tab-labels">
        <label for="eq-miedz" data-color="copper">Miedź</label>
        <label for="eq-zelazo" data-color="iron">Żelazo</label>
        <label for="eq-diament" data-color="diamond">Diament</label>
        <label for="eq-netheryt" data-color="netherite">Netheryt</label>
        <label for="eq-enderyt" data-color="enderite">Enderyt</label>
    </div></div>
    <div class="tab-panels">
        <div class="tab-panel" id="eq-panel-miedz"><img src="assets/img/equipment_upgrades/stone.png" class="upgrade-img" data-no-zoom></div>
        <div class="tab-panel" id="eq-panel-zelazo"><img src="assets/img/equipment_upgrades/copper.png" class="upgrade-img" data-no-zoom></div>
        <div class="tab-panel" id="eq-panel-diament"><img src="assets/img/equipment_upgrades/iron.png" class="upgrade-img" data-no-zoom></div>
        <div class="tab-panel" id="eq-panel-netheryt"><img src="assets/img/equipment_upgrades/diamond.png" class="upgrade-img" data-no-zoom></div>
        <div class="tab-panel" id="eq-panel-enderyt"><img src="assets/img/equipment_upgrades/netherite.png" class="upgrade-img" data-no-zoom></div>
    </div>
</div>

### Ulepszanie Zbroi :id=ulepszanie-zbroi
Ulepszone przedmioty nie tracą zaklęć ani innych parametrów.

<div class="recipe-tabs">
    <input type="radio" name="ar-tabs" id="ar-miedz" checked>
    <input type="radio" name="ar-tabs" id="ar-zelazo">
    <input type="radio" name="ar-tabs" id="ar-diament">
    <input type="radio" name="ar-tabs" id="ar-netheryt">
    <input type="radio" name="ar-tabs" id="ar-enderyt">
    <div class="tab-labels-wrap"><div class="tab-labels">
        <label for="ar-miedz" data-color="copper">Miedź</label>
        <label for="ar-zelazo" data-color="iron">Żelazo</label>
        <label for="ar-diament" data-color="diamond">Diament</label>
        <label for="ar-netheryt" data-color="netherite">Netheryt</label>
        <label for="ar-enderyt" data-color="enderite">Enderyt</label>
    </div></div>
    <div class="tab-panels">
        <div class="tab-panel" id="ar-panel-miedz">
            <img src="assets/img/armor_upgrades/leather.png" class="upgrade-img" data-no-zoom>
        </div>
        <div class="tab-panel" id="ar-panel-zelazo">
            <img src="assets/img/armor_upgrades/copper.png" class="upgrade-img" data-no-zoom>
            <img src="assets/img/armor_upgrades/chainmail.png" class="upgrade-img" data-no-zoom>
        </div>
        <div class="tab-panel" id="ar-panel-diament">
            <img src="assets/img/armor_upgrades/iron.png" class="upgrade-img" data-no-zoom>
            <img src="assets/img/armor_upgrades/gold.png" class="upgrade-img" data-no-zoom>
        </div>
        <div class="tab-panel" id="ar-panel-netheryt">
            <img src="assets/img/armor_upgrades/diamond.png" class="upgrade-img" data-no-zoom>
        </div>
        <div class="tab-panel" id="ar-panel-enderyt">
            <img src="assets/img/armor_upgrades/netherite.png" class="upgrade-img" data-no-zoom>
        </div>
    </div>
</div>

<hr>

### Przetapianie
Przetapianie rud i pożywienia w **Zwykłym Piecu** jest **2x Wolniejsze**. Korzystaj ze specjalistycznych stacji, aby zyskać na czasie i otrzymać więcej **Punktów Doświadczenia**.

</div>