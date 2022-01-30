sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var AdditionalCustomListReportDefinition = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'com.centric.centricdemoapp',
            componentId: 'BooksList',
            entitySet: 'Books'
        },
        AdditionalCustomListReportDefinition
    );
});