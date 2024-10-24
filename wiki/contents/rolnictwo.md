<style>
.contents {
    font-weight: bold;

    ol {
        font-family: 'Ubuntu Mono';
        margin-left: 1em;
        margin-top: 8px;
        margin-bottom: 0;
    }
}
.page {
    p, ul, ol {
        margin-top: 0.25em;
        margin-bottom: 0.25em;
    }
}
.translation {
    margin-left: 0.25em;
    font-weight: normal;
    color: var(--base-color)
}
</style>

# **Rolnictwo**
Rolnictwo na serwerze zostało zmodyfikowane na potrzeby balansu i dynamiki rozgrywki. Prędkość wzrostu upraw jest teraz zależna od biomu, na którym się znajdują. Ma to na celu zachęcenie graczy do eksploracji świata w poszukiwaniu nowych biomów i zakładania na nich farm, a także ograniczenie wpływu automatycznych farm na gospodarkę serwera.
- **Prędkość wzrostu** upraw jest teraz **zależna od biomu**, na którym się znajdują.
- Niektóre rodzaje upraw są **unikalne** dla poszczególnych biomów (np. **Bambus**) i na innych biomach rosną z **bardzo niską prędkością**.
- **Pełny kompostownik** w pobliżu upraw **zwiększa prędkość** ich wzrostu o **20%**. (Efekt się nie stackuje, a łączna prędkość wzrostu nie może przekroczyć **100%**)

### Szybki Wybór

<div class="contents">

1.  [Bambus](#bambus) (Bamboo)
2.  [Kaktusy](#kaktusy) (Cactus)
3.  [Kakao](#kakao) (Cocoa Beans)
4.  [Trzcina Cukrowa](#trzcina-cukrowa) (Sugar Cane)
5.  [Słodkie Jagody](#slodkie-jagody) (Sweet Berries)
6.  [Pszenica](#pszenica) (Wheat)
7.  [Buraki](#buraki) (Beetroot)
8.  [Marchewki](#marchewki) (Carrot)
9.  [Ziemniaki](#ziemniaki) (Potato)
10. [Dynie](#dynie) (Pumpkin)
11. [Melony](#melony) (Melon)
12. [Netherowe Brodawki](#netherowe-brodawki) (Nether Wart)
13. [Szkarłatne Grzyby](#szkarlatne-grzyby) (Warped Fungus)
14. [Płaczące Pnącza](#placzace-pnacza) (Warped Vines)
15. [Spaczone Grzyby](#spaczone-grzyby) (Crimson Fungus)
16. [Spaczone Pnącza](#spaczone-pnacza) (Crimson Vines)
17. [Wodorosty](#wodorosty) (Kelp)

</div>

<br/>
<br/>

<div class="page">

### Bambus <span class="translation">(Bamboo)</span> :id=bambus
Bambus dobrze rośnie tylko na biomach tropikalnych:
- **Jungle**, **Bamboo Jungle**, **Sparse Jungle**
- **Swamp**, **Mangrove Swamp**

### Kaktusy <span class="translation">(Cactus)</span> :id=kaktusy
Kaktusy dobrze rośnie tylko na biomach pustynnych:  
- **Badlands**, **Eroded Badlands**, **Wooden Badlands**
- **Desert**

### Kakao <span class="translation">(Cocoa Beans)</span> :id=kakao
Kakao dobrze rośnie tylko na biomach dżunglowych:  
- **Jungle**, **Bamboo Jungle**, **Sparse Jungle**

### Trzcina Cukrowa <span class="translation">(Sugar Cane)</span> :id=trzcina-cukrowa
Trzcina cukrowa najlepiej rośnie w biomach tropikalnych: <span class="green">(Prędkość: <span class="bold">100%</span>)</span>  
- **Jungle**, **Bamboo Jungle**, **Sparse Jungle**
- **Swamp**, **Mangrove Swamp**

Trzcina cukrowa rośnie też na innych biomach:  
- Wybrzeża: <span class="yellow">(Prędkość: <span class="bold">65%</span>)</span>
  - **River**, **Beach**
- Umiarkowane: <span class="red">(Prędkość: <span class="bold">35%</span>)</span>  
  - **Ocean**, **Deep Ocean**, **Lukewarm Ocean**, **Deep Lukewarm Ocean**, **Warm Ocean**
  - **Forest**, **Birch Forest**, **Dark Forest**, **Flower Forest**, **Old Growth Birch Forest**
  - **Plains**, **Sunflower Plains**
  - **Mushroom Fields**, **Cherry Groove**, **Meadow**

### Słodkie Jagody <span class="translation">(Sweet Berries)</span> :id=slodkie-jagody
Słodkie jagody najlepiej rosną na biomach chłodnych: <span class="green">(Prędkość: <span class="bold">100%</span>)</span>  
- **Taiga**, **Old Growth Pine Taiga**, **Old Growth Spruce Taiga**
- **Cold Ocean**, **Deep Cold Ocean**
- **Stony Shore**

Słodkie jagody rosną też na innych biomach:  
- Umiarkowane: <span class="yellow">(Prędkość: <span class="bold">80%</span>)</span>  
  - **Ocean**, **Deep Ocean**, **Lukewarm Ocean**, **Deep Lukewarm Ocean**, **Warm Ocean**
  - **Forest**, **Birch Forest**, **Dark Forest**, **Flower Forest**, **Old Growth Birch Forest**
  - **Plains**, **Sunflower Plains**
  - **Mushroom Fields**, **Cherry Groove**, **Meadow**
- Górzyste: <span class="red">(Prędkość: <span class="bold">25%</span>)</span>  
  - **Windswept Forest**, **Windswept Gravelly Hills**, **Windswept Hills**

### Pszenica <span class="translation">(Wheat)</span> :id=pszenica
Pszenica najlepiej rośnie w biomach umiarkowanych: <span class="green">(Prędkość: <span class="bold">100%</span>)</span>  
- **Ocean**, **Deep Ocean**, **Lukewarm Ocean**, **Deep Lukewarm Ocean**, **Warm Ocean**
- **Forest**, **Birch Forest**, **Dark Forest**, **Flower Forest**, **Old Growth Birch Forest**
- **Plains**, **Sunflower Plains**
- **Mushroom Fields**, **Cherry Groove**, **Meadow**

Pszenica rośnie też na innych biomach:  
- Sawanna: <span class="yellow">(Prędkość: <span class="bold">75%</span>)</span>  
  - **Savanna**, **Savanna Plateau**
- Chłodne: <span class="yellow">(Prędkość: <span class="bold">60%</span>)</span>  
  - **Taiga**, **Old Growth Pine Taiga**, **Old Growth Spruce Taiga**
  - **Cold Ocean**, **Deep Cold Ocean**
  - **Stony Shore**  

Na pozostałych biomach, pszenica rośnie z prędkością <span class="bold yellow">50%</span>.

### Buraki <span class="translation">(Beetroot)</span> :id=buraki
Buraki najlepiej rosną w biomach umiarkowanych: <span class="green">(Prędkość: <span class="bold">100%</span>)</span>  
- **Ocean**, **Deep Ocean**, **Lukewarm Ocean**, **Deep Lukewarm Ocean**, **Warm Ocean**
- **Forest**, **Birch Forest**, **Dark Forest**, **Flower Forest**, **Old Growth Birch Forest**
- **Plains**, **Sunflower Plains**
- **Mushroom Fields**, **Cherry Groove**, **Meadow**

Buraki rosną też na innych biomach:  
- Sawanna: <span class="yellow">(Prędkość: <span class="bold">75%</span>)</span>  
  - **Savanna**, **Savanna Plateau**
- Chłodne: <span class="yellow">(Prędkość: <span class="bold">60%</span>)</span>  
  - **Taiga**, **Old Growth Pine Taiga**, **Old Growth Spruce Taiga**
  - **Cold Ocean**, **Deep Cold Ocean**
  - **Stony Shore**  

Na pozostałych biomach, buraki rosną z prędkością <span class="bold yellow">50%</span>.

### Marchewki <span class="translation">(Carrot)</span> :id=marchewki
Marchewki najlepiej rosną w biomach umiarkowanych: <span class="green">(Prędkość: <span class="bold">100%</span>)</span>  
- **Ocean**, **Deep Ocean**, **Lukewarm Ocean**, **Deep Lukewarm Ocean**, **Warm Ocean**
- **Forest**, **Birch Forest**, **Dark Forest**, **Flower Forest**, **Old Growth Birch Forest**
- **Plains**, **Sunflower Plains**
- **Mushroom Fields**, **Cherry Groove**, **Meadow**

Marchewki rosną też na innych biomach:  
- Sawanna: <span class="yellow">(Prędkość: <span class="bold">75%</span>)</span>  
  - **Savanna**, **Savanna Plateau**
- Chłodne: <span class="yellow">(Prędkość: <span class="bold">60%</span>)</span>  
  - **Taiga**, **Old Growth Pine Taiga**, **Old Growth Spruce Taiga**
  - **Cold Ocean**, **Deep Cold Ocean**
  - **Stony Shore**  

Na pozostałych biomach, marchewki rosną z prędkością <span class="bold yellow">50%</span>.

### Ziemniaki <span class="translation">(Potato)</span> :id=ziemniaki
Ziemniaki najlepiej rosną w biomach umiarkowanych: <span class="green">(Prędkość: <span class="bold">100%</span>)</span>  
- **Ocean**, **Deep Ocean**, **Lukewarm Ocean**, **Deep Lukewarm Ocean**, **Warm Ocean**
- **Forest**, **Birch Forest**, **Dark Forest**, **Flower Forest**, **Old Growth Birch Forest**
- **Plains**, **Sunflower Plains**
- **Mushroom Fields**, **Cherry Groove**, **Meadow**

Ziemniaki rosną też na innych biomach:  
- Sawanna: <span class="yellow">(Prędkość: <span class="bold">75%</span>)</span>  
  - **Savanna**, **Savanna Plateau**
- Chłodne: <span class="yellow">(Prędkość: <span class="bold">60%</span>)</span>  
  - **Taiga**, **Old Growth Pine Taiga**, **Old Growth Spruce Taiga**
  - **Cold Ocean**, **Deep Cold Ocean**
  - **Stony Shore**  

Na pozostałych biomach, ziemniaki rosną z prędkością <span class="bold yellow">50%</span>.

### Dynie <span class="translation">(Pumpkin)</span> :id=dynie
Dynie najlepiej rosną na biomach chłodnych: <span class="green">(Prędkość: <span class="bold">100%</span>)</span>  
- **Taiga**, **Old Growth Pine Taiga**, **Old Growth Spruce Taiga**
- **Cold Ocean**, **Deep Cold Ocean**
- **Stony Shore**

Dynie rosną też na innych biomach:  
- Umiarkowane: <span class="yellow">(Prędkość: <span class="bold">85%</span>)</span>  
  - **Ocean**, **Deep Ocean**, **Lukewarm Ocean**, **Deep Lukewarm Ocean**, **Warm Ocean**
  - **Forest**, **Birch Forest**, **Dark Forest**, **Flower Forest**, **Old Growth Birch Forest**
  - **Plains**, **Sunflower Plains**
  - **Mushroom Fields**, **Cherry Groove**, **Meadow**  

Na pozostałych biomach, dynie rosną z prędkością <span class="bold yellow">50%</span>.

### Melony <span class="translation">(Melon)</span> :id=melony
Melony najlepiej rosną na biomach tropikalnych: <span class="green">(Prędkość: <span class="bold">100%</span>)</span>  
- **Jungle**, **Bamboo Jungle**, **Sparse Jungle**
- **Swamp**, **Mangrove Swamp**

Melony rosną też na innych biomach:  
- Umiarkowane: <span class="red">(Prędkość: <span class="bold">25%</span>)</span>  
  - **Ocean**, **Deep Ocean**, **Lukewarm Ocean**, **Deep Lukewarm Ocean**, **Warm Ocean**
  - **Forest**, **Birch Forest**, **Dark Forest**, **Flower Forest**, **Old Growth Birch Forest**
  - **Plains**, **Sunflower Plains**
  - **Mushroom Fields**, **Cherry Groove**, **Meadow**

### Netherowe Brodawki <span class="translation">(Nether Wart)</span> :id=netherowe-brodawki
Netherowe brodawki dobrze rosną tylko w netherze.
- **Nether Wastes**, **Soul Sand Valley**, **Crimson Forest**, **Warped Forest**, **Basalt Deltas**

### Szkarłatne Grzyby <span class="translation">(Warped Fungus)</span> :id=szkarlatne-grzyby
Szkarłatne grzyby rosną tylko w netherowych lasach:  
- **Crimson Forest**, **Warped Forest**

### Płaczące Pnącza <span class="translation">(Warped Vines)</span> :id=placzace-pnacza
Szkarłatne pnącza rosną tylko w netherowych lasach:  
- **Crimson Forest**, **Warped Forest**

### Spaczone Grzyby <span class="translation">(Crimson Fungus)</span> :id=spaczone-grzyby
Spaczone grzyby rosną tylko w netherowych lasach:  
- **Crimson Forest**, **Warped Forest**

### Spaczone Pnącza <span class="translation">(Crimson Vines)</span> :id=spaczone-pnacza
Spaczone pnącza rosną tylko w netherowych lasach:  
- **Crimson Forest**, **Warped Forest**

### Wodorosty <span class="translation">(Kelp)</span> :id=wodorosty
Wodorosty rosną tylko na niektórych biomach oceanicznych:  
- **Ocean**, **Deep Ocean**
- **Lukewarm Ocean**, **Deep Lukewarm Ocean**
- **Cold Ocean**, **Deep Cold Ocean**

</div>