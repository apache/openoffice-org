# $Id: AxKitSnippProvider.pm,v 1.15 2006/07/11 04:54:58 tomsontom Exp $

package Org::OpenOffice::Api::AxKitSnippProvider;
use strict;
use vars qw/@ISA/;
use Apache::AxKit::Provider::File;
@ISA = ('Apache::AxKit::Provider::File');

our $VERSION = 0.02;

use Apache;
use Apache::Log;
use Apache::Constants qw(HTTP_OK);
use Apache::AxKit::Exception;
use Apache::AxKit::Provider;
use XML::LibXML;
use Text::VimColor;
use AxKit;
use File::Spec;
use Fcntl qw(O_RDONLY LOCK_SH);
use HTML::Entities;
use utf8;

sub get_fh {
#    print STDERR "GETTTING FH!!!!!!!!!!!!!!!!!!\n";
    throw Apache::AxKit::Exception::IO( -text => "Can't get fh for Syntax" );
}

sub get_strref {
    my $self = shift;
    
    AxKit::Debug(4, "Ok lets get the string!!!!");
    
    # Return the XML data if we've already computed it
    return \$$self{xml} if ($self->{xml});

    AxKit::Debug(4, "Getting new parser");
    
    my $parser = XML::LibXML->new();
    my $xml_doc;    
    
    my $filename = AxKit::FromUTF8( $self->{file} );
    
    AxKit::Debug(4, "Filename translated: $filename");
    
    my $fh = Apache->gensym();
    
    
    
    if (sysopen($fh, $filename, O_RDONLY)) {
        AxKit::Debug(4,"Got an FH");
    
        AxKit::Debug(4,"="x1024);
    
        my $xml_string;
    
        {
            local $/;
            $xml_string = <$fh>;
        }
	
        $xml_string =~ s/{\@link\s+((\w+\.)+)(\w+):(\w+)}/"<idl-reference package=\"".lc($1)."\" name=\"$3\" anker=\"$4\">$1$3.$4<\/idl-reference>"/eg;
        $xml_string =~ s/{\%link\s+((\w+\.)+)(\w+):(\w+)}/"<idl-reference package=\"".lc($1)."\" name=\"$3\" anker=\"$4\">$1$3.$4<\/idl-reference>"/eg;
        $xml_string =~ s/{\@link\s+((\w+\.)+)(\w+)}/"<idl-reference package=\"".lc($1)."\" name=\"$3\">$1$3<\/idl-reference>"/eg;
        $xml_string =~ s/{\%link\s+((\w+\.)+)(\w+)}/"<idl-reference package=\"".lc($1)."\" name=\"$3\">$1$3<\/idl-reference>"/eg;
        #$xml_string =~ s/{\@external\s+((\w+|\.|:|\/|\?|&|=|;)*)}/<external-link href=\"$1\" \/>/g;
    	#$xml_string =~ s/{\%external\s+((\w+|\.|:|\/|\?|&|=|;)*)}/<external-link href=\"$1\" \/>/g;
	#$xml_string =~ s/{\@internal\s+((\w+|\.|:|\/|\?|&|=|;)*)}/<internal-link href=\"$1\" \/>/g;
	#$xml_string =~ s/{\%internal\s+((\w+|\.|:|\/|\?|&|=|;)*)}/<internal-link href=\"$1\" \/>/g;
	
        my $xml_doc = $parser->parse_string($xml_string, $self->{apache}->uri()) || throw Apache::AxKit::Exception::Error( -text => "XML::LibXML->parse_string returned nothing!");
    
        AxKit::Debug(4, "File is parsed!!!");
    
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
    
	# print STDERR "====================================================\n";
	# print STDERR $xml_doc->toString() . "\n";
	# print STDERR "====================================================\n";
    
        # Fetch the XML and return it
        $self->{data} = $xml_doc->toString();
        $self->{data} =~ s/>>/>/; # Trim off the > that Text::VimColor always seems to add
        return \$$self{data};
    } else {
        throw Apache::AxKit::Exception::IO( -text => "Can't open '$self->{file}': $!" );
    }
    
}
    
1;
