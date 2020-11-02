-----BEGIN PGP SIGNED MESSAGE-----
Hash: SHA256


README-4.1.2-patch1-Windows.txt 1.0.2  UTF-8                  2016-08-27

            APPLYING THE HOTFIX FOR APACHE OPENOFFICE ON WINDOWS
            ====================================================
       
   The archive file apache-openoffice-4.1.2-patch1-Win_x86.zip 
   contains files for applying a fix to Apache OpenOffice 4.1.2
   on Microsoft Windows.  The fix eliminates a security vulnerability 
   identified as CVE-2016-1513.  The latest details about that 
   vulnerability and its mitigation can be found on the web at page
   <http://www.openoffice.org/security/cves/CVE-2016-1513.html>.
   
   If you are not comfortable with this procedure, please consult a
   knowledgeable family member or acquaintance that is able to assist
   you.  If you did not setup the Windows PC yourself, see if someone
   who is expert in maintaining PCs can be of assistance.
   
           CONTENT
              Notice
              A. Prerequisites
              B. Preliminaries
              C. Procedure
              D. Confirmation
              E. Trouble-Shooting and Removing the Patch
              Acknowledgment
              Appendix: Manual Patch Application

                              NOTICE

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


A. PREREQUISITES

  * Ability to access and navigate the file system of your computer.
    
  * Downloading apache-openoffice-4.1.2-patch1-Win_x86.zip to a
    location on your Windows PC where it can be used and its content
    extracted.
    
  * Extracting the contents of a Zip package into a folder from which
    the Zipped contents can be reviewed and used.
      
  * OPTIONAL: Confirming correctness of downloads by verifying the 
    hash-check (.md5, .sha1, and .sha256) files.
    
  * OPTIONAL: Confirming correctness and authenticity of the downloads
    by verifying the digital-signature (.asc) files using PGP software
    and the public KEYS file obtained by you from internet location
    <https://archive.apache.org/dist/openoffice/>. 

  * OPTIONAL: Disconnecting and reconnecting your computer from the
    Internet and any other network while performing the patch procedure.
    

B. PRELIMINARIES

  * Read through the entire procedure so you can anticipate what each
    step leads up to and what actions will be required.

  * Open Apache OpenOffice and confirm that you are using Apache
    OpenOffice 4.1.2.  The version is found in the Help menu "About 
    OpenOffice" dialog.
    
  * Verify that a number of Apache OpenOffice documents that are 
    Important to you open correctly without having made any changes to
    the software yet.  For any problem documents, close them without 
    saving.  Those problems exist without the patch and should be 
    reported separately to public list users@openoffice.apache.org.
    
  * When you have completed that work, verify that the Apache OpenOffice
    Quickstarter is not operating.  Click on the OpenOffice Tools menu 
    "Options ..." selection.  On the Options dialog sidebar, under 
    OpenOffice, select the Memory entry.  On that panel, remove any check
    at "Load OpenOffice during system start-up" under "OpenOffice 
    Quickstarter."  Click OK on the Options dialog.

    Note: Quickstarter is generally not needed on modern Windows PCs.
    Future maintenance of OpenOffice is easier if you no longer use
    Quickstarter.
    
  * Exit OpenOffice and restart your Windows PC.

    
C. PROCEDURE

 1. If you have not already done so, download the Zip archive
    apache-openoffice-4.1.2-patch1-Win_x86.zip from the internet at
    <https://archive.apache.org/dist/openoffice/4.1.2-patch1/binaries/Windows>
    using the web browser of your choice.  The Downloads folder of your
    user account on Windows is fine to use.  As a security precaution,
    whatever folder you download to should be empty first.  NOTE: Though
    not necessary, it is good practice to use a dedicated folder to
    avoid confusion with and possible contamination by other content.
    
    NOTE: Some Antivirus products may object to the .zip as unsafe
    either because it is unknown or because it contains executable code.
    In that case it is necessary to disable the Antivirus long enough
    to complete the download.  Alternatively, see if there is an Anti-
    virus setting that asks your permission to allow a download and
    not automatically delete/quarantine it.  
    
 2. If the download succeeds without problems, the .zip file is available
    To use.  For additional authentication, verify the digital signature
    and/or the hash checks if you have the software needed for that.

 3. As a security precaution you can now disconnect your computer
    from the Internet and any other networks.  If you do so, remember to 
    re-establish your connection when the following steps are completed
    or suspended.         
    
 4. Open the folder where you downloaded the zip archive.  
 
 5. Right click on the .zip file's file name to see the context menu for
    that file.
    
 6. Click "Extract all ..." on the context menu.
 
 7. Use the folder name that is proposed by the extraction dialog and
    complete the extraction.
         
 8. If no damage to the .zip file is reported, you will have a folder
    named apache-openoffice-4.1.2-patch1-Win_x86 in the
    same place as the downloaded .zip file.  It will have these
    contents:
    
         README-4.1.2-patch1-Windows.txt
            The version of this procedure that applies for that 
            package.
            
         LICENSE.txt
            The Apache License Version 2.0 under which the .zip and
            its content are licensed.
  
         NOTICE.txt
            A notice about the origin of the content.
            
         APPLY-4.1.2-patch1.bat
            The Windows batch-file script to run for installing
            the patch.
            
         REVERT-4.1.2-patch1.bat
            The Windows batch-file script for backing out 
            the patch if necessary.
            
         tl.dll.new
            The patched tl.dll library file to be installed in the
            Apache OpenOffice 4.1.2 software.  The properties on this
            file identify it as having 620,544 bytes and having been
            modified on Tuesday, July 5, 2016, 18:08:28.
            
         tl.dll.new.asc
            A digital signature provided by the developer of tl.dll.new
            that can be used to verify the authenticity and origin
            of tl.dll.new using suitable software for that purpose.
            The properties on this file identify it as having 819 bytes
            modified on Thursday, July 14, 2016, 13:23:58.
            
         tl.dll.old
            The original tl.dll library, without the patch, from the
            official Apache OpenOffice 4.1.2 distribution.  This file
            is included as a backup and for use, if needed, as part
            of reverting the patch.  The properties of this file
            identify it as having 620,032 bytes and having been 
            modified on Wednesday, October 21, 2015, 15:49:50.
            
         tl.dll.old.asc
            A digital signature provided by the developer who extracted
            this file from the setup files of Apache OpenOffice 4.1.2
            for Windows as affirmation of its authenticity.  The 
            properties on this file identify it as having 484 bytes
            modified on Thursday, August 11, 2016, 10:57:06

    [Note: If you have other utilities that you use for Zip and unZip of
    .zip files, the remainder of this procedure assumes you have 
    extracted the .zip content into a folder with the same name and 
    content as described above.]
    
 9. APPLYING THE PATCH AUTOMATICALLY.
    Double-click the file APPLY-4.1.2-patch1.bat.  The automated
    procedure will open a window in which progress is reported.
    
    If there is the message "Windows protected your PC" from Windows
    Smartscreen, click on the "More info" link.  On the next message,
    click "Run anyway."  If you do not trust this, do not use the script.
    
    [Note: If using the automatic procedure is ineffective for some
    reason, it is possible to accomplish the same result manually.
    See the Appendix at the end of this document.] 
    
    
10. PROVIDING ADMINISTRATIVE PERMISSIONS
    Step (9) may proceed to completion without interruption.  If not, 
    there will be an explanation for any difficulty.  If the procedure
    reports ADMINISTRATIVE PRIVILEGE REQUIRED, you will need to provide
    it.
      a. Right click on the APPLY-4.1.2-patch1-Windows.bat in the File
         Explorer.  If there is a "Run as Administrator" action in the
         context menu that appears, click that.

      b. If, instead, there is an "Open As ..." option, click that and
         choose the administrator account for which you know the 
         password.  Then provide it when prompted.

      c. On Windows XP, there are no such options by default.  The
         best solution is to perform this entire procedure within an
         administrator account.  Installation of Apache OpenOffice
         required administrative permission.  If you did not perform
         the installation, consult whoever did.
                 

D. CONFIRMATION

  On success in applying the patch, it is important to satisfy yourself
  that Apache OpenOffice is functioning properly.

  * Start Apache OpenOffice.  There should be no visible difference and
    the program should operate normally.
    
  * Verify the documents that were successfully opened in the 
    PRELIMINARIES step at the top of this procedure.  They should open
    the same as before.  There should be no discernible difference in
    operation.  
    
  * If any document that succeeded before now opens incorrectly or fails
    to open, close them without saving.  Leave them alone.  Please report
    the situation to the dev@openoffice.apache.org public mailing list
    and await further instructions.  
      
    NOTE: If you reinstall Apache OpenOffice 4.1.2, the patch will not
    be preserved and you will need to re-apply it.  If you install a
    later version of Apache OpenOffice, the patch will be unnecessary. 


E. TROUBLE-SHOOTING AND REMOVING THE PATCH

  If there are any problems with known-good documents, you can restore
  the original "tl.dll".  The patch can be removed any time that you
  are concerned that some problem is related to having installed the
  patch or to verify that the problem does not depend on the patch
  being included or not.  
    
  To remove the patch automatically, close OpenOffice and, in the folder
  where the APPLY file is found.  Double-click on the file
  REVERT-4.1.2-patch1.bat.

  The automated REVERT procedure operates much the same as the APPLY 
  procedure in steps (9-10) in section C, above.
  
  If an identified problem persists following the REVERT procedure, the 
  patch is not the source of the problem.  It is safe to APPLY the
  patch again.  The problem should be reported and discussed on the
  public users@openoffice.apache.org list.
  

ACKNOWLEDGMENT

  The development, testing, and documentation of 4.1.2-patch1 was
  accomplished with the contribution of the following individuals.

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
     
APPENDIX.  MANUAL PATCH APPLICATION

A1. ADDITIONAL PREREQUISITES

  * Confidence accessing technical features of the Windows operating 
    system and modifying software files that are part of the system.
    
  * Ability to identify files by their full names and to check sizes, 
    date stamps, and other properties.
    
  * Renaming files; copying files from one location to another in
    operating-system locations.
    
  * Understanding how to locate the computer folder where the Apache
    OpenOffice software is installed for operation.
    
  * Enabling administrative privileges for carrying out operations that
    require such permissions.
 
A2. MANUAL PROCEDURE

  This procedure can be substituted starting in place of step (9) for the 
  automated procedure.  These are equivalent steps to those accomplished
  automatically.
     
 9. IMPORTANT.  At any time in the following steps (10-17), there may be
    notification that you must be an administrator to perform an 
    action or to continue.  
     * If there is a button by which you can give administrator 
       permission, do so.
     * If you are required to provide an administrator password and
       you know it, provide it.
     * Otherwise, you may need to upgrade your user account to be
       be an administrator, returning to this step after having done
       that.  Remember to restore your user account to its previous non-
       administrator function when you complete or need to suspend
       this procedure.
     * If you are unable to accomplish this by any means, you will need
       the assistance of someone who was able to provide administrator
       rights when Apache OpenOffice was installed.

10. Find the folder on your operating-system drive where OpenOffice
    is installed, usually on the (C:) drive.  OpenOffice will be in the
    "Program Files (x86)" folder if there is one.  Open it. Otherwise, 
    OpenOffice will be in the "Program Files" folder.  Open that then.
    
11. Scroll through the folder opened in step (10) until you find the 
    folder "OpenOffice 4" there.
    
12. Within the "OpenOffice 4" folder, find and open the "program" folder.

13. In the "OpenOffice 4\program" folder, locate the file named "tl.dll".
    Right-click on the filename and select "Properties".  In the tl.dll
    Properties dialog, General panel, the size will be 620,032 bytes.
    
14. Rename the "tl.dll" file to "tl.dll.old".  You will be able to
    restore it if you choose to remove the patch later.
    
15. Now arrange to have the "OpenOffice 4" folder and the folder 
    "apache-openoffice-4.1.2-patch1-apply-Win_x86" both open, so that
    the title bar of the first is not covered by the second.  If there
    is any folder overlap, the folder the Zip was extracted into should
    be on top.
    
16. With the mouse hovering over tl.dll.new in the patch1 folder 
    and the keyboard Ctrl key held down, click and hold the mouse
    button down and drag the tll.dll.new file to the title bar
    of the "OpenOffice 4\program\" folder.  Release the mouse button
    and then the Ctrl key.  There will now be a copy of tl.dll.new
    in the "OpenOffice 4" program folder.
  
17. In the program folder, rename "tl.dll.new" to "tl.dll".

18. The procedure is completed.  You may close the programs folder and
    the patch1 folder.
    
19. Manual removal of the patch is straightforward.

    * In the OpenOffice program folder, find the tl.dll file that is 
      the 4.1.2-patch1 version and delete it.
    
    * Rename the tl.dll.old file back to tl.dll.
    
    
          *** end of README-4.1.2-patch1-Windows.txt ***
          
-----BEGIN PGP SIGNATURE-----
Version: GnuPG v2

iQEcBAEBCAAGBQJXwapVAAoJEPluif/UVmKKczIH/3SeSDdrBU/Ieftc2jjQlbEb
uEbdLX627gtMcemjpdaivlboMMALl27u6lDbvdSuahA2TcyTqyMEyJ/AMt1bLsOR
j9VJ+Hj6b4pGTsFdk/ed4OQCzQ7ZTqueP8YvUScMdAdEMrBdj5U34Z4GOW/SMtCI
WAWyfDFhmy8O+FhgpeASftkP1daHb+fU9ymvtrW0zSKybRtoYs/HoY/u8zbg2V+V
KPbWsTfcnQAnIg4nJRqATIPwUIxbZHZ/GuDuJa/smtxqlSnFkjEyUyeWzViJSR3q
DjuvOfPA64MfF/SzMdwgP3svSqEg5Q2lMlOp03lKP+I078SoYkcmLGlP0cDgnIY=
=/Yfl
-----END PGP SIGNATURE-----
