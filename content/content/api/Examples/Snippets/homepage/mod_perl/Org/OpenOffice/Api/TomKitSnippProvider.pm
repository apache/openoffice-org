package Org::OpenOffice::Api::TomKitSnippProvider;

use Apache2::Const;
use Apache2::RequestIO;
use strict;
use XML::LibXML; 
use Text::VimColor;
use HTML::Entities;
use utf8;

use base qw(Apache2::TomKit::Provider::FileSystemProvider);

sub thandler {
        my $this = shift;
        my $apr  = shift;

        $this->{logger}->debug( 10, "Handler is called" );

        my $xml_string = ${ $this->getFileContent() };

        my $parser = XML::LibXML->new();
        my $xml_doc;

        $xml_string =~ s/{\@link\s+((\w+\.)+)(\w+):(\w+)}/"<idl-reference package=\"".lc($1)."\" name=\"$3\" anker=\"$4\">$1$3.$4<\/idl-reference>"/eg;
        $xml_string =~ s/{\%link\s+((\w+\.)+)(\w+):(\w+)}/"<idl-reference package=\"".lc($1)."\" name=\"$3\" anker=\"$4\">$1$3.$4<\/idl-reference>"/eg;
        $xml_string =~ s/{\@link\s+((\w+\.)+)(\w+)}/"<idl-reference package=\"".lc($1)."\" name=\"$3\">$1$3<\/idl-reference>"/eg;
        $xml_string =~ s/{\%link\s+((\w+\.)+)(\w+)}/"<idl-reference package=\"".lc($1)."\" name=\"$3\">$1$3<\/idl-reference>"/eg;

        my $xml_doc = $parser->parse_string($xml_string);

        foreach( $xml_doc->findnodes( "/snippet/question/listing"  ) ) {
            my $syntax = new Text::VimColor(
                string   => decode_entities($_->firstChild()->toString()),
                filetype => (defined $_->getAttribute("language"))?lc($_->getAttribute("language")):lc( $xml_doc->getDocumentElement()->getAttribute("language") )
            );
            my $vim_xml = $syntax->xml();
            $vim_xml =~ s/{\@see\s+((\w+\.)+)(\w+):(\w+)}/"<idl-reference package=\"".lc($1)."\" name=\"$3\" anker=\"$4\">$1$3.$4<\/idl-reference>"/eg;
            $vim_xml =~ s/{\@seeshort\s+((\w+\.)+)(\w+):(\w+)}/"<idl-reference package=\"".lc($1)."\" name=\"$3\" anker=\"$4\" type=\"short\">$3.$4<\/idl-reference>"/eg;

            $vim_xml =~ s/{\%see\s+((\w+\.)+)(\w+):(\w+)}/"<idl-reference package=\"".lc($1)."\" name=\"$3\" anker=\"$4\">$1$3.$4<\/idl-reference>"/eg;
            $vim_xml =~ s/{\%seeshort\s+((\w+\.)+)(\w+):(\w+)}/"<idl-reference package=\"".lc($1)."\" name=\"$3\" anker=\"$4\" type=\"short\">$3.$4<\/idl-reference>"/eg;

            $vim_xml =~ s/{\@see\s+((\w+\.)+)(\w+)}/"<idl-reference package=\"".lc($1)."\" name=\"$3\">$1$3<\/idl-reference>"/eg;
            $vim_xml =~ s/{\@seeshort\s+((\w+\.)+)(\w+)}/"<idl-reference package=\"".lc($1)."\" name=\"$3\" type=\"short\">$3<\/idl-reference>"/eg;

            $vim_xml =~ s/{\%see\s+((\w+\.)+)(\w+)}/"<idl-reference package=\"".lc($1)."\" name=\"$3\">$1$3<\/idl-reference>"/eg;
            $vim_xml =~ s/{\%seeshort\s+((\w+\.)+)(\w+)}/"<idl-reference package=\"".lc($1)."\" name=\"$3\" type=\"short\">$3<\/idl-reference>"/eg;

            $vim_xml =~ s/{\%see\s+((\w+\.)+)(\w+)\|(\w+)}/"<idl-reference package=\"".lc($1)."\" name=\"$3\" label=\"$4\">$1$3<\/idl-reference>"/eg;
            $vim_xml =~ s/{\%see\s+((\w+\.)+)(\w+)\%(\w+)}/"<idl-reference package=\"".lc($1)."\" name=\"$3\" label=\"$4\">$1$3<\/idl-reference>"/eg;
            $vim_xml =~ s/{\%seeshort\s+((\w+\.)+)(\w+)\|(\w+)}/"<idl-reference package=\"".lc($1)."\" name=\"$3\" label=\"$4\" type=\"short\">$3<\/idl-reference>"/eg;
            $vim_xml =~ s/{\%seeshort\s+((\w+\.)+)(\w+)\%(\w+)}/"<idl-reference package=\"".lc($1)."\" name=\"$3\" label=\"$4\" type=\"short\">$3<\/idl-reference>"/eg;
            #$vim_xml =~ s/{\@external\s+((\w+|\.|:|\/|\?|&|=|;)*)}/<external-link href=\"$1\" \/>/g;
            #$vim_xml =~ s/{\%external\s+((\w+|\.|:|\/|\?|&|=|;)*)}/<external-link href=\"$1\" \/>/g;
            #$vim_xml =~ s/{\@internal\s+((\w+|\.|:|\/|\?|&|=|;)*)}/<internal-link href=\"$1\" \/>/g;
            #$vim_xml =~ s/{\%internal\s+((\w+|\.|:|\/|\?|&|=|;)*)}/<internal-link href=\"$1\" \/>/g;

            my $color_doc = $parser->parse_string( $vim_xml );
            $_->removeChildNodes();
            $_->appendChild( $color_doc->getDocumentElement() );
        }

        my $language;

        foreach( $xml_doc->findnodes( "/snippet/answer/listing"  ) ) {
            if( defined $_->getAttribute("language") ) {
                $language = lc($_->getAttribute("language"))
            } else {
                $language = lc( $xml_doc->getDocumentElement()->getAttribute("language"));
            }

            $language = "xml" if $language eq "xsl";

            my $syntax = new Text::VimColor(
                string   => decode_entities($_->firstChild()->toString()),
                filetype => $language
            );
            my $vim_xml = $syntax->xml();
            $vim_xml =~ s/{\@see\s+((\w+\.)+)(\w+):(\w+)}/"<idl-reference package=\"".lc($1)."\" name=\"$3\" anker=\"$4\">$1$3.$4<\/idl-reference>"/eg;
            $vim_xml =~ s/{\@seeshort\s+((\w+\.)+)(\w+):(\w+)}/"<idl-reference package=\"".lc($1)."\" name=\"$3\" anker=\"$4\" type=\"short\">$3.$4<\/idl-reference>"/eg;

            $vim_xml =~ s/{\%see\s+((\w+\.)+)(\w+):(\w+)}/"<idl-reference package=\"".lc($1)."\" name=\"$3\" anker=\"$4\">$1$3.$4<\/idl-reference>"/eg;
            $vim_xml =~ s/{\%seeshort\s+((\w+\.)+)(\w+):(\w+)}/"<idl-reference package=\"".lc($1)."\" name=\"$3\" anker=\"$4\" type=\"short\">$3.$4<\/idl-reference>"/eg;

            $vim_xml =~ s/{\@see\s+((\w+\.)+)(\w+)}/"<idl-reference package=\"".lc($1)."\" name=\"$3\">$1$3<\/idl-reference>"/eg;
            $vim_xml =~ s/{\@seeshort\s+((\w+\.)+)(\w+)}/"<idl-reference package=\"".lc($1)."\" name=\"$3\" type=\"short\">$3<\/idl-reference>"/eg;

            $vim_xml =~ s/{\%see\s+((\w+\.)+)(\w+)}/"<idl-reference package=\"".lc($1)."\" name=\"$3\">$1$3<\/idl-reference>"/eg;
            $vim_xml =~ s/{\%seeshort\s+((\w+\.)+)(\w+)}/"<idl-reference package=\"".lc($1)."\" name=\"$3\" type=\"short\">$3<\/idl-reference>"/eg;

            $vim_xml =~ s/{\%see\s+((\w+\.)+)(\w+)\|(\w+)}/"<idl-reference package=\"".lc($1)."\" name=\"$3\" label=\"$4\">$1$3<\/idl-reference>"/eg;
            $vim_xml =~ s/{\%see\s+((\w+\.)+)(\w+)\%(\w+)}/"<idl-reference package=\"".lc($1)."\" name=\"$3\" label=\"$4\">$1$3<\/idl-reference>"/eg;
            $vim_xml =~ s/{\%seeshort\s+((\w+\.)+)(\w+)\|(\w+)}/"<idl-reference package=\"".lc($1)."\" name=\"$3\" label=\"$4\" type=\"short\">$3<\/idl-reference>"/eg;
            $vim_xml =~ s/{\%seeshort\s+((\w+\.)+)(\w+)\%(\w+)}/"<idl-reference package=\"".lc($1)."\" name=\"$3\" label=\"$4\" type=\"short\">$3<\/idl-reference>"/eg;

            $vim_xml =~ s/{\@external\s+((\w+|\.|:|\/|\?|&|=|;)*)}/<external-link href=\"$1\" \/>/g;
            $vim_xml =~ s/{\%external\s+((\w+|\.|:|\/|\?|&|=|;)*)}/<external-link href=\"$1\" \/>/g;
            $vim_xml =~ s/{\@internal\s+((\w+|\.|:|\/|\?|&|=|;)*)}/<internal-link href=\"$1\" \/>/g;
            $vim_xml =~ s/{\%internal\s+((\w+|\.|:|\/|\?|&|=|;)*)}/<internal-link href=\"$1\" \/>/g;

            HTML::Entities::encode_numeric( $vim_xml, "\200-\377" );
            my $color_doc = $parser->parse_string( $vim_xml );
            $_->removeChildNodes();
            $_->appendChild( $color_doc->getDocumentElement() );
        }

        $apr->print( $xml_doc->toString() );

        return Apache2::Const::OK;
}

1;
