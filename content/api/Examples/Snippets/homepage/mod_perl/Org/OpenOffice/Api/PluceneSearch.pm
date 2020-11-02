package Org::OpenOffice::Api::PluceneSearch;

use strict;
use Apache;
use Apache::Request();
use Apache::Constants ':common';

use Plucene::QueryParser;
use Plucene::Analysis::SimpleAnalyzer;
use Plucene::Search::IndexSearcher;
use Plucene::Search::HitCollector;


my %Config = (
    PluceneIndex                => "/usr/bestsolution/projects/codesnippets.openoffice.org/www/Examples/Snippets/homepage/plucene/index"
);

sub handler {
    my $r   = shift;
    my $apr = Apache::Request->new( $r );        
    my $rc  = Apache::OK;
    my $index;
    my $page;
    my $results_content;
    my $key;
    my $val;
            
    $r->content_type( "text/html" );

    &printPageStart($apr->param( "searchterm" ),$apr->param("searchfield") );
    
    if( defined $apr->param( "searchterm" ) && $Config{PluceneIndex} ne "" ) {
        my @docs = &getRankedDocs( $Config{PluceneIndex}, $apr );
	foreach(@docs) {
	   print "<div id='axial' class='h4'><h4><a href='#' onClick=\"opener.location.href='/".$_->{doc}->get("filename")->string."';return false;\">".$_->{doc}->get("title")->string()."</a> (Rating: " . $_->{score} . ")</h4>";

	   print "
<table border='0' cellspacing='2' cellpadding='3'>
<tr>
    <th>Question</th>
    <td>".substr($_->{doc}->get("question")->string(),0,200)." ... </td>
</tr>
<tr>
    <th>Answer</th>
    <td>".substr($_->{doc}->get("answer")->string(),0,200)." ...</td>
</tr>
</table>
";
	   print "</div>";
	}
    }  
    
    &printPageEnd();
    
    return $rc;
}

sub printPageStart {
	my $searchterm = shift;
	my $searchfield = shift;
print <<EOT;
<html xmlns:syn="http://ns.laxan.com/text-vimcolor/1">
<head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <style type="text/css">
            \@import "http://api.openoffice.org/branding/css/tigris.css";
            \@import "http://api.openoffice.org/branding/css/inst.css";
            \@import "/css/codesnippet.css";
        </style>
        <link rel="stylesheet" type="text/css" href="http://api.openoffice.org/branding/css/print.css" media="print">
        <title>OpenOffice.org API - Code Snippet Base Search</title>
        <meta http-equiv="Content-Style-Type" content="text/css">
        <meta name="version" content="2.6.2.3">
        <meta name="keywords" content="OpenOffice.org, Open Office, OpenOffice, openoffice, StarOffice, Star Office, OOo, ooo, code snippets, help code, FAQ, HowTo">
</head>
<body marginwidth="0" marginheight="0" class="composite">
<table border="0" cellspacing="0" cellpadding="4" width="100%" id="main" height="85%"><tr valign="top">
<td id="bodycol">
<div id="projecthome" class="app">
<div id="axial" class="h3">
    <h3>Search</h3>
    <div class="axial">
    <form>
    <table border="0" cellspacing="2" cellpadding="3">
    <tr>
        <th>Searchterm</th>
        <td><input type="text" name="searchterm" value="$searchterm" size="50" /></td>
    </tr>

   <tr>
        <th>Searchcontent</th>
EOT
	if( $searchfield eq "keywords"  ) {
        print '<td><select size="1" name="searchfield"><option value="keywords" SELECTED >only keyword</option><option value="content">all</option></select></td>'
	} else {
	print '<td><select size="1" name="searchfield"><option value="keywords">only keyword</option><option value="content" SELECTED>all</option></select></td>'
	}
print <<EOT;
    </tr>
    
    <tr>
    	<th>Action</th>
	<td><input type="submit"/></td>
    </tr>
</table>
</form>
</div>
<div id="axial" class="h3">
    <h3>Results</h3>
EOT
}


sub printPageEnd {
print <<EOT;
</div>
</div>
</body>
</html>
EOT

}

sub getRankedDocs {
    my $index_file = shift;
    my $apr        = shift;
    
    my $parser = Plucene::QueryParser->new({
        analyzer => Plucene::Analysis::SimpleAnalyzer->new(),
        default  => $apr->param("searchfield") # Default field for non-specified queries
    });

    my $query = $parser->parse($apr->param('searchterm')."*");

    my $searcher = Plucene::Search::IndexSearcher->new( $index_file );

    my @docs;
    my $hc = Plucene::Search::HitCollector->new(collect => sub {
            my ($self, $doc, $score)= @_;
            push @docs, { doc => $searcher->doc($doc), score => sprintf("%.2f",$score*100) };
    });
    
    eval {
        $searcher->search_hc($query, $hc);
    };
    
    return reverse sort sortbyscore @docs;
}

sub sortbyscore {
    return $a->{score} <=> $b->{score};
}


1;
