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

## **2.0.0 — DRUGA EDYCJA**<!-- {docsify-ignore} -->
<sup>Opublikowano: **XX/XX/XXXX**</sup>

Serwer został wyczyszczony i przebudowany od podstaw, przenosząc tym samym rozgrywkę na jeszcze wyższy poziom nich dotychczas. Wraz z nową edycją wprowadzonych zostało wiele zmian i nowości których listę znajdziesz poniżej. Dziękujemy za udział w poprzednim, i zapraszamy na nowy rozdział serwera!

<br/>

<div class="container nowosci">

<h3><i class="bi bi-stars"></i>NOWOŚCI</h3>
<hr>

- Zaktualizowano wersję **Minecrafta**, na której działa serwer: **1.21.1** ➜ **1.21.4**
  - Dodano **Sakwy** (Bundles), biom **Blady Ogród** (Pale Garden), moba **Trzeszcz** (Creaking) i wiele innych nowości.
  - Pełna lista zmian w **1.21.2** dostępna w tym miejscu: **https://minecraft.wiki/w/Java_Edition_1.21.2**
  - Pełna lista zmian w **1.21.4** dostępna w tym miejscu: **https://minecraft.wiki/w/Java_Edition_1.21.4**
- Zupełnie **nowy**, **realistyczny** i bardzo **różnorodny** generator świata, który pozwala **poznać** świat gry **na nowo**.
  - Więcej informacji na zaktualizowanej stronie: **[Generator Świata](generator.md)**
- Zupełnie **nowy** i bardziej **funkcjonalny** obszar spawnu.
  - Więcej informacji wokoło i mniej niewykorzystanej przestrzeni powinny poprawić pierwsze wrażenia z rozgrywki.
  - Dodano kilka interaktywnych NPC i hologramów pomagających w poznaniu serwera i nawigacji po okolicy. Między innymi:
    - **Handlarz** --- Szybki dostęp do wybranego sklepu bez konieczności szukania poszczególnych sklepikarzy.
    - ...
- Dodano nowy przedmiot --- **[Koszyk](przedmioty?id=koszyk)**, który pozwala **przechować** lub **przenieść** przyjaznego moba w dowolne miejsce.
- **(TODO)** Dodano system **poziomów**, aby wyróżnić stałych graczy na serwerze.
  - Dodana została nowa kategoria rankingu - **Maksymalny Poziom**, która wyróżniać będzie graczy z największą wartością poziomu.
  - Wartością jest maksymalny poziom doświadczenia jaki gracz posiadał w jednym momencie.
  - Poziomy wyświetlają się na czacie i na ten moment stanowią jedynie element kosmetyczny.
- Dodano **6** nowych **zaklęć** na przedmioty.
  - **[Oszczędność](zaklecia?id=oszczednosc)** (Replenish) --- Szansa, że wystrzelona strzała nie zostanie użyta podczas strzału.
  - **[Zasięg](zaklecia?id=zasieg)** (Reach) --- Zwiększa zasięg ataku o **0.25** bloku za każdy poziom.
  - **[Poręczność](zaklecia?id=porecznosc)** (Swift Strike) --- Zwiększa szybkość ataku o **12.5%** za każdy poziom.
  - **[Ognisty Piechur](zaklecia?id=ognisty-piechur)** (Scorch Walker) --- Zamienia powierzchnię lawy a magmę.
  - **[Wędrowiec](zaklecia?id=wedrowiec)** (Stride) --- Pozwala wchodzić po pełnych blokach jak po schodach.
  - **[Wabik](zaklecia?id=wabik)** (Bait) --- Szansa na złowienie kilku przedmiotów za jednym razem.
- Dodano komendę **/border**, za pomocą której można sprawdzić granice dowolnego terenu.
- Dodano powiadomienie na czacie, gdy z zabitego moba wypadła jego głowa.
- ...

</div>

<div class="container zmiany">

<h3><i class="bi bi-gear-fill"></i></i>ZMIANY</h3>
<hr>

- Paczki zasobów dostarczane przez serwer zostały zaktualizowane i skompletowane na nowo.
  - Kilka nowych tekstur poprawiających doświadczenia wizualne podczas rozgrywki.
  - Odświeżony wygląd interfejsu gracza i niestandardowych ekranów.
  - Banery na tarczach mają teraz jednakową rozdzielczość jak te w formie bloku.
- Zaktualizowano wygląd strony głównej serwera i dokumentacji.
  - Nowa czcionka tytułowa i bardziej przejrzysta czcionka główna w dokumentacji serwera.
  - Zmiany w kolorystyce i układzie pasków nawigacyjnych i stron dokumentacji.
- Zaktualizowano zawartość dokumentacji serwera.
  - Przepisano tekst na większości stronach.
  - Na niektórych stronach można teraz znaleźć spis treści.
  - Dodano kilka nowych stron zawierających przydatne informacje:
    - **[Nawigacja](nawigacja.md)** --- Poradnik w nawigacji po mapie serwera.
    - **[Zaklęcia](zaklecia.md)** --- Lista niestandardowych zaklęć dostępnych na serwerze.
    - **[Przedmioty](przedmioty.md)** --- Lista niestandardowych przedmiotów dostępnych na serwerze.
- Ulepszono **integrację** czatu **Minecraft** ⟷ **Discord**.
  - Wzmianki są teraz wyszczególnione specjalnym kolorem.
  - Dodano oznaczenie, gdy użytkownik odpowiada na czyjąś wiadomość.
- Dodano **1x Sakwa** (Bundle) do przedmiotów startowych i zwiększono ilość otrzymywanego pożywienia.
- Skrzynie w **bastionach** i innych strukturach generujących się w **wymiarze netheru**, mają teraz **unikalną zawartość** dla **każdego** gracza.
  - Zawartość jest generowana w momencie, gdy gracz otwiera skrzynię.
  - Każdy gracz może wygenerować zawartość tylko jeden raz.
  - Każdorazowe wygenerowanie zawartości nakłada cooldown o długości 12-48h, podczas którego skrzynia nie może wygenerować nowych przedmiotów.
  - Celem jest wyrównanie szansy na zdobycie unikalnych dla wymiaru przedmiotów, a zarazem zminimalizować konieczność jego regularnego resetowania.
- Banery na tarczach mają teraz jednakową rozdzielczość jak te w formie bloku.
- ...

</div>

<div class="container poprawki">

<h3><i class="bi bi-bug-fill"></i>POPRAWKI</h3>
<hr>

- Poprawiono problemy związane z flagą **Spawn Mobów**.
  - Spawnery stanowią wyjatęk i nie są już blokowane przez tę flagę.
  - Ryby, aksoloty i kijanki nie znikają już po użyciu wiaderka.
- Poprawiono teleportację poprzez portal powrotny w wymiarze piekła. Gracz nie zostanie już przeniesiony w miejsce, w którym nie może niszczyć ani stawiać bloków.
- Poprawiono nieprawidłowe wyświetlanie się skomplikowanych emoji na czacie w grze.
- Wyłączono możliwość użycia placeholdera **\<item>** przy zmianie nazwy terenu lub magnetytu.
- ...

</div>

**Masz ciekawy pomysł?** Podziel się nim na **[naszym serwerze Discord](https://firedot.pl/discord)**.

</div>