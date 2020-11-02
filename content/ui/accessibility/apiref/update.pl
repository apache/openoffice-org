#! /usr/bin/perl -w

use strict;

# Update the autodoc documentation of the accessibility API.

my @LocallyModified = ();
my @UnknownFiles = ();

my $CvsCommitPrefix = "cvs commit -m \"updating accessibility documentation\"";

sub get_file_list ()
{
    my ($filename, $status, $revision, $fullname);

    open CMD, "cvs status 2>1 |";
    while (<CMD>)
    {
        if (/^\?(.*)/)
        {
            if ($1 ne "update.pl")
            {
                push @UnknownFiles, $1;
            }
        }
        elsif (/File: (.+?)\s+Status: (.+)/)
        {
            $filename = $1;
            $status = $2;
        }
        elsif (/Repository revision:\s+(.+?)\s+\/cvs\/ui\/www\/accessibility\/apiref\/(.+?),v/)
        {
            $revision = $1;
            $fullname = $2;
            push @LocallyModified, [$fullname, $revision];
        }
    }
    close CMD;

    print "\n";
    print "there are " . ($#UnknownFiles < 0 ? "no" : $#UnknownFiles) . " unknown files\n";
    print "there are " . $#LocallyModified . " locally modified files\n";
}




sub add_unknown_files ()
{
    foreach my $fullname (@UnknownFiles)
    {
        print "adding " . $fullname . "\n";
        system ("cvs add " . $fullname);
        system ($CvsCommitPrefix . " " . $fullname);
    }
}


sub commit_modified_files ()
{
    print "commiting modified files";
    my $command = $CvsCommitPrefix;
    foreach my $filedescriptor (@LocallyModified)
    {
        my $fullname = $filedescriptor->[0];
        print "--> $fullname\n";
#        system ($command . " " . $filedescriptor->[0]);
    }
}

get_file_list ();
#add_unknown_files ();
#commit_modified_files ();
