//Déclarez les données de la commande
let client = "Awa";
let codePlat = 3;
let quantite = Number("4");
let montantVerse = 4000;

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
    // Afficher le récapitulatif
console.log( `Client : ${client}`);
console.log(`Total à payer : ${total}FCFA`);
for (let i = 1; i <= quantite; i++) {
    console.log(`portion ${i} : ${prixUnitaire} FCFA`);
}
    // Calculer la monnaie ou le montant manquant
if (montantVerse >= total) {
    let monnaie = montantVerse - total;
    console.log(`Monnaie à rendre : ${monnaie} FCFA`);
}else{
    let manque = total - montantVerse;
    console.log(`Montant manquant : ${manque} FCFA`);
}





