sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/format/DateFormat",
	"sap/m/MessageToast",
	"sap/ui/integration/library"
], function (Controller,JSONModel,DateFormat, MessageToast, integrationLibrary) {
	"use strict";

	return Controller.extend("app.UI5IntegrationCards.controller.App", {
		onInit: function () {
			var sPath = jQuery.sap.getModulePath("app.UI5IntegrationCards", "/model/cardDataManifest.json");
			var oModel = new JSONModel(sPath);
			this.getView().setModel(oModel, "manifests");
			
			var componentCardUrl = sap.ui.require.toUrl("app/UI5IntegrationCards/componentCard/manifest.json");
			this.getView().setModel(new JSONModel({
				componentCardUrl: componentCardUrl
			}));
		},
		onAction: function (oEvent) {
			if (oEvent.getParameter("type") === integrationLibrary.CardActionType.Navigation) {
				MessageToast.show("URL: " + oEvent.getParameter("parameters").url);
			}
		}
	});
});