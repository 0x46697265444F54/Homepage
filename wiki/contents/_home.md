<style>

.contents {
    font-family: 'Ubuntu Mono';

    ol {
        margin-left: 1em;
        margin-top: 8px;
        margin-bottom: 0;
    }
    ul {
        list-style-type: none;
    }
}

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

.feature.generator    { --color: rgb(111, 163, 106) }
.feature.tereny       { --color: rgb(225, 88, 81) }
.feature.teleportacja { --color: rgb(25, 136, 253) }
.feature.zawartosc    { --color: rgb(193, 142, 88) }
.feature.zaklecia     { --color: rgb(176, 127, 209) }
.feature.rolnictwo    { --color: rgb(212, 165, 22) }
.feature.receptury    { --color: rgb(126, 172, 190) }
.feature.ekonomia     { --color: rgb(24, 179, 86) }
.feature.ekwipunek    { --color: rgb(121, 132, 136) }

.colored-strong strong { color: var(--theme-color) !important }

</style>

# **FireDOT v2**
Wyjątkowy serwer **survival** stworzony z myślą o **casualowych** i **prawdziwie wymagających** graczach. Stylizowany na **vanilla-friendly**, lecz wzbogacony o **pasujące do świata** i **intuicyjne** w obsłudze **dodatki**. Tworzymy **pomocną** społeczność nastawioną na rozgrywkę **PVE**.

?> Aby wejść na serwer, połącz się z adresem **firedot.pl** dowolnym klientem na wersji **1.21.5**.<br><sup>Grać na serwerze mogą tylko osoby posiadające oryginalną wersję gry.<sup>

<br>

### Najważniejsze Funkcje
Najważniejsze funkcje dostępne serwerze. Bardziej szczegółowy opis znajdziesz na pozostałych stronach dokumentacji.

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
Gra na naszym serwerze **wymaga** zaakceptowania paczki zasobów. Zawiera ona tekstury, których używamy do wyświetlania **niestandardowych ekranów**, **przedmiotów**, **ikon** i **efektów**. Ponadto, w celu **poprawy wrażeń z rozgrywki** i **wprowadzeniu odrobiny świeżości**, znajdują się w niej starannie wybrane tesktury **poprawiające ogólny wygląd gry** jednocześnie nie odbiegając w znaczący sposób od jej oryginalnego stylu.

Proces pobierania i ładowania paczki zasobów jest **w pełni automatyczny** i nie wymaga żadnej akcji ze strony gracza. Przed wejściem na serwer zalecamy wyłączyć wszystkie inne zainstalowane resource-packi.

<details class="contents">

<summary class="bright" style="cursor:pointer;user-select:none">Rozwiń, aby zobaczyć listę paczek dostępnych na serwerze.</summary>

1. **[3D Default](https://modrinth.com/resourcepack/3d-default)** <span class="bright">(GeForceLegend)</span> — A light-weight resource pack providing vanilla-look 3D models.
2. **[Angel's Weather](https://modrinth.com/resourcepack/angels-weather)** <span class="bright">(Liminal_Angel)</span> — You can now transform the weather textures & sounds, into a visually & acoustically captivating phenomenon!
3. **[Gurkis Texture Variations](https://modrinth.com/resourcepack/gurkis-texture-variations)** <span class="bright">(Gurkis)</span> — This pack variates foliage and crop colors and height, making big fields way nicer to look at.
4. **[Farcr's Better Dirt](https://www.curseforge.com/minecraft/texture-packs/farcrs-better-dirt)** <span class="bright">(Farcr)</span> — Significantly improves the game's most iconic block: Dirt!
5. **[Hidey Hidey Debris](https://modrinth.com/resourcepack/hidey-hidey-debris)** <span class="bright">(Sammy019)</span> — Makes debris more natural by embedding it in netherrack.
6. **[Mob Crates](https://modrinth.com/resourcepack/mob-crates)** <span class="bright">(NoCube, Futureazoo)</span> — Replaces spawn eggs with mobs in Crates.
7. **[More Fungi](https://modrinth.com/resourcepack/more-fungi)** <span class="bright">(\_daggsy\_)</span> — Adds variants for brown and red mushrooms.
8. **[Pixel Twemoji 9x9](https://modrinth.com/resourcepack/pixel-twemoji-9x)** <span class="bright">(AmberW, Twitter)</span> — Adds all of Twemoji, redrawn by hand as pixel art at 9x9 resolution.
9.  **[Round Up GUI](https://modrinth.com/resourcepack/roundupgui)** <span class="bright">(Dremix)</span> — A resource pack that makes the whole game UI prettier and rounder!
10. **[Simple Grass Flowers](https://modrinth.com/resourcepack/simple-grass-flowers)** <span class="bright">(2DWisp)</span> — Gives Grass, Podzol, Mycelium, Crimson Nylium, and Warped Nylium vanilla-friendly flowers, clovers, and rocks!
11. **[Smoother Glowing](https://modrinth.com/shader/smoother-glowing)** <span class="bright">(MelonRind)</span> — Replace vanilla glowing shader with optimized and subjectively prettier.
12. **[Spring Flowers](https://modrinth.com/resourcepack/spring-flowers)** <span class="bright">(\_daggsy\_)</span> — Adds more variants for each flower.
13. **[Upgrade-like Trims](https://modrinth.com/resourcepack/upgrade-like-trims)** <span class="bright">(N0mish)</span> — Changes the Armor Trim item texture to look more like the Netherite Upgrade.
14. **[Wireframe Display](https://github.com/HalbFettKaese/WireframeDisplay)** <span class="bright">(HalbFettKaese)</span> — A small resource pack that makes it easy to create and display wireframes that look like vanilla.
15. **[VanillaTweaks](https://vanillatweaks.net/picker/resource-packs/)** <span class="bright">(VanillaTweaks)</span> — Modify Minecraft's textures, models, shaders, and sounds, letting you customize the feel of your game.

<div style="margin-left:0.5em">

<sup>Lista może być niekompletna. Wypisane są tylko zewnętrzne (3rd party) i publicznie dostępne paczki, które nie zostały stworzone wyłącznie na potrzeby serwera.  
Jeżeli masz pytanie, skontaktuj się z administracją serwera.</sup>

</div>

</details>

<br>

### Open-Source
Wspieramy, tworzymy i korzystamy głównie z rozwiązań **open-source**. Zdecydowana większość z napisanych przez nas wtyczek jest **wolnym oprogramowaniem**, które można znaleźć w serwisie **GitHub** na profilach **[Grabsky](https://github.com/Grabsky)** oraz **[0x46697265444F54](https://github.com/0x46697265444F54)**.
