class customBriefDisplayController {
  constructor(){
    console.log('---->33PUDB customBriefDisplayController');
    // console.log(this);
    /******************* */
    /* Mise en forme PCI */
    /******************* */
    if (this.parentCtrl.item.context == "PC") {
        var firstLinetext = this.parentCtrl.otherLines;
        console.log(this.parentCtrl.item.pnx.display.title[0]);
        /*Première ligne on envoie au composant les auteurs*/
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
        // console.log(firstLinetext);
        firstLinetext.unshift(hFirstLine);
        }
        // console.log(this.parentCtrl.item.pnx.control.recordid[0]);
        console.log(this.parentCtrl.item.context);
        console.log(this.parentCtrl.item.pnx.control.recordid[0]);
        /****************************************************************************** */
        /* Empêche l'affichage des deux champs lds01 dans le cas d'une notice fusionnée */
        /****************************************************************************** */
        if (this.parentCtrl.item.context == "L" && this.parentCtrl.item.pnx.control.recordid[0].startsWith('dedup')) {
            console.log(this.parentCtrl.otherLines);
            var otherLines = this.parentCtrl.otherLines;
            for (var i = 0; i < otherLines.length; i++) {
                console.log(otherLines[i].values[0].key);
                if (otherLines[i].values[0].key == 'lds01'){
                    var bibAddr = otherLines[i].values[0].text[0];
                    // console.log(bibAddr);
                    otherLines[i].values[0].text[0] = bibAddr.replace(/^(.*?)<br\/>.*/, "$1");
                }
                if (otherLines[i].values[0].key == 'lds02'){
                    var bibAddr = otherLines[i].values[0].text[0];
                    // console.log(bibAddr);
                    otherLines[i].values[0].text[0] = bibAddr.replace(/^(.*?);.*/, "$1");
                }
                
            }
        }
    }
//   get recordid() {
//     return this.parentCtrl.item.pnx.control.recordid[0];
//   }
}

export let customBriefDisplayConfig = {
  bindings: {parentCtrl:'<'},
  controller: customBriefDisplayController
}