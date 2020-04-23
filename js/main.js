import {tLevelFacetteConfig} from './prmFacetExactAfter/customTLevelFacette';
import {authentificationAutresInstConfig} from './prmLoginAfter/authentificationAutresInst';
import {customBriefDisplayConfig} from './prmBriefResultAfter/customBriefDisplay';
import {customGalleryDisplayConfig} from './prmGalleryItemAfter/customGalleryDisplay';
import {affDispoConfig} from './prmSearchResultAvailabilityLineAfter/affDispo';
import {dispoElecAutresInstConfig} from './prmFullViewServiceContainerAfter/dispoElecAutresInst';
import {itemInLoanConfig} from './prmLoanAfter/itemInLoan';
import {showAlertMessageConfig} from './prmSearchBarAfter/showAlertMessage'
import {getThumbnailConfig} from './prmSearchResultThumbnailContainerAfter/getThumbnail';
import {forceAuthConfig} from './prmAuthenticationAfter/forceAuth';
import {logosInstsConfig} from './prmExploreFooterAfter/logosInsts';

let app = angular.module('centralCustom',[]);
if (app){
    app.component('prmFacetExactAfter', tLevelFacetteConfig);
    app.component('prmLoginAfter', authentificationAutresInstConfig);
    app.component('prmBriefResultAfter', customBriefDisplayConfig);
    app.component('prmGalleryItemAfter', customGalleryDisplayConfig);
    app.component('prmSearchResultAvailabilityLineAfter', affDispoConfig);
    app.component('prmFullViewServiceContainerAfter', dispoElecAutresInstConfig);
    app.component('prmLoanAfter',itemInLoanConfig);
    app.component('prmAuthenticationAfter',forceAuthConfig);
    app.component('prmSearchBarAfter',showAlertMessageConfig);
    // app.component('prmSearchResultThumbnailContainerAfter',getThumbnailConfig);
    app.component('prmExploreFooterAfter',logosInstsConfig);
} 

// angular.module('primo-explore.config').run(['$templateCache', function($templateCache) {
//     $templateCache.put('components/account/loans/loan.html','<h1>Yolo !!!</h1>');
// }]);