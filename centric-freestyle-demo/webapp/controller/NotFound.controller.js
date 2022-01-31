sap.ui.define([
    "./BaseController"
], function (BaseController) {
    "use strict";

    return BaseController.extend("be.wl.centricfreestyledemo.controller.NotFound", {

        onInit: function () {
            this.getRouter().getTarget("notFound").attachDisplay(this._onNotFoundDisplayed, this);
        },

        _onNotFoundDisplayed : function () {
            this.getModel("appView").setProperty("/layout", "OneColumn");
        }
    });
});