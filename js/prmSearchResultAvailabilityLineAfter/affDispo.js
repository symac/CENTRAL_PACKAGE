
class affDispoController {
  constructor(){
    console.log('---->affDispoController');
    console.log(this);
  }

  get recordid() {
    return this.parentCtrl.item.pnx.control.recordid[0];
  }
}

export let affDispoConfig = {
  bindings: {parentCtrl:'<'},
  controller: affDispoController,
}
