
import affDispo from './affDispo.html'
//http://localhost:8003/primo-explore/search?query=any,contains,33PUDB_Alma_Unimarc7156806840004671%20OR%2033PUDB_Alma_Unimarc7180719980004671&tab=default_tab&search_scope=catalog_pci&vid=33PUDB_UBM_VU1&lang=en_US&offset=0
//Cf. case Exlib # 00641786
//Remonte la deuxième mention de disponibilté qui est parfois non affichée quand notices imprimés et électroniques ont été fusionnées 
class affDispoController {
  constructor($scope, $http, $element, $templateCache){
    console.log('---->affDispoController');
    if (this.parentCtrl.result.pnx.control.recordid[0].startsWith('dedup')){
      // console.log(this.parentCtrl.result.pnx.display.title);
      // console.log(this.parentCtrl.result.delivery);
      if (this.parentCtrl.result.delivery.deliveryCategory.length == 1){
        if (typeof this.parentCtrl.result.delivery.GetIt2 !== 'undefined') {
          console.log('---->affDispoController : recalcule de la disponibilité');
          var availability = getAvailabilityStatus(this.parentCtrl.result.delivery.holding);
          this.locations = [];
          this.locations.push({
            availability: availability,
            deliveryCode: 'delivery.code.'+ availability,
            // toTranslate: productionVID(window.appConfig.vid),
            useLinkIcon: true,
            // outboundLink: illLink(pnx),
          })
      }
      console.log(this.locations);
      }
    }
    function getAvailabilityStatus(holding){
      console.log(holding);
      if (typeof holding == 'undefined' || holding == null) {
        return "unavailable_in_all_institutions";
      }
      var availabilityStatus = [];
      for (var i = 0; i < holding.length; i++) {
        if (holding[i].isValidUser){
          availabilityStatus.push(holding[i].availabilityStatus);  
        }
      }
      if (availabilityStatus.length == 0){
          return "does_not_exist_in_maininstitution";
      }
      else{
        if (availabilityStatus.includes('available')){
          return "available_in_maininstitution";
        }
        else {
          return "check_holdings";
        }
      }
    }
    console.log(this);
  }
}
affDispoController.$inject = ['$scope', '$http', '$element', '$templateCache' ]
export let affDispoConfig = {
  bindings: {parentCtrl:'<'},
  controller: affDispoController,
  template: affDispo
}
