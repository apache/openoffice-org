!#/usr/bin/perl
#---------------------------------------------------------
# This script extracts some data from an OOo bibliographic
# entry. Its command line must contain 2 arguments: the
# file name and the identifier of the biblio entry.
# Note: It's not a real world situation; one should not
# instantiate a document object just for retrieving only
# one element; ooDocument() loads and parses the full
# document, and it's the most costly operation.

use OpenOffice::OODoc;

my ($filename, $identifier) = @ARGV;

                # get a document connector
my $doc = ooDocument(file => $filename)
        or die "Unknown or non-valid OOo file\n";

                # query for the needed biblio field
my $bib = $doc->selectElementByAttribute
                (
                '//text:bibliography-mark',
                'text:identifier',
                $identifier
                )
        or die "Unknown reference\n";

                # extract the properties
my $author = $doc->getAttribute($bib, "text:author");
my $title = $doc->getAttribute($bib, "text:title");
my $publiher = $doc->getAttribute($bib, "text:publisher");
my $year = $doc->getAttribute($bib, "text:year");
my $isbn = $doc->getAttribute($bib, "text:isbn");

                # create the report
print   "Author:    $author\n"          .
        "Title:     $title\n"           .
        "Publisher: $publisher\n"       .
        "Year:      $year\n"            .
        "ISBN:      $isbn\n";

                # that's all
exit;

#---------------------------------------------------------
