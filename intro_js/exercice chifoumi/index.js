let play = "oui";
while(play === "oui") {
    console.log(play);
    let user_score = 0;
    let bot_score = 0;
    let manche = prompt("Combien de manche voulez vous faire ?");
    while(isNaN(manche)) {
        manche = prompt("Merci de saisir un nombre");
    }
    while(user_score < manche && bot_score < manche) {
        let bot = "";
        let phrase = "";
        let randomChoice = Math.ceil(Math.random() * 3); // Retourne un nombre aléatoire entre 1 et 3
        let user = prompt("Veuillez choisir entre feuille, pierre et ciseaux");
        while((user !== "feuille") && (user !== "pierre") && (user !== "ciseaux") ) {
            user = prompt("Merci de saisir parmi les différentes proposition. Feuille, papier ou ciseaux ?");
        }
        if(randomChoice === 1) {
            bot = "feuille";
        } else if(randomChoice === 2) {
            bot = "pierre";
        } else {
            bot = "ciseaux";
        }
        console.log("Votre choix : "+user);
        console.log("Choix de l'ordinateur : "+bot);
        if(user === bot) {
            console.log("Match nul");
        } else if((user === "feuille" && bot === "pierre") || (user === "ciseaux" && bot === "feuille") || (user === "pierre" && bot === "ciseaux")) {
            if(user === "feuille") {
                phrase = "La feuille enveloppe la pierre";
            } else if(user === "pierre") {
                phrase = "La pierre détruit les ciseaux";
            } else {
                phrase = "Les ciseaux coupent la feuille";
            }
            console.log("Le joueur à gagné la manche : "+phrase);
            user_score ++;
        } else {
            if(bot === "feuille") {
                phrase = "La feuille enveloppe la pierre";
            } else if(bot === "pierre") {
                phrase = "La pierre détruit les ciseaux";
            } else {
                phrase = "Les ciseaux coupent la feuille";
            }
            console.error("L'ordinateur à gagné la manche : "+phrase);
            bot_score ++;
        }
        console.log("Score du joueur : "+user_score+"\nScore du bot : "+bot_score)
    } 
    if(user_score>bot_score) {
        console.log("Le joueur à gagné au terme des "+manche+" manches");
    } else {
       console.error("L'ordinateur à gagné au terme des "+manche+" manches"); 
    }
    play = prompt("Voulez vous rejouer ? (oui/non)");
    while(play !== "oui" && play !== "non") {
        play = prompt("Merci de saisir oui ou non, Voulez vous rejouer ?");
    }
}