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

<div class="data-table-wrap panel">
    <table class="data-table">
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