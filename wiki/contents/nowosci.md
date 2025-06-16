<style>
.page {
    p, ul, ol {
        margin-top: 0.25em;
        margin-bottom: 0.25em;
    }
}

.container.nowosci {
    --color: rgb(35, 135, 55)
}

.container.zmiany {
    --color: rgb(195, 135, 0)
}

.container.poprawki {
    --color: rgb(226, 64, 64)
}

.container {
    border: 2px solid color-mix(in srgb, var(--color), transparent 75%);
    background-color: color-mix(in srgb, var(--color), transparent 90%);

    padding: 1em;
    border-radius: 10px;
    margin-bottom: 1em;

    h1, h2, h3, h4, h5 {
        font-weight: 900;
        letter-spacing: 1px;
        color: color-mix(in srgb, var(--color), white 10%);
    }

    a {
        color: color-mix(in srgb, var(--color), white 10%);
        transition: 0.3s
    }

    a:hover {
        color: color-mix(in srgb, var(--color), black 5%);
        transition: 0.3s
    }
    h2 > i {
        font-size: 0.2em;
        padding-right: 0.5em;
    }
    h3 > i {
        font-size: 0.9em;
        padding-right: 0.5em;
    }

    hr {
        margin: 0.75em 0 1em 0;
        border-bottom: 2px solid color-mix(in srgb, var(--color), transparent 75%);
    }
}
</style>

# **Nowości**
Lista zmian i nowości. Dołącz do [naszego serwera Discord](https://firedot.pl/discord), aby otrzymywać powiadomienia o aktualizacjach i być na bieżąco.

---

<div class="page">

## **2.4 — OGÓLNA AKTUALIZACJA** :id=u24 <!-- {docsify-ignore} -->
<sup>Opublikowano: **12/05/2025**</sup>

Tak jak wspomniałem wcześniej, aktualizacja **2.4** skupia się na zmianach w ekonomii serwera, ale nie brakuje w niej kilku niespodzianek.

<br>

Od momentu opublikowania poprzedniej aktualizacji, swoje prace skupiłem głównie na ulepszaniu narzędzi z których korzystam do pracy nad serwerem.
- **[Grabsky/DisplayEntities](https://github.com/Grabsky/DisplayEntities)** — Nowy plugin mający na celu rozwiązać większość problemów z dotychczasowym systemem hologramów na serwerze.
- **[LuaLink/LuaLinkV2](https://github.com/LuaLink/LuaLinkV2)** — Plugin pozwalający na szybką i efektowną rozbudowę serwera o nowe funkcje. Nie jestem jego autorem, lecz brałem udział w procesie powstawania i testowania nowej wersji. Wszystkie kompnenty serwera napisane w LuaLink zostały zaktualizowane do wersji V2.

#### CO DALEJ?
Następna w kolejce jest aktualizacja do wersji **1.21.5**, która niestety ze względów technicznych musiała zostać przesunięta na inny termin. Dodatkowo planuję całkowicie przepisać integrację **Discord** ⟷ **Minecraft** oraz powoli wprowadzać kolejne zmiany techniczne, mające na celu usprawnić przebieg prac nad serwerem i powoli przygotować go do następnego sezonu.

<br>

<br/>

<div class="container nowosci">

<h3><i class="bi bi-stars"></i>NOWOŚCI</h3>
<hr>

- Dodano nowe przedmioty: **Tuńczyk** oraz **Pieczony Tuńczyk**.
- Dodano komendę **/collections**, która wyświetla postęp zdobytych przedmiotów kolekcjonerskich.  
  <sup>Aby dodać uprzednio zebrane przedmioty do kolekcji, wystarczy umieścić je na chwilę w ekwipunku.</sup> 
- Dodano komendę **/enchantments**, która wyświetla niestandardowe zaklęcia dostępne na serwerze.
- Dodano **System Zgłoszeń** na serwerze Discord. Wszystkie sprawy do administracji prosimy kierować za jego pośrednictwem.

</div>

<div class="container zmiany">

<h3><i class="bi bi-gear-fill"></i></i>ZMIANY</h3>
<hr>

- **Skarbce** oraz **Złowieszcze Skarbce** w normalnym świecie resetują się teraz co 12 godzin.  
  <sup>W przeciwieństwie do skarbców w wymiarze kresu, skarbce w normalnym świecie nie wyświetlają licznika resetu. W przyszłości planujemy to zmienić.</sup>   
- Wprowadzono limity sprzedaży do pozostałych sklepów.  
  <sup>Limity sprzedaży mają na celu zbalansować poziom zarobku i jednocześnie zachęcić graczy do odkrywania innych sposobów na zdobywanie waluty.</sup>
- Zmodyfikowano ceny niektórych przedmiotów. (Cena Kupna / Cena Sprzedaży)
  - **Drewno Świerkowe**: (~~$100~~ / ~~$16~~) 🡒 ($80 / $12)
  - **Drewno Bladego Dębu**: (~~$220~~ / ~~$36~~) 🡒 ($260 / $42)
- Dodano nowe przedmioty do sklepu **Wędkarstwo**.
  - **Surowy Tuńczyk** ($240 / $120)
  - **Zaklęta Książka – Wabik** ($21,400)
- Dodano nowe przedmioty do sklepu **Pozostałe**.
  - **Strzała** ($80 / $10)
  - **Królicza Skóra** ($240 / $12)
  - **Kula Szlamu** ($120 / $20) 
  - **Skorupa Pancernika** ($640 / $40)
  - **Skorupa Żółwia** ( — / $360)
  - **Ametyst** ( — / $280)
- Przepisano część komponentów serwera do nowych systemów.  
  <sup>Nie powinno to na ten moment wpłynąć na rozgrywkę, ale z pewnością pomoże w rozbudowie serwera w przyszłości.</sup>
- Wprowadzono kilka zmian i poprawek na serwerze Discord.
  - Skonfigurowano **Onboarding** i wyłączono przestarzały już **Welcome Screen**.  
    <sup>Jeżeli na liście brakuje niektórych kanałów, sprawdź zakładkę **Kanały i role** (Channels & Roles) znajdującą się na samej górze listy.</sup>
  - Poprawiono wygląd kanałów tylko do odczytu, tj. **#start**, **#regulamin**, **#weryfikacja**.  
    <sup>Wykorzystują one teraz nowy styl wiadomości, nazywany **Components v2**.</sup>
  - Usunięto kanał **#faq**. Informacje te od dawna znajdują się na tablicy informacyjnej w grze oraz na serwerowej wiki.
  - Zmieniono ikony większości kanałów, aby wprowadzić odrobinę świeżości.

</div>

**Masz ciekawy pomysł?** Podziel się nim na **[naszym serwerze Discord](https://firedot.pl/discord)**.

<br>

---

<div class="page">

## **2.3 — OGÓLNA AKTUALIZACJA** :id=u23 <!-- {docsify-ignore} -->
<sup>Opublikowano: **27/03/2025**</sup>

Aktualizacja wprowadza kilka ciekawych nowości i zmian zaproponowanych przez graczy.  

Problemy techniczne spowodowane przez poprzedniego dostawcę spowolniły prace nad serwerem i aktualizacja została opóźniona. Zmieniliśmy hosting i gracze mogą ponownie cieszyć się rozgrywką bez przeszkód. Dziękujemy za cierpliwość i przepraszamy za związane z tym niedogodności.

<br/>

<div class="container nowosci">


<h3><i class="bi bi-stars"></i>NOWOŚCI</h3>
<hr>

- Włączono możliwość zgłaszania wiadomości na czacie i ignorowania graczy.  
  <sup>System jest częścią gry, a nie serwerowym dodatkiem. Zgłoszenia wysłane za pomocą tego systemu nie są weryfikowane przez administrację serwera.<br> Więcej informacji: **[Blog](https://www.minecraft.net/en-us/article/addressing-player-chat-reporting-tool)**, **[Player Reporting FAQ](https://help.minecraft.net/hc/en-us/articles/7317376541197)**, **[EULA](https://www.minecraft.net/en-us/eula)**, **[Commercial Usage Guidelines](https://www.minecraft.net/en-us/usage-guidelines#terms-commercial_guidelines)**, **[Community Standards](https://www.minecraft.net/en-us/community-standards)**</sup>
- Dodano zaklęcie **Ogrodnik** (Gardener), które można nałożyć na **Motykę**.  
  <sup>Plony zebrane za pomocą zaklętej motyki zostają ponownie zasadzone.
- Dodano możliwość **wstrzymania wzrostu** moba za pomocą **Świecącej Jagody**.  
  <sup>Aby ponownie odblokować wzrost, należy nakarmić moba **Złotą Marchewką**.</sup>
- Dodano możliwość zwiększenia **Rysowania Świata** za pomocą systemu ulepszeń.  
  <sup>**12** (Domyślne) ➜ **13** ($50,000) ➜ **14** ($100,000) ➜ **15** ($150,000) ➜ **16** ($200,000)</sup>
- Dodano **3** dodatkowe ulepszenia limitu aktywnych ofert w domu aukcyjnym.  
  <sup>Podstawowy limit został zwiększony z **4** do **6**, a maksymalny wynosi aż **24**.</sup>
- Dodano przycisk **Wypełnij** do menu sprzedaży.  
  <sup>Naciśnięcie przycisku powoduje wypełnienie menu maksymalną ilością przedmiotów jakie gracz może w danym momencie sprzedać.</sup>
- Dodano możliwość nałożenia zaklęcia **Magnes** (Magnet) na inne narzędzia.  
  <sup>Na ten moment są to: **Kilof**, **Motyka**, **Miecz**, **Trójząb**, **Buzdygan**, **Łuk** oraz **Kusza**</sup>
- Dodano komendę **/glow** dla wspierających z rangą **Donator** i **Booster**.  
  <sup>Komenda przełącza tryb kolorowego podświetlenie dla gracza.</sup>
- Dodano nową flagę do panelu zarządzania terenem.  
  - **Enderman** - Przełącza podnoszenie / stawianie bloków przez endermany.
- Dodano możliwość rozmnażania większości pojedynczych kwiatów za pomocą **Mączki Kostnej**.
- Dodano możliwość przyspieszenia wzrostu **Trzciny Cukrowej** i **Kaktusów** za pomocą **Mączki Kostnej**.

</div>

<div class="container zmiany">

<h3><i class="bi bi-gear-fill"></i></i>ZMIANY</h3>
<hr>

- Wyłączono podnoszenie i stawianie bloków przez endermany na terenie całego świata.  
  <sup>Jeżeli gracz życzy sobie włączyć tę funkcję na swoim terenie, może to zrobić za pomocą flagi **Enderman**.</sup>
- Dodano **1-minutowy** cooldown dla komendy **/defeat**.  
  <sup>Komenda ta była nadużywana do szybkiego powrotu na spawn w przypadku poszukiwania określonego biomu na losowym teleporcie.</sup>
- Śmierć w wymiarze kresu odradza gracza na spawnie wymiaru, zamiast w ustawionym punktcie odrodzenia.  
  <sup>Respawn w endzie nie nadpisuje punktu odrodzenia gracza w innych wymiarach.</sup>
- Zaklęcie **Grawitacja** (Gravity) zwiększa teraz odporność na odrzut.  
  <sup>Otrzymywanie obrażeń nie powinno już wyrzucać gracza w powietrze tak wysoko jak dotychczas.</sup>
- Przedmioty podlinkowane na czat za pomocą frazy **<item>** pokazują teraz również ilość.  
  <sup>Dodatkowo dodane zostały aliasy **[item]** oraz **[i]**.
- Przepisano system zdobywania kolekcjonerskich główek.  
  <sup>Poza zmianami technicznymi, wprowadzonych zostało kilka poprawek.</sup>  
  - Główki umieszczone na bloku dźwiękowym wydają teraz odpowiedni dźwięk.
  - Dodano brakujące główki **Brązowej Pandy**, **Brązowej Krowy Grzybowej** oraz **Dewastatora**.
  - Zwiększono szansę na zdobycie głów z poniższych mobów:
    - Podst. **10%**, Maks. **17.5%** (Grabież III)
      - **Otuszek** (Alllay), **Wilk** (Wolf), **Kot** (Cat), **Papuga** (Parrot), **Niuchacz** (Sniffer),
      - **Koń Szkielet** (Skeleton Horse), **Wędrowny Handlarz** (Wandering Trader),
      - **Osadnik** (Villager), **Osadnik Zombie** (Zombie Villager), **Dewastator** (Ravager), **Nadzorca** (Warden)
    - Podst. **20%**, Maks. **35%** (Grabież III)
      - **Starszy Strażnik** (Elder Guardian)
- Ulepszono wygląd tagu / nicku wyświetlanego nad głową gracza.
- Wiadomości o śmierci spowodowanej przez moba zawierają teraz jego nazwę.
- Wzmianki nicku na czacie wydają teraz dźwięk.
- Zaktualizowano treść komend **/donator** oraz **/booster**.

</div>

<div class="container poprawki">

<h3><i class="bi bi-bug-fill"></i>POPRAWKI</h3>
<hr>

- Naprawiono błędnie ustawiony poziom trudności w wymiarze kresu: ~**Łatwy**~ ➜ **Trudny**  
  <sup>Naturalnym efektem tej zmiany jest ograniczenie dostępu do nowych przedmiotów dla słabo wyposażonych graczy.</sup>
- Naprawiono stackowanie się płyty muzycznej **Endgame**, którą można zdobyć w wymiarze kresu.  
  <sup>Płyta **Endgame**, tak jak pozostałe utwory, nie może się teraz stackować.</sup>
- Poprawiono interakcję z blokami użytkowymi gdy gracz trzyma w ręce koszyk.  
  <sup>Tym samym zmniejszone zostało ryzyko przypadkowego postawienia moba, podczas interakcji np. ze skrznią.</sup>
- Naprawiono wykluwanie się żółwii na chronionym terenie.  
  <sup>Wyłączenie flagi **Spawn Mobów** powodowało, że żółwie znikały od razu po wykluciu.</sup>
- Naprawiono wiadomości przy wchodzeniu / wychodzeniu z serwera oraz te publikowane na kanale **💬 | chat**.  
- Naprawiono nieprawidłowe modele enderytowych narzędzi.
- Naprawiono nie wyświetlające się zdobienia na teksturze enderytowej zbroi w ekwipunku.
- Naprawiono kolorowanie nawiasów w formacie przedmiotów podlinkowanych na czat.

</div>

### CO PLANUJEMY NASTĘPNIE?
Przyszła aktualizacja to głównie zmiany związane z ekonomią, a co za tym idzie - jeszcze więcej sposobów na zarobek. Dodatkowo planujemy dodać interfejs, za pomocą którego można będzie sprawdzić postęp w zdobywaniu główek oraz kilka innych rzeczy, o których nie mogę jeszcze za dużo mówić.

<br>

**Masz ciekawy pomysł?** Podziel się nim na **[naszym serwerze Discord](https://firedot.pl/discord)**.

<br>

---

## **2.2 — EKONOMIA** :id=u22 <!-- {docsify-ignore} -->
<sup>Opublikowano: **16/02/2025**</sup>

Lista zmian i nowości wprowadzona od poprzedniej aktualizacji. Dodatkowo w tym tygodniu odbył się pierwszy, bardzo podstawowy event i pomimo kilku niedociągnięć zakończył się on sukcesem. W przyszłości można spodziewać się więcej tego typu wydarzeń. Wszelkie sugestie są mile widziane!

<br/>

<div class="container nowosci">

<h3><i class="bi bi-stars"></i>NOWOŚCI</h3>
<hr>

- Dodano możliwość **Kolorowania** nazwanych **Znaczników**.  
  <sup>Wystarczy połączyć nazwany znacznik z wybranym barwnikiem w stole to wytwarzania.</sup>
- Dodano recepturę do wytworzenia **Koszyka**.  
  <sup>Receptura: **4x Bambus**, **4x Nić**, **1x Królicza Skóra** (**[Wzór](przedmioty.md?id=koszyk)**)</sup>
- Dodano **Skrzynię Eventową**, do której klucze można zdobyć na organizowanych przez nas eventach.
- Dodano **1** nowy obraz o wymiarach **3x3**. 
- Dodano nowe przedmioty do sklepu **Gospodarstwo**.
  - <u>**Wodorost**</u>
    - Wartość: **$40** / **$10**
    - Limit: **96 szt.** / **4 godz.**
  - <u>**Butelka Miodu**</u>
    - Wartość: **$1,440** / **$360**
    - Limit: **24 szt.** / **4 godz.**
  - <u>**Surowa Wieprzowina**</u>
    - Wartość: **$120** / **$20**
    - Limit: **96 szt.** / **4 godz.**
  - <u>**Surowa Wołowina**</u>
    - Wartość: **$240** / **$40**
    - Limit: **96 szt.** / **4 godz.**
  - <u>**Surowy Kurczak**</u>
    - Wartość: **$180** /  **$30**
    - Limit: **96 szt.** / **4 godz.**
  - <u>**Surowy Królik**</u>
    - Wartość: **$180** / **$30**
    - Limit: **96 szt.** / **4 godz.**
- Dodano **2** dodatkowe ulepszenia limitu aktywnych ofert w domu aukcyjnym.
- Dodano hologram pokazujący pozostały czas oczekiwania na spawner w endzie.

</div>

<div class="container zmiany">

<h3><i class="bi bi-gear-fill"></i></i>ZMIANY</h3>
<hr>

- Zaklęcie **Wędrowiec** (Stride) jest teraz dezaktywowane podczas kucania.
- Zaklęcie **Wędrowiec** (Stride) jest teraz trudniejsze do zdobycia przez stół do zaklinania.
- Zmieniono wygląd skinów graczy na kanale ⁠**💬｜chat** na naszym serwerze Discord.  
  <sup>Obrazy są w nieco innym stylu, zachęcam do podzielenia się opinią na temat tej zmiany.</sup>
- Osadnik sprzedający **Zaklęte Książki** uzupełnia teraz mniej książek niż domyślnie.  
  <sup>Zmiana ta ma na celu zmniejszyć prędkość z jaką pozyskiwane są zaklęte książki:</sup>  
  - **Naprawa** (Mending): ~~**12**~~ ➜ **1**
  - **Nieskończoność** (Infinity): ~~**12**~~ ➜ **1**
  - **Jedwabny Dotyk** (Silk Touch): ~~**12**~~ ➜ **1**
  - **Mroźny Piechur** (Frost Walker): ~~**12**~~ ➜ **1**  
  - Pozostałe książki są uzupełniane są po maks. **4**, zamiast domyślnie **12**.
  - Uzupełnianie ofert handlowych odbywa się **do dwóch razy dziennie**, to pozostaje bez zmian. (**[Odnośnik](https://minecraft.wiki/w/Trading#Trades)**)
- Wprowadzono limity sprzedaży do sklepu **Surowce** i zmodyfikowano ceny niektórych przedmiotów.  
  <sup>Zmiana ta ma na celu zmniejszyć prędkość z jaką pozyskiwana jest waluta na serwerze.</sup>
  - <u>**Ruda Miedzi**</u>
    - Wartość: **$40** / **$10**
    - Limit: **768 szt.** / **4 godz.**
  - <u>**Lazuryt**</u>
    - Wartość: **$40** / **$10**
    - Limit: **768 szt.** / **4 godz.**
  - <u>**Redstone**</u>
    - Wartość: **$120** / **$30**
    - Limit: **768 szt.** / **4 godz.**
  - <u>**Węgiel**</u>
    - Wartość: **$160** / **$40**
    - Limit: **768 szt.** / **4 godz.**
  - <u>**Ruda Żelaza**</u>
    - Wartość: **$480** / **$120**
    - Limit: **256 szt.** / **4 godz.**
  - <u>**Ruda Złota**</u>
    - Wartość: **$720** / **$180**
    - Limit: **256 szt.** / **4 godz.**
  - <u>**Diament**</u>
    - Wartość: **$2,560** / **$640**
    - Limit: **64 szt.** / **4 godz.**
  - <u>**Odłamek Netherytu**</u>
    - Wartość: **$12,000** / **$3,000**
    - Limit: **32 szt.** / **4 godz.**
  - Współczynnik sprzedaży do zakupu wynosi teraz **1:4**. Oznacza to, że surowce można teraz kupić w niższej cenie niż uprzednio.
  - Limit sprzedaży musiał zostać wprowadzony aby skutecznie zbalansować automatyczne farmy surowców pozwalające na zarabianie bardzo dużej ilości pieniędzy. Nie jest to rozwiązanie idealne i w przyszłości planujemy ponownie odwiedzić ten obszar w celu znalezienia rozwiązania, które zadowoliłoby obie strony.

</div>

**Masz ciekawy pomysł?** Podziel się nim na **[naszym serwerze Discord](https://firedot.pl/discord)**.

<br>

---

## **2.1 — POPRAWKI I BALANS** :id=u21 <!-- {docsify-ignore} -->
<sup>Opublikowano: **09/02/2025**</sup>

Pierwsza porcja **Nowości**, **Zmian** i **Poprawek** po starcie **Drugiej Edycji**. Witamy nowych graczy i dziękujemy wszystkim za aktywność na serwerze.

<br/>

<div class="container nowosci">

<h3><i class="bi bi-stars"></i>NOWOŚCI</h3>
<hr>

- Wydłużono długość dnia o **5** minut.  
  <sup>Długość nocy pozostaje bez zmian.</sup>
- Gdy gracz spojrzy na zegar w ramce, na górze ekranu pokaże się aktualna godzina na serwerze.
- Dodano **3** nowe flagi do panelu zarządzania działką.
  - **Wzrost Trawy** - Przełącza rozprzestrzenianie się trawy na terenie.
  - **Wzrost Pnącz** - Przełącza rozprzestrzenianie się pnącz na terenie.
  - **Znikanie Liści** - Przełącza znikanie liści.
- Dodano informacje dotyczące sprzedanych przedmiotów do interfejsu aukcji.
- Dodano informację na czacie gdy przedmiot wystawiony na aukcję został sprzedany.
- Dodano komendę **/wiki**, pokazującą link do dokumentacji serwera.
- Dodano hologram z liczbą otwartych skrzynek i oddanych głosów.

</div>

<div class="container zmiany">

<h3><i class="bi bi-gear-fill"></i></i>ZMIANY</h3>
<hr>

- Osadnik sprzedający **Diamentową Motykę** uzupełnia teraz **1** przedmiot zamiast **3**.  
  <sup>W połączeniu z możliwością przepalenia narzędzi w piecu hutniczym, było to wykorzystywane do generowania dużej ilości diamentów bardzo niskim kosztem.</sup>
- Zmieniono tytuł ekranu sprzedawania i kupowania w sklepie. Ma to na celu zmniejszyć ryzyko pomyłki.

</div>

<div class="container poprawki">

<h3><i class="bi bi-bug-fill"></i>POPRAWKI</h3>
<hr>

- Naprawiono błędy związane z przyznawaniem przedmiotów startowych.  
  <sup>Jeżeli ich nigdy nie dostałeś, skontaktuj się z administracją serwera.</sup>
- Naprawiono problemy związane z komendą **/money**.
- Naprawiono brakujące lub nieprawidłowe kolorowanie nicków w niektórych wiadomościach.
- Naprawiono błąd, który powodował że **$25,000** wylosowane ze skrzyni skarbów nie wpływało na konto.
- Naprawiono błąd, który powodował że **Słodkie Jagody** usychały zamiast rosnąć z bardzo wolną prędkością.
- Naprawiono błąd, który powodował że informacja o wypadnięciu główki nie pojawiała się na czacie. (Creeper, Zombie, Szkielet)
- Naprawiono błąd, który powodował że wodorosty niszczyły się podczas próby wzrostu.
- ...oraz kilka innych, mniejszych poprawek.

</div>

**Masz ciekawy pomysł?** Podziel się nim na **[naszym serwerze Discord](https://firedot.pl/discord)**.

<br>

---

## **2.0 — DRUGA EDYCJA** :id=u20 <!-- {docsify-ignore} -->
<sup>Opublikowano: **01/02/2025**</sup>

Serwer został wyczyszczony i przebudowany od podstaw, przenosząc tym samym rozgrywkę na jeszcze wyższy poziom niż dotychczas. Wraz z nową edycją wprowadzonych zostało wiele zmian i nowości których listę znajdziesz poniżej.

<br>

Dziękujemy za udział w poprzednim, i zapraszamy na nowy rozdział serwera!

<br/>

<div class="container nowosci">

<h3><i class="bi bi-stars"></i>NOWOŚCI</h3>
<hr>

- Zaktualizowano wersję **Minecrafta**, na której działa serwer: **1.21.1** ➜ **1.21.4**
  - Dodano **Sakwy** (Bundles), biom **Blady Ogród** (Pale Garden), moba **Trzeszcz** (Creaking) i wiele innych nowości.
  - Pełna lista zmian w **1.21.2** dostępna w tym miejscu: **https://minecraft.wiki/w/Java_Edition_1.21.2**
  - Pełna lista zmian w **1.21.4** dostępna w tym miejscu: **https://minecraft.wiki/w/Java_Edition_1.21.4**
- Dodano nowy, realistyczny **[Generator Świata](generator.md)** charakteryzujący się bardzo dużą różnorodnością.
  - Mapa świata została powiększona i jej rozmiar wynosi teraz **20,000** x **20,000**.
- Dodano nowy, bardziej przejrzysty **Punkt Spawnu** zaprojektowany z myślą o funkcjonalności.
- Dodano całkowicie zredefiniowany **Wymiar Kresu**.
  - Dostęp przez portal z **dowolnej twierdzy** znajdującej się na mapie.
  - Głównym zajęciem na wyspie jest **zaliczanie wyzwań** i **otwieranie skarbców** z zupełnie nowymi nagrodami.
- Dodano **Dom Aukcyjny**, jako formę handlu pomiędzy graczami.
  - Komenda **/auctions** otwiera interfejs domu aukcyjnego.
  - Komenda **/offer (cena)** wystawia na sprzedaż trzymany w ręce przedmiot.
  - Komenda może zostać użyta tylko w obrębie spawnu lub autoryzowanego terenu.
- Dodano **System Ulepszeń**, dzięki którym można:
  - Zwiększyć maks. liczbę **aktywnych terenów**. (Maks. **10**)
  - Zwiększyć maks. liczbę **aktywnych magnetytów**. (Maks. **10**)
  - Zwiększyć maks. liczbę **aktywnych ofert** w **domu aukcyjnym**. (Maks. **12**)
- Dodano **System Poziomów**, zwany **Stopniami**.
  - Stopień to liczba zależna od różnych czynników, mająca na celu wyróżnić graczy aktywnie spędzających czas na serwerze.
  - System będzie rozbudowywany wraz z rozwojem serwera.
- Dodano **System Weryfikacji** pozwalający na przypisanie konta **Discord** do konta na serwerze.
  - Zweryfikowani gracze mają dostęp do dodatkowego zadania dziennego.
  - System będzie rozbudowywany wraz z rozwojem serwera.
- Dodano losowo generowane **Zadania Dzienne**, za których wykonanie przyznawana jest nagroda.
  - Komenda **/quests** otwiera listę dostępnych zadań.
- Dodano **20** nowych **Przedmiotów**:
  - Cztery nowe płyty muzyczne, które można zdobyć m.in. ze skrzynki za oddanie głosu na serwer.
  - **[Koszyk](przedmioty?id=koszyk)** --- Umożliwia przechowywanie i przeniesienie przyjaznego moba w dowolne miejsce.
  - **[Zwój Powrotu](teleportacja?id=zwoje)** --- Umożliwia teleportację na spawn z dowolnego miejsca na mapie.
  - **[Zwój Odzyskania](teleportacja?id=zwoje)** --- Umożliwia teleportację do miejsca ostatniej śmierci, z dowolnego miejsca na mapie.
  - **[Enderyt](przedmioty?id=enderyt)** --- Grupa przedmiotów charakterystycznych dla wymiaru kresu:
    - **Enderytowy Klucz** --- Klucz do skarbców znajdujących się w wymiarze kresu.
    - **Sztabka Enderytu** --- Główny składnik receptury na enderytowe ulepszenie.
    - **Enderytowe Ulepszenie** --- Za jego pomocą można ulepszyć netherytowe wyposażenie do kolejnego poziomu.
    - **Enderytowa Zbroja** --- Dodatkowy poziom zbroi z ulepszonymi statystykami.
    - **Enderytowe Narzędzia** --- Dodatkowy poziom narzędzi z ulepszonymi statystykami.
- Dodano **6** nowych **Zaklęć** na przedmioty.
  - **[Oszczędność](zaklecia?id=oszczednosc)** (Replenish) --- Szansa, że wystrzelona strzała nie zostanie utracona.
  - **[Zasięg](zaklecia?id=zasieg)** (Reach) --- Zwiększa zasięg ataku o **0.25** bloku za każdy poziom.
  - **[Poręczność](zaklecia?id=porecznosc)** (Swift Strike) --- Zwiększa szybkość ataku o **12.5%** za każdy poziom.
  - **[Ognisty Piechur](zaklecia?id=ognisty-piechur)** (Scorch Walker) --- Zamienia powierzchnię lawy a magmę.
  - **[Wędrowiec](zaklecia?id=wedrowiec)** (Stride) --- Pozwala wchodzić po pełnych blokach jak po schodach.
  - **[Wabik](zaklecia?id=wabik)** (Bait) --- Szansa na złowienie kilku przedmiotów za jednym razem.
- Dodano **4** nowe **Kategorie Rankingu**:
  - **Stopień** --- Liczba odzwierciedlająca zaangażowanie gracza na serwerze.
  - **Wykonane Zadania** --- Liczba wykonanych zadań dziennych.
  - **Wykopane Bloki** --- Łączna liczby wszystkich wykopanych bloków.
  - **Zaklęte Przedmioty** --- Łączna liczba wszystkich zaklętych przedmiotów.
- Dodano **2** nowe **Obrazy** do odkrycia przez graczy.
- Dodano **2** nowe **Skrzynki**, do których klucze można kupić za serwerową walutę.
- Dodano powiadomienie na czacie, gdy z zabitego moba wypadła jego głowa.
- Dodano komendę **/border**, za pomocą której można sprawdzić granice dowolnego terenu.
- Dodano komendę **/particles** dostępną dla graczy z rangą **Donator** oraz **Booster**.
  - Cząsteczka wybrana za pomocą tej komendy podąża za graczem.
- Dodano komendę **/shops**, za pomocą której można otworzyć listę sklepów.
  - Komenda może zostać użyta tylko w obrębie spawnu lub autoryzowanego terenu.
- Dodano komendę **/trader**, za pomocą której można otworzyć sklep **Handlarza**.
  - Komenda może zostać użyta tylko w obrębie spawnu lub autoryzowanego terenu.
- Dodano komendę **/upgrades**, za pomocą której można otworzyć sklep z ulepszeniami.
  - Komenda może zostać użyta tylko w obrębie spawnu lub autoryzowanego terenu.

</div>

<div class="container zmiany">

<h3><i class="bi bi-gear-fill"></i></i>ZMIANY</h3>
<hr>

- Zaktualizowano **Paczki Zasobów** dostarczane przez serwer.
  - Kilka nowych tekstur poprawiających doświadczenia wizualne podczas rozgrywki.
  - Odświeżony wygląd interfejsu gracza i niestandardowych ekranów.
  - Banery na tarczach mają teraz jednakową rozdzielczość jak te w formie bloku.
- Zaktualizowano wygląd **Strony Głównej** serwera i **Dokumentacji**.
  - Nowa czcionka tytułowa i bardziej przejrzysta czcionka główna w dokumentacji serwera.
  - Zmiany w kolorystyce i układzie pasków nawigacyjnych i stron dokumentacji.
  - Domyślnie ustawiony jest teraz ciemny motyw.
- Zaktualizowano zawartość **Dokumentacji** serwera.
  - Przepisano tekst na większości stron.
  - Na niektórych stronach można teraz znaleźć spis treści.
  - Dodano kilka nowych stron zawierających przydatne informacje:
    - **[Nawigacja](nawigacja.md)** --- Poradnik w nawigacji po mapie serwera.
    - **[Zaklęcia](zaklecia.md)** --- Lista niestandardowych zaklęć dostępnych na serwerze.
    - **[Przedmioty](przedmioty.md)** --- Lista niestandardowych przedmiotów dostępnych na serwerze.
    - **[Ekonomia](ekonomia.md)** --- Informacje na temat ekonomii serwera.
  - Dodano listę dozwolonych i zabronionych modyfikacji do regulaminu.
- Zaktualizowano komendę **/crafting**, która wyświetla receptury dostępne na serwerze.
  - Interfejs został odświeżony i jest teraz bardziej przejrzysty.
- Ulepszono **Integrację Czatu** z serwerem **Discord**.
  - Wzmianki są teraz wyszczególnione specjalnym kolorem.
  - Dodano oznaczenie, gdy użytkownik odpowiada na czyjąś wiadomość.
- Skrzynie w **Bastionach** i innych strukturach generujących się w **Wymiarze Netheru**, mają teraz unikalną zawartość dla każdego gracza.
  - Każdy gracz może wygenerować zawartość tylko jeden raz.
  - Każdorazowe wygenerowanie zawartości nakłada cooldown o długości od **12h** do **48h**, podczas którego skrzynia nie może wygenerować nowych przedmiotów.
  - Celem jest wyrównanie szansy na zdobycie unikalnych dla wymiaru przedmiotów.
- Zmieniono działanie **Ogniska**.
  - Regeneracja punktów życia jest teraz szybsza i bardziej skuteczna.
  - Gracz znajdujący się w promieniu ogniska nie jest teraz obierany za cel przez moby agresywne.
    - Aktywne tylko przy niskim poziomie oświetlenia oraz w nocy.
- Zaktualizowano **System Głosowania** na serwerze.
  - Dodano komendę **/vote**, która otwiera interfejs pomagający w procesie głosowania.
  - Dodano **2** dodatkowe strony, na których gracz każdego dnia może oddać głos.
  - Zaktualizowano zawartość skrzynki **Głosowanie**.
- Przywrócono klasyczną długość trwania dnia i nocy.
  - W przyszłości planujemy z tym jeszcze poeksperymentować.
- Dodano **1x Sakwa** (Bundle) do przedmiotów startowych i zwiększono ilość otrzymywanego pożywienia.
- Zmniejszono koszt ostatniego ulepszenia terenu: ~~**4x Sztabka Netherytu**~~ ➜ **2x Sztabka Netherytu**
- Zaktualizowano komendy pomocy i ogólne informacje dostępne w grze.
- Indywidualna pozycja w rankingu jest teraz widoczna w tabeli.
- Wither może teraz zostać przywołany tylko w netherze.

</div>

<div class="container poprawki">

<h3><i class="bi bi-bug-fill"></i>POPRAWKI</h3>
<hr>

- Poprawiono problemy związane z flagą **Spawn Mobów**.
  - Spawnery stanowią wyjatęk i nie są już blokowane przez tę flagę.
  - Problemy z nie pojawiającymi się mobami zostały rozwiązane.
- Poprawiono teleportację przez portal powrotny w wymiarze piekła.
  - Gracz nie zostanie już przeniesiony w miejsce, w którym nie może niszczyć ani stawiać bloków.
- Poprawiono nieprawidłowe wyświetlanie się skomplikowanych emoji na czacie.
- Wyłączono możliwość użycia placeholdera **\<item>** przy zmianie nazwy terenu lub magnetytu.
- Cała masa innych poprawek...

</div>

**Masz ciekawy pomysł?** Podziel się nim na **[naszym serwerze Discord](https://firedot.pl/discord)**.

</div>