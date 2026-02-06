sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast"
], function (Controller, JSONModel, MessageToast) {
    "use strict";

    return Controller.extend("bookshop.controller.CourceList", {

        onInit: function () {
            // In V4, data flows automatically once the view is loaded
        },

        onRefresh: function () {
            // To refresh a V4 list, you refresh the binding, not the model
            var oList = this.byId("idProductList");
            var oBinding = oList.getBinding("items");

            if (oBinding.hasPendingChanges()) {
                MessageToast.show("Please save changes before refreshing.");
                return;
            }

            oBinding.refresh();
        }
    });
});