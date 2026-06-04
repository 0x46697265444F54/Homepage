# Teleportacja
Teleportacja na naszym serwerze opiera się na systemie fizycznych waypointów i przedmiotach specjalnych. Gracze nie mają dostępu do komend pozwalających na szybką podróż. Nasza implementacja jest w dużej mierze inspirowana modyfikacjami do Minecrafta i innymi grami tego gatunku.

<br />

<div class="page">

### Zwoje
Zwoje teleportacji to przedmioty jednorazowe, których celem jest ułatwienie teleportacji, gdy w pobliżu nie ma dostępu do magnetytu.

<div class="showcase">

<div class="showcase-item panel" style="--accent:#1a1f2e">
  <div class="showcase-thumb" style="background-color:#322152">
    <img src="assets/img/crafting_recipes/scroll_of_return.png">
  </div>
  <div class="showcase-body">
    <h4>Zwój Powrotu <span class="translation">(Scroll of Return)</span></h4>
    <p>Umożliwia teleportację na <strong>spawn</strong> z dowolnego miejsca na mapie. Po użyciu nakłada <strong>5-minutowy cooldown</strong> na siebie oraz indywidualny cooldown na inne zwoje.</p>
    <p>Receptura (<strong>3 szt.</strong>): <strong>8x Papier</strong>, <strong>1x Odłamek Ametystu</strong></p>
  </div>
</div>

<div class="showcase-item panel" style="--accent:#1f1a2e">
  <div class="showcase-thumb" style="background-color:#053031">
    <img src="assets/img/crafting_recipes/scroll_of_recovery.png">
  </div>
  <div class="showcase-body">
    <h4>Zwój Odzyskania <span class="translation">(Scroll of Recovery)</span></h4>
    <p>Umożliwia teleportację do miejsca <strong>ostatniej śmierci</strong> z dowolnego miejsca na mapie. Po użyciu nakłada <strong>15-minutowy cooldown</strong> na siebie oraz indywidualny cooldown na inne zwoje.</p>
    <p>Receptura (<strong>1 szt.</strong>): <strong>8x Papier</strong>, <strong>1x Odłamek Echa</strong></p>
  </div>
</div>

</div>

Aby zbalansować dostępność tych przedmiotów na serwerze, zmniejszona została liczba **Odłamków Ametystu** i **Odłamków Echa**, jakie można znaleźć w skrzyniach w **Pradawnym Mieście** (Ancient City).

<br>

### Magnetyt
Magnetyt to blok, który po postawieniu tworzy prywatny punkt teleportacyjny. Za jego pomocą można przenieść się na obszar spawnu, inny posiadany magnetyt lub autoryzowany teren.
<div class="showcase">
<div class="showcase-item panel" style="background-color:var(--color-mono-1)">
  <div class="showcase-thumb" style="background-color:#2E2E35">
    <img src="assets/img/crafting_recipes/lodestone.png">
  </div>
  <div class="showcase-body">
    <h4>Magnetyt <span class="translation">(Lodestone)</span></h4>
    <p>Jeżeli nie stoi w chronionym miejscu, może zostać zniszczony przez innego gracza. Po wykopaniu ulega zniszczeniu.</p>
    <p>Receptura: <strong>8x Deepslate</strong> lub <strong>Cobbled Deepslate</strong>, <strong>1x Odłamek Ametystu</strong></p>
    <p></p>
  </div>
</div>
</div>

Domyślnie każdy z graczy może utworzyć jeden blok magnetytu obszar, lecz limit ten można zwiększyć poprzez system ulepszeń.
- Za pomocą komendy **/upgrades** można otworzyć menu ulepszeń.
- Zwiększenie limitu o jeden dodatkowy magnetyt kosztuje **$25,000**.
- Maksymalny limit nie może przekraczać **25**.
<br>

### Panel Zarządzania
Panel zarządzania można otworzyć poprzez interakcję z blokiem magnetytu. Obecnie udostępnia on poniższe funkcje:

- Teleportacja na obszar spawnu, posiadany lub współdzielony teren, lub inny magnetyt.  
  <sup>Dodatkowo, magnetyt znajdujący się na spawnie umożliwia teleportację w losowe miejsce na mapie.</sup>
- Zmiana nazwy wybranego magnetytu lub terenu.
- Przekazanie wybranego magnetytu dowolnego graczowi.
- Usunięcie wybranego magnetytu.

</div>