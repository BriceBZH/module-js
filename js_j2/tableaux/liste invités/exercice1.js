const invites = ["Magalie", "Jean-Jacques", "Kenzo", "Cacharel", "Louboutin", "Meibelyne", "Jenifael", "Benjapaul", "Gabyélène", "Charlolivier", "elly-Anne", "Dior Gnagna", "Rolce-Roméo", "Zébulon-Claudibul","Lola-Pouponne", "Kill-Yan", "Djustyne", "Jean-Clode", "Zac-Harrry"];

let tailleCarton = "";
let petitCarton = 0;
let moyenCarton = 0;
let grandCarton = 0;
for(let i = 0; i < invites.length; i++) {
    if(invites[i].length > 8) {
        tailleCarton = "grand";
        grandCarton++;
    } else if(invites[i].length > 6) {
        tailleCarton = "moyen";
        moyenCarton++;
    } else {
        tailleCarton = "petit";
        petitCarton++;
    }
    console.log(invites[i]+" "+tailleCarton+" carton");
}
console.log("Il vous faut au total : \n"+petitCarton+" petits cartons\n"+moyenCarton+" moyens cartons\n"+grandCarton+" grands cartons");