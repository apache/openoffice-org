#!/usr/bin/perl 

use Plucene::Simple;
use File::Find::Rule;
use Cwd;
use strict;
use Plucene::Plugin::Analyzer::PorterAnalyzer;
use Plucene::Index::Writer;
use XML::LibXML;
use HTML::TreeBuilder;

my $dir = getcwd();

chdir( "../.." );

## GLOBAL CONFIG
my $CONTENT_TAG = "td";

my $writer = Plucene::Index::Writer->new(
                "homepage/plucene/index",
                Plucene::Plugin::Analyzer::PorterAnalyzer->new(),
                1 # Create the index from scratch
        );

#my $index = Plucene::Simple->open( "plucene/index" );

## READ ALL Snippet-FILES
my $parser = new XML::LibXML();
for my $filename (File::Find::Rule->file->name( qr/.+\.snip$/ )->in(".")) 
{
    next if( $filename =~ /^homepage/ );
    
    print "Processing $filename ...\n";

    my $dom = $parser->parse_file($filename);

    my $title = $dom->documentElement()->findvalue("/snippet/question/\@heading");
    my $keywords = "";
    foreach( $dom->documentElement()->findnodes("/snippet/keywords/keyword")  ) { $keywords .= " " . $_->getFirstChild()->getValue() }
    my $question = "";
    foreach( $dom->documentElement()->findnodes("/snippet/question")  ) { $question .= " " . $_->toString()  }
    my $answer   = "";
    foreach( $dom->documentElement()->findnodes("/snippet/answer")  ) { $answer .= " " . $_->toString() }

    my $root = HTML::TreeBuilder->new_from_content($question);
    $question = $root->as_text();
    $root = HTML::TreeBuilder->new_from_content($answer);
    $answer = $root->as_text();
    
    
    my $doc = Plucene::Document->new();
    $doc->add(Plucene::Document::Field->Keyword(filename => $filename));
    $doc->add(Plucene::Document::Field->Text( title => $title ) );
    $doc->add(Plucene::Document::Field->UnIndexed(question => $question ) );
    $doc->add(Plucene::Document::Field->UnIndexed(answer => $answer ) );
    $doc->add(Plucene::Document::Field->UnStored( keywords => $keywords ));
    $doc->add(Plucene::Document::Field->UnStored( content => $question . " " . $answer ));
    
    $writer->add_document($doc);
}

$writer->optimize;
