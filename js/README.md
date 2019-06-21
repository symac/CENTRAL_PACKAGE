# Liste des modules développées
## dispoElecAutresInst
Affichage de la disponibilité des documents électroniques dans les autres institutions du réseau.
## authentificationAutresInst
Redirige le lecteur vers la vue de son institution à l'issue de l'authentification.
## customBriefDisplay
### Brief Display pour PCI
Nous utilisons des champs locaux pour alimenter les 2ème & 3ème lignes du brief display. Ainsi les champs Auteurs & publisher utilisé initialement pour le brief display ne remonte plus pour PCI. Ce correctif permet de récupérer les champs Pnx et les afficher dans l'affichage abrégé.
### Doublement des champs locaux pour les notices fusionnées
Lorsqu'une notice est fusionnée Primo conserve tous les champs locaux. Ainsi le champ lds01 que nous utilisons pour afficher l'adresse bibliographique de la publication est doublé. Ce module ne conserve que le champ construit à partir de la notice Unimarc.
## customTLevelFacette
Suprime les entrées 'peer_reviewed','open_access'et'available'
## affDispo
Remonte la deuxième mention de disponibilté qui est parfois non affichée quand pour un même document notices de la version imprimée et électronique ont été fusionnées. Case # 00641786 chez Exlib
 
```
- prmBriefResultAfter:
-- ustomBriefDisplay.js
- prmFacetExactAfter:
-- ustomTLevelFacette.js
- prmFullViewServiceContainerAfter:
-- ispoElecAutresInst.html
-- ispoElecAutresInst.js
-- EADME.md
- prmLoginAfter:
-- uthentificationAutresInst.html
-- uthentificationAutresInst.js
-- EADME.md
- prmSearchResultAvailabilityLineAfter:
-- ffDispo.html
-- ffDispo.js
```