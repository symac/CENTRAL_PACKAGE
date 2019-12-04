import {tLevelFacetteConfig} from './prmFacetExactAfter/customTLevelFacette'
import {authentificationAutresInstConfig} from './prmLoginAfter/authentificationAutresInst'
import {customBriefDisplayConfig} from './prmBriefResultAfter/customBriefDisplay'
import {affDispoConfig} from './prmSearchResultAvailabilityLineAfter/affDispo'
import {dispoElecAutresInstConfig} from './prmFullViewServiceContainerAfter/dispoElecAutresInst'
import {itemInLoanConfig} from './prmLoanAfter/itemInLoan'
// import {authThumbnailConfig} from './prmTopbarAfter/authTumbnail'
import {forceAuthConfig} from './prmAuthenticationAfter/forceAuth'

let app = angular.module('centralCustom',[]);
if (app){
    app.component('prmFacetExactAfter', tLevelFacetteConfig);
    app.component('prmLoginAfter', authentificationAutresInstConfig);
    app.component('prmBriefResultAfter', customBriefDisplayConfig);
    app.component('prmSearchResultAvailabilityLineAfter', affDispoConfig);
    app.component('prmFullViewServiceContainerAfter', dispoElecAutresInstConfig);
    app.component('prmLoanAfter',itemInLoanConfig);
    // app.component('prmTopbarAfter',authThumbnailConfig);
    app.component('prmAuthenticationAfter',forceAuthConfig);
} 

// angular.module('primo-explore.config').run(['$templateCache', function($templateCache) {
//     $templateCache.put('components/account/loans/loan.html','<h1>Yolo !!!</h1>');
// }]);