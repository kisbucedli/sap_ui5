sap.ui.define(["demo_app/controller/BaseController","demo_app/util/Formatter"
],function(BaseController,Formatter){
	"use strict";
	return BaseController.extend("demo_app.controller.Main",{
		formatter:Formatter,
		onInit: function() {
			// set explored app's demo model on this sample
			var oModel = new JSONModel(sap.ui.require.toUrl("sap/ui/demo/mock") + "/products.json");
			this.getView().setModel(oModel);
		},
		onToggleInfoToolbar: function(oEvent) {
			var oTable = this.byId("idProductsTable");
			oTable.getInfoToolbar().setVisible(!oEvent.getParameter("pressed"));
		}
	}
	);
	
})