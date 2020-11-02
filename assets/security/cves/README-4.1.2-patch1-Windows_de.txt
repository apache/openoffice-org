-----BEGIN PGP SIGNED MESSAGE-----
Hash: SHA256



README-4.1.2-patch1-Windows_de.txt 1.0.1   UTF-8                  2016-08-27

        VERWENDEN DES HOTFIXES FÜR APACHE OPENOFFICE UNTER MS WINDOWS
        =============================================================

    Die Archiv-Datei apache-openoffice-4.1.2-patch1-Win_x86.zip enthält
    Dateien für ein Sicherheitsupdate für Apache OpenOffice 4.1.2 unter 
    MS Windows.  Das Update beseitigt die Lücke die unter dem Namen
    CVE-2016-1513 identifiziert wurde.  Die letztaktuellen Details zu
    CVE-2016-1513 und Gegenmaßnahmen finden Sie auf der Webseite
    <http://www.openoffice.org/security/cves/CVE-2016-1513.html>.
    
    Wenn Sie mit den folgenden Arbeiten nicht vertraut sind, suchen Sie sich
    Hilfe bei Anderen, die sich damit auskennen (z.B. ziehen Sie ein Forum 
    zu Rate).  Falls Sie ihren Windows-PC, oder OpenOffice, nicht selbst
    installiert haben, 	wenden Sie sich wegen Hilfe an denjenigen der das
    getan hat.

    INHALT
        Lizenzhinweis
        A. Voraussetzungen
        B. Vorbereitung
        C. Vorgehen
        D. Erfolgskontrolle
        E. Problembeseitigung und Wiederentfernen des Patches
        An der Erstellung des Patches Beteiligte
        Anhang: Manuelle Installation des Patches

                         LIZENZHINWEIS

    Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  The ASF licenses 
    this file to you under the Apache License, Version 2.0 (the
    "License"). You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.


A. VORAUSSETZUNGEN

 * Sie müssen sich mit dem Dateisystem unter Windows und der Arbeit mit
   mit einem Dateimanager (Standard unter MS Windows: "Windows-Explorer")
   auskennen

 * Das Paket apache-openoffice-4.1.2-patch1-Win_x86.zip muss heruntergeladen,
   lokal gespeichert sein

 * Das Zip-Paket muss anschließend entpackt werden

 * Optional: Überprüfen Sie das Zip-Paket anhand der veröffentlichten 
   Prüfsummen (md5, sha1 und sha256) auf Richtigkeit

 * Optional: Überprüfen Sie die Echtheit des Downloads aufgrund der
   PGP-Signatur, siehe: <https://archive.apache.org/dist/openoffice/>.

 * Optional: Trennen Sie den Computer während der der Durchführung
   des Updates vom Internet und lokalen Netzwerken


B. VORBEREITUNG

 * Lesen Sie alle Arbeitsschritte vorab durch, um einen Überblick zu gewinnen

 * Öffnen Sie in Apache OpenOffice das Menü "Hilfe -> Info" über OpenOffice
   um zu prüfen das Sie tatsächlich die Version 4.1.2 von Apache OpenOffice
   haben

 * Überprüfen Sie testweise einige bestehende, wichtige Dokumente auf
   richtige Funktion indem Sie sie in OpenOffice öffnen und testweise
   Änderungen vornehmen (nicht durch Speichern übernehmen).  Gibt es Probleme
   können Sie diese auf der Mailingliste <users@openoffice.apache.org>
   berichten und sich mit Anderen austauschen.

 * Deaktivieren Sie den Schnellstarter (Menü "Extras -> Einstellungen ->
   Arbeitsspeicher"  und Haken weg bei "OpenOffice beim Systemstart laden")

 * Hinweis: Bei modernen Windows-Versionen wird der Schnellstarter nicht mehr 
   unbedingt benötigt, weil hier OpenOffice auch ohne Schnellstarter schnell 
   genug gestartet wird. Sie können den Schnellstarter also u.U. dauerhaft
   deaktivieren.

 * Beenden Sie OpenOffice und starten Sie (vorsichtshalber) Windows neu


 C. VORGEHEN

 1. Wenn Sie es noch nicht getan haben, laden Sie das Zip-Archiv
    apache-openoffice-4.1.2-patch1-Win_x86_de.zip aus dem Internet herunter
    <https://archive.apache.org/dist/openoffice/4.1.2-patch1/binaries/Windows>.
    Speichern Sie das Zip lokal ab.

    Hinweis: Manche Virenscanner erkennen das heruntergeladene Zip als
    unsicher, weil es ausführbaren Code (die *.bat-Dateien) enthält.
    Deaktivieren Sie in diesen Fällen den Virenscanner vorübergehend.

 2. Optional: Überprüfen Sie das heruntergeladene Zip anhand der Prüfsumme 
    (md5, sha1, sha256).

 3. Vorsichtshalber können Sie jetzt ihren PC vom Internet und/oder lokalen
    Netzwerk trennen.

 4. Öffnen Sie den Ordner wo Sie das heruntergeladene Zip gespeichert haben.

 5. Klicken Sie mit der rechten Maustaste auf das Zip um das Kontextmenü zu 
    erzeugen.

 6. Klicken Sie im Kontextmenü auf den Eintrag zum Extrahieren des Zip, 
    beispielsweise auf "Alle extrahieren...".

 7. Nutzen sie den vorgeschlagenen Ordnernamen und starten Sie das
    Entpacken des Zip durch Klick auf die Schaltfläche "Extrahieren".

    Hinweis: Die konkreten Arbeitsabläufe für 5.-7. können dann anders
    sein, wenn sie ein separates Zip-Programm auf ihrem Rechner installiert
    haben. Vollziehen Sie in diesen Fällen die Schritte sinngemäß nach.

 8. Wird kein Fehler angezeigt haben Sie nach dem Extrahieren des Zip
    einen Ordner namens "apache-openoffice-4.1.2-patch1-Win_x86" mit
    folgendem Inhalt:

    README-4.1.2-patch1-Windows_de.txt
       Die Readme-Datei des Pakets (die Datei die Sie hier gerade lesen).

        LICENSE.txt
          Die Apache Lizenz 2.0 unter welcher das Paket veröffentlicht ist.

        NOTICE.txt
          Hinweise zur Entstehung/Herkunft der Inhalte des Pakets.

        APPLY-4.1.2-patch1_de.bat
          Die Windows Batch-Datei zur Installation des Patches.

        REVERT-4.1.2-patch1_de.bat
          Die Windows Batch-Datei zum Wiederentfernen das Patches (sollte 
          das später notwendig werden).

        tl.dll.new
          Die gepatchte dll-Bibliothek. (Dateigröße 620.544 Byte,
          Dateidatum 05.07.2016 18:08:28)

        tl.dll.new.asc
          Die elektronische Signatur zum Prüfen der Authentizität der
          Datei tl.dll.new.

        tl.dll.old
          Die alte dll-Bibliothek, so wie sie auch im AOO 4.1.2 Installationspaket
          enthalten ist.

        tl.dll.old.asc
          Die elektronische Signatur zum Prüfen der Authentizität der
          Datei tl.dll.old.

    [Hinweis: Haben Sie ein anderes Zip-Programm verwendet stellen sie sicher
    das sie auf jeden Fall den Ordner und die Dateien, wie vorstehend
    beschrieben, beim Entpacken des Zip erhalten haben.]

 9. AUTOMATISCHE INSTALLATION DES PATCHES

    Klicken Sie doppelt auf APPLY-4.1.2-patch1_de.bat. Es wird ein Fenster
    geöffnet und der Fortschritt der Installation ausgegeben.
    
    Wenn die Meldung "Windows hat Ihren PC geschützt" von Windows
    Smartscreen angezeigt wird, dann klicken Sie auf den "Mehr Info"-Link.
    Bei der nächsten Meldung klicken Sie auf "In jedem Fall ausführen".
    Wenn Sie dem nicht vertrauen, dann sollten Sie die .bat-Skriptdatei
    nicht verwenden.
    
    [Hinweis: Sollte die automatische Installation nicht erfolgreich
    durchgeführt werden können, weil die *.bat-Datei abbricht, können Sie
    den Patch auch manuell installieren, siehe dazu den Anhang am Ende des
    Dokuments hier.]

10. ERLANGEN ADMINISTRATIVER RECHTE

    Schritt 9 sollte ohne Unterbrechung durchlaufen, falls nicht gibt die
    *.bat-Datei entsprechende Meldungen aus. Sollte die *bat-Datei die 
    Meldung ausgeben das ADMINISTRATIVE RECHTE BENÖTIGT werden, tun Sie 
    bitte Folgendes.

    a. Führen Sie im Dateimanager einen Rechtsklick auf die Datei
       APPLY-4.1.2-patch1-Windows_de.bat durch und klicken Sie im
       erscheinenden Kontextmenü auf "Als Administrator ausführen"

    b. Gibt es im Kontextmenü stattdessen die Option "Ausführen als ..."
       verwenden Sie Diese. Hierbei werden Sie nach dem Passwort für den
       Administrator gefragt welches Sie eingeben müssen.

    c. Unter Windows XP gibt es die Kontextmenüeinträge, gemäß a. und b.,
       standardmäßig nicht, es ist deshalb empfohlen sich dort direkt als
       Administrator anzumelden und erst danach die *.bat-Datei zu starten.

D. ERFOLGSKONTROLLE

  Nach Anwendung des Patches sollten Sie sich davon überzeugen das der Patch
  richtig installiert ist und funktioniert.

  * Starten Sie Apache OpenOffice, hierbei sollte sich das Programm normal 
    verhalten und kein sichtbarer Unterschied zum Programmverhalten vor dem
    Patch sichtbar sein.

  * Überzeugen Sie sich das die Dokumente die Sie unter B. getestet hatten
    auch 
    jetzt noch einwandfrei zu öffnen sind wie vorher.

  * Gibt es Dokumente die vorher funktioniert hatten und jetzt nach erfolgtem
    Patch nicht mehr funktionieren berichten Sie dieses Problem bitte auf der 
    Mailingliste <dev@openoffice.apache.org>, wo man Ihnen weitere Hinweise
    geben wird was zu tun ist.

  Hinweis: Sollten Sie Apache OpenOffice nach Anwendung des Patches neu
  installieren, so müssen Sie anschließend auch den Patch neu installieren, 
  da dieser bei Neuinstallation von Apache OpenOffice verloren geht.

E. PROBLEMBESEITIGUNG UND WIEDERENTFERNEN DES PATCHES

  Gibt es nach Installation des Patches Probleme mit Dokumenten, welche vor
  dem Patch nachweislich funktioniert haben, können Sie jederzeit den Patch
  rückgängig machen, auch um dadurch zu überprüfen ob die Probleme vom Patch
  herrühren. Hierzu muss die originale tl.dll (=tl.dll.old) wieder hergestellt werden.

  Um den Patch automatisch zu entfernen beenden Sie zunächst Apache
  OpenOffice. Starten Sie anschließend die Datei REVERT-4.1.2-patch1_de.bat 
  um den Patch zu entfernen.

  Die automatische Entfernung durch die *.bat-Datei entspricht sinngemäß den
  Schritten aus Abschnitt C. (9-10), siehe weiter vorn.

  Bestehen nach dem Entfernen des Patches die identifizierten Probleme mit 
  den Dokumenten weiterhin so scheidet der Patch selbst als Ursache dafür 
  aus. In diesem Falle können Sie ohne Gefahr den Patch erneut installieren.
  Sie sollte die aufgetretenen Probleme möglichst auf der Mailingliste
  <users@openoffice.apache.org> berichten und sie mit anderen Nutzern
  besprechen.


AN DER ERSTELLUNG DES PATCHES BETEILIGTE

  Die Entwicklung, das Testen und die Dokumentation des vorliegenden Patches 
  wurde durch die Mitarbeit folgender Personen möglich:

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
     

ANHANG. MANUELLE INSTALLATION DES PATCHES

A1. ZUSÄTZLICHE VORAUSSETZUNGET

  * Erfahrungen mit technischen Details von MS Windows und beim Umgang mit 
    dem Dateisystem

  * Die Fähigkeit Dateien anhand ihres Namens, Prüfsummen, Zeitstempeln und 
    ähnlichen Eigenschaften verlässlich zu identifizieren

  * Umbenennen und Kopieren von Dateien innerhalb der Windows-Systemumgebung

  * Kenntnisse um ein installiertes Apache OpenOffice innerhalb von MS
    Windows zu identifizieren

  * Kenntnisse um sich unter MS Windows administrative Rechte zu verschaffen,
    welche für die Installation des Patches benötigt werden

A2. MANUELLER PROZESS

  Dieser Prozess kann ersatzweise ab Schritt 9 gestartet werden, um den
  automatischen Prozess zu ersetzen. Es sind gleichwertige Schritte im
  Vergleich zu den automatischen.

 9. WICHTIG. Zu jeder Zeit bei den folgenden Schritten 10-17, kann eine
    Meldung erscheinen, dass Administrator-Rechte benötigt werden, um eine
    Aktion auszuführen oder weiterzumachen:

     * Wenn vorhanden, drücken Sie einen Button, um Administrator-Rechte zu 
       bekommen.

     * Wenn bekannt, geben Sie ein Administrator-Passwort ein, wenn dazu 
       aufgefordert wird.

     * Ansonsten muss das vorhandene Benutzerkonto um Rechte erweitert 
       werden, um Administrator zu sein. Gehen Sie zu diesem Schritt zurück,
       wenn das gemacht wurde.  Bitte daran denken, die Rechte für das
       Benutzerkonto wieder zu reduzieren, wenn alle Schritte durchgeführt
       oder dieser Prozess unterbrochen wurde.

     * Falls dies nicht durchgeführt werden kann, wird Unterstützung von der
       Person benötigt, die Administrator-Rechte und Apache OpenOffice 
       installiert hat.

10. Finden Sie das Verzeichnis, in dem OpenOffice installiert wurde.
    Normalerweise auf dem C: Laufwerk. OpenOffice wird sich im 
    "Programme (x86)"-Verzeichnis befinden, falls vorhanden. Öffnen Sie 
    dieses Verzeichnis. Ansonsten wird sich OpenOffice im
    "Programme"-Verzeichnis befinden. Dann dieses Verzeichnis öffnen.

11. Blättern Sie durch das Verzeichnis aus Schritt 10, bis das 
    "OpenOffice 4"-Verzeichnis gefunden wurde.

12. Im "OpenOffice 4"-Verzeichnis finden und öffnen Sie das
    "Program"-Verzeichnis.

13. Im "OpenOffice 4\Program"-Verzeichnis, finden Sie die Datei "tl.dll".
    Drücken Sie die rechte Maustaste auf dieser Datei und wählen 
    "Eigenschaften". Im "tl.dll"-Dialog auf dem Tab-Reiter "Allgemein" 
    muss die Größe mit 620.032 Byte angegeben werden.

14. Benennen Sie die Datei "tl.dll" nach "tl.dll.old" um. Sie kann 
    wiederhergestellt werden, falls der Patch später wieder entfernt 
    werden soll.

15. Jetzt sollten die beiden Windows Explorer-Fenster mit dem
    "OpenOffice 4\Program"-Verzeichnis und mit
    "apache-openoffice-4.1.2-patch1-apply-Win_x86_de" so geöffnet sein, dass
    die Titelzeile des ersten Fensters nicht vom zweiten verdeckt wird. Wenn 
    es eine Überlappung gibt, sollte das Fenster mit der ausgepackten 
    Zip-Datei oben sein.

16. Bewegen Sie die Maus über die Datei "tl.dll.new" im Patch-Verzeichnis.
    Dann drücken und halten Sie die [Strg]-Taste, klicken die Datei an und 
    schieben sie bei gedrückter Maustaste (Drag & Drop) auf die Titelzeile 
    des "OpenOffice 4\Program"-Verzeichnisses. Lassen Sie die Maustaste und
    [Strg]-Taste los. Jetzt gibt es eine Kopie der "tl.dll.new"-Datei im 
    "OpenOffice 4\Program"-Verzeichnis.

17. Im "OpenOffice 4\Program"-Verzeichnis benennen Sie die Datei "tl.dll.new"
    nach "tl.dll" um.

18. Der Prozess ist jetzt beendet und die Fenster mit den beiden
    Verzeichnissen können geschlossen werden.

19. Der manuelle Prozess, um den Patch wieder zu entfernen besteht aus 
    folgenden kurzen Schritten:

    * Finden Sie die "tl.dll"-Datei im "OpenOffice 4\Program"-Verzeichnis, 
      die den Patch enthält, und löschen sie.

    * Benennen Sie die "tl.dll.old"-Datei wieder in "tl.dll" um.


          *** Ende von README-4.1.2-patch1-Windows_de.txt ***

-----BEGIN PGP SIGNATURE-----
Version: GnuPG v2

iQEcBAEBCAAGBQJXwcErAAoJEPluif/UVmKKZRsH/0l6wbtRG77TVtJwiMqfR7dK
UUpcovEOmvVmxiG7huR099y6c/hrriMeqf2YgJzD4C8aSZv4TM33DdP/4A47g1xZ
9kLs8FJON8JXSMy6ZpUCLhCRhfMhT+J4tw5VL4NpM0VeJN/zl/LycfnFHwXuVmPZ
OYomyga8BJPseqn0h8tb19AA3wmM+bzIaQAESLljXb38Yw53mgAtfDsiwPthmrqx
bTzVwOXZeNkVAwT8NQBHjTpZUBufubEBCxeI0nfApfp8y5fQ/WBT4uJcCrSIolyr
YlHp6rD8haV6b0bmKgi1/3zHQ6vCrtS+ITBJp3dfbf06lzhIReO6w3aiPpoUjAw=
=wxCN
-----END PGP SIGNATURE-----
