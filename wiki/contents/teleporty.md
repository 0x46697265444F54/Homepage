<style>
.page {
    p, ul, ol {
        margin-top: 0.25em;
        margin-bottom: 0.25em;
    }
}
</style>

# **Teleporty**
Teleportacja na naszym serwerze jest możliwa **tylko** za pośrednictwem **fizycznych waypointów**. Gracze **nie mają dostępu** do komend typu **/spawn**, **/home** czy **/tpa** ponieważ uważamy, że taka forma przemieszczania się jest **przestarzała**, **nieintuicyjna** i **psuje wrażenia z rozgrywki**. Nasza implementacja jest w dużej mierze inspirowana **modyfikacjami** do Minecrafta i **innymi grami** tego gatunku.

<br />

<div class="page">

### Magnetyt
Magnetyt to uzyskał zupełnie nowe zastosowanie i pełni on funkcję punktu teleportacji. Za jego pomocą możemy się teleportać na obszar **spawnu**, posiadany lub współdzielony **teren**, lub inny należący do nas **magnetyt**. Ponadto, jeżeli nie stoi w chronionym miejscu, może zostać **zniszczony** przez **innego gracza**. Nie można go też przestawić, bowiem po wykopaniu ulega zniszczeniu.

<br />

![Magnetyt: 8x Deepslate|Cobbled Deepslate, 1x Amethyst Shard](assets/img/lodestone_recipe.png ":no-zoom")  
<sup>Zamiast <strong>Deepslate</strong> można też użyć <strong>Cobbled Deepslate</strong>.</sup>

<br />

Każdy gracz może posiadać maksymalnie **5** aktywnych bloków magnetytu.  

<sup>**Tip:** Każdy **blok terenu** ma wbudowany magnetyt, co umożliwia zapisanie i przemieszczanie się pomiędzy **10** różnymi punktami.

### Panel Zarządzania
Panel zarządzania można otworzyć poprzez **interakcję** z blokiem magnetytu. Obecnie udostępnia on poniższe funkcje:

- Teleportacja na obszar spawnu, posiadany lub współdzielony teren, lub inny magnetyt.  
  <sup>Dodatkowo, magnetyt znajdujący się na spawnie umożliwia teleportację w losowe miejsce na mapie.<sup>
- Zmiana nazwy wybranego magnetytu lub terenu.
- Przekazanie wybranego magnetytu dowolnego graczowi.
- Usunięcie wybranego magnetytu.
  
<br/>

<img class="img-width-479" src="assets/img/lodestone_ui.png" data-no-zoom></img>  
<sup>Zrzut ekranu przedstawiający panel teleportacji.</sup>

</div>