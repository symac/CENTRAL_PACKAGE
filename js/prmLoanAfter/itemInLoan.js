class itemInLoanController { 
    constructor(){
        console.log("--->itemInLoanController");
        console.log(this);
        this.parentCtrl.item.renew = "N";
        console.log(this.parentCtrl.isRenewable);
    }
}
export let itemInLoanConfig = {
    bindings: { parentCtrl: '<' },
    controller: itemInLoanController,
    // template: authentificationForm
}