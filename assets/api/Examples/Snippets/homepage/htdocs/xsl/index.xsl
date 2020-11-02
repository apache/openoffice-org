<?xml version="1.0"?>
<!-- ========================================================================
 *
 *  $RCSfile: index.xsl,v $
 *
 *  $Revision: 1.6 $
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
    <body>
        <xsl:call-template name="page-start" />

<div class="contentpart" id="contextualinformation">
    <div id="breadcrumbs">
        <a href="http://api.openoffice.org" target="_new">OO-API</a> &#160;&gt;&#160; <strong><a href="/">Codesnippets</a></strong>
    </div>
</div>
    <table id="main" summary="body">
        <tr>
            <xsl:call-template name="left-navi" />
            <td id="midcol">
                <xsl:copy-of select="page" />
            </td>
        </tr>
    </table>
        <br/>
	<center><a href="http://axkit.org/" target="_new"><img src="/media/image/pb_axkit.png" border="0" align="absmiddle"/></a> and <a href="http://www.bestsolution.at"><img src="/media/image/logonew.png" alt="BestSolution.at" id="ooologo" border="0" align="absmiddle"/></a></center>
    </body>
</html>
</xsl:template>

<xsl:template name="left-navi">
    
    <td id="navcol">
    <div id="navcolumn">
        <dl id="projecttools" class="navgroup">
          <dd>
              <div class="label"><strong>OO-Snippets-Project</strong></div>
              <div class="body">
                  <xsl:for-each select="$sitedoc/snippets/snippet-section">
                  <div>
                      <nobr><a><xsl:attribute name="href"><xsl:value-of select="@url"/>/index.xml</xsl:attribute><xsl:value-of select="@name" /> (<xsl:value-of select="count(./snippet-lang/snippet)"/>)</a></nobr>
                  </div>
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
<div class="tabs" id="toptabs">
<ul class="tabs">
      <li class="th"><a href="/">OO-Snippets</a></li>
    <xsl:for-each select="$sitedoc/snippets/snippet-section">
            <li class="plain"><a><xsl:attribute name="href"><xsl:value-of select="@url" />/index.xml</xsl:attribute><xsl:value-of select="@name" /> (<xsl:value-of select="count(./snippet-lang/snippet)"/>)</a></li>
    </xsl:for-each>
</ul>
</div>
</xsl:template>

</xsl:stylesheet>
