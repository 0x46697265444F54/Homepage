<style>
.farm-table-wrap {
    overflow-x: auto;
    overflow-y: visible;
    margin-bottom: 1.75em;
    container-type: inline-size;
}
.farm-table {
    width: 100%;
    table-layout: auto;
    border-collapse: collapse;
    font-size: 0.88em;
    min-width: 420px;
    margin: 0 !important;
    display: table;
    --farm-row-height: 2.4em;
    --farm-alt-bg: color-mix(in srgb, var(--color-mono-3), transparent 65%);
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
.farm-table thead th:first-child,
.farm-table td.crop-name {
    border-right: 1px solid var(--color-mono-3);
}
.farm-table td.crop-name {
    padding-block: 0;
    font-weight: bold;
    color: var(--heading-color);
    white-space: nowrap;
}
.farm-table .crop-name-item {
    display: block;
    line-height: var(--farm-row-height);
}
.farm-table td.crop-speed {
    width: 1%;
    white-space: nowrap;
}
.farm-table-wrap .farm-table tbody tr:nth-child(n) {
    background-color: transparent;
    border: none;
}
.farm-table tbody tr {
    height: var(--farm-row-height);
}
.farm-table tbody tr.alt td {
    background-color: var(--farm-alt-bg);
}
.crop-icon {
    image-rendering: pixelated;
    width: 22px;
    height: 22px;
    vertical-align: middle;
    margin-right: 0.5em;
    margin-bottom: 2px;
}
.hint {
    cursor: help;
}
.biome-entry-label {
    color: var(--heading-color);
    font-weight: normal;
}
.biome-entry-label.fallback {
    color: var(--color-mono-5);
}
.biome-entry-label.hint,
.biome-entry-label.hint .bi-question-circle {
    transition: color 0.15s;
}
.biome-entry-label.hint .bi-question-circle {
    margin-left: 0.4em;
    font-size: 0.85em;
    color: var(--color-mono-5);
}
.biome-entry-label.hint:hover {
    color: #FFFFFF;
}
.biome-entry-label.hint:hover .bi-question-circle {
    color: var(--heading-color);
}
.speed-meter {
    display: inline-flex;
    align-items: center;
    min-height: 1.6em;
    vertical-align: middle;
}
.speed-max { color: #259646; }
.speed-mid { color: #af882c; }
.speed-low { color: #c36760; }
.speed-track {
    width: 76px;
    height: 5px;
    border-radius: 3px;
    background-color: var(--color-mono-3);
}
.speed-fill {
    display: block;
    height: 100%;
    border-radius: inherit;
    background-color: currentColor;
}

@container (max-width: 419px) {
    .farm-table {
        display: block;
        min-width: 0;
    }
    .farm-table thead {
        display: none !important;
    }
    .farm-table tbody,
    .farm-table tbody td {
        display: block;
    }
    .farm-table tbody tr {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        height: auto;
    }
    .farm-table td.crop-name {
        flex: 0 0 100%;
        padding: 0.55em 0.75em 0.3em;
        border-right: none;
        white-space: normal;
    }
    .farm-table .crop-name-item {
        display: inline-block;
        margin-right: 0.9em;
        line-height: 1.7;
        white-space: nowrap;
    }
    .farm-table td.crop-speed {
        width: auto;
    }
    .farm-table tbody td:last-child {
        flex: 1 1 auto;
    }
    .farm-table-wrap .farm-table tbody tr.alt {
        background-color: var(--farm-alt-bg);
    }
    .farm-table tbody tr.alt td {
        background-color: transparent;
    }
}
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

<div class="farm-table-wrap panel">
<table class="farm-table">
<thead><tr><th>Uprawa</th><th colspan="2">Wzrost</th></tr></thead>
<tbody></tbody>
</table>
</div>
