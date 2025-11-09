<?xml version="1.0"?> 

<!--
    Transform FAQs into HTML.

    Input XML is expected to look like this:

    <faqs maintainer="...email..." maintainer-name="...name...">
     <faq>
      <question> ...? </question>
      <answer> ... test with HTML ... </answer>
     </faq>
     <faq> ... </faq>
     <faq> ... </faq>
     <faq> ... </faq>
    </faqs>
-->

<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

    <xsl:output method="html" indent="no"/>

    <!-- document root: list questions, then q+a -->
    <xsl:template match="faqs">

        <!-- header question list -->
        <a name="top"/>
        <p><img src="http://www.openoffice.org/sharedimages/start_blue_bar.gif" alt=""/>&#160;&#160;<font size="-1"><b>MOST FREQUENTLY ASKED QUESTIONS: QUESTIONS</b></font>&#160;&#160;<img src="http://www.openoffice.org/sharedimages/end_blue_bar.gif" alt=""/></p>

        <!-- list of questions -->
        <ol>
            <xsl:apply-templates mode="list"/>
        </ol>

        <!-- header answers -->
        <p><img src="http://www.openoffice.org/sharedimages/start_blue_bar.gif" alt=""/>&#160;&#160;<font size="-1"><b>MOST FREQUENTLY ASKED QUESTIONS: ANSWERS</b></font>&#160;&#160;<img  src="http://www.openoffice.org/sharedimages/end_blue_bar.gif" alt=""/></p>

        <!-- list of q+answers -->
        <xsl:apply-templates/>

        <xsl:if test="@maintainer">
            <p><small>FAQ maintained by <a href="mailto:{@maintainer}">
                <xsl:choose>
                    <xsl:when test="@maintainer-name">
                        <xsl:value-of select="@maintainer-name"/>
                    </xsl:when>
                    <xsl:otherwise>
                        <xsl:value-of select="@maintainer"/>
                    </xsl:otherwise>
                </xsl:choose>
            </a>.</small></p>
        </xsl:if>

    </xsl:template>



    <!-- FAQ element (list mode) -->
    <!-- <li><a href="#1">...</a></li> -->
    <xsl:template mode="list" match="faq">
        <li><a href="#{1+count(preceding::faq)}"><xsl:apply-templates select="question"/></a></li>
    </xsl:template>

    <!-- FAQ element (question + answer) -->
    <!-- <ol>
            <a name="1"></a>
            <li value ="1">
                <b>...?</b>
                <p> ... </p>
                <br/><br/>
            </li>
        </ol>
        <a href="main_faq_new.html">Back to main question page</a><br/>
        <a href="#top">Back to top</a>
        <HR ALIGN=left SIZE="1" NOSHADE> 
        <br/>
    -->
    <xsl:template match="faq">
        <ol>
            <a name="{1+count(preceding::faq)}"/>
            <li value="{1+count(preceding::faq)}">
                <b> <xsl:apply-templates select="question"/> </b>
                <xsl:choose>
                    <xsl:when test="answer/p">
                        <xsl:apply-templates select="answer" mode="copy"/>
                    </xsl:when>
                    <xsl:otherwise>
                        <p>
                            <xsl:apply-templates select="answer" mode="copy"/>
                        </p>
                    </xsl:otherwise>
                </xsl:choose>
                <br/>
            </li>
        </ol>

        <a href="#top">Back to top</a>
        <hr align="left" size="1" noshade="noshade"/> 
        <br/>
    </xsl:template>


    <!-- copy mode copies all content -->
    <xsl:template mode="copy" match="@*|node()">
        <xsl:copy>
            <xsl:apply-templates mode="copy" select="@*|node()"/>
        </xsl:copy>
    </xsl:template>

</xsl:stylesheet>
