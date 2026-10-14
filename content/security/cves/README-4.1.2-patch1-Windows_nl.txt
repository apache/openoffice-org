-----BEGIN PGP SIGNED MESSAGE-----
Hash: SHA256



README-4.1.2-patch1-Windows_nl.txt 1.0.2  UTF-8                   2016-08-28

        TOEPASSEN VAN DE HOTFIX VOOR APACHE OPENOFFICE OP WINDOWS
        =========================================================
    
  Het archiefbestand apache-openoffice-4.1.2-patch1-Win_x86_nl.zip bevat
  bestanden voor het toepassen van een reparatie voor Apache OpenOffice 4.1.2
  op Microsoft Windows. De reparatie elimineert een mogelijk probleem voor de
  veiligheid geïdentificeerd als CVE-2016-1513. De laatste details over die
  mogelijke gevoeligheid en de oplossing daarvoor is te vinden op het web op
  de pagina <http://www.openoffice.org/security/cves/CVE-2016-1513.html>.
  
  Indien u zich niet gerust voelt bij deze procedure, consulteer dan een
  familielid of bekende met de nodige kennis die u daarbij zou kunnen
  helpen. Indien u niet zelf de PC voor Windows heeft geïnstalleerd, bekijk
  dan of iemand die een expert is in het onderhouden van PC's u kan helpen.
  
      INHOUD
       Notice
       A. Vooraf benodigd
       B. Voorbereidingen
       C. Procedure
       D. Bevestiging
       E. Problemen oplossen en de patch verwijderen
       Dankwoorden
       Appendix. Handmatig toepassen van de patch

               NOTICE

   Licensed to the Apache Software Foundation (ASF) under one
   or more contributor license agreements. The ASF licenses 
   this file to you under the Apache License, Version 2.0 (the
   "License"). You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing,
   software distributed under the License is distributed on an
   "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   KIND, either express or implied. See the License for the
   specific language governing permissions and limitations
   under the License.


A. VOORAF BENODIGD

 * Mogelijkheid voor toegang tot en het navigeren over het bestandssysteem 
   van uw computer.
  
 * Downloaden van apache-openoffice-4.1.2-patch1-Win_x86_nl.zip naar een
   locatie op uw Windows PC waar het kan worden gebruikt en de inhoud er van
   kan worden uitgenomen.
  
 * Uitpakken van de inhoud van een ZIP-pakket naar een map van waaruit
   de inhoud van de ZIP kan worden bekeken en gebruikt.
   
 * OPTIONEEL: Bevestigen van de juistheid van downloads door verifiëren van
   de hash-controlebestanden (.md5, .sha1, en .sha256).
  
 * OPTIONEEL: Bevestigen van de juistheid en authenticiteit van de downloads
   door het verifiëren van de bestanden voor de digitale handtekening (.asc) 
   met behulp van PGP-software en het bestand met de publieke KEYS, door u
   verkregen vanaf de locatie op internet
   <https://archive.apache.org/dist/openoffice/>. 

 * OPTIONEEL: Verbinding verbreken en opnieuw verbinden van uw computer met
   het internet en enig ander netwerk bij het uitvoeren van de procedure van
   de patch.
  

B. VOORBEREIDINGEN

 * Lees eerst de gehele procedure door zodat u kunt anticiperen op waar elke
   stap naartoe leidt en welke acties vereist zijn.

 * Open Apache OpenOffice en bevestig dat u Apache OpenOffice 4.1.2 gebruikt.
   De versie kan worden gevonden in het dialoogvenster van het Helpmenu "Over 
   OpenOffice".
  
 * Verifieer dat een aantal documenten van Apache OpenOffice, die 
   belangrijk voor u zijn, correct openen zonder enige wijzigingen te hebben 
   gemaakt aan de software tot op dit moment. Voor documenten die problemen
   opleveren, sluit ze zonder ze op te slaan. Deze problemen bestaan buiten 
   de patch en zouden afzonderlijk moeten worden gerapporteerd op de
   publiekelijst users@openoffice.apache.org.
  
 * Wanner u dit heeft gedaan, verifieer dan dat de Apache OpenOffice
   Snelstarter niet werkt. Klik op het menu Extra in OpenOffice, 
   selecteer "Opties ...". Op de zijbalk van de werkbalk Opties, onder
   OpenOffice, selecteer het item Geheugen. Op dat paneel, verwijder elk
   vinkje bij "OpenOffice laden bij opstarten" onder "OpenOffice 
   Snelstarter." Klik op OK in het dialoogvenster Opties.

   Opmerking: Snelstarter is over het algemeen niet nodig op moderne PC's 
   voor Windows.  Toekomstig onderhoud van OpenOffice is eenvoudiger als u
   Snelstarter niet langer gebruikt.
  
 * Sluit OpenOffice af en herstart uw Windows PC.

  
C. PROCEDURE

 1. Indien u dat nog niet gedaan hebt, download het ZIP-archief
    apache-openoffice-4.1.2-patch1-Win_x86_nl.zip vanaf het internet,
    <https://archive.apache.org/dist/openoffice/4.1.2-patch1/binaries/Windows>
    met behulp van uw favoriete webbrowser. De map Downloads van uw
    gebruikersaccount op Windows kan prima gebruikt worden. Als een
    veiligheidsmaatregel zou elke map waar u naar downloadt eerst leeg
    moeten zijn. OPMERKING: Hoewel het niet noodzakelijk is, is het goed
    om een speciaal daarvoor bestemde map te gebruiken om
    verwarring met en mogelijke besmetting door andere inhoud te voorkomen.
  
    OPMERKING: Sommige Antivirus-producten zouden kunnen protesteren door 
    de .zip als niet veilig te kwalificeren ofwel omdat zij het niet kennen
    of omdat het uitvoerbare code bevat. In dat geval is het noodzakelijk 
    om de Antivirus tijdelijk uit te schakelen, lang genoeg om het downloaden
    te voltooien. Als alternatief: kijk of er een instelling is voor Anti-
    virus die uw toestemming vraagt om het downloaden toe te staan en
    het niet automatisch verwijdert/in quarantaine plaatst op een individuele
    basis. 
  
 2. Als het downloaden zonder problemen verloopt, is het .zip-bestand
    beschikbaar om te gebruiken. Voor aanvullende authenticatie, verifieer 
    de digitale handtekening en/of de hash-controles als u de daarvoor
    benodigde software heeft.

 3. Als veiligheidsmaatregel kunt u nu de verbinding van uw computer
    met het internet en enig ander netwerk verbreken. Als u dat doet, onthoud 
    dan om de verbinding weer te herstellen als de volgende stappen zijn
    voltooid of uitgesteld.     
  
 4. Open de map waarin u het ZIP-archief downloadde. 
 
 5. Klik met rechts op de bestandsnaam van het ZIP-bestand om het contextmenu
    te zien voor dat bestand.
  
 6. Klik op "Alles uitpakken ..." in het contextmenu.
 
 7. Gebruik de mapnaam die wordt voorgesteld in het dialoogvenster voor
    uitpakken en voltooi het uitpakken.
     
 8. Indien er geen schade aan het .zip-bestand wordt gerapporteerd, zult u 
    een map hebben die is genaamd: apache-openoffice-4.1.2-patch1-Win_x86_nl
    op dezelfde plaats als het gedownloade .zip-bestand. Het zal deze
    inhoud hebben:
  
     README-4.1.2-patch1-Windows_nl.txt
      De versie van deze procedure die van toepassing is voor dat 
      pakket.
      
     LICENSE.txt
      De Apache License Version 2.0 waaronder de .zip en
      de inhoud ervan zijn gelicenseerd.
 
     NOTICE.txt
      Een notitie over de origine van de inhoud.
      
     APPLY-4.1.2-patch1_nl.bat
      Het Windows batchfile-script om het installeren van
      de patch uit te voeren.
      
     REVERT-4.1.2-patch1_nl.bat
      Het Windows batchfile-script om, indien nodig, 
      de patch terug te draaien.
      
     tl.dll.new
      Het gepatchte bibliotheekbestand tl.dll dat moet worden geïnstalleerd
      in de software van Apache OpenOffice 4.1.2. De eigenschappen van dit
      bestand identificeren het als 620.544 bytes te hebben en dat het is
      aangepast op dinsdag 5 juli 2016, 18:08:28.
      
     tl.dll.new.asc
      Een digitale handtekening die is verschaft door de ontwikkelaar van 
      tl.dll.new die kan worden gebruikt om de authenticiteit en origine te
      verifiëren van tl.dll.new met behulp van voor dat doel geschikte
      software.  De eigenschappen van dit bestand identificeren dat het 819
      bytes heeft en is aangepast op donderdag 14 juli 2016, 13:23:58.
      
     tl.dll.old
      De originele bibliotheek tl.dll, zonder de patch, vanuit de
      officiële distributie van Apache OpenOffice 4.1.2. Dit bestand
      is opgenomen als een te gebruiken back-up, indien nodig, als deel
      van het terugdraaien van de patch. De eigenschappen van dit bestand
      identificeren dat het 620.032 bytes bevat en is aangepast op 
      woensdag 21 oktober 2015, 15:49:50.
      
     tl.dll.old.asc
      Een digitale handtekening die is verschaft door de ontwikkelaar die
      dit bestand uitnam uit de setup-bestanden van Apache OpenOffice 4.1.2
      voor Windows als bevestiging van zijn authenticiteit. De eigenschappen
      van dit bestand identificeren dat het 484 bytes heeft en is aangepast
      op donderdag 11 augustus 2016, 10:57:06

    [Opmerking: Als u andere programma's gebruikt voor ZIPpen en unZIPpen 
    van .zip-bestanden, gaat het resterende gedeelte van deze procedure er 
    van uit dat u de inhoud van de .zip hebt uitgepakt naar een map met
    dezelfde naam en inhoud als hierboven beschreven.]
  
 9. DE PATCH AUTOMATISCH TOEPASSEN.
    Dubbelklik op het bestand APPLY-4.1.2-patch1_nl.bat. De geautomatiseerde
    procedure zal een venster openen waarin de voortgang wordt weergegeven.
    
    Als het bericht "Windows beschermt uw PC" vanuit Windows SmartScreen 
    verschijnt, klik op de link "Meer info". Op het volgende bericht,
     klik op "Toch uitvoeren." Als u dit niet vertrouwt, gebruik dan het
     .bat-script niet.
  
    [Opmerking: Als het gebruiken van de automatische procedure niet 
    effectief is om enige reden, is het mogelijk hetzelfde resultaat 
    handmatig te verkrijgen.  Bekijk de Appendix aan het eind van dit
    document.]
  
10. ADMINISTRATIEVE RECHTEN VERSCHAFFEN
    Stap (9) zou voltooid kunnen worden zonder interruptie. Indien niet, 
    zal er een uitleg zijn voor elk probleem. Als de procedure
    rapporteert ADMINISTRATIVE PRIVILEGE REQUIRED, zult u die moeten
    verschaffen.

    a. Klik met rechts op het bestand APPLY-4.1.2-patch1-Windows_nl.bat in 
       de Bestandsverkenner. Indien er een actie "Als administrator
       uitvoeren" staat in het contextmenu dat verschijnt, klik daar dan op.

    b. Indien, in plaats daarvan, er een optie "Openen als ..." is, klik 
       daar dan op en kies het account voor de Administrator waarvoor u het 
       wachtwoord weet. Geef dat op indien er naar gevraagd wordt.

    c. Op Windows XP zijn er standaard niet van dergelijke opties. De
       beste oplossing is om deze gehele procedure uit te voeren binnen een
       account van een Administrator. Installeren van Apache OpenOffice
       vereist administratieve rechten. Indien u de installatie niet zelf
       uitvoerde, consulteer dan degene die dat deed.
         

D. BEVESTIGING

 Bij het met succes toepassen van de patch, is het voor uzelf belangrijk om 
 te weten dat Apache OpenOffice correct functioneert.

 * Start Apache OpenOffice. Er zouden geen zichtbare verschillen mogen zijn
   en het programma zou normaal moeten werken.
  
 * Verifieer de documenten die met succes werden geopend in de stap 
   VOORBEREIDINGEN aan het begin van deze procedure. Zij zouden hetzelfde
   moeten openen als eerder. Er zouden geen waarneembare verschillen in
   bewerken moeten zijn. 
  
 * Als een document dat eerder met succes werd geopend nu niet juist opent 
   of helemaal niet, sluit het zonder het op te slaan. Laat het even alleen. 
   Rapporteer de situatie op de publieke mailinglijst
   dev@openoffice.apache.org en wacht op nadere instructies.
   
   OPMERKING: Als u Apache OpenOffice 4.1.2 opnieuw installeert zal de patch
   niet worden behouden en dient u die opnieuw toe te passen. Indien u een
   latere versie van Apache OpenOffice installeert, is de patch niet nodig.


E. PROBLEMEN OPLOSSEN EN DE PATCH VERWJDEREN

 Als er problemen zijn met bekende documenten, kunt u de originele "tl.dll" 
 herstellen. De patch kan worden verwijderd op elk moment dat u bezorgd bent
 dat een probleem is gerelateerd aan het installeren van de patch of om te 
 verifiëren of het probleem niet afhankelijk is van het feit of de patch is
 opgenomen of niet. 
  
 Sluit, om de patch automatisch te verwijderen, OpenOffice en, in de map
 waar het bestand APPLY is te vinden, dubbelklik op het bestand
 REVERT-4.1.2-patch1_nl.bat.

 De geautomatiseerde procedure REVERT werkt nagenoeg hetzelfde als de
 procedure APPLY in de stappen (9-10) in het gedeelte C, hierboven.
 
 Als een geïdentificeerd probleem nog steeds optreedt na het uitvoeren van de
 procedure REVERT, is de patch niet de bron van het probleem. Het is veilig
 om de patch opnieuw te APPLY-en. Het probleem zou moeten worden
 gerapporteerd en besproken op de publieke lijst users@openoffice.apache.org.
 

DANKWOORDEN

 Het ontwikkelen, testen en documenteren van de 4.1.2-patch1 werd
 bereikt door de bijdragen van de volgende personen:

   William L. Anderson
   Ariel Constenla-Haile
   Dick Groskamp
   Dennis E. Hamilton
   Damjan Jovanovic
   Marcus Lange
   Don Lewis
   Pedro Lino
   Carl Marcum
   Keith N. McKenna
   Andrea Pescetti
   Kay Schenk
   Jörg Schmidt
   Patricia Shanahan
   
APPENDIX. HANDMATIG TOEPASSEN VAN DE PATCH

A1. AANVULLEND VOORAF BENODIGD

 * Vertrouwen met het toegang verkrijgen tot de technisch mogelijkheden van
   het Windows besturingssysteem en het aanpassen van softwarebestanden die 
   deel uitmaken van het systeem.
  
 * Bestanden kunnen identificeren op hun volledige namen en grootte,
   datumstempels, en andere eigenschappen te controleren.
  
 * Bestanden hernoemen; bestanden kopiëren van de ene locatie naar een andere
   in locaties van het besturingssysteem.
  
 * Begrijpen hoe de computermap te vinden waar de software voor Apache
   OpenOffice is geïnstalleerd om die te bewerken.
  
 * Administratieve rechten inschakelen voor het uitvoeren van bewerkingen die
  dergelijke rechten vereisen.

A2. HANDMATIGE PROCEDURE

 Deze procedure kan dienen als vervanging, beginnend met stap (9) van de 
 geautomatiseerde procedure. Dit zijn equivalente stappen ten opzichte 
 van die welke automatisch worden uitgevoerd.

 9. BELANGRIJK. Op elk moment in de volgende stappen (10-17), kan er een
    notificatie zijn dat u een Administrator moet zijn om een 
    actie uit te voeren of om door te kunnen gaan.

   * Als er een knop is die u rechten als Administrator kan geven, 
     druk er dan op.

   * Indien wordt gevraagd een wachtwoord voor een Administrator op te 
     geven en u kent dat wachtwoord, geef dat dan in.
     
   * Anders zou u uw gebruikersaccount moeten opwaarderen naar een
     Administrator, en terugkeren naar deze stap als u dat heeft gedaan.
     Onthoud om uw gebruikersaccount terug te zetten naar zijn eerdere niet-
     Administrator functie als deze procedure voltooid is of moest uitstellen.
     
   * Indien u niet in staat bent om dit op enigerlei wijze te voltooien, zult
     u assistentie nodig hebben van iemand die rechten voor Administrator
     kon toekennen toen Apache OpenOffice werd geïnstalleerd.

10. Zoek de map op op de schijf in uw besturingssysteem waar OpenOffice
    is geïnstalleerd, gewoonlijk is dat op de (C:)-schijf. OpenOffice zal
    staan in de map "Program Files (x86)" als die er is. Open het. Anders 
    zal OpenOffice staan in de map "Program Files". Open dan die.
  
11. Scroll door de map die werd geopend in stap (10) totdat u de map
    "OpenOffice 4" daar vindt.
  
12. In de map "OpenOffice 4", zoek en open de map "program".

13. In de map "OpenOffice 4\program", zoek naar het bestand, genaamd "tl.dll".
    Klik met rechts op de bestandsnaam en selecteer "Eigenschappen". In het
    dialoogvenster Eigenschappen van tl.dll, paneel Algemeen, zal de grootte 
    620,032 bytes zijn.
  
14. Hernoem het bestand "tl.dll" naar "tl.dll.old". U zult het kunnen
    herstellen als u later besluit de patch te verwijderen.
  
15. Zorg er voor dat nu de map "OpenOffice 4" en de map 
    "apache-openoffice-4.1.2-patch1-apply-Win_x86_nl" beide geopend zijn,
    zodat de titelbalk van de eerste niet wordt bedekt door de tweede. 
    Als er een overlappende map is, zou de map waarin de Zip werd uitgepakt
    bovenop moeten zijn.
  
16. Met de muis boven tl.dll.new in de map van patch1 en de toets op het
    toetsenbord Ctrl ingedrukt, klik en houd de muisknop ingedrukt en sleep 
    het bestand tll.dll.new naar de titelbalk van de map 
    "OpenOffice 4\program\". Laat de muisknop los en daarna de Ctrl-toets. 
    Er zal nu een kopie van tl.dll.new staan in de programmamap 
    "OpenOffice 4".
 
17. In de programmamap, hernoem "tl.dll.new" naar "tl.dll".

18. De procedure is voltooid. U kunt de programmamap en de map patch1 
    sluiten.
  
19. Handmatig verwijderen van de patch is recht door zee.

  * Zoek, in de programmamap OpenOffice, het bestand tl.dll dat 
    de 4.1.2-patch1 versie is en verwijder het.
  
  * Hernoem het bestand tl.dll.old terug naar tl.dll.
  
  
           *** einde van README-4.1.2-patch1-Windows_nl.txt ***
            
-----BEGIN PGP SIGNATURE-----
Version: GnuPG v2

iQEcBAEBCAAGBQJXwvwDAAoJEPluif/UVmKKlEAH/1+3OiNLy323Ewl7jCQeCtiZ
FisEpfD6voCL4E1/i4tZrYVQ15cIf14AidvYyA/0smVo007VWJTTPJt2/lU24cXv
EixRd97lXbMHlvIapYspXelPapuC+gY2764HdRS1clqH9x+XJ5TnMqD4XQdzz4h6
HUvCVb+caSdxh19iw3pXvc3SeObdVWbfxgH5gXjQunUABnekkhpsccqhwtUfHwGC
ELAIKmBBcL9UhUuN5bWBNDv0V7b22yWadYxuuxdbn1N6cNqoEGj9OXrl4CQrI6ku
fE/kUb4bimSVmDbEp2/bzvAw+2aalqBFTVJpe/IC15ZuBXRPYBHzNjOqZGt4o48=
=MZl4
-----END PGP SIGNATURE-----
