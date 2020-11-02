/** The purpose of this class is to open a specified Draw/Impress document and save this
 * file as a SVG file to a specified URL.".
 */

import com.sun.star.bridge.XUnoUrlResolver;
import com.sun.star.lang.XComponent;
import com.sun.star.lang.XMultiComponentFactory;
import com.sun.star.uno.XComponentContext;
import com.sun.star.uno.UnoRuntime;
import com.sun.star.frame.XComponentLoader;
import com.sun.star.frame.XStorable;
import com.sun.star.beans.PropertyValue;
import com.sun.star.beans.XPropertySet;
import com.sun.star.util.XCloseable;
import com.sun.star.document.XFilter;
import com.sun.star.document.XExporter;
import com.sun.star.drawing.XDrawPagesSupplier;
import com.sun.star.drawing.XDrawPages;

public class SVGExportTest
{
    /** The main method of the application.
     * @param args The program needs three arguments:
     * - full file name to open,
     * - full file name to save.
     */
  public static void main(String args[])
  {
    try 
    {
      final String sConnectionString = "uno:socket,host=localhost,port=8100;urp;StarOffice.ServiceManager";

      if( args.length < 2 )
      {
        System.out.println(
			"usage: java -classpath .;<Office path>/program/classes/jurt.jar;" +
			"<Office path>/program/classes/ridl.jar;" +
			"<Office path>/program/classes/sandbox.jar;" +
			"<Office path>/program/classes/unoil.jar;" +
			"<Office path>/program/classes/juh.jar " +
			"SVGTest \"<URL|path to load>\" \"<URL|basepath to save>\"" );
			System.out.println( "\ne.g.:" );
			System.out.println( "java -classpath .;d:/office60/program/classes/jurt.jar;" +
			"d:/office60/program/classes/ridl.jar;" +
			"d:/office60/program/classes/sandbox.jar;" +
			"d:/office60/program/classes/unoil.jar; " +
			"d:/office60/program/classes/juh.jar " +
			"SVGTest \"f:\\Test.ppt\" \"f:\\Test.svg\"" );
        System.exit(1);
      }

      /* Bootstraps a component context with the jurt base components
         registered. Component context to be granted to a component for running.
         Arbitrary values can be retrieved from the context. */
      XComponentContext xcomponentcontext = com.sun.star.comp.helper.Bootstrap.createInitialComponentContext( null );

      /* Gets the service manager instance to be used (or null). This method has
         been added for convenience, because the service manager is a often used
         object. */
      XMultiComponentFactory xmulticomponentfactory = xcomponentcontext.getServiceManager();

      /* Creates an instance of the component UnoUrlResolver which
         supports the services specified by the factory. */
      Object objectUrlResolver = xmulticomponentfactory.createInstanceWithContext( "com.sun.star.bridge.UnoUrlResolver", xcomponentcontext );

      // Create a new url resolver
      XUnoUrlResolver xurlresolver = (XUnoUrlResolver) UnoRuntime.queryInterface( XUnoUrlResolver.class, objectUrlResolver );

      // Resolves an object that is specified as follow:
      // uno:<connection description>;<protocol description>;<initial object name>
      Object objectInitial = xurlresolver.resolve( sConnectionString );

      // Create a service manager from the initial object
      xmulticomponentfactory = (XMultiComponentFactory) UnoRuntime.queryInterface( XMultiComponentFactory.class, objectInitial );

      // Query for the XPropertySet interface.
      XPropertySet xpropertysetMultiComponentFactory = (XPropertySet) UnoRuntime.queryInterface( XPropertySet.class, xmulticomponentfactory );

      // Get the default context from the office server.
      Object objectDefaultContext = xpropertysetMultiComponentFactory.getPropertyValue( "DefaultContext" );

      // Query for the interface XComponentContext.
      xcomponentcontext = (XComponentContext) UnoRuntime.queryInterface( XComponentContext.class, objectDefaultContext );

      /* A desktop environment contains tasks with one or more
         frames in which components can be loaded. Desktop is the
         environment for components which can instanciate within
         frames. */
      XComponentLoader xcomponentloader = (XComponentLoader) UnoRuntime.queryInterface( XComponentLoader.class,
                                            xmulticomponentfactory.createInstanceWithContext(
                                            "com.sun.star.frame.Desktop", xcomponentcontext ) );

      java.io.File sourceFile = new java.io.File(args[0]);
      StringBuffer sLoadUrl = new StringBuffer("file:///");
      sLoadUrl.append(sourceFile.getCanonicalPath().replace('\\', '/'));

      sourceFile = new java.io.File(args[1]);
      StringBuffer sSaveUrl = new StringBuffer("file:///");
      sSaveUrl.append(sourceFile.getCanonicalPath().replace('\\', '/'));

      // set load properties
      PropertyValue[] propertyvalue = new PropertyValue[ 1 ];
      propertyvalue[ 0 ] = new PropertyValue();
      propertyvalue[ 0 ].Name = "Hidden";
      propertyvalue[ 0 ].Value = new Boolean(true);

      // load document
      Object objectDocumentToStore = xcomponentloader.loadComponentFromURL( sLoadUrl.toString(), "_blank", 0, propertyvalue );

      if( objectDocumentToStore != null )
      {
          XComponent            xcomponent = (XComponent) UnoRuntime.queryInterface( XComponent.class, objectDocumentToStore );
          XCloseable            xcloseable = (XCloseable) UnoRuntime.queryInterface( XCloseable.class, objectDocumentToStore );
          XDrawPagesSupplier    xpagessupplier = (XDrawPagesSupplier) UnoRuntime.queryInterface( XDrawPagesSupplier.class, objectDocumentToStore );

          // create filter
          Object                svgfilter = xmulticomponentfactory.createInstanceWithContext( "com.sun.star.document.SVGFilter", xcomponentcontext );
          XFilter               xfilter = (XFilter) UnoRuntime.queryInterface( XFilter.class, svgfilter );
          XExporter             xexporter = (XExporter) UnoRuntime.queryInterface( XExporter.class, svgfilter );

    	  // let filter know the source document
          xexporter.setSourceDocument( xcomponent );

          // do the filtering
          if( xpagessupplier != null )
          {
    	      XDrawPages xdrawpages = xpagessupplier.getDrawPages();

    	      if( xdrawpages != null && xdrawpages.getCount() > 0 )
    	      {
    			  int i;

                  propertyvalue = new PropertyValue[ 2 ];

                  propertyvalue[ 0 ] = new PropertyValue();
                  propertyvalue[ 0 ].Name = "FileName";

                  propertyvalue[ 1 ] = new PropertyValue();
                  propertyvalue[ 1 ].Name = "PagePos";

                  // iterate over all contained pages and export each page into a single file
                  for( i = 0; i < xdrawpages.getCount(); ++i )
    			  {
                      propertyvalue[ 0 ].Value = sSaveUrl.toString().replaceAll( "\\.svg", "_" + Integer.toString( i ) ) + ".svg";
    		          propertyvalue[ 1 ].Value = new Integer( i );
    			  	  xfilter.filter( propertyvalue );
    			  }
              }
          }

          // close document
          if( xcloseable != null )
              xcloseable.close( false );
          else
              xcomponent.dispose();
      }

      System.exit( 0 );
    }
    catch( Exception exception )
    {
      System.err.println( exception );
    }
  }
}
