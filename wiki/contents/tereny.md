<style>
.page p, .page li {
    margin-top: 0.25em;
    margin-bottom: 0.25em;
}

.recipe-img {
    height: 220px !important;
    width: auto !important;
    max-width: 100% !important;
    image-rendering: crisp-edges;
    margin: 0 4px 4px 0 !important;
}

/* Upgrade table — consistent with rolnictwo */
.upgrade-table-wrap {
    overflow-x: auto;
    border-radius: 8px;
    border: 1px solid var(--color-mono-3);
    background-color: var(--color-mono-1);
    box-shadow: 0 0 8px 4px rgba(0,0,0,0.15);
    margin: 0.5em 0;
    display: inline-block;
}
.upgrade-table {
    width: auto;
    border-collapse: collapse;
    font-size: 0.88em;
    margin: 0 !important;
}
.upgrade-table th {
    text-align: left;
    padding: 0.4em 0.75em;
    border-bottom: 1px solid var(--color-mono-3);
    background-color: var(--color-mono-2);
    color: var(--color-mono-5);
    font-weight: normal;
    white-space: nowrap;
}
.upgrade-table th:not(:last-child) {
    border-right: 1px solid var(--color-mono-3);
}
.upgrade-table td {
    padding: 0.4em 0.75em;
    vertical-align: middle;
    white-space: nowrap;
}
.upgrade-table td:not(:last-child) {
    border-right: 1px solid var(--color-mono-3);
}
.upgrade-table tbody tr:nth-child(even) td {
    background-color: color-mix(in srgb, var(--color-mono-3), transparent 65%);
}
.upgrade-table td.mat {
    font-weight: bold;
    color: var(--heading-color);
}
</style>

<span></span> <!-- EMPTY TAG TO INCREASE SPACE BETWEEN NAVBAR AND CONTENT -->

# Chronione Tereny
Chronione tereny to podstawa każdego publicznego serwera Minecraft. Pozwalają one ochronić budowle i przedmioty graczy przed niepożądanymi gośćmi. Nasza implementacja jest możliwie prosta i zarazem bogata w możliwości zarządzania.

<div class="page">

Chroniony teren można utworzyć poprzez postawienie **Bloku Terenu**.  
Podstawowy teren chroni obszar o wielkości **31 × 31** bloków, a każde ulepszenie powiększa go, aż do **81 × 81**.

<br>
<img class="recipe-img" src="assets/img/crafting_recipes/claim_block.png" alt="Blok Terenu: 8x Węgiel, 1x Czerwony Proszek" data-no-zoom>

### Limity
Domyślnie każdy z graczy może utworzyć jeden chroniony obszar, lecz limit ten można zwiększyć poprzez system ulepszeń.  
- Za pomocą komendy **/upgrades** można otworzyć menu ulepszeń.
- Zwiększenie limitu o jeden dodatkowy teren kosztuje **$75,000**.
- Maksymalny limit nie może przekraczać **25**.


### Panel Zarządzania
Panel zarządzania można otworzyć poprzez interakcję z blokiem terenu lub za pomocą komendy **/claims**.
#### Funkcje
- Zarządzanie dostępnymi magnetytami i terenami, w tym możliwość teleportacji.
- Zarządzanie członkami mającymi dostęp do terenu.
- Modyfikacja ustawień dotyczących środowiska i interakcji z terenem przez innych graczy.
- Zwiększenie poziomu terenu, co wpływa na jego rozmiar.

### Ulepszanie
Każdy teren może zostać ulepszony pięć razy. Wykopanie bloku zwraca jego odpowiednik zachowując obecny poziom ulepszenia.

<div class="upgrade-table-wrap">
    <table class="upgrade-table">
        <thead>
            <tr><th>Poziom</th><th>Koszt</th><th>Rozmiar</th></tr>
        </thead>
        <tbody>
            <tr><td class="mat">Węgiel</td>   <td>-</td>   <td>41 × 41</td></tr>
            <tr><td class="mat">Żelazo</td>   <td><strong>16x Sztabka Żelaza</strong> (Iron Ingot)</td>   <td>31 × 31</td></tr>
            <tr><td class="mat">Złoto</td>    <td><strong>16x Sztabka Złota</strong> (Gold Ingot)</td>    <td>51 × 51</td></tr>
            <tr><td class="mat">Diament</td>  <td><strong>16x Diament</strong> (Diamond)</td>          <td>61 × 61</td></tr>
            <tr><td class="mat">Szmaragd</td> <td><strong>16x Szmaragd</strong> (Emerald)</td>         <td>71 × 71</td></tr>
            <tr><td class="mat">Netheryt</td> <td><strong>2x Sztabka Netherytu</strong> (Netherite Ingot)</td> <td>81 × 81</td></tr>
        </tbody>
    </table>
</div>

</div>