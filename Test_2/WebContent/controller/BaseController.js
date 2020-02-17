
sap.ui.define([ 
	"sap/ui/core/mvc/Controller",
	'sap/ui/model/json/JSONModel',
	'sap/m/MessageToast'
	], 
	function(Controller,JSONModel,MessageToast) {
	"use strict";
	return Controller.extend("demo_app.controller.BaseController", {
		
//		getRouter: function() {
//			return sap.ui.core.UIComponent.getRouterFor(this);
//		},
//		/**
//		 * Convenience method navigating back.
//		 * @public
//		 * @returns {sap.ui.core.routing.Router} the router for this component
//		 */
//		onNavBack: function (oEvent,fBeforeNavBack) {
//			try{
//				fBeforeNavBack();
//				var oHistory, sPreviousHash;
//				oHistory = History.getInstance();
//				sPreviousHash = oHistory.getPreviousHash();
//				if (sPreviousHash !== undefined) {
//					window.history.go(-1);
//					}
//			}catch(e){
//				this.getRouter().navTo("main", {}, true);
//				this.resetModelChanges();
//			}
//		},
//		getContentDensityClass : function() {
//		      if (!this._sContentDensityClass) {
//		        if (!sap.ui.Device.support.touch) {
//		          this._sContentDensityClass = "sapUiSizeCompact";
//		        } else {
//		          this._sContentDensityClass = "sapUiSizeCozy";
//		        }
//		      }
//		      return this._sContentDensityClass;
//		    },
//		/**
//		 * Convenience method for getting the view model by name.
//		 * @public
//		 * @param {string} [sName] the model name
//		 * @returns {sap.ui.model.Model} the model instance
//		 */
//		getModel: function(sName) {
//			return this.getView().getModel(sName);
//		},
//		/**
//		 * Convenience method for setting the view model.
//		 * @public
//		 * @param {sap.ui.model.Model} oModel the model instance
//		 * @param {string} sName the model name
//		 * @returns {sap.ui.mvc.View} the view instance
//		 */
//		setModel: function(oModel, sName) {
//			return this.getView().setModel(oModel, sName);
//		},
//		getApp:function(){
//			this.getView("App").byId("idApp");
//		},
//		getComponentModel: function(sName) {
//			return this.getOwnerComponent().getModel(sName);
//		},
//
//		/**
//		 * Getter for the resource bundle.
//		 * @public
//		 * @returns {sap.ui.model.resource.ResourceModel} the resourceModel of the component
//		 */
//		getResourceBundle: function() {
//			return this.getOwnerComponent().getModel("i18n").getResourceBundle();
//		},
//		getI18nText:function(sText){
//			if(sText){
//				 return this.getModel("i18n").getProperty(sText);
//			}
//		},
//		/**
//		 * Display Message Toast
//		 * @public
//		 *  @param {string} sName the model name
//		 */
//		msgToast: function(sText, pos='center center') {
//			MessageToast.show( sText, { at: pos });
//		},
//      
//		getServiceUrl: function(){
//			return this.getOwnerComponent().getManifestEntry("/sap.app/dataSources/mainService/uri");
//		},
//		 setDeviceModel:function(){
//			 var deviceModel = new sap.ui.model.json.JSONModel({
//		            isTouch : sap.ui.Device.support.touch,
//		            isNoTouch : !sap.ui.Device.support.touch,
//		            isPhone : sap.ui.Device.system.phone,
//		            isNoPhone : !sap.ui.Device.system.phone,
//		            listMode : sap.ui.Device.system.phone ? "None" : "SingleSelectMaster",
//		            listItemType : sap.ui.Device.system.phone ? "Active" : "Inactive"
//		        });
//		        deviceModel.setDefaultBindingMode("OneWay");
//		        this.getOwnerComponent().setModel(deviceModel, "device");
//		 },
//	        initViewModel: function(oData,sName) {
//	        	sName = sName ? sName : "view";
//	            var oModel = this.getView().getModel(sName);
//	            if(!oModel){
//	                oModel = new JSONModel();
//	                this.setModel(oModel, sName);
//	            }
//	            oModel.setData(oData);
//	        },
//	        
//			setViewProperty: function(sProperty, sValue,sName) {
//				sName = sName ? sName : "view";
//			    var oModel = this.getModel(sName);
//			    if (oModel){
//			        oModel.setProperty("/" + sProperty, sValue);		        
//			    }
//			},
//			getViewProperty: function(sProperty,sName) {
//				sName = sName ? sName : "view";
//	            var oModel = this.getModel(sName);
//	            if (oModel){
//	                var value = oModel.getProperty("/" + sProperty);                
//	                return value;
//	            }
//			},
//			resetModelChanges:function(){
//				if(this.getModel().hasPendingChanges()){
//					this.getModel().resetChanges();
//				}
//			},
       
	})
});