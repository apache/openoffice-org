" Vim syntax file
" Language:	OO-BASIC
" Maintainer:	Tom Schindl <tom.schindl@bestsolution.at>
" Last Change:	Wed Jul 28 14:24:23 BST 2004

" For version 5.x: Clear all syntax items
" For version 6.x: Quit when a syntax file was already loaded
if version < 600
  syntax clear
elseif exists("b:oocurrent_syntax")
  finish
endif


syn keyword basicStatement	 AS As as
syn keyword basicStatement	 ALIAS Alias
syn keyword basicStatement	 ASSIGN Assign
syn keyword basicStatement	 CALL Call
syn keyword basicStatement	 CASE Case
syn keyword basicStatement	 CLOSE Close
syn keyword basicStatement	 COMPARE Compare
syn keyword basicStatement	 _CONST_ 
syn keyword basicStatement	 DECLARE Declare
syn keyword basicStatement	 DIM Dim dim
syn keyword basicStatement	 DO Do do
syn keyword basicStatement	 DEFINT Defint
syn keyword basicStatement	 DEFLNG Deflng
syn keyword basicStatement	 DEFSNG Defsng
syn keyword basicStatement	 DEFDBL Defdbl
syn keyword basicStatement	 DEFCUR Defcur
syn keyword basicStatement	 DEFDATE Defdate
syn keyword basicStatement	 DEFSTR Defstr
syn keyword basicStatement	 DEFOBJ Defobj
syn keyword basicStatement	 DEFERR Deferr
syn keyword basicStatement	 DEFBOOL Defbool
syn keyword basicStatement	 DEFVAR Defvar
syn keyword basicStatement	 INTEGER
syn keyword basicStatement	 LONG
syn keyword basicStatement	 SINGLE
syn keyword basicStatement	 DOUBLE
syn keyword basicStatement	 CURRENCY
syn keyword basicStatement	 DATE
syn keyword basicStatement	 STRING
syn keyword basicStatement	 OBJECT
syn keyword basicStatement	 BOOLEAN
syn keyword basicStatement	 VARIANT
syn keyword basicStatement	 EACH Each each
syn keyword basicStatement	 ELSE Else else
syn keyword basicStatement	 ELSEIF ElseIf Elseif elseif
syn keyword basicStatement	 END End end
syn keyword basicStatement	 ERASE Erase erase
syn keyword basicStatement	 EXIT Exit exit
syn keyword basicStatement	 FOR For for
syn keyword basicStatement	 FUNCTION Function function
syn keyword basicStatement	 GLOBAL Global global
syn keyword basicStatement	 GOSUB GoSub Gosub gosub
syn keyword basicStatement	 GOTO Goto GoTo goto
syn keyword basicStatement	 IF If if
syn keyword basicStatement	 INPUT Input input
syn keyword basicStatement	 LET Let let
syn keyword basicStatement	 LINE Line line
syn keyword basicStatement	 LINEINPUT LineInput Lineinput lineinput
syn keyword basicStatement	 LOCAL Local local
syn keyword basicStatement	 LOOP Loop loop
syn keyword basicStatement	 LPRINT Lprint lprint
syn keyword basicStatement	 LSET LSet Lset lset
syn keyword basicStatement	 NAME Name name
syn keyword basicStatement	 NEW New new
syn keyword basicStatement	 NEXT Next next
syn keyword basicStatement	 ON On on
syn keyword basicStatement	 OPEN Open open
syn keyword basicStatement	 OPTION Option option
syn keyword basicStatement	 PRINT Print print
syn keyword basicStatement	 PRIVATE Private private
syn keyword basicStatement	 PUBLIC Public public
syn keyword basicStatement	 REDIM Redim ReDim redim
syn keyword basicStatement	 RESUME Resume resume
syn keyword basicStatement	 RETURN Return return
syn keyword basicStatement	 RSET RSet Rset rest
syn keyword basicStatement	 SELECT Select select
syn keyword basicStatement	 SET Set set
syn keyword basicStatement	 SHARED Shared shared
syn keyword basicStatement	 STATIC Static static
syn keyword basicStatement	 STEP Step step
syn keyword basicStatement	 STOP Stop stop
syn keyword basicStatement	 SUB Sub sub
syn keyword basicStatement	 TEXT Text text
syn keyword basicStatement	 THEN Then then
syn keyword basicStatement	 TO To to
syn keyword basicStatement	 TYPE Type type
syn keyword basicStatement	 UNTIL Until until
syn keyword basicStatement	 WEND Wend wend
syn keyword basicStatement	 WHILE While while
syn keyword basicStatement	 WITH With width
syn keyword basicStatement	 WRITE Write write
syn keyword basicStatement	 ENDIF Endif endif
syn keyword basicStatement	 ENDFUNC EndFunc Endfunc endfunc
syn keyword basicStatement	 ENDSUB EndSub Endsub endsub
syn keyword basicStatement	 ENDTYPE EndType Endtype endtype
syn keyword basicStatement	 ENDSELECT EndSelect Endselect endselect
syn keyword basicStatement	 ENDWITH EndWith Endwith endwith
syn keyword basicStatement	 EOS 
syn keyword basicStatement	 EOLN
syn keyword basicStatement	 EXPON
syn keyword basicStatement	 NEG
syn keyword basicStatement	 MUL
syn keyword basicStatement	 DIV
syn keyword basicStatement	 IDIV
syn keyword basicStatement	 MOD
syn keyword basicStatement	 PLUS
syn keyword basicStatement	 MINUS
syn keyword basicStatement	 EQ
syn keyword basicStatement	 NE
syn keyword basicStatement	 LT
syn keyword basicStatement	 GT
syn keyword basicStatement	 LE
syn keyword basicStatement	 GE
syn keyword basicStatement	 NOT
syn keyword basicStatement	 AND
syn keyword basicStatement	 OR
syn keyword basicStatement	 XOR
syn keyword basicStatement	 EQV
syn keyword basicStatement	 IMP
syn keyword basicStatement	 CAT
syn keyword basicStatement	 LIKE
syn keyword basicStatement	 IS
syn keyword basicStatement	 FIRSTEXTRA
syn keyword basicStatement	 NUMBER
syn keyword basicStatement	 FIRSTEXTRA
syn keyword basicStatement	 FIXSTRING
syn keyword basicStatement	 SYMBOL
syn keyword basicStatement	 _CDECL_
syn keyword basicStatement	 BYVAL
syn keyword basicStatement	 BYREF
syn keyword basicStatement	 OUTPUT
syn keyword basicStatement	 RANDOM
syn keyword basicStatement	 APPEND
syn keyword basicStatement	 BINARY
syn keyword basicStatement	 ACCESS
syn keyword basicStatement	 LOCK
syn keyword basicStatement	 READ
syn keyword basicStatement	 PRESERVE
syn keyword basicStatement	 BASE
syn keyword basicStatement	 ANY
syn keyword basicStatement	 LIB
syn keyword basicStatement	 _OPTIONAL_
syn keyword basicStatement	 EXPLICIT
syn keyword basicStatement	 COMPATIBLE
syn keyword basicStatement	 FIRSTJAVA
syn keyword basicStatement	 JS_BREAK
syn keyword basicStatement	 FIRSTJAVA
syn keyword basicStatement	 JS_CONTINUE
syn keyword basicStatement	 JS_FOR
syn keyword basicStatement	 JS_FUNCTION
syn keyword basicStatement	 JS_IF
syn keyword basicStatement	 JS_NEW
syn keyword basicStatement	 JS_RETURN
syn keyword basicStatement	 JS_THIS
syn keyword basicStatement	 JS_VAR
syn keyword basicStatement	 JS_WHILE
syn keyword basicStatement	 JS_WITH
syn keyword basicStatement	 JS_COMMA
syn keyword basicStatement	 JS_ASSIGNMENT
syn keyword basicStatement	 JS_ASS_PLUS
syn keyword basicStatement	 JS_ASS_MINUS
syn keyword basicStatement	 JS_ASS_MUL
syn keyword basicStatement	 JS_ASS_DIV
syn keyword basicStatement	 JS_ASS_MOD
syn keyword basicStatement	 JS_ASS_LSHIFT
syn keyword basicStatement	 JS_ASS_RSHIFT
syn keyword basicStatement	 JS_ASS_RSHIFT_Z
syn keyword basicStatement	 JS_ASS_AND
syn keyword basicStatement	 JS_ASS_XOR
syn keyword basicStatement	 JS_ASS_OR
syn keyword basicStatement	 JS_COND_QUEST
syn keyword basicStatement	 JS_COND_SEL
syn keyword basicStatement	 JS_LOG_OR
syn keyword basicStatement	 JS_LOG_AND
syn keyword basicStatement	 JS_BIT_OR
syn keyword basicStatement	 JS_BIT_XOR
syn keyword basicStatement	 JS_BIT_AND
syn keyword basicStatement	 JS_EQ
syn keyword basicStatement	 JS_NE
syn keyword basicStatement	 JS_LT
syn keyword basicStatement	 JS_LE
syn keyword basicStatement	 JS_GT
syn keyword basicStatement	 JS_GE
syn keyword basicStatement	 JS_LSHIFT
syn keyword basicStatement	 JS_RSHIFT
syn keyword basicStatement	 JS_RSHIFT_Z
syn keyword basicStatement	 JS_PLUS
syn keyword basicStatement	 JS_MINUS
syn keyword basicStatement	 JS_MUL
syn keyword basicStatement	 JS_DIV
syn keyword basicStatement	 JS_MOD
syn keyword basicStatement	 JS_LOG_NOT
syn keyword basicStatement	 JS_BIT_NOT
syn keyword basicStatement	 JS_INC
syn keyword basicStatement	 JS_DEC
syn keyword basicStatement	 JS_LPAREN
syn keyword basicStatement	 JS_RPAREN
syn keyword basicStatement	 JS_LINDEX
syn keyword basicStatement	 JS_RINDEX

syn keyword basicFunction       AboutStarBasic Abs ABS Array Asc ASC Atn ATN
syn keyword basicFunction       ATTR_ARCHIVE ATTR_DIRECTORY ATTR_HIDDEN ATTR_NORMAL
syn keyword basicFunction       ATTR_READONLY ATTR_SYSTEM ATTR_VOLUME Beep
syn keyword basicFunction       Blue CBool CByte CCur CDate
syn keyword basicFunction       CDateFromIso CDateToIso CDec CDbl
syn keyword basicFunction       CF_BITMAP CF_METAFILEPICT CF_TEXT ChDir
syn keyword basicFunction       ChDrive Choose Chr CInt
syn keyword basicFunction       CLEAR_ALLTABS CLEAR_TAB CLng CompatibilityMode
syn keyword basicFunction       ConvertFromUrl ConvertToUrl Cos CreateObject
syn keyword basicFunction       CreateUnoListener CreateUnoDialog CreateUnoService
syn keyword basicFunction       CreateUnoStruct CreateUnoValue CreatePropertySet CSng
syn keyword basicFunction       CStr CurDir CVar CVErr
syn keyword basicFunction       DateAdd DateDiff DatePart
syn keyword basicFunction       DateSerial DateValue Day Ddeexecute
syn keyword basicFunction       Ddeinitiate Ddepoke Dderequest Ddeterminate
syn keyword basicFunction       Ddeterminateall DimArray Dir DumpAllObjects
syn keyword basicFunction       EqualUnoObjects EnableReschedule Environ EOF
syn keyword basicFunction       Erl Err Error Exp
syn keyword basicFunction       False FileAttr FileCopy FileDateTime
syn keyword basicFunction       FileExists FileLen FindObject FindPropertyObject
syn keyword basicFunction       Fix Format FRAMEANCHORCHAR FRAMEANCHORPAGE
syn keyword basicFunction       FRAMEANCHORPARA FreeFile FreeLibrary Get
syn keyword basicFunction       GetAttr GetDefaultContext GetDialogZoomFactorX GetDialogZoomFactorY
syn keyword basicFunction       GetGUIType GetGUIVersion GetPathSeparator GetProcessServiceManager
syn keyword basicFunction       GetSolarVersion GetSystemTicks GetSystemType GlobalScope
syn keyword basicFunction       Green HasUnoInterfaces Hex Hour
syn keyword basicFunction       IDABORT IDCANCEL IDNO IDOK
syn keyword basicFunction       IDRETRY IDYES Iif InputBox
syn keyword basicFunction       InStr Int IsArray IsDate IsEmpty
syn keyword basicFunction       IsError IsMissing IsNull IsNumeric
syn keyword basicFunction       IsObject IsUnoStruct Join Kill LBound
syn keyword basicFunction       LCase Left Len Load
syn keyword basicFunction       LoadPicture Loc Lof Log
syn keyword basicFunction       LTrim MB_ABORTRETRYIGNORE MB_APPLMODAL MB_DEFBUTTON1 MB_DEFBUTTON2
syn keyword basicFunction       MB_DEFBUTTON3 MB_ICONEXCLAMATION MB_ICONINFORMATION MB_ICONQUESTION
syn keyword basicFunction       MB_ICONSTOP MB_OK MB_OKCANCEL MB_RETRYCANCEL
syn keyword basicFunction       MB_SYSTEMMODAL MB_YESNO MB_YESNOCANCEL Mid
syn keyword basicFunction       Minute MkDir Month MsgBox
syn keyword basicFunction       Nothing Now Null Oct
syn keyword basicFunction       Pi Put QBColor Randomize Red
syn keyword basicFunction       Reset ResolvePath RGB Right
syn keyword basicFunction       RmDir Rnd RTrim SavePicture
syn keyword basicFunction       Second Seek SendKeys SetAttr
syn keyword basicFunction       SET_OFF SET_ON SET_TAB Sgn
syn keyword basicFunction       Shell Sin Space Spc
syn keyword basicFunction       Split Sqr Str StrComp
syn keyword basicFunction       StrConv String Switch Tan
syn keyword basicFunction       Time Timer TimeSerial TimeValue
syn keyword basicFunction       TOGGLE Trim True TwipsPerPixelX TwipsPerPixelY
syn keyword basicFunction       TYP_AUTHORFLD TYP_CHAPTERFLD TYP_CONDTXTFLD TYP_DATEFLD
syn keyword basicFunction       TYP_DBFLD TYP_DBNAMEFLD TYP_DBNEXTSETFLD
syn keyword basicFunction       TYP_DBNUMSETFLD TYP_DBSETNUMBERFLD TYP_DDEFLD TYP_DOCINFOFLD
syn keyword basicFunction       TYP_DOCSTATFLD TYP_EXTUSERFLD TYP_FILENAMEFLD TYP_FIXDATEFLD
syn keyword basicFunction       TYP_FIXTIMEFLD TYP_FORMELFLD TYP_GETFLD TYP_GETREFFLD TYP_GETREFPAGEFLD
syn keyword basicFunction       TYP_HIDDENPARAFLD TYP_HIDDENTXTFLD TYP_INPUTFLD TYP_INTERNETFLD TYP_JUMPEDITFLD
syn keyword basicFunction       TYP_MACROFLD TYP_NEXTPAGEFLD TYP_PAGENUMBERFLD TYP_POSTITFLD TYP_PREVPAGEFLD
syn keyword basicFunction       TYP_SEQFLD TYP_SETFLD TYP_SETINPFLD TYP_SETREFFLD
syn keyword basicFunction       TYP_SETREFPAGEFLD TYP_TEMPLNAMEFLD TYP_TIMEFLD TYP_USERFLD
syn keyword basicFunction       TYP_USRINPFLD TypeLen TypeName UBound
syn keyword basicFunction       UCase Unload Val VarType V_EMPTY
syn keyword basicFunction       V_NULL V_INTEGER V_LONG V_SINGLE V_DOUBLE
syn keyword basicFunction       V_CURRENCY V_DATE V_STRING Wait Weekday Year
syn keyword basicTodo contained	TODO

"integer number, or floating point number without a dot.
syn match  basicNumber		"\<\d\+\>"
"floating point number, with dot
syn match  basicNumber		"\<\d\+\.\d*\>"
"floating point number, starting with a dot
syn match  basicNumber		"\.\d\+\>"

" String and Character contstants
syn match   basicSpecial contained "\\\d\d\d\|\\."
syn region  basicString		  start=+"+  skip=+\\\\\|\\"+  end=+"+  contains=basicSpecial

syn region  basicComment	start="REM " end="$" contains=basicTodo
syn region  basicComment	start="rem " end="$" contains=basicTodo
syn region  basicComment	start="Rem " end="$" contains=basicTodo
syn region  basicComment	start="'" end="$" contains=basicTodo
syn region  basicLineNumber	start="^\d" end="\s"
syn match   basicTypeSpecifier  "[a-zA-Z0-9][\$%&!#]"ms=s+1
" Used with OPEN statement
syn match   basicFilenumber  "#\d\+"
"syn sync ccomment basicComment
" syn match   basicMathsOperator "[<>+\*^/\\=-]"
syn match   basicMathsOperator   "-\|=\|[:<>+\*^/\\]\|AND\|OR"

" Define the default highlighting.
" For version 5.7 and earlier: only when not done already
" For version 5.8 and later: only when an item doesn't have highlighting yet
if version >= 508 || !exists("did_basic_syntax_inits")
  if version < 508
    let did_basic_syntax_inits = 1
    command -nargs=+ HiLink hi link <args>
  else
    command -nargs=+ HiLink hi def link <args>
  endif

  HiLink basicLabel		Label
  HiLink basicConditional	Conditional
  HiLink basicRepeat		Repeat
  HiLink basicLineNumber	Comment
  HiLink basicNumber		Number
  HiLink basicError		Error
  HiLink basicStatement	        Statement
  HiLink basicString		String
  HiLink basicComment		Comment
  HiLink basicSpecial		Special
  HiLink basicTodo		Todo
  HiLink basicFunction		Identifier
  HiLink basicTypeSpecifier Type
  HiLink basicFilenumber basicTypeSpecifier
  "hi basicMathsOperator term=bold cterm=bold gui=bold

  delcommand HiLink
endif

let b:current_syntax = "oobasic"

" vim: ts=8
