import {tLevelFacetteConfig} from './prmFacetExactAfter/customTLevelFacette'
import {authentificationAutresInstConfig} from './prmLoginAfter/authentificationAutresInst'
import {customBriefDisplayConfig} from './prmBriefResultAfter/customBriefDisplay'
import {affDispoConfig} from './prmSearchResultAvailabilityLineAfter/affDispo'
import {dispoElecAutresInstConfig} from './prmFullViewServiceContainerAfter/dispoElecAutresInst'
// import {bouttonAfficheDispoElecConfig} from './prmFullViewServiceContainerAfter/bouttonAfficheDispoElec'

let app = angular.module('centralCustom',[]);
if (app){
    app.component('prmFacetExactAfter', tLevelFacetteConfig);
    app.component('prmLoginAfter', authentificationAutresInstConfig);
    app.component('prmBriefResultAfter', customBriefDisplayConfig);
    app.component('prmSearchResultAvailabilityLineAfter', affDispoConfig);
    app.component('prmFullViewServiceContainerAfter', dispoElecAutresInstConfig);
    // app.component('rebubComponent', bouttonAfficheDispoElecConfig);
} 