<style>
.nav-card h5, .nav-card p { white-space: normal; line-height: 1.4; }

.map-card {
    height: 480px;
    overflow: hidden;
    cursor: pointer;
    border: 1px solid var(--color-mono-4);
    display: grid;
    place-items: center;
}

.map-card:not(.loaded) {
    transition: 0.2s ease;
    h5, i {
        transition: 0.2s ease;
    }
}
.map-card:not(.loaded):hover {
    inset: 0;
    transition: 0.2s ease;
    box-shadow: inset 0 0 0 1px var(--color-mono-5);
    background-color: var(--color-mono-2);

    h5, i {
        transition: 0.2s ease;
        color: var(--color-mono-9);
    }
}

.map-card-overlay {
    display: grid;
    justify-items: center;
}

.map-card-overlay i {
    font-size: 6em;
    color: var(--color-mono-4);
}
.map-card-overlay h5 {
    margin: 0;
    color: var(--color-mono-5);
}
.map-card-overlay p {
    margin: 0;
    color: var(--color-mono-5);
    font-size: 0.85em;
}
.map-card.loaded {
    cursor: default;
}
.map-card.loaded .map-card-overlay {
    display: none;
}
.markdown-section .map-card iframe {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 6px;
    display: block;
    margin-block: 0;
    color-scheme: dark;
}
</style>

<span></span> <!-- EMPTY TAG TO INCREASE SPACE BETWEEN NAVBAR AND CONTENT -->

# Nawigacja
Nawigacja po mapie może być nieco trudniejsza niż w trybie jednoosobowym czy na większości innych serwerów. Ukryliśmy część informacji na ekranie debugowania oraz dodaliśmy nowe funkcje dla przedmiotów, które istnieją w grze od samego początku, ale dotychczas oferowały zbyt mało możliwości.

<sup>**WAŻNE:** Szybka teleportacja za pomocą popularnych komend jest **WYŁĄCZONA**. Więcej informacji znajdziesz tutaj: **[Teleportacja](teleportacja)**</sup>

<br/>

<div class="container-row no-underline">

  <div class="card nav-card">
    <img src="assets/img/compass.webp">
    <h5>Kompas</h5>
    <p>Kompas wyświetla aktualne koordynaty na górze ekranu. Warto mieć go zawsze przy sobie.</p>
  </div>

  <div class="card nav-card">
    <img src="assets/img/map.webp">
    <h5>Mapa</h5>
    <p>Mapa wyświetla aktualny biom na górze ekranu. Przydatne podczas szukania miejsca na farmę.</p>
  </div>

  <div class="card nav-card">
    <img src="assets/img/clock.webp">
    <h5>Zegar</h5>
    <p>Zegar wyświetla na górze ekranu aktualną godzinę na serwerze.</p>
  </div>

</div>

<br/>

### Interaktywna Mapa
Interaktywna mapa pokazuje aktualny świat serwera wraz z podziałem na obszary zajęte przez graczy.  
Jeżeli trzymasz w ręce kompas, Twoja lokalizacja jest widoczna na mapie.

<div class="map-card panel" id="server-map-card">
  <div class="map-card-overlay">
    <i class="bi bi-globe-americas"></i>
    <h5>Kliknij, aby załadować mapę serwera...</h5>
  </div>
</div>
<sup>Pełnoekranowa wersja dostępna tutaj: <strong><a href="https://firedot.pl/mapa">https://firedot.pl/mapa</a></strong></sup>

<script>
function initMapCard(card) {
    card.addEventListener('click', () => {
        if (card.classList.contains('loaded') == true)
            return;
        card.classList.add('loaded');
        const iframe = document.createElement('iframe');
        iframe.src = 'https://map.firedot.pl';
        iframe.loading = 'lazy';
        card.appendChild(iframe);
    });
}
document.querySelectorAll('#server-map-card').forEach(initMapCard);
</script>
