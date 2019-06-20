
import affDispo from './affDispo.html'
//http://localhost:8003/primo-explore/search?query=any,contains,33PUDB_Alma_Unimarc7156806840004671%20OR%2033PUDB_Alma_Unimarc7180719980004671&tab=default_tab&search_scope=catalog_pci&vid=33PUDB_UBM_VU1&lang=en_US&offset=0
//
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
        // var almaP = {
        //   links : [this.parentCtrl.result.delivery.GetIt2],
        //   category : "Alma-P"
        // };
        // delete almaP.links[0].serviceModeGetit2;
        // almaP.links[0].getItTabText = "alma_tab1_avail";
        // this.parentCtrl.result.delivery.displayedAvailability = "available_in_my_institution";
        // this.parentCtrl.result.delivery.physicalItemTextCodes = "delivery.code.alsophysical";
        // this.parentCtrl.result.delivery.availabilityLinks.unshift("detailsGetit1");
        // this.parentCtrl.result.delivery.GetIt1.push(almaP);
        // delete this.parentCtrl.result.delivery.GetIt2;
        // this.parentCtrl.result.delivery.deliveryCategory.unshift('Alma-P');
        // this.parentCtrl.result.delivery.serviceMode.push("activate");
        // var holding = this.parentCtrl.result.delivery.holding;
        // this.parentCtrl.result.delivery.bestlocation = getBestLocation(holding);
        // this.availability = ['not_restricted','available_in_my_institution'];
        // this.parentCtrl.result.delivery.availabilityLinksUrl.unshift("");      
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
