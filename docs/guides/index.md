# Digitale en professionele modes voor de zendamateur.

## <font color="red"><ins>Introductie</ins></font>

|![Example2](../../static/img/Schermafbeelding%202022-12-24%20om%2020.46.36.png)|Test|


## <font color="green"><ins>Digitale amateur modes.</ins></font>
---
### <font color="green"><ins>APRS</ins></font>
Automatic Packet Reporting System (of APRS) is een digitaal informatieplatform dat gebruikmaakt van radiogolven op de frequentiebanden voor amateurradio. Het systeem is gebaseerd op Packet-Radio-modulatie en werkt veelal met een datasnelheid van 1200 baud. Ook is er een terugkoppeling naar APRS Internet System (APRS-IS),een internetbackbone waardoor het APRSverkeer wereldwijd wordt uitgewisseld.

Bob Bruninga (WB4APR) creëerde de oudste voorvader van APRS op een Apple II computer in 1982. Deze eerste versie werd gebruikt om positierapporten van de US Navy, uitgezonden op de HF banden, te plotten. In 1984 bouwde Bruninga een meer geavanceerde versie op een Commodore VIC-20 om de positie en status van paarden in een uithoudingswedstrijd van 100 mijl te rapporteren via radiogolven. Gedurende de volgende twee jaren ontwikkelde Bruninga het systeem verder en noemde het Connectionless Emergency Traffic System (CETS). Na een aantal FEMA-oefeningen die gebruikmaakte van CETS werd het volledige systeem overgebracht naar IBM PC. Gedurende de vroege jaren 1990 groeide CETS op tot wat nu APRS is. Door het steeds goedkoper worden van gps-ontvangers werd het gebruik van gps-positierapporten via de radio steeds populairder. Soms wordt de afkorting APRS dan ook uitgelegd als Amateur Positie Rapporterings Systeem, wat echter niet de volledige mogelijkheden van APRS omschrijft.

APRS wordt niet enkel gebruikt om positierapporteringen te doen. Het is het ook bruikbaar om tekstberichten te broadcasten, zoals bijvoorbeeld een inbraak in een gebouw. Het is vergelijkbaar met het SMS-systeem van het GSM-netwerk.

Verder kan men ook weerstations aansluiten op het APRS-IS-netwerk. Wie een zendmachtiging heeft kan dit ook koppelen via het radionet. Dit is een interessante toepassing voor bijvoorbeeld real time-uitlezing van weersomstandigheden en posities van een weerballon of een weerstation op een afgelegen plaats. Ook bestaat er software die de weersgegevens van APRS gebruikt om voorspellingen te maken over het weer, zoals bijvoorbeeld een storm. Dit wordt vooral in de VS toegepast door radioamateurs.

ARDF-Sync is een systeem waarbij verschillende radio-ontvangers aan elkaar doorgeven uit welke richting een signaal het sterkste voorkomt. Door triangulatie kan dan de positie van het zendsignaal worden bepaald op een digitale kaart.

Verder biedt het APRS-protocol nog tal van minder bekende mogelijkheden. Een voorbeeld hiervan is het Mile Marker-systeem, waarmee men een marker (aprs-object) op de kaart op de huidige positie kan verzenden. Deze marker blijft zichtbaar op de kaart ook al beweegt de ontvanger. Er is echter geen tracker die dit ondersteunt.

In zijn meest verspreide vorm wordt APRS getransporteerd over het packet-radioprotocol AX.25, met 1200 baud Bell 202-audiofrequentie-shift-keying (AFSK)-modulatie op frequenties in de 2 meter-amateurband (VHF).

#### <font color="blue"><ins>Frequenties</ins></font>
APRS:
- Europa: 144,800 MHz
- Australië: 145,175 MHz
- Nieuw-Zeeland: 144,575 (Nationale APRS) en 144,650 MHz (digipeaters)
- Argentinië: 144,930 MHz
- Brazilië: 145,570 MHz
- Noord-Amerika: 144,390 MHz
- International Space Station: 145,825 MHz

In de Benelux maakt men in drukke gebieden ook gebruik van de frequentie 432.500 MHz in de 70cm-amateurband (UHF) als secundaire toegang, om de primaire op 2 m te ontlasten. Meestal zijn deze verbonden met elkaar en spreekt men van een CrossDigipeater.

Een APRS digipeter aan boord van het International Ruimtestation ISS maakt het mogelijk APRS berichten over een groot deel van Europa uit te wisselen, op het moment dat het ISS over Europa beweegt.

Een APRS-infrastructuur is opgebouwd op dezelfde Terminal Node Controllers (TNC's) die gebruikt worden bij Packet Radio. APRS kan gebruik maken van verschillende TNC's, zoals een klassieke TNC-2- of Baycom-modem, een geluidskaart van een computer, of een slimme TNC. Deze laatste is meestal rechtstreeks aan te sluiten op een gps-ontvanger en de radiozender. Hij is ook slim genoeg om pas gegevens uit te zenden wanneer deze verouderd zijn (na een interval), of wanneer deze snel wijzigen (bijvoorbeeld na het nemen van een bocht of kruising). Een voorbeeld van een slimme TNC is de TinyTrack van Byonics. Er is ook radioapparatuur op de markt met een ingebouwde TNC. Aangesloten op een gpsontvanger gebruikt deze een slimme TNC om de gegevens te verzenden. Meestal zijn de uitgezonden gegevens ook direct raadpleegbaar op het toestel, wat bij losse TNC's niet het geval is. Een voorbeeld van zo een toestel is de Kenwood TM-D710E.

Ook afgedankte commerciële radioapparatuur wordt omgebouwd naar de amateurbanden en kan worden voorzien van een slimme tracker, zodat men hier rechtstreeks een gps-ontvanger kan aansluiten. Het bekendste voorbeeld hiervan is de Bosch KF163 van het Jan Corver museum.
Verder kan men ook zelf een zender bouwen met als specifiek doel APRS. Meestal is het dan niet mogelijk om op een andere frequentie te werken. Een voorbeeld hiervan is de MicroTrack.

De backbone van het APRS-netwerk bestaat veelal uit computers waarop een of meerdere klassieke TNC-2's zijn aangesloten. Dit omdat ze nog steeds het betrouwbaarste zijn voor het ontcijferen van gegevens en de slimme logica zich gemakkelijk kan bevinden in de software op de computer. Wanneer er een internetaansluiting beschikbaar is kunnen de gegevens ook naar APRS-IS worden verzonden en dient de computer ook als I-Gate. Bruikbare computers kunnen oude 80386-PC's tot de laatste modellen zijn en zelfs embedded systemen. Er is software beschikbaar voor Windows (UI-View32 alsook Linux (Xastir, DigiNed en Mac). De meeste Digipeaters maken gebruik van Linux in combinatie van DigiNed.

Een statuspakket is een vrij veld dat kan worden gevuld met informatie over de huidige doelstelling van het station, een e-mailcontactadres, de frequentie waarop de verzender in spraak te bereiken is of zelfs gewoon de naam van de verzender.

Een berichtpakket kan gebruikt worden voor punt-naar-punt communicatie, algemene mededelingen en zelfs internet e-mail. Mededelingen worden door de meeste software speciaal behandeld en weergegeven op zo'n manier dat updates van mededelingen de originele mededeling vervangen. Op deze manier kan men op een snelle manier een realtimeoverzicht krijgen in bijvoorbeeld noodsituaties van de status van nabije stations, bijvoorbeeld de status van reddingswerkers en hun positie. Berichten worden naar alle online partijen verstuurd in realtime. Ze worden niet opgeslagen, maar zullen herhaald worden tot ze vervallen. Het berichtensysteem is gekoppeld met APRS-IS, wat ervoor zorgt dat het systeem globaal werkt, zolang men het path naar de bestemmeling kent. Op deze manier kunnen er wereldwijd berichten tussen stations worden verstuurd, met een radiolink als last-mile.

Het APRS-protocol is aangepast en gebruikt voor projecten die niet direct te maken hebben met het oorspronkelijke doel. De opmerkelijkste projecten zijn FireNet en PropNet. APRS FireNet is een internetgebaseerd systeem dat het APRS-protocol gebruikt met meestal dezelfde software om gegevens in verband met brandbestrijding, aardbevingen en weersinformatie op een veel snellere manier te transporteren dan oorspronkelijk mogelijk was met APRS.

PropNET gebruikt het APRS-protocol over AX.25- en PSK31-modulatie om de propagatie van radio-frequenties te bestuderen. PropNetzenders versturen op verschillende frequenties informatie over hun positie, zendvermogen, hoogte en antenneversterking. Deze gegevens worden opgevangen door wereldwijde ontvangststations en door correlatie via internet is het mogelijk een beeld te vormen van de heersende propagaties.

OpenTrac is ontwikkeld als een alternatief voor APRS dat zuiverder en functioneler is dan APRS. Tevens is het een open protocol onder opensourcelicenties. Door de populariteit van APRS blijft OpenTrac op de achtergrond.

### <font color="green"><ins>ASCII</ins></font>
De modus ASCII is een van de traditionele modi die door radioamateurs worden gebruikt, zoals CW, RTTY en AMTOR. Het wordt gebruikt door radioamateurs sinds 1980. Onthoud dat bij AMTOR-, RTTY- en ASCII-ontvangst twee frequenties die
gefilterd, elk corresponderend met een binair cijfer (1 of 0). Deze twee frequenties, gescheiden door een shift, moduleren de RF wanneer ze worden uitgezonden en de modulatie wordt Audio Frequency-Shift Keying (AFSK) genoemd, anders is de
modulatie kan rechtstreeks op de RF-draaggolf worden gedaan en wordt Frequency-Shift Keying (FSK) genoemd. Bij HF-amateurradio wordt AFSK gebruikt als u langs de MIC-ingang van de zendontvanger loopt, maar FSK kan ook worden gebruikt als u langs de
speciale ingang van de TX.

#### <font color="blue"><ins>Software op hobbyniveau</ins></font>
ASCII:

- **Website: 
[MultiPSK](http://f6cte.free.fr/index_anglais.htm)**


| Item  |Omschrijving|
|---|---|
|   Baudrate: |  110. Een karakter bestaat uit een « start » bit (1 « spatie »), 7 of 8 bits en een « stop » bit (2 « mark ») |
|Snelheid:|110 wpm (7 bits) of 100 wpm (8 bits)|
|Modulatie:|FSK twee tonen («mark» en «spatie», "mark" hoog) met een verschuiving van 170 Hz (of soms 200 Hz)|
|Ontvangstmode:|USB|
|Karakterset:|7-bits ASCII (of 8-bits ASCII voor sommige talen), geen pariteit|
|Vorm van de puls:|rechthoekig|
|Brandbreedte:|700 Hz (vanwege rechthoekige vorm)|
|Demodulatie:|niet samenhangend|
|Synchronisatie:|asynchroon met startbit|
|Correctiecode:|nee|
|Convolutiecode:|nee|
|Pmean / Ppeak:|1|
|Laagste S/N:|-2dB|

#### <font color="blue"><ins>Frequenties</ins></font>
ASCII, 110 baud in KHz:
- 1838-1842
- 3580-3600
- 7035-7045
- 10140-10150
- 14070-14099
- 18100-18109
- 21080-21120
- 24920-24929
- 28050-28150
- 50100-50500
- 144600
- 144800-144990



### <font color="green"><ins>AUTEX nog invullen</ins></font>


### <font color="green"><ins>Amtor FEC-Navtex</ins></font>
De AMTOR-modus is een traditionele modus die wordt gebruikt door radioamateurs zoals CW, RTTY en ASCII. RTTY, ASCII en AMTOR gebruiken twee frequenties die worden gefilterd, waarbij elke frequentie overeenkomt met een binair cijfer (1 of 0). Deze twee
frequenties, gescheiden door een verschuiving, moduleren de RF wanneer ze worden verzonden en de modulatie wordt Audio Frequency-Shift Keying (AFSK) genoemd, anders kan de modulatie rechtstreeks op de RF-draaggolf worden gedaan en wordt het Frequency-Shift Keying genoemd.
Shift-toetsen (FSK).

#### <font color="blue"><ins>Software op hobbyniveau</ins></font>
Amtor FEC-Navtex:

- Website:  [MultiPSK](http://f6cte.free.fr/index_anglais.htm)

**AMTOR ARQ (ook wel SITOR-A genoemd voor de marine (als maritiem mobiel servicesysteem) of kortweg TOR) **

|Item  |Omschrijving|
|---|---|
|Baudrate:|100. Een karakter bestaat uit 4 «spatie» en 3 «mark» bits. Een tekenblok (genaamd « Blok 1 » of « Blok 2 ») bestaat uit drie tekens (totale duur: 3 x 70 = 210 ms) en een pauze van 240 ms looptijd. Tijdens deze pauze zendt het ontvangende station een stuursignaal uit van 70 ms om «volgend blok aub» te zeggen (symbool "ACK" voor bevestiging) of om een herhaling van het laatste blok te vragen, in geval van een foutief teken (symbool "NACK" voor niet bevestigen)|
|Snelheid:|tussen 0 en 67 wpm (67 wpm komt overeen met de 50 baud RTTY) afhankelijk van het aantal herhalingen|
|Modulatie:|FSK twee tonen («mark» en «spatie», "mark" hoog) met een verschuiving tussen tonen van 170 Hz|
|Ontvangstmodus:|USB|
|Karakter insteling:|CCIR476-4 (32 letters, 32 cijfers en 6 besturings-, rust- of fasesignalen) zonder foutresetteken ("vaste lengte" tekens). In SITOR A kan de tekenset worden uitgebreid tot de Cyrillische tekens door het teken voor « niet-geperforeerde tape » te gebruiken (derde shift). In AMTOR A kan de tekenset worden uitgebreid tot de ASCII-tekens (32 tot 128) door het teken voor de « niet-geperforeerde tape » te gebruiken|
|Vorm van de puls:|rechthoekig|
|Bandbreedte:|ongeveer 800 Hz (vanwege rechthoekige vorm)|
|Demodulatie:|niet coherent|
|Synchronisatie:|automatisch met behulp van het signaal|
|Correctiecode:|ja via automatische herhaling en gemakkelijke detectie van een foutief teken vanwege de specifieke inhoud van een teken (4 «spatie» en 3 «mark» bits)|
|Convolutiecode:|nee|
|Interleaving:|nee|
|Phoofd/Ppiek:|1|
|Opmerking:|In AMTOR ARQ LISTEN worden karakters op de best mogelijke manier vertaald omdat er geen herhaling kan worden gevraagd. Daarom is de ontvangstkwaliteit over het algemeen niet erg goed|

**AMTOR FEC (ook wel SITOR-B genoemd voor de marine (als maritiem mobiel servicesysteem) of gewoon FEC) collectieve B-modus **

|Item|Omschrijving|
|---|---|
|Baudrate:|100. Een karakter bestaat uit 4 «spatie» en 3 «mark» bits. Het is een ononderbroken stroom van karakters, in tegenstelling tot AMTOR ARQ.|
|Snelheid:|71 wpm|
|Modulatie:|FSK twee tonen («mark» en «spatie», "mark" hoog) met een verschuiving tussen tonen van 170 Hz|
|Ontvangstmodus:|USB|
|Karakterset:|CCIR476-4 (32 letters, 32 cijfers en 6 besturings-, rust- of fasesignalen) zonder foutcorrectiekarakter («vaste lengte» karakters). Kleine tekens worden omgezet in hoofdletters en speciale tekens als « é » worden omgezet in standaardkapitaal (in het voorbeeld: « E »)|
|Vorm van de puls:|rechthoekig|
|Bandbreedte:|ongeveer 800 Hz (vanwege rechthoekige vorm)|
|Demodulatie:|niet coherent|
|Synchronisatie:|automatisch met behulp van het signaal|
|Correctie code:|nee|
|Convolutiecode:|nee|
|Interleaving:|elk teken wordt 5 posities later herhaald (dat is 350 ms tussen 2 uitzendingen van hetzelfde teken). Deze diversiteit in de tijd maakt de correctie van een foutief karakter mogelijk. De detectie is eenvoudig dankzij de bepaalde inhoud van een teken (4 «spatie» en 3 «teken»)|
Phoofd/Ppiek:|1|
|Laagste S/N:|rond -5dB|
|Opmerking:|Er zijn 2 FEC-modes: de collectieve B-mode (eerder beschreven) en de selectieve B-mode (kleine verschillen als inversie van bits)|

#### <font color="blue"><ins>Frequenties</ins></font>
Amtor FEC-Navtex, USB, soms LSB:
- Dezelfde frequenties als voor de RTTY 45 bauds, met name in de buurt van 14.075 KHz. Zie onder.

RTTY 45 baud (50 en 75 baud) in kHz:
- 1838-1842
- 3580-3600
- 7035-7045
- 10140-10150
- 14070-14099
- 18100-18109
- 21080-21120
- 24920-24929
- 28050-28150
- 50100-50500
- 144600
- 144800-144990

### <font color="green"><ins>BPSK31 en QPSK31</ins></font>
De modi BPSK31 en QPSK31 zijn ontworpen om communicatie te verzekeren met een signaal-ruisverhouding tot 0,1 (-11,5 dB, voor een pc op 166 MHz of hoger). De snelheid is 37 wpm in hoofdletters en
51 wpm in kleine letters. Als we PSK31 zeggen, verwijst dit naar een algemene term voor BPSK31 en QPSK31. Dankzij de convolutionele codering van QPSK31 kan het aantal fouten worden verlaagd.

|Item|Omschrijving|
|---|---|
|Gemaakt door|Peter Martinez G3PLX|
|Baudrate|31,25|
|Snelheid|37 wpm in hoofdletters en 51 wpm in kleine letters (gemiddeld)
|Modulatie|DBPSK. Ontvangstmodus: LSB of USB alleen voor BPSK31, voor QPSK31 USB|
|Karakterset|ASCII-tekens + ANSI-uitgebreide tekens + een foutresetteken ("Varicode"-tekens)|
|Vorm van de puls|verhoogde cosinus|
|Bandbreedte|ongeveer 80 Hz|
|Demodulatie|coherent|
|Synchronisatie|automatisch met behulp van het signaal|
|Correctiecode| nee|
|Convolutiecode|nee voor BPSK31, ja voor QPSK31 (snelheid=1/2, beperkingslengte=5, gebruik van Viterbi-decoder|
|Interleaving|nee|
|Automatische frequentiecorrectie|ongeveer +/- 10 Hz afhankelijk van de signaal-ruisverhouding|
|Drifttolerantie|60 Hz/min in BPSK31 en 20 Hz/min in QPSK31 (afhankelijk van niveau)|
|Phoofd/Ppiek|0,79 voor BPSK31 en 0,35 voor QPSK31|
|Laagste S/N|-11,5 dB|
|Waterval bereik|200 tot 4300 Hz (voor Multipsk)|
|Noot|de BPSK31-modus wordt veel gebruikt, QPSK31 wordt niet zo veel gebruikt|

#### <font color="blue"><ins>Frequenties</ins></font>
BPSK31 en QPSK31, USB in KHz:
- 1838
- 3580
- 7035
- 10140
- 14070
- 18100
- 21080
- 24920
- 28070
- 28120
- 50000
- 144000 (144605 in Frankrijk en 144144 in Italie).

#### <font color="blue"><ins>Software op hobbyniveau</ins></font>
BPSK31 en QPSK31:

- Website:  **[MultiPSK](http://f6cte.free.fr/index_anglais.htm)**

### <font color="green"><ins>BPSK63, QPSK63</ins></font>
De nieuwe BPSK63- en QPSK63-modi zijn afgeleid van BPSK31/QPSK31, maar ze zijn twee keer zo snel. De minimale verhouding Signaal-ruisverhouding is ongeveer -7 / -8 dB. De PSK63F is vergelijkbaar met PSK63 maar met
een convolutionele codering.

#### <font color="blue"><ins>BPSK63 en QPSK63</ins></font>

|Item|Omschrijving|
|---|---|
|Gemaakt door|Moe Wheatley (AE4JY) en Howard Teller (KH6TY) in 2003|
|Baudrate|62,5|
|Snelheid|74 wpm in hoofdletters en 102 wpm in kleine letters (gemiddeld)|
|Bandbreedte|ongeveer 160 Hz|
|Drift tolerantie|120 Hz/min in BPSK63 en 40 Hz/min in QPSK63 (afhankelijk van niveau)|
|Laagste S/N|- 7 dB voor BPSK63 en - 8 dB voor QPSK63|
|Noot|voor de rest zijn de kenmerken identiek aan die van de BPSK31/QPSK31-modi|

#### <font color="blue"><ins>Frequenties</ins></font>
BPSK63 en QPSK63, USB:

- 14072,5 - 14080 KHz. Het wordt aanbevolen om vaste frequenties veelvouden van 100 Hz te gebruiken: 14072,5, 14072,6, 14072,7... Daarvoor zet de gebruiker zijn transceiver op 14072 Khz en USB en werkt op 500, 600, 700,.. ., 2400 of 2500 Hz... op de spectrumindicator.

### <font color="green"><ins>PSK63F</ins></font>

De PSK63F-modus heeft dezelfde snelheid (62,5 baud) als PSK63, maar met een convolutionele codering. Het is een krachtige modus met de aanwezigheid van ruis. De minimale signaal-ruisverhouding is ongeveer -12 dB.

|Item|Omschrijving|
|---|---|
|Gemaakt door|Nino Porcino IZ8BLY|
|Baudrate|62,5|
|Snelheid|42 wpm (gemiddeld)|
|Modulatie|DBPSK|
|Ontvangstmodus|LSB of USB|
|Karakterset|ASCII-tekens + bijna alle ANSI-uitgebreide tekens + een foutresetteken ("Varicode"-tekens)|
|Vorm van de puls|verhoogde cosinus|
|Bandbreedte|rond 140 Hz|
|Synchronisatie|automatisch met behulp van het signaal|
|Correctie code|nee|
|Convolutiecode|R(Rate)=1/2, K (Constraint length)=7 met Viterbi type decoder, beide coder uitgangen worden opeenvolgend verzonden|
|Drift tolerantie|1 Hz/sec (afhankelijk van signaal-ruisverhouding)|
|Phoofd/Ppiek|0,79|
|laagste S/N|- 12 dB in tekst en -10 dB in DIGISSTV|
|Interleaving|nee|

#### <font color="blue"><ins>Frequenties</ins></font>
PSK63 en DIGISERV, USB:

De modi (behalve PSK220F) zoals de PSK63F en PSK10, PSKFEC31, PSK63F +DIGISSTV, PSKAM10/31/50 zijn QRP-uitzendingen en worden zeer weinig gebruikt, men stelt voor om oproepen op de volgende frequenties en tijden te focussen :
* 14075 Khz USB (AF rond 1000 Hz) om 17.00 uur UTC,
* 10148kHz. USB (AF rond 1000 Hz) om 22.00 uur UTC.
* 144620kHz. USB (AF rond 1000 Hz) om 20.00 uur UTC.

Een CW-prefix, op 12 of 20 wpm, die de gebruikte modus, software en stroom aangeeft, bijvoorbeeld: "VVV DE (een call) / MODE PSK63F / SOFT MULTIPSK / PWR: 5 WATTS" kan worden verzonden voordat de CQ-oproep zelf wordt gedaan. De optie van de video-identificatie van de modus, nu opgenomen in MULTIPSK, maakt het mogelijk om visueel in CMT Hell het moduslabel (en/of andere informatie) te specificeren vóór de hoofdtransmissie. Deze identifier zal zichtbaar zijn in de "waterval" van de andere Ham. Net voor de algemene oproep ("CQ") in PSK63F, wordt deze bijvoorbeeld automatisch "PSK63F" verzonden in CMT Hell. De andere Ham zal "PSK63F" zien verschijnen op zijn "waterval" en zal onmiddellijk overschakelen naar PSK63F.

#### <font color="blue"><ins>Software op hobbyniveau</ins></font>
BPSK63, QPSK63 en PS63F:

- Website:  **[MultiPSK](http://f6cte.free.fr/index_anglais.htm)**

### <font color="green"><ins>BPSK125 en QPSK125</ins></font>

De nieuwe BPSK125- en QPSK125-modi zijn afgeleid van BPSK31/QPSK31, maar ze zijn vier keer sneller. De minimale verhouding Signaal-ruisverhouding is ongeveer - 5 dB.

|Item|Omschrijving|
|---|---|
|Gemaakt in|2003|
|Baudrate|125|
|Snelheid|148 wpm in hoofdletters en 204 wpm in kleine letters (gemiddeld)|
|Bandbreedte|rond 320 Hz|
|Drift tolerantie|120 Hz/min in BPSK125 en 40 Hz/min in QPSK125 (afhankelijk van niveau)|
|Laagste S/N|-5 dB|
|Noot|voor de rest, behalve het secundaire kanaal, zijn de kenmerken identiek aan die van de BPSK31/QPSK31-modi.

Het "secundaire kanaal" dat specifiek is voor de software Multipsk.
Er zijn twee reeksen tekens tussen de 256 ASCII- en ANSI-tekens:
* een eerste set van 193 karakters (de primaire tabel) wordt gebruikt voor de huidige uitwisselingen,
* een tweede set van 62 tekens (de secundaire tabel") wordt gebruikt om automatisch, op een continue en repetitieve manier, de volgende stukjes informatie "Call", "Name", "Locator", QTH te verzenden, waarbij niets wordt verzonden, het QSO is aan de gang.

Het is een soort "intelligent stationair draaien". Deze karakters worden weergegeven in een klein venster.
Het inactieve teken, als er niets kan worden verzonden, is het teken CHR(0).
Dit secundaire kanaal is interessant omdat de karakterstroom in deze modi veel beter is dan de typsnelheid. Het stelt luisteraars in staat om snel essentiële informatie tussen getypte karakters te hebben.

#### <font color="blue"><ins>Software op hobbyniveau</ins></font>
BPSK125 en QPSK125:

- Website:  **[MultiPSK](http://f6cte.free.fr/index_anglais.htm)**

#### <font color="blue"><ins>Frequenties</ins></font>
BPSK125 en QPSK125, USB in KHz:

- 1838
- 3580
- 7035
- 10140
- 14070
- 18100
- 21080
- 24920
- 28070
- 28120
- 50000
- 144000 (144605 in Frakrijk en 144144 in Italie).

### <font color="green"><ins>CCW</ins></font>
CCW (CW samenhangend)

De coherente CW is een puur digitale modus omdat het alleen voor computers wordt gedaan (hoewel het leesbaar is voor een mens). De door de computer geproduceerde keying is perfect om synchronisatie en correcte evaluatie van de bit (punt of punt afwezig). CCW (Coherent CW) is gemaakt voor amateurradio door Ramond Petit (W6GHM) in 1975. De hier gepresenteerde CCW is afgeleid van de "traditionele" CCW met enkele aanpassingen (F6CTE/DK5KE). Bijvoorbeeld de standaard snelheid is 12 wpm. Hier kan de gebruiker kiezen tussen 12, 24 en 48 wpm.

De minimale S/N-verhouding kan erg laag zijn, tot -12 dB voor de standaardsnelheid van 12 wpm, afhankelijk van de snelheid en de verzonden tekens.
De beschrijving die hierna wordt gedaan, komt overeen met de CCW van software programma Multipsk, die enkele wijzigingen (F6CTE/DK5KE) en nieuwe wijzigingen in de Multipsk-versie 3.10 heeft geïntroduceerd.

|Item|Omschrijving|
|---|---|
|Gemaakt door:|Raymond Petit (W6GHM) in 1975|
|Snelheid:|Standaard 12 wpm. Hier respectievelijk 12, 24 of 48 wpm overeenkomend met een puntlengte van 100, 50 en 25 ms|
|Modulatie:|Aan-uit-toetsing van een audiotoon|
|Ontvangstmodus:|beide (LSB of USB)|
|Karakterset:|A..Z 0..9 ? = / + en enkele andere min of meer gebruikte tekens (type «Varicode»-tekens). Het wachtende teken (_) wordt gebruikt als inactief teken. Het is specifiek voor de CCW (van Multipsk) om de synchronisatie binnen te houden geval van afwezigheid van tekens om te verzenden. Het regelinvoerteken wordt omgezet in een "berichtstart"-signaal. Het verwijderen van een teken gebeurt met het verzenden van een foutteken (--------), correctie waarmee rekening wordt gehouden rekening bij de ontvanger|
|Vorm van de puls:|rechthoekig|
|Bandbreedte:|tot ongeveer 100 Hz afhankelijk van de snelheid,|
|Demodulatie:|coherent|
|Synchronisatie:|automatisch met behulp van het signaal|
|Correctiecode:|nee|
|Convolutiecode:|nee|
|Interleaving:|nee|
|Drift tolerantie:|15 tot 25 Hz/min (afhankelijk van de CCW-snelheid en van de signaal-ruisverhouding)|
|Phoofd/Ppiek:|0,5 maar zeer variabel|
|Laagste S/N:|hoe langzamer de CCW-snelheid is, hoe beter de decodering. De minimale S/N-verhouding is afhankelijk van de snelheid en de verzonden brieven. Voor de standaardsnelheid (12 wpm) is de minimale S/N ongeveer -12 dB (-8 dB bij 24 wpm en -5 dB bij 48 wpm)|
|Opmerking 1:|aan het begin van de verzending worden "CCW", een spatie en een wachtend teken (-_---) verzonden. De gebruiker kan, om tijd te winnen, het voorvoegsel CCW en zijn spatie onderdrukken, maar de andere operator zal negeren dat het CCW is|
|Opmerking 2:|om de synchronisatie niet te verliezen, is het niet mogelijk om meer dan één spatie tussen twee woorden te typen|

#### <font color="blue"><ins>Frequenties</ins></font>
Voor CCW, een modus die dicht bij CW ligt, wordt voorgesteld om de volgende frequenties te kiezen in KHz:

- 1844
- 3561
- 7031
- 10107
- 14061
- 21061
- 24907
- 28601 

### <font color="green"><ins>CHIP (62/128)</ins></font>
De nieuwe CHIP (64/128) mode is een nieuwe PSK mode die gebruik maakt van de "Spread Spectrum" modulatietechniek en in het bijzonder de Direct Sequence Spread Sequence (DSSS), dit via een origineel algoritme. Deze techniek maakt het mogelijk om een zeer robuuste modus te bereiken. De minimale verhouding Signaal-ruisverhouding is -8 dB.

|Item|Omschrijving|
|---|---|
|Gemaakt door:|Nino Porcino IZ8BLY in 2005|
|Algemeen:|deze modus gebruikt de modulatietechniek "Spread Sprectum" en in het bijzonder de Direct Sequence Spread Sequence (DSSS), dit via een origineel algoritme. Deze techniek maakt het mogelijk om een zeer robuuste modus te bereiken|
|Chiprate:|300/seconde (een "chip" is hier een "bit" vanuit het oogpunt van de modulatie)|
|Bitsnelheid (na pseudo WHP inverse transformatie):|37,5 per seconde in CHIP64 en 21,09 in CHIP128|
|Snelheid (woorden):|48 wpm in hoofdletters tot 68 wpm in kleine letters (gemiddelde in CHIP64). 27 wpm in hoofdletters tot 38 wpm in kleine letters (gemiddelde in CHIP128)|
|Modulatie:|DBPSK. Een "blok" bestaat uit 64 chips in Chip64 en 128 in Chip128. Een blok komt overeen met een code op 8 bits in Chip64 en 9 bits in Chip128. Het blok wordt verkregen uit de code, door een WHP-transformatie "Walsh-Hadamard-Porcino", dus zoals: (A) om een goede autocorrelatiekwaliteit te geven die nodig is voor de "blok"-synchronisatie, met behulp van een "m-sequence" en (B) een zwakke intercorrelatie tussen codes om ze te onderscheiden, met behulp van een Walsh-Hadamard-transformatie In Chip64 wordt voor de codes tussen 0 en 127 de m-reeks[6,5,2,1] gebruikt voor oneven codes en de m-reeks[6,5] voor de even codes. In Chip128 wordt voor de codes tussen 0 en 255 de m-reeks[7,3,2,1] gebruikt voor oneven codes en de m-reeks[7,3] voor de even codes|
|Ontvangstmode:|beide: LSB en USB|
|Karakterset:|ASCII-tekens + bijna alle uitgebreide ANSI-tekens + een foutresetteken ("Varicode"-tekens)|
|Vorm van de puls:|verhoogde cosinus|
|Bandbreedte:|rond 580 Hz|
|Synchronisatie:|automatisch met behulp van het signaal|
|Correctiecode:|het gebruik van de WHP-transformatie staat gelijk aan een krachtig "blok"-coderingstype|
|Convolutiecode:|nee|
|Interleavinf:| nee|
|Drifttolerantie:|15 Hz/minuut (+/- afhankelijk van signaalniveau)|
|Phoofd/Ppiek:|0.79|
|Laagste S/N:|-8 dB|

#### <font color="blue"><ins>Software op hobbyniveau</ins></font>
CHIP (62/128):

- Website:   **[MultiPSK](http://f6cte.free.fr/index_anglais.htm)**

#### <font color="blue"><ins>Frequenties</ins></font>
CHIP (62/128), USB in KHz:
- 7090 (in USA)
- 14077
- 14110

### <font color="green"><ins>Contestia</ins></font>

Contestia, ontwikkeld door Nick Fedoseev (UT2UZ) in 2005, is een digitale modus afgeleid van Olivia. Het streeft naar een compromis tussen snelheid en prestaties.

Contestia presteert zeer goed onder zwakke signaalomstandigheden. Het decodeert onder het ruisniveau, maar Olivia overtreft het op dit gebied nog steeds met ongeveer 1,5 - 3 dB, afhankelijk van de configuratie. Desondanks presteert Contestia twee keer zo snel als Olivia (bijv. Contestia 8/250 is twee keer zo snel als Olivia 8/250).
Contestia gebruikt een blokgrootte van 32 waar Olivia een blokgrootte van 64 gebruikt. Contestia gebruikt ook een aangepast alfabet dat 6-bits gecodeerd is.

#### <font color="blue"><ins>Contestia submodes.</ins></font>

125, 250, 500, 1000 en 2000 zijn de beschikbare bandbreedtes. 4, 8, 16, 32, 64, 128 en 256 zijn de beschikbare tonen. Er zijn in totaal 40 mogelijke submodi.

De submodi van Contestia worden bepaald door de bandbreedte en het aantal tonen. Dit wordt weergegeven met het formaat "Contestia X/Y" of "Contestia X-Y", waarbij
X = aantal tonen en Y = bandbreedte in . Y/X wordt ook als alternatief gebruikt. Bv: Contestia 8-250 = 8/250 = 250/8 = 8 tonen, 250 Hz bandbreedte.

De standaard Contestia-submodi (bandbreedte/tonen) zijn 4/125, 8/250, 16/500, 32/1000 en 64/2000.

De meest gebruikte submodi zijn 4/125, 4/250, 4/500, 8/250, 8/500 en 16/500.

#### <font color="blue"><ins>Mode Kenmerken:</ins></font>

- 8-250: "Langzaam" 8 tonen, bandbreedte=250, snelheid=31,25 baud, 29,2 wpm, laagste S/N=-13 dB
- 16-500: "Gemiddeld" 16 tonen, bandbreedte=500 Hz, snelheid=31,25 baud, 39 wpm, laagste S/N =-12 dB.
- 32-1000: ("Standaard" standaardmodus) 32 tonen, bandbreedte=1000 Hz, snelheid=31,25 baud, 48,8 wpm, laagste S/N =-12 dB.
- 8-500: "Normaal" 8 tonen, bandbreedte=500 Hz, snelheid=62,5 baud, 58,6 wpm, laagste S/N =-10 dB.
- 16-1000: "Fast" 16 tonen, bandbreedte=1000 Hz, snelheid=62,5 baud, 78,2 wpm, laagste S/N =-9 dB.
- 4-500: "Fast 2" 4 tonen, bandbreedte=500 Hz, snelheid=125 baud, 78,2 wpm, laagste S/N =-8 dB.
- 4-250: "Gemiddeld 2" 4 tonen, bandbreedte=250 Hz, snelheid=62,5 baud, 39 wpm, laagste S/N =-10 dB.
- 8-1000: "Zeer snel" 8 tonen, bandbreedte=1000 Hz, snelheid=125 bauds, 117 wpm, laagste S/N =-5 dB.

#### <font color="blue"><ins>Software op hobbyniveau</ins></font>
Contestia:

- Websites: **[MultiPSK](http://f6cte.free.fr/index_anglais.htm)**, **[Fldigi](https://sourceforge.net/projects/fldigi/files/)**, **[Ham Radio Deluxe](https://www.hamradiodeluxe.com/#)** en **[MixW](http://mixw.net)**

#### <font color="blue"><ins>Aanvullende koppeling</ins></font>
Contestia:

- Website: **[AC4M Digital Modes Contestia and RTTYM](http://ac4m.us/contestia_and_rttym.html)**



### <font color="green"><ins>CW (Morse)</ins></font>

Morse is een digitale modus omdat het gemakkelijk kan worden gedecodeerd door een computer, maar het kan worden gezien als een soort niet-digitale code voor Ham-mensen die een Morse-teken decoderen, niet als een reeks streepjes en punten, maar als een bepaald " muziek ". Daarom zijn mensen bij het lezen van Morse beter dan programma's.

|Item|Omschrijving|
|---|---|
|Snelheid:|momenteel 10 tot 40 wpm (standaardsnelheid: 20 wpm)|
|Modulatie:|On-Off keying van een audiotoon (momenteel tussen 500 en 800 Hz) of van een eenvoudige HF-draaggolf, maar in dat geval moet er een verschil zijn tussen ontvangst- en zendfrequentie, ontvangstmodus: LSB of USB.|
|Karakterset:|A..Z 0..9 ? = / + en enkele andere min of meer gebruikte tekens (type «Varicode»-tekens)|
|Vorm van de puls:|rechthoekig|
|Bandbreedte:|tot ongeveer 100 Hz afhankelijk van de snelheid|
|Demodulatie:|niet samenhangend|
|Synchronisatie:|bij ontvangst van een streepje of een punt|
|Correctiecode:|nee|
|Convolutiecode:|nee|
|Interleaving:|nee|
|Phoofd/Ppiek:|0,5 maar zeer variabel|
|Laagste S/N:|hoe langzamer de CW is, hoe gemakkelijker het decoderen is (men kan bijvoorbeeld –15 dB/-20 dB bereiken voor een 20 wpm Morse gedecodeerd door een persoon), dit tot ongeveer 10 wpm (voor een persoon)|

#### <font color="blue"><ins>Software op hobbyniveau:</ins></font>
CW:

* Website: **[MultiPSK](http://f6cte.free.fr/index_anglais.htm)**

#### <font color="blue"><ins>Frequenties</ins></font>
CW in KHz:

- 135,7-137,8
- 1810-1838
- 3500-3580
- 7000-7035
- 10100-10140
- 14000-14070
- 18068-18100
- 21000-21080
- 21120-21149
- 24890-24920
- 28000-28050
- 28150-28190
- 50000-50100
- 144000-144150 (meestal op 144050 of 144060)

### <font color="green"><ins>DominoEX</ins></font>

DominoEX, ook wel gewoon Domino genoemd, is een IFK-modus (Incremental Frequency Keying), ontwikkeld door Murray Greenman ZL1BPU en Con Wassilieff ZL2AFP in 2004 en was de eerste volledig ontwikkelde iteratie van de Domino IFK-familiemodi die worden gebruikt om tekst over RF te verzenden. Het is de opvolger van de ontwikkelingsversies DominoF en DominoG.

IFK (Incremental Frequency Keying) wordt gebruikt, waarbij de gegevens niet worden weergegeven door de frequentie van elke toon, maar door het frequentieverschil tussen de ene toon en de volgende. Een aanvullende techniek, Offset Incremental Keying (IKF+) genaamd, wordt gebruikt om de toonvolgorde te beheren om intersymboolinterferentie tegen te gaan die wordt veroorzaakt door multipath-ontvangst. Dit geeft de modus een grote verbetering in robuustheid.

DominoEX is een computergebaseerde radiomodus bedoeld voor simplex-chatmodus op de lagere HF-banden, hoewel de prestaties uitstekend zijn van LF tot VHF. U kunt zelfs elke SSB-zender gebruiken
een oud type "stoomradio". DominoEX is een ideale modus voor beginners, omdat deze gemakkelijk te stemmen is. DominoEX is ontworpen om verschillende problemen te omzeilen die zich voordoen bij andere digitale modi, zoals
moeilijke afstemming, trage respons en slechte prestaties op de 160 - 40m-banden.

DominoEX is een digitale modus met MFSK (Multi-Frequency Shift Keying), die wordt gebruikt om gegevens (bijvoorbeeld met de hand getypte tekst) via de radio te verzenden. MFSK verzendt gegevens met behulp van veel verschillende tonen, één voor één verzonden. Elk
toonelement ('symbool') kan meerdere bits aan gegevens bevatten, in tegenstelling tot de meeste andere modi, waarbij elk element slechts één bit vertegenwoordigt. De symboolsnelheid is dus veel lager voor dezelfde gegevenssnelheid als MFSK
gebruikt. Dit is gunstig, omdat het leidt tot een hoge gevoeligheid met een goede datasnelheid en een bescheiden bandbreedte. Nog belangrijker is dat lage symboolsnelheden minder worden beïnvloed door multi-path ontvangsttimingeffecten.

MFSK is dus ideaal voor HF-gebruik, omdat het een goede ruisonderdrukking heeft en een goede immuniteit voor de meeste voortplantingsvervormingseffecten die de ontvangst van andere modi negatief beïnvloeden. MFSK wordt al gebruikt
HF door modi als MFSK16, ALE, THROB en Olivia, maar DominoEX is de enige modus die een Incremental Frequency Keying-strategie gebruikt. DominoEX is een redelijk smalbandige modus (meer zoals MFSK16 of RTTY).

Een smalbandige toepassing van MFSK brengt enkele uitdagingen met zich mee. Het grootste probleem is dat er radiozendontvangers met een hoge stabiliteit en afstemnauwkeurigheid nodig zijn, omdat er zeer kleine frequentiestappen worden gebruikt
(zeg maar vergeleken met RTTY). MFSK is ook gevoelig voor interferentie door gegevens die afkomstig zijn van verschillende ionosferische paden (hoewel minder dan andere modi), en is, net als veel andere modi, gevoelig voor interferentie van
vaste vervoerders binnen de datadoorlaatband. Forward Error Correction (FEC) kan worden ingezet om fouten te verminderen, maar dergelijke modi kunnen traag en onhandig worden in het gebruik, of overmatig veel bandbreedte verbruiken. Met DominoEX hebben we voor een andere aanpak gekozen, waarbij we ons hebben geconcentreerd op het perfectioneren van het ontwerp voor de beste NVIS-ontvangst (Near Vertical Incidence Signal) zonder dat FEC nodig is. Alle inherente MFSK-problemen worden ook vermeden of sterk verminderd.

DominoEX gebruikt een reeks nieuwe technieken om de algemene beperkingen van MFSK tegen te gaan. Om afstemmingsproblemen te voorkomen, wordt IFK (Incremental Frequency Keying) gebruikt, waarbij de gegevens niet worden weergegeven door de frequentie van elke toon, maar door het frequentieverschil tussen de ene toon en de volgende, een idee dat gelijkwaardig is aan differentiële PSK. Hiervoor wordt een aanvullende techniek gebruikt, genaamd Offset Incremental Keying (IFK+) de toonreeks beheren om intersymboolinterferentie veroorzaakt door meerpadontvangst tegen te gaan. Dit geeft de modus een grote verbetering in robuustheid.

|Mode|Baud|BW|Tonen|Snelheid|FEC|Toonafstand|
|---|---|---|---|---|---|---|
|DominoEX 4|3.90625|173 Hz|18|~25 WPM|~12 WPM|Baudrate X2|
|DominoEX 5|5.3833|224 Hz|18|~31 WPM|~16 WPM|Baudrate x2|
|DominoEX 8|7.8125|346 Hz|18|~50 WPM|~25 WPM|Baudrate x2|
|DominoEX 11|10.766|262 Hz|18|~70 WPM|~35 WPM|Baudrate x1|
|DominoEX 16|15.625|355 Hz|18|~100 WPM|~50 WPM|Baudrate x1|
|DominoEX 22|21.533|524 Hz|18|~140 WPM|~70 WPM|Baudrate x1|

#### <font color="blue"><ins>Software op hobbyniveau</ins></font>
DominoEX:

* Websites: **[AndFLMsg voor Android apparaten](https://sourceforge.net/projects/fldigi/files/AndFlmsg/)**, **[Ham Radio Deluxe](https://www.hamradiodeluxe.com)** en **[MultiPSK](http://f6cte.free.fr/index_anglais.htm)**

#### <font color="blue"><ins>Frequenties</ins></font>
DominoEX in KHz:
* 1838
* 3580
* 7037
* 10147
* 14080
* 18105
* 21080
* 24929
* 28080

### <font color="green"><ins>DominoF</ins></font>

DominoF was de eerste experimentele implementatie van de Domino-familie van IFK-modi, ontwikkeld door Con Wassilieff ZL2AFP en Murray Greenman ZL1BPU in 2004. DominoF gebruikte dual interleaved tone sets.

DominoF had een baudrate van 10.766 Bd, 40 wpm. DominoF gebruikte slechts 16 tonen, waar DominoEX en THOR er 18 gebruikten

|Item|Omschrijving|
|---|---|
|Gemaakt door:|Con Wassilieff ZL2AFP en Murray Greenman ZL1BPU in 2004|
|Baudrate:|10.766|
|Snelheid:|40 wpm (door de synchronisatietekens te verwijderen)|
|Modulatie:|IFK (Incremental Frequency Keying) 16 tonen maar met twee toonsets (J1 en J2) afwisselend om de ISI (Inter Symbol Interference) te verminderen en een snelle synchronisatie mogelijk te maken|
|Noot:|In feite worden 18 tonen (2 x 9) gebruikt om de rotaties te beperken. Een teken bestaat uit 2 symbolen van elk 3 bits, waarbij elk symbool wordt verzonden op een toonset (eerste symbool op J1 en vervolgens tweede symbool op J2).|
|Ontvangstmodus:|USB of LSB, USB wordt aanbevolen|
|Karakterset:|62 tekens (kleine letters, cijfers en enkele leestekens) + een foutresetteken (6 bits lange tekens) + een synchronisatieteken|
|Pulsvorm:|rechthoekig|
|Ruimte tussen tonen:|10.766 Hz|
|Bandbreedte:|213 Hz|
|Demodulatie:|niet-coherent|
|Synchronisatie:|Voor de 3 bits-symbolen, met behulp van het signaal. Voor de symboolvolgorde dankzij een blok van 4 synchronisatietekens dat standaard na 12 tekens wordt verzonden.|
|Convolutie code:|Nee|
|Interleaving:|Nee|
|Offsettolerantie:|65 Hz. Dit is het grote voordeel van deze IFK-modus, die een foutafstemming van minder dan of gelijk aan +/- 65 Hz kan opvangen.|
|Tolerantie voor drift:|20 Hz/mn (afhankelijk van het signaal-signaal ruisverhouding). Binnen de band die wordt begrensd door de offsettolerantie, is de drifttolerantie groter dan 200 Hz/mn|
|Pgemiddeld/Ppiek:|1|
|Laagste S/N:|-12 dB|
|Noot:|Er zijn nog 2 andere Domino-modi op 7,8125 en 15,625 baud. Ze zijn op dezelfde manier bedacht.|

#### <font color="blue"><ins>Frequenties</ins></font>
DominoF in KHz:

- 1838
- 3580
- 7037
- 10147
- 14080
- 18105
- 21080
- 24929
- 28080

#### <font color="blue"><ins>Software op hobbyniveau</ins></font>
DominoF:

* Website: **[MultiPSK](http://f6cte.free.fr/index_anglais.htm)**

#### <font color="blue"><ins>Aanvullende koppeling</ins></font>
DominoF:

* Website: **[DominoEX Technical](https://www.qsl.net/zl1bpu/MFSK/Technical.htm)**


### <font color="green"><ins>FEC31 Nog in te vullen</ins></font>
### <font color="green"><ins>Feld Hell</ins></font>

FM Hell is een Hellschreiber-modus. De Hellschreiber-modi FELD HELL, PSK HELL, FM HELL en HELL 80 zijn grafische modi waarin karakters worden getekend en de interpretatie wordt gedaan door de gebruiker. Voor FELD HELL wordt de verzending gedaan door On-Off keying (OOK) zoals in CW, door BPSK voor PSK HELL en door AFSK in HELL 80 en FM HELL (MSK in feite).

#### <font color="blue"><ins>Algemeen</ins></font>

Feld Hell is een Hellschreiber-modus. Alle Hellschreiber-modi zijn "Fuzzy"-modi. De regels om "Fuzzy" te zijn zijn:
- de zender gebruikt geen codering,
- de ontvanger beslist niet wanneer gegevens aanwezig zijn,
- de ontvanger bepaalt niet welke gegevens aanwezig zijn.
Deze modi zijn alleen leesbaar voor mensen. Ze kunnen niet door computers worden gelezen, tenzij een geavanceerd neuraal systeem wordt gebruikt. Sterker nog, de hypothese dat de herkenning van menselijke ogen/hersenen in zijn context beter was dan een computer zou kunnen.

|Item|Omschrijving|
|---|---|
|Gemaakt door|Rudolph Hell in 1929|
|Baudrate|245 baud, maar in feite is het een pseudo-122,5 baud (één "pixel" is 8,163 ms lang)|
|Richting lezen|kolom voor kolom, van beneden naar boven en van links naar rechts|
|Matrix: hoogte|7 pixels en breedte: 7 pixels…totaal dus 49 pixels per karakter|
|Snelheid|25 wpm|
|Modulatie|Aan-uit-toetsing van een audiotoon|
|Ontvangstmodus|beide (USB of LSB) maar in het algemeen USB|
|Karakterset|alle afdrukbare ASCII-tekens behalve kleine letters, regelterugloop (+ regelinvoer) en foutcorrectietekens. Het gebruikte lettertype (FeldHell) is afgeleid van het lettertype van G3PLX (Peter Martinez)|
|Vorm van puls|verhoogd cosinusprofiel|
|Bandbreedte|rond 300 Hz|
|Synchronisatie|niet nodig, elke kolom wordt 2 keer verticaal weergegeven (maar een keer verzonden)|
|Phoofd/Ppiek|0,25|
|Laagste S/N|-12 dB|

#### <font color="blue"><ins>Software op hobbyniveau</ins></font>
FEC31:
* Website: **[MultiPSK](http://f6cte.free.fr/index_anglais.htm)**

#### <font color="blue"><ins>Frequenties</ins></font>
FEC31 in KHz:

Aanbevolen frequenties voor FELD HELL (USB) Geldt ook voor PSK HELL, FM HELL en HELL 80.

- 3580
- 7035
- 10135
- 14063
- 21063
- 28063

### <font color="green"><ins>FT4</ins></font>

FT4 is een experimentele digitale modus die speciaal is ontworpen voor radiowedstrijden. Net als FT8 maakt het gebruik van uitzendingen met een vaste lengte, gestructureerde berichten met formaten die zijn geoptimaliseerd voor minimale QSO's en sterke voorwaartse foutcorrectie. T/R-reeksen zijn 6 seconden lang, dus FT4 is 2,5 × sneller dan FT8 en ongeveer even snel als RTTY voor radiowedstrijden. FT4 kan werken met signalen die 10 dB zwakker zijn dan nodig is voor RTTY, terwijl er veel minder bandbreedte wordt gebruikt.

FT4-berichtindelingen zijn dezelfde als die in FT8 en gecodeerd met dezelfde (174,91) low-density pariteitscontrolecode. Transmissies duren 4,48 s, vergeleken met 12,64 s voor FT8. Modulatie maakt gebruik van 4-tonen frequency-shift keying bij ongeveer 23,4 baud, met tonen gescheiden door de baudsnelheid. De bezette bandbreedte (die 99% van het uitgezonden vermogen bevat) is 90 Hz. Drempelgevoeligheid voor 50% decoderingswaarschijnlijkheid is S/N = –16,4 dB, gemeten in de standaard 2500 Hz referentieruisbandbreedte. A priori (AP) decodering kan de drempelgevoeligheid verlagen tot -18 dB of beter.

Afgezien van zijn veel kortere T/R-sequenties, gedraagt FT4 zich in wezen op dezelfde manier als FT8. Er is één nieuwe bediening op het scherm beschikbaar voor FT4-bediening, een knop met het label Best S+P, net onder het selectievakje Call 1st. Door tijdens een Rx-cyclus op deze knop te klikken, wordt het programma ingeschakeld om alle CQ-berichten te onderzoeken die aan het einde van de Rx-reeks van 6 seconden zijn gedecodeerd. Het programma selecteert de beste potentiële QSO-partner (vanuit een wedstrijdperspectief) en behandelt deze alsof u dubbelklikt op die regel met gedecodeerde tekst. Hier betekent "beste potentiële QSO-partner" "Nieuwe multiplier" (1e prioriteit) of "Nieuwe oproep op band" (2e prioriteit). "Nieuwe vermenigvuldiger" wordt momenteel geïnterpreteerd als "Nieuwe DXCC"; binnenkort wordt een breder gedefinieerde vermenigvuldigingscategorie (voor de ARRL RTTY Roundup-regels) geïmplementeerd. We kunnen ook aanvullende prioriteitsrangschikkingen geven, bijvoorbeeld "New Grid on Band" (handig voor Noord-Amerikaanse VHF-wedstrijden), sorteren op signaalsterkte, enz.

Vink voor toetsenbordbesturing van verzonden berichten het vakje Alternatieve F1–F6-bindingen aan op Instellingen | Algemeen tabblad. Bij een typische wedstrijdachtige operatie kun je dan op functietoets F1 drukken om een QSO uit te nodigen door CQ te sturen. Dubbelklik op het gedecodeerde bericht om te reageren op een CQ en uw wedstrijduitwisseling te verzenden. U kunt ook op Beste S+P klikken en het selectiealgoritme een station laten kiezen om te zenden. De selectievakjes Auto Seq en Call 1st gedragen zich zoals in FT8, en dus kan de rest van een minimaal QSO doorgaan zonder verdere tussenkomst van de operator. Functietoetsen F2 – F5 kunnen worden gebruikt om berichten te verzenden die worden weergegeven in de invoervelden voor Tx2 – Tx5 op tabblad 1, rechtsonder in het hoofdvenster. Functietoets F6 schakelt tussen de aangevinkte status van Call 1st en de toetsencombinatie Alt+B kan worden gebruikt om de gewapende status van Best S+P te wisselen.

#### <font color="blue"><ins>Frequenties</ins></font>
FT4 in KHz:

- 3568
- 3575
- 7047.5
- 10140
- 14080
- 18104
- 21140
- 24919
- 28180
- 50318
- 144170

### <font color="green"><ins>FT8</ins></font>

FT8 ("Franke-Taylor-ontwerp, 8-FSK-modulatie") is een extreem zwak signaal, digitaal, smalle bandbreedte (50 Hz), QSO-only communicatieprotocol dat wordt gebruikt door amateurradio ("ham radio") operators. Het is populair onder amateurradio-operators vanwege het vermogen om signalen te verzenden ondanks uitdagende voortplantingscondities, omgevingen met veel ruis, operaties met laag vermogen (QRP) of zelfs gecompromitteerde antennes.

FT8 zendt en ontvangt alleen de hoogst noodzakelijke dingen die nodig zijn om een amateurradiocontact (QSO) te maken: uitwisseling van roepnamen, leesbaarheidsrapport, signaal
sterkte rapport, en "met vriendelijke groet" ("73"). Omdat alleen deze informatie kan worden verzonden, is FT8 geen "gespreksmodus". FT8 verzendt dit minimum aan informatie op een semi-geautomatiseerde manier in zijn eigen tijdsbestek. Daarom is FT8 geen "keyboard-to-keyboard"-modus (real-time chat).

JS8 is een variant van FT8 waarmee operators meer informatie kunnen verzenden en met elkaar kunnen praten. JS8 is gemaakt om de basisprincipes van FT8 toe te passen op het verzenden van daadwerkelijke berichten (in plaats van alleen de absolute minimale QSO-informatie in FT8).

Zowel FT8 als JS8 zijn sterk afhankelijk van een nauwkeurige computerklok, aangezien de modi informatie verzenden/ontvangen in een terugkerende, geautomatiseerde verzend-/ontvangstcyclus van 15 seconden. Verzendingen vinden plaats in intervallen van 12,6 seconden (binnen het verzendcyclusvenster van 15 seconden) totdat een volledig bericht is verzonden. FT8 gebruikt GFSK met 8 modulaties, bevat voorwaartse foutcorrectie (FEC) en heeft een effectieve datasnelheid van 5 woorden per minuut. FT8-uitzendingen kunnen worden gedecodeerd met S/N tot -21dB (zeer zwak signaal).

FT8 is ontwikkeld door Joe Taylor (K1JT) en Steve Franke (K9AN). Het is een van de modi die deel uitmaken van het open-source softwarepakket voor zwak signaal, WSJT-X.

#### <font color="blue"><ins>Typisch FT8 QSO</ins></font>

Een typisch FT8 qso:

|Tekens verzonden / ontvangen|Interpretatie|
|---|---|
|"CQ PE1LUP JO21"|CQ-oproep van radio-operator "PE1LUP" samen met zijn Maidenhead grid square locator-code.|
|"PE1LUP PA3FTP JO21|Radio-operator "PA3FTP" antwoordt met zijn roepnaam en grid square locator.|
|“PA3FTP PE1LUP -10”|PE1LUP reageert met een signaalrapport (in de vorm van een WSJT-X-meting in plaats van een meer conventionele, hoewel meer subjectieve, RST-meting|
|“PE1LUP PA3FTP R-12”|PA3FTP bevestigt signaalrapport en antwoordt met zijn eigen rapport|
|“PA3FTP PE1LUP RRR|PA3FTP vertelt PE1LUP: "Ontvangstrapport ontvangen"(Dit kan ook worden afgekort tot "RR73", wat aangeeft "Report Received 73", wat een voltooid QSO zou zijn)|
|“PE1LUP PA3FTP 73”|PA3FTP zegt "Met vriendelijke groet" ("73")|
|“PA3FTP PE1LUP 73”|PE1LUP zegt "Met vriendelijke groet" ("73") (niet gebruikt als de derde transmissie van PA3FTP "RR73" was)|

Operators verzenden één bericht binnen een tijdsbestek van 15 seconden en wachten vervolgens nog eens 15 seconden om inkomende antwoorden te ontvangen (verzenden vervolgens opnieuw en wachten opnieuw, in een cyclus die berichten uitwisselt totdat het gesprek is voltooid). Daarom zou de volledige uitwisseling (QSO) hierboven ongeveer 105 seconden duren.

#### <font color="blue"><ins>Frequenties</ins></font>
FT8: gemeenschappelijke frequenties voor FT8 en JS8Call in KHz:

|Band|FT8|JS8Call|IARU regio|
|---|---|---|---|
|160 m|1840|1842|Alle|
|80 m|3573|3578|Alle|
|60 m|*5357*| | |
|40 m|*7056*| |Regio 1|
|   | *7071* | |
| |7074|7078|Alle|
|30 m |*10132*|10130|Regio 1|
| |*10133*| | |
| |10136| |Alle|
|20 m|*14071*| | |
| |14074|14078|Alle|
| |*14090*| |Regio 1|
|17 m|18100|18104|Alle|
|15 m|21074|21078|Alle|
| |*21091*| | |
|12 m|24915|24922|Alle|
|10 m|28074|28078|Alle|
|6 m|*50310*| | |
| |50313|50318|Alle|
| |50323|*50328*|Alle, internationaal DX|
|4 m|70100| |Regio 1|
| |*70154*| |Landen zonder toegang tot 70.100|
|2 m|144174| |Alle|
|1.25 M|*222065*| | |
|70 cm|*432065*|  |
| |*432174*| | |
|23 cm|*1296174*| | |

*Schuingedrukte* cellen zijn veelgebruikte frequenties die niet zijn opgenomen in de standaard programma-instellingen van JS8Call of WSJT-X (FT8). Frequenties voor JS8Call en FT8 zijn instelbaar door de gebruiker.

#### <font color="blue"><ins>Controverse</ins></font>

Aangezien FT8 automatisch alleen het absolute minimum aan informatie verzendt en ontvangt dat nodig is om te voldoen wat officieel telt als een amateurradiocontact (QSO), is FT8 bekritiseerd door sommige amateurradio-enthousiastelingen als een middel voor radioamateurs om zich een weg naar de overwinning te 'bedriegen' in bepaalde wedstrijden en prijscategorieën. Andere amateurradio-operators kondigen de modus aan als een zegen voor de hobby van amateurradio in tijden dat de zonnecyclus minimaal is en wanneer de omstandigheden voor radiovoortplanting slecht zijn.

#### <font color="blue"><ins>Software op hobbyniveau</ins></font>
FT8:

* Websites: **[WSJT-X (multi-platform)](https://wsjt.sourceforge.io/index.html)** en **[JTDX (multi-platform)](https://sourceforge.net/projects/jtdx/)**

#### <font color="blue"><ins>Aanvullende koppeling</ins></font>
FT8:
* Website: **[Korte FT8-beschrijving](https://w5fc.org/2017/07/15/new-digital-mode-from-k1jt-ft8/)**

### <font color="green"><ins>HF Fax</ins></font>
HF Fax is vergelijkbaar met de RTTY-modus met een verschuiving van 800 Hz, het wit bij 2300 Hz en het zwart bij 1500 Hz, behalve dat het RX/TX betreft van afbeeldingen in zwart-wit of in grijswaarden.

Er zijn twee soorten faxen: "zwart-wit" of met 8 grijstinten, maar alleen de eerste lijkt gebruikt te worden.
In "zwart-wit" fax worden twee AF-frequenties verzonden: een met lage frequentie (1500 Hz), de andere met hoge frequentie (2300 Hz), de eerste toon komt overeen met zwart en de tweede met wit. Deze twee frequenties, gescheiden door een verschuiving (800 Hz in SW), kunnen de RF bij uitzending effectief moduleren (AFSK) of kunstmatig worden geproduceerd door een eenvoudige verschuiving van de RF-frequentie (FSK). Voor de luisteraar klinken ze allebei hetzelfde.

Het luisteren is op USB, de gebruiker moet de ontvangerfrequentie 1900 Hz ((1500+2300)/2) onder de zenderfrequentie instellen (bijvoorbeeld BRACKNELL METEO op 2616,6 KHz). In grijsschalen bevinden frequenties zich tussen 1500 en 2300 Hz.

De scansnelheid of het aantal geproduceerde regels per minuut (lpm) kan 60, 90 of 120 zijn. In West-Europa is de snelheid 120 lpm. In Oost-Europa zijn de snelheden 60 en 90 lpm.
De samenwerkingsindex (IOC) is een verkenningskenmerk van het verzonden beeld. Deze index komt overeen met de verhouding tussen de cilinderdiameter en de scanstap (tussen twee opeenvolgende regels). In de praktijk bepaalt het IOC de maximale transmissieduur. Voor 120 lpm is de duur bijvoorbeeld 9,4 minuten voor een IOC van 288 en 18,8 minuten voor een IOC van 576. Voor 60 lpm wordt de duur verdubbeld.
De officiële stations gebruiken IOC van 288 en 576 en eerder deze tweede waarde, maar aangezien de maximale duur zelden wordt gebruikt, kan een IOC van 288 worden gebruikt.

Zendamateurs gebruiken een IOC van 288 en een snelheid van 120 lpm. Afbeeldingen worden verzonden in "zwart-wit" of in grijstinten.

De faxverzendingen worden voorafgegaan en gevolgd door "APT"-signalen (afwisseling van zwart en wit). Het eerste "APT"-signaal zou kunnen worden gebruikt om de IOC te bepalen, maar MULTIPSK doet dit niet. Na het eerste "APT"-signaal volgt een faseringssignaal (alleen 30 sec. witte band). Met dit signaal kan worden gesynchroniseerd en kan de veegsnelheid in lpm worden bepaald. MULTIPSK maakt het mogelijk om te synchroniseren, maar niet om de veegsnelheid te bepalen.

#### <font color="blue"><ins>Software op hobbyniveau</ins></font>
HF FAX:
* Website: **[MultiPSK](http://f6cte.free.fr/index_anglais.htm)**

#### <font color="blue"><ins>Frequenties</ins></font>
HF FAX, USB in KHz:
- 2618.5, 3289.5, 4610 of 8040: Bracknell Meteo (meteorologische uitzendingen)
- 2374, 3652, 4307 of 6446: RN Londen (meteorologische uitzendingen)
- 3730-3740
- 3750 (voor U.S. Hams)
- 3855, 7880 of 13882,5: Hamburg Meteo (meteorologische uitzendingen)
- 7035-7045
- 7150 (voor U.S. Hams)
- 8503 (NMG New Orleans, LA)
- 14230
- 21200 (voor U.S. Hams)
- 21340
- 28680
- 50550
- 137100 (APT-faxen verzonden door NOAA-satelliet nr. 19)
- 137620 (APT-faxen verzonden door NOAA-satelliet nr. 15)
- 137912.5 (APT-faxen verzonden door NOAA-satelliet nr. 18)
- 144700

Amerikaanse radioamateurs mogen beeldoverdracht op 80 m vanaf 3750 kHz en hoger, 7150 kHz en hoger gedurende 40 meter, en 21200 kHz en hoger, in overeenstemming met de licentieklasse: Extra Class = 14150 kHz en hoger; Geavanceerde klasse = 14175 kHz en hoger; Algemeen Clas = 14225 kHz en hoger - (Dave N4EF info).

### <font color="green"><ins>JS8, JS8Call</ins></font>

JS8Call (JS8) is een amateurradio QSO-communicatiemodus gebaseerd op FT8. Het is populair onder amateurradio-operators vanwege zijn vermogen om berichten te verzenden en te ontvangen ondanks uitdagende propagatieomstandigheden, omgevingen met veel ruis, low power operations (QRP) of zelfs gecompromitteerde antennes.

JS8Call verandert FT8 in een "chat"-modus, waardoor stations langere berichten "keyboard-to-keyboard" kunnen sturen. JS8Call kan worden gezien als een radio-uitzendingsvorm van 'e-mail' met een zeer zwak signaal (hoewel het geen e-mail is), waar operators hun inbox kunnen controleren en later kunnen antwoorden. Berichten kunnen ook worden verzonden om via andere operators te worden doorgestuurd om een ontvangende operator te bereiken. JS8Call-gesprekken kunnen ook in realtime worden gevoerd.

JS8Call is gemaakt door Jordan Sherer (KN4CRD) en werd voor het eerst uitgebracht op 4 januari 2019. Latere releases van JS8Call voegden meer functies toe aan de modus, zoals snellere transmissies.

#### <font color="blue"><ins>Frequenties</ins></font>
JS8, JS8Call in KHz:

|Band|FT8|JS8Call|IARU regio|
|---|---|---|---|
|160 m|1840|1842|Alle|
|80 m|3573|3578|Alle|
|60 m|*5357*| | |
|40 m|*7056*| |Regio 1|
|   | *7071* | |
| |7074|7078|Alle|
|30 m |*10132*|10130|Regio 1|
| |*10133*| | |
| |10136| |Alle|
|20 m|*14071*| | |
| |14074|14078|Alle|
| |*14090*| |Regio 1|
|17 m|18100|18104|Alle|
|15 m|21074|21078|Alle|
| |*21091*| | |
|12 m|24915|24922|Alle|
|11 m| |27245|Alle|
|10 m|28074|28078|Alle|
|6 m|*50310*| | |
| |50313|50318|Alle|
| |50323|*50328*|Alle, internationaal DX|
|4 m|70100| |Regio 1|
| |*70154*| |Landen zonder toegang tot 70.100|
|2 m|144174| |Alle|
|1.25 M|*222065*| | |
|70 cm|*432065*|  |

*Schuingedrukte* cellen zijn veelgebruikte frequenties die niet zijn opgenomen in de standaard programma-instellingen van JS8Call of WSJT-X (FT8). Frequenties voor JS8Call en FT8 zijn instelbaar door de gebruiker. "Conventies kunnen met de tijd veranderen of door de voorkeur van de gebruiker."

#### <font color="blue"><ins>Software op hobbyniveau</ins></font>
JS8, JS8Call:

* Website: **[JS8Call (multi-platform)](http://files.js8call.com/latest.html)**

#### <font color="blue"><ins>Aanvullende koppelingen</ins></font>
JS8, JS8Call:

* Websites: **[JS8Call website](http://js8call.com)** en **[JS8Call groups.io group](https://groups.io/g/js8call)**



### <font color="green"><ins>LENTUS</ins></font>
Lentus is een extreem trage (QRP) modus ontwikkeld door Patrick Lindecker F6CTE die wordt gebruikt om QRP's met zeer laag vermogen te verzenden. Elke transmissie van 43 tekens (75 bit) duurt ongeveer 5 minuten om over 32 mogelijke tonen te verzenden in een krappe bandbreedte van 25 Hz.
Lentus heeft een extreem hoge gevoeligheidsclassificatie (tot een minimale S/N-verhouding van -34 dB, met eerste decodering op -36,5 dB, in staat om te decoderen zelfs onder de ruisvloer. Lentus is bedoeld voor gebruik op LF, MF en HF (tot 14 MHz).

#### <font color="blue"><ins>Software op hobbyniveau</ins></font>
Lentus:
* Website: **[MultiPSK](http://f6cte.free.fr/index_anglais.htm)**

#### <font color="blue"><ins>Frequenties</ins></font>
Lentus in KHz:
- 136.3 (QSO of baken)
- 1837 (QSO of baken)
- 3589 (QSO of baken)
- 7037.5 (QSO of baken)
- 10138.7 (QSO of baken)
- 14074 (QSO of baken)
- 14095.6 (QSO of baken)

#### <font color="blue"><ins>Video voorbeelden</ins></font>
Lentus:
* Websites: **[Lentus ontvangen van N8ABY op 30 meters door N2BEW](https://www.youtube.com/watch?v=i6dPG1__jZc)** en **[LENTUS MODE](https://www.sigidwiki.com/images/1/1d/LENTUS_easy_with_Multipsk.pdf)**

#### <font color="blue"><ins>Aanvullende koppelingen</ins></font>
Lentus:
* Website:**[Utility Planet Lentus](http://www.ominous-valve.com/lentus.html)**

### <font color="green"><ins>MT63</ins></font>
MT63 werkt met 64 draaggolffrequenties die fasegemoduleerd zijn. Deze modus is niet gevoelig voor vervaging en wordt vanwege de interleaving als een zeer robuuste modus beschouwd. De minimale signaal-ruisverhouding is bij 10 baud - 5 dB.

De MT63-specificaties vereisen een nauwkeurigheid van +/- 0,01 % van de ontvangen frequentie. Windows MT63-software accepteert echter +/-0,5% offset en veel geluidskaarten hebben een offset van maximaal 0,7% of zelfs meer voor de nominale bemonsteringsfrequentie van 8000 samples/seconde, waardoor het decoderen van MT63 (zoals de offset van RX en TX kan oplopen tot 1,4 %). Om deze situatie te corrigeren, bepaalt Multipsk automatisch de offset tussen ontvangen en verzenden tot 1,5% (alleen bij goede signalen).

Aan de andere kant is het gekozen inactieve karakter niet CHR(0) één (wat de standaard is in MT63 en wat het slechtste is voor dit probleem), maar de keuze is voor CHR(6). En om de tracering van de offsetberekening niet te verliezen:
* de karakters CHR(32), CHR(96) en CHR(112) worden voorafgegaan door twee inactieve karakters,
* de karakters CHR(48) en CHR(80) worden voorafgegaan door één inactief karakter.

Een vereenvoudigd voorbeeld van hoe een teken wordt verzonden in de 1000 Hz-modus (zonder rekening te houden met digitale technieken die in de broncode worden gebruikt: inverse FFT, decimering, interpolatie, analytisch signaal...:

- Het doorlopen van de Hadamard-transformatie van de ASCII-code van de letter, bepaling van de frequenties die worden beïnvloed door een faseverschuiving van 180 graden, en rekening houdend met de faseverschuiving,
- Het genereren van even frequenties voor de duur van 0,256 seconde, maar met een toename van de fasehoek die overeenkomt met een interval van 0,1 seconde (voor 10 bauds) en opslaan in een buffer.
- Filteren van de buffer en het resultaat toevoegen aan een verzamelbuffer met een capaciteit van 0,256 seconden.
- Verzenden naar de geluidskaart (na schaalvergroting) van samples die overeenkomen met de eerste 0,05 seconde van de verzamelbuffer.
- Verschuiving van de verzamelbuffer met 0,05 seconde.
- Genereren van oneven frequenties voor de duur van 0,256 seconde, maar met een fasehoekverhoging die overeenkomt met een interval van 0,1 seconde (voor 10 baud) en opslaan in een buffer.
- Filteren van de buffer en vervolgens het resultaat toevoegen aan een verzamelbuffer met een capaciteit van 0,256 seconden.
- Verzenden naar de geluidskaart (na schaalvergroting) van samples die overeenkomen met de eerste 0,05 seconde van de verzamelbuffer.
- Verschuiving van de verzamelbuffer met 0,05 seconde.

Het decoderen van MT63 is gelijk aan het parallel decoderen van 64 BPSK-signalen. De belangrijkste moeilijkheden zijn bij het bepalen van:
* de offset in frequentie bij uitzending,
* het verschil tussen de bemonsteringsfrequenties van de corresponderende geluidskaarten.

#### <font color="blue"><ins>Software op hobbyniveau</ins></font>
MT63:
* Websites: **[MultiPSK](http://f6cte.free.fr/index_anglais.htm)**, **[FLdigi](https://sourceforge.net/projects/fldigi/files/)** en **[MT63 Terminal](https://antoninoporcino.xoom.it/MT63/index.htm)**

#### <font color="blue"><ins>Aanvullende koppelingen</ins></font>
MT63:
* Websites: **[WB8NUT Digital Modes](http://wb8nut.com/digital/)** en **[MT63 Wikipedia](https://en.wikipedia.org/wiki/MT63)**

#### <font color="blue"><ins>Frequenties</ins></font>
MT63 in KHz:
- 1822
- 1838
- 3580
- 3590
- 3635
- 7035
- 7037
- 10140
- 10145
- 14106
- 14109
- 14114
- 18100
- 18105
- 21130
- 24925
- 28130

### <font color="green"><ins>PACKET</ins></font>
PACKET, ook bekend als FSK300, AX25 of X25, is een pakketgebaseerd protocol afgeleid van AX.25 en HDLC computernetwerkprotocollen. Packet-radio is een synchroon systeem waarin gegevens worden verzonden in ASCII-tekenpakketten.

Er zijn een aantal varianten die bestaan. Voor HF is er PACKET 300 en voor VHF zijn er een aantal varianten, hoewel de meest voorkomende PACKET 1200 en PACKET 9600 zijn.

#### <font color="blue"><ins>Historie.</ins></font>

Teletype-machines werden voor het eerst ontwikkeld in de jaren dertig van de vorige eeuw. Zodra ze op de overschotmarkt beschikbaar kwamen, begonnen hammen ze in de ether te gebruiken.
Het was niet moeilijk om te beginnen. U hoefde alleen maar een eenvoudige modem toe te voegen die een "terminaleenheid" werd genoemd.
Het was geen efficiënte manier om tekst te verzenden. Eerst zou je de zender aanzetten en die zou daar een 100% duty cycle-drager uitzenden. De frequentie verschuift met 170 Hz in een bepaald patroon voor elke ingedrukte toets. Er was geen foutdetectie, dus je zou vaak onleesbare berichten zien.
Het gebruikte een 5-bits code, algemeen bekend als "baudot". Hierdoor zijn slechts 32 verschillende combinaties mogelijk, niet genoeg voor alle letters en cijfers. Enkele codes
waren voor besturingsfuncties zoals regelterugloop, regelinvoer of bel. 26 van de codes waren voor brieven. Een "shift" -besturingscode werd gebruikt om cijfers of speciale tekens te krijgen in plaats van letters. Als ruis de shift- of unshift-code zou verstoren, zou je cijfers en speciale tekens zien in plaats van letters of vice versa.
In 1978 begonnen Canadese radioamateurs te experimenteren met een heel andere methode om gegevens via de ether te verzenden. In plaats van de zender aan en uit te laten staan
door één teken tegelijk te verzenden, werd het in een kort pakket (of "pakket") verzonden.

Elke transmissie bevat:
- Bron adres. (bijv. ham roepnaam)
- Bestemmingsadres.
- Optionele repeateradressen.
- Besturings-/protocolbytes.
- Informatiegedeelte.
- Foutcontrole (FCS, CRC).

Met RTTY hadden we alleen een simpele modem om te converteren tussen digitale data en audiotonen. Bij het indrukken van een toets werd direct de bijbehorende code verzonden.
We hebben nu wat intelligentie tussen de terminal en de modem om het protocol dat via de ether wordt gebruikt, te implementeren. Dit apparaat wordt een Terminal Node Controller (TNC) genoemd.
Het kan even duren voordat de zendamateur een bericht heeft opgesteld, maar het volledige bericht wordt in korte tijd verzonden.

Deze nieuwe aanpak biedt veel voordelen:
- In plaats van een radiokanaal vast te leggen met één persoon die een teken tegelijk typt, kan een bericht in een korte tijd worden verzonden.
- Elk pakket bevat informatie over waar het vandaan kwam en waar het heen zou moeten gaan.
- Hierdoor kunnen veel mensen één frequentie delen.
- Foutdetectie gaf vertrouwen dat de gegevens niet beschadigd waren.
- De TNC stuurt bevestigingen wanneer de gegevens correct zijn ontvangen en voert nieuwe pogingen uit wanneer deze de eerste keer niet doorkomt.
- Gegevens waren niet beperkt tot afdrukbare tekens. U kunt bestanden zoals JPEG-afbeeldingen verzenden.

Amerikaanse radioamateurs hadden een nadeel. De FCC stond pas in 1980 toe dat de ASCII-code via hamradio werd gebruikt. Er was speciale toestemming nodig om hetzelfde soort experimenten uit te voeren als de Canadezen.

De Vancouver Amateur Digital Communications Group stelde hun ontwerp beschikbaar als kale printplaat. Het was nodig om alle andere delen zelf te verzamelen.
In 1983 introduceerde Tucson Amateur Packet Radio (uitgesproken als tapper) hun TNC-1-kit, wat het een stuk eenvoudiger maakte.
Alle onderdelen inclusief modem en voeding.
Documentatie ongeveer 2 centimeter dik.

De TNC-2 kwam een paar jaar later op de markt. Het was kleiner en goedkoper. MFJ en anderen produceerden producten op basis van dit ontwerp. Een tijdlang bracht iedereen nieuwe TNC-producten uit.
Tegenwoordig zijn de TNC's van de 20e eeuw vrijwel uitgestorven. U kunt nu betere resultaten en meer functies krijgen tegen lagere kosten door uw radio aan te sluiten op de "geluidskaart" -interface van een computer (bijv. Raspberry Pi) en software, zoals Dire Wolf, te gebruiken om de signalen te decoderen.

#### <font color="blue"><ins>Packet-300</ins></font>

PACKET-300 gebruikt FSK-modulatie met een verschuiving van 200 Hz en een symboolsnelheid van 300 Bd (zelden gezien bij 600 Bd). Op amateurfrequenties boven 30 MHz worden doorgaans hogere snelheden zoals 1200 en 9600 baud gebruikt.
In de VS is het illegaal voor radioamateurs om snelheden van meer dan 300 baud te gebruiken op frequenties onder de 28 MHz vanwege FCC-regelgeving.

#### <font color="blue"><ins>Packet-1200</ins></font>

PACKET-1200 gebruikt FSK-modulatie met een verschuiving van 1000 Hz en een symboolsnelheid van 1200 Bd. Er bestaan een aantal variaties van PACKET-1200, waaronder een op PSK gebaseerde satellietversie. PACKET-1200 is te zien in de VHF- en UHF-banden met indirecte FM-modulatie. bandbreedte is 12 KHz.

#### <font color="blue"><ins>Packet-2400 en Packet-4800</ins></font>

Dit zijn slechts enkele varianten van PACKET die werken op 2400Bd en 4800Bd.

#### <font color="blue"><ins>Packet-9600</ins></font>

PACKET-9600 gebruikt GFSK met een symboolsnelheid van 4800 Hz en 9600 Bd. PACKET-9600 is te zien in de UHF-SHF-band. Bandbreedte is 15 KHz.

#### <font color="blue"><ins>Frequenties</ins></font>
Packet in USB, KHz:
- 3590
- 3590 tot 3600 (QSO in FSK 300 bauds)
- 7042
- 10147.5 (FSK 110, PSK31, 63 en 250)
- 10150 (APRS in FSK 300 bauds)
- 14075 (FSK 110, PSK31, 63 en 250)
- 14090 tot 14099 (QSO in FSK 300 bauds)
- 14101 tot 14112 (FSK 300 bauds)
- 14105 (netwerk 105 ARES, noodverkeer standby packetnet, FSK 300 bauds)
- 18102 (APRS in FSK 300 bauds)
- 21100 tot 21120 (QSO in FSK 300 bauds)
- 21113 (APRS in FSK 300 bauds)
- 28120 tot 28150 (QSO in FSK 300 bauds)
- 29250 (FSK 1200 bauds APRS)
- 144390 (APRS in FSK 1200 baud op het Noord-Amerikaanse continent)
- 144620 (FSK 110, PSK31, 63 en 250)
- 144800 (APRS in FSK 1200 bauds)
- 430825 (9600 bauds QRG UHF Europa in FM)

#### <font color="blue"><ins>Software op hobbyniveau</ins></font>
Packet:
* Websites: **[Dire Wolf](https://github.com/wb2osz/direwolf)**, **[MixW](http://mixw.net)**, **[MultiMode (voor Macs)](http://www.blackcatsystems.com/software/multimode.html)**, **[MultiPSK](http://f6cte.free.fr/index_anglais.htm)**, **[Sorcerer](http://www.kd0cq.com/2013/07/sorcerer-decoder-download/)**, **[TrueTTY](http://www.dxsoft.com/en/products/truetty/)** en **[SDRangel](https://github.com/f4exb/sdrangel/blob/master/plugins/channelrx/demodpacket/readme.md)**

#### <font color="blue"><ins>Aanvullende koppelingen</ins></font>
Packet: 
* Websites: **[WAVECOM Database: PACKET 300](http://www.wavecom.ch/content/ext/DecoderOnlineHelp/default.htm#!worddocuments/packet300.htm)**, **[WAVECOM Database: PACKET 1200](http://www.wavecom.ch/content/ext/DecoderOnlineHelp/default.htm#!worddocuments/packet1200.htm)**, **[WAVECOM Database: PACKET 9600](http://www.wavecom.ch/content/ext/DecoderOnlineHelp/default.htm#!worddocuments/packet9600.htm)** en **[shoc Database: PACKET 300](https://cartoonman.github.io/Shoc/packet300.htm)**

### <font color="green"><ins>PACTOR 1</ins></font>
PACTOR-I is een digitaal gegevensprotocol dat elementen van PACKET en AMTOR ARQ combineert.

PACTOR-I wordt door veel groepen gebruikt, waaronder Sailmail voor zeelieden om e-mails te verzenden en te ontvangen. Het wordt ook gebruikt door Ham Radio-operators, overheids- en diplomatieke instanties en zelfs NGO's. PACTOR-I wordt ook gebruikt als Selcall-protocol om verbindingen met andere PACTOR-modems tot stand te brengen.
PACTOR-II-, III- en IV-modems gebruiken allemaal PACTOR-I voor selectie.

PACTOR I heeft 200 Baudrate, Huffman-compressietechniek, gebruikt 2 FSK-tonen met een verschuiving van 200 Hz en echte binaire gegevensoverdracht. Gemaakt door Ulrich Strate (DF4KV) en Hans-Peter Helfert (DL6MAA) in 1990.

FSP = Vrij Signaal Protocol. Het basisidee achter het "Free-signal" (FS) is dat de host (bijvoorbeeld een maritiem kuststation) alle klanten informeert dat er op dit moment geen verbinding in bedrijf is, d.w.z. het is gratis, door een vaak herhaalde speciale signaal. Cliënten die dit signaal horen, mogen bellen.

Pactor 1-protocol (principe): alle communicatie vindt plaats via "frames" (beperkt aantal tekens) en besturingssignalen (CS1 tot CS2) zoals in AMTOR ARQ. Er zijn twee verschillende soorten frames: een om te synchroniseren, bij het starten, voor de verbinding en de informatieframes die de communicatie mogelijk maken via een automatische procedure van overdracht en bevestiging door de signalen CS1 tot CS4. Elk informatieframe bestaat uit:
* een header (een speciaal teken),
* een informatieveld waar gegevens zich bevinden (8 bytes bij 100 baud en 20 bij 200 baud),
* een FCS-veld bestaande uit 2 bytes waarin de CRC-berekening ("Cyclic Redundancy Check Sum") staat voor alle framegegevens tot aan dit veld (behalve header). Een verschil tussen de berekende CRC en de ontvangen CRC maakt het frame ongeldig.
Het is een ARQ-modus omdat elk frame, slecht of goed, een bevestiging ontvangt, positief of negatief, gevolgd door een onmiddellijke herhaling als het frame slecht is ontvangen. De duur van elke cyclus is vast (1,25 sec).

De Pactor 1 wordt alleen gebruikt in HF. Het is een openbaar protocol zonder bescherming. Het lijkt moeilijk om het onder Windows te programmeren omdat de reactietijden te kort en te precies zijn. Aan de andere kant zou dit onder DOS waarschijnlijk wel mogelijk zijn.
Er bestaan twee andere Pactor-protocollen: Pactor II en III, die efficiënter zijn maar niet openbaar zijn (er bestaat een bescherming van deze protocollen).

Er bestaat een FEC-versie van deze modus. De verschillen zijn de volgende:
* er is geen bevestigingsprotocol, de link is dus niet "connected" maar "Unproto" type. De uitwisselingen zijn niet vrij van fouten (zoals in ARQ), aangezien de herhalingen niet worden gevraagd in geval van een fout,
* omgekeerd, een of meer systematische herhalingen van elk frame worden gedaan, dus de term "FEC". Omdat fouten onafhankelijk zijn, is de kans op meerdere opeenvolgende fouten erg klein, dus als fouten mogelijk zijn in Pactor 1 FEC, zijn ze zeldzaam,
* de duur van de cycli staat niet vast maar wordt bepaald door de TX zendamateurs.

Multipsk verzendt Pactor 1 FEC-frames onder de volgende vaste omstandigheden:
* 100 baud: om de meest gevoelige te zijn in HF met een nominale verschuiving van 200 Hz,
* ASCII 8 bauds: om compatibel te zijn met alle nationale tekenreeksen en bovendien in Huffman-codering kan het verlies van een frame leiden tot het verlies van een onbepaald aantal geldige karakters,
* een minimale inactieve tijd tussen twee frames gelijk aan 0,04 sec (de cyclus duurt 1 seconde): om de synchronisatie te behouden die leidt tot een snelheid van 40 wpm met één herhaling,
* stationair draaien gebeurt met het karakter CHR(21) als er niets moet worden verzonden: om de uitwisseling tussen zendamateurs te vereenvoudigen.

Omdat PACTOR-hardwaremodems relatief duur zijn, zijn de WINMOR- en ARDOP-softwaremodi na PACTOR ontwikkeld om amateurradio-operators een middel te geven om gratis e-mail via de radio te verzenden. VARA, wat een shareware-modus is, is misschien ontwikkeld als een goedkopere concurrent van PACTOR III met vergelijkbare transmissiesnelheden, hoewel de betrouwbaarheid van PACTOR naar verluidt beter is dan die van VARA.

Winlink (voorheen RMS Express) is een wereldwijde radioberichtenservice voor amateurradio's die berichten die via de radio worden verzonden, kan doorsturen naar conventionele e-mailservers. De softwareclient voor radioberichten van Winlink heet Winlink Express. Winlink Express is compatibel met verschillende PACTOR-hardwaremodems, evenals met WINMOR, ARDOP en VARA. Winlink Express is alleen beschikbaar voor Windows-gebruikers (of andere x86-besturingssystemen indien met Wine wordt uitgevoerd). Gebruikers van Linux, Mac en Raspberry Pi kunnen Pat gebruiken, dat compatibel is met PACTOR, WINMOR en ARDOP.

#### <font color="blue"><ins>Software op hobbyniveau</ins></font>
Pactor 1:
* Websites: **[ MixW](http://mixw.net)**, **[MultiPSK](http://f6cte.free.fr/index_anglais.htm)**, **[SeaTTY Opmerking: alleen Pactor 1 FEC](http://www.dxsoft.com/en/products/seatty/)** en **[Sorcerer](http://www.kd0cq.com/2013/07/sorcerer-decoder-download/)**


|Item|Omschrijving|
|---|---|
|Gemaakt door|Ulrich Strate (DF4KV) en Hans-Peter Helfert (DL6MAA) in 1990|
|Baudrate|100 of 200 (aanvankelijk 200 baud) automatisch geselecteerd volgens de voortplantingscondities|
|Snelheid|tussen 0 en ongeveer 260 wpm afhankelijk van het aantal herhalingen, de voortplantingsomstandigheden en de selectie of niet van een gecomprimeerde modus (Huffman)|
|Modulatie|FSK twee tonen («mark» en «spatie») met een verschuiving tussen tonen van 200 Hz. De polariteiten worden omgekeerd voor elk nieuw informatieframe|
|Ontvangstmodus|LSB of USB|
|Karakterset|ASCII-tekens + ANSI-uitgebreide tekens in "8 bits" of alleen ASCII-tekens met een Huffman-compressie|
|Puls|rechthoekig|
|Bandbreedte|600 Hz|
|Demodulatie|niet samenhangend|
|Synchronisatie|automatisch met behulp van het signaal|
|Correctiecode|nee|
|Convolutiecode|nee|
|Interleaving|nee|
|Phoofd/Ppiek|1|
|Laagste S/N bij 100 baud|rond [4 dB||

#### <font color="blue"><ins>Frequenties</ins></font>
Pactor 1:
- 3590 (rond deze frequentie)
- 7041 (rond deze frequentie)
- 14111 (rond deze frequentie)

### <font color="green"><ins>PACTOR II</ins></font>
PACTOR II is een verdere ontwikkeling van PACTOR I. Het is tot 8 keer sneller dan PACTOR I.
PACTOR wordt door veel groepen gebruikt, waaronder Sailmail voor zeelieden om e-mails te verzenden en te ontvangen. Het wordt ook gebruikt door Ham Radio-operators, overheids- en diplomatieke instanties en zelfs NGO's.
PACTOR II heeft een bandbreedte van 450 Hz. Dit is een eigen standaard ontwikkeld door SCS GmbH & Co. KG, Hanau, Duitsland.
Gebruikt 2 DPSK-tonen. PACTOR I SELCALL wordt gebruikt bij het tot stand brengen van een eerste verbinding tussen twee operators.

Omdat PACTOR-hardwaremodems relatief duur zijn, zijn de WINMOR- en ARDOP-softwaremodi na PACTOR ontwikkeld om amateurradio-operators een middel te geven om gratis e-mail via de radio te verzenden. VARA, wat een shareware-modus is, is mogelijk ontwikkeld als een goedkopere concurrent van PACTOR III met vergelijkbare transmissiesnelheden, hoewel de betrouwbaarheid van PACTOR naar verluidt beter is dan die van VARA.

Winlink (voorheen RMS Express) is een wereldwijde radioberichtenservice voor amateurradio's die berichten die via de radio worden verzonden, kan doorsturen naar conventionele e-mailservers. De softwareclient voor radioberichten van Winlink heet Winlink Express. Winlink Express is compatibel met verschillende PACTOR-hardwaremodems, evenals WINMOR, ARDOP en VARA. Winlink Express is alleen beschikbaar voor Windows-gebruikers (of andere x86-besturingssystemen indien met Wine wordt uitgevoerd). Gebruikers van Linux, Mac en Raspberry Pi kunnen Pat gebruiken, dat compatibel is met PACTOR, WINMOR en ARDOP.

#### <font color="blue"><ins>Software op hobbyniveau</ins></font>
Pactor II:
* Websites: **[MixW](http://mixw.net)** en **[Sorcerer](http://www.kd0cq.com/2013/07/sorcerer-decoder-download/)**

#### <font color="blue"><ins>Aanvullende koppelingen</ins></font>
Pactor II:
* Websites: **[ARRL PACTOR II](http://www.arrl.org/pactor-ii)**, **[KKL Radio](http://www.kklradio.com)**, **[shoc Database: PACTOR II](https://cartoonman.github.io/Shoc/pactorii.htm)**, **[shoc Database: PACTOR II FEC](https://cartoonman.github.io/Shoc/pactoriifec.htm)** en **[SailMail](https://sailmail.com)**

### <font color="green"><ins>PACTOR III</ins></font>
PACTOR III introduceert 6 snelheidsniveaus die zorgen voor een hogere doorvoer en verbeterde robuustheid in vergelijking met PACTOR I en II. PACTOR III is gemiddeld 3,5 keer sneller dan PACTOR II. Onder optimale omstandigheden wordt PACTOR III meer dan 5 keer sneller.
PACTOR III heeft een maximale bandbreedte van 2400 . Dit is een eigen standaard ontwikkeld door SCS GmbH & Co. KG, Hanau, Duitsland.
Pactor III heeft 6 snelheidsmodi, bestaande uit 2, 6, 14, 16 en 18 toonmodulaties, waarbij elke toon 120 Hz uit elkaar ligt.
Tijdens een standaard transmissieverbinding tussen twee operators, zullen PACTOR III-modems een PACTOR I SELCALL verzenden om de optimale modus en snelheid tussen de twee operators te bepalen.

|Snelheidsniveau|Aantal tonen|Code|Modulatie type|
|---|---|---|---|
|1|2|1/2|DBPSK|
|2|6|1/2|DBPSK|
|3|14|1/2|DBPSK|
|4|14|1/2|DQPSK|
|5|16|3/4|DQPSK|
|6|18|8/9|DQPSK|

PACTOR wordt door veel groepen gebruikt, waaronder Sailmail voor zeelieden om e-mails te verzenden en te ontvangen. Het wordt ook gebruikt door Ham Radio-operators, overheids- en diplomatieke instanties en zelfs NGO's.
Winlink gebruikt PACTOR I-IV voor zijn datatransmissiemodi.
Delen van het voormalige Globe Wireless-netwerk worden nu gebruikt door Swisscom, waaronder het eigen Bern Radio in Zwitserland. Swisscom gebruikt uitsluitend PACTOR III met Huffman-compressie voor gegevensoverdracht.

Omdat PACTOR-hardwaremodems relatief duur zijn, zijn de WINMOR- en ARDOP-softwaremodi na PACTOR ontwikkeld om amateurradio-operators een middel te geven om gratis e-mail via de radio te verzenden. VARA, wat een shareware-modus is, is mogelijk ontwikkeld als een goedkopere concurrent van PACTOR III met vergelijkbare transmissiesnelheden, hoewel de betrouwbaarheid van PACTOR naar verluidt beter is dan die van VARA.

Winlink (voorheen RMS Express) is een wereldwijde radioberichtenservice voor amateurradio's die berichten die via de radio worden verzonden, kan doorsturen naar conventionele e-mailservers. De softwareclient voor radioberichten van Winlink heet Winlink Express. Winlink Express is compatibel met verschillende PACTOR-hardwaremodems, evenals met WINMOR, ARDOP en VARA. Winlink Express is alleen beschikbaar voor Windows-gebruikers (of andere x86-besturingssystemen indien met Wine wordt uitgevoerd). Gebruikers van Linux, Mac en Raspberry Pi kunnen Pat gebruiken, dat compatibel is met PACTOR, WINMOR en ARDOP.

#### <font color="blue"><ins>Frequenties</ins></font>
Pactor III in KHz:
- 14100,6-14121,7
- 21111,2

#### <font color="blue"><ins>Software op hobbyniveau</ins></font>
Pactor III:
* Website: **[Sorcerer](http://www.kd0cq.com/2013/07/sorcerer-decoder-download/)**

#### <font color="blue"><ins>Aanvullende koppelingen</ins></font>
Pactor III:
* Websites: **[ARRL PACTOR III](http://www.arrl.org/pactor-iii)**, **[KKL Radio](http://www.kklradio.com)**, **[shoc Database: PACTOR III](https://cartoonman.github.io/Shoc/pactoriii.htm)**, **[WAVECOM Database: PACTOR III](http://www.wavecom.ch/content/ext/DecoderOnlineHelp/default.htm#!worddocuments/pactoriii.htm)**, **[SCS PACTOR](https://www.scs-ptc.com)** en **[SailMail](https://sailmail.com)**

### <font color="green"><ins>PACTOR IV</ins></font>
PACTOR IV is de nieuwste versie van de PACTOR-serie, voortkomend uit PACTOR I-III. Het is 1,5x-3x sneller dan PACTOR III en heeft 10 snelheidsniveaus. Dit is een eigen standaard ontwikkeld door SCS GmbH & Co. KG, Hanau, Duitsland. Deze modus wordt uitsluitend gebruikt in de P4dragon-serie kortegolfdatamodems van SCS. De modems uit de P4dragon-serie zijn allemaal achterwaarts compatibel met PACTOR I-III en gebruiken, net als PACTOR II en III, PACTOR I
SELCALL om verbindingen met andere modems tot stand te brengen.
PACTOR wordt door veel groepen gebruikt, waaronder Sailmail voor zeelieden om e-mails te verzenden en te ontvangen. Het wordt ook gebruikt door zendamateurs, overheids- en diplomatieke instanties en zelfs NGO's.

Omdat PACTOR-hardwaremodems relatief duur zijn, zijn de WINMOR- en ARDOP-softwaremodi na PACTOR ontwikkeld om amateurradio-operators een middel te geven om gratis e-mail via de radio te verzenden. VARA, wat een shareware-modus is, is misschien ontwikkeld als een goedkopere concurrent van PACTOR III met vergelijkbare transmissiesnelheden, hoewel de betrouwbaarheid van PACTOR naar verluidt beter is dan die van VARA.

Winlink (voorheen RMS Express) is een wereldwijde radioberichtenservice voor amateurradio's die berichten die via de radio worden verzonden, kan doorsturen naar conventionele e-mailservers. De softwareclient voor radioberichten van Winlink heet Winlink Express. Winlink Express is compatibel met verschillende PACTOR-hardwaremodems, evenals met WINMOR, ARDOP en VARA. Winlink Express is alleen beschikbaar voor Windows-gebruikers (of andere x86-besturingssystemen indien met Wine wordt uitgevoerd). Gebruikers van Linux, Mac en Raspberry Pi kunnen Pat gebruiken, dat compatibel is met PACTOR, WINMOR en ARDOP.

De 10 snelheidsmodi van PACTOR IV:

|Snelheifdsniveau|Modulatie|Gross ratio|BPS|
|---|---|---|---|
|1|2 tonen chirp|113|46,9|
|2|DQPSK|225|85,32|
|3|DQPSK|225|147,2|
|4|DQPSK|450|300,8|
|5|BPSK|1800|433,1|
|6|BPSK|1800|1096,5|
|7|QPSK|3600|2199,5|
|8|8-PSK|5400|3304,5|
|9|16-QAM|7200|4407,5|
|10|32-QAM|9000|5512,5|

#### <font color="blue"><ins>Video voorbeelden</ins></font>
Pactor IV:
* Websites: **[9049.5 kHz PACTOR IV modem](https://www.youtube.com/watch?v=hgm8zJn8WJ0)**, **[P4dragon Modem Transmitting](https://www.youtube.com/watch?v=o2xCa20AQyc)** en **[The voice of Dragon? A sound of PACTOR-IV ARQ mode](https://www.youtube.com/watch?v=zzrjQsq4FpE)**

#### <font color="blue"><ins>Aanvullende koppelingen</ins></font>
Pactor IV:
* Websites: **[PACTOR IV Modem SCS Page](https://www.scs-ptc.com)**, **[PACTOR IV 2-tone Chirp](http://www.ominous-valve.com/pactor-iv.html)**


### <font color="green"><ins>PSK10</ins></font>
De PSK10-modus is ontworpen om communicatie te verzekeren met een zwakke signaal-ruisverhouding tot -17,5 dB met minder dan 2% fouten. De snelheid is 18 wpm. Deze modus is erg gevoelig voor de ionosferische Doppler-modulatie.

Een CW-prefix, op 12 of 20 wpm, die de gebruikte modus, software en stroom aangeeft, bijvoorbeeld: "VVV DE F6CTE / MODE PSK10 / SOFT MULTIPSK / PWR: 5 WATTS" kan worden verzonden voordat de CQ-aanroep zelf wordt gedaan. De optie van de video-identificatie van de modus, nu opgenomen in MULTIPSK, maakt het mogelijk om visueel in CMT Hell het moduslabel (en/of andere informatie) te specificeren vóór de hoofdtransmissie. Deze identifier zal zichtbaar zijn in de "waterval" van de andere Ham. Net voor de algemene oproep ("CQ") in PSK10, wordt deze bijvoorbeeld automatisch "PSK63F" verzonden in CMT Hell. De andere Ham zal "PSK63F" zien verschijnen op zijn "waterval" en zal onmiddellijk overschakelen naar PSK10.

|Item|Omschrijving|
|---|---|
|Gemaakt door|Patrick Lindecker F6CTE (2001)|
|Baudrate|10|
|Snelheid|18 wpm|
|Modulate|DBPSK|
|Ontvangstmodus|LSB en USB|
|Karakterset|56 "Varicode"-tekens " A..Z 0..9, CR, ESPACE. , " : - = + ? $ ' ( ) ! / @ & # * met een foutresetteken en een inactief teken (weergegeven door ">"). Kleine tekens worden omgezet in hoofdletters en speciale tekens zoals " é " worden omgezet in standaard hoofdletters (in het bovenstaande voorbeeld: " E ")|
|Vorm van de puls|rechthoekig maar de overgang tussen 2 opeenvolgende verschillende bits wordt gedaan door een afnemende sinus en vervolgens door een toenemende sinus (elk gedurende een kwart periode)|
Bandbreedte|rond 40 Hz|
|Demodulatie|coherent|
|Synchronisatie|automatisch met behulp van het signaal|
|Correctiecode|nee|
|Convolutiecode|nee|
|Interleaving|nee|
|Herhaling|nee|
|Drift tolerantie|40 Hz/mn (afhankelijk van signaal-ruisverhouding)|
|Phoofd/Ppiek|0,86|
|Laagste S/NB|-17,5 dB|

#### <font color="blue"><ins>Software op hobbyniveau</ins></font>
PSK10: 
* Website: **[MultiPSK](http://f6cte.free.fr/index_anglais.htm)**

#### <font color="blue"><ins>Aanbevolen frequenties</ins></font>
PSK10:

Deze modi (behalve PSK220F) zoals PSK10 en PSKFEC31, PSK63F +DIGISSTV "Run", PSKAM10/31/50 zijn QRP-uitzendingen en worden zeer weinig gebruikt. Men stelt voor om oproepen op de volgende frequenties en tijden te focussen:
* 14075 Khz USB (AF rond 1000 Hz) om 17.00 uur UTC,
* 10148 kHz USB (AF rond 1000 Hz) om 22.00 uur UTC.
* 144620 kHz USB (AF rond 1000 Hz) om 20.00 uur UTC.

### <font color="green"><ins>PSK220F</ins></font>

De PSK220F-modus is een PSK63F-modus met een snelheid van 220 baud. Het maakt een zeer hoge transmissiesnelheid mogelijk. De minimale signaal-ruisverhouding is ongeveer -7 dB.

|Item|Omschrijving|
|---|---|
|Gemaakt door|Patrick Lindecker F6CTE (2005)|
|Baudrate|220,5|
|Snelheid|140 wpm in hoofdletters en 200 wpm in kleine letters (gemiddeld)|
|Modulatie|DBPSK|
|Ontvangstmode|LSB of USB|
|Karakterset|ASCII-tekens + bijna alle uitgebreide ANSI-tekens + een foutresetteken ("Varicode"-tekens)|
|Vorm van de puls|verhoogde cosinus|
|Bandbreedte|ongeveer 430 Hz (max - 30 dB)|
|Synchronisatie|automatisch met behulp van het signaal|
|Correctiecode|nee|
|Convolutiecode|R(Rate)=1/2, K (Constraint length)=7 met Viterbi type decoder, beide code uitgangen worden opeenvolgend verzonden|
|Drift tolerantie|2,5 Hz/sec (+/- afhankelijk van signaal-ruisverhouding)|
|Phoofd/Ppiek|0,79|
|Laagste S/N|- 7 dB in tekst en -5 dB in DIGISSTV|
|Interleaving|nee|
|Noot|deze modus is gewoon PSK63F (van Nino Porcino IZ8BLY) uitgevoerd naar 220,5 baud|

#### <font color="blue"><ins>Software op hobbyniveau</ins></font>
PSK220F:
* Website: **[MultiPSK](http://f6cte.free.fr/index_anglais.htm)**

#### <font color="blue"><ins>Frequenties</ins></font>
PSK220F:

* 10148 kHz (AF rond 1000 Hz), om 22.00 uur UTC bij weinig verkeer,
* 14075 Khz (AF rond 1000 Hz), om 17.00 uur UTC als er weinig verkeer is,
* 144620 kHz (AF rond 1000 Hz), om 20.00 uur UTC bij weinig verkeer.

### <font color="green"><ins>PSKAM</ins></font>

De PSKAM10-modus is PSKAM verzonden met 10 baud. De snelheid is ongeveer 6 wpm. Deze modus maakt alleen chatten op lage snelheid mogelijk, maar tot zeer zwakke S/N (-19,5 dB) ... het kan worden gebruikt in LF-uitzendingen. De bandbreedte is ongeveer 40 Hz.

De PSKAM31-modus is PSKAM verzonden met 31,25 baud. De snelheid is ongeveer 20 wpm. Deze modus maakt het mogelijk om te chatten tot een zwakke S/N (-14 dB). De bandbreedte is ongeveer 110 Hz.

De interleaved PSKAM50-modus is afgeleid van de PSK10-modus voor de modulatie en voor AMTOR FEC voor de herhaling van de karakters (tijddiversiteit). De snelheid is 50 baud, maar elk karakter wordt twee keer verzonden met een interval van vijf karakters (voorbeeld: A X B Y C A D B…). De snelheid is ongeveer 31 wpm. Deze modus maakt het mogelijk om het aantal fouten als gevolg van HF-radiocondities aanzienlijk te verminderen (zonder willekeurige tekens te verzenden). De bandbreedte is ongeveer 180 Hz. De laagste S/N is -11,5 dB (voor een pc op 166 MHz of hoger).

|Item|Omschrjving|
|---|---|
|Gemaakt door|Patrick Lindecker F6CTE (2002/2003)|
|Baudrate|10 (PSKAM10), 31,25 (PSKAM31), 50 (PSKAM50)|
|Snelheid|6 wpm (PSKAM10), 20 wpm (PSKAM31), 31 wpm (PSKAM50)|
|Modulatie|DBPSK|
|Ontvangstmode|LSB of USB|
|Karakterset|56 «vaste lengte» karakters A..Z 0..9, CR, SPACE . , : - = + ? $ ’ ( ) ! / @ % met een foutresetteken en een inactief teken (weergegeven door ‘>’). Kleine karakters worden omgezet in hoofdletters en speciale karakters als « é » worden omgezet in standaard hoofdletters (in bovenstaand voorbeeld: « E »)|
|Vorm van de puls|voor PSKAM10 en PSKAM50: rechthoekig maar de overgang tussen 2 opeenvolgende verschillende bits wordt gedaan door een dalende sinus en vervolgens door een stijgende sinus (elk gedurende een kwart periode) voor PSKAM31: verhoogde cosinus|
|Bandbreedte|ongeveer 50 Hz (PSKAM10), 80 Hz (PSKAM31), 260 Hz (PSKAM50)|
|Demodulatie|coherent|
|Synchronisatie|automatisch met behulp van het signaal|
|Correctiecode|nee|
|Convolutiecode|nee|
|Interleaving|nee|
|Herhaling|elk karakter wordt 5 posities later herhaald (0,8 s in PSKAM50, 1,28 s in PSKAM31 of 4 s in PSKAM10) tussen 2 uitzendingen van hetzelfde karakter) (voorbeeld: A X B Y C A D B…). Deze tijd diversiteit laat de correctie van een foutief karakter. De detectie ervan is eenvoudig vanwege de specifieke inhoud van een teken (5 "spaties" en 3 "markeringen")|
|Automatische frequentiecorrectie|van +/-3 Hz tot +/- 10 Hz afhankelijk van het signaalniveau|
|Drift tolerantie|60 Hz/mn voor PSKAM31 en PSKAM50 en 40 Hz/mn voor PSKAM10 (afhankelijk van signaal-ruisverhouding)|
|Phoofd/Ppiek|0,86 voor PSKAM10 en 50, 0,79 voor PSKAM31|
|Laagste S/N|-11,5 dB voor PSKAM50, -14 dB voor PSKAM31 en -19,5 dB voor PSKAM10|

#### <font color="blue"><ins>Software op hobbyniveau</ins></font>
PSKAM: 
* Website: **[MultiPSK](http://f6cte.free.fr/index_anglais.htm)**

#### <font color="blue"><ins>Frequenties</ins></font>
PSKAM 10/31/50:

De modi (behalve PSK220F) zoals de PSKAM10/31/50 en PSK10, PSKFEC31, PSK63F +DIGISSTV zijn QRP-uitzendingen en worden zeer weinig gebruikt, men stelt voor om oproepen op het volgende te focussen.

Frequenties en tijden:
* 10148kHz. USB (AF rond 1000 Hz) om 22.00 uur UTC.
* 14075 Khz USB (AF rond 1000 Hz) om 17.00 uur UTC,
* 144620kHz. USB (AF rond 1000 Hz) om 20.00 uur UTC.

Een CW-prefix, op 12 of 20 wpm, die de gebruikte modus, software en stroom aangeeft, bijvoorbeeld: "VVV DE (een call) / MODE PSKAMXX / SOFT MULTIPSK / PWR: 5 WATTS" kan worden verzonden voordat de CQ-oproep zelf wordt gedaan. De optie van de video-identificatie van de modus, nu opgenomen in MULTIPSK, maakt het mogelijk om visueel in CMT Hell het moduslabel (en/of andere informatie) te specificeren vóór de hoofdtransmissie. Deze identifier zal zichtbaar zijn in de "waterval" van de andere Ham.
Bijvoorbeeld, vlak voor de algemene oproep ("CQ") in "PSKAMXX" wordt automatisch "PSKAMXX" verzonden in CMT Hell. De andere zendamateur zal "PSKAMXX" zien verschijnen op zijn "waterval" en zal onmiddellijk overschakelen naar PSKAMXX.

### <font color="green"><ins>PSKFEC31</ins></font>

In de software MULTIPSK van Patrick F6CTE wordt een experimentele nieuwe modus genaamd PSKFEC31 geïntroduceerd. Deze modus is afgeleid van de PSK10-modus voor de set tekens en van PSK31 voor de snelheid (31,25 baud). Elke bit (en niet elk teken zoals in PSKAM) wordt twee keer verzonden met een interval van 13 bits tussen de twee transmissies van de bit. De snelheid is ongeveer 28 wpm. Deze modus maakt het mogelijk om het aantal fouten als gevolg van
HF-voortplantingscondities te minimaliseren. De bandbreedte is ongeveer 110 Hz. De laagste S/N is -14,5 dB (voor een pc op 166 MHz of hoger).

|Item|Omschrijving|
|---|---|
|Gemaakt door|Patrick Lindecker F6CTE (06/2003)|
|Baudrate|31,25|
|Snelheid|28 wpm|
|Modulatie|DBPSK|
|Ontvangstmode|LSB of USB|
|Karakterset|56 "Varicode" tekens " A..Z 0..9, CR ,ESPACE, . , " : - = + ? $ ' ( ) ! / @ & # * met een foutresetteken en een inactief teken (weergegeven door ">"). Kleine karakters worden omgezet in hoofdletters en speciale karakters als "é" worden omgezet in standaard hoofdletters (in bovenstaand voorbeeld: "E")|
|Vorm van de puls|rechthoekig maar de overgang tussen 2 opeenvolgende verschillende bits wordt gedaan door een afnemende sinus en vervolgens door een toenemende sinus (elk één gedurende een kwart periode)|
|Bandbreedte|rond 160 Hz|
|Demodulatie| coherent|
|Synchronisatie|automatisch met behulp van het signaal|
|Correctiecode|nee|
|Convolutiecode|nee|
|Interleaving|nee|
|Herhaling|elke bit wordt 13 posities later herhaald (dus 0,42 s tussen 2 uitzendingen van dezelfde bit). Deze tijddiversiteit maakt de correctie van een foutieve bit mogelijk. De synchronisatie is eenvoudig|
|Automatische frequentiecorrectie|van +/-3 Hz tot +/- 10 Hz afhankelijk van het signaalniveau|
|Drifttolerantie|60 Hz/mn voor PSKFEC31 (afhankelijk van signaal-ruisverhouding)|
|Phoofd/Ppiek|0,88|
|Laagste S/N|-14,5 dB|

Dankzij het FEC-proces maakt deze modus het mogelijk om het aantal fouten als gevolg van HF-voortplantingscondities aanzienlijk te verminderen in vergelijking met BPSK31.

#### <font color="blue"><ins>Software op hobbyniveau</ins></font>
PSKFEC31:

- Website: **[MultiPSK](http://f6cte.free.fr/index_anglais.htm)**

#### <font color="blue"><ins>Frequenties</ins></font>
PSKFEC31:

Deze modi (behalve PSK220F) zoals PSKFEC31 en PSK10, PSKFEC31, PSK63F +DIGISSTV, PSKAM10/31/50 zijn QRP-uitzendingen en worden zeer weinig gebruikt. Men stelt voor om oproepen te concentreren op de volgende frequenties en tijden:
* 10148 kHz USB (AF rond 1000 Hz) om 22.00 uur UTC.
* 14075 Khz USB (AF rond 1000 Hz) om 17.00 uur UTC,
* 144620 kHz USB (AF rond 1000 Hz) om 20.00 uur UTC.

CW-prefix, op 12 of 20 wpm, die de modus, software en het gebruikte vermogen aangeeft, bijvoorbeeld: "VVV DE (een call) / MODE PSKFEC31 / SOFT MULTIPSK / PWR: 5 WATTS" kan worden verzonden voordat de CQ-oproep zelf wordt gedaan. De optie van de video-identificatie van de modus, nu opgenomen in MULTIPSK, maakt het mogelijk om visueel in CMT Hell het moduslabel (en/of andere informatie) te specificeren vóór de hoofdtransmissie. Deze identifier zal zichtbaar zijn in de "waterval" van de andere zendamateur.
Net voor de algemene oproep ("CQ") in PSKFEC31, wordt deze bijvoorbeeld automatisch "PSK63F" verzonden in CMT Hell. De andere Ham zal "PSK63F" zien verschijnen op zijn "waterval" en zal onmiddellijk overschakelen naar PSK10.

### <font color="green"><ins>RTTY</ins></font>

RTTY (ook bekend als Baudot of ITA2) gebruikt het Baudot 5-bits alfabet met FSK om tekstberichten over de kortegolf te verzenden. Deze modus sterft geleidelijk uit ten gunste van meer robuuste modi zoals PSK31 in de amateurdienst. Gebruikt het ITA-2-alfabet (algemeen bekend als Baudot, afgeleid van het Murray
code). Afgezien van incidenteel gebruik van de zendamateur, is de enige andere bekende gebruiker de Deutscher Wetterdienst (Duitse Meteorologische Dienst).

Er zijn veel modi die klinken als Baudot, maar dat in feite niet zijn. De Russen gebruiken bijvoorbeeld een 50 baud/200 Hz systeem dat in het oor klinkt als Baudot. Nader onderzoek met hulpmiddelen voor het bekijken van golfvormen en andere gegevens zal dit duidelijk aantonen.

Onder amateurradio is de meest gebruikelijke standaardmodus van RTTY 170 Hz met 45,45 Bd

|Mode|Baudrate|
|---|---|
|RTTY 85 Hz shift|45,45 Bd, 50 Bd, 75 Bd, 100 Bd|
|RTTY 170 Hz shift|45,45 Bd, 50 Bd, 75 Bd, 100 Bd|
|RTTY 450 Hz shift|45,45 Bd, 50 Bd, 75 Bd, 100 Bd|
|RTTY 850 Hz Shift|45,45 Bd, 50 Bd, 75 Bd, 100 Bd|

|Item|Omschrijving|
|---|---|
|Baudrate:|45. Een karakter bestaat uit een “start” bit (1 “spatie”), 5 bits en een “stop” bit (1,5 “markering”)|
|Snelheid:|60 woorden per minuut|
|Modulatie:|FSK twee tonen (« mark » en « space », "mark" high) met een verschuiving tussen tonen van 23 Hz, 170 Hz (standaard shift), 200 Hz of 850 Hz. Opmerking: in RTTY 45 bauds, shift=23 Hz, is de modulatie specifiek en wordt deze "MSK" (Minimum Shift Keying) genoemd. De demodulatie gebeurt niet met twee filters (zoals bij FSK), maar gebeurt met behulp van fasemetingen. De RTTY 45 bauds, shift 23 Hz MSK-modus, van MMTTY, is rond 2003 gemaakt door Makoto Mori, JE3HHT.|
|Ontvangstmode:| USB|
|Karakterset:|ITA2 (32 letters en 32 cijfers) zonder foutcorrectieteken (tekens met vaste lengte). Kleine karakters worden omgezet in hoofdletters en speciale karakters zoals « é » omgezet in standaardkapitaal (in het voorbeeld: « E »). Het karakter "Ongeperforeerde tape" wordt verkregen via de ASCII-waarde CHR(1). Het kan worden gebruikt voor het wijzigen van een tekenset (Russische tekens naar Latijnse karakters bijvoorbeeld).|
|Pulsvorm:|rechthoekig|
|Bandbreedte:|voor de standaard shft van 170 Hz, ongeveer 600 Hz (vanwege de rechthoekige vorm)|
|Demodulatie:|niet-coherent|
|Synchronisatie:|op « begin »|
|Correctiecode:|nee|
|Convolutie code:|nee|
|Interleaving:|nee|
|Pgemiddeld/Ppiek:|1|
|laagste S/N:|-5,5 dB In 50 bauds is de snelheid 67 wpm en de laagste S/N is -5 dB. In 75 bauds is de snelheid 100 wpm en de laagste S/N is -3,5 dB. De 850 Hz shift-modus is bedoeld voor oude teleprinters.|
|Noot:|Voor radioamateurs bedraagt de transmissiesnelheid 45 baud met een verschuiving van 170 Hz en zeldzamer 50 baud met een verschuiving van 425 Hz. Uitzendingen van Navy Mars Hams gebeuren in 75 baud, shift: 170, 183 of 200 Hz. Bij commerciële RTTY kan de transmissiesnelheid theoretisch 50, 75 of 100 baud zijn met een verschuiving van 85, 425 Hz, 450 of 850 Hz. In werkelijkheid zijn slechts 50 en 75 baud beschikbaar (in feite slechts 50 baud).|

#### <font color="blue"><ins>Frequentie</ins></font>
RTTY commercieel en maritiem:

* Websites: **[Deutscher Wetterdienst (German Weather Service) schedule (PDF)](http://www.ominous-valve.com/dwdschedule.pdf)** en **[Station KPH 's frequencies and schedule](https://www.radiomarine.org/mrhs-operations)**

RTTY: amateurfrequenties in KHz:

- 80 meter: 3570-3600
- 60 meter: 5330.5, 5346.5, 5357.0, 5371.5 en 5403.5
- 40 meter: 7040, 7080-7125
- 30 meter: 10130-10140
- 20 meter: 140701-14095
- 17 meter: 181010-18105
- 15 meter: 21070-21110
- 10 meter: 280710-28150
- 6 meter: 50300-50600

#### <font color="blue"><ins>Software op hobbyniveau</ins></font>
RTTY:

* Websites: **[CocoaModem (voor Macs)](http://www.w7ay.net/site/Applications/cocoaModem/index.html)**, **[FLdigi](https://sourceforge.net/projects/fldigi/files/)**, **[JVComm32](http://www.jvcomm.de/index_e.html)**, **[MixW](http://mixw.net)**, **[Mscan](http://downloads.fyxm.net/Mscan-SSTV-101684.html)**, **[MultiMode (voor Macs)](http://www.blackcatsystems.com/software/multimode.html)**, **[MultiPSK](http://f6cte.free.fr/index_anglais.htm)**, **[SeaTTY](http://www.dxsoft.com/en/products/seatty/)**, **[Sorcerer](http://www.kd0cq.com/2013/07/sorcerer-decoder-download/)** en **[WinWarbler](http://www.dxlabsuite.com/winwarbler/)**

#### <font color="blue"><ins>Additionele links:</ins></font>
RTTY:

* Websites: **[Radioteletype op Wikipedia](https://en.wikipedia.org/wiki/Radioteletype)**, **[W1AW digital transmissions](http://www.arrl.org/digital-transmissions)**, **[Scancat info](http://www.scancat.com/rvw-faqc.html)**

### <font color="green"><ins>VarAC nog invullen</ins></font>

## <font color="green"><ins>Digitale professionele mode</ins></font>
---
#### <font color="red"><ins>Amtor nog invullen</ins></font>
#### <font color="red"><ins>Coquelet</ins></font>

Coquelet is een MFSK-systeem, vergelijkbaar met Piccolo. Gebruikt ITA-2-tekenset. De twee belangrijkste modi zijn Coquelet-8 en Coquelet-13.

Coquelet is begin jaren zestig door ACEC in België ontwikkeld voor gebruik door de politie en het leger. Het was uitgebreid naar Frans veiligheids- en douanegebruik, evenals naar het Algerijnse ministerie van Buitenlandse Zaken
Zaken (MFA) en Douanegebruik (voornamelijk Coquelet-8 en Coquelet-80). Algerije was een van de laatste gebruikers van Coquelet, toen ze overgingen op nieuwere modi die ze hadden getest, zoals Racal MSM1250 "SkyFax"-modems en gemodificeerde PACTOR-systemen.

- Coquelet-8: 8-tone 300 Hz brede MFSK. Coquelet-8 heeft baudsnelheden van 13,33 Bd, 20 Bd en 26,67 Bd.
- Coquelet-13: 13-toons 500 Hz brede MFSK. Coquelet-13 heeft baudsnelheden van 13,33 Bd en 20 Bd.
- Coquelet-80: Variant van Coquelet-8. Coquelet-80 voegt FEC toe aan de Coquelet-8 golfvorm. Inclusief subvarianten Coquelet-80S en Coquelet-82S. Het belangrijkste verschil is dat Coquelet-82S kan worden gebruikt in beide zijbanden en maakt gebruik van uitgebreide handshaking- en synchronisatiesequenties. Coquelet-80 leent dezelfde bandbreedte en baudsnelheden van Coquelet-8.

**<font color="blue"><ins>Coquelet: frequenties:</ins></font>**

- 1078 Khz

**<font color="blue"><ins>Coquelet: software op hobbyniveau:</ins></font>**

- **[Sorcerer](https://www.kd0cq.com/2013/07/sorcerer-decoder-download/)**
- **[MultiPSK](http://f6cte.free.fr/index_anglais.htm)**

**<font color="blue"><ins>Coquelet: aanvullende koppelingen (links):</ins></font>**
- **[Coquelet-8, Digital Digest, Monitoring Times, April 1999 (pg.33)](https://www.sigidwiki.com/images/3/3d/Coquelet_Algers.pdf)**
- **[Shoc Database: Coquelet-8](https://cartoonman.github.io/Shoc/coquelet8.htm)**
- **[Shoc Database: Coquelet-13](https://cartoonman.github.io/Shoc/coquelet13.htm)**
- **[WAVECOM Database: Coquelet-8](http://www.wavecom.ch/content/ext/DecoderOnlineHelp/default.htm#!worddocuments/coquelet8.htm)**
- **[WAVECOM Database: Coquelet-13](http://www.wavecom.ch/content/ext/DecoderOnlineHelp/default.htm#!worddocuments/coquelet13.htm)**
- **[WAVECOM Database: Coquelet-80](http://www.wavecom.ch/content/ext/DecoderOnlineHelp/default.htm#!worddocuments/coquelet80.htm)**









E-mail adres van deze site: <info@delta-tech.nl>

Een andere website **[NU.nl](http://www.nu.nl)**