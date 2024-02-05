let play = "oui";
let user = "";
let user1 = "";
let user2 = "";
while(play === "oui") {
    let lettreUser1 = "";
    let lettreUser2 = "";
    let essai1 = new Array();
    let essai2 = new Array();
    if(user === "" || user === "non") {
        user1 = prompt("Nom du joueur 1");
        user2 = prompt("Nom du joueur 2");
    }
    let nbEssai = 1;
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let lettreAtrouver = alphabet.charAt(
      Math.ceil(Math.random() * 26) - 1
    );
    while((lettreUser1 !== lettreAtrouver) && (lettreUser2 !== lettreAtrouver)) {
        if(essai1.length > 0) {
            console.log("Liste des essais de "+user1+" : "+essai1.toString());
            console.log("Liste des essais de "+user2+" : "+essai2.toString());
        }
        lettreUser1 = prompt(user1+", donnez une lettre");
        essai1[nbEssai] = lettreUser1;
        if(lettreUser1 !== lettreAtrouver) {
            lettreUser2 = prompt(user2+", donnez une lettre");
            essai2[nbEssai] = lettreUser2;
        }
        if((lettreUser1 === lettreAtrouver) || (lettreUser2 === lettreAtrouver)) {
            console.log("Bravo vous avez trouvé la lettre '"+lettreAtrouver+"' en "+nbEssai+" essais");
            if(lettreUser1 === lettreAtrouver) {
                console.log(user1+" à gagné la partie");
            } else {
                console.log(user2+" à gagné la partie");
            }
        }
        nbEssai++;
    }
    play = prompt("Voulez vous rejouer ? (oui/non)");
    while(play !== "oui" && play !== "non") {
        play = prompt("Merci de saisir oui ou non, Voulez vous rejouer ?");
    }
    if(play === "oui") {
        user = prompt("Même joueur ? (oui/non)");
        while(user !== "oui" && user !== "non") {
            user = prompt("Merci de saisir oui ou non, Même joueur ?");
        }
    }
}