!function o(a,s,l){function c(e,t){if(!s[e]){if(!a[e]){var n="function"==typeof require&&require;if(!t&&n)return n(e,!0);if(u)return u(e,!0);var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}var r=s[e]={exports:{}};a[e][0].call(r.exports,function(t){return c(a[e][1][t]||t)},r,r.exports,o,a,s,l)}return s[e].exports}for(var u="function"==typeof require&&require,t=0;t<l.length;t++)c(l[t]);return c}({1:[function(t,e,n){"use strict";var r,i=t("./prmFacetExactAfter/customTLevelFacette"),o=t("./prmLoginAfter/authentificationAutresInst"),a=t("./prmBriefResultAfter/customBriefDisplay"),s=t("./prmGalleryItemAfter/customGalleryDisplay"),l=t("./prmSearchResultAvailabilityLineAfter/affDispo"),c=t("./prmFullViewServiceContainerAfter/dispoElecAutresInst"),u=t("./prmLoanAfter/itemInLoan"),p=t("./prmAuthenticationAfter/forceAuth"),d=t("./prmExploreFooterAfter/logosInsts"),h=t("./prmUserAreaExpandableAfter/panier"),m=t("./prmCollectionNavigationBreadcrumbsAfter/changeLinkToCollectionDiscovery"),f=angular.module("centralCustom",[]);function v(t,e,n){switch(e){case 0:return void 0!==t.isbn?1<t.isbn.length?t.isbn[0]:t.isbn:n;case 1:case 2:case 3:return void 0!==t.doi?t.doi:void 0!==t.pmid?t.pmid:void 0!==t.lad21?t.lad21.toString().replace(/\barXiv.org:\b~?/g,""):n;default:return n}}f&&(f.component("prmFacetExactAfter",i.tLevelFacetteConfig),f.component("prmLoginAfter",o.authentificationAutresInstConfig),f.component("prmBriefResultAfter",a.customBriefDisplayConfig),f.component("prmGalleryItemAfter",s.customGalleryDisplayConfig),f.component("prmSearchResultAvailabilityLineAfter",l.affDispoConfig),f.component("prmFullViewServiceContainerAfter",c.dispoElecAutresInstConfig),f.component("prmLoanAfter",u.itemInLoanConfig),f.component("prmAuthenticationAfter",p.forceAuthConfig),f.component("prmExploreFooterAfter",d.logosInstsConfig),f.component("prmUserAreaExpandableAfter",h.panierConfig),f.component("prmRequestsAfter",h.panierCompteLecteurConfig),f.component("prmCollectionNavigationBreadcrumbsItemAfter",m.changeLinkToCollectionDiscoveryConfig)),r=[{name:"ZoteroBib",type:"urlredirectzotero",icon:{set:"primo-actions",name:"easybib"},action:"https://zbib.org/import?q="}],f.service("customActionService",function(){return{actions:[],processCustomAction:function(t,e){return e.slug=e.name.replace(/\s+/g,""),e.iconname=e.slug.toLowerCase(),e.index=Object.keys(t.actionListService.actionsToIndex).length-1,this.actions.push(e),e},setCustomAction:function(t,e){t.actionLabelNamesMap[e.slug]=e.name,t.actionIconNamesMap[e.slug]=e.iconname,t.actionIcons[e.iconname]={icon:e.icon.name,iconSet:e.icon.set,type:"svg"},t.actionListService.actionsToIndex[e.slug]||(t.actionListService.requiredActionsList[e.index]=e.slug,t.actionListService.actionsToDisplay.unshift(e.slug),t.actionListService.actionsToIndex[e.slug]=e.index);var n="";if("urlredirectzotero"===e.type){console.log(t.item);var i="0",r=new URL(document.location.href);r.hostname,console.log(r.hostname);var o="https://babordplus.hosted.exlibrisgroup.com/primo_library/libweb/webservices/rest/primo-explore/v1/pnxs/xml/"+t.item.context+"/"+t.item.pnx.control.recordid+"?inst=33PUDB_NETWORK%26showPnx=true";if(void 0===t.item.pnx.addata.ristype)console.log("format"+t.item.pnx.addata.format),i=o;else switch(console.log("format"+t.item.pnx.addata.ristype.toString().toLowerCase()),t.item.pnx.addata.ristype.toString().toLowerCase()){case"book":i=v(t.item.pnx.addata,0,o);break;case"jour":i=v(t.item.pnx.addata,1,o);break;case"gen":i=v(t.item.pnx.addata,2,o);break;case"thes":i=v(t.item.pnx.addata,3,o);break;default:i=v(t.item.pnx.addata,4,o)}e.hasOwnProperty("templateVar")&&(e.action=e.action.replace(/{\d}/g,function(t){return e.templateVar[t.replace(/[^\d]/g,"")]}),console.log("templateVar")),n=e.action+i,console.log(n)}t.actionListService.onToggle[e.slug]=function(){window.open(n,"_blank")}},setCustomActionContainer:function(t,e){},getCustomActions:function(){return this.actions}}}).component("prmActionListAfter",{require:{prmActionCtrl:"^prmActionList"},controller:"customActionController"}).controller("customActionController",["$scope","customActionService",function(t,n){var i=this;i.$onInit=function(){r.forEach(function(t){var e=n.processCustomAction(i.prmActionCtrl,t);n.setCustomAction(i.prmActionCtrl,e)})}}])},{"./prmAuthenticationAfter/forceAuth":2,"./prmBriefResultAfter/customBriefDisplay":3,"./prmCollectionNavigationBreadcrumbsAfter/changeLinkToCollectionDiscovery":4,"./prmExploreFooterAfter/logosInsts":5,"./prmFacetExactAfter/customTLevelFacette":6,"./prmFullViewServiceContainerAfter/dispoElecAutresInst":7,"./prmGalleryItemAfter/customGalleryDisplay":8,"./prmLoanAfter/itemInLoan":9,"./prmLoginAfter/authentificationAutresInst":10,"./prmSearchResultAvailabilityLineAfter/affDispo":11,"./prmUserAreaExpandableAfter/panier":12}],2:[function(t,e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.forceAuthConfig={bindings:{parentCtrl:"<"},controller:function t(){if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),"true"==function(t,e){var n=t.indexOf("?");if(-1!==n)for(var i=t.substring(n+1).split("&"),r=0;r<i.length;r++){var o=i[r].split("=");if(decodeURIComponent(o.shift())==e)return decodeURIComponent(o.join("="))}}(this.parentCtrl.loginService.$location.$$absUrl,"forcelogin")){var e=this.parentCtrl.loginService.$location.$$absUrl.replace("&forcelogin=true","");e=encodeURIComponent(e);var n=this.parentCtrl.authenticationService.userSessionManagerService.inst,i=n+"_SAML_"+n.replace("33PUDB_",""),r="/primo_library/libweb/primoExploreLogin?institution="+n+"&lang=fr_FR&target-url="+e+"&authenticationProfile="+i;location.href=r}}}},{}],3:[function(t,e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.customBriefDisplayConfig={bindings:{parentCtrl:"<"},controller:function t(){if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),console.log("----\x3e33PUDB customBriefDisplayController"),console.log(this),"PC"==this.parentCtrl.item.context){var e=[],n=this.parentCtrl.item.pnx.display.creator,i=void 0!==this.parentCtrl.item.pnx.display.publisher?this.parentCtrl.item.pnx.display.publisher:this.parentCtrl.item.pnx.display.source,r=this.parentCtrl.item.pnx.display.creationdate,o=this.parentCtrl.item.pnx.display.ispartof,a=i+" : "+r,s={values:[void 0===o?{clazz:"media-publisher",codes:[""],key:"publisher",text:[a],values:[a]}:{clazz:"media-ispartof",codes:[""],key:"ispartof",text:o,values:o}],delimiter:" ; "};e.unshift(s);var l={values:[{clazz:"media-creator",codes:[""],key:"creator",text:n,values:n}],delimiter:" ; "};e.unshift(l),this.parentCtrl.otherLines=e}console.log(this.parentCtrl.otherLines),"L"==this.parentCtrl.item.context&&this.parentCtrl.item.pnx.control.recordid[0].startsWith("dedup")&&(console.log("dedup"),e=[],n=this.parentCtrl.item.pnx.display.lds02,a=this.parentCtrl.item.pnx.display.lds01[0],console.log(a),s={values:[{clazz:"media-publisher",codes:[""],key:"publisher",text:[a],values:[a]}],delimiter:" ; "},e.unshift(s),l={values:[{clazz:"media-creator",codes:[""],key:"creator",text:n,values:n}],delimiter:" ; "},e.unshift(l),this.parentCtrl.otherLines=e)}}},{}],4:[function(t,e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=function t(e,n){var i=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$translate=n,this.$element=e;var r=this.parentCtrl.$stateParams.vid.substr(0,this.parentCtrl.$stateParams.vid.length-4),o=this.parentCtrl._breadcrumbStateParams.inst?this.parentCtrl._breadcrumbStateParams.inst:r;if(console.log(r+"/"+o),console.log(this),console.log(this.$element.parent().children()[0]),r!=o&&(this.parentCtrl._breadcrumbStateParams.vid=o+"_VU1",this.$element.parent().children()[0].setAttribute("target","_self")),void 0===this.parentCtrl._breadcrumbStateParams.collectionId&&void 0===this.parentCtrl.$stateParams.collectionId){var a=void 0;this.$translate("nui.colldiscovery.lobby.linktitle."+this.parentCtrl.institution).then(function(t){a=t,console.log(a),i.$element.parent().children()[0].children[0].innerText=a})}};i.$inject=["$element","$translate"];n.changeLinkToCollectionDiscoveryConfig={bindings:{parentCtrl:"<"},controller:i}},{}],5:[function(t,e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.logosInstsConfig={bindings:{parentCtrl:"<"},controller:function t(){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var i=new URL(document.location.href),e=(i.searchParams.get("lang"),i.pathname,i.searchParams.get("displayFooter")),r=i.searchParams.get("vid"),o=(i.searchParams.get("url_ver"),r.replace(/_VU./g,""));this.institutionsList=[],this.institutionsUrl={},this.displayFooter=!0,"false"==e&&(this.displayFooter=!1),this.parentCtrl.mappingTablesCache.MAPPING_TABLES_CACHE["Alma Institution Codes"].forEach(function(t){var e=t.source1;console.log(e),"33PUDB_NETWORK"!=e&&(new RegExp(o,"g"),n.institutionsList.push(e),n.institutionsUrl[e]="https://"+i.hostname+"/primo-explore/search?vid="+e+"_VU1")}),this.message="Réseau des bibliothèques universitaires bordelaises",this.institutionsList.sort()},template:'<div class="footer" ng-if="$ctrl.displayFooter">\n    <div class="footer-inner">\n        <div class="footer-instruction">\n            {{$ctrl.message}}\n        </div>\n        <div class="footer-logo-alignement">\n            <a ng-repeat="almaInst in $ctrl.institutionsList" class="footer-logo"\n                href="{{$ctrl.institutionsUrl[almaInst]}}" title="{{almaInst|translate}}" target="_blank">\n                <img src="/primo-explore/custom/CENTRAL_PACKAGE/img/Logos/{{almaInst}}_Logo.png" />\n            </a>\n        </div>\n    </div>\n</div>'}},{}],6:[function(t,e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}}();var i=function(){function i(){if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),console.log("----\x3e 33PUDB tLevelFacetteController"),"tlevel"==this.parentCtrl.facetGroup.name)for(var t=this.parentCtrl.facetGroup.values,e=0;e<t.length;e++){var n=t[e].value;["peer_reviewed","open_access","available"].includes(n)&&(t.splice(e,1),e-=1)}}return r(i,[{key:"recordid",get:function(){return this.parentCtrl.item.pnx.control.recordid[0]}}]),i}();n.tLevelFacetteConfig={bindings:{parentCtrl:"<"},controller:i}},{}],7:[function(t,e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}}();var i=function(){function i(t){if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),console.log(this),this.sce=t,void 0!==this.parentCtrl.service&&(this.serviceName=this.parentCtrl.service.scrollId,"getit_link1_0"==this.serviceName&&"Alma-E"==this.parentCtrl.service.linkElement.category)){this.REBUB_vue=this.parentCtrl.configurationUtil.vid,this.REBUB_institution=this.parentCtrl.configurationUtil.vid.match(/(33PUDB_\S+?)_/)[1],this.institutionsLIst=[],this.dispos=this.parentCtrl.item.pnx.delivery.delcategory,this.isShowContent={};for(var e=0;e<this.dispos.length;e++){var n=this.dispos[e].match(/(\$\$V|^)(.*?)\$\$I(.*?)(\$|$)/);"Alma-E"==n[2]&&n[3]!=this.REBUB_institution&&"33PUDB_NETWORK"!=n[3]&&(this.institutionsLIst.push(n[3]),this.isShowContent[n[3]]=!1)}this.dispo_autres_inst=0<this.institutionsLIst.length}}return r(i,[{key:"showComponent",value:function(t){for(var e=t.match(/33PUDB_(.*)/)[1].toLowerCase(),n=t+"_VU1",i=this.parentCtrl.item.lang3?this.parentCtrl.item.lang3:"fre",r=(new Date).toISOString(),o=this.parentCtrl.item.pnx.control.almaid,a=this.parentCtrl.item.pnx.control.recordid[0].startsWith("dedup"),s=[],l=0;l<o.length;l++)if(a){var c=o[l].match(/\$\$V(.*?)\$\$O.*?_.*?_(.*?)\d/);"Marc"==c[2]&&s.push("ie="+c[1])}else s.push("ie="+o[l]);for(var l in this.openUrl="https://pudb-"+e+".userservices.exlibrisgroup.com/view/uresolver/"+t+"/openurl?ctx_enc=info:ofi/enc:UTF-8&ctx_id=10_1&ctx_tim="+r+"&ctx_ver=Z39.88-2004&url_ctx_fmt=info:ofi/fmt:kev:mtx:ctx&url_ver=Z39.88-2004&rfr_id=info:sid/primo.exlibrisgroup.com-33PUDB_Alma_Marc&req_id=&rft_dat="+s.toString()+",language="+i+",view="+this.REBUB_vue+"&svc_dat=viewit&u.ignore_date_coverage=true&is_new_ui=true&Force_direct=false&req.skin="+n,this.isShowContent)l!=t&&(this.isShowContent[l]=!1);this.isShowContent[t]=!this.isShowContent[t],this.templateURL="custom/CENTRAL_PACKAGE/js/prmFullViewServiceContainerAfter/bouttonAfficheDispoElec.html"}},{key:"trustAsUrl",value:function(t){return this.sce.trustAsResourceUrl(t)}}]),i}();i.$inject=["$sce"];n.dispoElecAutresInstConfig={bindings:{parentCtrl:"<"},controller:i,template:'<div ng-if="$ctrl.serviceName===\'getit_link1_0\' && $ctrl.dispo_autres_inst===true" class="33PUDB_Elec_autres_inst">\n    <h3 class="medium-uppercase-bold"> <span translate="nui.brief.results.tabs.getit_other">Get it from other\n            institutions</span> </h3>\n    <div ng-repeat="almaInst in $ctrl.institutionsLIst">\n        <button\n            class="neutralized-button layout-full-width layout-display-flex md-button md-primoExplore-theme md-ink-ripple"\n            type="button" ng-click="$ctrl.showComponent(almaInst); ">\n            <div layout="row" flex="100" layout-align="space-between center"\n                class="layout-align-space-between-center layout-row flex-100">\n                <div class="md-list-item-text">\n                    <h3 translate="{{almaInst}}">{{almaInst}}</h3>\n                    <p><span class="availability-status restricted" translate="delivery.code.restricted">Online access\n                            is restricted</span></p>\n                </div>\n                <prm-icon icon-type="svg" svg-icon-set="hardware" icon-definition="ic_keyboard_arrow_right_24px">\n                    <md-icon md-svg-icon="hardware:ic_keyboard_arrow_right_24px" alt="" class="md-primoExplore-theme"\n                        aria-hidden="true"></md-icon>\n                    <prm-icon-after parent-ctrl="$ctrl"></prm-icon-after>\n                </prm-icon>\n            </div>\n            <div class="md-ripple-container"></div>\n        </button>\n        <rebub-autres-abos rebub-etab="$ctrl.rebubEtab" ng-if="$ctrl.isShowContent[almaInst]">\n            <iframe iframe-onload="" class="mashup-iframe" ng-src="{{$ctrl.trustAsUrl($ctrl.openUrl)}}"\n                style="width: 100%; border: none; overflow: hidden; height: 105px;" id="iFrameResizer1" scrolling="no">\n            </iframe>\n            \x3c!-- <div ng-include src="$ctrl.templateURL"></div> --\x3e\n        </rebub-autres-abos>\n\n    </div>\n</div>'}},{}],8:[function(t,e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=function t(a){var s=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),setTimeout(function(){s.$element=a,console.log("----\x3e33PUDB customGalleryDisplayController"),console.log(s);var t=void 0===s.parentCtrl.item.pnx.display.lds02?"":s.parentCtrl.item.pnx.display.lds02,e=void 0===s.parentCtrl.item.pnx.display.lds01?"":s.parentCtrl.item.pnx.display.lds01;console.log(s.$element[0].parentElement);var n=s.$element[0].parentElement.querySelector("div.item-info"),i=document.createElement("div");i.setAttribute("class","infoEx");var r=document.createElement("p");r.setAttribute("class","firstLine"),r.innerText=t,i.appendChild(r);var o=document.createElement("p");o.setAttribute("class","secondLine"),o.innerText=e,i.appendChild(o),n.appendChild(i)},1e3)};i.$inject=["$element"];n.customGalleryDisplayConfig={bindings:{parentCtrl:"<"},controller:i}},{}],9:[function(t,e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var m=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],i=!0,r=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(i=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);i=!0);}catch(t){r=!0,o=t}finally{try{!i&&s.return&&s.return()}finally{if(r)throw o}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")};var i=function t(e,n){var i=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$translate=n,console.log("---\x3eitemInLoanController"),console.log(this);var r=this.parentCtrl.item.loandate,o=this.parentCtrl.item.duedate,a=new Date,s=p(u(o),u(r)),l=p(a,u(r)),c=this.parentCtrl.item.ilsinstitutioncode;function u(t){var e=/(\d{2})\/(\d{2})\/(\d{4})/.exec(t),n=m(e,4),i=n[1],r=n[2],o=n[3],a=new Date(o,r-1,i);return console.log(a),a}function p(t,e){return Math.round(Math.abs((t.getTime()-e.getTime())/864e5))}function d(t,e){return new Date(t.getFullYear(),t.getMonth(),t.getDate()+e,t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()).toLocaleDateString()}function h(t){var e={fr_FR:"Prolongation impossible avant le ",en_US:"Not renewable before ",es_ES:"No renovable hasta "}[1<arguments.length&&void 0!==arguments[1]?arguments[1]:"fr_FR"]+t,n='<div class="not-renewable weak-text layout-align-start-center" aria-label="'+e;return n=(n+=' aria-hidden="false" layout-align="start center"><prm-icon icon-type="svg" svg-icon-set="primo-ui" icon-definition="lock">\x3c!----\x3e<md-icon ng-if="!$ctrl.isCustom" md-svg-icon="primo-ui:lock" alt="" class="md-primoExplore-theme" aria-hidden="true"><svg id="lock" width="100%" height="100%" viewBox="0 0 24 24" y="1320" xmlns="http://www.w3.org/2000/svg" fit="" preserveAspectRatio="xMidYMid meet" focusable="false"><path d="M12,17C10.89,17 10,16.1 10,15C10,13.89 10.89,13 12,13A2,2 0 0,1 14,15A2,2 0 0,1 12,17M18,20V10H6V20H18M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V10C4,8.89 4.89,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z"></path>   </svg></md-icon>\x3c!----\x3e\x3c!----\x3e<prm-icon-after parent-ctrl="$ctrl"></prm-icon-after></prm-icon><span>')+e+"</span>\x3c!----\x3e</div>\x3c!----\x3e"}console.log(c),"33PUDB_UB"!=c&&(this.$translate("nui.loans."+c+"_duree_prolongation").then(function(t){console.log("Durée de prolongation : "+t),t<s&&"Y"===i.parentCtrl.item.renew&&l<t?(i.parentCtrl.item.renew="N",e.parent().children()[0].children[4].innerHTML=h(d(u(r),t),i.parentCtrl.loansService.requestParams.lang)):s<=t&&"Y"===i.parentCtrl.item.renew&&(i.parentCtrl.item.renew="N",e.parent().children()[0].children[4].innerHTML=h(d(u(o),-2),i.parentCtrl.loansService.requestParams.lang))}),console.log("Exemplaire emprunté le "+r+". A rendre le "+o+"."),console.log("Exemplaire emprunté le "+u(r)+". A rendre le "+u(o)+"."),console.log("Durée du prêt :"+s)),this.parentCtrl.item._fullDisplayValues=[{key:"loan_date",value:this.parentCtrl.item.loandate},{key:"max_renew_date",value:this.parentCtrl.item.maxrenewdate}]};i.$inject=["$element","$translate"];n.itemInLoanConfig={bindings:{parentCtrl:"<"},controller:i}},{}],10:[function(t,e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}}();var r=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.hostAuth=this.parentCtrl.$location.$$host,"/login"==this.parentCtrl.$location.$$path?this.absUrl="https://"+this.hostAuth+"/primo-explore/account?vid=33PUDB_UBM_VU1&section=overview":this.absUrl=this.parentCtrl.$location.$$absUrl,this.absUrl=encodeURIComponent(this.absUrl),this.sourceView=this.parentCtrl.$location.$$search.vid,this.langue=this.parentCtrl.$stateParams.lang,this.auth_base_url_const="https://"+this.hostAuth+"/primo_library/libweb/primoExploreLogin?institution=",this.PUDB_Auth_Lists=[["1","33PUDB_BXSA","33PUDB_BXSA_SAML_BXSA",this.absUrl.replace(/vid\%3D33PUDB_.*_VU1/,"vid%3D33PUDB_BXSA_VU1"),"33PUDB_BXSA_VU1","Bordeaux Sciences Agro"],["2","33PUDB_IEP","33PUDB_IEP_SAML_IEP",this.absUrl.replace(/vid\%3D33PUDB_.*_VU1/,"vid%3D33PUDB_IEP_VU1"),"33PUDB_IEP_VU1","Bordeaux Sciences Po"],["3","33PUDB_UB","33PUDB_UB_SAML_UB",this.absUrl.replace(/vid\%3D33PUDB_.*_VU1/,"vid%3D33PUDB_UB_VU1"),"33PUDB_UB_VU1","Université de Bordeaux"],["4","33PUDB_UBM","33PUDB_UBM_SAML_UBM",this.absUrl.replace(/vid\%3D33PUDB_.*_VU1/,"vid%3D33PUDB_UBM_VU1"),"33PUDB_UBM_VU1","Université Bordeaux Montaigne"],["5","33PUDB_INP","33PUDB_INP_SAML_INP",this.absUrl.replace(/vid\%3D33PUDB_.*_VU1/,"vid%3D33PUDB_INP_VU1"),"33PUDB_INP_VU1","Bordeaux INP"]]}return i(t,[{key:"setIdPShow",value:function(t){return Boolean(this.parentCtrl.usernamePasswordLoginService.inst!==t)}}]),t}();n.authentificationAutresInstConfig={bindings:{parentCtrl:"<"},controller:r,template:'<h2 class="md-headline light-text layout-align-center-center layout-row flex"><span translate="">Membre d\'un autre\n    &#233;tablissement du r&#233;seau Bordelais? </span></h2>\n<p class="layout-align-center-center layout-row flex">Authentifiez-vous sur votre Babord + pour profiter d\'un service\n    optimis&#233;</p>\n<div id="REBUB-Authentification-Ext" layout="raw">\n    <md-list-item ng-repeat="PUDB_Auth_List in $ctrl.PUDB_Auth_Lists" ng-show="$ctrl.setIdPShow(\'{{PUDB_Auth_List[1]}}\')"\n        class="rebub-authentification-externe">\n        <a ng-href="{{$ctrl.auth_base_url_const}}{{PUDB_Auth_List[1]}}&lang=fr_FR&target-url={{PUDB_Auth_List[3]}}&authenticationProfile={{PUDB_Auth_List[2]}}"\n            &auth=SAML&isSilent=false"\n            ng-attr-title="Après vous être authentifié sur le portail de {{PUDB_Auth_List[5]}} vous serez redirigé vers le Babord + de l\'institution">\n            <img class="rebub-logo" ng-src="custom/CENTRAL_PACKAGE/img/Logos/{{PUDB_Auth_List[1]}}_Logo.png"\n                ng-attr-alt="Logo de  {{PUDB_Auth_List[5]}}">\n        </a>\n    </md-list-item>\n</div>'}},{}],11:[function(t,e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=function t(e,n,i,r){if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),console.log("----\x3eaffDispoController"),this.parentCtrl.result.pnx.control.recordid[0].startsWith("dedup")&&1==this.parentCtrl.result.delivery.deliveryCategory.length){if(void 0!==this.parentCtrl.result.delivery.GetIt2){console.log("----\x3eaffDispoController : recalcule de la disponibilité");var o=function(t){if(console.log(t),void 0===t||null==t)return"unavailable_in_all_institutions";for(var e=[],n=0;n<t.length;n++)t[n].isValidUser&&e.push(t[n].availabilityStatus);return 0==e.length?"does_not_exist_in_maininstitution":e.includes("available")?"available_in_maininstitution":"check_holdings"}(this.parentCtrl.result.delivery.holding);this.locations=[],this.locations.push({availability:o,deliveryCode:"delivery.code."+o,useLinkIcon:!0})}console.log(this.locations)}console.log(this)};i.$inject=["$scope","$http","$element","$templateCache"];n.affDispoConfig={bindings:{parentCtrl:"<"},controller:i,template:'<div ng-repeat="availability in $ctrl.locations" layout="row" layout-align="start start">\n    <div layout="row" layout-align="start start"\n        class="layout-align-start-start layout-row avail-row {{availability.availability}}">\n        <prm-icon availability-type icon-type="{{$ctrl.parentCtrl.availabilityLineIcons.physicalMaterial.type}}"\n            svg-icon-set="{{$ctrl.parentCtrl.availabilityLineIcons.physicalMaterial.iconSet}}"\n            icon-definition="{{$ctrl.parentCtrl.availabilityLineIcons.physicalMaterial.icon}}"></prm-icon>\n        <md-button prm-brief-internal-button-marker\n            ng-click="$ctrl.parentCtrl.handleAvailability($index, $event);$event.preventDefault();"\n            class="neutralized-button arrow-link-button"\n            aria-label="{{$ctrl.parentCtrl.getTranslatedLine(availability.deliveryCode)}}"\n            title="{{$ctrl.parentCtrl.getTranslatedLine(availability.deliveryCode)}}">\n            <span class="button-content">\n                <span class="availability-status {{availability.availability}}"\n                    ng-class="{\'text-rtl\': $ctrl.parentCtrl.switchToLtrString()}"\n                    translate="{{availability.deliveryCode}}"\n                    translate-values="$ctrl.parentCtrl.getPlaceHolders($ctrl.result)" \n                    translate-compile>\n                </span>\n            </span>\n            <prm-spinner class="inline-loader display-inline dark-on-light half-transparent"\n                ng-if="$ctrl.result.rtaInProgress"></prm-spinner>\n            <prm-icon link-arrow icon-type="{{$ctrl.parentCtrl.availabilityLineIcons.arrowRight.type}}"\n                svg-icon-set="{{$ctrl.parentCtrl.availabilityLineIcons.arrowRight.iconSet}}"\n                icon-definition="{{$ctrl.parentCtrl.availabilityLineIcons.arrowRight.icon}}"></prm-icon>\n        </md-button>\n    </div>\n</div>'}},{}],12:[function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var a=["33PUDB_UB","33PUDB_BXSA"],i=function t(e,n){o(this,t),this.$http=e,this.element=n,console.log("Panier"),console.log(this);var i=this.parentCtrl.view;if(this.institution=i.replace(/^(33PUDB_.*?)_.*/,"$1"),this.showLink=!!a.includes(this.institution),this.uSMS=this.parentCtrl.userSessionManagerService,this.panierUser="",console.log(this),this.uSMS){var r=this.uSMS.jwtUtilService.getDecodedToken()||{};console.log(r),this.panierUser=r.user}this.panierUrl="https://scoop.u-bordeaux.fr/panier/"+this.panierUser+"/"+this.institution};i.$inject=["$http","$element"];n.panierConfig={bindings:{parentCtrl:"<"},controller:i,template:'\n        <div ng-if="$ctrl.uSMS.isGuest() == false && $ctrl.showLink == true" id="panier-covid" class="layout-align-center layout-row">\n          <a class="md-icon-button button-over-dark md-button md-primoExplore-theme md-ink-ripple"\n                    aria-label="Votre Panier" ng-click="$ctrl.openHelpMenu($event)"\n                    href="{{$ctrl.panierUrl}}" target="_blank" title="Accèder à vos documents réservés pour finaliser la commande">\n            <prm-icon icon-type="svg" svg-icon-set="action" icon-definition="ic_shopping_basket_24px"></prm-icon>\n          </a>\n        </div>'};var r=function t(e,n){o(this,t),console.log("Lien Panier"),console.log(this),this.$http=e,this.element=n,this.cetcinst=a,console.log(this.requestsCounter);var i=this.parentCtrl.jwtUtilService.getDecodedToken()||{};console.log(i),this.panierUser=i.user};r.$inject=["$http","$element"];n.panierCompteLecteurConfig={bindings:{parentCtrl:"<"},controller:r,template:'\n       <a ng-if="$ctrl.parentCtrl.requestsCounter > 0 && $ctrl.cetcinst.indexOf($ctrl.parentCtrl.accountOverviewService.linkedUserSelectorService._selectedInstitution.institutionCode) > -1"\n          class="button-link md-button button-large md-primoExplore-theme md-ink-ripple"\n          type="button"\n          href="https://scoop.u-bordeaux.fr/panier/{{ $ctrl.panierUser }}/{{ $ctrl.parentCtrl.accountOverviewService.linkedUserSelectorService._selectedInstitution.institutionCode }}"\n          target="_blank" title="Accèder à vos documents réservés pour finaliser la commande" style="">\n         <prm-icon icon-type="svg" svg-icon-set="action" icon-definition="ic_shopping_basket_24px"></prm-icon>\n         <span>Prendre rendez-vous pour le retrait des documents</span>\n       </a>'}},{}]},{},[1]);
//# sourceMappingURL=custom.js.map
