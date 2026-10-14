<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet
  version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:o-office="http://openoffice.org/2000/office"
  xmlns:office="urn:oasis:names:tc:openoffice:xmlns:office:1.0" 
  xmlns:o-meta="http://openoffice.org/2000/meta" 
  xmlns:meta="urn:oasis:names:tc:openoffice:xmlns:meta:1.0" 
  xmlns:o-style="http://openoffice.org/2000/style" 
  xmlns:style="urn:oasis:names:tc:openoffice:xmlns:style:1.0" 
  xmlns:o-script="http://openoffice.org/2000/script" 
  xmlns:script="urn:oasis:names:tc:openoffice:xmlns:script:1.0" 
  xmlns:o-form="http://openoffice.org/2000/form" 
  xmlns:form="urn:oasis:names:tc:openoffice:xmlns:form:1.0" 
  xmlns:o-number="http://openoffice.org/2000/datastyle" 
  xmlns:number="urn:oasis:names:tc:openoffice:xmlns:datastyle:1.0" 
  xmlns:o-config="http://openoffice.org/2001/config" 
  xmlns:config="urn:oasis:names:tc:openoffice:xmlns:config:1.0" 
  xmlns:o-text="http://openoffice.org/2000/text" 
  xmlns:text="urn:oasis:names:tc:openoffice:xmlns:text:1.0" 
  xmlns:o-table="http://openoffice.org/2000/table" 
  xmlns:table="urn:oasis:names:tc:openoffice:xmlns:table:1.0" 
  xmlns:o-draw="http://openoffice.org/2000/drawing" 
  xmlns:draw="urn:oasis:names:tc:openoffice:xmlns:drawing:1.0" 
  xmlns:o-presentation="http://openoffice.org/2000/presentation" 
  xmlns:presentation="urn:oasis:names:tc:openoffice:xmlns:presentation:1.0" 
  xmlns:o-dr3d="http://openoffice.org/2000/dr3d" 
  xmlns:dr3d="urn:oasis:names:tc:openoffice:xmlns:dr3d:1.0" 
  xmlns:o-chart="http://openoffice.org/2000/charting" 
  xmlns:chart="urn:oasis:names:tc:openoffice:xmlns:charting:1.0" 
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:fo="http://www.w3.org/1999/XSL/Format"
  xmlns:svg="http://www.w3.org/2000/svg"
  exclude-result-prefixes="o-office o-meta o-style o-config o-table o-text"
>


  <xsl:output method="xml"/>

  <!-- default: copy everything. -->
  <xsl:template match="o-office:*">
    <xsl:element name="office:{local-name(.)}">
      <xsl:apply-templates select="@*|node()"/>
    </xsl:element>
  </xsl:template>
  <xsl:template match="@o-office:*">
    <xsl:attribute name="office:{local-name(.)}">
      <xsl:value-of select="."/>
    </xsl:attribute>
  </xsl:template>

  <xsl:template match="o-meta:*">
    <xsl:element name="meta:{local-name(.)}">
      <xsl:apply-templates select="@*|node()"/>
    </xsl:element>
  </xsl:template>
  <xsl:template match="@o-meta:*">
    <xsl:attribute name="meta:{local-name(.)}">
      <xsl:value-of select="."/>
    </xsl:attribute>
  </xsl:template>

  <xsl:template match="o-style:*">
    <xsl:element name="style:{local-name(.)}">
      <xsl:apply-templates select="@*|node()"/>
    </xsl:element>
  </xsl:template>
  <xsl:template match="@o-style:*">
    <xsl:attribute name="style:{local-name(.)}">
      <xsl:value-of select="."/>
    </xsl:attribute>
  </xsl:template>

  <xsl:template match="o-script:*">
    <xsl:element name="script:{local-name(.)}">
      <xsl:apply-templates select="@*|node()"/>
    </xsl:element>
  </xsl:template>
  <xsl:template match="@o-script:*">
    <xsl:attribute name="script:{local-name(.)}">
      <xsl:value-of select="."/>
    </xsl:attribute>
  </xsl:template>

  <xsl:template match="o-form:*">
    <xsl:element name="form:{local-name(.)}">
      <xsl:apply-templates select="@*|node()"/>
    </xsl:element>
  </xsl:template>
  <xsl:template match="@o-form:*">
    <xsl:attribute name="form:{local-name(.)}">
      <xsl:value-of select="."/>
    </xsl:attribute>
  </xsl:template>

  <xsl:template match="o-number:*">
    <xsl:element name="number:{local-name(.)}">
      <xsl:apply-templates select="@*|node()"/>
    </xsl:element>
  </xsl:template>
  <xsl:template match="@o-number:*">
    <xsl:attribute name="number:{local-name(.)}">
      <xsl:value-of select="."/>
    </xsl:attribute>
  </xsl:template>

  <xsl:template match="o-config:*">
    <xsl:element name="config:{local-name(.)}">
      <xsl:apply-templates select="@*|node()"/>
    </xsl:element>
  </xsl:template>
  <xsl:template match="@o-config:*">
    <xsl:attribute name="config:{local-name(.)}">
      <xsl:value-of select="."/>
    </xsl:attribute>
  </xsl:template>

  <xsl:template match="o-text:*">
    <xsl:element name="text:{local-name(.)}">
      <xsl:apply-templates select="@*|node()"/>
    </xsl:element>
  </xsl:template>
  <xsl:template match="@o-text:*">
    <xsl:attribute name="text:{local-name(.)}">
      <xsl:value-of select="."/>
    </xsl:attribute>
  </xsl:template>

  <xsl:template match="o-table:*">
    <xsl:element name="table:{local-name(.)}">
      <xsl:apply-templates select="@*|node()"/>
    </xsl:element>
  </xsl:template>
  <xsl:template match="@o-table:*">
    <xsl:attribute name="table:{local-name(.)}">
      <xsl:value-of select="."/>
    </xsl:attribute>
  </xsl:template>

  <xsl:template match="o-draw:*">
    <xsl:element name="draw:{local-name(.)}">
      <xsl:apply-templates select="@*|node()"/>
    </xsl:element>
  </xsl:template>
  <xsl:template match="@o-draw:*">
    <xsl:attribute name="draw:{local-name(.)}">
      <xsl:value-of select="."/>
    </xsl:attribute>
  </xsl:template>

  <xsl:template match="o-presentation:*">
    <xsl:element name="presentation:{local-name(.)}">
      <xsl:apply-templates select="@*|node()"/>
    </xsl:element>
  </xsl:template>
  <xsl:template match="@o-presentation:*">
    <xsl:attribute name="presentation:{local-name(.)}">
      <xsl:value-of select="."/>
    </xsl:attribute>
  </xsl:template>

  <xsl:template match="o-dr3d:*">
    <xsl:element name="dr3d:{local-name(.)}">
      <xsl:apply-templates select="@*|node()"/>
    </xsl:element>
  </xsl:template>
  <xsl:template match="@o-dr3d:*">
    <xsl:attribute name="dr3d:{local-name(.)}">
      <xsl:value-of select="."/>
    </xsl:attribute>
  </xsl:template>

  <xsl:template match="o-chart:*">
    <xsl:element name="chart:{local-name(.)}">
      <xsl:apply-templates select="@*|node()"/>
    </xsl:element>
  </xsl:template>
  <xsl:template match="@o-chart:*">
    <xsl:attribute name="chart:{local-name(.)}">
      <xsl:value-of select="."/>
    </xsl:attribute>
  </xsl:template>

  <xsl:template match="o-draw:*">
    <xsl:element name="draw:{local-name(.)}">
      <xsl:apply-templates select="@*|node()"/>
    </xsl:element>
  </xsl:template>
  <xsl:template match="@o-draw:*">
    <xsl:attribute name="draw:{local-name(.)}">
      <xsl:value-of select="."/>
    </xsl:attribute>
  </xsl:template>

  <xsl:template match="dc:*">
    <xsl:element name="dc:{local-name(.)}">
      <xsl:apply-templates select="@*|node()"/>
    </xsl:element>
  </xsl:template>

  <xsl:template match="@*|node()">
    <xsl:copy>
      <xsl:apply-templates select="@*|node()"/>
    </xsl:copy>
  </xsl:template>

  <!-- also introduce a copy mode -->
  <xsl:template mode="copy" match="@*|node()">
    <xsl:copy>
      <xsl:apply-templates select="@*|node()"/>
    </xsl:copy>
  </xsl:template>


  <!-- uuh, that was easy. Now we only need to process all changes... -->



  <!-- #1: add 'genre' elements instead of office:class -->
  <xsl:template match="o-office:body">
    <office:body>
      <xsl:choose>

        <xsl:when test="/node()[@o-office:class='text']">
          <office:text><xsl:apply-templates/></office:text>
        </xsl:when>

        <xsl:when test="/node()[@o-office:class='text-global']">
          <office:text text:global="true"><xsl:apply-templates/></office:text>
        </xsl:when>

        <xsl:when test="/node()[@o-office:class='drawing']">
          <office:drawing><xsl:apply-templates/></office:drawing>
        </xsl:when>

        <xsl:when test="/node()[@o-office:class='presentation']">
          <office:presentation><xsl:apply-templates/></office:presentation>
        </xsl:when>

        <xsl:when test="/node()[@o-office:class='spreadsheet']">
          <office:spreadsheet>
            <xsl:apply-templates select="@table:structure-protected" 
                                 mode="copy"/>  <!-- cf. #3 -->
            <xsl:apply-templates/>
          </office:spreadsheet>
        </xsl:when>

        <xsl:when test="/node()[@o-office:class='chart']">
          <office:chart><xsl:apply-templates/></office:chart>
        </xsl:when>

        <xsl:otherwise>
          <xsl:message>No known office:body/@office:class found</xsl:message>
        </xsl:otherwise>

      </xsl:choose>
    </office:body>
  </xsl:template>
  <xsl:template match="@o-office:class"/>

  <!-- #2: office:document-settings/office:settings optional: no transform -->

  <!-- #3: move table:structure-protected attribute from body to 'genre' -->
  <xsl:template match="o-office:body/@o-table:structure-protected"/>

  <!-- #4: meta:keywords removed; multiple keywords may occur -->
  <xsl:template match="o-meta:keywords">
    <xsl:apply-templates/>
  </xsl:template>
    
  <!-- #5: replace ordered + unordered lists by lists -->
  <xsl:template match="o-text:ordered-list|o-text:unordered-list">
    <text:list>
      <xsl:apply-templates select="*|@*|text()"/>
    </text:list>
  </xsl:template>

  <!-- #6: rename tab-stop to tab -->
  <xsl:template match="o-text:tab-stop">
    <text:tab><xsl:apply-templates select="@*"/></text:tab>
  </xsl:template>

  <!-- #7: new numbered-para element: no transform necessary -->

  <!-- #8: move redline protection-key to app-specific settings -->
  <xsl:template match="o-text:tracked-changes/@o-text:protection-key"/>

  <xsl:template match="o-config:config-item-set[@config:name='configuration-settings']">
    <config:config-item-set>
      <xsl:apply-templates select="@*"/>
      <xsl:apply-templates/>
      <xsl:if test="/o-office:document/o-office:body/o-text:tracked-changes/@o-text:protection-key">
        <config:config-item 
          config:name="ChangesProtectionKey" 
          config:type="string">
          <xsl:value-of select="/o-office:document/o-office:body/o-text:tracked-changes/@o-text:protection-key"/>
        </config:config-item>
      </xsl:if>
    </config:config-item-set>
  </xsl:template>

  <!-- #9: replace footnote/endnotes with generic note concept -->
  <xsl:template match="o-text:footnote|o-text:endnote">
    <text:note text:note-class="{local-name(.)}">
      <xsl:apply-templates select="*|@*"/>
    </text:note>
  </xsl:template>
  <xsl:template match="o-text:footnote-body|o-text:endnote-body">
    <text:o-note-body>
      <xsl:apply-templates/>
    </text:o-note-body>
  </xsl:template>
  <xsl:template match="o-text:footnote-citation|o-text:endnote-citation">
    <text:o-note-citation>
      <xsl:apply-templates/>
    </text:o-note-citation>
  </xsl:template>
  <xsl:template match="o-text:footnotes-configuration|o-text:endnotes-configuration">
    <text:notes-configuration text:note-class="{substring-before(local-name(.),'s-')}">
      <xsl:apply-templates select="*|@*"/>
    </text:notes-configuration>
  </xsl:template>
  <xsl:template match="o-text:footnote-ref|o-text:endnote-ref">
    <text:note-ref>
      <xsl:apply-templates/>
    </text:note-ref>
  </xsl:template>

  <!-- #10: replace subtable element with attribute -->
  <xsl:template match="o-table:sub-table">
    <table:table table:is-sub-table="true">
      <xsl:apply-templates select="*|@*"/>
    </table:table>
  </xsl:template>

  <!-- #11: replace text:level with text:outline-level -->
  <xsl:template match="o-text:h/@o-text:level">
    <xsl:attribute name="text:outline-level">
      <xsl:value-of select="."/>
    </xsl:attribute>
  </xsl:template>

  <!-- #12: replace *.value-type and *:value with office:*  -->
  <xsl:template match="@o-text:value-type|o-table:*[local-name(.) != 'null-date']/@o-table:value-type">
    <xsl:attribute name="office:value-type">
      <xsl:value-of select="."/>
    </xsl:attribute>
  </xsl:template>

  <xsl:template match="o-text:*[local-name(.) != 'database-row-number']/@o-text:value[local-name(.) != 'filter-condition']|@o-table:value">
    <xsl:attribute name="office:value">
      <xsl:value-of select="."/>
    </xsl:attribute>
  </xsl:template>

  <xsl:template match="o-text:*[local-name(.) != 'page-continuation' and local-name(.) != 'hidden-text' and not(contains(local-name(.), 'mark'))]/@o-text:string-value|@o-table:string-value">
    <xsl:attribute name="office:string-value">
      <xsl:value-of select="."/>
    </xsl:attribute>
  </xsl:template>

  <xsl:template match="o-text:*[not(contains(local-name(.), 'date'))]/@o-text:date-value|o-table:*[local-name(.) != 'null-date']/@o-table:date-value">
    <xsl:attribute name="office:date-value">
      <xsl:value-of select="."/>
    </xsl:attribute>
  </xsl:template>

  <xsl:template match="o-text:*[not(contains(local-name(.), 'time'))]/@o-text:time-value|@o-table:time-value">
    <xsl:attribute name="office:time-value">
      <xsl:value-of select="."/>
    </xsl:attribute>
  </xsl:template>

  <!-- #13: value-type="float" without value -->
  <xsl:template match="o-table:table-cell[@o-table:value-type='float' and not(@o-table:value)]">
    <table:table-cell office:value-type="string">
      <xsl:apply-templates select="*|@*[local-name(.) != 'value-type']"/>
    </table:table-cell>
  </xsl:template>

  <!-- #14: text:table-of-content-source/@text:outline-level="none" -->
  <xsl:template match="o-text:table-of-content-source/@o-text:use-outline-level"/>
  <xsl:template match="o-text:table-of-content-source/@o-text:outline-level">
    <xsl:choose>
      <xsl:when test="../@o-text:use-outline-level[.='false']">
        <xsl:attribute name="text:outline-level">none</xsl:attribute>
      </xsl:when>
      <xsl:otherwise>
        <xsl:copy/>
      </xsl:otherwise>
    </xsl:choose>
  </xsl:template>

  <!-- #15: <text:h text:restart-numbering=".." text:start-value=".."  -->
  <!-- no transform necessary -->

  <!-- #16: office:change-info uses office:meta -->
  <!-- TODO: determine if format of date values must be changed -->
  <xsl:template match="o-office:change-info">
    <office:change-info>
      <office:meta>
        <dc:creator><xsl:value-of select="@o-office:chg-author"/></dc:creator>
        <dc:date><xsl:value-of select="@o-office:chg-date-time"/></dc:date>
      </office:meta>
    </office:change-info>
  </xsl:template>

  <!-- #17: replace text:merge-last-paragraph with new encoding -->
  <!-- TODO: here, only the flag is deleted -->
  <xsl:template match="o-text:merge-last-paragraph"/>

  <!-- #18: replace index-entry-chapter-number -->
  <xsl:template match="o-text:index-entry-chapter-number">
    <text:index-entry-chapter text:display="number">
      <xsl:apply-templates select="node()|@*"/>
    </text:index-entry-chapter>
  </xsl:template>

  <!-- #19: properties -->
  <xsl:template match="o-style:style[@o-style:family='text']/o-style:properties|o-style:default-style[@o-style:family='text']/o-style:properties">
  	<style:text-properties>
	  <xsl:apply-templates select="node()|@*" mode="text-props"/>
	</style:text-properties>
  </xsl:template>

  <xsl:template match="o-style:style[@o-style:family='paragraph']/o-style:properties|o-style:default-style[@o-style:family='paragraph']/o-style:properties">
  	<style:paragraph-properties>
	  <xsl:apply-templates select="node()|@*" mode="para-props"/>
	</style:paragraph-properties>
  	<style:text-properties>
	  <xsl:apply-templates select="node()|@*" mode="text-props"/>
	</style:text-properties>
  </xsl:template>

  <xsl:template match="o-style:style[@o-style:family='graphics']/o-style:properties|o-style:default-style[@o-style:family='graphics']/o-style:properties">
  	<style:graphic-properties>
	  <xsl:apply-templates select="node()|@*" mode="graphic-props"/>
	</style:graphic-properties>
  	<style:paragraph-properties>
	  <xsl:apply-templates select="node()|@*" mode="para-props"/>
	</style:paragraph-properties>
  	<style:text-properties>
	  <xsl:apply-templates select="node()|@*" mode="text-props"/>
	</style:text-properties>
  </xsl:template>
  	
  <!-- text properties -->
  <xsl:template match="o-text:*" mode="text-props">
    <xsl:element name="text:{local-name(.)}">
      <xsl:apply-templates select="@*|node()"/>
    </xsl:element>
  </xsl:template>
  <xsl:template match="@o-text:*" mode="text-props">
    <xsl:attribute name="text:{local-name(.)}">
      <xsl:value-of select="."/>
    </xsl:attribute>
  </xsl:template>
  <xsl:template match="o-style:*" mode="text-props">
    <xsl:element name="style:{local-name(.)}">
      <xsl:apply-templates select="@*|node()"/>
    </xsl:element>
  </xsl:template>
  <xsl:template match="@o-style:*" mode="text-props">
    <xsl:attribute name="style:{local-name(.)}">
      <xsl:value-of select="."/>
    </xsl:attribute>
  </xsl:template>
  <xsl:template match="@fo:*" mode="text-props">
  	<xsl:copy/>
  </xsl:template>
  <xsl:template match="text()" mode="text-props">
  	<copy/>
  </xsl:template>
  <xsl:template match="node()|@*" mode="text-props"/>

  <!-- paragraph properties -->
  <xsl:template match="o-text:*" mode="para-props">
    <xsl:element name="text:{local-name(.)}">
      <xsl:apply-templates select="@*|node()"/>
    </xsl:element>
  </xsl:template>
  <xsl:template match="@o-text:*" mode="para-props">
    <xsl:attribute name="text:{local-name(.)}">
      <xsl:value-of select="."/>
    </xsl:attribute>
  </xsl:template>
  <xsl:template match="o-style:*" mode="para-props">
    <xsl:element name="style:{local-name(.)}">
      <xsl:apply-templates select="@*|node()"/>
    </xsl:element>
  </xsl:template>
  <xsl:template match="@o-style:*" mode="para-props">
    <xsl:attribute name="style:{local-name(.)}">
      <xsl:value-of select="."/>
    </xsl:attribute>
  </xsl:template>
  <xsl:template match="@fo:*" mode="para-props">
  	<xsl:copy/>
  </xsl:template>
  <xsl:template match="node()|@*" mode="para-props"/>

  <!-- graphic properties -->
  <xsl:template match="@o-text:*" mode="graphic-props">
  	<xsl:if test="starts-with(local-name(.), 'animation')">
		<xsl:attribute name="text:{local-name(.)}">
		  <xsl:value-of select="."/>
		</xsl:attribute>
	</xsl:if>
  </xsl:template>
  <xsl:template match="o-draw:*" mode="graphic-props">
    <xsl:element name="draw:{local-name(.)}">
      <xsl:apply-templates select="@*|node()"/>
    </xsl:element>
  </xsl:template>
  <xsl:template match="@o-draw:*" mode="graphic-props">
    <xsl:attribute name="draw:{local-name(.)}">
      <xsl:value-of select="."/>
    </xsl:attribute>
  </xsl:template>
  <xsl:template match="o-dr3d:*" mode="graphic-props">
    <xsl:element name="dr3d:{local-name(.)}">
      <xsl:apply-templates select="@*|node()"/>
    </xsl:element>
  </xsl:template>
  <xsl:template match="@o-dr3d:*" mode="graphic-props">
    <xsl:attribute name="dr3d:{local-name(.)}">
      <xsl:value-of select="."/>
    </xsl:attribute>
  </xsl:template>
  <xsl:template match="@svg:*" mode="graphic-props">
  	<xsl:copy/>
  </xsl:template>
  <xsl:template match="node()|@*" mode="graphic-props"/>

  <!-- #20: page-master becomes page layout -->
  <xsl:template match="o-style:page-master">
  	<style:page-layout>
      <xsl:apply-templates select="*|@*"/>
  	</style:page-layout>
  </xsl:template>
  <xsl:template match="@o-style:page-master-name">
    <xsl:attribute name="style:page-layout-name">
      <xsl:value-of select="."/>
    </xsl:attribute>
  </xsl:template>

</xsl:stylesheet>
