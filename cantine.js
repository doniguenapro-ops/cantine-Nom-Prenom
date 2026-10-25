//Déclarez les données de la commande
let client = "Awa";
let codePlat = 1;
let quantite = Number("3");
let montantVerse = 5000;

// Déterminer le plat et son prix
let prixUnitaire;
if (codePlat === 1) {
    prixUnitaire = 1500;
} else if (codePlat === 2) {
    prixUnitaire = 2000;
} else if (codePlat === 3) {
    prixUnitaire = 1000;
}
// Fonction de calcul du total
function calculerTotal(prixUnitaire,quantite) {
    return prixUnitaire*quantite;
}
let total = calculerTotal(prixUnitaire,quantite);
console.log(total);



