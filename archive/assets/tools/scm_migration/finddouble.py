#!/usr/local/bin/python

# Script to find CVS archives which are present in a directory *and* in the 
# Attic part of the directory
import os

def gethead(file):
    for line in file.readlines():
        if line.startswith('head: '):
            head = line.split(': ')[1][:-1]
            prefix, head = head.split('.', 1)
            if int(prefix) != 1:
                raise Exception, 'unexpected revision'
            if head.find('.') != -1:
                raise Exception, 'unexpected revision'
            return int(head)
    raise Exception, 'can\'t find head'
           
for root, dirs, files in os.walk('.', topdown=False):
    for name in files:
        fullpath = os.path.join(root, name)
        fullatticpath = os.path.join(os.path.join(root, 'Attic'), name)
        if os.path.exists(fullatticpath):
            rlog      = 'rlog ' + fullpath.replace(' ', '\ ')
            rlogattic = 'rlog ' + fullatticpath.replace(' ', '\ ')
            flog      = os.popen(rlog, 'r')
            flogattic = os.popen(rlogattic, 'r')
            head      = gethead(flog)
            headattic = gethead(flogattic)
            flog.close()
            flogattic.close()
            # kill the file where the head revision is lower
            if headattic > head:
                print 'rm -f ' + '"' + fullpath + '"'
            else:
                print 'rm -f ' + '"' + fullatticpath + '"'



