class customBriefDisplayController {
    constructor() {
        console.log('---->33PUDB customBriefDisplayController');
        console.log(this);
        /******************* */
        /* Mise en forme PCI */
        /******************* */
        if (this.parentCtrl.item.context == "PC") {
            var firstLinetext = [];
            var auteur = this.parentCtrl.item.pnx.display.creator;
            var editeur = (typeof this.parentCtrl.item.pnx.display.publisher != "undefined") ? this.parentCtrl.item.pnx.display.publisher : this.parentCtrl.item.pnx.display.source;
            var pubDate = this.parentCtrl.item.pnx.display.creationdate;
            var ispartof = this.parentCtrl.item.pnx.display.ispartof;
            var hSecondValue= {};
            /*Seconde ligne on envoie au composant la zone de l'adresse biblio ou les ref de la publication sdont l'article est tiré*/
            var adresse =  editeur + " : " + pubDate;
            if (typeof ispartof === "undefined") {
                hSecondValue = {
                    clazz: "media-publisher",
                    codes: [""],
                    key: "publisher",
                    text: [adresse],
                    values: [adresse]
                };
            }
            else {
                hSecondValue = {
                    clazz: "media-ispartof",
                    codes: [""],
                    key: "ispartof",
                    text: ispartof,
                    values: ispartof
                };
            }
            var hSecondLine = {
                values: [hSecondValue],
                delimiter: " ; "
            };
            firstLinetext.unshift(hSecondLine);
            /*Première ligne on envoie au composant les auteurs*/
            var hFirstValue = {
                clazz: "media-creator",
                codes: [""],
                key: "creator",
                text: auteur,
                values: auteur
            };
            var hFirstLine = {
                values: [hFirstValue],
                delimiter: " ; "
            };
            // console.log(firstLinetext);
            firstLinetext.unshift(hFirstLine);
            this.parentCtrl.otherLines = firstLinetext;
        }
        console.log(this.parentCtrl.otherLines);
        // console.log(this.parentCtrl.item.pnx.control.recordid[0]);
        // console.log(this.parentCtrl.item.context);
        // console.log(this.parentCtrl.item.pnx.control.recordid[0]);
        /****************************************************************************** */
        /* Empêche l'affichage des deux champs lds01 dans le cas d'une notice fusionnée */
        /****************************************************************************** */
        if (this.parentCtrl.item.context == "L" && this.parentCtrl.item.pnx.control.recordid[0].startsWith('dedup')) {
            console.log('dedup');
            var firstLinetext = [];
            var auteur = this.parentCtrl.item.pnx.display.lds02;
            var adresse = this.parentCtrl.item.pnx.display.lds01[0];
            console.log(adresse);
            var hSecondValue = {
                clazz: "media-publisher",
                codes: [""],
                key: "publisher",
                text: [adresse],
                values: [adresse]
            };
            var hSecondLine = {
                values: [hSecondValue],
                delimiter: " ; "
            };
            firstLinetext.unshift(hSecondLine);
            var hFirstValue = {
                clazz: "media-creator",
                codes: [""],
                key: "creator",
                text: auteur,
                values: auteur
            };
            var hFirstLine = {
                values: [hFirstValue],
                delimiter: " ; "
            };
            // console.log(firstLinetext);
            firstLinetext.unshift(hFirstLine);
            this.parentCtrl.otherLines = firstLinetext;
        }


    }
    //   get recordid() {
    //     return this.parentCtrl.item.pnx.control.recordid[0];
    //   }
}

export let customBriefDisplayConfig = {
    bindings: { parentCtrl: '<' },
    controller: customBriefDisplayController
}