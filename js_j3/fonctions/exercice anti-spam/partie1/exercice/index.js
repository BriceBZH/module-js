/**************************************************************/
/*                          Consigne                          */
/**************************************************************/
/*

L'objectif de cet exercice est de créer un filtre anti-spam.

On a en entrée du programme :
- un tableau d'email reçus, comportant des emails frauduleux et des emails valides
- une liste blanche d'email, comportant les adresses email considérées comme valides

Le programme doit retourner un tableau "boite_reception" contenant uniquement les email valides,
c'est à dire les emails qui sont dans la liste blanche.

Le tableau de retour "boite_reception" pourra par exemple être envoyé à un serveur.
Pour notre exercice, on se contentera de l'afficher dans la console.


// TODO
- Créer le programme de filtrage qui stocke dans le tableau "boite_reception"
les emails présents dans email_recus qui ont une adresse email dans liste_blanche
- Afficher le tableau de retour "boite_reception" dans la console.

*/
/**************************************************************/
/*                            Data                            */
/**************************************************************/

// DO NOT EDIT

let ok =0;
let liste_blanche = [
  'larissa@gmail.com',
  'hacker44@gmail.com'
];

let email_recus = [{
  from: 'toto@gmail.com',
  content: 'Bonjour toi !',
},{
  from: 'larissa@gmail.com',
  content: 'Hé Salut !',
},{
  from: 'hacker44@gmail.com',
  content: 'Je suis un hacker !',
},{
  from: 'hacker@gmail.com',
  content: 'Piratage en cours...',
}];

let boite_reception = [];

function serveur (testEmail) {
  for(let i=0; i<liste_blanche.length; i++) { 
    if(testEmail === liste_blanche[i]) {
      ok = 1;
    }
  }
  return ok;
}

for(let j=0; j<email_recus.length; j++) {
  serveur(email_recus[j]["from"])
  if(ok === 1) {
    boite_reception.push(email_recus[j]["from"]);
  }
}
console.log(boite_reception);