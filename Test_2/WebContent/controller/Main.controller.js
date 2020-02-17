sap.ui.define(["demo_app/controller/BaseController","demo_app/util/Formatter"
],function(BaseController,Formatter){
	"use strict";
	return BaseController.extend("demo_app.controller.Main",{
		formatter:Formatter,
		onToggleInfoToolbar: function(oEvent) {
			var oTable = this.byId("idProductsTable");
			oTable.getInfoToolbar().setVisible(!oEvent.getParameter("pressed"));
		}
	}
	);
	
})