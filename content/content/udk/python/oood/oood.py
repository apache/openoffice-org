#*************************************************************************
#
#   $RCSfile: oood.py,v $
#
#   $Revision: 1.1 $
#
#   last change: $Author: jbu $ $Date: 2004/10/03 17:41:40 $
#
#   The Contents of this file are made available subject to the terms of
#   either of the following licenses
#
#          - GNU Lesser General Public License Version 2.1
#          - Sun Industry Standards Source License Version 1.1
#
#   Sun Microsystems Inc., October, 2000
#
#   GNU Lesser General Public License Version 2.1
#   =============================================
#   Copyright 2000 by Sun Microsystems, Inc.
#   901 San Antonio Road, Palo Alto, CA 94303, USA
#
#   This library is free software; you can redistribute it and/or
#   modify it under the terms of the GNU Lesser General Public
#   License version 2.1, as published by the Free Software Foundation.
#
#   This library is distributed in the hope that it will be useful,
#   but WITHOUT ANY WARRANTY; without even the implied warranty of
#   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
#   Lesser General Public License for more details.
#
#   You should have received a copy of the GNU Lesser General Public
#   License along with this library; if not, write to the Free Software
#   Foundation, Inc., 59 Temple Place, Suite 330, Boston,
#   MA  02111-1307  USA
#
#
#   Sun Industry Standards Source License Version 1.1
#   =================================================
#   The contents of this file are subject to the Sun Industry Standards
#   Source License Version 1.1 (the "License"); You may not use this file
#   except in compliance with the License. You may obtain a copy of the
#   License at http://www.openoffice.org/license.html.
#
#   Software provided under this License is provided on an "AS IS" basis,
#   WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING,
#   WITHOUT LIMITATION, WARRANTIES THAT THE SOFTWARE IS FREE OF DEFECTS,
#   MERCHANTABLE, FIT FOR A PARTICULAR PURPOSE, OR NON-INFRINGING.
#   See the License for the specific provisions governing your rights and
#   obligations concerning the Software.
#
#   The Initial Developer of the Original Code is: Joerg Budischewski
#
#   Copyright: 2000 by Sun Microsystems, Inc.
#
#   All Rights Reserved.
#
#   Contributor(s): Joerg Budischewski
#
#*************************************************************************
import uno
import unohelper
import os
import time
import sys
import signal
import threading
import random

from com.sun.star.bridge import XInstanceProvider
from com.sun.star.connection import NoConnectException, ConnectionSetupException
from com.sun.star.io import XStreamListener
from com.sun.star.lang import IllegalArgumentException
from com.sun.star.uno import RuntimeException
from com.sun.star.xml.sax import XDocumentHandler, InputSource
from com.sun.star.io import XInputStream
from com.sun.star.container import XNameAccess
from com.sun.star.beans import NamedValue

SERIOUS = 0
INFO = 1
DETAIL = 2
LEVEL2STRING = { SERIOUS : "SERIOUS", INFO : "INFO   " , DETAIL : "DETAIL " }
COMMANDS = ( "run", "stop" , "status" )
cmd = None
configfile = None

def usage():
    print "usage: oood.py -c config-file run|stop|status"
    print "       daemon for openoffice"
    

i = 1
while i < len(sys.argv):
    if sys.argv[i] == "-c":
       i = i + 1
       configfile = sys.argv[i]
    elif sys.argv[i] in COMMANDS:
       cmd = sys.argv[i]
    else:
       usage()
       os._exit(1)
    i = i + 1

if cmd == None or configfile == None:
    usage()
    os._exit(1)


class FileInputStream( XInputStream, unohelper.Base ):
      def __init__( self, path ):
          self.f = file( path )
          
      def closeInput( self):
          self.f.close()
          
      def skipBytes( self, nByteCount ):
          self.f.read( nByteCount )

      def readBytes( self, retSeq, nByteCount ):
          s = self.f.read( nByteCount )
          return len( s ) , uno.ByteSequence( s )
          
      def readSomeBytes( self, retSeq , nByteCount ):
          #as we never block !
          return self.readBytes( retSeq, nByteCount )
          
      def available( self ):
          return 0

class Config:
    def __init__( self ):
        self.acceptor = ""
        self.userInstallation = ()
        self.toleratedStartupTimePerInstance = 180
        self.maxUsageCountPerInstance = 10
        self.randomUsageCountPerInstance = 3
        self.loglevel = INFO

    def __str__(self):
        return "acceptor="+self.acceptor+", userInstallation="+str(self.userInstallation) + \
               ", toleratedStartupTimePerInstance=" + str( \
            self.toleratedStartupTimePerInstance ) + ", maxUsageCountPerInstance="+ \
            str( self.maxUsageCountPerInstance ) + ", randomUsageCountPerInstance=" + \
            str( self.randomUsageCountPerInstance ) + ",loglevel= "+ str(self.loglevel)

class ConfigHandler( XDocumentHandler, unohelper.Base ):
    def __init__( self ):
        pass
        
    def startDocument( self ):
        self.config = Config()
        
    def endDocument( self ):
        pass
        
    def startElement( self , name, attlist):
        if name == "acceptor":
            self.config.acceptor = attlist.getValueByIndex(0 )
        elif name == "admin-acceptor":
            self.config.adminAcceptor = attlist.getValueByIndex(0 )
        elif name == "user-installation":
            self.config.userInstallation = self.config.userInstallation + (
                attlist.getValueByName( "url" ), )
        elif name == "tolerated-startuptime-per-instance":
            self.config.toleratedStartupTimePerInstance = int(
                attlist.getValueByName( "value" ) )
        elif name == "usage-count-per-instance":
            self.config.maxUsageCountPerInstance = int(
                attlist.getValueByName( "max" ) )
            self.config.randomUsageCountPerInstance = int(
                attlist.getValueByName( "random" ) )
        elif name == "logging":
            l = attlist.getValueByName( "level" )
            if l == "info":
                self.config.loglevel = INFO
            elif l == "serious":
                self.config.loglevel = SERIOUS
            elif l == "detail":
                self.config.loglevel = DETAIL
            else:
                raise RuntimeException( "Unknown loglevel " + l , None )

    def endElement( self, name ):
        pass

    def characters ( self, chars ):
        pass

    def ignoreableWhitespace( self, chars ):
        pass

    def setDocumentLocator( self, locator ):
        pass

def readConfiguration( path, parser ):
    h = ConfigHandler()
    parser.setDocumentHandler( h )
    parser.parseStream(
        InputSource( FileInputStream( path ) , "", path, path ) )
    return h.config

def namedValueTupleToMap( t ):
    m = {}
    for i in t:
        m[ i.Name ] = i.Value
    return m

ctx = uno.getComponentContext()
config = readConfiguration(
    configfile,ctx.ServiceManager.createInstance("com.sun.star.xml.sax.Parser"))

if cmd == "stop":
   uno.getComponentContext().ServiceManager.createInstance(
         "com.sun.star.bridge.UnoUrlResolver").resolve(
         "uno:"+config.adminAcceptor+";oood.Shutdown" )
   os._exit(0)
elif cmd == "status":
   status = uno.getComponentContext().ServiceManager.createInstance(
         "com.sun.star.bridge.UnoUrlResolver").resolve(
         "uno:"+config.adminAcceptor+";oood.Status" )

   if status == None:
       print "Couldn't resolve status object"
   print "Instances in daemon (free/total): " +str(status.getByName( "available" )) + \
          "/" + str( status.getByName( "poolsize" ) )

   workers = status.getByName( "workers" )
   print "Worker\tpid\tin use\tusages\tduration\tuser-directory"
   for i in workers:
       out = ""
       m = namedValueTupleToMap( i )
       inuse = " "
       duration = "        \t"
       if m["usage-time"] > 0:
           inuse = "x"
           duration = str( round(m["usage-time" ],2) ) + "s    \t"
           
       print str( m["index"]) + "\t" + \
             str( m["pid"] ) + " \t" + \
             inuse +"\t" + \
             str( m["usage"]  ) + "\t" + \
             duration  +\
             str( m["user-dir" ] ) 
   os._exit(0)

NULL_DEVICE = "/dev/null"
processPool = None


class PoolAdderThread( threading.Thread ):
    def __init__( self, process ):
        threading.Thread.__init__( self )
        self.process = process

    def run( self ):
        try:
              if not self.process.restartWhenNecessary():
                  logger.log( SERIOUS, "FATAL: could not restart worker " +
                              str(self.process) + ", terminating now !" )
                  os._exit(1)
              processPool.append( self.process )
              logger.log( INFO, processPool.getStateString()+" <- "+str(self.process)+
                            " reenters pool" )
        except Exception,e:
            logger.log( SERIOUS, str(e) )


class Status( unohelper.Base, XNameAccess ):
    def __init__( self, processList ):
        self.map = {}
        self.map[ "poolsize" ] = len( processList )
        available = 0
        workers = []
        for i in processList:
            v = None
            if i.timestamp == None:
                v = NamedValue( "usage-time" , 0 )
                available = available + 1
            else:
                v = NamedValue( "usage-time", time.time() - i.timestamp )
                                
            t = NamedValue( "pid", i.pid ), \
                NamedValue( "usage", i.usage ), \
                v, \
                NamedValue( "user-dir" , i.userid ), \
                NamedValue( "index", i.index )
            workers.append( t )
        self.map[ "workers" ] = tuple( workers )
        self.map[ "available" ] = available
        
    def getByName( self, name ):
        if self.map.has_key( name ):
            return self.map[ name ]
        raise NoSuchElementException( "unknown element " + name, self )

    def getElementNames( self ):
        return tuple( self.map.keys() )

    def hasByName( self , name ):
        return self.map.has_key( name )

    def getElementType( self ):
        return Type()

    def hasElements( self ):
        return True

class ProcessPool:
    def __init__( self ):
        self.lst = []
        self.mutex = threading.Lock()

    def append( self , item ):
        self.mutex.acquire()
        self.lst.append( item )
        self.mutex.release()

    def initializationFinished( self ):
        self.all = tuple( self.lst )
        
    def size( self ):
        return len( self.lst ) 
 
    def terminate( self ):
        for i in self.all:
              i.terminate()
              
    def pop( self ):
        ret = None
        while ret == None:
            self.mutex.acquire()
            if len(self.lst) == 0:
                self.mutex.release()
                break
            ret = self.lst.pop(0)
            self.mutex.release()
            if not ret.isResponsive():
               # process has died inbetween 
               PoolAdderThread( ret ).start()
               ret = None
        return ret
  
    def waitTillReady( self ):
        for i in self.lst:
            if not i.waitTillReady(
                  self.size() * config.toleratedStartupTimePerInstance ):
               os._exit(1)
    def getStateString( self):
        global config
        return "{" + str(self.size()) + "/" + str(len(config.userInstallation)) + "}"

class Logger:
    def __init__( self , out, level ):
        self.out = out
        self.level = level
        
    def log( self, level , text ):
        if level <= self.level:
            self.out.write(
                time.asctime() + " ["+
                LEVEL2STRING[level] +"]: "  + text + "\n")

processPool = ProcessPool()
random.seed()
logger = Logger( sys.stdout, config.loglevel )
shutdownThread = None

acceptor = ctx.ServiceManager.createInstance(
    "com.sun.star.connection.Acceptor" )
bridgefactory = ctx.ServiceManager.createInstance(
    "com.sun.star.bridge.BridgeFactory" )
connector = ctx.ServiceManager.createInstance(
    "com.sun.star.connection.Connector" )

def getConnectString( index ):
    return "pipe,name=oood-instance-" + str(index)

class AdminInstanceProvider( unohelper.Base, XInstanceProvider ):
    def getInstance( self, name ):
        object = None
        if name == "oood.Shutdown":
            global shutdownThread
            shutdownThread = threading.Timer( 1.0, shutdown , (0,processPool) )
            shutdownThread.start()
        elif name == "oood.Status":
            object = Status( processPool.all )
        else:
            logger.log( DETAIL, "AdminInstanceProvider: Unknown object " +name )
        return object

class AdminAcceptorThread( threading.Thread ):
    def __init__( self , ctx, acceptString ):
        threading.Thread.__init__(self)
        self.ctx = ctx
        self.acceptString = acceptString
        self.acceptor = self.ctx.ServiceManager.createInstance(
            "com.sun.star.connection.Acceptor")

    def run( self ):
        logger.log( INFO, "Admin thread started" )
        while True:
            c = self.acceptor.accept( self.acceptString )
            if c == None:
                break
            logger.log( DETAIL, "Accepted admin connection from "+
                        extractContactInfo(c.getDescription()))
            bridgefactory.createBridge( "", "urp", c, AdminInstanceProvider() )

        logger.log( INFO, "Admin thread terminating" )

    def cancel( self ):
        self.acceptor.stopAccepting( )
        
class TerminateThread( threading.Thread ):
    def __init__( self, ctx ):
        threading.Thread.__init__( self )
        self.ctx = ctx

    def run( self ):
        try:
           self.ctx.ServiceManager.createInstance( "com.sun.star.frame.Desktop").terminate()
        except Exception:
           pass

class ResponsivenessChecker( threading.Thread ):
      def __init__( self, process ):
          threading.Thread.__init__(self)
          self.process = process
          self.responsive = False

      def isResponsive( self ):
          self.join( 4 )
          return self.responsive
    
      def run( self ):
          try:
             # still alive ?   
             smgr = self.process.ctx.ServiceManager
             desktop = smgr.createInstance( "com.sun.star.frame.Desktop" )

             # check for typical solar-mutex deadlock
             desktop.getCurrentComponent()
             
             # more checks may be added             
             self.responsive = True
             
          except Exception,e:
             logger.log( SERIOUS, "responsiveness-check for " + str( self.process) +
                         " failed: " + str(e) )
        
def calculateMaxUsageCount():
    return config.maxUsageCountPerInstance + \
           ( 1. - 2*random.random()) * config.randomUsageCountPerInstance
   
def shutdown( returncode , pool ):
    acceptor.stopAccepting()
    pool.terminate()

class OfficeProcess:
    def __init__( self , userid, index):
        self.userid = userid
        self.index = index
        self.pid =  None
        self.usage = 0
        self.timestamp = None
        self.bridge = None
        self.ctx = None
        
    def start(self):
        self.pid = os.spawnlp(
            os.P_NOWAIT,
            "soffice",
            "" , # what is this for a string ?
            "-env:UserInstallation="+self.userid ,
            "-headless",
            "-norestore",
            "-invisible",
            "-accept="+getConnectString(self.index)+ ";urp;" )

    def kill( self ):
        if self.pid:
            os.kill( self.pid, signal.SIGKILL )
            logger.log( INFO, str( self ) + " killed" )

    def isAlive( self ):
        return os.system( "ps -p " + str( self.pid ) + " >" + NULL_DEVICE ) == 0

    def terminate( self ): 
        if self.ctx:
            t = TerminateThread( self.ctx )
            logger.log( INFO, "terminating " +str( self ) )
            t.start()
            t.join( 4 )
            if t.isAlive():
                logger.log(
                    SERIOUS, repr( self ) + " did not react on terminate, killing instance" )
                self.kill()
            else:
                logger.log( INFO, str( self ) + " terminated" )
            self.ctx = None

    def terminateAndRestart( self ):
        self.terminate()
        time.sleep( 4 )
        self.start()
        if not self.waitTillReady( config.toleratedStartupTimePerInstance ):
           logger.log( SERIOUS, "could not restart instance "+str(self)+", terminating" )
           return False
        self.usage = 0
        return True
           
    def tryConnect( self ):
        try:
            con = connector.connect( getConnectString( self.index ) )
            self.bridge = bridgefactory.createBridge( "", "urp" , con, None )
            self.ctx = self.bridge.getInstance( "StarOffice.ComponentContext" )
            return self.ctx != None
        except NoConnectException,e:
            logger.log( DETAIL, str(self)+ " not yet responsive" )
        except Exception,e:
            logger.log( SERIOUS , "couldn't connect to instance ("+str(e)+")" )
        return False

    def waitTillReady( self , timeout ):
        start = time.time()
        while not self.tryConnect( ) and time.time()-start < timeout:
            time.sleep( 4 )

        if time.time() - start > timeout:
            return False
        return True

    def __str__(self):
        return "Worker-" + str(self.index) + "("+str(self.usage)+" uses)"
    
    def __repr__(self):
        return "<oood.OfficeProcess %s;pid=%d;connectStr=%s,usage=%d>" % \
               (self.userid,self.pid,getConnectString(self.index),self.usage)

    def startUsage( self ):
        self.usage = self.usage + 1
        self.timestamp = time.time()

    def getUsageDuration( self ):
        return time.time() - self.timestamp
    
    def endUsage( self ):
        self.timestamp = None

    def isResponsive( self ):
        t = ResponsivenessChecker( self )
        t.start()
        return t.isResponsive()

    def restartWhenNecessary( self ):
        if not self.isResponsive():
           logger.log( INFO, "process " + str(self) +\
                        " not responsive anymore, restarting" )
           self.usage = 0
           return self.terminateAndRestart()
           
        if self.usage >= calculateMaxUsageCount():
            logger.log( INFO, "max usage count for instance " + str(self) +\
                        " reached, restarting" )
            return self.terminateAndRestart()
        return True
            
            
        
class ConnectionListener( unohelper.Base, XStreamListener ):
    def __init__( self , officeProcess, conDesc ):
        self.officeProcess = officeProcess
        self.conDesc = conDesc

    def clear( self ):
        if self.officeProcess != None:
           logger.log( INFO, self.conDesc + " disconnects from " + 
                       str( self.officeProcess ) + " (used for  "+
                       str(round(self.officeProcess.getUsageDuration(),1)) +"s) " )
           self.officeProcess.endUsage( )
           PoolAdderThread( self.officeProcess ).start()
           self.officeProcess = None
            
    def started( self ):
        pass
        
    def closed( self ):
        self.clear()
    def terminated( self ):
        self.clear()
    def error( self , exception ):
        self.clear()


class OfficeInstanceProvider( unohelper.Base, XInstanceProvider ):
    def __init__( self,  office ):
        self.office = office

    def getInstance( self, name ):
        logger.log( DETAIL, "resolving name " +name )
        object  = self.office.bridge.getInstance( name )
        return object

class EmptyPoolInstanceProvider( unohelper.Base, XInstanceProvider ):
    def getInstance( self, name ):
        return None
#        raise RuntimeException( "No office instance available, try later" , None )

def extractContactInfo( namevalue ):
    lst = namevalue.split( "," )
    host = ""
    port = ""
    for i in lst:
        if i.startswith( "peerHost" ):
            host = i.split("=")[1]
        elif i.startswith( "peerPort" ):
            port = i.split("=")[1]
    return host + ":" + port


logger.log( SERIOUS, "Started on pid " + str( os.getpid() ) )


index = 0
logger.log( INFO, "Starting office workers ..." )

for i in config.userInstallation:
    office = OfficeProcess( i , index )
    office.start()
    logger.log( INFO, "Worker-" +str(index) + ":" + repr(office) +" started")
    processPool.append( office )
    index = index + 1

processPool.waitTillReady()
processPool.initializationFinished()

adminThread = AdminAcceptorThread( ctx, config.adminAcceptor )
adminThread.start()

logger.log( INFO , processPool.getStateString()+ " WorkerAll instances started" )
logger.log( SERIOUS, "Accepting on " + config.acceptor )

while True:
    con = acceptor.accept( config.acceptor )
    if con == None:
        break
    
    conDesc = extractContactInfo(con.getDescription())
    logger.log( INFO , "Incoming request for a worker from " + conDesc )
    process = processPool.pop()
    if process == None:
        logger.log( SERIOUS, processPool.getStateString()+" " + conDesc +
                    " rejected, all workers are busy" )
        bridgefactory.createBridge(
            "", "urp", con , EmptyPoolInstanceProvider( ) )
    else:
        process.startUsage()
        logger.log( INFO, processPool.getStateString()+" -> " +
                    str(process) +" serves "+conDesc)
    
        con.addStreamListener( ConnectionListener(process,conDesc) )
        bridgefactory.createBridge(
            "", "urp", con , OfficeInstanceProvider( process ) )

logger.log( SERIOUS, "Accepting on " + config.acceptor +
            " stopped, waiting for shutdownthread")

adminThread.cancel()

if shutdownThread != None:
    shutdownThread.join()
    
if adminThread != None:
    adminThread.join()

logger.log( SERIOUS, "Terminating normally")


