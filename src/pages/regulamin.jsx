import * as React from 'react';
import { Box } from '../components/Boxes/Boxes.styles';
import GoBack from '../components/GoBack/GoBack';

const regulamin = () => (
  <Box
    style={{
      maxWidth: '1120px', padding: '0 24px', margin: '24px auto', marginBottom: '64px',
    }}
    isColumn
  >
    <GoBack />

    <h1>Regulamin – dokument obowiązujący od 12.01.2023</h1>
    <h2>I. Postanowienia ogólne.</h2>
    <h3>
      {/* eslint-disable-next-line max-len */}
      1. Niniejszy dokument: "Regulamin", określa podstawowe zasady i warunki świadczenia usług fotograficznych
      oraz
      sprzedaży produktów za pośrednictwem aplikacji mobilnej Mobile Photo Kiosk (dalej „MPK”) opublikowanej
      przez Pixel-Tech Spółka Jawna Pytowski i Kubarek z siedzibą w Dąbrowie Górniczej, adres: 41-303 Dąbrowa
      Górnicza, ul. Laski 6A, zarejestrowaną w rejestrze przedsiębiorców Krajowego Rejestru Sądowego
      prowadzonym przez Sąd Rejonowy Katowice – Wschód, VIII Wydział Gospodarczy KRS, pod numerem
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      0000358467, posiadająca numer NIP: 644-328-72-39 (dalej "Wydawca”).
    </h3>
    <h3>2. Na potrzeby Regulaminu wprowadza się następujące definicje:</h3>
    <p>
      1) Wydawca – PIXEL-TECH Sp. J. Pytowski i Kubarek, NIP: 644-328-72-39, REGON: 240352530, z siedzibą
      w 41-303 Dąbrowa Górnicza, ul. Laski 6A;
    </p>
    <p>
      2) Aplikacja - aplikacja mobilna “Mobile Photo Kiosk” wydana przez Wydawcę i udostępniana Klientom, w celu
      umożliwienia składania za jej pomocą zamówień na Produkty i Usługi Laboratoriów;
    </p>
    <p>
      3) Laboratorium – Fotografowanie Bernadetta Mentel
      <b>KOD: 9174</b>
    </p>
    <p>4) Klient – Użytkownik Aplikacji będący klientem Laboratorium;</p>
    <p>
      5) KOD QR – kod kreskowy na którym zapisane są dane umożliwiające dostęp do Sklepu prowadzonego
      przez Laboratorium za pośrednictwem Aplikacji;
    </p>
    <p>
      {' '}
      6) KOD – kod numeryczny umożliwiający dostęp do Sklepu prowadzonego przez Laboratorium za
      pośrednictwem Aplikacji;
    </p>
    <p>
      7) Regulamin – regulamin określający zasady świadczenia przez Laboratorium Usług fotograficznych i
      oferowania Produktów
    </p>
    <p>8) Produkt – towar oferowany Klientowi przez Laboratorium bezpośrednio lub za pośrednictwem Aplikacji;</p>
    <p>
      9) Usługi fotograficzne – usługi fotograficzne Laboratorium, w ramach których Laboratorium wykonuje i
      dostarcza Klientom Produkty, na zasadach opisanych w niniejszym Regulaminie;
    </p>
    <p>
      10) Operator płatności – zewnętrzny w stosunku do Administratora podmiot - Centrum Rozliczeniowe Dotpay –
      pośredniczący w rozliczaniu płatności między Klientem a Laboratorium;
    </p>
    <p>
      11) Regulamin Sklepu – regulamin określający zasady na jakich Laboratorium prowadzące Sklep realizacji
      Zamówienia Klientów;
    </p>
    <p>
      12) Sklep – profil Laboratorium udostępniany przy pomocy Aplikacji, za pośrednictwem którego możliwe jest
      składanie zamówień na Produkty lub Usługi Laboratorium;
    </p>
    <p>
      13) Materiały – materiały cyfrowe udostępniane przez Klienta Laboratorium za pośrednictwem Aplikacji w celu
      wykonania Produktów i realizacji Zamówienia;
    </p>
    <p>
      14) Zlecenie – zamówienie składane przez Klienta na przygotowanie Produktów lub świadczenie Usług
      Laboratorium za pośrednictwem Aplikacji.
    </p>
    <h3>
      3. Podmiotem odpowiedzialnym za realizację Usług fotograficznych oraz sprzedaży Produktów jest
      Laboratorium.
    </h3>
    <h3>
      4. Świadczenie Usług fotograficznych i sprzedaż Produktów polega w szczególności na wykonywaniu przez
      Laboratorium odbitek fotografii przekazanych przez Klienta (osobę fizyczną lub prawną) na papierze
      fotograficznym, innym materiale lub produkcie (wybranym przez Klienta z oferty Laboratorium) i wykonywaniu w
      szczególności kalendarzy (np. ściennych, biurkowych), plakatów, fotoksiążek, kartek okolicznościowych,
      okładek, elementów dekoracyjnych lub fotogadżetów (np. kubków, koszulek) o cechach indywidualnych
      nadanych im przez Klienta na podstawie Zlecenia, które Klient przesyła Laboratorium wraz z Materiałami za
      pośrednictwem Aplikacji, przy czym zakres świadczonych Usług fotograficznych i oferowanych Produktów
      określa Laboratorium za pośrednictwem funkcjonalności Sklepu.
    </h3>
    <h3>
      5. Przez Klienta będącego konsumentem rozumie się osobę fizyczną, która dokonuje z Laboratorium czynności
      prawnej niezwiązanej bezpośrednio z działalnością gospodarczą lub zawodową tej osoby.
    </h3>
    <h2>II. Szczegółowe warunki realizacji Zleceń</h2>
    <h3>1. W celu złożenia Zlecenia Klient zobowiązany jest do:</h3>
    <p>1) Zainstalowania Aplikacji oraz wyrażenia zgody na jej Regulamin;</p>
    <p>2) Wprowadzenie indywidualnego Kodu Laboratorium lub Kodu QR;</p>
    <p>
      3) Zaakceptowania regulaminu świadczenia usług przez Laboratorium oraz wyrażenia zgody na przetwarzanie
      danych osobowych w zakresie niezbędnym dla realizacji Zamówienia.
    </p>
    <h3>
      2. Przed złożeniem każdego Zlecenia Klientowi zapewnia się możliwość nieodpłatnego zapoznania
      z treścią Regulaminu oraz pobrania treści Regulaminu w sposób zapewniający Klientowi możliwość
      przechowywania treści Regulaminu, odtwarzania treści Regulaminu w niezmienionej postaci oraz
      dostępu do treści Regulaminu w przyszłości (ze strony Laboratorium ten dostęp Klienta do treści
      Regulaminu nie jest ograniczony czasowo). W celu uniknięcia jakichkolwiek wątpliwości,
      Laboratorium wskazuje, że umowa Laboratorium z Klientem nie jest stosunkiem umownym o charakterze ciągłym w
      myśl art. 384(1) kodeksu cywilnego. W zakresie realizacji umowy Strony
      pozostają związane treścią Regulaminu udostępnioną Klientowi przed zawarciem umowy.
    </h3>
    <h3>
      3. Laboratorium wskazuje, że treść Regulaminu jest również dostępna dla Klienta (do zapoznania się oraz
      pobrania) na stronie internetowej:
      <a href="https://www.janik-mentel.pl">www.janik-mentel.pl</a>
      .
    </h3>
    <h3>
      4. Złożyć Zlecenie za pośrednictwem Aplikacji może jedynie Klienta będący osobą fizyczną, która ukończyła 18
      lat
      i posiada pełną zdolność do czynności prawnych, osobą prawną albo jednostką organizacyjną nieposiadającą
      osobowości prawnej, ale mogącą we własnym imieniu nabywać prawa i zaciągać zobowiązania.
    </h3>
    <h3>5. W celu złożenia Zlecenia, Klient zobowiązany jest do:</h3>
    <p>1) podanie danych wskazanych w formularzu Zlecenia, wymaganych dla jego realizacji;</p>
    <p>
      2) przekazania Materiałów koniecznych dla realizacji Zlecenia, w formacie i standardzie wskazanym
      w Sklepie;
    </p>
    <p>3) wyboru metody dostawy i sposobu płatności;</p>
    <p>4) potwierdzenie złożenia Zlecenia.</p>
    <h3>
      6. Przesłanie przez Klienta do Laboratorium prawidłowo i kompletnie wypełnionego formularza zlecenia jest
      równoznaczne z zawarciem pomiędzy Klientem a Laboratorium umowy jednorazowego Zlecenia na wykonanie
      określonej przez Klienta Usługi i dostawę Produktów. Po otrzymaniu od Klienta Zlecenia wykonania usługi na
      podany przez Klienta adres e-mail przekazywane jest potwierdzenie złożenia Zlecenia.
    </h3>
    <h3>
      7. W przypadku, gdyby Zlecenie naruszało powszechnie obowiązujące przepisy prawa, Laboratorium może
      poinformować o tym Klienta, a w prawnie uzasadnionych przypadkach ma prawo odmówić przyjęcia takiego
      zlecenia do realizacji.
    </h3>
    <h3>
      8. W przypadku wystąpienia uzasadnionych wątpliwości Laboratorium dotyczących treści zlecenia Klienta (w
      szczególności wynikających z nieprecyzyjnego lub wieloznacznego określenia treści zlecenia przez Klienta),
      Laboratorium zastrzega sobie prawo skontaktowania się z Klientem w celu weryfikacji treści zlecenia
      Klienta.
    </h3>
    <h3>
      9. W przypadku, gdyby w trakcie składania (wysyłania) zamówienia Klient napotkał jakiekolwiek niedogodności
      lub
      problemy (np. z powodu przerwy w dostępie Klienta do Internetu lub zawieszenia się komputera Klienta lub
      strony internetowej na jego komputerze) Laboratorium zastrzega, aby nie ponawiać składania zamówienia przez
      najbliższe 60 minut. Po otrzymaniu od Klienta zlecenia wykonania Usługi Laboratorium automatycznie
      powiadamia Klienta drogą elektroniczną (na podany przez Klienta adres e-mail), o przyjęciu Usługi do
      realizacji.
      Takie powiadomienie jest wysyłane na adres e-mail Klienta w ciągu 60 minut od zakończenia składania
      zamówienia. Po upływie tego czasu, a przed ewentualnym ponowieniem próby złożenia zamówienia Klient
      powinien upewnić się czy wiadomość e-mail o przyjęciu wcześniej wysłanego zlecenia została doręczona przez
      Laboratorium na adres e-mail Klienta, sprawdzając wszystkie foldery poczty przychodzącej (w tym folder
      poczty
      „Spam”, folder „Wiadomości śmieci” itp.). Otrzymanie przez Klienta tej wiadomości e-mail potwierdzać będzie,
      że zlecenie zostało skutecznie złożone. W takim przypadku ponowne zamówienie złożone przez Klienta
      stanowiłoby kolejne i odrębne zamówienie.
    </h3>
    <h3>
      10. Klient powinien podać w formularzu rejestracyjnym dane prawdziwe. Laboratorium zastrzega, że w
      przypadku podania przez Klienta danych nieprawdziwych, należyta realizacja przez Laboratorium Zlecenia
      może być niemożliwa.
    </h3>
    <h3>
      11. Laboratorium zapewnia, że po zrealizowaniu Zlecenia i odebraniu przez Klienta Usługi wszystkie przesłane
      przez Klienta pliki (fotografie) zostaną usunięte z systemu Laboratorium po upływie terminu przedawnienia
      roszczeń związanych z realizacją Zlecenia.
    </h3>
    <h3>
      12. Laboratorium nie ma obowiązku sprawdzania Materiałów udostępnionych przez Klientów, jest jednak
      uprawnione do sprawdzania zdjęć a także do usuwania zdjęć sprzecznych z prawem, naruszających prawa
      osób trzecich, dobra osobiste, zasady współżycia społecznego lub postanowienia niniejszego regulaminu. W
      takim wypadku Laboratorium niezwłocznie informuje Klienta o odmowie realizacji Zlecenia wraz z podaniem
      powodów odmowy i przepisów prawa lub zasad współżycia społecznego naruszonych przez Klienta.
    </h3>
    <h2>III. Ceny i zasady płatności</h2>
    <h3>
      1. Szczegółowe informacje o cenie każdej Usługi znajdują się w funkcjonalności Sklepu przy każdym z
      oferowanych Produktów. Ponadto, Klient jest informowany o cenie zamawianej Usługi i Produktów w trakcie
      procesie składania Zlecenia.
    </h3>
    <h3>
      2. Ceny podane przez Laboratorium są cenami brutto, uwzględniającymi podatek od towarów i usług,
      wyrażonymi w złotych polskich.
    </h3>
    <h3>
      3. Klient zobowiązany jest do zapłaty ceny zakupionych za pośrednictwem Aplikacji Produktów i Usług w
      wysokości określonej w podsumowaniu Zlecenia składanego za pośrednictwem Aplikacji, otrzymanego przed
      ostatecznym potwierdzeniem złożenia Zleceni. W przypadku zamówienia Produktów wraz z ich dostawą pod
      wskazany przez Klienta adres, cena końcowa powinna obejmować również koszt dostawy, który pokrywa
      Klient, chyba że Laboratorium i Klient ustalili inaczej.
    </h3>
    <h3>
      4. Klient dokonuje płatności za Zlecenie złożone za pośrednictwem Aplikacji, dokonując wyboru sposobu
      płatności spośród form udostępnionych przez Laboratorium, tj. e-przelew, płatność kartą płatniczą, płatność
      za
      pomocą tradycyjnego przelewu środków na rachunek bankowy Laboratorium. W przypadku wyboru jako formy
      płatności przelewu tradycyjnego, na adres e-mail Klienta, zostanie mu przesłana wiadomość zawierająca
      potwierdzenie złożenia Zlecenia ze wskazaniem numeru rachunku bankowego Laboratorium na jaki należy
      uiścić opłatę za złożone Zlecenie.
    </h3>
    <h3>
      5. Laboratorium wskazuje (co zostało wyjaśnione również w dalszych częściach Regulaminu dotyczących
      warunków dostawy oraz terminów wykonania Usługi), że w jednym procesie składania Zlecenia Klient może
      składać zamówienie na Usługi lub Produkty różnego rodzaju, typu lub kategorii. W przypadku, gdyby Klient
      zamierzał objąć Zleceniem Usługi lub Produkty różnego rodzaju, typu lub kategorii, wówczas każda z tych
      Usług lub Produktów może stanowić osobne Zlecenie, posiadające własny termin dostawy oraz własne koszty
      dostawy (koszt przesyłki Produktów będzie naliczony i ponoszony dla każdego z Produktów z osobna, o czym
      Klient zostanie poinformowany w podsumowaniu Zlecenia). Zapłata za Usługi lub Produkty jest dokonywana
      łącznie, jednym ze sposobów płatności wskazanych w punkcie wyżej.
    </h3>
    <h3>
      6. Od chwili otrzymania przez Klienta wiadomości potwierdzającej złożenie Zlecenia, Klient nie może odstąpić
      od
      Zlecenia złożonego na odległość za pośrednictwem Aplikacji gdyż przedmiotem Zleceń składanych za
      pośrednictwem Aplikacji są rzeczy nieprefabrykowane, wyprodukowane według specyfikacji Klienta oraz
      służące zaspokojeniu jego zindywidualizowanych potrzeb.
    </h3>
    <h3>
      7. Rozliczenia transakcji kartą płatniczą i e-przelewem przeprowadzane mogą być według wyboru Klienta za
      pośrednictwem Centrum Rozliczeniowego Dotpay.
    </h3>
    <h2>IV. Warunki dostawy</h2>
    <h3>
      1. Zasady dostawy opisane są w funkcjonalności Sklepu przy każdym z Produktów i są wybierane przez Klienta
      w momencie składania Zlecenia.
    </h3>
    <h3>
      2. Laboratorium dostarcza wykonane Produkty jedynie na terytorium Polski.
      3. Jeżeli Klient wybrał odbiór osobisty Produktów w siedzibie Laboratorium oraz dopuszcza się zwłoki w
      odbiorze
      Produktów, Laboratorium może oddać Usługę na przechowanie na koszt i niebezpieczeństwo Klienta, po
      uprzednim poinformowaniu Klienta o możliwości oddania Produktów na przechowanie na jego koszt i
      niebezpieczeństwo a także o wysokości kosztów, jakie będą łączyć się z takim przechowaniem oraz o
      sposobie i miejscu odebrania Produktów przez Klienta.
    </h3>
    <h3>
      4. Jeżeli klient dopuszcza się zwłoki w odbiorze Produktów ponad XXX dni Laboratorium może powziąć decyzję
      o utylizacji Produktów, na koszt Klienta, przy czym nie zwalnia to Klienta obowiązku zapłaty wynagrodzenia
      za wykonane Usługi.
    </h3>
    <h2>V. Termin wykonywania Usługi</h2>
    <h3>
      1. Wszystkie Usługi są realizowane przez Laboratorium z należytą starannością i z uwzględnieniem zawodowego
      charakteru prowadzonej przez Laboratorium działalności oraz w odpowiednim, możliwie najkrótszym terminie,
      określonym w procedurze składania Zlecenia.
    </h3>
    <h3>
      2. Laboratorium wskazuje, że czas realizacji zlecenia i wydania Klientowi Produktów jest zależny od
      wybranego
      przez Klienta Produktu oraz sposobu wykonania Zlecenia i jest wskazany przy każdym z Produktów.
    </h3>
    <h3>3. Klient jest informowany o czasie realizacji Usługi w przypadku każdego ze składnych Zleceń.</h3>
    <h3>
      4. W przypadku, gdyby w jednym procesie składania zamówienia Klient złożył zamówienie na Produkty różnego
      rodzaju, typu lub kategorii, wówczas każda z tych Usług może stanowić osobne zamówienie, posiadające
      własny termin dostawy. Realizacja całego Zlecenia będzie trwać maksymalnie tyle, ile konieczne jest do
      zrealizowania Produktu o najdłuższym czasie wykonania, przy zachowaniu maksymalnego czasu realizacji
      Zlecenia.
    </h3>
    <h2>VI. Procedura reklamacyjna.</h2>
    <h3>1. Laboratorium ma obowiązek dostarczenia Klientowi Usługi wolnej od wad.</h3>
    <h3>
      2. Laboratorium dołoży należytych starań, aby odwzorowanie barw na zdjęciach (odbitkach) fotografii
      przekazanych przez Klienta było jak najbliższe naturalnemu. Jednak z niezależnych od Laboratorium
      względów natury technicznej i technologicznej (w szczególności z uwagi na różnorodność monitorów, z jakich
      mogą korzystać Klienci oraz związane z tym różnice w wyświetlaniu kolorów), Laboratorium nie ma
      obiektywnej możliwości zagwarantowania, że odwzorowanie barw będzie zgodne z barwami wyświetlanymi na
      dowolnym monitorze, z którego korzysta Klient.
    </h3>
    <h3>
      3. Laboratorium zwraca uwagę, że uzyskanie przez Klienta Usługi o odpowiedniej jakości wymaga, aby Klient
      przesłał Materiały (fotografię) odpowiednio wysokiej rozdzielczości.
    </h3>
    <h3>
      4. Celem zgłoszenia reklamacji związanej z realizowaniem przez Klienta uprawnień z tytułu rękojmi z wady
      towaru, Klient powinien dostarczyć lub przesłać reklamowaną Usługę na adres Laboratorium: XXX wraz z
      dowodem jej zakupu (np. paragonem lub fakturą; przypadku Klienta będącego konsumentem, taki dowód
      zakupu nie stanowi wyłącznego sposobu potwierdzenia, że zakup Usługi miał miejsce; taki Klient może
      wykazywać zakup również innymi środkami na przykład przez wskazanie numeru Zlecenia).
    </h3>
    <h3>5. Prawidłowo złożona reklamacja powinna zawierać co najmniej następujące dane:</h3>
    <p>
      1) Oznaczenie Laboratorium (imię i nazwisko, adres korespondencyjny, adres e-mail,
      a w przypadku Fotografów, niebędących osobami fizycznymi nazwę (firmę), adres siedziby oraz
      dane osoby fizycznej upoważnionej do prowadzenia spraw związanych ze złożoną reklamacją
      oraz jej adres e-mail),
    </p>
    <p>2) zwięzły opis zgłaszanych uwag i zastrzeżeń.</p>
    <h3>
      6. Reklamacje należy zgłaszać, wysyłając e-mail na adres
      <a href="mailto:amentel@op.pl">amentel@op.pl</a>
      ,
      wpisując w temacie wiadomości
      określenie „reklamacja”, lub pisemnie na adres ul. Jana Kazimierza 213 34-340 Jeleśnia.
    </h3>
    <h3>7. Reklamacje rozpatrywane są przez Administratora niezwłocznie, nie później niż w terminie 14 dni.</h3>
    <h2>VII. Korzystanie z Aplikacji</h2>
    <h3>
      1. Do użytkowania Aplikacji niezbędne jest posiadanie urządzenia z dostępem do Internetu (zalecane łącze co
      najmniej 20 Mbps), oraz przeglądarki internetowej (zalecane ..............) - umożliwiającej wyświetlanie na
      ekranie urządzenia dokumentów hipertekstowych, powiązanych w sieci Internet przez sieciową usługę WWW
      oraz obsługującej język programowania JavaScript, a ponadto akceptującej pliki typu cookies.
    </h3>
    <h3>
      2. W celu korzystania z niektórych funkcjonalności Aplikacji niezbędne może być posiadanie dodatkowego
      oprogramowania (np. Flash, edytor tekstu, programy obsługujące format PDF itp.).
    </h3>
    <h3>3. W celu złożenia Zlecenia, Klient musi posiadać indywidualne, aktywne konto e-mail.</h3>
    <h3>
      4. Koszty wynikające z posługiwania się przez Klienta środkami porozumiewania się na odległość (koszty
      połączenia z Internetem, SMS, połączeń telefonicznych) celem skorzystania z Usług, ponosi Klient zgodnie z
      cennikami dostawców, z których usług korzysta.
    </h3>
    <h3>
      5. Wydawca dołoży wszelkich starań, aby Aplikacja działała poprawnie i w pełnej funkcjonalności w każdym
      czasie, jednakże zastrzega sobie prawo do czasowego wyłączenia Aplikacji lub jej poszczególnych funkcji w
      celu ich ulepszenia, dodania nowych funkcjonalności lub przeprowadzenia naprawy bądź konserwacji.
      Przerwy w dostępie do Aplikacji z przyczyn, o których mowa w zdaniu poprzedzającym, nie mogą stanowić
      uzasadnienia dla negatywnej oceny wykonania przez Laboratorium zobowiązań wynikających z niniejszego
      Regulaminu.
    </h3>
    <h3>6. Klienci zobowiązani są do przestrzegania zakazu dostarczania przez lub do systemu Aplikacji treści:</h3>
    <p>
      1) powodujących zachwianie pracy lub przeciążenie systemu Aplikacji lub innych podmiotów biorących
      bezpośredni lub pośredni udział w świadczeniu usług drogą elektroniczną,
    </p>
    <p>
      2) mogących naruszać dobra osobiste osób trzecich, prawa autorskie, prawa własności intelektualnej,
      tajemnicę przedsiębiorcy lub takich, które będą w jakikolwiek inny sposób naruszać obowiązujący porządek
      prawny lub dobre obyczaje,
    </p>
    <p>
      3) zawierających wirusy komputerowe oraz treści takich jak inne kody źródłowe, pliki, foldery, programy
      komputerowe szkodliwe dla systemu Serwisu,
    </p>
    <p>
      4) powodujących rozsyłanie niezamówionych przez odbiorców informacji handlowych lub innych
      niedozwolonych przez prawo treści.
    </p>
    <h2>VIII. Własność intelektualna.</h2>
    <h3>
      1. Laboratorium w zakresie związanym z przestrzeganiem praw autorskich do Materiałów przekazanych w celu
      realizacji Zlecenia pozostaje zdane wyłącznie na oświadczenie Klienta, że jest on twórcą tego Materiału i
      przysługują mu majątkowe oraz osobiste prawa autorskie do Materiału jako utworu bądź na oświadczeniu
      Klienta, że nie jest on twórcą Materiału, ale posiada licencję do Materiału, jako utworu oraz zgodę twórcy
      materiału na jego anonimowe rozpowszechnianie oraz że Klient nie narusza żadnych autorskich praw
      osobistych twórcy Materiału do tego utworu.
    </h3>
    <h3>
      2. Klient ponosi pełną odpowiedzialność za ewentualne naruszenie praw osób trzecich, ich dóbr osobistych lub
      majątkowych lub osobistych praw autorskich osób trzecich, wynikające z naruszenia przez Klienta praw do
      Materiałów.
    </h3>
    <h3>
      3. W przypadku wystąpienia przez jakąkolwiek osobę trzecią przeciwko Laboratorium z roszczeniami
      wynikającymi z tytułu naruszenia jej praw do Materiałów przekazanych przez Klienta w celu realizacji
      Zlecenia,
      Klient zwalnia Laboratorium z wszelkich zobowiązań z tego tytułu oraz zobowiązuje się pokryć wszelkie straty
      lub wydatki, jakie z tego tytułu poniesie Laboratorium. Laboratorium nie jest też zobligowane do
      weryfikowania
      informacji źródłowych pliku i identyfikowania osób, których dane są umieszczone w informacjach źródłowych
      pliku (w celu badania autorstwa pliku). Również w tym zakresie odpowiedzialność spoczywa na Kliencie.
    </h3>
    <h2>IX. Dane osobowe.</h2>
    <h3>
      1. Laboratorium szanuje dane osobowe Klientów i spełnia wymogi ich ochrony wynikające z powszechnie
      obowiązujących przepisów prawa.
    </h3>
    <h3>
      2. W związku z realizacją Zleceń, Laboratorium może przetwarzać dane osobowe Klientów i innych osób zawarte
      w Materiałach udostępnionych przez Klientów jedynie w celach związanych z realizacją Zlecenia.
    </h3>
    <h3>3. W związku ze świadczeniem Usług, Laboratorium może zbierać następujące dane osobowe:</h3>
    <p>1) Dane osobowe zawarte w Materiałach przekazanych przez Klientów;</p>
    <p>2) Dane osobowe Klientów przekazane w związku ze złożeniem Zlecenia;</p>
    <p>
      3) Dane osobowe Klientów wykorzystywane w celach marketingowych , w razie wyrażenia przez Klienta
      zgody.
    </p>
    <h3>
      4. Dane przekazane w celu wykonania Umowy są przekazane dobrowolnie jednak ich niepodanie uniemożliwia
      prawidłowe wykonanie Umowy jednocześnie uniemożliwiając jej zawarcie.
    </h3>
    <h3>
      5. Wszystkie przekazane Laboratorium dane osobowe będą przetwarzane przez Laboratorium zgodnie z
      Rozporządzeniem Parlamentu Europejskiego i Rady UE 2016/679 z 27 kwietnia 2016 roku w sprawie ochrony
      osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich
      danych oraz uchylenia dyrektywy 95/46/WE –RODO oraz zgodnie z pozostałymi przepisami obowiązującego
      prawa w poniższych celach:
    </h3>
    <p>
      1) prawidłowego wykonania Umowy – przez wykonanie Umowy rozumiemy w tym wypadku wykonanie
      Zlecenia. W powyższym celu oraz w zakresie niezbędnym do jego realizacji Laboratorium będzie
      przetwarzać dane przez czas, konieczny dla realizacji Zlecenia oraz do czasu przedawnienia roszczeń,
      które mogą być podnoszone przeciwko lub przez Laboratorium z tytułu wykonania Umowy.
    </p>
    <p>
      2) realizacji prawnie uzasadnionego interesu Laboratorium – w trakcie trwania Umowy Laboratorium będzie
      przetwarzać dane w zakresie niezbędnym do realizacji swojego prawnie uzasadnionego interesu, w celu
      prowadzenia marketingu bezpośredniego w stosunku do oferowanych przez Laboratorium Produktów i
      Usług;
    </p>
    <p>
      3) jeśli Klient wyrazi na to dobrowolną zgodę, obejmującą osobno każdy z celów przetwarzania danych
      osobowych –dane będą przetwarzane w celach marketingowych;
    </p>
    <p>
      4) spełnienie obowiązków wynikających z przepisów prawa – niektóre dane muszą być przechowywane w
      celach wynikających z ustawy o rachunkowości lub ustaw podatkowych – w tym celu niezbędne dane
      związane ze zrealizowanymi Zleceniami przechowywane będą przez 5 lat od końca roku w którym
      zamówienie zostało zrealizowane, a w razie wszczęcia przez odpowiednie organy postępowania lub
      kontroli – do czasu ich zakończenia.
    </p>
    <h3>
      6. Laboratorium może przekazywać dane osobowe jedynie następującym odbiorcom: podmioty świadczące
      usługi na rzecz Laboratorium z zakresu usług informatycznych, pracownicy Laboratorium w granicach
      upoważnienia do przetwarzania danych osobowych w określonym celu i w ramach konkretnej czynności
      przetwarzania, osoby świadczące na rzecz Laboratorium usługi na podstawie odrębnych umów.
    </h3>
    <h3>
      7. Dane o których mowa w ust. 3 lit. a) będą przechowywane wyłącznie na potrzeby realizacji Zlecenia oraz
      przez okres przedawnienia roszczeń o jego realizację.
    </h3>
    <h3>
      8. Klient w każdym czasie ma prawo dostępu do treści swoich danych oraz ich poprawiania i sprostowania oraz
      –
      w zakresie wynikającym z przepisów - do usunięcia (prawo do bycia zapomnianym), ograniczenia
      przetwarzania, wniesienia sprzeciwu wobec ich przetwarzania, ma też prawo do żądania przeniesienia danych
      do innego administratora. Klientom przysługuje również prawo do wniesienia skargi do organu nadzorczego
      właściwego dla przetwarzania – od 25 maja 2018 r. Prezesa Urzędu Ochrony Danych Osobowych.
    </h3>
    <h3>9. Laboratorium zobowiązuje się do:</h3>
    <p>
      1) podjęcia wszelkich rozsądnych działań, aby dane osobowe, które są nieprawidłowe w świetle celów ich
      przetwarzania, zostały niezwłocznie usunięte lub sprostowane;
    </p>
    <p>
      2) przechowywania danych osobowych w formie umożliwiającej identyfikację osoby, której dane dotyczą
      przez okres nie dłuższy, niż jest to niezbędne do celów, w których dane te są przetwarzane; chyba że będą
      one przetwarzane wyłącznie do celów archiwalnych w interesie publicznym, do celów badań naukowych
      lub historycznych lub do celów statystycznych;
    </p>
    <p>
      3) przetwarzania danych osobowych w sposób zapewniający odpowiednie bezpieczeństwo, w tym ochronę
      przed niedozwolonym lub niezgodnym z prawem przetwarzaniem oraz przypadkową utratą, zniszczeniem
      lub uszkodzeniem, za pomocą odpowiednich środków technicznych i organizacyjnych.
    </p>
    <h3>
      10. Dane osobowe są przetwarzane w prawnie usprawiedliwionym interesie Laboratorium jedynie w zakresie i
      przez czas niezbędny do zrealizowania celu, tj:
    </h3>
    <p>
      1) kontaktowania się z Klientami w sprawach dotyczących konta, rozwiązywania problemów, rozstrzygania
      sporów, odzyskiwania należności i podejmowania innych czynności związanych z obsługą Klientów
      poprzez dostępne kanały komunikacji;
    </p>
    <p>2) egzekwowanie przestrzegania Regulaminu i zwalczania oszustw i nadużyć;</p>
    <p>
      3) poprawy bezpieczeństwa przetwarzania danych osobowych;
      - przy czym przetwarzanie w tych celach następuje wyłącznie przez czas w jakim dane osobowe są
      przetwarzane w celu wykonania Umowy, o którym mowa w ust. 5 ppkt. 1) powyżej.
    </p>
    <h3>
      11. W razie przetwarzania danych osobowy na podstawie zgody Klienta, może być ona w każdym
      czasie wycofana co nie wpływa na zgodność z prawem przetwarzania dokonanego do dnia
      wycofania zgody.
    </h3>
    <h2>X. Właściwość sądu.</h2>
    <h3>
      1. Ewentualne spory pomiędzy Klientem będącym konsumentem a Laboratorium mogą być poddane pod
      rozstrzygnięcie sądu powszechnego właściwego według przepisów kodeksu postępowania cywilnego.
      Laboratorium wskazuje, że w zależności od charakteru sprawy uzasadniona może być właściwość miejscowa
      kilku różnych sądów powszechnych (według wyboru osoby wszczynającej postępowanie sądowe).
    </h3>
    <h3>
      2. W odniesieniu do Klientów niebędących konsumentami w sprawach nieuregulowanych w Regulaminie
      zastosowanie mają odpowiednie przepisy prawa polskiego, z wyłączeniem przepisów kodeksu cywilnego o
      rękojmi ustawowej. W stosunku do Klientów niebędących konsumentami wyłącza się odpowiedzialność
      Laboratorium za wady fizyczne i prawne Usługi.
    </h3>
    <h3>
      3. Dla wszelkich sporów Laboratorium z Klientem niebędącym konsumentem sądem właściwym jest polski sąd
      powszechny właściwy dla siedziby Laboratorium, a prawem właściwym dla Umowy i związanych z nią sporów
      jest prawo polskie.
    </h3>
    <h2>XI. Postanowienia dodatkowe.</h2>
    <p>
      1. Regulamin jest dostępny w Sklepie w każdym czasie w sposób pozwalający na jego utrwalanie i kopiowanie
      przez Klientów.
    </p>
    <p>
      2. W sprawach nieuregulowanych Regulaminem zastosowanie znajdują powszechnie obowiązujące przepisy
      prawa.
    </p>
    <div className="regulation-link" style={{ margin: '32px auto' }}>
      <a href="Regulamin_fotokiosk_janik-mentel.pdf" download="" style={{ color: '#000' }}>
        Kliknij, aby pobrać regulamin w wersji
        <b> PDF</b>
      </a>
    </div>
  </Box>
);

export default regulamin;
