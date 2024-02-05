'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/
// NE PAS TOUCHER

// Liste de courses
const shoppingList = [];


/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/

// TODO écrire les fonctions requises
function addItem(produit) {
    shoppingList.push(produit);
}

function displayShoppingList() {
    for(let i=0; i<shoppingList.length; i++) {
        console.log(shoppingList[i]);
    }
}

function removeItem (produit) {
    const index = shoppingList.indexOf(produit);
    if(index === -1) { //pas d'article de ce nom
        return
    }
    const x = shoppingList.splice(index, 1);
}

function removeAllItems () {
    //shoppingList.length = 0;
    shoppingList.splice(0, shoppingList.length);
}

/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/
// NE PAS TOUCHER

// Effacement du contenu de la console, au cas où.
console.clear();

// Etape 1.
addItem('Fraises');
addItem('Poulet');
addItem('Tournevis');
addItem('Artichaut');
displayShoppingList();

// Etape 2.
removeItem(window.prompt('Quel produit de la liste de courses souhaitez-vous supprimer ?'));
displayShoppingList();

// Etape 3.
removeAllItems();
displayShoppingList();