<?xml version="1.0"?>
<!-- ========================================================================
 *
 *  $RCSfile: lang-pages.xsl,v $
 *
 *  $Revision: 1.7 $
 *
 *  last change: $Author: tomsontom $ $Date: 2007/08/13 13:06:55 $
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
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<!-- ONLY FOR TESTING -->
<xsl:variable name="host" select="string('http://api.openoffice.org')" />
<xsl:variable name="sitedoc" select="document('/virtual/codesnippets.openoffice.org/www/Examples/Snippets/homepage/htdocs/site.xml')" />


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
        <meta name="keywords" content="OpenOffice.org, Open Office, OpenOffice, openoffice, StarOffice, Star Office, OOo, ooo, code snippets, help code, FAQ, HowTo" />
        <meta name="description" content="SourceCast, a collaborative software development platform from CollabNet" />
    </head>
    <body marginwidth="0" marginheight="0" class="composite">
        <xsl:call-template name="page-start">
            <xsl:with-param name="application" select="page/@section" />
            <xsl:with-param name="lang" select="page/@lang" />
        </xsl:call-template>

        <table id="main">
        <tr valign="top">
            <xsl:call-template name="left-navi">
                <xsl:with-param name="application" select="page/@section" />
                <xsl:with-param name="lang" select="page/@lang" />
            </xsl:call-template>
            <td id="midcol">
                <xsl:copy-of select="page" />
                <div id="projecthome" class="app">
                    <div id="axial" class="h3">
                        <h3>Short-List</h3>
                        <table border="1" cellspacing="2" cellpadding="3" width="100%">
                        <tr>
                            <th>Snippet</th>
                            <th>Short-Description</th>
                        </tr>
                        <xsl:variable name="application"><xsl:value-of select="page/@section" /></xsl:variable>
                        <xsl:variable name="lang"><xsl:value-of select="page/@lang" /></xsl:variable>
                        <xsl:for-each select="$sitedoc/snippets/snippet-section[@name=$application]/snippet-lang[@type=$lang]/snippet">
                            <xsl:call-template name="short-cut-navi">
                                <xsl:with-param name="node" select="." />
                            </xsl:call-template>
                        </xsl:for-each>
                        </table>
                    </div>
                </div>
            </td>
        </tr>
        </table>
        <br/>
	<center><a href="http://axkit.org/" target="_new"><img src="/media/image/pb_axkit.png" border="0" align="absmiddle"/></a> and <a href="http://www.bestsolution.at"><img src="/media/image/logonew.png" alt="BestSolution.at" id="ooologo" border="0" align="absmiddle"/></a></center>
    </body>
</html>
</xsl:template>

<xsl:template name="short-cut-navi">
    <xsl:param name="node" />
    <xsl:variable name="bgColor">
    <xsl:choose>
        <xsl:when test="position() mod 2 = 0">a</xsl:when>
        <xsl:otherwise>b</xsl:otherwise>
    </xsl:choose>
    </xsl:variable>
    <tr class="{$bgColor}">
        <td><a><xsl:attribute name="href"><xsl:value-of select="$node/@url" /></xsl:attribute><xsl:value-of select="$node/@label" /></a></td>
        <td>&#160;</td>
    </tr>
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
                            <div><nobr><a><xsl:attribute name="href"><xsl:value-of select="@url" /></xsl:attribute><xsl:value-of select="@label" /></a></nobr></div>
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

</xsl:stylesheet>
