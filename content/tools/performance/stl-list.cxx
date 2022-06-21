#include <list>
#include <stdio.h>
#include <sys/time.h>

typedef std::list<int>	list_type;

suseconds_t delete_list( list_type *list, int l_size, bool print )
{
	timeval	start;
	timeval	end;

	gettimeofday( &start, NULL );

	delete list;

	gettimeofday( &end, NULL );

	if ( print )
		fprintf( stderr, "List deletion of %d elements took:  %d s, %d us\n", l_size,
			(end.tv_sec-start.tv_sec), (end.tv_usec-start.tv_usec) );

	return( end.tv_usec-start.tv_usec );
}

suseconds_t new_list( int l_size, bool print, list_type **foo )
{
	int		i;
	timeval	start;
	timeval	end;

	*foo = new list_type;

	gettimeofday( &start, NULL );

	for( i = 0; i < l_size; i++ )
		 (*foo)->push_back( i );

	gettimeofday( &end, NULL );

	if ( print )
		fprintf( stderr, "List creation of %d elements took:  %d s, %d us\n", l_size,
			(end.tv_sec-start.tv_sec), (end.tv_usec-start.tv_usec) );

	return( end.tv_usec-start.tv_usec );
}

suseconds_t remove_elements( list_type *foo, bool front, bool print )
{
	timeval	start;
	timeval	end;
	int		l_size = foo->size();

	if ( front )
	{
		gettimeofday( &start, NULL );
	
		while( !foo->empty() )
			foo->pop_front();

		gettimeofday( &end, NULL );
	}
	else
	{
		gettimeofday( &start, NULL );
	
		while( !foo->empty() )
			foo->pop_back();

		gettimeofday( &end, NULL );
	}

	if ( print )
		fprintf( stderr, "Removal of %d from %s elements took:  %d s, %d us\n", l_size, front ? "front" : "back",
			(end.tv_sec-start.tv_sec), (end.tv_usec-start.tv_usec) );

	delete foo;

	return( end.tv_usec-start.tv_usec );
}

suseconds_t iterate_list( list_type *foo, bool print )
{
	timeval	start;
	timeval	end;
	list_type::iterator iter;
	list_type::iterator iter_end = foo->end();

	gettimeofday( &start, NULL );
	
	for( iter = foo->begin(); iter != iter_end; ++iter );
	{
		int m = *iter;
	}

	gettimeofday( &end, NULL );

	if ( print )
	fprintf( stderr, "Iteration of %d elements took:  %d s, %d us\n", foo->size(),
		(end.tv_sec-start.tv_sec), (end.tv_usec-start.tv_usec) );

	delete foo;

	return( end.tv_usec-start.tv_usec );
}

void test_list( int l_size )
{
	list_type *foo;
	double blah = 0;
	double blah2;
	int	i;

	blah = 0;
	blah2 = 0;
	for ( i = 0; i < 30; i++ )
	{
		blah += new_list( l_size, false, &foo );
		blah2 += delete_list( foo, l_size, false );
	}
	blah = blah / i;
	blah2 = blah2 / i;
	fprintf( stderr, "List creation of %d elements took:  %f us\n", l_size, blah );
	fprintf( stderr, "List deletion of %d elements took:  %f us\n", l_size, blah2 );

	blah = 0;
	for ( i = 0; i < 30; i++ )
	{
		new_list( l_size, false, &foo );
		blah += remove_elements( foo, true, false );
	}
	blah = blah / i;
	fprintf( stderr, "Remove of %d elements from FRONT took:  %f us\n", l_size, blah );

	blah = 0;
	for ( i = 0; i < 30; i++ )
	{
		new_list( l_size, false, &foo );
		blah += remove_elements( foo, false, false );
	}
	blah = blah / i;
	fprintf( stderr, "Remove of %d elements from BACK took:  %f us\n", l_size, blah );

	blah = 0;
	for ( i = 0; i < 30; i++ )
	{
		new_list( l_size, false, &foo );
		blah += iterate_list( foo, false );
	}
	blah = blah / i;
	fprintf( stderr, "Iteration of %d elements took:  %f us\n", l_size, blah );

	fprintf( stderr, "\n" );
}


int main( int argc, char *argv[] )
{
	test_list( 10 );
	test_list( 100 );
	test_list( 1000 );
	test_list( 10000 );

	return 0;
}
