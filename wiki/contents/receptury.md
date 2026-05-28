<style>
.recipe-tabs {
    margin: 0.5em 0 0.75em;
}
.tab-labels-wrap {
    position: relative;
    margin-bottom: 10px;
}
.tab-labels-wrap::after {
    content: '';
    position: absolute;
    top: 0; bottom: 0; right: 0;
    width: 24px;
    pointer-events: none;
    z-index: 1;
    background: linear-gradient(to left, var(--color-bg), transparent);
}
.tab-labels {
    display: flex;
    flex-wrap: nowrap;
    gap: 4px;
    overflow-x: auto;
    scrollbar-width: none;
    padding: 2px 4px;
}
.tab-labels::-webkit-scrollbar { display: none; }
.tab-labels button {
    padding: 4px 14px;
    border-radius: 6px;
    border: 1px solid var(--color-mono-3);
    background: var(--color-mono-1);
    color: var(--color-text);
    font-size: 0.9em;
    font-family: inherit;
    cursor: pointer;
    user-select: none;
    transition: background 0.15s, color 0.15s, border-color 0.15s;
    opacity: 0.45;
}
.tab-labels button:hover { filter: brightness(1.2); }
.tab-labels button[data-color="copper"]    { --mat: #b87333; }
.tab-labels button[data-color="iron"]      { --mat: #a8a8b0; }
.tab-labels button[data-color="gold"]      { --mat: #f0c030; }
.tab-labels button[data-color="diamond"]   { --mat: #4de8e8; }
.tab-labels button[data-color="netherite"] { --mat: #c4917f; }
.tab-labels button[data-color="enderite"]  { --mat: #e792e8; }
.tab-labels button[data-color] {
    border-color: color-mix(in srgb, var(--mat), transparent 50%);
    color: color-mix(in srgb, var(--mat), var(--color-text) 40%);
}
.tab-labels button.active {
    opacity: 1;
    background: color-mix(in srgb, var(--mat), transparent 75%);
    border-color: color-mix(in srgb, var(--mat), transparent 20%);
    color: color-mix(in srgb, var(--mat), white 40%);
}
.tab-panel {
    display: none;
    flex-wrap: wrap;
    align-items: flex-start;
}
.tab-panel.active { display: flex; }
.tab-panel img,
.recipe-img {
    height: 220px !important;
    max-width: 100% !important;
    width: auto !important;
    margin: 0 4px 4px 0 !important;
    image-rendering: crisp-edges;
}
.tab-panel img.upgrade-img {
    width: 408px !important;
    max-width: 100% !important;
    height: auto !important;
    image-rendering: pixelated;
    margin: 0 8px 8px 0 !important;
}
</style>

# Receptury
Część domyślnych receptur została zmodyfikowana na potrzeby balansu i dynamiki rozgrywki.

<br>

<div class="page">

### Wyposażenie :id=wyposazenie
W stole rzemieślniczym wytworzyć można tylko podstawowe narzędzia i zbroję.  
Wyższe poziomy można uzyskać poprzez ulepszenie istniejących przedmiotów w **Stole Kowalskim**, przy użyciu **Szablonów Ulepszeń**.

<br>

<img class="recipe-img" src="assets/img/crafting_recipes/smithing_table.png" alt="Stół Kowalski: 4x Deski, 2x Sztabka Żelaza" data-no-zoom>

#### Szablony Ulepszeń :id=szablony-ulepszen
Układ jest dowolny, a zamiast <strong>Łupkowego Bruku</strong> (Cobbled Deepslate) można też użyć <strong>Łupku</strong> (Deepslate).

<div class="recipe-tabs">
    <div class="tab-labels-wrap">
        <div class="tab-labels">
            <button data-color="copper">Miedź</button>
            <button data-color="iron">Żelazo</button>
            <button data-color="diamond">Diament</button>
            <button data-color="netherite">Netheryt</button>
            <button data-color="enderite">Enderyt</button>
        </div>
    </div>
    <div class="tab-panels">
        <div class="tab-panel"><img src="assets/img/crafting_recipes/copper_upgrade.png" alt="Miedziane Ulepszenie: 6x Deepslate, 3x Sztabka Miedzi" data-no-zoom></div>
        <div class="tab-panel"><img src="assets/img/crafting_recipes/iron_upgrade.png" alt="Żelazne Ulepszenie: 6x Deepslate, 3x Sztabka Żelaza" data-no-zoom></div>
        <div class="tab-panel"><img src="assets/img/crafting_recipes/diamond_upgrade.png" alt="Diamentowe Ulepszenie: 6x Deepslate, 3x Diament" data-no-zoom></div>
        <div class="tab-panel"><img src="assets/img/crafting_recipes/netherite_upgrade.png" alt="Netherytowe Ulepszenie: 6x Deepslate, 3x Sztabka Netherytu" data-no-zoom></div>
        <div class="tab-panel"><img src="assets/img/crafting_recipes/enderite_upgrade.png" alt="Enderytowe Ulepszenie: 6x Deepslate, 3x Sztabka Enderytu" data-no-zoom></div>
    </div>
</div>

#### Ulepszanie Wyposażenia :id=ulepszanie-wyposazenia
Ulepszone przedmioty nie tracą zaklęć ani innych parametrów.

<div class="recipe-tabs">
    <div class="tab-labels-wrap">
        <div class="tab-labels">
            <button data-color="copper">Miedź</button>
            <button data-color="iron">Żelazo</button>
            <button data-color="diamond">Diament</button>
            <button data-color="netherite">Netheryt</button>
            <button data-color="enderite">Enderyt</button>
        </div>
    </div>
    <div class="tab-panels">
        <div class="tab-panel"><img src="assets/img/equipment_upgrades/stone.png" class="upgrade-img" data-no-zoom></div>
        <div class="tab-panel"><img src="assets/img/equipment_upgrades/copper.png" class="upgrade-img" data-no-zoom></div>
        <div class="tab-panel"><img src="assets/img/equipment_upgrades/iron.png" class="upgrade-img" data-no-zoom></div>
        <div class="tab-panel"><img src="assets/img/equipment_upgrades/diamond.png" class="upgrade-img" data-no-zoom></div>
        <div class="tab-panel"><img src="assets/img/equipment_upgrades/netherite.png" class="upgrade-img" data-no-zoom></div>
    </div>
</div>

#### Ulepszanie Zbroi :id=ulepszanie-zbroi
Ulepszone przedmioty nie tracą zaklęć ani innych parametrów.

<div class="recipe-tabs">
    <div class="tab-labels-wrap">
        <div class="tab-labels">
            <button data-color="copper">Miedź</button>
            <button data-color="iron">Żelazo</button>
            <button data-color="diamond">Diament</button>
            <button data-color="netherite">Netheryt</button>
            <button data-color="enderite">Enderyt</button>
        </div>
    </div>
    <div class="tab-panels">
        <div class="tab-panel"><img src="assets/img/armor_upgrades/leather.png" class="upgrade-img" data-no-zoom></div>
        <div class="tab-panel">
            <img src="assets/img/armor_upgrades/copper.png" class="upgrade-img" data-no-zoom>
            <img src="assets/img/armor_upgrades/chainmail.png" class="upgrade-img" data-no-zoom>
        </div>
        <div class="tab-panel">
            <img src="assets/img/armor_upgrades/iron.png" class="upgrade-img" data-no-zoom>
            <img src="assets/img/armor_upgrades/gold.png" class="upgrade-img" data-no-zoom>
        </div>
        <div class="tab-panel"><img src="assets/img/armor_upgrades/diamond.png" class="upgrade-img" data-no-zoom></div>
        <div class="tab-panel"><img src="assets/img/armor_upgrades/netherite.png" class="upgrade-img" data-no-zoom></div>
    </div>
</div>

<hr>

### Zdobienie Narzędzi :id=zdobienie-narzedzi
Każde narzędzie można spersonalizować na 198 różnych sposobów.

<br>

<img src="assets/img/trims/tool_trims_1.png" class="upgrade-img" data-no-zoom>
<img src="assets/img/trims/tool_trims_2.png" class="upgrade-img" data-no-zoom>
<img src="assets/img/trims/tool_trims_3.png" class="upgrade-img" data-no-zoom>
<img src="assets/img/trims/tool_trims_4.png" class="upgrade-img" data-no-zoom>

<hr>

### Koszyk :id=koszyk
Jednorazowy przedmiot specjalny służący do podnoszenia stworzeń i przechowywania ich w formie przedmiotu.

<br>

<img class="recipe-img" src="assets/img/crafting_recipes/basket.png" alt="Stół Kowalski: 4x Deski, 2x Sztabka Żelaza" data-no-zoom>

<hr>

### Przetapianie :id=przetapianie
Przetapianie surowców oraz pożywienia w **Zwykłym Piecu** zostało dwukrotnie spowolnione.  
Korzystaj ze specjalistycznych stacji, aby zyskać na czasie i otrzymać więcej punktów doświadczenia.

<br>

<img class="recipe-img" src="assets/img/crafting_recipes/blast_furnace.png" alt="Stół Kowalski: 4x Deski, 2x Sztabka Żelaza" data-no-zoom>
<img class="recipe-img" src="assets/img/crafting_recipes/smoker.png" alt="Stół Kowalski: 4x Deski, 2x Sztabka Żelaza" data-no-zoom>

Przetapianie narzędzi i zbroi przyznaje dodatkowe przedmioty.

<div class="data-table-scroll"><div class="data-table-wrap panel">
    <table class="data-table">
        <thead>
            <tr><th>Przedmiot</th><th>Wynik</th></tr>
        </thead>
        <tbody>
            <tr><td class="mat">1x Miedziane Narzędzie<br>1x Miedziana Zbroja</td>     <td><strong>1x Sztabka Miedzi</strong> (Copper Ingot)</td></tr>
            <tr><td class="mat">1x Żelazne Narzędzie<br>1x Żelazna Zbroja</td>         <td><strong>1x Sztabka Żelaza</strong> (Iron Ingot)</td></tr>
            <tr><td class="mat">1x Złote Narzędzie<br>1x Złota Zbroja</td>             <td><strong>1x Sztabka Złota</strong> (Gold Ingot)</td></tr>
            <tr><td class="mat">1x Diamentowa Narzędzie<br>1x Diamentowa Zbroja</td>   <td><strong>1x Diament</strong> (Diamond)</td></tr>
            <tr><td class="mat">1x Netherytowe Narzędzie<br>1x Netherytowa Zbroja</td> <td><strong>1x Sztabka Netherytu</strong> (Netherite Ingot)</td></tr>
        </tbody>
    </table>
</div></div>

<hr>

### Kamień Szlifierski :id=kamien-szlifierski
Za pomocą **Kamienia Szlifierskiego** można przenieść lub usunąć zaklęcia z przedmiotów.

#### Przenoszenie Zaklęć
Zaklęcia z przedmiotu można przenieść na **Niezapisaną Książkę**.

<br>

<img src="assets/img/crafting_recipes/blank_book.png" class="recipe-img" data-no-zoom>
<img src="assets/img/grindstone_transfer.png" class="recipe-img" data-no-zoom>

Szansa na powodzenie wynosi **50%**, a operacja kosztuje 3 poziomy doświadczenia.


#### Usuwanie Zaklęć
Niechciane zaklęcia można usunąć poprzez połączenie ze sobą dwóch książek. Górny slot przeznaczony jest na książkę, którą chcemy zachować, natomiast dolny na książkę z zaklęciami, które mają zostać z niej usunięte.

<br>

<img src="assets/img/grindstone_subtract.png" class="recipe-img" data-no-zoom>

Szansa na powodzenie wynosi **50%**.

</div>

<script>
function initTabs(container) {
    const buttons = container.querySelectorAll('.tab-labels button');
    const panels = container.querySelectorAll('.tab-panel');
    buttons.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            panels.forEach(p => p.classList.remove('active'));
            btn.classList.add('active');
            panels[i].classList.add('active');
        });
    });
    buttons[0].click();
}
document.querySelectorAll('.recipe-tabs').forEach(initTabs);
</script>