class itemInLoanController { 
    constructor($document){
        console.log("--->itemInLoanController");
        console.log(this);
        console.log($document);
        console.log(this.parentCtrl.isRenewable);
        var loanDate = this.parentCtrl.item.loandate;
        var dueDate = this.parentCtrl.item.duedate;
        var today = new Date();
        var loanDuration = calcDiffDate(formatDate(dueDate), formatDate(loanDate))
        var daysSinceLoanDate = calcDiffDate(today, formatDate(loanDate));
        console.log("Exemplaire emprunté le "+loanDate +". A rendre le "+dueDate+".");
        console.log("Durée du prêt :"+loanDuration);

        // Si la durée du prêt est supérieure à 7 jours
        if (loanDuration > 7 && this.parentCtrl.item.renew === "Y"){
            if( daysSinceLoanDate < 7) {
                this.parentCtrl.item.renew = "N";
                this.parentCtrl.item.renewdateok = addDays(today,daysSinceLoanDate);
                this.parentCtrl.item.renewstatuses = {};
                var renewmsg = "Cet exemplaire pourra être renouvelé à partir du "+this.parentCtrl.item.renewdateok;
                this.parentCtrl.item.renewstatuses.renewstatus = [renewmsg];
            } 
        }
        // this.parentCtrl.item._fullDisplayValues.splice(5,5);
        // this.parentCtrl.item._fullDisplayValues.splice(0,4);

        this.parentCtrl.item._fullDisplayValues = [ {key : "loan_date", value : this.parentCtrl.item.loandate},
                                                    {key : "max_renew_date", value : this.parentCtrl.item.maxrenewdate}];


    
        
        function formatDate(date){
            var regex = /(\d{2})\/(\d{2})\/(\d{4})/;
            var [,day, month, year] = regex.exec(date)
            var formatedDate = new Date(year, month - 1 , day);
            console.log(formatedDate);
            return formatedDate;
        }
        function calcDiffDate(firstDate, secondDate){
            var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds    
            var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
            console.log(diffDays);
            return diffDays
        }
        function addDays(date,days){
            var result = new Date();
            console.log(date+" + "+days);
            result.setDate(date.getDate() + (7-days));
            return result.toLocaleDateString();
        }
    }

}
itemInLoanController.$inject = ['$document'];
export let itemInLoanConfig = {
    bindings: { parentCtrl: '<' },
    controller: itemInLoanController,
    // template: authentificationForm
}