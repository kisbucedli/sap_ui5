sap.ui.define([ 
	"demo_app/controller/BaseController",
	"sap/ui/core/mvc/Controller"
	], 
	function(Base,Controller) {
	"use strict";
	return Base.extend("demo_app.controller.App", {
	
		onInit : function() {
//			 this.getView().addStyleClass(this.getContentDensityClass());
//             this.setDeviceModel();			 
		}
	})
});