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

    i {
        font-size: 0.9em;
        padding-right: 0.5em;
    }

    hr {
        margin: 0.75em 0 1em 0;
        border-bottom: 2px solid color-mix(in srgb, var(--color), transparent 75%);
    }
}
</style>

<span class="soon" style="background-color:rgb(176, 127, 209)">WORK IN PROGRESS</span> <span class="soon">FIREDOT 2.0 JUŻ WKRÓTCE</span>

# **Nowości**
Lista zmian i nowości. Dołącz do [naszego serwera Discord](https://firedot.pl/discord), aby otrzymywać powiadomienia o aktualizacjach i być na bieżąco.

---

<div class="page">

## **2.0.0 — DRUGA EDYCJA** <!-- {docsify-ignore} -->
<sup>Opublikowano: **XX/XX/XXXX**</sup>

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
- Dodano **System Weryfikacji** pozwalający na przypisanie konta **Discord** do nicku.
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
- Dodano komendę **/efekty** dostępną dla graczy z rangą **Donator** oraz **Booster**.
  - **Cząsteczka** wybrana za pomocą tej komendy **podąża za graczem**.
- Dodano komendę **/shops**, za pomocą której można otworzyć listę sklepów.
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
- Zaktualizowano zawartość **Dokumentacji** serwera.
  - Przepisano tekst na większości stron.
  - Na niektórych stronach można teraz znaleźć spis treści.
  - Dodano kilka nowych stron zawierających przydatne informacje:
    - **[Nawigacja](nawigacja.md)** --- Poradnik w nawigacji po mapie serwera.
    - **[Zaklęcia](zaklecia.md)** --- Lista niestandardowych zaklęć dostępnych na serwerze.
    - **[Przedmioty](przedmioty.md)** --- Lista niestandardowych przedmiotów dostępnych na serwerze.
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
- Dodano **1x Sakwa** (Bundle) do przedmiotów startowych i zwiększono ilość otrzymywanego pożywienia.
- Zmniejszono koszt ostatniego ulepszenia terenu: ~~**4x Sztabka Netherytu**~~ ➜ **2x Sztabka Netherytu**
- Indywidualna pozycja w rankingu jest teraz widoczna w tabeli.

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