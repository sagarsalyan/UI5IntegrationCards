sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("app.UI5IntegrationCards.componentCard.ComponentCard", {

		onInit: function () {
			var mapImageUrl = sap.ui.require.toUrl("app/UI5IntegrationCards/componentCard/ui5.jpg");
			this.getView().setModel(new JSONModel({ mapImageUrl: mapImageUrl }));
		}

	});
});