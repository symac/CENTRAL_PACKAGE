class customPCIDisplayController {
  constructor(){
    console.log('---->33PUDB customPCIDisplayController');
    console.log(this);
    /*Test les  résultats PCI */
    if (this.parentCtrl.item.context == "PC") {
        var firstLinetext = this.parentCtrl.otherLines;
        console.log(this.parentCtrl.item.pnx.display.title[0]);
        /*Première ligne on envoie au compasant les auteurs*/
        var auteur = this.parentCtrl.item.pnx.display.creator;
        var editeur = (typeof this.parentCtrl.item.pnx.display.publisher != "undefined") ? this.parentCtrl.item.pnx.display.publisher : this.parentCtrl.item.pnx.display.source;
        var pubDate = this.parentCtrl.item.pnx.display.creationdate;
        
        var ispartof = this.parentCtrl.item.pnx.display.ispartof;
        console.log(ispartof);
        /*Si 2e ligne + 3e ligne ispartog généré par PCI c'est le bordel.*/
        /*TODO : à creuser*/
        if (typeof ispartof == "undefined"){
            var adresse = editeur + " : " + pubDate;
            var hSecondValue = {
                clazz : "media-publisher",
                codes : [""],
                key : "publisher",
                text : [adresse],
                values : [adresse]
            };
            var hSecondLine = {
                values : [hSecondValue],
                delimiter : " ;"
            };
            firstLinetext.unshift(hSecondLine); 
        }
        var hFirstValue = {
            clazz : "media-creator",
            codes : [""],
            key : "creator",
            text : auteur,
            values : auteur
        };
        var hFirstLine = {
            values : [hFirstValue],
            delimiter : " ;"
        };
        console.log(firstLinetext);
        firstLinetext.unshift(hFirstLine);
        }
        if (this.parentCtrl.item.context == "L" && this.parentCtrl.item.pnx.control.recordid[0].startsWith('dedup')) {
            console.log(this);
            var ldsUn = this.parentCtrl.otherLines[1].values[0].text[0];
            console.log(ldsUn);
            
            this.parentCtrl.otherLines[1].values[0].text[0] = ldsUn.replace(/^(.*?)<br\/>.*/, "$1");
        }
    }
//   get recordid() {
//     return this.parentCtrl.item.pnx.control.recordid[0];
//   }
}

export let customPCIDisplayConfig = {
  bindings: {parentCtrl:'<'},
  controller: customPCIDisplayController
}