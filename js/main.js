import {tLevelFacetteConfig} from './prmFacetExactAfter/customTLevelFacette'
import {authentificationAutresInstConfig} from './prmLoginAfter/authentificationAutresInst'

let app = angular.module('centralCustom',[]);
if (app){
    app.component('prmFacetExactAfter', tLevelFacetteConfig);
    app.component('prmLoginAfter', authentificationAutresInstConfig);
}