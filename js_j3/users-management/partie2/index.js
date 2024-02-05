/**************************************************************/
/*                          Consigne                          */
/**************************************************************/
/*

// Voici une collection : cad un tableau d'objets de même type
// Tu vois la syntaxe ?

let users = [
  {
    nom: "Dupont",
    prenom: "Toto",
    age: 37
  }
];

TODO
- Demander à l'utilisateur de saisir son prenom, nom, age
NOTE : penser à gérer les types de valeurs
- Puis créer un objet (comme celui déjà présent) avec ces 3 éléments
- Enfin, l'ajouter à la collection
- Pour finir, afficher le contenu de la collection

*/
/**************************************************************/
/*                            Data                            */
/**************************************************************/

// DO NOT EDIT

let users = [
  {
    nom: "Dupont",
    prenom: "Toto",
    age: 37
  }
];

/**************************************************************/
/*                        Main Program                        */
/**************************************************************/

let prenom = prompt("Quel est votre prenom ?");
let nom = prompt("Quel est votre nom ?");
let age = Number(prompt("Quel est votre age ?"));
let someone = {
    nom,
    prenom,
    age,
  };
users.push(someone);
for(let i=0; i<users.length;i++) {
  for(const key in users[i]) {
      const val = users[i][key];
      console.log(key+" : "+val);
  }
}
