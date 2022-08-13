#!/usr/bin/perl

# doc-generate.pl V0.1 (20080918)
# Simon A. Wilper

use warnings;
use strict;

use Data::Dumper;
use Template;

sub get_records {
	my( $infile ) = @_;
	my @records;
	$/ = "\n\n";

	open( INFILE, '<', "in/$infile" ) || die( $! );
	while( <INFILE> ) {
		chomp;
		my %record;
		foreach my $line ( split( "\n" ) ) {
			my( $K,$V ) = $line =~ m/^(.+?): (.+)$/;

			if ( !defined($V) ) {
				print STDERR "No value defined: ($infile): $line\n";
			}

			if ( $V =~ m/^(.+)\[(.+)\]$/ ) {
				$record{'authorlink'} = $2;
				$record{$K} = $1;
			} else {
				$record{$K} = $V;
			}
		}
		push @records, \%record;
	}
	close INFILE;

	return \@records;
}

sub main {
	my ( $ttfile ) = @_;
	my $tt = Template->new( {
			INCLUDE_PATH => 'templates/',
		} );

	my $vars = {
		'all'     => get_records( 'all.in' ),
		'writer'  => get_records( 'writer.in' ),
		'calc'    => get_records( 'calc.in' ),
		'impress' => get_records( 'impress.in' ),
		'draw'    => get_records( 'draw.in' ),
		'base'    => get_records( 'base.in' ),
		'math'    => get_records( 'math.in' ),
		'dev'     => get_records( 'developers.in' ),
		'author'  => get_records( 'content-developer.in' ),
	};

	$tt->process( $ttfile, $vars ) ||
		die( $tt->error() . "\n" );
}

if ( @ARGV < 1 ) {
	die( "No TT file given\n" );
}

main( $ARGV[0] );

