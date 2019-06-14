import {tLevelFacetteConfig} from './prmFacetExactAfter/customTLevelFacette'
import {authentificationAutresInstConfig} from './prmLoginAfter/authentificationAutresInst'
import {customPCIDisplayConfig} from './prmBriefResultAfter/customPCIDisplay'

let app = angular.module('centralCustom',[]);
if (app){
    app.component('prmFacetExactAfter', tLevelFacetteConfig);
    app.component('prmLoginAfter', authentificationAutresInstConfig);
    app.component('prmBriefResultAfter', customPCIDisplayConfig);
}