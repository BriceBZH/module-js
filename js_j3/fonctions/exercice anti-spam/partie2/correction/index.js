/**************************************************************/
/*                            Data                            */
/**************************************************************/

const liste_blanche = [
  'larissa@gmail.com',
  'hacker44@gmail.com'
];

const email_recus = [{
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

/**************************************************************/
/*                         Fonctions                          */
/**************************************************************/

/**
 * Vérifie si un email est autorisé
 * cad s'il est dans la liste blanche
 *
 * @param {String} email Email à vérifier
 * @returns true si l'email est dans la liste blanche
 */
function estDansListeBlanche(email) {
  for (let j = 0; j < liste_blanche.length; j++) {
    let whiteEmail = liste_blanche[j];

    // Vérifier si l'email reçu est dans la liste blanche
    if (email.from === whiteEmail) {
      return true;
    }
  }
  return false;
}

/**
 * Enlève de la liste d'email reçus
 * les emails qui ne sont pas dans la liste blanche
 *
 * @param {Array<Email>} email_recus Liste d'email à filtrer
 * @returns {Array<Email>} Liste d'email filtrée
 */
function filtrerEmailRecus(email_recus) {
  let emails_filtres = [];
  // Pour chaque email reçu
  for (let i = 0; i < email_recus.length; i++) {
    let receivedEmail = email_recus[i];

    // Pour chaque email de la liste blanche
    // Méthode 1
    if(estDansListeBlanche(receivedEmail)) {
      // Si oui, l'ajouter dans le tableau "boite réception"
      emails_filtres.push(receivedEmail);
    }
  }

  return emails_filtres;
}

/**************************************************************/
/*                        Main Program                        */
/**************************************************************/

// Filtre les email reçus et récupère la liste d'email filtrée
const boite_reception = filtrerEmailRecus(email_recus);

// Afficher le contenu de la boite de réception
console.log(boite_reception);
