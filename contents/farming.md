<style>
.farm-cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(300px, 100%), 1fr));
    gap: 12px;
    margin-top: 1em;
    margin-bottom: 1.75em;
}
.farm-card {
    min-width: 0;
    display: grid;
    grid-row: span 2;
    grid-template-rows: subgrid;
    gap: 0;
    overflow: hidden;
    transition: border-color 0.2s;
}
.farm-card:hover { border-color: var(--color-mono-4); }
.farm-card .crop-names {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.5em 1em;
    margin: 0;
    padding: 14px 10px;
    font-size: 1.05em;
    line-height: 1.3;
    font-weight: bold;
    color: var(--heading-color);
}
.crop-name-item {
    display: flex;
    align-items: center;
    gap: 8px;
}
.crop-title { display: flex; flex-direction: column; }
.farm-card .crop-title .translation {
    margin: 2px 0 0;
    font-family: var(--font-family-mono);
    font-size: 0.8em;
}
.crop-slot {
    flex: none;
    display: grid;
    place-items: center;
    padding: 3px;
    border-radius: 4px;
    background-color: var(--table-stripe-bg);
    box-shadow: inset 0 0 0 1px var(--color-mono-3);
}
.crop-icon {
    width: 32px;
    height: 32px;
    margin: 0 !important;
    image-rendering: pixelated;
}
.crop-icon.smooth { image-rendering: auto; }
.farm-tiers {
    display: grid;
    gap: 0.6em;
    align-content: start;
    padding: 12px 10px 14px;
    border-top: 1px solid var(--color-mono-3);
    background-color: color-mix(in srgb, var(--color-mono-2), transparent 50%);
    font-size: 0.85em;
}
.farm-tier {
    display: grid;
    grid-template-columns: minmax(max-content, 1fr) minmax(0, 96px) 4ch;
    align-items: center;
    gap: 0.75em;
}
.farm-tier .biome-entry-label { white-space: nowrap; }
.farm-tier.best .biome-entry-label {
    color: var(--heading-color);
    font-weight: bold;
}
.farm-tier.fallback .biome-entry-label { color: var(--color-mono-5); }
.farm-speed { text-align: right; font-variant-numeric: tabular-nums; }
.speed-max { color: var(--color-success); }
.speed-mid { color: var(--color-warning); }
.speed-low { color: var(--color-danger); }
.speed-track {
    display: block;
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
.farm-card .farm-tier.hint { cursor: help; }
.biome-entry-label .bi-question-circle {
    margin-left: 0.4em;
    font-size: 0.85em;
    color: var(--color-mono-5);
}
.farm-card .farm-tier.hint:focus-visible {
    outline: 2px solid var(--color-mono-4);
    outline-offset: 3px;
}
</style>

# Rolnictwo
Rolnictwo na serwerze zostało zmodyfikowane na potrzeby balansu i dynamiki rozgrywki. Prędkość wzrostu upraw jest teraz zależna od biomu, na którym się znajdują. Ma to na celu zachęcenie graczy do eksploracji świata w poszukiwaniu nowych biomów i zakładania na nich farm, a także ograniczenie wpływu automatycznych farm na gospodarkę serwera.
- Prędkość wzrostu upraw jest teraz zależna od biomu, na którym się znajdują.
- Niektóre rodzaje upraw są unikalne dla poszczególnych biomów (np. **Bambus**) i na innych biomach rosną z bardzo niską prędkością.
- Pełny kompostownik w pobliżu upraw zwiększa prędkość ich wzrostu o 20%. Efekt się nie stackuje, a łączna prędkość wzrostu nie może przekroczyć 100%.

> [!NOTE]
> Informacje na temat upraw są też dostępne pod komendą **/farm** na naszym serwerze.

<div class="farm-cards" aria-label="Prędkości wzrostu upraw" aria-live="polite">
<p>Ładowanie upraw...</p>
</div>
