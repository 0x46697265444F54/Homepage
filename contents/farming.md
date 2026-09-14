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
    --farm-gap: 8px;
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
    padding: var(--farm-gap);
    font-weight: bold;
    color: var(--heading-color);
    white-space: nowrap;
}
.farm-table .crop-names {
    display: flex;
    flex-direction: column;
    gap: var(--farm-gap);
}
.farm-table .crop-name-item {
    display: flex;
    align-items: center;
    gap: var(--farm-gap);
}
.farm-table td.crop-speed {
    width: 1%;
    white-space: nowrap;
}
.farm-table-wrap .farm-table tbody tr:nth-child(n) {
    background-color: transparent;
    border: none;
}
.farm-table tbody td {
    padding-block: 0.25em;
}
.farm-table tbody tr.alt td {
    background-color: var(--table-stripe-bg);
}
.crop-slot {
    flex: none;
    display: grid;
    place-items: center;
    padding: 4px;
    border-radius: 4px;
    background-color: var(--table-stripe-bg);
    box-shadow: inset 0 0 0 1px var(--color-mono-3);
}
.farm-table tbody tr.alt .crop-slot {
    background-color: var(--color-mono-1);
}
.crop-icon {
    width: 32px;
    height: 32px;
    margin: 0 !important;
    image-rendering: pixelated;
}
.crop-icon.smooth {
    image-rendering: auto;
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
    color: var(--strong-color);
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
.speed-max { color: var(--color-success); }
.speed-mid { color: var(--color-warning); }
.speed-low { color: var(--color-danger); }
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
    }
    .farm-table td.crop-name {
        flex: 0 0 100%;
        padding-bottom: 0;
        border-right: none;
        white-space: normal;
    }
    .farm-table .crop-names {
        flex-direction: row;
        flex-wrap: wrap;
    }
    .farm-table .crop-name-item {
        white-space: nowrap;
    }
    .farm-table td.crop-speed {
        width: auto;
    }
    .farm-table tbody td:last-child {
        flex: 1 1 auto;
    }
    .farm-table-wrap .farm-table tbody tr.alt {
        background-color: var(--table-stripe-bg);
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

> [!NOTE]
> Informacje na temat upraw są też dostępne pod komendą **/farm** na naszym serwerze.

</div>

<br>

<div class="farm-table-wrap panel">
<table class="farm-table">
<thead><tr><th>Uprawa</th><th colspan="2">Wzrost</th></tr></thead>
<tbody></tbody>
</table>
</div>
