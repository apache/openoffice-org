" Vim syntax file
" Language:	Rexx
" Maintainer:	Thomas Geulig <geulig@nentec.de>
" Last Change:	2001 May 2
" Last Change:  2005 Nov 19, added some <http://www.ooRexx.org>-coloring,
"                            line comments, do *over*, messages, directives,
"                            highlighting classes, methods, routines and requires
"                            Rony G. Flatscher <rony.flatscher@wu-wien.ac.at>
"
" URL:		http://mywebpage.netscape.com/sharpPeople/vim/syntax/rexx.vim
"
" Special Thanks to Dan Sharp <dwsharp@hotmail.com> for comments and additions
" (and providing the webspace)

" For version 5.x: Clear all syntax items
" For version 6.x: Quit when a syntax file was already loaded
if version < 600
  syntax clear
elseif exists("b:current_syntax")
  finish
endif

syn case ignore

" ---rgf, 2005-11-16: turns out, sequence is of utmost importance!
" add to valid identifier chars
setlocal iskeyword+=.
setlocal iskeyword+=!
setlocal iskeyword+=?

" ---rgf, position important: must be before comments etc. !
syn match rexxOperator "[-=|\/\\\+\*\[\],;<>&\~]"

syn match rexxIdentifier        "\<[a-zA-Z\!\?_]\([a-zA-Z0-9._?!]\)*\>"
syn match rexxEnvironmentSymbol "\<\.\+\([a-zA-Z0-9._?!]\)*\>"


" A Keyword is the first symbol in a clause.  A clause begins at the start
" of a line or after a semicolon.  THEN, ELSE, OTHERWISE, and colons are always
" followed by an implied semicolon.
syn match rexxClause "\(^\|;\|:\|then \|else \|otherwise \)\s*\w\+" contains=ALL

" Considered keywords when used together in a phrase and begin a clause

syn region rexxParseWith start="\swith"ms=s+1 end="\s"me=e-1
syn match rexxParse contained "\<parse\s*\(\(upper\|lower\|caseless\)\s*\)\=\(arg\|linein\|pull\|source\|var\|value\|version\)\>" contains=rexxParseWith

syn match rexxKeyword contained "\<numeric \(digits\|form \(scientific\|engineering\|value\)\|fuzz\)\>"
syn match rexxKeyword contained "\<\(address\|trace\)\( value\)\=\>"
syn match rexxKeyword contained "\<procedure\(\s*expose\)\=\>"
syn match rexxKeyword contained "\<do\>\(\s*forever\)\=\>"
syn match rexxKeyword contained "\<use\>\s*\<arg\>"

" Another keyword phrase, separated to aid highlighting in rexxFunction
syn match rexxKeyword contained "\<signal\(\s*\(on\|off\)\s*\(any\|error\|failure\|halt\|lostdigits\|nomethod\|nostring\|notready\|novalue\|syntax\|user\s*\k*\)\(\s\+name\)\=\)\=\>"
syn match rexxKeyword2 contained "\<call\(\s*\(on\|off\)\s*\(any\|error\|failure\|halt\|notready\|user\s*\k*\)\(\s\+name\)\=\)\=\>"

" Considered keywords when they begin a clause
syn match rexxKeyword contained "\<\(arg\|drop\|end\|exit\|expose\|if\|interpret\|iterate\|leave\|nop\)\>"
syn match rexxKeyword contained "\<\(options\|pull\|push\|queue\|reply\|return\|say\|select\|trace\)\>"

" Conditional phrases
syn match rexxConditional  "\(^\s*\| \)\(to\|by\|for\|until\|while\|then\|when\|otherwise\|else\|over\)\( \|\s*$\)"
syn match rexxConditional contained "\<\(to\|by\|for\|until\|while\|then\|when\|otherwise\|else\|over\)\>"

" Functions/Procedures
syn match rexxFunction	"\<\w*\(/\*\s*\*/\)*("me=e-1 contains=rexxComment,rexxConditional,rexxKeyword,rexxIdentifier
syn match rexxFunction 	"\<\<[a-zA-Z\!\?_]\([a-zA-Z0-9._?!]\)*\>("me=e-1
syn match rexxFunction	"\<call\s\+\k\+\>"  contains=rexxKeyword2
syn match rexxFunction "[()]"

" String constants
syn region rexxString	  start=+"+ skip=+""+ end=+"+
syn region rexxString	  start=+'+ skip=+''+ end=+'+

" Catch errors caused by wrong parenthesis
syn region rexxParen transparent start='(' end=')' contains=ALLBUT,rexxParenError,rexxTodo,rexxUserLabel,rexxKeyword
syn match rexxParenError	 ")"
syn match rexxInParen		"[\\[\\]{}]"

" Comments
syn region rexxComment		start="/\*" end="\*/" contains=rexxTodo,rexxComment
syn match  rexxCommentError	"\*/"
syn match  rexxLineComment       /--.*/

syn keyword rexxTodo contained	TODO FIXME XXX


" ooRexx messages
syn region rexxMessageOperator start="\(\~\|\~\~\)" end="\(\S\|\s\)"me=e-1
syn match rexxMessage "\(\~\|\~\~\)\s*\<\.*[a-zA-Z]\([a-zA-Z0-9._?!]\)*\>" contains=rexxMessageOperator

" Highlight User Labels
syn match rexxUserLabel		 "^\k*\s*:"me=e-1

" end-of-line, continuation, ---rgf
" syn match rexxLineContinue "\(,\|-\)\ze\s*$"
syn match rexxLineContinue "\(,\|-\)\ze\s*$"

" Special Variables
syn keyword rexxSpecialVariable  sigl rc result self super

" Constants
syn keyword rexxConst .true .false .nil

" ooRexx builtin classes, first define dot to be o.k. in keywords
syn keyword rexxBuiltinClass .object .class .method .message
syn keyword rexxBuiltinClass .monitor .alarm
syn keyword rexxBuiltinClass .stem .stream .string
syn keyword rexxBuiltinClass .mutablebuffer
syn keyword rexxBuiltinClass .array .list .queue .directory .table .set
syn keyword rexxBuiltinClass .relation .bag .supplier .regularExpressions

" Windows-only classes
syn keyword rexxBuiltinClass .OLEObject .MenuObject .WindowsClipboard .WindowsEventLog
syn keyword rexxBuiltinClass .WindowsManager .WindowObject .WindowsProgramManager


" ooRexx directives, ---rgf location important, otherwise directives in top of
" file not matched!
syn region rexxClass    start="::\s*class\s*"ms=e+1    end="\ze\(\s\|;\|$\)"
syn region rexxMethod   start="::\s*method\s*"ms=e+1   end="\ze\(\s\|;\|$\)"
syn region rexxRequires start="::\s*requires\s*"ms=e+1 end="\ze\(\s\|;\|$\)"
syn region rexxRoutine  start="::\s*routine\s*"ms=e+1  end="\ze\(\s\|;\|$\)"

syn region rexxDirective start="\(^\|;\)\s*::\s*\k\+"  end="\($\|;\)" contains=rexxString,rexxComment,rexxLineComment,rexxClass,rexxMethod,rexxRoutine,rexxRequires



if !exists("rexx_minlines")
"  let rexx_minlines = 10
  let rexx_minlines = 500
endif
" exec "syn sync ccomment rexxComment minlines=" . rexx_minlines
exec "syn sync ccomment rexxComment minlines=" . rexx_minlines

" Define the default highlighting.
" For version 5.7 and earlier: only when not done already
" For version 5.8 and later: only when an item doesn't have highlighting yet
if version >= 508 || !exists("did_rexx_syn_inits")
  if version < 508
    let did_rexx_syn_inits = 1
    command -nargs=+ HiLink hi link <args>
  else
    command -nargs=+ HiLink hi def link <args>
  endif

  HiLink rexxUserLabel		Function
  HiLink rexxCharacter		Character
  HiLink rexxParenError		rexxError
  HiLink rexxInParen		rexxError
  HiLink rexxCommentError	rexxError
  HiLink rexxError		Error
  HiLink rexxKeyword		Statement
  HiLink rexxKeyword2		rexxKeyword
  HiLink rexxFunction		Function
  HiLink rexxString		String
  HiLink rexxComment		Comment
  HiLink rexxTodo		Todo
  HiLink rexxSpecialVariable	Special
  HiLink rexxConditional	rexxKeyword

"  HiLink rexxOperator		Todo
  HiLink rexxOperator		Operator
  HiLink rexxMessageOperator	rexxOperator
  HiLink rexxLineComment	RexxComment

"  HiLink rexxLineContinue	Todo
"  HiLink rexxLineContinue	Folded
  HiLink rexxLineContinue	WildMenu

  HiLink rexxDirective		rexxKeyword
  HiLink rexxClass              Type
  HiLink rexxMethod             rexxFunction
  HiLink rexxRequires           Include
  HiLink rexxRoutine            rexxFunction

  HiLink rexxConst		Constant
  HiLink rexxTypeSpecifier	Type
  HiLink rexxBuiltinClass	rexxTypeSpecifier

  HiLink rexxEnvironmentSymbol  rexxConst
  HiLink rexxMessage		rexxFunction

  HiLink rexxParse              rexxKeyword
  HiLink rexxParseWith          rexxParse

  delcommand HiLink
endif

let b:current_syntax = "rexx"

"vim: ts=8

