/*
 * Copyright (C) 2009-2016 SAP SE or an SAP affiliate company. All rights reserved.
 */
jQuery.sap.declare("demo_app.util.NavigationModel");
jQuery.sap.require("sap.ui.model.json.JSONModel");
/**
 * This model can be used to handle cross-app navigation.
 *
 * <p>To utilize it, call the
 * constructor with a semantic object (e.g. "SalesOrder") and an action (e.g. "track"). The model
 * will then call the framework to determine if navigation for this object/action is available. If
 * navigation for the intent is not possible, e.g. because the target app is not installed, the
 * properties of the model will be set accordingly. If the availability cannot be determined, the
 * model defaults to an enabled state.</p>
 *
 * <p>The model contains three properties:
 * <ul>
 * <li><code>targetAppNavigationSupported</code>: This property is set accoding to the availability
 * of the navigation according to the framework information.</li>
 * <li><code>navigationEnabled</code>/<code>navigationDisabled</code>: These properties can be influenced
 * by the application to override the value determined by the framework, e.g. based on configuration, by
 * calling the method <code>setNavigationEnabled(Boolean)</code>. They will always contain an
 * inverted state, i.e. if one is <code>true</code> the other will be <code>false</code>. Both variants are
 * offered for easy access from the view without the need to convert the value.</li>
 */
sap.ui.model.json.JSONModel.extend("demo_app.util.NavigationModel", {

    /**
     * Semantic object for navigation.
     * @memberOf cus.crm.myaccounts.util.NavigationModel
     */
    semanticObject: "",

    /**
     * Basic action for navigation.
     * @memberOf cus.crm.myaccounts.util.NavigationModel
     */
    action: "",

    /**
     * Initialize the navigation model. Sets the navigation enabled state depending on the
     * availability of the navigation for the intent.
     * @param semanticObject The semantic object.
     * @param action The basic action.
     */
    constructor: function(semanticObject, action) {
        sap.ui.model.json.JSONModel.apply(this, [sap.ui.model.json.JSONModel]);
        this.semanticObject = semanticObject;
        this.action = action;
        this.setProperty("/targetAppNavigationSupported", true);
        this.setProperty("/navigationEnabled", true);
        this.setProperty("/navigationDisabled", false);

        var that = this;
        this.isIntentSupported(semanticObject, action).done(function(supported) {
            that.setProperty("/targetAppNavigationSupported", supported);
            that.setNavigationEnabled(supported);
        });
        return this;
    },

    /**
     * Set the flag to enable or disable navigation.
     * @param enabled <code>true</code> to enable navigation, <code>false</code> to disable navigation.
     */
    setNavigationEnabled: function(enabled) {
        this.setProperty("/navigationEnabled", enabled);
        this.setProperty("/navigationDisabled", !enabled);
    },

    /**
     * Check if the navigation to the target intent is supported.
     * @returns {Boolean} <code>true</code> if navigation is supported, <code>false</code> otherwise.
     */
    isSupported: function() {
        return this.getProperty("/targetAppNavigationSupported");
    },

    /**
     * Check if the navigation to the target intent is enabled.
     * @returns {Boolean} <code>true</code> if navigation is enabled, <code>false</code> otherwise.
     */
    isEnabled: function() {
        return this.getProperty("/navigationEnabled");
    },

    /**
     * Navigate to the target action. The method only checks if the navigation is <em>supported</em>, but
     * not if it is <em>enabled</em>. This means that the method will trigger the navigation even after calling
     * <code>setNavigationEnabled(false)</code>. Checks on the enablement have to be performed by the calling
     * application.
     *
     * @param appSpecificRoute Routing within the target app.
     */
    navigate: function(appSpecificRoute, params) {
        if(this.isSupported()) {
            //Get container reference
            if(sap.ushell && sap.ushell.Container) {
                var fgetService = sap.ushell.Container.getService;
                if(fgetService) {
                    //Get cross-application navigation service
                    var oCrossAppNavigator = fgetService("CrossApplicationNavigation");
                    //Start navigation
                    oCrossAppNavigator.toExternal({
                        target: {
                            semanticObject: this.semanticObject,
                            action: this.action
                        },
                        appSpecificRoute: appSpecificRoute,
                        params: params
                    });
                }
            }
        }
    },
    /**
     * Check if an intent is supported by the container.
     * @param semanticObject The semantic object, e.g. "SalesOrder".
     * @param action The action, e.g. "Create".
     * @param parameters Optional parameters for the intent, e.g. "A=B&C=d". Optional parameter.
     * 
     * @return A jquery.Deferred object. It is resolved with a single boolean parameter, which is 
     * <code>false</code> if the container does not support the intent, or <code>true</code> if the intent is
     * supported or if the container cannot determine the availability of the intent.
     */
    isIntentSupported: function(semanticObject, action, parameters) {
        //Check parameters
        if (!(semanticObject && action)) {
            jQuery.sap.log.error("Util.isIntentSupported called without semantic object or action: (" + semanticObject + ", " + action + ")");
            return false;
        }
        var that = this;
        //Build intent string
        var intent = "#" + semanticObject + "-" + action;
        if (parameters) {
            intent += "?" + parameters;
        }
        //Call is async, create deferred object to pass result to called
        var deferredResult = jQuery.Deferred();
        //Call service and check response
        sap.ushell.Container.getService("CrossApplicationNavigation").isIntentSupported([intent]).done(function(oContainer) {
            //Return value may be undefined
            if(oContainer[intent].supported === false){
                deferredResult.resolve(false);
            } else {
                deferredResult.resolve(true);
            }
        });
        //Default to true if service returned undefined value.
        return deferredResult;
    },
    
    /**
     * Check if navigation to the contact person (myContacts app) is supported.
     * @return <code>true</code> if navigation is supported, <code>false</code> otherwise.
     */
    isNavToContactSupported: function() {
    
    },
    
});