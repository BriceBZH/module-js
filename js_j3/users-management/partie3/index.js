/**************************************************************/
/*                          Consigne                          */
/**************************************************************/
/*

TODO
- Pour chaque objet du tableau users, afficher le message suivant :
  Il y a Toto Dupont, 37 ans

- Puis calculer et afficher la moyenne des âges
INFO : Moyenne = SOMME(age) / nombre de users

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
  },{
    nom: "Durant",
    prenom: "Georges",
    age: 52
  },{
    nom: "Ololo",
    prenom: "Léa",
    age: 5
  },{
    nom: "Jeloie",
    prenom: "Théo",
    age: 12
  }
];

/**************************************************************/
/*                        Main Program                        */
/**************************************************************/
let sumAge = 0;
let moyAge = 0;
for(let i=0; i< users.length; i++) {
  console.log("Il y a "+users[i].prenom+" "+users[i].nom+", "+users[i].age+" ans");
  sumAge += users[i].age;
}
moyAge = sumAge / users.length;
console.log("Age moyen : "+moyAge);