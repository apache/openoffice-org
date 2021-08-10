import uno
import unohelper
from com.sun.star.awt import XActionListener

class MyActionListener( unohelper.Base, XActionListener ):
    def __init__(self, labelControl, prefix ):
        self.nCount = 0
        self.labelControl = labelControl
        self.prefix = prefix
        
    def actionPerformed(self, actionEvent):
        # increase click counter 
        self.nCount = self.nCount + 1;
        self.labelControl.setText( self.prefix + str( self.nCount ) )

# 'translated' from the developer's guide chapter 11.6
def createDialog():
    """Opens a dialog with a push button and a label, clicking the button increases the label counter."""
    try:
        ctx = uno.getComponentContext()
        smgr = ctx.ServiceManager

        # create the dialog model and set the properties 
        dialogModel = smgr.createInstanceWithContext( 
            "com.sun.star.awt.UnoControlDialogModel", ctx)

        dialogModel.PositionX = 100
        dialogModel.PositionY = 100
        dialogModel.Width = 150 
        dialogModel.Height = 100
        dialogModel.Title = "Runtime Dialog Demo"

        # create the button model and set the properties 
        buttonModel = dialogModel.createInstance( 
            "com.sun.star.awt.UnoControlButtonModel" )

        buttonModel.PositionX = 50
        buttonModel.PositionY  = 30 
        buttonModel.Width = 50; 
        buttonModel.Height = 14; 
        buttonModel.Name = "myButtonName"; 
        buttonModel.TabIndex = 0;         
        buttonModel.Label = "Click Me"; 

        # create the label model and set the properties 
        labelModel = dialogModel.createInstance( 
            "com.sun.star.awt.UnoControlFixedTextModel" ); 

        labelModel.PositionX = 40 
        labelModel.PositionY = 60 
        labelModel.Width  = 100 
        labelModel.Height = 14 
        labelModel.Name = "myLabelName" 
        labelModel.TabIndex = 1
        labelModel.Label = "Clicks "

        # insert the control models into the dialog model 
        dialogModel.insertByName( "myButtonName", buttonModel); 
        dialogModel.insertByName( "myLabelName", labelModel); 

        # create the dialog control and set the model 
        controlContainer = smgr.createInstanceWithContext( 
            "com.sun.star.awt.UnoControlDialog", ctx); 
        controlContainer.setModel(dialogModel); 

        # add the action listener
        controlContainer.getControl("myButtonName").addActionListener(
            MyActionListener( controlContainer.getControl( "myLabelName" ), labelModel.Label ))

        # create a peer 
        toolkit = smgr.createInstanceWithContext( 
            "com.sun.star.awt.ExtToolkit", ctx);       

        controlContainer.setVisible(False);       
        controlContainer.createPeer(toolkit, None);

        # execute it
        controlContainer.execute()

        # dispose the dialog 
        controlContainer.dispose()
    except Exception,e:
        print str(e)

g_exportedScripts = createDialog,
