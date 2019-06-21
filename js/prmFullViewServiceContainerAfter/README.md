
# dispoElecAutresInst

>Affichage de la disponibilité des documents électroniques dans les autres institutions du réseau 

## Principe

On récupère la liste de institutions proposant un accès au document dans la notice pnx.
`this.parentCtrl.item.pnx.delivery.delcategory`
On construit ensuite des liens pour chaque institution qui au clique charge un iframe appelant le résolveur de lien.

## ChangeLog

### v.1.2
Le service est maintenant disponible pour les notices fusionnées.

## Todo
- [ ] Affichage d'un spinner au chargement de l'iframe













