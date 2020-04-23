class itemInLoanController { 
    constructor($element){
        console.log("--->itemInLoanController");
        // console.log(this);
        var loanDate = this.parentCtrl.item.loandate;
        var dueDate = this.parentCtrl.item.duedate;
        var today = new Date();
        var loanDuration = calcDiffDate(formatDate(dueDate), formatDate(loanDate))
        var daysSinceLoanDate = calcDiffDate(today, formatDate(loanDate));
        // console.log("Exemplaire emprunté le "+loanDate +". A rendre le "+dueDate+".");
        // console.log("Durée du prêt :"+loanDuration);
        // Si la durée du prêt est supérieure à 7 jours
        if (loanDuration > 7 && this.parentCtrl.item.renew === "Y"){
            if( daysSinceLoanDate < 7) {
                this.parentCtrl.item.renew = "N";
                $element.parent().children()[0].children[4].innerHTML = newButtonMsg(addDays(today,daysSinceLoanDate),this.parentCtrl.loansService.requestParams.lang);
            } 
        }
        // On vide l'affichage détaillé et on ne conserve que la dated'emprunt 
        this.parentCtrl.item._fullDisplayValues = [ {key : "loan_date", value : this.parentCtrl.item.loandate},
                                                    {key : "max_renew_date", value : this.parentCtrl.item.maxrenewdate}];


    
        
        function formatDate(date){
            var regex = /(\d{2})\/(\d{2})\/(\d{4})/;
            var [,day, month, year] = regex.exec(date)
            var formatedDate = new Date(year, month - 1 , day);
            // console.log(formatedDate);
            return formatedDate;
        }
        function calcDiffDate(firstDate, secondDate){
            var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds    
            var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
            // console.log(diffDays);
            return diffDays
        }
        function addDays(date,days){
            var result = new Date();
            // console.log(date+" + "+days);
            result.setDate(date.getDate() + (7-days));
            return result.toLocaleDateString();
        }
        function newButtonMsg(renewdateok,lang = 'fr_FR'){
            var msg = {
                "fr_FR" : "Prolongation impossible avant le ",
                "en_US" : "Not renewable before ",
                "es_ES" : "No renovable hasta "
            };
            var fullMsg = msg[lang] + renewdateok;
            var html = '<div class="not-renewable weak-text layout-align-start-center" aria-label="' + fullMsg;
            html = html + ' aria-hidden="false" layout-align="start center"><prm-icon icon-type="svg" svg-icon-set="primo-ui" icon-definition="lock"><!----><md-icon ng-if="!$ctrl.isCustom" md-svg-icon="primo-ui:lock" alt="" class="md-primoExplore-theme" aria-hidden="true"><svg id="lock" width="100%" height="100%" viewBox="0 0 24 24" y="1320" xmlns="http://www.w3.org/2000/svg" fit="" preserveAspectRatio="xMidYMid meet" focusable="false"><path d="M12,17C10.89,17 10,16.1 10,15C10,13.89 10.89,13 12,13A2,2 0 0,1 14,15A2,2 0 0,1 12,17M18,20V10H6V20H18M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V10C4,8.89 4.89,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z"></path>   </svg></md-icon><!----><!----><prm-icon-after parent-ctrl="$ctrl"></prm-icon-after></prm-icon><span>';
            html = html + fullMsg + '</span><!----></div><!---->';
            return html;
        }
    }

}
itemInLoanController.$inject = ['$element'];
export let itemInLoanConfig = {
    bindings: { parentCtrl: '<' },
    controller: itemInLoanController
}