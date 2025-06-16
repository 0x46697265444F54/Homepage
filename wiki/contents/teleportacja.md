<style>
.page {
    p, ul, ol {
        margin-top: 0.25em;
        margin-bottom: 0.25em;
    }
}
.scroll-recipes {
    max-width: 49% !important;
    padding: 1em 0.5em 0 0.5em;
}
</style>

# Teleportacja
Teleportacja na naszym serwerze bazuje na **systemie fizycznych waypointów** i przedmiotach specjalnych, takich jak zwoje. Gracze **nie mają dostępu** do komend typu **/spawn**, **/home** czy **/tpa** ponieważ uważamy, że taka forma przemieszczania się jest **przestarzała**, **nieintuicyjna** i **psuje wrażenia z rozgrywki**. Nasza implementacja jest w dużej mierze inspirowana **modyfikacjami** do Minecrafta i **innymi grami** tego gatunku.

<br />

<div class="page">

### Zwoje
Zwoje teleportacji to przedmioty jednorazowe, których celem jest ułatwienie teleportacji gdy w pobliżu nie ma dostępu do magnetytu. Wyróżniamy następujące rodzaje zwojów:

<br>

- **Zwój Powrotu** (Scroll of Return) -- Umożliwia teleportację na spawn z dowolnego miejsca na mapie.
  - Przedmiot jest jednorazowy i po użyciu nakłada **5-minutowy cooldown** na siebie oraz **indywidualny cooldown** na inne zwoje.
  - Można go stworzyć (**3 szt.**) za pomocą receptury: **8x Papier**, **1x Odłamek Ametystu**

- **Zwój Odzyskania** (Scroll of Recovery) -- Umożliwia teleportację do miejsca ostatniej śmierci, z dowolnego miejsca na mapie.
  - Przedmiot jest jednorazowy i po użyciu nakłada **15-minutowy cooldown** na siebie oraz **indywidualny cooldown** na inne zwoje.
  - Można go stworzyć (**1 szt.**) za pomocą receptury: **8x Papier**, **1x Odłamek Echa**

![Zwoj Powrotu: 8x Paper, 1x Amethyst Shard](assets/img/crafting_recipes/scroll_of_return.png ":no-zoom :class=scroll-recipes")
![Zwój Odzyskania: 8x Paper, 1x Echo Shard](assets/img/crafting_recipes/scroll_of_recovery.png ":no-zoom :class=scroll-recipes")  
<sup>**Objaśnienie:** Pierwsza receptura przedstawia **Zwój Powrotu**, druga natomiast **Zwój Odzyskania**. Układ przedmiotów **nie jest** przypadkowy.

<br>

Aby zbalansować dostępność tych przedmiotów na serwerze, **zmniejszona** została liczba **Odłamków Ametystu** i **Odłamków Echa** jakie można znaleźć w skrzyniach w **Pradawnym Mieście** (Ancient City). Dodatkowo, **Odłamek Echa** można zdobyć również z niewielką szansą podczas zbierania **Odłamków Ametystu**.

### Magnetyt
Postawiony Magnetyt to nic innego jak **fizyczny punkt**, za którego pomocą możemy się **teleportać** na **obszar spawnu**, **posiadany** lub **współdzielony teren**, lub **inny należący do nas magnetyt**. Ponadto, jeżeli nie stoi w chronionym miejscu, może zostać **zniszczony przez innego gracza**. Nie można go też przestawić, bowiem po wykopaniu ulega zniszczeniu.

<br />

![Magnetyt: 8x Deepslate|Cobbled Deepslate, 1x Amethyst Shard](assets/img/crafting_recipes/lodestone.png ":no-zoom")  
<sup>**Objaśnienie:** Receptura składa się z: **8x Deepslate** (Łupek) lub **8x Cobbled Deepslate** (Łupkowy Bruk), oraz 1x **Amethyst Shard** (Odłamek Ametystu).</sup>

<br />

Domyślnie każdy z graczy może mieć aktywny jeden blok magnetytu. Zwiększyć ten limit można poprzez zakup ulepszeń u handlarza na spawnie.

<sup>**Tip:** Każdy **Blok Terenu** ma wbudowany **Magnetyt**, co umożliwia na zapisanie jeszcze większej liczby lokalizacji.

### Panel Zarządzania
Panel zarządzania można otworzyć poprzez **interakcję** z blokiem magnetytu. Obecnie udostępnia on poniższe funkcje:

- Teleportacja na obszar spawnu, posiadany lub współdzielony teren, lub inny magnetyt.  
  <sup>Dodatkowo, magnetyt znajdujący się na spawnie umożliwia teleportację w losowe miejsce na mapie.<sup>
- Zmiana nazwy wybranego magnetytu lub terenu.
- Przekazanie wybranego magnetytu dowolnego graczowi.
- Usunięcie wybranego magnetytu.
  
<br/>

<img class="img-width-479" src="assets/img/lodestone_ui.png" data-no-zoom></img>  
<sup>**Objaśnienie:** Zrzut ekranu przedstawiający panel teleportacji.</sup>

</div>