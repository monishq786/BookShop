sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast"
], function (Controller, JSONModel, MessageToast) {
    "use strict";

    return Controller.extend("bookshop.controller.CourceList", {

        onInit: function () {
            // let oData = {
            //     Employee: [{
            //         Name: "Monish",
            //         Role: "Manager"
            //     }, {
            //         Name: "Alex",
            //         Role: "Manager"
            //     }]
            // }
            // let oModel =  new sap.ui.model.JSONModel(oData);
            // this.getView().setModel(oModel, "EmpModel");
        },

        openDialog: function () {
            if (this._pDialog) { // this ensure this is loading first time its Promise Object
                this._pDialog = this.loadFragment({ // to ensure load the fragment that if load first time the create new instance if opening secoind time reuse porevious instance bcz of memory leak
                    name: "my.app.view.fragments.MyFragment"
                }).then(function (oDialog) {
                    this.getView().addDependant(oDialog) // load the model property into dialog or model this called view child, this is lifecycle managment process
                    return oDialog
                }).bind(this); // ensure that this is controller context preserved as parent 
            }

            this._pDialog.then(function (oDialog) {
                oDialog.open(); // open the dialog 
            })
        },

        onExit: function () {
            if (this._pDialog) { // this will check if view exit then dialog should be destroy with view 
                this._pDialog.then(function (oDialog) {
                    oDialog.destroy();
                })
            }
        },

        onSearchData: function (oEvent) {
            let sQuery = oEvent.getParameters("newValue");
            let oFilter = new sap.ui.model.Filter("Name", sap.ui.mode.FilterOperator.Contains, sQuery);
            let oBinding = this.byId("myTable").getBinding("items");
            oBinding.filter([oFilter]);
        }
    });
});