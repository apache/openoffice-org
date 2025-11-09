#!/usr/local/bin/python

# script to remove the Attic part of a CVS repository, 
# remove all but the last revision of binary files
import os
import shutil

def dots(lhs, rhs):
    lcnt = lhs.count('.')
    rcnt = rhs.count('.')
    if lcnt < rcnt:
        return 1
    if lcnt > rcnt:
        return -1
    return 0

def getbinary(file, fullpath, is_localize):
    is_binary = False
    head_rev = 0
    branches = []
    for line in file.readlines():
        if line.startswith('keyword substitution: '):
            subst = line.split(': ')[1][:-1]
            if subst == 'b':
                is_binary = True
        if line.startswith('head: '):
            head = line.split(': ')[1][:-1]
            prefix, head = head.split('.', 1)
            if int(prefix) != 1:
                raise Exception, fullpath + ': unexpected revision'
            if head.find('.') != -1:
                raise Exception, fullpath + ': unexpected revision'
            head_rev = int(head)
        if line.startswith('branches: '):
            branch_line = line.split(': ')[1][:-2]
            brs = branch_line.split('; ')
            for br in brs:
                branches.append(br)
        if line.startswith('total revisions: '):
            total_rev_line = line.split(';', 1)
            total_rev = total_rev_line[0].split(': ')[1][-1]
    if not head_rev:
        raise Exception, fullpath + ': can\'t find head'
    if (is_binary or is_localize) and (head_rev > 1) and int(total_rev) > 1:
        return [head_rev, branches]
    else:
        return [0, None]

current_dir = os.getcwd()

for root, dirs, files in os.walk(current_dir, topdown=False):
    for name in dirs:
        if name.endswith('Attic'):
            fullpath = os.path.join(root, name)
            print '... removing ' + fullpath
            shutil.rmtree(fullpath)


for root, dirs, files in os.walk(current_dir, topdown=False):
    for name in files:
	is_localize = False
        fullpath = os.path.join(root, name)
        if not name.endswith(',v'):
            os.remove(fullpath)
            continue
        if name.endswith('localize.sdf,v'):
            is_localize = True
        rlog      = 'rlog "' + fullpath + '"'
        flog      = os.popen(rlog, 'r')
        binary    = getbinary(flog, fullpath, is_localize)
        flog.close()
        toprev = binary[0]
        branches = binary[1]
        if toprev:
            print fullpath
            # First remove all branches
            branches.sort(dots)
            for brstr in branches:
                rcs = 'rcs -o' + brstr.strip() + '.1: ' + "'" + fullpath + "'"
                print rcs
                ret = os.system(rcs)
                if ret:
                    exit(1)
            rcs = 'rcs -o' + '1.1:1.' + str(toprev-1) + ' ' + "'" + fullpath + "'"
            ret = os.system(rcs)
            if ret:
                exit(1)
