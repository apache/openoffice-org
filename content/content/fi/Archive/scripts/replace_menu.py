#!/usr/bin/python

import sys,os,string,re

################################################################################
# Definitions
################################################################################
starttag = "<!-- MENU-START -->"
endtag   = "<!-- MENU-END -->"

################################################################################
# Read replacement menu
################################################################################
fin = open ("menu.html")
if not fin:
    sys.stderr.write ("Could not open menu.html\n")
    sys.exit (1)

newmenu = fin.read ()
fin.close ()

# Safety check
if len(newmenu) < 100:
    sys.stderr.write ("menu.html does not appear healthy\n")
    sys.exit (1)

################################################################################
# List html files
################################################################################

find = os.popen ("find . -name '*.html'")
if find:
    files = find.readlines ()
    find.close ()
else:
    sys.stderr.write ("Could not execute find.\n")
    sys.exit (1)

# Remove trailing newline
files = map (lambda s: s[2:-1], files)

# Process each file
for file in files:
    sys.stdout.write ("Processing file '%s'..." % (file))

    # Open file
    fin = open (file)
    if not fin:
        sys.stderr.write ("Unable to open file '%s' for reading.\n", file)

    else:
        sys.stdout.write (" reading...")
            
        # Read file
        filecontent = fin.read ()
        fin.close ()

        # Replace
        startpos = string.find (filecontent, starttag)
        endpos = string.find (filecontent, endtag)
        if startpos != -1 and endpos != -1:
            newcontent = filecontent[0:startpos+len(starttag)+1] \
                         + newmenu \
                         + filecontent[endpos:]
        

            # Safety condition
            if newcontent != filecontent and len (newcontent) > 100:
                # Write content
                fout = open (file, "w")
                if not fout:
                    sys.stderr.write ("Unable to open file '%s' for writing.\n", file)
                else:
                    fout.write (newcontent)
                    fout.close ()
                    
                    sys.stdout.write (" Changed")
                    
            else:
                # No changes
                sys.stdout.write (" No changes")

        else:
            sys.stdout.write (" NO TAGS!")
            newcontent = None

    sys.stdout.write ("\n")
                
