#!/usr/bin/perl

use warnings;
use strict;

use LWP::UserAgent;
use XML::LibXML;
use Template;
use Data::Dumper;

my $vars = {
	baseurl => 'http://download.services.openoffice.org/files/localized',
	records => {}
};

my( $ua, $parser, $xc, $tt );

my $records = {};

my $base_url = 'http://download.services.openoffice.org/files/localized';

my %lang_codes_map = (
	'ar'		=> 'Arabisch',
	'ca'		=> 'Katalanisch',
	'zh-cn'		=> 'Chinesisch (vereinfacht)',
	'zh-tw'		=> 'Chinesisch (traditionell)',
	'da'		=> 'D&auml;nisch',
	'nl'		=> 'Niederl&auml;ndisch',
	'en-GB'		=> 'Englisch (Britisch)',
	'en-US'		=> 'Englisch (US)',
	'et'		=> 'Estnisch',
	'fr'		=> 'Franz&ouml;sisch',
	'gl'		=> 'Galicisch',
	'de'		=> 'Deutsch',
	'el'		=> 'Griechisch',
	'ga'		=> 'Irisch',
	'it'		=> 'Italienisch',
	'ja'		=> 'Japanisch',
	'ko'		=> 'Koreanisch',
	'ku'		=> 'Kurdisch',
	'lt'		=> 'Litauisch',
	'mk'		=> 'Mazedonisch',
	'mn'		=> 'Mongolisch',
	'nb'		=> 'Norwegisch (Bokm&aring;l)',
	'nn'		=> 'Norwegisch (Nynorsk)',
	'pl'		=> 'Polnisch',
	'pt'		=> 'Portugiesisch (Europa)',
	'bt-pt'		=> 'Portugiesisch (Brasilien)',
	'ru'		=> 'Russisch',
	'sr'		=> 'Serbisch',
	'sl'		=> 'Slovenisch',
	'es'		=> 'Spanisch',
	'sv'		=> 'Schwedisch',
	'tr'		=> 'T&uuml;rkisch',
	'vi'		=> 'Vietnamesisch'
);

my %langpacks = (
	'windows'	=> 'OOo_[%VERSION%]_Win_x86_langpack_[%LANG%].exe',
	'macosint'	=> 'OOo_[%VERSION%]_MacOS_x86_langpack_[%LANG%].dmg',
	'lin64deb'	=> 'OOo_[%VERSION%]_Linux_x86-64_langpack-deb_[%LANG%].tar.gz',
	'lin64rpm'	=> 'OOo_[%VERSION%]_Linux_x86-64_langpack_[%LANG%].tar.gz',
	'lin32deb'	=> 'OOo_[%VERSION%]_Linux_x86_langpack-deb_[%LANG%].tar.gz',
	'lin32rpm'	=> 'OOo_[%VERSION%]_Linux_x86_langpack_[%LANG%].tar.gz'
);

my %all_platforms = (
	'windows'	=> 'OOo_[%VERSION%]_Win_x86_install_[%LANG%].exe',
	'windowsj'	=> 'OOo_[%VERSION%]_Win_x86_install-wJRE_[%LANG%].exe',
	'lin32rpm'	=> 'OOo_[%VERSION%]_Linux_x86_install-rpm_[%LANG%].tar.gz',
	'lin32rpmj'	=> 'OOo_[%VERSION%]_Linux_x86_install-rpm-wJRE_[%LANG%].tar.gz',
	'lin32deb'	=> 'OOo_[%VERSION%]_Linux_x86_install-deb_[%LANG%].tar.gz',
	'lin64rpm'	=> 'OOo_[%VERSION%]_Linux_x86-64_install-rpm_[%LANG%].tar.gz',
	'lin64rpmj'	=> 'OOo_[%VERSION%]_Linux_x86-64_install-rpm-wJRE_[%LANG%].tar.gz',
	'lin64deb'	=> 'OOo_[%VERSION%]_Linux_x86-64_install-deb_[%LANG%].tar.gz',
	'macosint'	=> 'OOo_[%VERSION%]_MacOS_x86_install_[%LANG%].dmg',
	'macosppc'	=> 'OOo_[%VERSION%]_MacOS_PPC_install_[%LANG%].dmg',
	'solx86'	=> 'OOo_[%VERSION%]_Solaris_x86_install_[%LANG%].tar.gz',
	'solx86j'	=> 'OOo_[%VERSION%]_Solaris_x86_install-wJRE_[%LANG%].tar.gz',
	'solsparc'	=> 'OOo_[%VERSION%]_SolarisSparc_install_[%LANG%].tar.gz',
	'solsparcj'	=> 'OOo_[%VERSION%]_SolarisSparc_install-wJRE_[%LANG%].tar.gz',
);

sub initialize {
	$ua		= LWP::UserAgent->new( agent => 'OOoSnooper' );
	$parser	= XML::LibXML->new;
	$xc		= XML::LibXML::XPathContext->new;
	$tt		= Template->new;

}

sub extract_links {
	my ( $url ) = @_;

	my $content = $ua->get( $url )->content;
	my $doc = $parser->parse_html_string( $content );
	$xc->setContextNode( $doc->documentElement() );

	my @items = $xc->findnodes( '//a' );

	return \@items;
}

sub run {
	initialize;

	my $items = extract_links( $base_url );

	# -- Fuer Debugging-Zwecke:
	# Nur Sprachen verarbeiten bis $limit
	#my $limit = 15;
	#my $count = 0;

	foreach my $item ( @{$items} ) {

		# -- Debugging: Loop verlassen, wenn Limit erreicht
		#if ( ++$count == $limit ) { last; }

		my $href = $item->getAttribute("href");

		# nur nach Laendercodes im Link suchen
		if ( $href =~ /^([A-z]{2}(?:-[A-z]{2})?)\/$/ ) {
			my $lang = $1;
			my $langobj = {};

			# wenn die Sprache im language code mapping table (LCMT) gefunden wurde
			if ( grep( /^$lang$/, keys(%lang_codes_map) ) > 0 ) {
				#print "$lang found: " . $lang_codes_map{$lang}, "\n";

				$langobj->{lang} = $lang_codes_map{$lang};

				# OOo-Versionen
				my $versions = extract_links( "$base_url/$lang" );

				my @ooo_versions;
				foreach my $version ( @{$versions} ) {
					if ( $version->getAttribute("href") =~ /^(\d\.\d\.\d)\/$/ ) {
						push @ooo_versions, $1;
					}
				} # /foreach

				# Wenn mindestens eine Version gefunden wurde
				if ( @ooo_versions > 0 ) {

					# letztes Element im Array ist die neueste Version
					my $latest_version = $ooo_versions[$#ooo_versions];
					#print "\tlatest version: " . $latest_version . " - checking platform availability\n";
					
					$langobj->{latest} = $latest_version;

					my $available_platforms = extract_links( "$base_url/$lang/$latest_version" );

					my @platforms;
					foreach my $available_platform ( @{$available_platforms} ) {
						my $href = $available_platform->getAttribute("href");
						if ( $href =~ /^OOo/ ) {
							push @platforms, $href;
						}
					}


					my $version_map = {};

					foreach my $platform_key ( keys(%all_platforms) ) {
						my $P = $all_platforms{$platform_key};

						$P =~ s/\[%VERSION%\]/$latest_version/;
						$P =~ s/\[%LANG%\]/$lang/;

						if ( grep( /$P/, @platforms ) > 0 ) {
							#print "\t\t$P\n";
							$version_map->{$platform_key} = $P;
						}
					}

					my $langpack_map = {};

					foreach my $langpack_key ( keys(%langpacks) ) {
						my $L = $langpacks{$langpack_key};

						$L =~ s/\[%VERSION%\]/$latest_version/;
						$L =~ s/\[%LANG%\]/$lang/;

						if ( grep( /$L/, @platforms ) > 0 ) {
							$langpack_map->{$langpack_key} = $L;
						}
					}

					$langobj->{versions} = $version_map;
					$langobj->{langpacks} = $langpack_map;
					$records->{$lang} = $langobj;
					print "\t $lang\n";

				} else {
					print "\t no versions available\n";
				}

			} # /if grep lang

		} # /if href
		
	} # /foreach items

} # /sub run

run;

my @record_keys_sorted = sort( keys( %{$records} ) );
$vars->{keys_sorted} = \@record_keys_sorted;
$vars->{records} = $records;
#print Dumper( $vars );

$tt->process( 'other-rel.tt', $vars, 'other.html' );

print "Done\n\n";

