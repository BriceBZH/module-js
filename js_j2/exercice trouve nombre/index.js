let play = "oui";
    while(play === "oui") {
    let nbreATrouver = Math.ceil(Math.random() * 100) + 9;
    let nbUser = 0;
    let nbEssai = 10;
    let nbEssaiRestant = 10;
    console.log(nbreATrouver);
    while((nbUser !== nbreATrouver) && nbEssai > 0) {
        nbUser = Number(prompt("Donnez un nombre entre 10 et 100, vous avez "+nbEssai+" restants"));
        while(isNaN(nbUser)) {
            //continue;
            nbUser = prompt("Je t'ai dis de taper un nombre entre 10 et 100");
        } 
        if(nbUser > nbreATrouver) {
            console.log("Le nombre à trouver est plus petit");
        } else {
            console.log("Le nombre à trouver est plus grand");
        }
        nbEssai--;
    }
    if(nbEssai === 0) {
        console.error("Vous avez épuisé vos essai, le nombre à trouver était "+nbreATrouver);
    } else {
        nbEssaiRestant -= nbEssai;
        console.log("Vous avez gagné, il a fallu "+nbEssaiRestant+" essai(s)");
    }
    play = prompt("Voulez vous rejouer ? (oui/non)");
    while(play !== "oui" && play !== "non") {
        play = prompt("Merci de saisir oui ou non, Voulez vous rejouer ?");
    }
}