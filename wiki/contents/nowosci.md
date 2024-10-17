<span></span> <!-- EMPTY TAG TO INCREASE SPACE BETWEEN NAVBAR AND CONTENT -->

# **Nowości**
Lista zmian i nowości. Dołącz do [naszego serwera Discord](../discord), aby otrzymywać powiadomienia o aktualizacjach i być na bieżąco.

---

### AKTUALIZACJA v1.3.0 &nbsp; — &nbsp;  31/08/2024 <!-- {docsify-ignore} -->
Nowości i zmiany wprowadzone na serwer w minionym czasie.

#### <span class="green">NOWOŚCI ⤵</span>
- Dodano niską szansę na wypadnięcie głowy moba po jego śmierci. Pełna kolekcja liczy **150** główek.
- Dodano głowę gracza do przedmiotów, które upuszcza w przypadku śmierci z ręki innego gracza.
- Dodano (opcjonalną) integrację z modem **[Ping Wheel](https://modrinth.com/mod/ping-wheel)**. **¹**
- Dodano (opcjonalną) integrację z modem **[Simple Voice Chat](<https://modrinth.com/plugin/simple-voice-chat>)**. **²**
- Dodano brakujące przyciski na **[stronie internetowej serwera](https://firedot.pl)**.
- Dodano **3** nowe przedmioty do sklepu u **Farmera**.
- Dodano **13** nowych bloków do sklepu u **Robotnika**.
- Dodano nowego NPC - **Łowcę** - u którego możesz kupić lub sprzedać niektóre przedmioty pozyskane z mobów.
- Dodano nowego NPC - **Tułacza** - u którego możesz kupić lub sprzedać niektóre przedmioty pozyskane w wymiarze piekła.
- Dodano nowy przedmiot -  **Młotek** - zwiększający zasięg budowania o kilka bloków. Można go kupić u handlarza obok tabeli z rankingiem.
- Dodano bezpieczne wymiany pomiędzy graczami. Kucnij i naciśnij **PPM** patrząc na gracza, z którym chcesz się wymienić.
- Dodano (wizualny) status **AFK**, który po 5 minutach nieaktywności wyświetla się obok nicku na liście graczy.

#### <span class="yellow">ZMIANY ⤵</span>
- Kilka drobnych poprawek wizualnych na spawnie mających na celu ułatwienie nawigacji.
- Do przedmiotów startowych dodane zostały dwa magnetyty.
- Transfer pieniędzy jest teraz również dostępny pod komendą **/pay**.
- Wykluczono moba **Silverfish** (Rybik cukrowy) z rankingu zabitych mobów.
- Komenda **/claims** może teraz zostać użyta również przez członków terenu.
- Dywany i tym podobne nie blokują już przestrzeni pomiędzy stołem do zaklęć a biblioteczkami.

#### <span class="red">POPRAWKI ⤵</span>
- Poprawiono stabilność połączenia z serwerem. **³**
- Poprawiono brak możliwości interakcji z łódkami na terenie spawnu.
- Poprawiono znikające skiny niektórych NPC znajdujących się na spawnie.
- Poprawiono pustą wiadomość na czacie w grze gdy na kanale zintegrowanym wysłany został załącznik bez żadnego tekstu.
- Poprawiono błąd sprawiający że zaklęcie **Rejuvenation** (Żywotność) wykluczało się z zaklęciem **Unbreaking**.
- ...kilka innych, mniej widocznych poprawek technicznych.

<br>

<div style="color:gray;font-size:80%">

1. Wymagane jest ustawienie prywatnego kanału w konfiguracji: **/pingwheel config**
2. Czat głosowy podlega takiej samej moderacji jak czat tekstowy.
3. Zmieniony został dostawca usług hostingowych, a więc tym samym specyfikacja, lokalizacja oraz parametry sieciowe.

</div>

---

### AKTUALIZACJA v1.2.1 &nbsp; — &nbsp;  04/08/2024 <!-- {docsify-ignore} -->
Klika zmian i poprawek zaproponowanych przez graczy.

#### <span class="green">NOWOŚCI ⤵</span>
- Dodano nagrody za głosowanie na serwer. Więcej informacji po komendą **/pomoc glosowanie**.
- Dodano komendę **/rtp** wyjaśniającą proces losowej teleportacji.

#### <span class="yellow">ZMIANY ⤵</span>
- Współdzielone tereny są teraz przedstawiane w panelu za pomocą **główek ich właścicieli**.
- Zmieniono nieco układ receptur dostępnych pod komendą **/crafting**.
- Zmiany w sklepach prowadzonych przez mieskańców spawna. (NPC)
  - **Farmer**: Dodano możliwość zakupu pszenicy (**$120**).
  - **Farmer**: Dodano możliwość zakupu i sprzedaży **kaktusów** (**$180** / **$45**) oraz **netherowych brodawek** (**$480** / **$80**).
  - **Kowal**: Usunięto sztabki żelaza i sztabki złota ze sklepu. Nadal można kupić lub sprzedać surowe odpowiedniki tych minerałów.
  - **Kowal**: Dodano możliwość zakupu i sprzedaży odłamków netherytu. (**$16,400** / **$2,750**)
  - **Robotnik**: Dodano możliwość sprzedaży bloków.
  - **Robotnik**: Dodano kilka nowych bloków do kupienia.
- Zmodyfikowano niektóre zaklęcia:
  - Zmniejszono maksymalny poziom zaklęcia **Rejuvenation** (Żywotność) z **5** na **3**.
  - Zaklęcia **Scholar of Blocks** (Znawca bloków) i **Scholar of Mobs** (Znawca mobów) są teraz niekompatybilne z **Looting** (Grabież).
  - Zaklęcia **Scholar of Blocks** (Znawca bloków) i **Scholar of Mobs** (Znawca mobów) mają teraz szansę na pojawienie się w stole do zaklinania równą zaklęciu **Fortune** (Szczęście).
  - Zaklęcie **Gravity** (Grawitacja) pozwala teraz skoczyć na wysokość **~3.6 bloków**. (wcześniej ~2.6 bloków)
  - Poniższe zaklęcia mogą teraz, za pomocą książek, zostać nałożone na siekierę:
    - **Fire Aspect** (Zaklęty ogień)
    - **Poison Aspect** (Zatrucie)
    - **Wither Aspect** (Obumieranie)
    - **Slowness Aspect** (Spowolnienie)
    - **Weakness Aspect** (Osłabienie)

#### <span class="red">POPRAWKI ⤵</span>
- Poprawiono błędne wyświetlanie się czcionek po zalogowaniu się w pobliżu hologramów.
- Poprawiono wyświetlanie się nieprawidłowych przedmiotów (powietrze) podczas linkowania na czacie za pomocą **<item>**. 
- Poprawiono błędnie ustawioną prędkość wzrostu roślin na biomach, na których nie powinny rosnąć w ogóle. Teraz wynosi ona **5%**.

---

### AKTUALIZACJA v1.2.0 &nbsp; — &nbsp;  29/07/2024 <!-- {docsify-ignore} -->
Kolejna aktualizacja serwera już dostępna. Więcej zmian skupiających się na ekonomii w niedalekiej przyszłości.

#### <span class="green">NOWOŚCI ⤵</span>
- Dodano rangę kosmetyczną **Booster** dla osób boostujących nasz serwer Discord.
- Dodano sklep rybacki znajdujący się w pobliżu pomostu w porcie.
- Dodano możliwość sprzedaży drewna w sklepie u drwala.
- Dodano automatyczne wiadomości na czacie.
- Dodano możliwość siadania na schodkach.
- Dodano na czacie informacje o śmierciach.
- Dodano **[tesktury (podstawowych) emoji](<https://modrinth.com/resourcepack/pixel-twemoji-9x>)**, które mogą być wysyłane przez użytkowników korzystających ze zintegrowanego kanału #chat.

#### <span class="yellow">ZMIANY ⤵</span>
- Zwiększono ceny sprzedaży w sklepie rolniczym o **50%**.
- Zmniejszono czas pomiędzy resetami limitu sprzedaży w sklepie rolniczym z **8h** do **4h**.
- Nowo postawione stojaki na zbroję mają teraz dwie ręce, które można wyposażyć w wybrany przedmiot.
- W panelu zarządzania widać teraz świat w którym postawiony został magnetyt bądź teren.
- Upiększono wygląd listy graczy i dodano więcej informacji:
  - Dodano zegar serwera.
  - Dodano liczbę graczy online.
  - Dodano liczbę aktywnych terenów / działek.
  - Dodano liczbę aktywnych magnetytów / teleportów.

#### <span class="red">POPRAWKI ⤵</span>
- Naprawiono dźwięk otwierania skrzynki, który grał wszystkom graczom zamiast tylko tym w pobliżu skrzynki.
- Poprawiono datę utworzenia magnetytu i terenu. Teraz wyświetla się we właściwej strefie czasowej i formacie 24-godzinnym.
- Punkty doświadczenia zdobyte z zaklęciem **Magnet** wpadają nawet gdy ten nie ma miejsca w ekwipunku.
- Naprawiono błąd, przez który czasami niemożliwe było otwarcie panelu zarządzania terenem.

---

### AKTUALIZACJA v1.1.0 &nbsp; — &nbsp;  25/07/2024 <!-- {docsify-ignore} -->
Czwarta aktualizacja serwera, dodająca między innymi możliwość przekazania magnetytu innemu graczowi.

#### <span class="green">NOWOŚCI ⤵</span>
- Dodano możliwość **przekazania magnetytu innemu graczowi**.
- Teleportacja w pojeździe, np. łódce, **teleportuje teraz również pojazd wraz z pasażerami**. Można w ten sposób zabrać ze sobą innego gracza lub moba w miejsce docelowe.

#### <span class="yellow">ZMIANY ⤵</span>
- Eksperymentalnie zwiększono długość dnia z **10min** na **15min**. Cykl nocy pozostaje bez zmian i nadal trwa **10min**.
- Otworzyć panel zarządzania terenem lub magnetytem można teraz trzymając w ręce dowolny przedmiot.
- Zmieniono kolory wiadomości i przycisków w panelu zarządzania terenem i magnetytem.
- Ulepszono kilka wiadomości na czacie, m.in. gdy stawiany jest blok terenu.

---

### AKTUALIZACJA v1.0.3 &nbsp; — &nbsp;  23/07/2024 <!-- {docsify-ignore} -->
Trzecia, mniejsza aktualizacja z kolejną porcją zmian i poprawek.

#### <span class="yellow">ZMIANY ⤵</span>
- Zwiększono zasięg rysowania z **8** chunków na **12**.
- Enchant **Magnet** teraz przyciąga też bloki rud.

#### <span class="red">POPRAWKI ⤵</span>
- Naprawiono wyświetlanie się obrażeń zadanych mobom i graczom.
- Naprawiono przyciski wyświetlające się w niewłaściwym miejscu podczas przeglądania listy graczy dodanych do terenu.

---

### AKTUALIZACJA v1.0.2 &nbsp; — &nbsp;  21/07/2024 <!-- {docsify-ignore} -->
Druga aktualizacja już dostępna na serwerze. Obecnie skupiam się na poprawkach i zmianach proponowanych przez graczy. Wkrótce jednak wprowadzanych będzie więcej nowości!

#### <span class="green">NOWOŚCI ⤵</span>
- Podczas trzymania w ręku mapy, na górze ekranu wyświetla się nazwa biomu na którym obecnie znajduje się gracz.

#### <span class="yellow">ZMIANY ⤵</span>
- Zmieniono reguły zachowywanie ekwipunku. Przedmioty trzymane w rękach nie wypadają już po śmierci.
- Dodano **słodkie jagody** do sklepu rolniczego.
- Zwiększono limity sprzedawania przedmiotów w sklepie rolniczym z **64** do **96** na każdy artykuł.
- Wyłączono losową szansę na uschnięcie rośliny. Rośliny usychają teraz tylko gdy zostały posadzone na niewłaściwym biomie.

#### <span class="red">POPRAWKI ⤵</span>
- Naprawiono wypadanie odłamków ametystu.
- Rozmnażanie zwierząt na terenie z wyłączoną flagą **Spawn Mobów** jest już możliwe.

---

### AKTUALIZACJA v1.0.1 &nbsp; — &nbsp;  20/07/2024 <!-- {docsify-ignore} -->
Dziękuję wszystkim za obecność na otwarciu i miłe przyjęcie konfiguracji i stylu serwera. Znalazło się kilka błędów, ale większość z nich została już naprawiona.

#### <span class="yellow">ZMIANY ⤵</span>
- Dodano kompas i blok terenu do przedmiotów startowych.
- Zmniejszono ilość spawnujących się mobów.
- Zmniejszono szansę na uschnięcie plonów z **5%** na **1%**.
- Wyłączono usychanie sadzonek drzew.

#### <span class="red">POPRAWKI ⤵</span>
- Naprawiono okazjonalne problemy z wysyłaniem wiadomości na czacie.
- Naprawiono odradzanie się na łóżku i kotwicy odrodzenia.
- Naprawiono zasady zachowywania ekwipunku po śmierci.
- Naprawiono dostęp do komendy **/overlay** dla rangi **Media**.