<style>
.feature-row {
    display: flex;
    gap: 0;
    overflow: hidden;
    min-height: 110px;
    margin-bottom: 8px;
}
.feature-row img {
    width: 220px !important;
    min-width: 220px !important;
    min-height: 110px !important;
    align-self: stretch;
    object-fit: cover;
    filter: grayscale(40%);
    opacity: 0.85;
    transition: 0.4s ease !important;
    border-radius: 0 !important;
    margin: 0 !important;
    display: block;
}
.feature-row:hover img {
    filter: grayscale(0%);
    opacity: 1;
}
.feature-row-body {
    padding: 12px 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3px;
}
.feature-row-body h5 {
    margin: 0;
    font-size: 1em;
    color: var(--heading-color);
}
.feature-row-body p {
    margin: 0;
    font-size: 0.9em;
    opacity: 0.8;
    line-height: 1.45;
}

@media (max-width: 540px) {
    .feature-row {
        flex-direction: column;
    }
    .feature-row img {
        width: 100% !important;
        min-width: unset !important;
        min-height: unset !important;
        height: 140px !important;
    }
}
</style>

# Inne
Mniejsze zmiany i usprawnienia, które nie potrzebują osobnej strony.

<br>

### Ogólne

<div class="feature-row panel">
  <img src="assets/img/inne/keep_inventory.webp">
  <div class="feature-row-body">
    <h5>Zachowywanie Ekwipunku</h5>
    <p>Po śmierci zachowane zostają przedmioty z paska szybkiego dostępu i założona zbroja. Cała reszta ekwipunku wypada na ziemię.</p>
  </div>
</div>

<div class="feature-row panel">
  <img src="assets/img/inne/campfire.webp">
  <div class="feature-row-body">
    <h5>Ognisko</h5>
    <p>Przebywanie w pobliżu ogniska powoli regeneruje punkty życia i odstrasza pobliskie moby.</p>
  </div>
</div>

<div class="feature-row panel">
  <img src="assets/img/inne/floaters.webp">
  <div class="feature-row-body">
    <h5>Obrażenia</h5>
    <p>Po uderzeniu stwora lub gracza, wyświetla się ilość zadanych obrażeń.</p>
  </div>
</div>

<div class="feature-row panel">
  <img src="assets/img/inne/chairs.webp">
  <div class="feature-row-body">
    <h5>Siedzenie</h5>
    <p>Schody mogą być używane jako krzesła. Aby usiąść, należy kliknąć na blok prawym przyciskiem myszy.</p>
  </div>
</div>

<div class="feature-row panel">
  <img src="assets/img/inne/sleep.webp">
  <div class="feature-row-body">
    <h5>Przesypianie Nocy</h5>
    <p>Do przespania nocy wymagane jest, aby tylko 1/3 graczy na serwerze była w łóżku.</p>
  </div>
</div>

<div class="feature-row panel">
  <img src="assets/img/inne/item.webp">
  <div class="feature-row-body">
    <h5>Linkowanie Przedmiotów</h5>
    <p>Używając frazy <strong>&lt;item&gt;</strong> można podlinkować przedmiot na czat.</p>
  </div>
</div>

<div class="feature-row panel">
  <img src="assets/img/inne/nametag.webp">
  <div class="feature-row-body">
    <h5>Kolorowanie Znaczników</h5>
    <p>Połączenie nazwanego znacznika z wybranym barwnikiem tworzy kolorowy tekst.</p>
  </div>
</div>

<div class="feature-row panel">
  <img src="assets/img/inne/armor_stand.webp">
  <div class="feature-row-body">
    <h5>Stojaki</h5>
    <p>Stojaki na zbroję mają ręce, do których można włożyć dowolny przedmiot.</p>
  </div>
</div>

<div class="feature-row panel">
  <img src="assets/img/inne/villager_trade_rebalance.webp">
  <div class="feature-row-body">
    <h5>Zbalansowany Handel</h5>
    <p>Włączono <strong><a href="https://minecraft.wiki/w/Villager_Trade_Rebalance">Villager Trade Rebalance</a></strong> i zablokowano możliwość zmiany ofert handlowych poprzez przestawianie stacji roboczych.</p>
  </div>
</div>

<div class="feature-row panel">
  <img src="assets/img/inne/day_night_cycle.webp">
  <div class="feature-row-body">
    <h5>Dłuższy Dzień</h5>
    <p>Długość dnia została zwiększona o dodatkowe 5 minut.</p>
  </div>
</div>


### Moby

<div class="feature-row panel">
  <img src="assets/img/inne/mob_heads.webp">
  <div class="feature-row-body">
    <h5>Kolekcjonowanie Główek</h5>
    <p>Zabijając moba, istnieje niewielka szansa na zdobycie jego głowy. Każde stworzenie i jego warianty mają unikalną głowę.</p>
  </div>
</div>

<div class="feature-row panel">
  <img src="assets/img/inne/wither.webp">
  <div class="feature-row-body">
    <h5>Wither</h5>
    <p>Wither może zostać przywołany tylko w netherze.</p>
  </div>
</div>

<div class="feature-row panel">
  <img src="assets/img/inne/phantomy.webp">
  <div class="feature-row-body">
    <h5>Phantomy</h5>
    <p>Phantomy mają mniej punktów życia przez co łatwiej się ich pozbyć.</p>
  </div>
</div>

</div>