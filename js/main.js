
import {pnxXmlConfig} from './prmBriefResultContainerAfter/pnxXml'
import {tLevelFacetteConfig} from './prmFacetExactAfter/customTLevelFacette'

let app = angular.module('viewCustom',[]);
if (app){
    app.component('prmBriefResultContainerAfter', pnxXmlConfig);
    app.component('prmFacetExactAfter', tLevelFacetteConfig);
}
