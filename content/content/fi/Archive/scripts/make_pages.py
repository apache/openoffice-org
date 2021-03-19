#!/usr/bin/python
# -*- coding: iso-8859-15 -*-

import sys,os,string,re

################################################################################
# Adds page framework to content pages in content/ directory and
# copies the pages to the main directory.
#
# 2004 Marko Grönroos
################################################################################

page_frame_filename = "scripts/page_frame.html"
content_marker      = "<!-- BODY-CONTENT -->"

################################################################################
# Reads file contents
################################################################################
def readFile (filename):
    fin = open (filename)
    if not fin:
        sys.stderr.write ("Could not open content file '%s'\n" % (filename))
        sys.exit (1)

    content = fin.read ()
    fin.close ()
    return content

################################################################################
# Extract metadata such as styles
################################################################################
def extractMetadata (content):
    metadata = None
    
    style_begin = content.find ("<style")
    style_end   = content.find ("</style>")

    if style_begin != -1 and style_end != -1:
        metadata = content[style_begin:style_end+8]
        content  = content[:style_begin] + content[style_end+8:]
    
    return (metadata, content)

################################################################################
# dirHtml
################################################################################
def dirHtml ():
    find = os.popen ("cd content; ls *.html")
    if find:
        files = find.readlines ()
        find.close ()
    else:
        sys.stderr.write ("Could not execute find.\n")
        sys.exit (1)

    files = map (lambda x: x[0:-1], files)
    return files

################################################################################
# Main prorgram
################################################################################

page_frame = readFile (page_frame_filename)

marker_pos = string.find (page_frame, content_marker)
if marker_pos == -1:
    sys.stderr.write ("Could not find marker '%s'.\n" % (content_marker))
    sys.exit (1)
    
marker_end = marker_pos + len (content_marker)
page_header = page_frame[:marker_pos]
page_footer = page_frame[marker_end:-1]

files = dirHtml ()

for file in files:
    file_header = page_header
    filecontent = readFile ("content/" + file)
    (metadata, filecontent) = extractMetadata (filecontent)
    if metadata != None:
        # Insert metadata to page header
        finntag = "<!-- End Finnish header -->"
        header_start = file_header.find (finntag) + len(finntag)
        file_header = file_header[:header_start] + "\n" + metadata + "\n" + file_header[header_start:]

    fullpage = file_header + filecontent + page_footer

    # Read old page
    oldpage = readFile (file)

    if fullpage != oldpage:
        print "Updating '%s'..." % (file)

        fout = open (file, "w")
        fout.write (fullpage)
        fout.close ()
        
