!function a(l,s,o){function c(e,t){if(!s[e]){if(!l[e]){var i="function"==typeof require&&require;if(!t&&i)return i(e,!0);if(u)return u(e,!0);var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}var r=s[e]={exports:{}};l[e][0].call(r.exports,function(t){return c(l[e][1][t]||t)},r,r.exports,a,l,s,o)}return s[e].exports}for(var u="function"==typeof require&&require,t=0;t<o.length;t++)c(o[t]);return c}({1:[function(t,e,i){"use strict";var n=t("./prmFacetExactAfter/customTLevelFacette"),r=t("./prmLoginAfter/authentificationAutresInst"),a=t("./prmBriefResultAfter/customBriefDisplay"),l=t("./prmSearchResultAvailabilityLineAfter/affDispo"),s=t("./prmFullViewServiceContainerAfter/dispoElecAutresInst"),o=angular.module("centralCustom",[]);o&&(o.component("prmFacetExactAfter",n.tLevelFacetteConfig),o.component("prmLoginAfter",r.authentificationAutresInstConfig),o.component("prmBriefResultAfter",a.customBriefDisplayConfig),o.component("prmSearchResultAvailabilityLineAfter",l.affDispoConfig),o.component("prmFullViewServiceContainerAfter",s.dispoElecAutresInstConfig))},{"./prmBriefResultAfter/customBriefDisplay":2,"./prmFacetExactAfter/customTLevelFacette":3,"./prmFullViewServiceContainerAfter/dispoElecAutresInst":4,"./prmLoginAfter/authentificationAutresInst":5,"./prmSearchResultAvailabilityLineAfter/affDispo":6}],2:[function(t,e,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});i.customBriefDisplayConfig={bindings:{parentCtrl:"<"},controller:function t(){if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),console.log("----\x3e33PUDB customBriefDisplayController"),"PC"==this.parentCtrl.item.context){var e=this.parentCtrl.otherLines;console.log(this.parentCtrl.item.pnx.display.title[0]);var i=this.parentCtrl.item.pnx.display.creator,n=void 0!==this.parentCtrl.item.pnx.display.publisher?this.parentCtrl.item.pnx.display.publisher:this.parentCtrl.item.pnx.display.source,r=this.parentCtrl.item.pnx.display.creationdate,a=this.parentCtrl.item.pnx.display.ispartof;if(console.log(a),void 0===a){var l=n+" : "+r,s={values:[{clazz:"media-publisher",codes:[""],key:"publisher",text:[l],values:[l]}],delimiter:" ;"};e.unshift(s)}var o={values:[{clazz:"media-creator",codes:[""],key:"creator",text:i,values:i}],delimiter:" ;"};e.unshift(o)}if("L"==this.parentCtrl.item.context&&this.parentCtrl.item.pnx.control.recordid[0].startsWith("dedup"))for(var c=this.parentCtrl.otherLines,u=0;u<c.length;u++)if("lds01"==c[u].values[0].key){var p=c[u].values[0].text[0];c[u].values[0].text[0]=p.replace(/^(.*?)<br\/>.*/,"$1")}}}},{}],3:[function(t,e,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var r=function(){function n(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}}();var n=function(){function n(){if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),console.log("----\x3e 33PUDB tLevelFacetteController"),"tlevel"==this.parentCtrl.facetGroup.name)for(var t=this.parentCtrl.facetGroup.values,e=0;e<t.length;e++){var i=t[e].value;["peer_reviewed","open_access","available"].includes(i)&&(t.splice(e,1),e-=1)}}return r(n,[{key:"recordid",get:function(){return this.parentCtrl.item.pnx.control.recordid[0]}}]),n}();i.tLevelFacetteConfig={bindings:{parentCtrl:"<"},controller:n}},{}],4:[function(t,e,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var r=function(){function n(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}}();var n=function(){function n(t){if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),console.log("----\x3edispoElecAutresInstController"),this.sce=t,this.serviceName=this.parentCtrl.service.scrollId,"getit_link1_0"==this.serviceName){this.REBUB_vue=this.parentCtrl.configurationUtil.vid,this.REBUB_institution=this.parentCtrl.configurationUtil.vid.match(/(33PUDB_\S+?)_/)[1],this.institutionsLIst=[],this.dispos=this.parentCtrl.item.pnx.delivery.delcategory,this.isShowContent={};for(var e=0;e<this.dispos.length;e++){var i=this.dispos[e].match(/(\$\$V|^)(.*?)\$\$I(.*?)(\$|$)/);"Alma-E"==i[2]&&i[3]!=this.REBUB_institution&&"33PUDB_NETWORK"!=i[3]&&(this.institutionsLIst.push(i[3]),this.isShowContent[i[3]]=!1)}this.dispo_autres_inst=0<this.institutionsLIst.length}}return r(n,[{key:"showComponent",value:function(t){for(var e=t.match(/33PUDB_(.*)/)[1].toLowerCase(),i=this.parentCtrl.item.lang3?this.parentCtrl.item.lang3:"fre",n=(new Date).toISOString(),r=this.parentCtrl.item.pnx.control.almaid,a=this.parentCtrl.item.pnx.control.recordid[0].startsWith("dedup"),l=[],s=0;s<r.length;s++)if(a){var o=r[s].match(/\$\$V(.*?)\$\$O.*?_.*?_(.*?)\d/);"Marc"==o[2]&&l.push("ie="+o[1])}else l.push("ie="+r[s]);for(var s in this.openUrl="https://pudb-"+e+".userservices.exlibrisgroup.com/view/uresolver/"+t+"/openurl?ctx_enc=info:ofi/enc:UTF-8&ctx_id=10_1&ctx_tim="+n+"&ctx_ver=Z39.88-2004&url_ctx_fmt=info:ofi/fmt:kev:mtx:ctx&url_ver=Z39.88-2004&rfr_id=info:sid/primo.exlibrisgroup.com-33PUDB_Alma_Marc&req_id=&rft_dat="+l.toString()+",language="+i+",view="+this.REBUB_vue+"&svc_dat=viewit&u.ignore_date_coverage=true&is_new_ui=true&Force_direct=false&req.skin="+this.REBUB_vue,this.isShowContent)console.log(s),s!=t&&(this.isShowContent[s]=!1);this.isShowContent[t]=!this.isShowContent[t],this.templateURL="custom/CENTRAL_PACKAGE/js/prmFullViewServiceContainerAfter/bouttonAfficheDispoElec.html",console.log(this.isShowContent)}},{key:"trustAsUrl",value:function(t){return this.sce.trustAsResourceUrl(t)}}]),n}();n.$inject=["$sce"];i.dispoElecAutresInstConfig={bindings:{parentCtrl:"<"},controller:n,template:'<div ng-if="$ctrl.serviceName===\'getit_link1_0\' && $ctrl.dispo_autres_inst===true" class="33PUDB_Elec_autres_inst">\n    <h3 class="medium-uppercase-bold"> <span translate="nui.brief.results.tabs.getit_other">Get it from other\n            institutions</span> </h3>\n    <div ng-repeat="almaInst in $ctrl.institutionsLIst">\n        <button\n            class="neutralized-button layout-full-width layout-display-flex md-button md-primoExplore-theme md-ink-ripple"\n            type="button" ng-click="$ctrl.showComponent(almaInst); ">\n            <div layout="row" flex="100" layout-align="space-between center"\n                class="layout-align-space-between-center layout-row flex-100">\n                <div class="md-list-item-text">\n                    <h3 translate="{{almaInst}}">{{almaInst}}</h3>\n                    <p><span class="availability-status restricted" translate="delivery.code.restricted">Online access\n                            is restricted</span></p>\n                </div>\n                <prm-icon icon-type="svg" svg-icon-set="hardware" icon-definition="ic_keyboard_arrow_right_24px">\n                    <md-icon md-svg-icon="hardware:ic_keyboard_arrow_right_24px" alt="" class="md-primoExplore-theme"\n                        aria-hidden="true"></md-icon>\n                    <prm-icon-after parent-ctrl="$ctrl"></prm-icon-after>\n                </prm-icon>\n            </div>\n            <div class="md-ripple-container"></div>\n        </button>\n        <rebub-autres-abos rebub-etab="$ctrl.rebubEtab" ng-if="$ctrl.isShowContent[almaInst]">  \n                <iframe iframe-onload="" class="mashup-iframe" ng-src="{{$ctrl.trustAsUrl($ctrl.openUrl)}}"\n                style="width: 100%; border: none; overflow: hidden; height: 105px;" id="iFrameResizer1" scrolling="no"> </iframe>\n            \x3c!-- <div ng-include src="$ctrl.templateURL"></div> --\x3e\n        </rebub-autres-abos>\n        \n    </div>\n</div>'}},{}],5:[function(t,e,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=function(){function n(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}}();var r=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),console.log("----\x3e33PUDB authentificationAutresInstController"),this.hostAuth=this.parentCtrl.$location.$$host,"/login"==this.parentCtrl.$location.$$path?this.absUrl="https://"+this.hostAuth+"/primo-explore/account?vid=33PUDB_UBM_VU1&section=overview":this.absUrl=this.parentCtrl.$location.$$absUrl,this.absUrl=encodeURIComponent(this.absUrl),this.sourceView=this.parentCtrl.$location.$$search.vid,this.langue=this.parentCtrl.$stateParams.lang,this.auth_base_url_const="https://"+this.hostAuth+"/primo_library/libweb/primoExploreLogin?institution=",this.PUDB_Auth_Lists=[["1","33PUDB_BXSA","33PUDB_BXSA_SAML_BXSA",this.absUrl.replace(/vid\%3D33PUDB_.*_VU1/,"vid%3D33PUDB_BXSA_VU1"),"33PUDB_BXSA_VU1","Bordeaux Sciences Agro"],["2","33PUDB_IEP","33PUDB_IEP_SAML_IEP",this.absUrl.replace(/vid\%3D33PUDB_.*_VU1/,"vid%3D33PUDB_IEP_VU1"),"33PUDB_IEP_VU1","Bordeaux Sciences Po"],["3","33PUDB_UB","33PUDB_UB_SAML_UB",this.absUrl.replace(/vid\%3D33PUDB_.*_VU1/,"vid%3D33PUDB_UB_VU1"),"33PUDB_UB_VU1","Université de Bordeaux"],["4","33PUDB_UBM","33PUDB_UBM_SAML_UBM",this.absUrl.replace(/vid\%3D33PUDB_.*_VU1/,"vid%3D33PUDB_UBM_VU1"),"33PUDB_UBM_VU1","Université Bordeaux Montaigne"],["5","33PUDB_INP","33PUDB_INP_SAML_INP",this.absUrl.replace(/vid\%3D33PUDB_.*_VU1/,"vid%3D33PUDB_INP_VU1"),"33PUDB_INP_VU1","Bordeaux INP"]]}return n(t,[{key:"setIdPShow",value:function(t){return Boolean(this.parentCtrl.usernamePasswordLoginService.inst!==t)}}]),t}();i.authentificationAutresInstConfig={bindings:{parentCtrl:"<"},controller:r,template:'<h2 class="md-headline light-text layout-align-center-center layout-row flex"><span translate="">Membre d\'un autre\n        établissement du réseau Bordelais? </span></h2>\n<p class="layout-align-center-center layout-row flex">Authentifiez-vous sur votre Babord + pour profiter d\'un service\n    optimisé</p>\n<div id="REBUB-Authentification-Ext" layout="raw">\n    <md-list-item ng-repeat="PUDB_Auth_List in $ctrl.PUDB_Auth_Lists" ng-show="$ctrl.setIdPShow(\'{{PUDB_Auth_List[1]}}\')"\n        class="rebub-authentification-externe">\n        <a ng-href="{{$ctrl.auth_base_url_const}}{{PUDB_Auth_List[1]}}&lang=fr_FR&target-url={{PUDB_Auth_List[3]}}&authenticationProfile={{PUDB_Auth_List[2]}}"\n            &auth=SAML&isSilent=false"\n            ng-attr-title="Après vous être authentifié sur le portail de {{PUDB_Auth_List[5]}} vous serez redirigé vers le Babord + de l\'institution">\n            <img class="rebub-logo" ng-src="custom/CENTRAL_PACKAGE/img/{{PUDB_Auth_List[1]}}_Logo.png"\n                ng-attr-alt="Logo de  {{PUDB_Auth_List[5]}}">\n        </a>\n    </md-list-item>\n</div>'}},{}],6:[function(t,e,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=function t(e,i,n,r){if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),console.log("----\x3eaffDispoController"),this.parentCtrl.result.pnx.control.recordid[0].startsWith("dedup")&&1==this.parentCtrl.result.delivery.deliveryCategory.length){if(void 0!==this.parentCtrl.result.delivery.GetIt2){console.log("----\x3eaffDispoController : recalcule de la disponibilité");var a=function(t){if(console.log(t),void 0===t||null==t)return"unavailable_in_all_institutions";for(var e=[],i=0;i<t.length;i++)t[i].isValidUser&&e.push(t[i].availabilityStatus);return 0==e.length?"does_not_exist_in_maininstitution":e.includes("available")?"available_in_maininstitution":"check_holdings"}(this.parentCtrl.result.delivery.holding);this.locations=[],this.locations.push({availability:a,deliveryCode:"delivery.code."+a,useLinkIcon:!0})}console.log(this.locations)}console.log(this)};n.$inject=["$scope","$http","$element","$templateCache"];i.affDispoConfig={bindings:{parentCtrl:"<"},controller:n,template:'<div ng-repeat="availability in $ctrl.locations" layout="row" layout-align="start start">\n    <div layout="row" layout-align="start start"\n        class="layout-align-start-start layout-row avail-row {{availability.availability}}">\n        <prm-icon availability-type icon-type="{{$ctrl.parentCtrl.availabilityLineIcons.physicalMaterial.type}}"\n            svg-icon-set="{{$ctrl.parentCtrl.availabilityLineIcons.physicalMaterial.iconSet}}"\n            icon-definition="{{$ctrl.parentCtrl.availabilityLineIcons.physicalMaterial.icon}}"></prm-icon>\n        <md-button prm-brief-internal-button-marker\n            ng-click="$ctrl.parentCtrl.handleAvailability($index, $event);$event.preventDefault();"\n            class="neutralized-button arrow-link-button"\n            aria-label="{{$ctrl.parentCtrl.getTranslatedLine(availability.deliveryCode)}}"\n            title="{{$ctrl.parentCtrl.getTranslatedLine(availability.deliveryCode)}}">\n            <span class="button-content">\n                <span class="availability-status {{availability.availability}}"\n                    ng-class="{\'text-rtl\': $ctrl.parentCtrl.switchToLtrString()}"\n                    translate="{{availability.deliveryCode}}"\n                    translate-values="$ctrl.parentCtrl.getPlaceHolders($ctrl.result)" \n                    translate-compile>\n                </span>\n            </span>\n            <prm-spinner class="inline-loader display-inline dark-on-light half-transparent"\n                ng-if="$ctrl.result.rtaInProgress"></prm-spinner>\n            <prm-icon link-arrow icon-type="{{$ctrl.parentCtrl.availabilityLineIcons.arrowRight.type}}"\n                svg-icon-set="{{$ctrl.parentCtrl.availabilityLineIcons.arrowRight.iconSet}}"\n                icon-definition="{{$ctrl.parentCtrl.availabilityLineIcons.arrowRight.icon}}"></prm-icon>\n        </md-button>\n    </div>\n</div>'}},{}]},{},[1]);
//# sourceMappingURL=custom.js.map
