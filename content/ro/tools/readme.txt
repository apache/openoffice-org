Readme.txt

These files may be helpful in setting up new lang project web pages. 
They are a rough translation of the lang/NL pages into English, which
is probably the easiest to translate into your own language. 

Wherever {} are used, they are comments (not to be translated). 
For example, {xx} is used for the two-letter lang project code.

If you place all these files in a directory on a Windows machine, 
and double click on make.bat, then in the subdirectory HTML all the 
HTML pages will be assembled. You can then view the whole set of
pages with e.g. Internet explorer. 

Edit the .txt files with a simple text editor such as notepad.exe, 
to translate them or make any changes you want. 
Then, run make.bat again to see how it looks in HTML. 

You will only need a basic knowledge of HTML which can be found in 
many pages on the internet. 

If you want to do this under UNIX/Linux then you will have to edit 
make.bat and make it executable. The lines have then to read something like: 

	cat pre.txt somefile.txt post.txt >./HTML/somefile.html

The files in the HTML subdirectory is what you will submit into the OpenOffice.org
CVS system. The "branding" parts (the sections on the top, the bottom, and the left
of the page that contain all the English text and links), and the formatting 
of headers, fonts, etc, is automatically added. 

Best regards, 
Simon Brouwer
(Project lead lang/NL)

