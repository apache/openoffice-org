<?xml version="1.0"?>
<!-- ========================================================================
 *
 *  $RCSfile: snipp-xsl.xsl,v $
 *
 *  $Revision: 1.20 $
 *
 *  last change: $Author: tomsontom $ $Date: 2007/09/24 08:01:14 $
 *
 *  The Contents of this file are made available subject to the terms of
 *  the BSD license.
 *
 *  Copyright (c) 2004 by Sun Microsystems, Inc.
 *  All rights reserved.
 *
 *  Redistribution and use in source and binary forms, with or without
 *  modification, are permitted provided that the following conditions
 *  are met:
 *  1. Redistributions of source code must retain the above copyright
 *     notice, this list of conditions and the following disclaimer.
 *  2. Redistributions in binary form must reproduce the above copyright
 *     notice, this list of conditions and the following disclaimer in the
 *     documentation and/or other materials provided with the distribution.
 *  3. Neither the name of Sun Microsystems, Inc. nor the names of its
 *     contributors may be used to endorse or promote products derived
 *     from this software without specific prior written permission.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 *  "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 *  LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS
 *  FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
 *  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
 *  BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS
 *  OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 *  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR
 *  TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE
 *  USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 ======================================================================== -->

<!-- AUTHOR: Tom Schindl <tom.schindl@bestsolution.at>  -->
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" 
	xmlns:syn="http://ns.laxan.com/text-vimcolor/1"
	xmlns:str="http://exslt.org/strings"
        extension-element-prefixes="str">

<!-- ONLY FOR TESTING -->
<xsl:variable name="host" select="string('http://api.openoffice.org')" />
<xsl:variable name="sitedoc" select="document('/virtual/codesnippets.openoffice.org/www/Examples/Snippets/homepage/htdocs/site.xml')" />

<xsl:template match="snippet">
<td id="midcol">

    <div id="apphead">
        <h2>OO-Snippets: <em><xsl:value-of select="question/@heading" /></em></h2>
    </div>
    <div id="projecthome" class="app">
        <div id="axial" class="h3">
            <h3>Commons</h3>
            <div class="axial">
                <table border="0" cellspacing="2" cellpadding="3">
                <tr>
                    <th>Keywords</th>
                    <td>
                        <xsl:for-each select="keywords/keyword">
                            <xsl:value-of select="./text()" /><xsl:if test="position()!=last()">, </xsl:if>
                        </xsl:for-each>
                    </td>
                </tr>
                <tr>
                    <th>Language</th>
                    <td>
                        <xsl:value-of select="@language" />
                    </td>
                </tr>
                <tr>
                    <th>Application</th>
                    <td>
                        <xsl:value-of select="@application" />
                    </td>
                </tr>
                <tr>
                    <th>Authors</th>
                    <td>
                        <xsl:for-each select="authors/author">
                            <xsl:choose>
                            <xsl:when test="@initial='true'">
                                <b>
                                    <xsl:value-of select="text()" /> (initial)
                                </b>
                            </xsl:when>
                            <xsl:otherwise>
                                <xsl:value-of select="text()" />
                            </xsl:otherwise>
                            </xsl:choose>
                            <br/>
                        </xsl:for-each>
                    </td>
                </tr>
		<tr>
		    <th>Supported Versions</th>
		    <td>
			<xsl:for-each select="versions/version">
  			    <xsl:choose>
				<xsl:when test="@status = 'tested'">
				    <b style="color: green" title="Tested on this version and working"><xsl:value-of select="@number" />&#160;&#160;</b>
			        </xsl:when>
				<xsl:when test="@status = 'may_work'">
				    <b style="color: orange" title="Not tested on this version but should work"><xsl:value-of select="@number" />&#160;&#160;</b>
				</xsl:when>
				<xsl:otherwise>
				    <b style="color: red" title="Not tested or not working on this version"><xsl:value-of select="@number" />&#160;&#160;</b>
				</xsl:otherwise>
			    </xsl:choose>
			</xsl:for-each>
		    </td>
		</tr>
		<tr>
			<th>Supported OS</th>
			<td>
				<xsl:for-each select="operating-systems/operating-system">
					<b><xsl:value-of select="@name" />&#160;&#160;</b>
				</xsl:for-each>
			</td>
		</tr>
                <tr>
                    <th>Question</th>
                    <td>
                        <xsl:apply-templates select="question" />
                    </td>
                </tr>
                <tr>
                    <th>Answer</th>
                    <td>
			    <xsl:apply-templates select="answer/p|answer/ul" />
                    </td>
                </tr>
                </table>
            </div>
        </div>
        <div id="axial" class="h3">
           <h3>Code-Snippet-Listing (<a href="#" onClick="location.href=location.href+'?passthru=1';return false;">snippet-source</a>)</h3>
           
           <div class="codesnippet">
                <table>
                <tr>
                    <td><div style="overflow: auto;"><pre><xsl:apply-templates select="answer/listing"/></pre></div></td>
                </tr>
                </table>
           </div>
        </div>
        <div id="axial" class="h3">
            <h3>Changelog</h3>
            <table border="1" cellspacing="2" cellpadding="3" width="100%">
            <tr>
                <th>Date</th>
                <th>User</th>
                <th>Modification</th>
            </tr>
            <xsl:apply-templates select="changelog/change" />
            </table>
        </div>
    </div>
</td>
</xsl:template>

<xsl:template match="changelog/change">
    <xsl:variable name="bgColor">
    <xsl:choose>
        <xsl:when test="position() mod 2 = 0">a</xsl:when>
        <xsl:otherwise>b</xsl:otherwise>
    </xsl:choose>
    </xsl:variable>
    <tr class="{$bgColor}">
        <td><xsl:value-of select="@date" /></td>
        <td><xsl:value-of select="@author-id" /></td>
        <td><xsl:value-of select="text()" /></td>
    </tr>
</xsl:template>


<xsl:template match="question">
	<xsl:for-each select="*|text()">
		<xsl:choose>
		<xsl:when test="name(.) = ''">
			<xsl:copy-of select="." />
		</xsl:when>
		<xsl:when test="not(name(.) = 'listing')">
			<xsl:apply-templates select="." />
		</xsl:when>
		<xsl:otherwise>
           <div class="codesnippet">
                <table>
                <tr>
                    <td><div style="overflow: auto;"><pre><xsl:apply-templates select="."/></pre></div></td>
                </tr>
                </table>
           </div>
		</xsl:otherwise>
		</xsl:choose>
	</xsl:for-each>
</xsl:template>

<xsl:template match="listing">
	<xsl:apply-templates />
</xsl:template>

<xsl:template match="answer/listing">  
	<xsl:apply-templates select="syn:syntax" />
</xsl:template>


<xsl:template match="p">
	<p>
	<xsl:apply-templates/>
	</p>
</xsl:template>

<xsl:template match="idl-reference">
    <a target="_new">
       <xsl:choose>
          <xsl:when test="@type">
             <xsl:attribute name="class">shortlink</xsl:attribute>
             <xsl:attribute name="title"><xsl:value-of select="@package"/><xsl:value-of select="@name" /></xsl:attribute>
          </xsl:when>
          <xsl:otherwise>
             <xsl:attribute name="class">link</xsl:attribute>
             <xsl:attribute name="title"><xsl:value-of select="text()"/></xsl:attribute>
          </xsl:otherwise>
       </xsl:choose>
       <xsl:attribute name="href">http://api.openoffice.org/docs/common/ref/<xsl:for-each select="str:tokenize(@package,'.')"><xsl:if test="position()!=1">/</xsl:if><xsl:value-of select="text()" /></xsl:for-each>/<xsl:value-of select="@name" />.html<xsl:if test="@anker">#<xsl:value-of select="@anker" /></xsl:if></xsl:attribute>
	<xsl:choose><xsl:when test="@label"><xsl:value-of select="@label" /></xsl:when><xsl:otherwise><xsl:value-of select="text()"/></xsl:otherwise></xsl:choose>
    </a>
</xsl:template>

<xsl:template match="external-link">
    <a target="_new"><xsl:attribute name="href"><xsl:value-of select="@href" /></xsl:attribute><xsl:value-of select="@href" /></a>
</xsl:template>

<xsl:template match="internal-link">
    <a><xsl:attribute name="href"><xsl:value-of select="@href" /></xsl:attribute><xsl:value-of select="@href" /></a>
</xsl:template>

<!-- 
    SPECIAL ELEMENTS USED IN LISTING 
-->
<xsl:template match="syn:syntax">
    <xsl:apply-templates />
</xsl:template>

<xsl:template match="syn:Type">
    <span class="code-reserved-word"><xsl:apply-templates /></span>
</xsl:template>  

<xsl:template match="syn:Comment">
    <span class="code-comment"><xsl:apply-templates /></span>
</xsl:template>

<xsl:template match="syn:Constant">
    <span class="code-constant"><xsl:apply-templates /></span>
</xsl:template>

<xsl:template match="syn:Statement">
    <span class="code-statement"><xsl:apply-templates /></span>
</xsl:template>

<xsl:template match="syn:PreProc">
    <span class="code-preproc"><xsl:apply-templates /></span>
</xsl:template>

<xsl:template match="syn:Todo">
    <span class="code-todo"><xsl:apply-templates /></span>
</xsl:template>

<xsl:template match="syn:Identifier">
    <span class="code-identifier"><xsl:apply-templates /></span>
</xsl:template>

<xsl:template match="syn:Special">
    <span class="code-type"><xsl:apply-templates /></span>
</xsl:template>

<!--
    ###############################################################
    ###############################################################
    ###############################################################
-->


<!--
    I THINK THEY ARE EXTERNALLY DEFINED AREN'T THEY????
-->

<xsl:template match="/">
<html>
    <head>
        <style type="text/css">
            @import "<xsl:value-of select="$host" />/branding/css/tigris.css";
            @import "<xsl:value-of select="$host" />/branding/css/inst.css";
            @import "/css/codesnippet.css";
        </style>
<script src="http://www.google-analytics.com/urchin.js" type="text/javascript">
</script>
<script type="text/javascript">
_uacct = "UA-30193653-1";
urchinTracker();
</script>

        <link rel="stylesheet" type="text/css" href="{$host}/branding/css/print.css" media="print" />
        <title>OpenOffice.org API - Code Snippet Base</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta http-equiv="Content-Style-Type" content="text/css" />

        <meta name="version" content="2.6.2.3" />
        <meta name="keywords">
            <xsl:attribute name="content"><xsl:call-template name="create-keywords" ><xsl:with-param name="keywords" select="snippet/keywords"/></xsl:call-template></xsl:attribute>
        </meta>
        <meta name="description">
            <xsl:attribute name="content"><xsl:value-of select="snippet/question/@heading"/></xsl:attribute>
        </meta>
    </head>
    <body marginwidth="0" marginheight="0" class="composite">
        <xsl:call-template name="page-start">
                <xsl:with-param name="application" select="snippet/@application" />
                <xsl:with-param name="lang" select="snippet/@language" />
        </xsl:call-template>
        <table border="0" cellspacing="0" cellpadding="4" width="100%" id="main" height="85%">
        <tr valign="top">
            <xsl:call-template name="left-navi">
                <xsl:with-param name="application" select="snippet/@application" />
                <xsl:with-param name="lang" select="snippet/@language" />
            </xsl:call-template>
            <xsl:apply-templates select="snippet" />
        </tr>
        </table>
        <br/>
	<center><a href="http://axkit.org/" target="_new"><img src="/media/image/pb_axkit.png" border="0" align="absmiddle"/></a> and <a href="http://www.bestsolution.at"><img src="/media/image/logonew.png" alt="BestSolution.at" id="ooologo" border="0" align="absmiddle"/></a></center>
    </body>
</html>
</xsl:template>

<xsl:template name="left-navi">
    <xsl:param name="application" />
    <xsl:param name="lang" />

    <td id="navcol">
    <div id="navcolumn">
        <dl id="projecttools" class="navgroup">
          <dd>
              <div class="label"><strong>OO-Snippets-Project</strong></div>
              <div class="body">
           <xsl:for-each select="$sitedoc/snippets/snippet-section[@name=$application]/snippet-lang">
                <xsl:choose>
                <xsl:when test="@type = $lang">
                    <div><strong><nobr><a><xsl:attribute name="href"><xsl:value-of select="@url"/></xsl:attribute><xsl:value-of select="@type" /> (<xsl:value-of select="count(./snippet)"/>)</a></nobr></strong>
                        <xsl:for-each select="./snippet">
                            <div><nobr><a><xsl:attribute name="href"><xsl:value-of select="@url"/></xsl:attribute><xsl:value-of select="@label" /></a></nobr></div>
                        </xsl:for-each>
                    </div>
                </xsl:when>
                <xsl:otherwise>
                    <div><nobr><a><xsl:attribute name="href"><xsl:value-of select="@url"/></xsl:attribute><xsl:value-of select="@type" /> (<xsl:value-of select="count(./snippet)"/>)</a></nobr></div>
                </xsl:otherwise>
                </xsl:choose>
            </xsl:for-each>
            </div>
          </dd>
        </dl>
        <dl id="helptext" class="navgroup">
          <dt>Help</dt>
          <dd>
              <ul>
                  <li><a href="#" onClick="var sitemap = window.open('/site.xml','sitemap','height=400,width=200,scrollbars=yes'); sitemap.focus(); return false;" class="helplink">Sitemap</a></li>
<!--                  <li><a href="#" onClick="var validate = window.open('/validate.html','validate','height=200,width=500,scrollbars=yes'); validate.focus(); return false;" class="helplink">Validate</a></li>
                  <li><a href="#" onClick="var search = window.open('/search','search','height=400,width=640,scrollbars=yes'); search.focus(); return false;" class="helplink">Search</a></li>-->
              </ul>
          </dd>
        </dl>
     </div>
    <div class="strut">&#160;</div>
    <a href="http://api.openoffice.org"><img src="/media/image/community_distributor.gif" alt="Openoffice.org" id="ooologo" border="0" /></a>
     </td>
</xsl:template>



<xsl:template name="page-start">
    <xsl:param name="application" />
    <xsl:param name="lang" />
<div class="tabs" id="toptabs">
<ul class="tabs">
    <li class="plain"><a href="/">OO-Snippets</a></li>
    <xsl:for-each select="$sitedoc/snippets/snippet-section">
    <xsl:choose>
        <xsl:when test="$application = @name">
            <li class="th"><a><xsl:attribute name="href"><xsl:value-of select="@url" />/index.xml</xsl:attribute><xsl:value-of select="@name" /> (<xsl:value-of select="count(./snippet-lang/snippet)"/>)</a></li>
        </xsl:when>
        <xsl:otherwise>
            <li class="plain"><a><xsl:attribute name="href"><xsl:value-of select="@url" />/index.xml</xsl:attribute><xsl:value-of select="@name" /> (<xsl:value-of select="count(./snippet-lang/snippet)"/>)</a></li>
        </xsl:otherwise>
    </xsl:choose>
    </xsl:for-each>
</ul>
</div>
<div class="contentpart" id="contextualinformation">
<div id="breadcrumbs">
  <a href="http://api.openoffice.org" target="_new">OO-API</a>     &#160;&gt;&#160; <a href="/">Codesnippets</a>     &#160;&gt;&#160; <a><xsl:attribute name="href">/<xsl:value-of select="$application" />/index.xml</xsl:attribute><xsl:value-of select="$application" /></a> &#160;&gt;&#160;
  <strong>
    <a href="#"><xsl:value-of select="$lang" /></a>
  </strong>
</div>
</div>
</xsl:template>

<xsl:template match="pre">
	<pre>
	<xsl:apply-templates />
	</pre>
</xsl:template>

<xsl:template match="b">
	<xsl:copy-of select="." />
</xsl:template>

<xsl:template match="i">
	<xsl:copy-of select="." />
</xsl:template>

<xsl:template match="ul">
	<xsl:copy-of select="." />
</xsl:template>

<xsl:template match="code">
	<xsl:copy-of select="." />
</xsl:template>

<xsl:template match="a">
    <a target="_new">
        <xsl:attribute name="href"><xsl:value-of select="@href"/></xsl:attribute>
        <xsl:value-of select="." />
    </a>
</xsl:template>

<xsl:template match="ul">
    <xsl:apply-templates />
</xsl:template>

<xsl:template match="li">
    <xsl:copy-of select="." />
</xsl:template>

<xsl:template name="create-keywords"><xsl:param name="keywords" />OpenOffice.org, Open Office, OpenOffice, openoffice, StarOffice, Star Office, OOo, ooo, code snippets, help code, FAQ, HowTo<xsl:for-each select="$keywords/keyword">,<xsl:value-of select="./text()" /></xsl:for-each></xsl:template>

<xsl:template match="br">
    <xsl:copy-of select="." />
</xsl:template>

</xsl:stylesheet>
