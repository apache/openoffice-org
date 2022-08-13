#!/usr/bin/python

# Simple minded script for generating exclude rules for the cvs2svn options file

# Broken tags/branches, force them to branch
print 'ctx.symbol_strategy.add_rule(ForceBranchRegexpStrategyRule(\'OO614B\'))'
print 'ctx.symbol_strategy.add_rule(ForceBranchRegexpStrategyRule(\'OO619B\'))'
print 'ctx.symbol_strategy.add_rule(ForceBranchRegexpStrategyRule(\'OO613B\'))'
print 'ctx.symbol_strategy.add_rule(ForceBranchRegexpStrategyRule(\'SRX643_OO\'))'
print 'ctx.symbol_strategy.add_rule(ForceBranchRegexpStrategyRule(\'OO627B\'))'
print 'ctx.symbol_strategy.add_rule(ForceBranchRegexpStrategyRule(\'OO625B\'))'
print 'ctx.symbol_strategy.add_rule(ForceBranchRegexpStrategyRule(\'mws_srx644\'))'
print 'ctx.symbol_strategy.add_rule(ForceBranchRegexpStrategyRule(\'OpenOffice609-FU\'))'
print 'ctx.symbol_strategy.add_rule(ForceBranchRegexpStrategyRule(\'mws_srx645\'))'
print 'ctx.symbol_strategy.add_rule(ForceBranchRegexpStrategyRule(\'OO633B\'))'
print 'ctx.symbol_strategy.add_rule(ForceBranchRegexpStrategyRule(\'OO638B\'))'
print 'ctx.symbol_strategy.add_rule(ForceBranchRegexpStrategyRule(\'OO632B\'))'
print 'ctx.symbol_strategy.add_rule(ForceBranchRegexpStrategyRule(\'SRC605\'))'        # has commits
print 'ctx.symbol_strategy.add_rule(ForceBranchRegexpStrategyRule(\'SRC680_m201\'))'   # has commits
print 'ctx.symbol_strategy.add_rule(ForceBranchRegexpStrategyRule(\'OpenOffice605\'))' # has commits
print 'ctx.symbol_strategy.add_rule(ForceBranchRegexpStrategyRule(\'OpenOffice609\'))' # has commits
print 'ctx.symbol_strategy.add_rule(ForceBranchRegexpStrategyRule(\'SRC680_m180\'))'   # has commits
print 'ctx.symbol_strategy.add_rule(ForceBranchRegexpStrategyRule(\'SRC680_m216\'))'   # has commits
print 'ctx.symbol_strategy.add_rule(ForceBranchRegexpStrategyRule(\'SRC680_m231\'))'   # has commits
print 'ctx.symbol_strategy.add_rule(ForceBranchRegexpStrategyRule(\'ooo220\'))'        # has commits

print 'ctx.symbol_strategy.add_rule(ForceBranchRegexpStrategyRule(\'src641pp2\'))'     # has commits, can't be blocked
print 'ctx.symbol_strategy.add_rule(ForceBranchRegexpStrategyRule(\'src612\'))'        # has commits, can't be blocked
print 'ctx.symbol_strategy.add_rule(ForceBranchRegexpStrategyRule(\'OOO_STABLE_1_PORTS\'))' # has commits, can't be blocked
print 'ctx.symbol_strategy.add_rule(ForceBranchRegexpStrategyRule(\'my_testbranch\'))' # has commits, can't be blocked

# The following symbols can't be excluded because they blocked and need to be forced to a branch because they have commits on them
# These symbols also need to be removed from the automatically generated exclude list, see below
print 'ctx.symbol_strategy.add_rule(ForceBranchRegexpStrategyRule(\'cws_srx645_obr02\'))'      # has commits, can't be blocked
print 'ctx.symbol_strategy.add_rule(ForceBranchRegexpStrategyRule(\'cws_src680_tl12\'))'       # has commits, can't be blocked
print 'ctx.symbol_strategy.add_rule(ForceBranchRegexpStrategyRule(\'cws_srx644_cd5\'))'        # has commits, can't be blocked
print 'ctx.symbol_strategy.add_rule(ForceBranchRegexpStrategyRule(\'cws_srx644_ooo11beta\'))'  # has commits, can't be blocked
print 'ctx.symbol_strategy.add_rule(ForceBranchRegexpStrategyRule(\'cws_src680_dba201b\'))'    # has commits, can't be blocked
print 'ctx.symbol_strategy.add_rule(ForceBranchRegexpStrategyRule(\'cws_src680_recovery04\'))' # has commits, can't be blocked
print 'ctx.symbol_strategy.add_rule(ForceBranchRegexpStrategyRule(\'cws_src680_tl04\'))'       # has commits, can't be blocked
print 'ctx.symbol_strategy.add_rule(ForceBranchRegexpStrategyRule(\'cws_src680_latex\'))'      # has commits, can't be blocked

# Broken tags/branches, force them to tag
print 'ctx.symbol_strategy.add_rule(ForceTagRegexpStrategyRule(\'OpenOffice643\'))'
print 'ctx.symbol_strategy.add_rule(ForceTagRegexpStrategyRule(\'OpenOffice641D\'))'
print 'ctx.symbol_strategy.add_rule(ForceTagRegexpStrategyRule(\'CWS_SRC680_UNXSPLASH_ANCHOR\'))'
# exclude the following tags
# 'srx642_2' is a tag in 1 files, a branch in 42 files and has commits in 3 files
print 'ctx.symbol_strategy.add_rule(ExcludeRegexpStrategyRule(\'srx642_2\'))'
# 'POST_MWS_SRX644_HEAD_MIGRATION' is a tag in 39334 files, a branch in 148 files and has commits in 222 files
print 'ctx.symbol_strategy.add_rule(ExcludeRegexpStrategyRule(\'POST_MWS_SRX644_HEAD_MIGRATION\'))'
# 'reviewed' is a tag in 1754 files, a branch in 8 files and has commits in 0 files
print 'ctx.symbol_strategy.add_rule(ExcludeRegexpStrategyRule(\'reviewed\'))'
# 'l10n_pp3_merge' is a tag in 1031 files, a branch in 253 files and has commits in 6 files
print 'ctx.symbol_strategy.add_rule(ExcludeRegexpStrategyRule(\'l10n_pp3_merge\'))'
# 'staroffice7pp2' is a tag in 1961 files, a branch in 2 files and has commits in 0 files
print 'ctx.symbol_strategy.add_rule(ExcludeRegexpStrategyRule(\'staroffice7pp2\'))'
# 'test' is a tag in 51 files, a branch in 1 files and has commits in 0 files
print 'ctx.symbol_strategy.add_rule(ExcludeRegexpStrategyRule(\'test\'))'

# the following symbols (branches/tags) can't be exluded because they are blocked
blocked = ['obr02', 'ooo11beta', 'recovery04',  'cd5', 'latex', 'tl04', 'dba201b', 'tl12']
blocked_set = set(blocked)

# options for exclusion of all integrated, cancelled, deleted and finished CWS
inf = open('cws_done.csv', 'r')

print 'ctx.symbol_strategy.add_rule(ExcludeRegexpStrategyRule(\'unknown-.*\'))'
print 'ctx.symbol_strategy.add_rule(ExcludeRegexpStrategyRule(\'Initial_Import\'))'
print 'ctx.symbol_strategy.add_rule(ExcludeRegexpStrategyRule(\'SMI\'))'

try:

    for line in inf.readlines():
        cws = line.partition(',')[0].strip('"')
        cws_up = cws.upper()
        if cws == 'NAME': # skip column title
            continue
        if cws.find('_') != -1: # exclude all cloned CWS
            continue
        if cws in blocked_set: # exclude all blocked CWS names
            continue
        print 'ctx.symbol_strategy.add_rule(ExcludeRegexpStrategyRule(\'cws_.*_' + cws + '\'))'
        print 'ctx.symbol_strategy.add_rule(ExcludeRegexpStrategyRule(\'CWS_.*_' + cws_up + '_ANCHOR\'))'

finally:
    inf.close()
