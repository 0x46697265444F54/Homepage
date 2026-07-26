<style>

.page > div {
  margin-bottom: 0.6em;
}

blockquote:not(sup) h6 {
  margin-top: 1em !important;
  margin-bottom: 0.1em !important;
}

.separator {
  user-select: none;
  display: flex;
  margin: 2.5em 0;
  font-size: var(--font-size-l);
  line-height: var(--font-size-l);
  color: var(--color-mono-3);
}

.separator:before, .separator:after {
  content: '';
  flex-grow: 1;
  background: var(--color-mono-2);
  height: 1px;
  margin: 0.5em 1em;
}

</style>

# Nowości
Historia zmian wprowadzonych na serwer podczas trwania obecnego sezonu. Lista aktualizowana jest zwykle raz w miesiącu lub przed większą aktualizacją.
Jeżeli interesują Cię najświeższe zmiany, znajdują się one na kanale **#changelog** na naszym serwerze Discord.

<br>

<div class="page">

<h4 class="separator" id="07-07-2026">7 Lipca, 2026</h4>

<div class="green">

> ##### @icon[bi-star-fill] Nowości i Zmiany
> Nowości, zmiany i poprawki wprowadzone na przestrzeni ostatnich kilku tygodni.
> - Odblokowano wymiar Netheru na serwerze.
>   - Dodano **Bastionowe Wieże**, nową strukturę generującą dużą ilość lootu.
>   - Odświeżono wygląd **Netherowej Fortecy**.
>   - Odblokowano Netherowe przedmioty w sklepie.
>   - Odblokowano nowe zadania związane z Netherem.
>   - Odblokowano możliwość ulepszenia działki do najwyższego poziomu.
>   - Odblokowano możliwość ulepszenia wyposażenia do poziomu: **Netheryt**
> - Dodano możliwość przełączania wskazówki na kompasie.
>   - Domyślnie wskazuje punkt spawnu w obecnym świecie.
>   - Klikając prawym przyciskiem myszy, można przełączać między poszczególnymi magnetytami i terenami.
> - Dodano możliwość przepalenia włóczni na sztabki.
> - Dodano możliwość ulepszenia końskiej zbroi.
> - Dodano magnetyt na środku mapy, który umożliwia powrót na spawn.
> - Dodano powiadomienia o zresetowaniu limitu sprzedaży.
> - Dodano recepturę niezapisanej książki do **/receptury**.
> - Dodano dźwięk potwierdzający zakup ulepszenia.
> - Dodano wsparcie dla klientów na wersji **26.2**.
> - Dodano dwa nowe zadania do puli.
> - Zwiększono prędkość wzrostu kaktusów na sawannie i powiązanych biomach.
> - Zwiększono limit ryb spawnujących się w rzekach i oceanach.
> - Zwiększono długość dnia o 10 minut.
> - Przestawienie terenu nie resetuje już jego nazwy.
> - Dodano komendę **/podpisz**, za której pomocą można ustawić kolorową nazwę przedmiotu.
>   <sup>Na ten moment koszt ustawienia nazwy wynosi **5** tokenów dla osób wspierających lub **10** tokenów dla pozostałych graczy.</sup>
> - Dodano możliwość przełączenia widzialności ramek na przedmioty za pomocą **Młotka**.
>   <sup>Młotek to przedmiot specjalny, który można zakupić w sklepie w kategorii **Akcesoria**.</sup>
> - Rozszerzono zaklęcie **Magnet** dla motyki o dodatkowe bloki i przedmioty.
>   <sup>**Wodorosty** (Kelp), **Blok suszonych wodorostów** (Dried Kelp Block), **Snop siana** (Hay Block), **Trujący ziemniak** (Poisonous Potato)</sup>
> - Zwiększono prędkość niszczenia niektórych bloków za pomocą motyki.
>   <sup>**Arbuz** (Melon), **Dynia** (Pumpkin), **Bambus** (Bamboo), **Kaktus** (Cactus), **Kakao** (Cocoa)</sup>
> - Dodano więcej mobów możliwych do złapania za pomocą koszyka.
>   <sup>**Delfin** (Dolphin), **Łodzik** (Nautilus), **Wesoły Ghast** (Happy Ghast)</sup>
> - Włączono eksperyment **Minecart Improvements** zmieniający sposób działania wagonów.
>   <sup>Szczegóły: <a href="https://minecraft.wiki/w/Minecart_Improvements">https://minecraft.wiki/w/Minecart_Improvements</a></sup>

</div>

<div class="red">

> ##### @icon[bi-bug-fill] Poprawki
> - Naprawiono drop kamiennych przycisków.
> - Naprawiono drop płyt muzycznych ze skrzyni za głosowanie.
> - Naprawiono kilka niedziałających zadań.
> - Naprawiono kilka błędów w systemie koszyków.
> - Naprawiono kilka błędnie wyświetlających się wiadomości na czacie.
> - Naprawiono kilka błędnie wyświetlających się opisów i nazw przedmiotów.
> - Naprawiono błędy związane z odbieraniem nagród za głosowanie.
> - Naprawiono szybką sprzedaż niedziałającą dla niektórych przedmiotów.
> - Naprawiono wagony z lejami nieprzyjmujące przedmiotów z kontenerów.
> - Naprawiono konie szkielety pojawiające się z nieaktywną pułapką.
> - Przywrócono właściwe zasady spawnowania wariantów żab.
> - Przywrócono możliwość przepalenia kolczej zbroi na bryłki żelaza.
> - Przenoszenie zaklęć z narzędzia na książkę poprawnie resetuje teraz **repair_cost** bazowego przedmiotu.
> - Naprawiono zaklęcie **Kołowrotek** niezużywające wędki.
> - Naprawiono problemy z zaklęciem **Grawitacja** podczas jazdy konno i prawdopodobnie kilka podobnych błędów.
> - Naprawiono niedziałające rozsiewanie kwiatów przy użyciu mączki kostnej.
>   <sup>Rodzaj kwiatów jest zależny od biomu, więc na biomach na których naturalnie się one nie generują (np. Grzybowa wyspa) nie wyrosną żadne kwiaty.</sup>

</div>

<h4 class="separator" id="10-06-2026">10 Czerwca, 2026</h4>
  
<div class="green">

> ##### @icon[bi-star-fill] Zmiany
> Drobne zmiany i poprawki wprowadzone na przestrzeni ostatnich kilku dni.
> - Zmniejszono ceny ulepszeń:
>   - Limit Terenów: ~~$50,000~~ ➜ **$25,000**
>   - Limit Magnetytów: ~~$25,000~~ ➜ **$10,000**
>   - Zasięg Rysowania: ~~$75,000~~ ➜ **$50,000**
>   - Pojemność Skrzyni Endu: ~~$25,000~~ ➜ **$10,000**

</div>

<div class="red">

> ##### @icon[bi-bug-fill] Poprawki
> - Naprawiono odbieranie nagród za głosowanie na serwer.
> - Naprawiono zepsute tekstury wilków.
> - Naprawiono osadników, którzy nie zasiewali plonów po ich zebraniu.
> - Naprawiono nazywanie mobów znacznikami / plakietkami.
> - Naprawiono kupowanie / sprzedawanie kilku produktów w sklepie.
> - Naprawiono wielkość stacku (niektórych) generowanych przedmiotów.
> - Naprawiono okazjonalne znikanie przedmiotów podczas sprzedaży.
> - Naprawiono odejmowanie tokenów podczas zakupu blasku.
> - Poprawiono stabilność serwera i opóźnienie dla graczy z Polski.
> - Poprawiono kompatybilność z **Xaero's World Map** oraz **Voxy**.
> - Zablokowano dostęp do komendy **/handlarz** poza obszarem chronionym.

</div>

<div class="red">

> ##### @icon[bi-bug-fill] Znane Problemy
> - Mączka kostna, po kliknięciu na blok trawy - nie generuje żadnych kwiatów.
> - Głosowanie #3 nie działa ze względu na niedziałającą stronę.
>   <sup>W najbliższym czasie będziemy wymieniać trzeci link głosowania na inny.</sup>

</div>

<h4 class="separator" id="04-06-2026">4 Czerwca, 2026</h4>

<div class="gray">

> ##### @icon[bi-star-fill] Trzecia Edycja
> Nowy sezon to nie tylko aktualizacja serwera do najnowszej wersji gry, ale również porcja świeżych zmian i dodatków. Zgodnie z pierwotnym założeniem, serwer w dalszym ciągu oferuje zbalansowaną i w wielu aspektach utrudnioną rozgrywkę. Wprowadzonych zostało kilka istotnych zmian w początkowej progresji oraz systemie ulepszeń. Co więcej, na graczy czeka ulepszona wersja świata wraz z odświeżonymi strukturami, nowe zaklęcia, przedmioty, poprawki… i wiele więcej.
>
> Od strony technicznej, była to na ten moment największa i najbardziej złożona aktualizacja. Błędy i niedociągnięcia można zgłaszać dowolną drogą komunikacji, ale zachęcam do skorzystania z komendy **/helpop**, która została do tego stworzona.
>
> Tak jak w przypadku poprzednich edycji, planujemy rozwijać i aktualizować serwer wraz z biegiem czasu.

</div>

<div class="blue">

> ##### @icon[bi-globe2] Świat
> Świat został zaktualizowany do najnowszej wersji gry i tym samym dostarcza jeszcze więcej unikalnych krajobrazów.
>
> Większość struktur została przebudowana, oferując ciekawszy, mniej powtarzalny układ oraz więcej wartościowych przedmiotów.
> - **Twierdza**<span class="translation">(Stronghold)</span>
> - **Leśna Posiadłość**<span class="translation">(Mansion)</span>
> - **Posterunek**<span class="translation">(Pillager Outpost)</span>
> - **Chatka Wiedźmy**<span class="translation">(Swamp Hut)</span>
> - **Pradawne Miasto**<span class="translation">(Ancient City)</span>
> - **Dżunglowa Świątynia**<span class="translation">(Jungle Temple)</span>
> - **Podwodna Świątynia**<span class="translation">(Ocean Monument)</span>
> - **Pustynna Świątynia** / **Piramida**<span class="translation">(Desert Temple)</span>
> - **Netherowa Forteca**<span class="translation">(Nether Fortress)</span>
> - **Komnaty Próby**<span class="translation">(Trial Chambers)</span> wyglądają bardziej naturalnie i generują się z mniejszą liczbą bloków miedzi.
> - Na biomie **Bladego Ogrodu**<span class="translation">(Pale Garden)</span> generują się tajemnicze struktury.
> - Na biomach oceanicznych można znaleźć dużą liczbę zatopionych ruin i budowli.
>
> ##### Minerały
> Minerałów jest podobnie dużo jak kiedyś, ale są rozmieszczone w trochę inny sposób.
> - **Węgiel** występuje wszędzie, ale w większych ilościach można go znaleźć na biomach **Bagnistych**.
> - **Miedź** występuje wszędzie, ale największe złoża znajdują się na **Sawannie**, w **Jaskiniach Naciekowych** i na pokrewnych biomach.
> - **Żelazo** znajduje się zwykle w okolicach warstwy łupkowej. Więcej złóż można znaleźć na **Tajdze** i pokrewnych biomach.
> - **Złoto** znajduje się zwykle w głębszej warstwie łupkowej. Więcej złóż można znaleźć na **Badlands** i pokrewnych biomach.
> - **Redstone** znajduje się zwykle w najgłębszej warstwie łupkowej. Więcej złóż można znaleźć na biomach **Dżunglowych**.
> - **Lazuryt** znajduje się zwykle w najgłębszej warstwie łupkowej. Więcej złóż można znaleźć bliżej powierzchni, na biomach **Pustynnych**.
> - **Diamenty** znajdują się zwykle w najgłębszej warstwie łupkowej. Niewielką ilość można również znaleźć powyżej poziomu morza na biomie **Lodowych Kolców**.
> - **Szmaragdy** znajdują się wysoko na biomach **Górskich**. Niewielką ilość można również znaleźć głęboko pod **Lasami**, w **Bujnych Jaskiniach** i **Mrocznych Jaskiniach**.

</div>

<div class="red">

> ##### @icon[bi-fire] Nether, End
> Na samym początku edycji dostępny jest tylko główny wymiar, a **Nether** oraz **End** zostaną odblokowane stopniowo w późniejszym czasie. Ma to na celu spowolnienie początkowej progresji i pozwolić graczom na osiąganie kamieni milowych w zbliżonym tempie i bez pośpiechu.
>
> Bez obaw - nie zamierzamy przez długi czas blokować dostępu do tych wymiarów, a po ich otwarciu będzie można z nich korzystać bez ograniczeń.

</div>

<div class="green">

> ##### @icon[bi-check2-square] Zadania, Questy
> - Reset odbywa się każdego dnia o północy oraz dodatkowo po ukończeniu wszystkich aktywnych zadań.
> - Nagrody za wykonanie zadań zostały zmienione, aby dopasować je do zmian w ekonomii.
> - Dodano pasek postępu zadań wyświetlany w górnej części ekranu.
> - Dodano ponad 30 nowych zadań.

</div>

<div class="pink">

> ##### @icon[bi-stars] Zaklęcia
> - Za pomocą **Kamienia Szlifierskiego** można teraz przenieść zaklęcia z dowolnego przedmiotu na książkę.
> - Za pomocą **Kamienia Szlifierskiego** można teraz usunąć wybrane zaklęcie z książki.
> - Dodano kilka nowych zaklęć. Jest ich teraz łącznie 20.
>   - **Sonic** – Zwiększa prędkość poruszania się o **7.5%** za każdy poziom.
>     - Przeznaczenie: **Buty**
>     - Maks. Poziom: **III**
>     - Wyklucza: **Grawitacja**<span class="translation">(Gravity)</span>, **Prędkość Dusz**<span class="translation">(Soul Speed)</span>, **Głębinowy Wędrowiec**<span class="translation">(Depth Strider)</span>
>     - Sposób Zdobycia: **Zaklinanie**, **Łowienie** oraz **Eksploracja**
>   - **Krytyczne Uderzenie**<span class="translation">(Critical Strike)</span> – Zwiększa obrażenia od krytycznych ataków o **7.5%** za każdy poziom.
>     - Przeznaczenie: **Broń**
>     - Maks. Poziom: **III**
>     - Wyklucza: **Szerokie Ostrze**<span class="translation">(Sweeping Edge)</span>, **Zasięg**<span class="translation">(Reach)</span>, **Poręczność**<span class="translation">(Swift Strike)</span>
>     - Sposób Zdobycia: **Zaklinanie**, **Łowienie** oraz **Eksploracja**
>   - **Kołowrotek**<span class="translation">(Reel)</span> – Automatycznie wyciąga przedmiot z wody po jego złowieniu.
>     - Przeznaczenie: **Wędka**
>     - Maks. Poziom: **I**
>     - Wyklucza: **Brak**
>     - Sposób Zdobycia: **Zaklinanie**, **Łowienie** oraz **Eksploracja**

</div>

<div class="copper">

> ##### @icon[bi-hammer] Ulepszanie Wyposażenia, Progresja oraz Zdobienia
> Zmodyfikowano ścieżkę ulepszeń tak, aby wziąć pod uwagę niedawno dodane miedziane wyposażenie.
> - Dodano **Miedziane Ulepszenie**, przy użyciu którego można ulepszyć kamienne narzędzia lub skórzaną zbroję.
>   - Receptura: **6x Łupek**<span class="translation">(Deepslate)</span> lub **6x Łupkowy Bruk**<span class="translation">(Cobbled Deepslate)</span>, **3x Sztabka Miedzi**
> - Ścieżka ulepszeń w **Stole Kowalskim** została zmodyfikowana w następujący sposób:
>   - Skórzana Zbroja → **Miedziana Zbroja** → Żelazna Zbroja → …
>   - Kamienne Narzędzie → **Miedziane Narzędzie** → Żelazne Narzędzie → …
> - Każde narzędzie można spersonalizować na 198 różnych sposobów za pomocą zdobień.
> - Zdobiona zbroja (i narzędzia) ma teraz unikalną teksturę w ekwipunku.

</div>

<div class="yellow">

> ##### @icon[bi-coin] Ekonomia, Ulepszenia
> Ekonomia przeszła denominację, lecz współczynnik ceny kupna do ceny sprzedaży pozostaje na bardzo podobnym poziomie.
>
> ##### Limity Sprzedaży
> - Czas odnowienia został zmniejszony do 2 godzin.
> - Maks. sprzedaż została zmodyfikowana dla niektórych produktów.
>
> ##### Kategorie
> - Usunięto kategorię **Jeździectwo** i w jej miejsce dodano **Akcesoria**.
> - Tymczasowo zablokowano kategorię **Nether** oraz przedmioty z tego wymiaru znajdujące się w innych kategoriach.
>   <sup>Gdy wymiar będzie otwarty, przedmioty te będą dostępne do kupienia w sklepie.</sup>
>
> ##### Ulepszenia
> Ceny ulepszeń zostały zmienione na statyczne, zwiększono maksymalny poziom niektórych ulepszeń.
> - **Limit Terenów**
>   - Zakres od **1** (Domyślnie) do **25** (Maksymalnie), limit zwiększa się o **1** za każde ulepszenie.
>   - Cena: **$50,000**
> - **Limit Magnetytów**
>   - Zakres od **1** (Domyślnie) do **25** (Maksymalnie), limit zwiększa się o **1** za każde ulepszenie.
>   - Cena: **$25,000**
> - **Limit Ofert**
>   - Zakres od **6** (Domyślnie) do **24** (Maksymalnie), limit zwiększa się o **2** za każde ulepszenie.
>   - Cena: **$10,000**
> - **Zasięg Rysowania**
>   - Zakres od **12** (Domyślnie) do **16** (Maksymalnie), limit zwiększa się o **1** za każde ulepszenie.
>   - Cena: **$75,000**
> - Dodano ulepszenie **Pojemność Skrzyni Endu**, pozwalające na zwiększenie pojemności skrzyni endu.
>   - Zakres od **9** (Domyślnie) do **54** (Maksymalnie), pojemność zwiększa się o **9** za każde ulepszenie.
>   - Cena: **$25,000** / ulepszenie
> - Dodano ulepszenie **Czapka**, odblokowujące komendę kosmetyczną **/hat**.
>   - Cena: **200** Tokenów

</div>

<div class="pink">

> ##### @icon[bi-heart-fill] Osoby Wspierające, Dodatki Kosmetyczne oraz Tokeny
> Rangi **Donator** oraz **Booster** zostały zastąpione rangą **Wspierający** i mogą ją uzyskać również osoby, które w inny niż finansowy sposób przyczyniają się do rozwoju serwera, jego społeczności lub powiązanego oprogramowania open-source.
>
> Dodatkowo, niektóre benefity kosmetyczne dotychczas unikalne dla wyżej wymienionych rang są teraz możliwe do odblokowania przez wszystkich graczy za pomocą **Tokenów**, czyli wirtualnej waluty, którą zdobyć można m.in. jako nagrodę za wykonywanie zadań dziennych, uczestnictwo w eventach, głosowanie.
> - Na ten moment założenie jest takie, aby **Tokeny** oraz odblokowane za ich pomocą korzyści były resetowane wraz z każdą edycją.
>   <sup>Będziemy jednak monitorować cały ten system i dostosowywać ceny / korzyści tak, aby było uczciwie dla wszystkich.</sup>
>   - Ranga **Wspierający** nie jest resetowana wraz z nową edycją. Jest ona w dalszym ciągu przyznawana na czas nieokreślony i nie planujemy tego zmieniać.
> - Komenda **/name**, służąca do ustawienia koloru nicku na czacie, jest teraz dostępna dla wszystkich graczy na poniższych warunkach:
>   - Każdorazowa zmiana koloru kosztuje **Tokeny**, lecz osoby **Wspierające** płacą ułamek ceny.
> - Komenda **/glow**, służąca do włączenia / wyłączenia poświaty, jest teraz dostępna dla wszystkich graczy na poniższych warunkach:
>   - Dostępne do odblokowania są teraz wszystkie wspierane przez grę kolory poświaty.
>   - Każdy kolor poświaty należy odblokować osobno za pomocą **Tokenów**, lecz osoby **Wspierające** płacą ułamek ceny.
> - Komenda **/hat**, służąca do nałożenia niestandardowych bloków na głowę, jest teraz możliwa do odblokowania przez wszystkich graczy.
>   - Wspierający mają do niej darmowy i nieograniczony dostęp.
> - Komenda **/particles** została tymczasowo usunięta ze względów technicznych.
>
> Z powyższych względów, tagi **Donator** oraz **Booster** na serwerze Minecraft zostały zastąpione ikoną, która wyświetla się przed tagiem **Gracz** na czacie i liście graczy.
>
> Spersonalizowany kolor tagu jest w dalszym ciągu dostępny do wyboru przez osoby wspierające i można też wielokrotnie poprosić o jego zmianę.

</div>

<div class="green">

> ##### @icon[bi-shield-fill] Chronione Tereny
> - Przestawienie bloku terenu przenosi również dodanych do niego graczy.
> - Utworzenie nowego terenu nie wymaga już ulepszenia wszystkich poprzednich do maksymalnego poziomu.

</div>

<div class="steel">

> ##### @icon[bi-three-dots] Pozostałe
> - Dodano kolekcjonerskie główki nowych mobów.
> - Dodano komendę **/report** (lub **/helpop**), za której pomocą można skontaktować się z administracją serwera, nawet gdy nie znajduje się ona w danym momencie na serwerze.
> - Dodano komendę **/rolnictwo**, która wyświetla informacje na temat uprawy roślin na poszczególnych biomach.
> - Dodano komendę **/przewodnik**, która wyświetla podstawowe informacje na temat serwera.
> - Dodano niewielką nagrodę za zdobywanie osiągnięć w grze.
> - Dodano główkę gracza wyświetlaną na czacie obok wiadomości.
> - **Pasek nawigacji**<span class="translation">(Locator Bar)</span> jest teraz widoczny tylko dla graczy trzymających w ręce **Kompas**.
>   - Na pasku znajdują się wszyscy inni gracze trzymający w danym momencie kompas.
> - Usunięto wprowadzone na poprzedniej edycji zmiany w systemie naprawiania przedmiotów.
>   <sup>Ze względu na ograniczenia gry implementacja była podatna na błędy, których naprawienie na ten moment jest praktycznie niemożliwe.</sup>
> - Usunięto system **Postępów**, ponieważ nie cieszył się on zbyt dużym zainteresowaniem wśród graczy.
>   <sup>W przyszłości jednak planujemy ponownie odwiedzić ten obszar i wprowadzić w to miejsce coś bardziej sensownego.</sup>
> - Usunięto niestandardowe płyty muzyczne. Nie spełniały one oczekiwań co do jakości i znacząco obciążały paczkę zasobów.
> - Usunięto **Skrzynię Skarbów I** oraz **Skrzynię Skarbów II**.
> - …cała masa innych, mniejszych zmian i poprawek.

</div>

<div class="yellow">

> ##### @icon[bi-trophy-fill] Eventy
> Już niebawem na serwerze pojawią się mini eventy typu **Block Party**, **TNT Run**, **Spleef**, **Snowball Fight** i tym podobne.
>
> Wraz z biegiem czasu będziemy dodawać nowe minigierki, które postaramy się regularnie hostować.
>
> Za udział w eventach przyznawane będą nagrody, w tym klucze do **Eventowej Skrzyni** oraz **Tokeny**.

</div>

<div class="steel">

> ##### @icon[bi-box-fill] Paczka Zasobów
> Serwerowa paczka została skompletowana na nowo. Część zasobów została zmieniona, ale zdecydowana większość pozostaje bez zmian.
> - Wewnętrzny system odpowiadający za kompletowanie i serwowanie paczek został zmodernizowany od strony technicznej.
> - Dźwięki deszczu oraz uderzeń piorunów zostały po raz kolejny zmienione i są teraz lepiej skompresowane.
> - Odświeżono wygląd tagów dla każdej rangi oraz wygląd / układ niektórych interfejsów.
> - Zaktualizowano pozostałe paczki i poprawiono napotkane błędy.
> - Dodano kilka nowych paczek.

</div>

</div>
