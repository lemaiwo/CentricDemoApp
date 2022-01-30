sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/centric/centricdemoapp/test/integration/pages/MainListReport' ,
        'com/centric/centricdemoapp/test/integration/pages/MainObjectPage',
        'com/centric/centricdemoapp/test/integration/OpaJourney'
    ],
    function(JourneyRunner, MainListReport, MainObjectPage, Journey) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/centric/centricdemoapp') + '/index.html'
        });

        
        JourneyRunner.run(
            {
                pages: { onTheMainPage: MainListReport, onTheDetailPage: MainObjectPage }
            },
            Journey.run
        );
        
    }
);