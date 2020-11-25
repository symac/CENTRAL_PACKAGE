class panierController {
    constructor($http,$element) {
      this.$http = $http;
      this.element = $element;

      console.log("Panier");
      console.log(this);
      let view = this.parentCtrl.view;
      this.institution = view.replace(/^33PUDB_(.*?)_.*/, '$1');
      this.uSMS = this.parentCtrl.userSessionManagerService;
      this.panierUser = "";
      console.log(this.uSMS.isGuest());
      if (this.uSMS) {
        let jwtData = this.uSMS.jwtUtilService.getDecodedToken() || {};
        console.log(jwtData);
        this.panierUser = jwtData.user;

      }
      this.panierUrl = "https://scoop.u-bordeaux.fr/panier/" +  this.panierUser +"/" + this.institution
      // this.nb_resa =  0;
      // this.$http.get("/primo_library/libweb/webservices/rest/v1/myaccount/requests")
      //     .then(function mySuccess(response) {
      //         console.log(response);
      //         if (response.data.data != undefined) {
      //             let resas = response.data;
      //             console.log("Papayou")
      //             console.log(resas.status)
      //             console.log(response);
      //             if (resas.status == 'ok') {
      //               this.nb_resa = resas.holds.hold.length
      //             }
      //             else{
      //               console.log("Erreur");
      //               this.nb_resa =  0;
      //             }
                  
      //             }
      //         else{
      //           console.log("Erreur");
      //           this.nb_resa =  0;
      //         }
      //     }, function myError(response) {
      //         console.log("Erreur");
      //         this.nb_resa =  0;
              
      //     });

      //     console.log("tuc"); 
      //     console.log(this.nb_resa); 


    }


  
 
  };


  panierController.$inject = ['$http','$element'];
  export let panierConfig = {
      bindings: {parentCtrl:'<'},
      controller: panierController,
      template: `
        <div ng-if="$ctrl.uSMS.isGuest() == false && $ctrl.institution == 'UB'" id="panier-covid" class="layout-align-center layout-row">
          <a class="md-icon-button button-over-dark md-button md-primoExplore-theme md-ink-ripple"
                    aria-label="Votre Panier" ng-click="$ctrl.openHelpMenu($event)"
                    href="{{$ctrl.panierUrl}}" target="_blank" title="accèder à vos documents réservés pour finaliser la commande">
            <prm-icon icon-type="svg" svg-icon-set="action" icon-definition="ic_shopping_basket_24px"></prm-icon>
          </a>
        </div>`,
    }
    