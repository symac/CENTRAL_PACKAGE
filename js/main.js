import {tLevelFacetteConfig} from './prmFacetExactAfter/customTLevelFacette'
import {authentificationAutresInstConfig} from './prmLoginAfter/authentificationAutresInst'
import {customBriefDisplayConfig} from './prmBriefResultAfter/customBriefDisplay'
import {affDispoConfig} from './prmSearchResultAvailabilityLineAfter/affDispo.js'

let app = angular.module('centralCustom',[]);
if (app){
    app.component('prmFacetExactAfter', tLevelFacetteConfig);
    app.component('prmLoginAfter', authentificationAutresInstConfig);
    app.component('prmBriefResultAfter', customBriefDisplayConfig);
    app.component('prmSearchResultAvailabilityLineAfter', affDispoConfig);
}