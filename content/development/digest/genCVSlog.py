import email.Parser
import time
import re
import sys
import getopt

youngest = 0
oldest = 0
merged_branches=[]
integrated_branches=[]
projects = {}
integrationMatch = re.compile ( r"200[0-9]/[0-9]+/[0-9]+ [0-9]+:[0-9]+:[0-9]+" )
version = re.compile ( r"[0-9]+\.[0-9]+[.0-9]*")
cws_branch = re.compile ( r"CWS ([a-zA-Z0-9]+)" )
cws_tag = re.compile ( r"Tag:[ ]+([_a-zA-Z0-9]+)" )
bugMatch = re.compile ( "[#]?[i]?[0-9][0-9][0-9][0-9]+[#]?" )
projectMatch = re.compile ( "http://([-a-zA-Z0-9]+)\.openoffice.org" )
#oldLineChangeMatch = re.compile ( r"^  [1-9]+\.[0-9.]+[ ]*\+([0-9]+) -([0-9]+) " )
lineChangeMatch = re.compile ( "\+([0-9]+) -([0-9]+)" )
mergedBranch = re.compile ( "CWS ([a-zA-Z0-9]+)" )
developers = []
noOfCommits = 0
moOfNewFiles = 0
noOfLinesAdded = 0
noOfLinesRemoved = 0
verbose = False
week = None
suppressFilesOn = {}
summarizeIntegration = False

names = {
	"ab":"Andreas Bregas",
	"abi":"Andreas Bille",
	"as":"Andreas Schluens",
	"af":"Andre Fischer",
	"ama":"Andreas Martens",
	"armin":"Armin Theissen",
	"aw":"Armin Weiss",
	"bc":"Behrend Cornelius",
	"bm":"Bjoern Mielke",
	"cdt":"Claus Dieter Thoele",
	"cd": "Carsten Driesner",
	"cj":"Christian Jansen",
	"cl":"Christian Lippka",
	"cn":"Christoph Neumann?",
	"cmc":"Caol&aacute;n McNamara",
	"cp":"Christof Pintaske",
	"dfoster":"Duncan Foster",
	"dbo":"Daniel Boelzle",
	"dv": "Dirk Voelzke",
	"dr":"Daniel Rentz",
	"dvo":"Daniel Vogelheim",
	"dsherwin":"Darragh Sherwin",
	"er":"Eike Rathke",
	"fa":"Dan Williams",
	"fme":"Frank Meies",
	"ft":"Falko Tesch",
	"fs":"Frank Schoenheit",
	"gh":"Gregor Hartmann",
	"gt":"Gunnar Timm?",
	"hbrinkm":"Henning Brinkmann",
	"hdu":"Herbert Duerr",
	"hjs":"Hans-Joachim Lankenau",
	"haggai":"Chris Halls",
	"hr":"Jens-Heiner Rechtien",
	"hro":"Hennes Rohling",
	"is":"Ingo Schmidt",
	"khendricks":"Kevin B. Hendricks",
	"idi":"Ivo Hinkelmann",
	"ihi":"Ivo Hinkelmann",
	"iha":"Ingrid Halama",
	"jl":"Joachim Lingner",
	"jb":"Joerg Barfurth",
	"jbu":"Joerg Budischewski",
	"jmarmion":"John Marmion",
	"jsc":"Juergen Schmidt",
	"kso":"Kai Sommerfeld",
	"ka":"Kai Ahrens",
	"khong":"Karl Hong",
	"kr":"Kay Ramme",
	"kz":"Kurt Zenker",
	"lla":"Lars Langhans",
	"lo":"Lars Oppermann",
	"louis":"Louis Suarez-Potts",
	"mav":"Mikhail Voitenko",
	"mba":"Mathias Bauer",
	"mh":"Martin Hollmichel",
	"mhu":"Matthias Huetsch",
	"mi":"Michael Hoennig",
	"mib":"Michael Brauer",
	"mindyliu":"Mindy Liu",
	"mexx":"Mustafa?",
	"mmi":"Michael Mi",
	"mt":"Malte Timmermann",
	"mmaher":"Martin Maher",
	"mmeeks":"Michael Meeks",
	"mmp":"Matthias Mueller-Prove",
	"mrauch":"Michael Rauch",
	"msc":"Marc Schwanz?",
	"nn":"Niklas Nebel",
	"npower":"Noel Power",
	"obo":"Oliver Bolte",
	"obr":"Oliver Braun",
	"od":"Oliver D&uuml;sterhoff",
	"oj":"Ocke Janssen",
	"os":"Oliver Specht",
	"pb":"Peter Burow",
	"pjanik":"Pavel Jan&iacute;k",
	"pl":"Philipp Lohmann",
	"richard":"Richard Holt",
	"rholt":"Richard Holt",
	"rpiterman":"Ron Piterman",
	"rt":"R&uuml;diger Timm",
	"sab":"Sascha Ballach",
	"sj":"Sven Jacobi",
	"svesik":"Sander Vesik",
	"st":"Stefan Taxhet",
	"sb":"Stephan Bergmann",
	"ssa":"Stephan Schaefer",
	"ssmith":"Sarah Smith",
	"stx12":"Stefan Taxhet",
	"sw":"Stephan Wunderlich",
	"tbe":"Thomas Behrens",
	"thb":"Thorsten Behrens",
	"toconnor":"Tomas O'Connor",
	"tra":"Tino Rachui",
	"tv":"Tom Verbeek",
	"tl":"Thomas Lange",
	"va":"Volker Ahrend",
	"vg":"Vladimir Glazounov",
	"vq":"Volker Quetschke",
	"waratah":"Ken Foskey",
	"yl146652":"Wind Li"
	}

projectNames = {
	"api":		"API",
	"framework":	"Application Framework",
	"tools":	"Build Tools and Environment",
	"dba":		"Database Access",
	#"documentation":"Documentation",
	"external":	"External",
	"graphics":	"Graphic Applications",
	"gsl":		"Graphic System Layer",
	"installation":	"Installation",
	"lingucomponent":"Lingucomponent",
	#"i18n":	"Internationalization",
	"l10n":		"Localization",
	#"marketing":	"Marketing",
	"porting":	"Porting",
	#"qa":		"Quality Assurance",
	"sc":		"Spreadsheet",
	"ucb":		"Universal Content Broker",
	"udk":		"UNO Development Kit / Component Technology",
	"ui":		"User Interface",
	"util":		"Utilities",
	#"website":	"Website",
	"sw":		"Word Processing",
	"xml":		"XML File Formats",
}

class CVSLog:
    def __init__( self, log ):
	self.msg = parser.parsestr ( log )
	payload = self.msg.get_payload()
	if isinstance(payload,list):
	    print >>sys.stderr, "found no payload, will try to use the log"# for:", log
	    print >>sys.stderr, payload
	    lines = log
	    for i in range(len(lines)):
	      if lines[i].startswith("  User"):
	         break
	    self.lines = lines[:i]
	    print >>sys.stderr, "lines set to",self.lines
	else:
	    self.lines = payload.split("\n")
	#print "no of lines=", len(self.lines)
	self.currLine = 0
	self.comment = ""
	self.URLs = []
	self.files =""
	self.tag = ""
	self.change = None
	self.mergedBranch = None
	self.process()
    def currentLine( self ):
	return self.lines [ self.currLine ]
    def nextLine( self ):
	line = self.lines [ self.currLine ]
	self.currLine += 1
	return line
    def finished( self ):
	#print self.currLine, len(self.lines)
	#print self.lines[self.currLine]
	if len(self.lines) == self.currLine+1 or self.lines[self.currLine].find("To unsubscribe") == 0:
		#print "finished"
		return True
	return False
    def extractAndRemoveTags(self, line):
	tag = line.find ( "Tag:" )
	if tag != -1 :
		#tag = re.sub(".*Tag:[ ]*", "", line.strip() ).split()[0]
		tagAndFile = re.sub(".*Tag:[ ]*", "", line.strip() )
		#print tagAndFile
		if tagAndFile == "":
			line = self.nextLine()
			tagAndFile = line.strip()

		tagL = tagAndFile.split()
		#print tagL
		tag = tagL[0]
		#print tag
		if self.tag and self.tag != tag:
			print >>sys.stderr, "OhOh: can there really be different tags in a checkin?"
		self.tag = tag
	return line
    def processAffectedFiles(self, line):
	pass
    def processAffectedTagsAndFiles(self, line):
	lines = []
	while not self.finished():
#		line = self.extractAndRemoveTags( line )
		lines.append ( line .strip() + " " )
		line = self.nextLine()
		if line.find ( "Log:" ) != -1 :
			break
	tagsAndFiles = "".join(lines)
	match = cws_tag.search ( tagsAndFiles )
	if match :
	    while match:
		self.tag = match.group(1)
		#print >>sys.stderr, "tag:", self.tag, "\nlines:", tagsAndFiles
		tagsAndFiles = tagsAndFiles.replace ( "Tag: " +self.tag, "")
		#print >>sys.stderr, "after:", tagsAndFiles
		match = cws_tag.search ( tagsAndFiles )
#	else:
#		#print >>sys.stderr, "no tag:", tagsAndFiles
#		pass
	if tagsAndFiles.find("Added:")  != -1 :
		self.change = "added"
		tagsAndFiles = re.sub ("Added:","", tagsAndFiles)
	if tagsAndFiles.find("Removed:") != -1  :
		self.change = "removed"
		self.files = re.sub ("Removed:","", tagsAndFiles).strip()
		self.comment = tagsAndFiles
	if tagsAndFiles.find("Modified:") != -1 :
		self.change = "modified"
		tagsAndFiles = re.sub ("Modified:","", tagsAndFiles)
	if tagsAndFiles.find("New directory") != -1 :
		self.change = "added"
		tagsAndFiles = re.sub ("- New directory","", tagsAndFiles)
#		self.file = line.split(" - New")[0].strip()
		self.files = tagsAndFiles.strip()
		#print >>sys.stderr, "new directory added:", self.files,"\n", tagsAndFiles

	if tagsAndFiles.find("New") != -1 :
		self.change = "added"

	#tagsAndFiles = re.sub ( " Tag:[ ]+[a-zA-Z0-9_]+","/", tagsAndFiles).strip()
	#self.files = tagsAndFiles
	#print >>sys.stderr, "tags and files:", tagsAndFiles
#	while not self.finished():
#		line = self.extractAndRemoveTags( line )
#		self.processAffectedFiles ( line )
#		line = self.nextLine()
#		if line.find ( "Log:" ) != -1 :
#			return line
	return line
    def processUser(self, line):
	self.user = line.split ( "User: " )[1].strip()
    def processLogMessage(self, line):
	integration = False
	comments = []
	comments.append ( "<span class='comment'>" )
	while not self.finished():
		#remove version nos as in  RESYNC: (1.7-1.8); FILE MERGED
		if integration or line.find ( "INTEGRATION" ) != -1 :
			match = cws_branch.search ( line )
			shorttag = ""
			if match :
			    if not ( match.group(1) in merged_branches):
				merged_branches .append ( match.group(1) )
			    shorttag = match.group(1)
			if self.change == "removed":
				comments.append ( "removed " + self.comment )
			self.change = 'integrated'
			comments.append ( "<a name='merged_%s'></a>" % ( shorttag, ) )
			if not shorttag in integrated_branches:
			    integrated_branches.append ( shorttag )
			integration = True
			#print "before regex", line
			line = line.replace( "INTEGRATION:", " ")
			line = integrationMatch.sub("",line)
			line = version.sub ( "", line )
			line = line.replace ( "();", "" )
			line = line.replace ( "(); FILE MERGED", " by " )
			line = line.replace ( "FILE MERGED", "" )
			line = line.replace ( "FILE ADDED", "" )
			line = line.replace ( "RESYNC:;", "" )
			if summarizeIntegration :
			  match = mergedBranch.match ( line )
			  if match:
			    self.mergedBranch = match.group(1)
			line = line.replace ( "CWS", "" )
			#print "integration file changes:", line
		line = re.sub("RESYNC: (.*);","RESYNC:;", line )
		line = re.sub("<","&lt;", line )
		line = re.sub(">","&gt;", line )
		comments.append ( line.replace("Log:", "" ) + " " )
		line = self.nextLine()
		if line.find ( "Revision  Changes    Path" ) != -1 :
			#print >>sys.stderr, "FILE? ", line
			break
		if line.find ( "File " ) != -1 :
			#print >>sys.stderr, "FILE? ", line
			break
	if integration  and not self.mergedBranch:
	    print >> sys.stderr, "Some problem with getting the CWS tag"
	    self.printLog()
	    sys.exit ( -1 )
	comments.append ( "</span>" )
	self.comment = "".join ( comments )
	#print >> sys.stderr, "comments are", self.comments
	#print >> sys.stderr, "comments came from", comments
	return line
    def addChangeURLs(self, line):
	while not self.finished():
		if line.find( "http://") != -1 and line.find( "?") != -1:
			self.URLs .append ( line.strip() )
		line = self.nextLine()
		if line.find ( "Index:" ) != -1 \
		   or line.find ( "To unsubscribe" ) != -1:
			return line
    def process ( self ):
	while not self.finished():
	    line = self.nextLine()
	    #line = re.sub("&","&amp;", line )
	    #print line
	    if line.find ( "User:") != -1 :
		    self.processUser ( line )
	    elif line.find("Added:") != -1 or line.find("Removed:") != -1 or \
		   line.find("Modified:") != -1 or line.find("New directory") != -1:
		line = self.processAffectedTagsAndFiles(line)
	    if not self.finished() and line.find ( "Log:" ) != -1 :
		line = self.processLogMessage ( line )
	    match = lineChangeMatch.match ( line )
	    if match:
	        global noOfCommits
		global noOfLinesAdded
		global noOfLinesRemoved
		noOfCommits += 1
		noOfLinesAdded += int ( match.group(1) )
		noOfLinesRemoved += int ( match.group(2) )

	    if not self.finished() and ( line.find ( "diff?r1" ) != -1 or \
	    		 line.find("?rev=") != -1 ):
		line = self.addChangeURLs ( line )
		break
    def printLog(self):
	print >>sys.stderr, "changed by :[", self.user, "]"
	print >>sys.stderr, "changed tag:", self.tag
	if self.change == None:
		print >>sys.stderr, "probelm with this payload       :", self.lines
	else:
		print >>sys.stderr, "type       :[", self.change, "]"
	print >>sys.stderr, "comment    :", self.comment
	print >>sys.stderr, "URLs       :", self.URLs
	print >>sys.stderr, "file       :", self.files
	print >>sys.stderr, ""

class CVSLog2:
    def __init__( self, log ):
	self.msg = parser.parsestr ( log )
	payload = self.msg.get_payload()
	if isinstance(payload,list):
	    print >>sys.stderr, "found no payload, will try to use the log"# for:", log
	    print >>sys.stderr, payload
	    lines = log
	    for i in range(len(lines)):
	      if lines[i].startswith("  User"):
	         break
	    self.lines = lines[:i]
	    print >>sys.stderr, "lines set to",self.lines
	else:
	    self.lines = payload.split("\n")
	if verbose:
		print >>sys.stderr, self.lines
	#print "no of lines=", len(self.lines)
	self.currLine = 0
	self.comment = ""
	self.URLs = []
	self.files =""
	self.tag = ""
	self.change = None
	self.mergedBranch = None
	self.process()
    def currentLine( self ):
	return self.lines [ self.currLine ]
    def nextLine( self ):
	line = self.lines [ self.currLine ]
	self.currLine += 1
	return line
    def finished( self ):
	if len(self.lines) == self.currLine+1 or self.lines[self.currLine].find("To unsubscribe") == 0:
		if verbose: print >>sys.stderr, "finished"
		return True
	return False
    def processTag(self, line):
	self.tag = re.sub(".*Tag:[ ]*", "", line.strip() )
    def processTypeOfChange ( self, line ):
	if line.startswith ( "Modified" ):
		self.change = "modified"
	elif line.startswith ( "Removed" ):
		self.change = "removed"
	elif line.startswith ( "Added" ):
		self.change = "added"
    def processUser(self, line):
	self.user = line.split ( "User: " )[1].strip()
    def processLogMessage(self, line):
	integration = False
	line = self.nextLine()
	comments = []
	comments.append ( "<span class='comment'>" )
	while not self.finished():
		#remove version nos as in  RESYNC: (1.7-1.8); FILE MERGED
		if integration or line.find ( "INTEGRATION" ) != -1 :
			match = cws_branch.search ( line )
			shorttag = ""
			if match :
			    if not ( match.group(1) in merged_branches):
				merged_branches .append ( match.group(1) )
			    shorttag = match.group(1)
			if self.change == "removed":
				comments.append ( "removed " + self.comment )
			self.change = 'integrated'
			comments.append ( "<a name='merged_%s'></a>" % ( shorttag, ) )
			if not shorttag in integrated_branches:
			    integrated_branches.append ( shorttag )
			integration = True
			#print "before regex", line
			line = line.replace( "INTEGRATION:", " ")
			line = integrationMatch.sub("",line)
			line = version.sub ( "", line )
			line = line.replace ( "();", "" )
			line = line.replace ( "(); FILE MERGED", " by " )
			line = line.replace ( "FILE MERGED", "" )
			line = line.replace ( "FILE ADDED", "" )
			line = line.replace ( "RESYNC:;", "" )
			if summarizeIntegration :
			  #print >>sys.stderr, "summarizing: [%s]" % ( line, )
			  match = mergedBranch.search ( line )
			  if match:
			    self.mergedBranch = match.group(1)
			  #else:
			    #print >>sys.stderr, "no match", line
			line = line.replace ( "CWS", "" )
			#print "integration file changes:", line
		if self.change == "added" and line.startswith( " Directory" ):
		    line = re.sub ( "added to the repository", "", line )
		    line = re.sub ( "/cvs/", "", line )
		elif self.change == "added" and line.startswith( " --> Using" ):
		    line = re.sub ( "--> Using per-directory sticky", " using ", line )
		line = re.sub("RESYNC: (.*);","RESYNC:;", line )
		line = re.sub("<","&lt;", line )
		line = re.sub(">","&gt;", line )
		comments.append ( line )
		line = self.nextLine()
		if line.startswith ( "File Changes:" ) :
			#print >>sys.stderr, "FILE? ", line
			break
	comments.append ( "</span>" )
	self.comment = "".join ( comments )
	if integration and summarizeIntegration and not self.mergedBranch:
	    print >> sys.stderr, "Some problem with getting the CWS tag:", comments
	    self.printLog()
	    #sys.exit ( -1 )
	#print >> sys.stderr, "comments are", self.comments
	#print >> sys.stderr, "comments came from", comments
	return line
    def processChangedFiles(self, line):
        addDir = None
	while not self.finished():
		if line.startswith ( "Url: "):
		    url = line.replace( "Url: ", "" )
		    self.URLs.append ( url )
		#print >> sys.stderr, "DELTA? ", line
		if line.startswith ( "Delta lines:"):
		    #print >> sys.stderr, "DELTA:", line
		    match = lineChangeMatch.search ( line )
		    if match:
			#print >> sys.stderr, "---DELTA!", line
		        global noOfCommits
			global noOfLinesAdded
			global noOfLinesRemoved
			noOfCommits += 1
			noOfLinesAdded += int ( match.group(1) )
			noOfLinesRemoved += int ( match.group(2) )
			#print >> sys.stderr, "noOfCommits = ", noOfCommits
			#print >> sys.stderr, "noOfLinesAdded = ", noOfLinesAdded
		if line.startswith ( "Directory:" ):
			addDir = line.replace ( "Directory: ", "" )
		if line.startswith ( "File [removed]" ):
			self.files += line.replace ( "File [removed]:", "" )
		if self.change == "added" and line.startswith ( "Directory [added]:" ):
			self.files = addDir
		if self.change == "removed" and line.startswith ( "Directory [removed]:" ):
			self.files = addDir
		line = self.nextLine()

    def process ( self ):
	while not self.finished():
	    line = self.nextLine()
	    #line = re.sub("&","&amp;", line )
	    #print line
	    if line.find ( "Tag:") != -1 :
		    self.processTag ( line )
	    elif line.find ( "User:") != -1 :
		    self.processUser ( line )
	    elif line.find("Added:") != -1 or line.find("Removed:") != -1 or \
		   line.find("Modified:") != -1 or line.find("New directory") != -1:
		self.processTypeOfChange(line)
	    elif line.find ( "Log:" ) != -1:
	    	line = self.processLogMessage ( line )

	    if not self.finished() and line.find ( "File Changes:" ) != -1 :
		line = self.processChangedFiles ( line )

    def printLog(self):
	print >>sys.stderr, "changed by :[", self.user, "]"
	print >>sys.stderr, "changed tag:", self.tag
	if self.change == None:
		print >>sys.stderr, "probelm with this payload       :", self.lines
	else:
		print >>sys.stderr, "type       :[", self.change, "]"
	print >>sys.stderr, "comment    :", self.comment
	print >>sys.stderr, "URLs       :", self.URLs
	print >>sys.stderr, "file       :", self.files
	print >>sys.stderr, ""

def processMessage ( message ):
	headers = parser.parsestr ( message, True )
	if verbose: print >>sys.stderr, "************\nsubject =", headers[ "Subject" ]

	#### if headers["Subject"] and headers[ "Subject" ].find ( "CVS update" ) != -1 :
	#if ( message.find ( "Subject: CVS update" ) != -1 ) or \
	if   headers["Subject"] and headers[ "Subject" ].find ( "CVS update" ) != -1:
		#convert from format : 21 Oct 2003 08:24:30 -0000
		#to the tuple : (2003, 10, 21, 8, 53, 54, 1, 294, 0)
		msgTime = time.strptime ( headers[ "Date" ], "%d %b %Y %H:%M:%S -0000" )
		global oldest
		global youngest

		realMsgTime = time.mktime(msgTime)
		if realMsgTime < oldest or oldest == 0:
			oldest = realMsgTime
		if realMsgTime > youngest or youngest == 0:
			youngest = realMsgTime
		dayOfYear = 300 ### time.strftime ( "%j", msgTime )
		#print "checking this date", msgTime, ": ", sinceDay, "=? ", int(dayOfYear)
		if 1: #int(dayOfYear) >= sinceDay:
		    #print "process this \n", message
		    log = CVSLog2 ( message )
		    if verbose:
		        log.printLog()
		    createAll = False
		    if not logs .has_key ( log.tag ):
		    	logs [ log.tag ] = {}
			createAll = True

		    if summarizeIntegration and log.change=="integrated":
		       log.comment = "<a name='merged_%s'></a><span class='comment'>%s</span>" % \
				( log.mergedBranch, log.mergedBranch )
		       log.comment +=  "[ <a href='%s#%s'>description</a>]" % (
				"http://development.openoffice.org/releases/OOo_2_0_timetable.html", \
				log.mergedBranch, )

		    if not log.user in developers:
		       developers.append ( log.user )

		    if createAll or not logs [ log.tag ].has_key( log.user ):
			logs [ log.tag ][log.user] = {}
			createAll = True
		    if createAll or not logs [ log.tag ][log.user].has_key( log.change ):
			logs [ log.tag ][log.user][log.change] = {}
			createAll = True
		    if createAll or not logs [ log.tag ][log.user][log.change].has_key( log.comment ):
			logs [ log.tag ][log.user][log.change][log.comment] = []
		    if len(log.URLs) :
			#print >>sys.stderr, "files:", log.URLs
			logs [ log.tag ] [ log.user ] [ log.change ] [ log.comment ] += log.URLs
			if log.change=="integrated" or  ( log.change=="modified" and \
		    		( log.comment.find(u"RESYNC:; FILE MERGED") != -1 ) ):
			  pass
			else:
			  for url in log.URLs:
			   match = projectMatch.search ( url )
			   if not projects.has_key ( match.group(1) ):
			     projects[match.group(1)] = []
			   if log.tag in projects[match.group(1)] : pass
			   else:
			    projects[match.group(1)].append ( log.tag )
		    else:
		        if log.change != "removed" and len(log.files) == 0:
			   print >>sys.stderr, "no files and no URLs!!"
			   print >>sys.stderr, "message=", message
			   log.printLog()
			logs [ log.tag ] [ log.user ] [ log.change ] [ log.comment ].append( log.files )

def replaceWithIZLink( match):
	iz = match.group() #match.string [ match.start():match.end()]
	shortIz = iz
	shortIz = shortIz.replace( "i", "")
	shortIz = shortIz.replace( "#", "")
	shortIz = shortIz.replace( "#", "")
	sIz = int(shortIz)
	if sIz == 2000 or sIz == 2002 or sIz == 2003 or sIz == 2004 or sIz >= 100000:
		return iz
	#return "<a href='http://www.openoffice.org/issues/show_bug.cgi?id=" + \
	#	shortIz + "'> " + iz + "</a>"
	return "<a href='http://www.openoffice.org/issues/show_bug.cgi?id=%s'> %s</a>" \
		% ( shortIz, iz )

def getFullName ( abbrev ):
    name = abbrev.upper() + "?"
    try:
	if not ( abbrev in names ) :
		print >> sys.stderr, "Could not find full name for", abbrev
	else:
		name = names [ abbrev ].encode("latin-1")
    except:
        print >>sys.stderr, "did you forget to put a \"u\" infront of the full name for :",abbrev,"?"
    return name

def getProjectName ( proj ):
	name = proj
	if not ( proj in projectNames ) :
		print >> sys.stderr, "Could not find project name for", proj
	else:
		name = projectNames [ proj ]
		projectNames [ proj ] = None
	return name

def processBranchChanges( grouping, tag, branchChanges ):
    for user, changes2 in branchChanges.items():
	if tag == "": tag = "HEAD"
	merged = ""
	css_tag = "branch"
	if grouping:
	    for mbranch in merged_branches:
	        if len(tag) and tag.find ( mbranch ) != -1:
		    merged = " [ <a href='#merged_%s'>and it was merged</a> ]" \
		    		% (  mbranch, )
		    css_tag = "mergedbranch"

	print "\n<a name='%s'></a><a name='%s_%s'></a><div class=\"%s\">%s was changed by %s(%s)%s</div>" % \
			( tag, tag, user, css_tag, tag, getFullName(user), user, merged )
	mergedBranches = {} # "merged_branch": ( file1, file2 , etc )
	for change, changes3 in changes2.items():
#          if change == "integrated" and summarizeIntegration :
#            # build summary of files on branches here
#	    for comment, elements in changes3.items():
#	       pass
#
#          else:
	    for comment, elements in changes3.items():
		comment = bugMatch.sub( replaceWithIZLink, comment )
#		print >>sys.stderr, "comment is ", comment
		print "<div class='%s'>%s : %s" % ( change, change, comment )
		print "<div class=\"file-list\">"
		if len (elements) :
		    files={}
		    fileNo = 0
		    for i in elements:
			fileNo += 1
			if i.find ( "http:" ) == -1:
			    cleanest = i.strip().replace ( "  ", "/" )
			else:
			    clean = re.sub("http://.*/browse/","", i )
			    cleaner = re.sub("\.diff\?.*","", clean )
			    cleanest = re.sub("\?.*","", cleaner )
			if verbose:
				print >>sys.stderr, "stripped:", cleanest
			#dirE = re.sub("/[a-zA-Z0-9_.]*","",cleanest)
			file =  re.sub(".*/","",cleanest)
			dirE = cleanest [ :-len(file)]
			if verbose:
				print >>sys.stderr, "branch=",tag, "dir=", dirE, " and file=", file
			if not files.has_key( dirE ): files [ dirE ] = []
			if i.find ( "http:" ) == -1:
			    files [ dirE ].append ( file )
			else:
			    if suppressFilesOn .has_key( tag ) and suppressFilesOn [ tag ].has_key(user) \
				and file.find ( suppressFilesOn [ tag ][user] ) != -1 :

			      files [ dirE ].append ( "<a href='%s'>%s</a>" % ( i, fileNo ))
			    else:
			      files [ dirE ].append ( "<a href='%s'>%s</a>" % ( i, file ))

		    if change=="removed" or  ( change=="modified" and \
		    		( comment.find(u"RESYNC:; FILE MERGED") != -1 ) ):
		      #print >>sys.stderr, change, files
			print " files from:"
			for d,fs in files.items():
		           if len(fs) == 1:
			      print "%s%s" % ( d, fs[0] )
			   else:
			    print "%s:" %( d, )
			    for f in fs:
			      print "%s," %( f, )
		    else:
		      for d,fs in files.items():
		        if len(fs) == 1:
			    print "\t\t%s%s" % ( d, fs[0] )
			else:
			    print "\t\t", d, " : ",
			    for i in range(len(fs)-1):
				print  "%s," % ( fs[i],),
			    print  "%s ;" % ( fs[len(fs) -1],)

			#print "<br>"
		else:
		    print "\t\t",
		    for i in elements:
			clean = re.sub("http://.*/browse/","", i )
			cleaner = re.sub("\.diff\?.*","", clean )
			cleanest = re.sub("\?.*","", cleaner )
			#dirE = re.sub("/[a-zA-Z0-9_.]*","",cleanest)
			#file =  re.sub(".*/","",cleanest)
			if len ( cleaner ) == 0:
				cleanest = re.sub("\?rev=.*","", clean )
			print "<a href='%s'> %s</a>" % (i, cleanest)
			if len(elements) > 1: ", ",
			#print "<br>"
		print "</div>"
		print "</div>"
	print "<p>"

def printIndexOfBranches ( startsWith ):
	cws = []
	for tag, changes in logs.items() :
	    if tag.startswith ( startsWith ):
		cws.append ( tag )
	cws.sort()
	grouping = "x"
	for tag in cws:
	    if not tag.startswith ( grouping ):
		grouping = tag [ :tag.rfind("_") ]
		print "</td></tr><tr><td class='group'>",grouping, "</td><td>"
	    shorttag = tag.replace ( grouping, "" )[1:]
	    if shorttag in merged_branches:
		css_tag = "mergedbranch"
	    else:
		css_tag = "branch"
	    print "<a class='index_%s' href='#%s'>%s</a> " % ( css_tag, tag, shorttag )
	return cws

def printIndexOfIntegratedBranches ():
	if len(integrated_branches):
	    integrated_branches.sort()
	    for tag in integrated_branches:
		print "<a class='index_mergedbranch' href='#merged_%s'>%s</a> " % ( tag, tag )
	else:
		print "&nbsp;none "

def printBranchList():
	print "<a name='branch_index'></a><H2>Branches with changes this week</H2>"
	print "<small><center>( from ", oldestMsg, "<br>to", youngestMsg, ")</center></small><br>"

	print "<table class='branch_index' cellspacing='0'>"
	print "<colgroup><col class='branch_group'/><col class='branch_names'/></colgroup><tr>"
	print "<th>Group</th><th>Branch"

	ws = printIndexOfBranches ( "cws_" )
	mws = printIndexOfBranches ( "mws_" )
	ws.extend ( mws )

	print "</td></tr><tr><td class='group'> merged branches </td><td>"
	printIndexOfIntegratedBranches ()
	print "</td></tr><tr><td class='group'> misc </td><td>"

	for tag, changes in logs.items() :
	    if not tag in ws:
		print "<a href='#%s'>%s</a> " % ( tag, tag )

#	print "<a href='#HEAD' style='word-spacing: 1em;'>HEAD and other branches</a> "
	print "&nbsp;<a href='#HEAD'>HEAD and other branches</a> "
	print "</td></tr></table>"

def printProjectBranch( tag, shorttag ):
	if shorttag in merged_branches:
		css_tag = "mergedbranch"
	else:
		css_tag = "branch"
	print "<a class='index_%s' href='#%s'>%s</a> " % ( css_tag, tag, shorttag )

def printProjectList():
    print "<a name='project_index'></a><H2>Projects which were changed</H2>"
    print "<small>(excluding integration and resyncing)</small><br>"
    print "<table class='project_index' cellspacing='0'>"
    print "<colgroup><col class='project'/><col class='branch_group'/><col class='branch_names'/></colgroup>"
    print "<tr><th class='project_col'>Project<br>(linked to the project page)</th>"
    print "<th>Branch Group</th><th class='branch_col'>Branch<br>"
    print "(linked to the branch changes below)</th></tr>"

    childWS = re.compile ( r"cws_([a-zA-Z0-9]+)_([a-zA-Z0-9]+)" )
    masterWS = re.compile ( r"mws_([a-zA-Z0-9]+)" )
    projkeys = projects.keys()
    projkeys.sort()
    for proj in projkeys:
	miscTags = []
	mwsTags = []
	cwsTags = {}
	for tag in projects[ proj ]:
	  if len(tag) == 0: tag = "HEAD"
	  match = childWS.search ( tag )
	  if match :
	      if not cwsTags . has_key ( match.group(1) ) :
		cwsTags [ match.group(1) ] = []
	      cwsTags [ match.group(1) ].append ( ( match.group(2), tag ) )
	  else:
		match = masterWS.search ( tag )
		if match :
		  mwsTags.append( ( match.group(1), tag ) )
		else:
		  miscTags.append ( tag )
	#cwsTags.sort()
	branch_groups =  (len ( mwsTags ) != 0 ) + len ( cwsTags ) + ( len( miscTags )!=0 )
	print "<tr><td rowspan='%i'><a class='project' href='http://%s.openoffice.org'>%s (aka %s)</a></td>" \
			% ( branch_groups, proj, getProjectName(proj), proj )
	firstbranchOfProject = True
	if len(cwsTags) > 0:
	  for group in cwsTags.keys():
	    if not firstbranchOfProject :
		print "<tr>"
	    firstbranchOfProject = False
	    print "<td>",group,"</td>"
	    tags = cwsTags [ group ]
	    tags.sort()
	    print "<td>"
	    for tag in tags:
		printProjectBranch ( tag[1], tag[0] )
	    print "</td></tr>"

	if len(mwsTags) > 0:
	  if not firstbranchOfProject :
		print "<tr>"
	  firstbranchOfProject = False
	  print "<td>master</td><td>"
	  for shortTag,tag in mwsTags:
		printProjectBranch ( tag, shortTag )
	  print "</td></tr>"

	if len(miscTags) > 0:
	  if not firstbranchOfProject :
		print "<tr>"
	  firstbranchOfProject = False
	  miscTags.sort()
	  print "<td>misc<td>"
	  for tag in miscTags:
		printProjectBranch ( tag, tag )
	  print "</td></tr>"

    print "</table>"

def usage():
    print >>sys.stderr, sys.argv[0], " usage:"
    print >>sys.stderr, sys.argv[0], "[-h] [-v] [-z] [-s suppress-condition>] -c <CVS log file> -w weekNo -i intro "
    print >>sys.stderr, "where :"
    print >>sys.stderr, "\t -h or --help : prints this message"
    print >>sys.stderr, "\t -v or --verbose : prints more verbose messages"
    print >>sys.stderr, "\t -z or --summarizeintegration : summarizes the integration messages"
    print >>sys.stderr, "\t -c or --cvslog= : takes an argument which contains the cvs log to digest"
    print >>sys.stderr, "\t -w or --week= : takes an argument which is the week number in question (1-53) "
    print >>sys.stderr, "\t -o or --output= : output file name"
    print >>sys.stderr, "\t -i or --intro= : takes an argument which contains the hand written introduction " + \
				"to the digest e.g. the Issuezilla statistics"
    print >>sys.stderr, "\t -s or --suppressFilesOn= : takes an argument which lists what files to suppress"
    print >>sys.stderr, "\t\t\t e.g. -s \"{'cws_srx645_alphaart':{'mmeeks':'.bmp'},}\" causes the files" + \
		"on the branch cws_srx645_alphaart modified by mmeeks which contain the string .bmp to be numbered only"

try:
   opts,args = getopt.getopt(sys.argv[1:],"hvzw:i:c:s:o:",
		["help","verbose","summarizeintegration","output=","week=","intro=","cvslog=","suppressFilesOn="])
except:
   usage()
   sys.exit(-1)

intro = None
cvslogName = None
outputFilename = None

now = time.time()
nowTime = time.gmtime(now)
since = time.strftime ( "%j", nowTime )
sinceDay = int(since) - 300

cvsYear = time.strftime( "cvs%Y_", time.gmtime(now) )

for o,a in opts:
   if verbose:
      print >>sys.stderr, o, "=", a
   if o in ( "-v", "--verbose" ):
      print >>sys.stderr, "turning on verbose"
      verbose = True
   if o in ( "-h", "--help" ):
      usage()
      sys.exit ( 0 )
   if o in ( "-w", "--week" ):
      week = a
      if not cvslogName : cvslogName = "cvs" + a + ".log"
      if not intro: intro = "intro" + a + ".html"
      if not outputFilename: outputFilename = cvsYear + a + ".html"
   if o in ( "-i", "--intro" ):
      intro = a
   if o in ( "-o", "--output" ):
      outputFilename= a
   if o in ( "-c", "--cvslog" ):
      cvslogName = a
   if o in ( "-z", "--summarizeintegration" ):
      summarizeIntegration = True
   if o in ( "-s", "--suppress" ):
      suppressFilesOn = eval ( a )

      sys.stdout = open("out.txt", "w")

if not cvslogName or not week or not intro :
   missing = "unknown"
   if not cvslogName :
     missing = "cvslog"
   if not week :
     missing = "week"
   if not intro :
     missing = "intro"
   print >>sys.stderr, "ERROR:missing input parameter", missing, "!"
   usage()
   sys.exit(-1)

if outputFilename:
   sys.stdout = open( outputFilename, "w")

cvslog=open(cvslogName)
parser = email.Parser.Parser()

maybeNewMessageNext = False
message = ""


logs={}
#print "processing", sys.argv[1]
i = 0
message = []
while 1:
	line= cvslog.readline()
	if i > 1000 and not verbose:
		i = 0
		sys.stderr.write( "." )
	if verbose ==2 :
	    print line,
	if not line:
		break
	if maybeNewMessageNext and ( line.startswith("From" ) or line.startswith("Path:" ) ):
	    if verbose:
               print "process this message"
	    processMessage ( "".join ( message ) )
	    message = []
	if line == "\n":
		maybeNewMessageNext = True
	else:
		maybeNewMessageNext = False
	message.append ( line )
	i += 1
sys.stderr.write( "\n" )

if len(message):
	processMessage ( "".join ( message ) )


#print "printing formatted log"
print '<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">'
print '<html><head>'
print ' <meta HTTP-EQUIV="content-type" CONTENT="text/html; charset=UTF-8">'
#print ' <META name="generator" content="HTML Tidy for Linux/x86 (vers 1st November 2003), see www.w3.org">'
print ' <style type="text/css">@import url("cvs.css"); </style>'
print '  <TITLE>Development digest : Week', week, '</TITLE>'
print '</head>'
print '<body><div class="digest"><div class="leadin">'

if len(sys.argv) >2 and sys.argv[2]:
  print open ( intro ).read()

print "<p><a name='cvs_stats'></a><H2>CVS statistics</h2>"
print noOfCommits, "commits by", len(developers), "developers resulted in"
print noOfLinesAdded, "lines added, and", noOfLinesRemoved, "lines removed.<p>"

oldestMsg = time.strftime( "%H:%M %A %B %d %Y UTC (week %W)", time.gmtime(oldest) )
forWeek = time.strftime( "%W", time.gmtime(oldest) )
youngestMsg = time.strftime( "%H:%M %A %B %d %Y UTC (week %W)", time.gmtime(youngest) )

printBranchList()
print "</div><p>"
printProjectList()


print "<a name='details'></a><H2>Detailed changes on each branch</H2>"

for tag, changes in logs.items() :
    if tag.startswith ( "cws_" ):
	processBranchChanges( "cws_", tag, changes )
	logs[tag]=None

for tag, changes in logs.items() :
    if tag.startswith ( "mws_" ):
	processBranchChanges( "mws_", tag, changes )
	logs[tag]=None

print "<a name='HEAD'></a>"
for tag, changes in logs.items() :
    if changes:
	processBranchChanges( None, tag, changes )

print "</div></div></body></html>"

for proj,fullName in projectNames.items():
   if fullName:
      print >>sys.stderr, "Warning: suspiciously no updates for project %s (aka %s)" % ( fullName, proj )
