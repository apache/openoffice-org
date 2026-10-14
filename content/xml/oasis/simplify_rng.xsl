<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet
  version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:rng="http://relaxng.org/ns/structure/1.0"
  xmlns="http://relaxng.org/ns/structure/1.0"
  exclude-result-prefixes="#default rng"
>

  <xsl:output method="xml"/>

  <!-- unify type of "table:protection-key" attribute -->
  <xsl:template match="rng:attribute[@name='table:protection-key']/rng:text">
     <ref name="string"/>
  </xsl:template>

  <!-- simplify "form-property-type-and-value-list" -->
  <xsl:template match="rng:define[@name='form-property-type-and-value-list']">
	<define name="form-property-type-and-value-list">
		<attribute name="office:value-type">
			<choice>
				<value>float</value>
				<value>percentage</value>
				<value>currency</value>
				<value>date</value>
				<value>time</value>
				<value>boolean</value>
				<value>string</value>
				<value>void</value>
			</choice>
		</attribute>
		<zeroOrMore>
			<element name="form:list-value">
				<optional>
					<attribute name="office:value">
						<ref name="double"/>
					</attribute>
				</optional>
				<optional>
					<attribute name="office:currency">
						<ref name="string"/>
					</attribute>
				</optional>
				<optional>
					<attribute name="office:date-value">
						<ref name="dateOrDateTime"/>
					</attribute>
				</optional>
				<optional>
					<attribute name="office:time-value">
						<ref name="duration"/>
					</attribute>
				</optional>
				<optional>
					<attribute name="office:boolean-value">
						<ref name="boolean"/>
					</attribute>
				</optional>
				<optional>
					<attribute name="office:string-value">
						<ref name="string"/>
					</attribute>
				</optional>
			</element>
		</zeroOrMore>
	</define>
  </xsl:template>

  <!-- simplify "style-style-content" -->
  <xsl:template match="rng:define[@name='style-style-content']">
  	<xsl:if test=".//rng:value='text'">
		<define name="style-style-content" combine="choice">
			<attribute name="style:family">
				<choice>
					<value>text</value>
					<value>paragraph</value>
					<value>section</value>
					<value>ruby</value>
					<value>table</value>
					<value>table-column</value>
					<value>table-row</value>
					<value>table-cell</value>
					<value>graphic</value>
					<value>presentation</value>
					<value>drawing-page</value>
					<value>chart</value>
				</choice>
			</attribute>
			<optional>
				<ref name="style-table-properties"/>
			</optional>
			<optional>
				<ref name="style-table-column-properties"/>
			</optional>
			<optional>
				<ref name="style-table-row-properties"/>
			</optional>
			<optional>
				<ref name="style-table-cell-properties"/>
			</optional>
			<optional>
				<ref name="style-chart-properties"/>
			</optional>
			<optional>
				<ref name="style-graphic-properties"/>
			</optional>
			<optional>
				<ref name="style-section-properties"/>
			</optional>
			<optional>
				<ref name="style-paragraph-properties"/>
			</optional>
			<optional>
				<ref name="style-text-properties"/>
			</optional>
			<optional>
				<ref name="style-ruby-properties"/>
			</optional>
			<optional>
				<ref name="style-drawing-page-properties"/>
			</optional>
		</define>
	</xsl:if>
  </xsl:template>

  <!-- simplify "table-rows-and-groups" -->
  <xsl:template match="rng:define[@name='table-rows-and-groups']">
	<define name="table-rows-and-groups">
		<oneOrMore>
			<choice>
				<ref name="table-table-row-group"/>
                <ref name="table-table-header-rows"/>
				<ref name="table-table-rows"/>
                <ref name="table-table-row"/>
			</choice>
		</oneOrMore>
	</define>
  </xsl:template>

  <xsl:template match="rng:define[@name='table-rows-no-group']"/>
  <xsl:template match="rng:define[@name='table-rows']"/>

  <!-- simplify "table-columns-and-groups" -->
  <xsl:template match="rng:define[@name='table-columns-and-groups']">
	<define name="table-columns-and-groups">
		<oneOrMore>
			<choice>
				<ref name="table-table-column-group"/>
                <ref name="table-table-header-columns"/>
				<ref name="table-table-columns"/>
                <ref name="table-table-column"/>
			</choice>
		</oneOrMore>
	</define>
  </xsl:template>

  <xsl:template match="rng:define[@name='table-columns-no-group']"/>
  <xsl:template match="rng:define[@name='table-columns']"/>

  <!-- default: copy everything. -->
  <xsl:template match="@*|node()">
    <xsl:copy>
      <xsl:apply-templates select="@*|node()"/>
    </xsl:copy>
  </xsl:template>

</xsl:stylesheet>
