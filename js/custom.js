!function r(l,s,o){function c(i,t){if(!s[i]){if(!l[i]){var e="function"==typeof require&&require;if(!t&&e)return e(i,!0);if(u)return u(i,!0);var n=new Error("Cannot find module '"+i+"'");throw n.code="MODULE_NOT_FOUND",n}var a=s[i]={exports:{}};l[i][0].call(a.exports,function(t){return c(l[i][1][t]||t)},a,a.exports,r,l,s,o)}return s[i].exports}for(var u="function"==typeof require&&require,t=0;t<o.length;t++)c(o[t]);return c}({1:[function(t,i,e){"use strict";var n=t("./prmFacetExactAfter/customTLevelFacette"),a=t("./prmLoginAfter/authentificationAutresInst"),r=t("./prmBriefResultAfter/customBriefDisplay"),l=t("./prmSearchResultAvailabilityLineAfter/affDispo"),s=t("./prmFullViewServiceContainerAfter/dispoElecAutresInst"),o=angular.module("centralCustom",[]);o&&(o.component("prmFacetExactAfter",n.tLevelFacetteConfig),o.component("prmLoginAfter",a.authentificationAutresInstConfig),o.component("prmBriefResultAfter",r.customBriefDisplayConfig),o.component("prmSearchResultAvailabilityLineAfter",l.affDispoConfig),o.component("prmFullViewServiceContainerAfter",s.dispoElecAutresInstConfig))},{"./prmBriefResultAfter/customBriefDisplay":2,"./prmFacetExactAfter/customTLevelFacette":3,"./prmFullViewServiceContainerAfter/dispoElecAutresInst":4,"./prmLoginAfter/authentificationAutresInst":5,"./prmSearchResultAvailabilityLineAfter/affDispo":6}],2:[function(t,i,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.customBriefDisplayConfig={bindings:{parentCtrl:"<"},controller:function t(){if(function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,t),console.log("----\x3e33PUDB customBriefDisplayController"),console.log(this),"PC"==this.parentCtrl.item.context){var i=this.parentCtrl.otherLines;console.log(this.parentCtrl.item.pnx.display.title[0]);var e=this.parentCtrl.item.pnx.display.creator,n=void 0!==this.parentCtrl.item.pnx.display.publisher?this.parentCtrl.item.pnx.display.publisher:this.parentCtrl.item.pnx.display.source,a=this.parentCtrl.item.pnx.display.creationdate,r=this.parentCtrl.item.pnx.display.ispartof;if(console.log(r),void 0===r){var l=n+" : "+a,s={values:[{clazz:"media-publisher",codes:[""],key:"publisher",text:[l],values:[l]}],delimiter:" ;"};i.unshift(s)}var o={values:[{clazz:"media-creator",codes:[""],key:"creator",text:e,values:e}],delimiter:" ;"};console.log(i),i.unshift(o)}if(console.log(this.parentCtrl.item.pnx.control.recordid[0]),console.log(this.parentCtrl.item.context),"L"==this.parentCtrl.item.context&&this.parentCtrl.item.pnx.control.recordid[0].startsWith("dedup"))for(var c=this.parentCtrl.otherLines,u=0;u<c.length;u++)if(console.log(c[u].values[0].key),"lds01"==c[u].values[0].key){var p=c[u].values[0].text[0];console.log(p),c[u].values[0].text[0]=p.replace(/^(.*?)<br\/>.*/,"$1")}}}},{}],3:[function(t,i,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function n(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(t,i,e){return i&&n(t.prototype,i),e&&n(t,e),t}}();var n=function(){function n(){if(function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,n),console.log("----\x3e 33PUDB tLevelFacetteController"),"tlevel"==this.parentCtrl.facetGroup.name){var t=this.parentCtrl.facetGroup.values;console.log(t);for(var i=0;i<t.length;i++){var e=t[i].value;console.log(e),["peer_reviewed","open_access","available"].includes(e)&&(t.splice(i,1),i-=1,console.log("Supprimée"))}}}return a(n,[{key:"recordid",get:function(){return this.parentCtrl.item.pnx.control.recordid[0]}}]),n}();e.tLevelFacetteConfig={bindings:{parentCtrl:"<"},controller:n}},{}],4:[function(t,i,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function n(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(t,i,e){return i&&n(t.prototype,i),e&&n(t,e),t}}();var n=function(){function n(t){if(function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,n),console.log("----\x3edispoElecAutresInstController"),this.sce=t,this.serviceName=this.parentCtrl.service.scrollId,"getit_link1_0"==this.serviceName){this.REBUB_vue=this.parentCtrl.configurationUtil.vid,this.REBUB_institution=this.parentCtrl.configurationUtil.vid.match(/(33PUDB_\S+?)_/)[1],this.institutionsLIst=[],this.dispos=this.parentCtrl.item.pnx.delivery.delcategory,this.isShowContent=[];for(var i=0;i<this.dispos.length;i++){var e=this.dispos[i].match(/(\$\$V|^)(.*?)\$\$I(.*?)(\$|$)/);"Alma-E"==e[2]&&e[3]!=this.REBUB_institution&&"33PUDB_NETWORK"!=e[3]&&(this.institutionsLIst.push(e[3]),this.isShowContent[e[3]]=!1)}this.dispo_autres_inst=0<this.institutionsLIst.length}}return a(n,[{key:"showComponent",value:function(t){for(var i=t.match(/33PUDB_(.*)/)[1].toLowerCase(),e=this.parentCtrl.item.lang3?this.parentCtrl.item.lang3:"fre",n=(new Date).toISOString(),a=this.parentCtrl.item.pnx.control.almaid,r=this.parentCtrl.item.pnx.control.recordid[0].startsWith("dedup"),l=[],s=0;s<a.length;s++)if(r){var o=a[s].match(/\$\$V(.*?)\$\$O.*?_.*?_(.*?)\d/);"Marc"==o[2]&&l.push("ie="+o[1])}else l.push("ie="+a[s]);this.openUrl="https://pudb-"+i+".userservices.exlibrisgroup.com/view/uresolver/"+t+"/openurl?ctx_enc=info:ofi/enc:UTF-8&ctx_id=10_1&ctx_tim="+n+"&ctx_ver=Z39.88-2004&url_ctx_fmt=info:ofi/fmt:kev:mtx:ctx&url_ver=Z39.88-2004&rfr_id=info:sid/primo.exlibrisgroup.com-33PUDB_Alma_Marc&req_id=&rft_dat=ie="+l.toString()+",language="+e+",view="+this.REBUB_vue+"&svc_dat=viewit&u.ignore_date_coverage=true&is_new_ui=true&Force_direct=false&req.skin="+this.REBUB_vue,this.isShowContent[t]=!this.isShowContent[t],this.templateURL="custom/CENTRAL_PACKAGE/js/prmFullViewServiceContainerAfter/bouttonAfficheDispoElec.html",console.log(this.openUrl)}},{key:"trustAsUrl",value:function(t){return this.sce.trustAsResourceUrl(t)}}]),n}();n.$inject=["$sce"];e.dispoElecAutresInstConfig={bindings:{parentCtrl:"<"},controller:n,template:'<div ng-if="$ctrl.serviceName===\'getit_link1_0\' && $ctrl.dispo_autres_inst===true" class="33PUDB_Elec_autres_inst">\n    <h3 class="medium-uppercase-bold"> <span translate="nui.brief.results.tabs.getit_other">Get it from other\n            institutions</span> </h3>\n    <div ng-repeat="almaInst in $ctrl.institutionsLIst">\n        <button\n            class="neutralized-button layout-full-width layout-display-flex md-button md-primoExplore-theme md-ink-ripple"\n            type="button" ng-click="$ctrl.showComponent(almaInst); ">\n            <div layout="row" flex="100" layout-align="space-between center"\n                class="layout-align-space-between-center layout-row flex-100">\n                <div class="md-list-item-text">\n                    <h3 translate="{{almaInst}}">{{almaInst}}</h3>\n                    <p><span class="availability-status restricted" translate="delivery.code.restricted">Online access\n                            is restricted</span></p>\n                </div>\n                <prm-icon icon-type="svg" svg-icon-set="hardware" icon-definition="ic_keyboard_arrow_right_24px">\n                    <md-icon md-svg-icon="hardware:ic_keyboard_arrow_right_24px" alt="" class="md-primoExplore-theme"\n                        aria-hidden="true"></md-icon>\n                    <prm-icon-after parent-ctrl="$ctrl"></prm-icon-after>\n                </prm-icon>\n            </div>\n            <div class="md-ripple-container"></div>\n        </button>\n        <rebub-autres-abos rebub-etab="$ctrl.rebubEtab" ng-if="$ctrl.isShowContent[almaInst]">  \n                <iframe iframe-onload="" class="mashup-iframe" ng-src="{{$ctrl.trustAsUrl($ctrl.openUrl)}}"\n                style="width: 100%; border: none; overflow: hidden; height: 105px;" id="iFrameResizer1" scrolling="no"> </iframe>\n            \x3c!-- <div ng-include src="$ctrl.templateURL"></div> --\x3e\n        </rebub-autres-abos>\'\n        \n    </div>\n</div>'}},{}],5:[function(t,i,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function n(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(t,i,e){return i&&n(t.prototype,i),e&&n(t,e),t}}();var a=function(){function t(){!function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,t),console.log("----\x3e33PUDB authentificationAutresInstController"),this.hostAuth=this.parentCtrl.$location.$$host,"/login"==this.parentCtrl.$location.$$path?this.absUrl="https://"+this.hostAuth+"/primo-explore/account?vid=33PUDB_UBM_VU1&section=overview":this.absUrl=this.parentCtrl.$location.$$absUrl,this.absUrl=encodeURIComponent(this.absUrl),this.sourceView=this.parentCtrl.$location.$$search.vid,this.langue=this.parentCtrl.$stateParams.lang,this.auth_base_url_const="https://"+this.hostAuth+"/primo_library/libweb/primoExploreLogin?institution=",this.PUDB_Auth_Lists=[["1","33PUDB_BXSA","33PUDB_BXSA_SAML_BXSA",this.absUrl.replace(/vid\%3D33PUDB_.*_VU1/,"vid%3D33PUDB_BXSA_VU1"),"33PUDB_BXSA_VU1","Bordeaux Sciences Agro"],["2","33PUDB_IEP","33PUDB_IEP_SAML_IEP",this.absUrl.replace(/vid\%3D33PUDB_.*_VU1/,"vid%3D33PUDB_IEP_VU1"),"33PUDB_IEP_VU1","Bordeaux Sciences Po"],["3","33PUDB_UB","33PUDB_UB_SAML_UB",this.absUrl.replace(/vid\%3D33PUDB_.*_VU1/,"vid%3D33PUDB_UB_VU1"),"33PUDB_UB_VU1","Université de Bordeaux"],["4","33PUDB_UBM","33PUDB_UBM_SAML_UBM",this.absUrl.replace(/vid\%3D33PUDB_.*_VU1/,"vid%3D33PUDB_UBM_VU1"),"33PUDB_UBM_VU1","Université Bordeaux Montaigne"],["5","33PUDB_INP","33PUDB_INP_SAML_INP",this.absUrl.replace(/vid\%3D33PUDB_.*_VU1/,"vid%3D33PUDB_INP_VU1"),"33PUDB_INP_VU1","Bordeaux INP"]]}return n(t,[{key:"setIdPShow",value:function(t){return Boolean(this.parentCtrl.usernamePasswordLoginService.inst!==t)}}]),t}();e.authentificationAutresInstConfig={bindings:{parentCtrl:"<"},controller:a,template:'<h2 class="md-headline light-text layout-align-center-center layout-row flex"><span translate="">Membre d\'un autre\n        établissement du réseau Bordelais? </span></h2>\n<p class="layout-align-center-center layout-row flex">Authentifiez-vous sur votre Babord + pour profiter d\'un service\n    optimisé</p>\n<div id="REBUB-Authentification-Ext" layout="raw">\n    <md-list-item ng-repeat="PUDB_Auth_List in $ctrl.PUDB_Auth_Lists" ng-show="$ctrl.setIdPShow(\'{{PUDB_Auth_List[1]}}\')"\n        class="rebub-authentification-externe">\n        <a ng-href="{{$ctrl.auth_base_url_const}}{{PUDB_Auth_List[1]}}&lang=fr_FR&target-url={{PUDB_Auth_List[3]}}&authenticationProfile={{PUDB_Auth_List[2]}}"\n            &auth=SAML&isSilent=false"\n            ng-attr-title="Après vous être authentifié sur le portail de {{PUDB_Auth_List[5]}} vous serez redirigé vers le Babord + de l\'institution">\n            <img class="rebub-logo" ng-src="custom/CENTRAL_PACKAGE/img/{{PUDB_Auth_List[1]}}_Logo.png"\n                ng-attr-alt="Logo de  {{PUDB_Auth_List[5]}}">\n        </a>\n    </md-list-item>\n</div>'}},{}],6:[function(t,i,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function t(i,e,n,a){if(function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,t),console.log("----\x3eaffDispoController"),this.parentCtrl.result.pnx.control.recordid[0].startsWith("dedup")&&1==this.parentCtrl.result.delivery.deliveryCategory.length){if(void 0!==this.parentCtrl.result.delivery.GetIt2){console.log("----\x3eaffDispoController : recalcule de la disponibilité");var r=function(t){if(console.log(t),void 0===t||null==t)return"unavailable_in_all_institutions";for(var i=[],e=0;e<t.length;e++)t[e].isValidUser&&i.push(t[e].availabilityStatus);return 0==i.length?"does_not_exist_in_maininstitution":i.includes("available")?"available_in_maininstitution":"check_holdings"}(this.parentCtrl.result.delivery.holding);this.locations=[],this.locations.push({availability:r,deliveryCode:"delivery.code."+r,useLinkIcon:!0})}console.log(this.locations)}console.log(this)};n.$inject=["$scope","$http","$element","$templateCache"];e.affDispoConfig={bindings:{parentCtrl:"<"},controller:n,template:'<div ng-repeat="availability in $ctrl.locations" layout="row" layout-align="start start">\n    <div layout="row" layout-align="start start"\n        class="layout-align-start-start layout-row avail-row {{availability.availability}}">\n        <prm-icon availability-type icon-type="{{$ctrl.parentCtrl.availabilityLineIcons.physicalMaterial.type}}"\n            svg-icon-set="{{$ctrl.parentCtrl.availabilityLineIcons.physicalMaterial.iconSet}}"\n            icon-definition="{{$ctrl.parentCtrl.availabilityLineIcons.physicalMaterial.icon}}"></prm-icon>\n        <md-button prm-brief-internal-button-marker\n            ng-click="$ctrl.parentCtrl.handleAvailability($index, $event);$event.preventDefault();"\n            class="neutralized-button arrow-link-button"\n            aria-label="{{$ctrl.parentCtrl.getTranslatedLine(availability.deliveryCode)}}"\n            title="{{$ctrl.parentCtrl.getTranslatedLine(availability.deliveryCode)}}">\n            <span class="button-content">\n                <span class="availability-status {{availability.availability}}"\n                    ng-class="{\'text-rtl\': $ctrl.parentCtrl.switchToLtrString()}"\n                    translate="{{availability.deliveryCode}}"\n                    translate-values="$ctrl.parentCtrl.getPlaceHolders($ctrl.result)" \n                    translate-compile>\n                </span>\n            </span>\n            <prm-spinner class="inline-loader display-inline dark-on-light half-transparent"\n                ng-if="$ctrl.result.rtaInProgress"></prm-spinner>\n            <prm-icon link-arrow icon-type="{{$ctrl.parentCtrl.availabilityLineIcons.arrowRight.type}}"\n                svg-icon-set="{{$ctrl.parentCtrl.availabilityLineIcons.arrowRight.iconSet}}"\n                icon-definition="{{$ctrl.parentCtrl.availabilityLineIcons.arrowRight.icon}}"></prm-icon>\n        </md-button>\n        \x3c!-- <span class="availability-status" ng-click="$ctrl.onLinkClick(availability, $event)">\n             <span\n                    ng-if="availability.availability" class="availability-display"\n                    translate-default="{{availability.availability}}"\n                    translate="fulldisplay.availabilty.{{availability.availability}}"> \n            </span>  --\x3e\n        \x3c!-- <span\n                    ng-if="!availability.outboundLink" class=\\\'availability-link\\\' ng-show=\\\'availability.toTranslate\\\'>\n                    <span translate="{{availability.toTranslate}}" class="library-code"> </span> <span\n                        ng-if="availability.subLocation" class="sublibrary-code">{{availability.subLocation}}</span> <span\n                        ng-if="availability.callNumber" class="item-callnumber">{{availability.callNumber}}</span>\n                    <prm-icon ng-if="availability.outboundLink" icon-type="svg" svg-icon-set="primo-ui"\n                        icon-definition="open-in-new" aria-label="externalLink" class="ng-scope ng-isolate-scope"\n                        external-link>\n                        <md-icon md-svg-icon="primo-ui:open-in-new" aria-label="externalLink" class="md-primoExplore-theme"\n                            aria-hidden="true" />\n                    </prm-icon>\n                </span> <a ng-if="availability.outboundLink" class=\\\'availability-link\\\'\n                    ng-show=\\\'availability.toTranslate\\\' href={{availability.outboundLink}}\n                    ng-click="$ctrl.prevent($event)"> <span translate="{{availability.toTranslate}}" class="library-code">\n                    </span> <span ng-if="availability.subLocation"\n                        class="sublibrary-code">{{availability.subLocation}}</span> <span ng-if="availability.callNumber"\n                        class="item-callnumber">{{availability.callNumber}}</span>\n                    <prm-icon ng-if="availability.outboundLink" icon-type="svg" svg-icon-set="primo-ui"\n                        icon-definition="open-in-new" aria-label="externalLink" class="ng-scope ng-isolate-scope"\n                        external-link>\n                        <md-icon md-svg-icon="primo-ui:open-in-new" aria-label="externalLink" class="md-primoExplore-theme"\n                            aria-hidden="true" />\n                    </prm-icon>\n                </a> </span>\n            <hesb-map ng-if="availability.callNumber" ctrl="availability"></hesb-map> --\x3e\n    </div>\n</div>'}},{}]},{},[1]);
//# sourceMappingURL=custom.js.map
