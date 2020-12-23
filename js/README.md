# Liste des modules développées
## forceAuth
Permet de forcer l'authentification à aprtir d'une authentification externe (bug ENT UB)
## dispoElecAutresInst
[Affichage de la disponibilité des documents électroniques dans les autres institutions du réseau.](prmFullViewServiceContainerAfter/README.md)
## authentificationAutresInst
Problématique consortiale. Personnalisation de l'authentification.
Permet de générer des liens d'authentification pêrmettant de rediriger l'utilisateur vers la vue de son institution.
![Ecran d'authentification](prmLoginAfter/auth.png)
[:link: prmLoginAfter/README.md](prmLoginAfter/README.md)

### Brief Display pour les ressources CDI
Nous utilisons des champs locaux pour alimenter les 2ème & 3ème lignes du brief display. Ainsi les champs Auteurs & publisher initialement utilisés pour cet affichage ne remonte plus pour CDI. Ce correctif permet de récupérer les champs Pnx et les afficher dans l'affichage abrégé.
### Doublement des champs locaux pour les notices fusionnées
Lorsqu'une notice est fusionnée Primo conserve tous les champs locaux. Ainsi le champ lds01 que nous utilisons pour afficher l'adresse bibliographique de la publication est doublé. Ce module ne conserve que le champ construit à partir de la notice Unimarc.
## customTLevelFacette
Personnalisation de la top level facette. Supprime les entrées 'peer_reviewed','open_access'et'available'
[-- >prmFacetExactAfter/README.md](prmFacetExactAfter/README.md)
## affDispo
Remonte la deuxième mention de disponibilté qui est parfois non affichée quand pour un même document notices de la version imprimée et électronique ont été fusionnées. Case # 00641786 chez Exlib
## itemInLOan
[Empêche la prolongation en fonction du nombre de jours écoulés de puis la date d'emprunt](prmLoanAfter/README.md)
## logosInst
Ajoute un pied de page avec les logos des autres institutions membres du réseau et le lien vers leurs catalogues

 
```
|-- prmAuthenticationAfter:
|   |-- forceAuth.js
|-- prmBriefResultAfter:
|   |-- customBriefDisplay.js
|-- prmExploreFooterAfter:
|   |-- logosInsts.js
|   |-- logosInsts.html
|-- prmFacetExactAfter:
|   |-- customTLevelFacette.js
|-- prmFullViewServiceContainerAfter:
|   |-- dispoElecAutresInst.html
|   |-- dispoElecAutresInst.js
|   |-- README.md
|-- prmLoginAfter:
|   |-- authentificationAutresInst.html
|   |-- authentificationAutresInst.js
|   |-- README.md
|-- prmSearchResultAvailabilityLineAfter:
|   |-- affDispo.html
|   |-- affDispo.js
|-- prmLoanAfter:
|   |-- itemInLoan.js
```