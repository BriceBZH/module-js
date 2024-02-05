/**************************************************************/
/*                            Data                            */
/**************************************************************/

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

/**************************************************************/
/*                        Main Program                        */
/**************************************************************/

// Pour chaque email reçu
for (let i = 0; i < email_recus.length; i++) {
  let receivedEmail = email_recus[i];

  // Pour chaque email de la liste blanche
  // Méthode 1
  for (let j = 0; j < liste_blanche.length; j++) {
    let whiteEmail = liste_blanche[j];

    // Vérifier si l'email reçu est dans la liste blanche
    if (receivedEmail.from === whiteEmail) {
      // Si oui, l'ajouter dans le tableau "boite réception"
      boite_reception.push(receivedEmail);
      break;
    }
  }

  // Méthode 2
  /*
  if (liste_blanche.indexOf(receivedEmail.from) > -1) {
    boite_reception.push(receivedEmail);
  }
  */
}

// Afficher le contenu de la boite de réception
console.log(boite_reception);
