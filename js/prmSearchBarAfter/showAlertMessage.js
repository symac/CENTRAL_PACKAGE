
import showAlertMessageHTML from './showAlertMessage.html'
class showAlertMessageController {
    constructor($element){
      console.log("--> show alert message !");
      console.log(this);
    }
  }

  showAlertMessageController.$inject = ['$element'];
  
  export let showAlertMessageConfig = {
    bindings: {parentCtrl:'<'},
    controller: showAlertMessageController,
    template: showAlertMessageHTML
  }