var myPrefix='box_';
function swapper(item)
{
  for( i=1; i<7; i++)
	{
	  document.getElementById( myPrefix + i ).style.display = 'none';
	}
  var state = document.getElementById( item ).style.display;
  if ( state == 'block' )
  {
	  document.getElementById( item ).style.display = 'none';
	}
  else
	{
	  document.getElementById( item ).style.display = 'block';
	}
}
