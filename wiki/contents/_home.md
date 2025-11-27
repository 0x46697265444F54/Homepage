<style>

table, tr, td {
    background-color: transparent !important;
    padding-bottom: 10px !important;
    border-color: transparent !important;

    i {
        font-size: 24px;
        color: var(--color) !important;
    }
    a {
        font-weight: bold;
        color: var(--color);
        text-decoration: none !important;
    }
    a:hover {
        color: color-mix(in srgb, var(--color), black 12%) !important;
        transition: 0.3s
    }
}

.no-underline a {
    text-decoration: none !important;
}

.feature.generator    { --color: rgb(111, 163, 106) }
.feature.tereny       { --color: rgb(225, 88, 81)   }
.feature.teleportacja { --color: rgb(25, 136, 253)  }
.feature.zawartosc    { --color: rgb(193, 142, 88)  }
.feature.zaklecia     { --color: rgb(176, 127, 209) }
.feature.rolnictwo    { --color: rgb(212, 165, 22)  }
.feature.receptury    { --color: rgb(126, 172, 190) }
.feature.ekonomia     { --color: rgb(24, 179, 86)   }
.feature.ekwipunek    { --color: rgb(121, 132, 136) }

.colored-strong strong { color: var(--theme-color) !important }

</style>

# **FireDOT v2**
Wyjątkowy serwer **survival** stworzony z myślą o **casualowych** i **prawdziwie wymagających** graczach. Stylizowany na **vanilla-friendly**, lecz wzbogacony o **pasujące do świata** i **intuicyjne** w obsłudze **dodatki**. Tworzymy **pomocną** społeczność nastawioną na rozgrywkę **PVE**.

> [!WARNING]
> Aby wejść na serwer, połącz się z adresem **FIREDOT.PL** dowolnym klientem na wersji **1.21.10**.<br><sub><strong>Uwaga:</strong> Grać na serwerze mogą tylko osoby posiadające oryginalną wersję gry.<sub>

<br>

### Najważniejsze Funkcje
Najważniejsze funkcje dostępne na serwerze. Bardziej szczegółowy opis znajdziesz na pozostałych stronach dokumentacji.

<table>
  <tr class="feature generator">
    <td><i class="bi bi-globe-americas"></i></td>
    <td><a href="./#/generator">Poprawiony Generator Świata</a><br>Generator świata skupiający się na upiększeniu istniejących biomów i urozmaicenia go o nowe, jednak pasujące do otoczenia struktury.</td>
  </tr>
  <tr class="feature tereny">
    <td><i class="bi bi-flag-fill"></i></td>
    <td><a href="./#/tereny">Chronione Tereny</a><br>Chronione tereny z unikalnym i intuicyjnym panelem zarządzania.</td>
  </tr>
  <tr class="feature teleportacja">
    <td><i class="bi bi-rocket-takeoff-fill"></i></td>
    <td><a href="./#/teleportacja">Teleportacja</a><br>Magnetyt na serwerze pełni funkcję prywatnego teleportu.</td>
  </tr>
  <tr class="feature zawartosc">
    <td><i class="bi bi-box-fill"></i></td>
    <td><a href="./#/przedmioty">Nowe Przedmioty</a><br>Kilka nowych i użytecznych przedmiotów.</td>
  </tr>
  <tr class="feature zaklecia">
    <td><i class="bi bi-magic"></i></td>
    <td><a href="./#/zaklecia">Nowe Zaklęcia</a><br>Wiele nowych zaklęć przenoszących rozgrywkę na wyższy poziom.</td>
  </tr>
  <tr class="feature rolnictwo">
    <td><i class="bi bi-thermometer-sun"></i></td>
    <td><a href="./#/rolnictwo">Realistyczne Rolnictwo</a><br>Rośliny rosną z różną prędkością w zależności od biomu, na którym się znajdują.</td>
  </tr>
  <tr class="feature receptury">
    <td><i class="bi bi-gear-fill"></i></td>
    <td><a href="./#/receptury">Zbalansowane Receptury</a><br>Nowe i zmodyfikowane receptury balansujące dynamikę rozgrywki.</td>
  </tr>
  <tr class="feature ekonomia">
    <td><i class="bi bi-bank2"></i></td>
    <td><a href="./#/ekonomia">Podstawowa Ekonomia</a><br>Podstawowa ekonomia i sklepy pozwalają na uzyskanie trudno dostępnych i limitowanych przedmiotów.</td>
  </tr>
  <tr class="feature ekwipunek">
    <td><i class="bi bi-backpack-fill"></i></td>
    <td><a>Zachowywanie Ekwipunku</a><br>W momencie śmierci, gracz zachowuje przedmioty z paska szybkiego dostępu oraz noszoną zbroję.</td>
  </tr>
</table>

<br>

### Paczka Zasobów
Gra na naszym serwerze wymaga zaakceptowania paczki zasobów. Zawiera ona tekstury, których używamy do wyświetlania niestandardowych ekranów, przedmiotów, ikon i efektów. Ponadto, w celu poprawy wrażeń z rozgrywki i wprowadzeniu odrobiny świeżości, znajdują się w niej starannie wybrane tekstury poprawiające ogólny wygląd gry jednocześnie nie odbiegając w znaczący sposób od jej oryginalnego stylu.

Proces pobierania i ładowania paczki zasobów jest w pełni automatyczny i nie wymaga żadnej akcji ze strony gracza. Przed wejściem na serwer zalecamy wyłączyć wszystkie inne zainstalowane resource-packi.

<div class="no-underline">

- **[<i class="si modrinth"></i> 3D Default](https://modrinth.com/resourcepack/3d-default)**
- **[<i class="si modrinth"></i> Angel's Weather](https://modrinth.com/resourcepack/angels-weather)**
- **[<i class="si modrinth"></i> Gurkis Texture Variations](https://modrinth.com/resourcepack/gurkis-texture-variations)**
- **[<i class="si modrinth"></i> Farcr's Better Dirt](https://modrinth.com/resourcepack/farcrs-better-dirt)**
- **[<i class="si modrinth"></i> Hidey Hidey Debris](https://modrinth.com/resourcepack/hidey-hidey-debris)**
- **[<i class="si modrinth"></i> Mob Crates](https://modrinth.com/resourcepack/mob-crates)**
- **[<i class="si modrinth"></i> More Fungi](https://modrinth.com/resourcepack/more-fungi)**
- **[<i class="si modrinth"></i> Pixel Twemoji 9x9](https://modrinth.com/resourcepack/pixel-twemoji-9x)**
- **[<i class="si modrinth"></i> Round Up](https://modrinth.com/resourcepack/roundup)**
- **[<i class="si modrinth"></i> Simple Grass Flowers](https://modrinth.com/resourcepack/simple-grass-flowers)**
- **[<i class="si modrinth"></i> Smoother Glowing](https://modrinth.com/shader/smoother-glowing)**
- **[<i class="si modrinth"></i> Spring Flowers](https://modrinth.com/resourcepack/spring-flowers)**
- **[<i class="si modrinth"></i> Upgrade-like Trims](https://modrinth.com/resourcepack/upgrade-like-trims)**
- **[<i class="bi bi-globe"></i> VanillaTweaks](https://vanillatweaks.net/picker/resource-packs/)**

Lista może być niekompletna. Wypisane są tylko zewnętrzne i publicznie dostępne paczki, które nie zostały stworzone wyłącznie na potrzeby serwera.  
<sup>Question? See **[Regulamin](regulamin)** for up-to-date contact information.</sup>

</div>

<br>

<div class="no-underline">

### Open-Source
Wspieramy, tworzymy i korzystamy głównie z rozwiązań open-source. Zdecydowana większość z napisanych przez nas wtyczek jest wolnym oprogramowaniem.
- **[<i class="bi bi-github"></i> 0x46697265444F54/Homepage](https://github.com/0x46697265444F54/Homepage)**
- **[<i class="bi bi-github"></i> Grabsky/DisplayEntities](https://github.com/Grabsky/DisplayEntities)**
- **[<i class="bi bi-github"></i> Grabsky/Recipes](https://github.com/Grabsky/Recipes)**
- **[<i class="bi bi-github"></i> Grabsky/Tweaks](https://github.com/Grabsky/Tweaks)**
- **[<i class="bi bi-github"></i> Grabsky/Claims](https://github.com/Grabsky/Claims)**
- **[<i class="bi bi-github"></i> Grabsky/Crates](https://github.com/Grabsky/Crates)**
- **[<i class="bi bi-github"></i> Grabsky/Heads](https://github.com/Grabsky/Heads)**
- **[<i class="bi bi-github"></i> Grabsky/Azure](https://github.com/Grabsky/Azure)**

Dodatkowo korzystamy i współtworzymy narzędzia dla deweloperów:
- **[<i class="bi bi-github"></i> EchoNineLabs/Kite](https://github.com/EchoNineLabs/Kite)** (Kotlin Scripting)
- **[<i class="bi bi-github"></i> LuaLink/LuaLink](https://github.com/LuaLink/LuaLink)** (Lua Scripting)

</div>