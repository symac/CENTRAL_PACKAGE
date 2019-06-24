/*[33PUDB_NETWORK_AFA] - Affiche la disponibilité des RE dans une autre institution*/
//http://localhost:8003/primo-explore/fulldisplay?docid=33PUDB_Alma_Marc7167182610004671&context=L&vid=33PUDB_UB_VU2&lang=en_US&search_scope=catalog_pci&adaptor=Local%20Search%20Engine&tab=default_tab&query=any,contains,revue%20de%20droit&offset=0
//http://localhost:8003/primo-explore/fulldisplay?docid=33PUDB_Alma_Unimarc7157521910004671&context=L&vid=33PUDB_UB_VU2&lang=en_US&search_scope=catalog_pci&adaptor=Local%20Search%20Engine&tab=default_tab&query=any,contains,revue%20fran%C3%A7aise%20de%20gestion
import dispoElecAutresInstHTML from './dispoElecAutresInst.html'

class dispoElecAutresInstController {
  constructor($sce) {
    console.log('---->dispoElecAutresInstController');
    this.sce = $sce;
    this.serviceName = this.parentCtrl.service.scrollId;
    /*On ne travaille qu'au niveau du view it*/
    if (this.serviceName == "getit_link1_0") {
      //Vue actuelle
      this.REBUB_vue = this.parentCtrl.configurationUtil.vid;
      //Je récupère le code de l'institution
      this.REBUB_institution = this.parentCtrl.configurationUtil.vid.match(/(33PUDB_\S+?)_/)[1];
      this.institutionsLIst = [];
      this.dispos = this.parentCtrl.item.pnx.delivery.delcategory;
      this.isShowContent = {};
      // console.log(this);
      //Je construit une liste avec chaque institution proposant l'accès électronique au documment (pnx/delivery/delcategory)
      for (var i = 0; i < this.dispos.length; i++) {
        var dispoElement = this.dispos[i].match(/(\$\$V|^)(.*?)\$\$I(.*?)(\$|$)/);
        if (dispoElement[2] == "Alma-E" && dispoElement[3] != this.REBUB_institution && dispoElement[3] != "33PUDB_NETWORK") {
          this.institutionsLIst.push(dispoElement[3]);
          this.isShowContent[dispoElement[3]] = false;
        }
      }
      this.dispo_autres_inst = this.institutionsLIst.length > 0 ? true : false;
      // console.log(this.institutionsLIst);
    }
  }

  showComponent(institution) {

    /*Construction de l'Open Url*/
    /************************** */
    var instanceAlma = institution.match(/33PUDB_(.*)/)[1].toLowerCase();
    var skin = institution + '_VU1';
    var langue = this.parentCtrl.item.lang3 ? this.parentCtrl.item.lang3 : "fre";
    var date = new Date();
    var ctxTim = date.toISOString();
    /*On récupère l'identifiant des notices Alma*/
    var almaIdList = this.parentCtrl.item.pnx.control.almaid;
    var isDedup = this.parentCtrl.item.pnx.control.recordid[0].startsWith('dedup');
    var ids_notice = [];
    for (var i = 0; i < almaIdList.length; i++) {
      /*Si la notice est fusionnée, les idAlma sont affichés comme ça : $$V33PUDB_NETWORK:7167176110004671$$O33PUDB_Alma_Marc7167176110004671
      On extrait l'identifiant et on filtre les notices électroniques (Alma_Marc)*/
      if (isDedup){
        var idElement = almaIdList[i].match(/\$\$V(.*?)\$\$O.*?_.*?_(.*?)\d/);
        if (idElement[2] == 'Marc'){
          ids_notice.push('ie=' + idElement[1]);
        }
      }
      else{
        ids_notice.push('ie=' + almaIdList[i]);
      }
    }
    this.openUrl = "https://pudb-" + instanceAlma
                   + ".userservices.exlibrisgroup.com/view/uresolver/"
                   + institution 
                   + "/openurl?ctx_enc=info:ofi/enc:UTF-8&ctx_id=10_1&ctx_tim=" 
                   + ctxTim 
                   + "&ctx_ver=Z39.88-2004&url_ctx_fmt=info:ofi/fmt:kev:mtx:ctx&url_ver=Z39.88-2004&rfr_id=info:sid/primo.exlibrisgroup.com-33PUDB_Alma_Marc&req_id=&rft_dat=" 
                   + ids_notice.toString() 
                   + ",language=" 
                   + langue
                   + ",view=" 
                   + this.REBUB_vue
                   + "&svc_dat=viewit&u.ignore_date_coverage=true&is_new_ui=true&Force_direct=false&req.skin=" 
                   + skin;
    /*Masquage/Affichage  de l'iframe*/
    /******************************** */
    for (var i in this.isShowContent) {
      console.log(i);
      if(i != institution){
        this.isShowContent[i] = false;  
      }
    }
    this.isShowContent[institution] = !this.isShowContent[institution];
    this.templateURL = 'custom/CENTRAL_PACKAGE/js/prmFullViewServiceContainerAfter/bouttonAfficheDispoElec.html';
    console.log(this.isShowContent);

  }
  trustAsUrl(url){
    return this.sce.trustAsResourceUrl(url);
  }
}

dispoElecAutresInstController.$inject = ['$sce'];

export let dispoElecAutresInstConfig = {
  bindings: { parentCtrl: '<' },
  controller: dispoElecAutresInstController,
  template: dispoElecAutresInstHTML
}