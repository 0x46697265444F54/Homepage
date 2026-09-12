<style>

table, tr, td {
    background-color: transparent !important;
    border-color: transparent !important;
    padding: 0 10px 5px 0 !important;

    i {
        font-size: 16px;
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

</style>

# FireDOT
Serwer oferujący rozgrywkę w trybie przetrwania na zmienionych zasadach.

<div class="page-server">
<div class="server-card"></div>
</div>

<br>

### Najważniejsze Funkcje

|                               |                                                                                         |
|-------------------------------|-----------------------------------------------------------------------------------------|
| @icon[bi-globe-americas]      | Świat urozmaicony o nowy wygląd biomów i kilka dodatkowych struktur.                    |
| @icon[bi-flag-fill]           | Chronione działki z rozwiniętym systemem zarządzania.                                   |
| @icon[bi-rocket-takeoff-fill] | Teleportacja tylko za pomocą fizycznych punktów i przedmiotów specjalnych.              |
| @icon[bi-hourglass-split]     | Zaawansowany poziom trudności i spowolniona początkowa progresja.                       |
| @icon[bi-gear-fill]           | Zdobywanie lepszego wyposażenia opiera się na ścieżce ulepszeń i szablonach kowalskich. |
| @icon[bi-moon-fill]           | Nowy poziom pancerza i narzędzi ‒ Enderyt.                                              |
| @icon[bi-magic]               | Dwadzieścia nowych, starannie dobranych zaklęć.                                         |
| @icon[bi-bank2]               | Podstawowa ekonomia, sklepy oraz system ulepszeń.                                       |
| @icon[bi-backpack-fill]       | Pasek szybkiego dostępu i założona zbroja nie wypadają po śmierci.                      |
| @icon[bi-thermometer-sun]     | Prędkość wzrostu roślin zależna od biomu.                                               |
| @icon[bi-map-fill]            | Mapa serwera dostępna w przeglądarce.                                                   |
| @icon[bi-puzzle-fill]         | Kolekcja ponad 150 główek do zebrania.                                                  |
| @icon[bi-calendar-day-fill]   | Szybkie aktualizacje do najnowszej wersji gry.                                          |

<br>

### Paczka Zasobów
Gra na naszym serwerze wymaga zaakceptowania paczki zasobów. Proces jej pobierania i ładowania jest w pełni automatyczny i nie wymaga żadnej akcji ze strony gracza. Przed wejściem na serwer zalecamy wyłączyć inne zainstalowane resource-packi.

Wykorzystywane paczki zasobów zewnętrznych twórców:

<div class="symbolic no-underline">

- **[@icon[si-modrinth] 3D Default](https://modrinth.com/resourcepack/3d-default)** by GeForceLegend
- **[@icon[si-modrinth] Crop & Foliage Variations](https://modrinth.com/resourcepack/crop-foliage-variations)** by Gurkis
- **[@icon[si-modrinth] Distinguishable Armor Trims](https://modrinth.com/resourcepack/distinguishable-armor-trims)** by DeV_DeVaughn
- **[@icon[si-modrinth] Farcr's Better Dirt](https://modrinth.com/resourcepack/farcrs-better-dirt)** by Farcr
- **[@icon[si-modrinth] Gentler Weather Sounds](https://modrinth.com/resourcepack/gentler-weather-sounds)** by VesMaybeVesper
- **[@icon[si-modrinth] Goat's Tool Trims](https://modrinth.com/datapack/goats-tool-trims)** by FloatingGoat
- **[@icon[si-modrinth] Hidey Hidey Debris](https://modrinth.com/resourcepack/hidey-hidey-debris)** by Sammy019
- **[@icon[si-modrinth] Mob Crates](https://modrinth.com/resourcepack/mob-crates)** by NoCube, Futureazoo
- **[@icon[si-modrinth] Pixel Twemoji 9x9](https://modrinth.com/resourcepack/pixel-twemoji-9x)** by AmberWat
- **[@icon[si-modrinth] Round Up](https://modrinth.com/resourcepack/roundup)** by Dremix
- **[@icon[si-modrinth] Simple Grass Flowers](https://modrinth.com/resourcepack/simple-grass-flowers)** by 2DWisp
- **[@icon[si-modrinth] Smoother Glowing](https://modrinth.com/shader/smoother-glowing)** by MelonRind
- **[@icon[si-modrinth] Upgrade-like Trims](https://modrinth.com/resourcepack/upgrade-like-trims)** by N0mish
- **[@icon[si-modrinth] Wisp's Colourful Wildflowers](https://modrinth.com/resourcepack/wisps-colourful-wildflowers)** by 2DWisp
- **[@icon[bi-github] Negative Space Font](https://github.com/AmberWat/NegativeSpaceFont)** by AmberWat
- **[@icon[bi-globe] Vanilla Tweaks](https://vanillatweaks.net/picker/resource-packs/)** by VanillaTweaks

Oraz inne zasoby, których twórcy zostali wymienieni w pliku **LICENSE** poszczególnych paczek.  
<sup>Question? See **[Regulamin](regulamin)** for up-to-date contact information.</sup>

</div>

<br>

<div class="symbolic no-underline">

### Open Source
Wspieramy, tworzymy i korzystamy głównie z rozwiązań open-source. Zdecydowana większość z napisanych przez nas wtyczek jest wolnym oprogramowaniem.
- **[@icon[bi-github] 0x46697265444F54/Homepage](https://github.com/0x46697265444F54/Homepage)**
- **[@icon[bi-github] Grabsky/DisplayEntities](https://github.com/Grabsky/DisplayEntities)**
- **[@icon[bi-github] Grabsky/Recipes](https://github.com/Grabsky/Recipes)**
- **[@icon[bi-github] Grabsky/Tweaks](https://github.com/Grabsky/Tweaks)**
- **[@icon[bi-github] Grabsky/Claims](https://github.com/Grabsky/Claims)**
- **[@icon[bi-github] Grabsky/Crates](https://github.com/Grabsky/Crates)**
- **[@icon[bi-github] Grabsky/Heads](https://github.com/Grabsky/Heads)**
- **[@icon[bi-github] Grabsky/Azure](https://github.com/Grabsky/Azure)**

Dodatkowo korzystamy i współtworzymy narzędzia dla deweloperów:
- **[@icon[bi-github] EchoNineLabs/Kite](https://github.com/EchoNineLabs/Kite)**
- **[@icon[bi-github] LuaLink/LuaLink](https://github.com/LuaLink/LuaLink)**

</div>
