import {tLevelFacetteConfig} from './prmFacetExactAfter/customTLevelFacette';
import {authentificationAutresInstConfig} from './prmLoginAfter/authentificationAutresInst';
import {customBriefDisplayConfig} from './prmBriefResultAfter/customBriefDisplay';
import {customGalleryDisplayConfig} from './prmGalleryItemAfter/customGalleryDisplay';
import {affDispoConfig} from './prmSearchResultAvailabilityLineAfter/affDispo';
import {dispoElecAutresInstConfig} from './prmFullViewServiceContainerAfter/dispoElecAutresInst';
import {itemInLoanConfig} from './prmLoanAfter/itemInLoan';
// import {showAlertMessageConfig} from './prmSearchBarAfter/showAlertMessage'
// import {getThumbnailConfig} from './prmSearchResultThumbnailContainerAfter/getThumbnail';
import {forceAuthConfig} from './prmAuthenticationAfter/forceAuth';
import {logosInstsConfig} from './prmExploreFooterAfter/logosInsts';
// import {alertMessageConfig} from './prmBackToLibrarySearchButtonAfter/alertMessage';
import {panierConfig} from './prmUserAreaExpandableAfter/panier';
import {panierCompteLecteurConfig} from './prmUserAreaExpandableAfter/panier';
// import { MessageService } from './prmTopbarAfter/message.service';
// import { PrmTopbarAfterConfig } from './prmTopbarAfter/prmTopbarAfter.component';
import {changeLinkToCollectionDiscoveryConfig} from './prmCollectionNavigationBreadcrumbsAfter/changeLinkToCollectionDiscovery';

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
    // app.component('prmSearchBarAfter',showAlertMessageConfig);
    // app.component('prmSearchResultThumbnailContainerAfter',getThumbnailConfig);
    app.component('prmExploreFooterAfter',logosInstsConfig);
    // app.component('prmBackToLibrarySearchButtonAfter',alertMessageConfig);
    // app.service('messageService', MessageService);
    // app.component(PrmTopbarAfterConfig.name, PrmTopbarAfterConfig.config);
    app.component('prmUserAreaExpandableAfter',panierConfig);
    app.component('prmRequestsAfter',panierCompteLecteurConfig);
    app.component('prmCollectionNavigationBreadcrumbsItemAfter',changeLinkToCollectionDiscoveryConfig);
    // app.component('prmCollectionGalleryHeaderAfter',modifyCollectionTopTitleConfig)
} 

// START ------ Primo-ZoteroBib-Add-On ------/
function insertActions(actions) {
    app.service('customActionService', function() {
        return {
            actions: [],
            processCustomAction: function(prmActionCtrl, action) {
                action.slug = action.name.replace(/\s+/g, ''); // remove whitespace
                action.iconname = action.slug.toLowerCase();
                action.index = Object.keys(prmActionCtrl.actionListService.actionsToIndex).length - 1 ; // ignore "none" and RISPushTo
                this.actions.push(action);
                return action;
            },
            setCustomAction: function(prmActionCtrl, action) {
                    prmActionCtrl.actionLabelNamesMap[action.slug] = action.name;
                    prmActionCtrl.actionIconNamesMap[action.slug] = action.iconname;
                    prmActionCtrl.actionIcons[action.iconname] = {
                        icon: action.icon.name,
                        iconSet: action.icon.set,
                        type: "svg"
                    };
                    if (!prmActionCtrl.actionListService.actionsToIndex[action.slug]) { // ensure we aren't duplicating the entry
                        prmActionCtrl.actionListService.requiredActionsList[action.index] = action.slug;
                        prmActionCtrl.actionListService.actionsToDisplay.unshift(action.slug);
                        prmActionCtrl.actionListService.actionsToIndex[action.slug] = action.index;
                    }
                    
                    var actionurl = "";
                                                        
                    if (action.type === 'urlredirectzotero') {
                      console.log(prmActionCtrl.item);
                        var zoterobibq = "0";
                        //Construct link to PNX record
                        var url = new URL(document.location.href);
                        var hostname = url.hostname;
                         console.log(url.hostname);
                        var context = prmActionCtrl.item.context
                        var recordid = prmActionCtrl.item.pnx.control.recordid;
                        var linktopnx ="https://babordplus.hosted.exlibrisgroup.com/primo_library/libweb/webservices/rest/primo-explore/v1/pnxs/xml/"+context+"/"+recordid+"?inst=33PUDB_NETWORK%26showPnx=true";
                        // var linktopnx ="https://"+url.hostname+"/primo_library/libweb/webservices/rest/primo-explore/v1/pnxs/xml/"+context+"/"+recordid+"?inst=33PUDB_UB%26showPnx=true";
                          //check is RISTYPE Exists
                          if (typeof prmActionCtrl.item.pnx.addata.ristype == 'undefined'){
                            console.log("format" + prmActionCtrl.item.pnx.addata.format);
                            zoterobibq = linktopnx;
                          }else{
                            console.log("format" + prmActionCtrl.item.pnx.addata.ristype.toString().toLowerCase())
                            switch(prmActionCtrl.item.pnx.addata.ristype.toString().toLowerCase()) {
                              case "book":
                                zoterobibq = getZoterobibq(prmActionCtrl.item.pnx.addata, 0,linktopnx);
                                break;
                              case "jour":
                                zoterobibq = getZoterobibq(prmActionCtrl.item.pnx.addata, 1,linktopnx);
                                break;
                              case "gen":
                                zoterobibq = getZoterobibq(prmActionCtrl.item.pnx.addata, 2,linktopnx);
                                break;
                              case "thes":
                                zoterobibq = getZoterobibq(prmActionCtrl.item.pnx.addata, 3, linktopnx);
                                break;

                              default:
                                zoterobibq = getZoterobibq(prmActionCtrl.item.pnx.addata, 4, linktopnx);
                            }								
                          }							  
                      if (action.hasOwnProperty('templateVar')) {
                          action.action = action.action.replace(/{\d}/g, function(r){return action.templateVar[r.replace(/[^\d]/g,'')]});
                          console.log("templateVar");
                      }
                        actionurl = action.action + zoterobibq;
                        console.log(actionurl);
                    }						
                    prmActionCtrl.actionListService.onToggle[action.slug] = function(){							
                        window.open(actionurl, '_blank'); // opens the url in a new window
                    };
            },
            setCustomActionContainer: function(mdTabsCtrl, action) { // for further review...
            },
            getCustomActions: function() {
                return this.actions;
            }
        };
    })
    .component('prmActionListAfter', {
        require: {
            prmActionCtrl: '^prmActionList',
        },
        controller: 'customActionController'
    })
    .controller('customActionController', ['$scope', 'customActionService', function($scope, customActionService) {
        var vm = this;
        vm.$onInit = function() {			
            actions.forEach(function(action) {
                var processedAction = customActionService.processCustomAction(vm.prmActionCtrl, action);
                customActionService.setCustomAction(vm.prmActionCtrl, processedAction);
                
            });
        };
    }])
}
// END ------ Primo-VE-ZoteroBib-Add-On ------/	


//Replace name and icon with you own
insertActions([{
    name: "ZoteroBib",
    type: "urlredirectzotero",
    icon: {
        set: 'primo-actions',
        name: 'easybib'
    },
    action: "https://zbib.org/import?q="
}]);


//Place this function outside the main function
//Function to get ISBN, DOI, PMID,arXiv ID, or title
function getZoterobibq(addata, risformattype, linktopnx)
{
	switch(risformattype) {
    case 0: // book
    if (typeof addata.isbn !== 'undefined')
        if(addata.isbn.length > 1)
            return addata.isbn[0];
        else
            return addata.isbn;
    return linktopnx;
		break;
	  case 1: //jour
		if (typeof addata.doi !== 'undefined')
			return addata.doi;
		if (typeof addata.pmid !== 'undefined')
			return addata.pmid;
		if (typeof addata.lad21 !== 'undefined')
			return addata.lad21.toString().replace(/\barXiv.org:\b~?/g, '');
    return linktopnx;
        break;
	  case 2: //gen
		if (typeof addata.doi !== 'undefined')
			return addata.doi;
		if (typeof addata.pmid !== 'undefined')
			return addata.pmid;
		if (typeof addata.lad21 !== 'undefined')
			return addata.lad21.toString().replace(/\barXiv.org:\b~?/g, '');
    return linktopnx;
        break;
	  case 3: //thesis
		if (typeof addata.doi !== 'undefined')
			return addata.doi;
		if (typeof addata.pmid !== 'undefined')
			return addata.pmid;
		if (typeof addata.lad21 !== 'undefined'){
            return addata.lad21.toString().replace(/\barXiv.org:\b~?/g, '');}
    return linktopnx;
		break;
	  default:// will use the title if no ISBN, DOI, PMID,arXiv ID
		return linktopnx;
	}
}