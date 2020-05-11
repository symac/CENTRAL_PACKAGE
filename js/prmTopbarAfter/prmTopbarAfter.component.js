class PrmTopbarAfterController {
    constructor(messageService, $scope, $element, $translate) {
      this.messageService = messageService;
      this.$scope = $scope;
      this.$element = $element;
      this.$translate = $translate;
    }
  
    $onInit() {
      // message displayed.
      var url = new URL(document.location.href);
      this.messageService.display()
        .catch((e) => {
          if (e) console.log(e);
        });
    };
  }
  
  PrmTopbarAfterController.$inject = ['messageService', '$scope', '$element', '$translate'];
  
  export let PrmTopbarAfterConfig = {
    name: 'prmTopbarAfter',
    config: {
      controller: PrmTopbarAfterController,
      require: {
        primoExploreCtrl: '^primoExplore'
      }
    }
  };