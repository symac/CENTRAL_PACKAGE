
//http://localhost:8003/primo-explore/search?query=any,contains,33PUDB_Alma_Unimarc7156806840004671%20OR%2033PUDB_Alma_Unimarc7180719980004671&tab=default_tab&search_scope=catalog_pci&vid=33PUDB_UBM_VU1&lang=en_US&offset=0
//
class affDispoController {
  constructor(){
    console.log('---->affDispoController');
    if (this.parentCtrl.result.pnx.control.recordid[0].startsWith('dedup')){
      console.log(this.parentCtrl.result.pnx.display.title);
      console.log(this.parentCtrl.result.delivery);
      var almaP = {
        values : [hSecondValue],
        delimiter : " ;"
      };
      if (this.parentCtrl.result.delivery.deliveryCategory.length == 1){
        this.parentCtrl.result.delivery.GetIt1.unshift('Alma-P');
        delete this.parentCtrl.result.delivery.GetIt2;
        this.parentCtrl.result.delivery.deliveryCategory.unshift('Alma-P');
        this.parentCtrl.result.delivery.displayLocation = true;
        this.parentCtrl.result.delivery.availability.unshift('available_in_my_institution');
      }
    }
  }

  get recordid() {
    return this.parentCtrl.item.pnx.control.recordid[0];
  }
}

export let affDispoConfig = {
  bindings: {parentCtrl:'<'},
  controller: affDispoController,
  template: '<h1>TEST</h1>'
}
