<style>
.showcase {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin: 0.5em 0 1em;
}
.showcase-item {
    display: flex;
    overflow: hidden;
    min-height: 160px;
}
.showcase-thumb {
    width: 300px;
    min-width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    background-color: var(--color-mono-2);
    position: relative;
    overflow: hidden;
}
.showcase-thumb::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.35) 100%);
    pointer-events: none;
}
.medium-zoom-image--opened {
    image-rendering: pixelated;
}

.showcase-thumb img {
    image-rendering: pixelated;
    max-width: 160px !important;
    max-height: 120px !important;
    width: auto !important;
    height: auto !important;
    margin: 0 !important;
    position: relative;
    z-index: 1;
    filter: drop-shadow(0 2px 8px rgba(0,0,0,0.5));
}
.showcase-body {
    flex: 1;
    padding: 20px 24px;
    background-color: var(--color-mono-1);
    border-left: 1px solid var(--color-mono-3);
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 6px;
}
.showcase-body h4 {
    margin: 0;
    font-size: 1.1em;
    color: var(--heading-color);
}
.showcase-body p {
    margin: 0;
    font-size: 0.9em;
    line-height: 1.55;
    opacity: 0.85;
}
.showcase-body sup {
    margin-top: 2px;
}
.basket-recipe {
    width: 100% !important;
    height: auto !important;
    image-rendering: crisp-edges;
    margin: 8px 0 0 !important;
    border-radius: 6px;
    display: block;
}

.showcase-item .showcase-body .recipe-img {
    height: auto !important;
    max-height: 110px !important;
    width: auto !important;
    max-width: 100% !important;
    image-rendering: crisp-edges;
    margin: 6px 0 0 !important;
    border-radius: 6px;
}

/* Accent colors on the thumb panel */
.showcase-item.accent-fish     > .showcase-thumb { background-color: #0d2233 !important; }
.showcase-item.accent-basket   > .showcase-thumb { background-color: #261a0a !important; }
.showcase-item.accent-hammer   > .showcase-thumb { background-color: #1a1a1a !important; }
.showcase-item.accent-enderite > .showcase-thumb { background-color: #150d2e !important; }

@media (max-width: 600px) {
    .showcase-item {
        flex-direction: column;
    }
    .showcase-thumb {
        width: 100%;
        min-width: unset;
        min-height: 130px;
    }
}
</style>

# Przedmioty
Na serwerze dostępnych do zdobycia jest kilka nowych przedmiotów. Część z nich można napotkać przypadkiem podczas normalnej rozgrywki, jednak niektóre przedmioty specjalne uzyskać można tylko w określony sposób.

<br/>

<div class="page">
<div class="showcase">

<div class="showcase-item panel accent-fish">
  <div class="showcase-thumb">
    <img src="assets/img/fish.png">
  </div>
  <div class="showcase-body">
    <h4>Ryby</h4>
    <p>Kilka nowych gatunków ryb możliwych do złowienia za pomocą wędki.</p>
    <sup>Część tekstur pochodzi z modyfikacji <strong><a href="https://github.com/Macck209/Fishing101">Fishing101</a></strong>.</sup>
  </div>
</div>

<div class="showcase-item panel accent-basket">
  <div class="showcase-thumb" style="flex-direction:column;gap:12px">
    <img src="assets/img/basket.png">
    <img class="basket-recipe" src="assets/img/crafting_recipes/basket.png">
  </div>
  <div class="showcase-body">
    <h4>Koszyk</h4>
    <p>Jednorazowy przedmiot specjalny służący do podnoszenia stworzeń i przechowywania ich w formie przedmiotu. Szczególnie przydatny do transportowania większej ilości mobów.</p>
    <sup>Część tekstur pochodzi z paczki <strong><a href="https://modrinth.com/resourcepack/mob-crates">Mob Crates</a></strong>.</sup>
  </div>
</div>

<div class="showcase-item panel accent-hammer">
  <div class="showcase-thumb">
    <img src="assets/img/hammer.png">
  </div>
  <div class="showcase-body">
    <h4>Młotek</h4>
    <p>Trzymany w ręce zwiększa zasięg stawiania i niszczenia bloków. Szczególnie przydatny podczas budowania na wysokości i w trudno dostępnych miejscach. Można go zakupić u <strong>Handlarza</strong> na terenie spawnu.</p>
  </div>
</div>

<div class="showcase-item panel accent-enderite">
  <div class="showcase-thumb">
    <img src="assets/img/enderite.png">
  </div>
  <div class="showcase-body">
    <h4>Enderyt</h4>
    <p>Nowy surowiec pozyskiwany poprzez zaliczanie wyzwań w <strong>Wymiarze Kresu</strong>. Stanowi jeden ze składników szablonu pozwalającego na ulepszenie netherytowych narzędzi i zbroi do kolejnego poziomu.</p>
  </div>
</div>

</div>
</div>