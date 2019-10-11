class forceAuthController {
    constructor(){
      console.log('---->33PUDB forceauth');
      console.log(this);
      // console.log(this.parentCtrl.authenticationMethods);
      // console.log(this.parentCtrl.loginService.handleLogin());
      var forceLogin = getQueryParam(this.parentCtrl.loginService.$location.$$absUrl, "forcelogin")
      if (forceLogin == 'true'){
        console.log("prout");
        location.href = "/primo-explore/favorites?vid=33PUDB_UB_VU2&lang=en_US&section=items";
      }
      
      // location.href = "http://example.com";
      
      function getQueryParam(url, key) {
        var queryStartPos = url.indexOf('?');
        if (queryStartPos === -1) {
          return;
        }
        var params = url.substring(queryStartPos + 1).split('&');
        for (var i = 0; i < params.length; i++) {
          var pairs = params[i].split('=');
          if (decodeURIComponent(pairs.shift()) == key) {
            return decodeURIComponent(pairs.join('='));
          }
        }
      }
    }
    
  }
  export let forceAuthConfig = {
    bindings: {parentCtrl:'<'},
    controller: forceAuthController
  }