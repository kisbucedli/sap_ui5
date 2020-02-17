sap.ui.define(["sap/ui/core/UIComponent"], function (Component) {
	"use strict";
	return Component.extend("demo_app.Component", {
		metadata: {
			manifest: "json"
		},
		init: function () {
			Component.prototype.init.apply(this, arguments);
			this.getRouter().initialize();
		},
	})

});
