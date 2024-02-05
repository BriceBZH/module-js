const jour = prompt("Quel est le jour de la semaine");
const astreinte = prompt("Y a-t-il une astreinte oui/non ?");
if((jour == "jeudi" || jour === "vendredi") && astreinte === "non") {
    console.log("Pas de MEP en fin de semaine");
} else {
    const tests = prompt("Les tests sont-ils passés avec succès oui/non ?");
    const recette = prompt("La recette est-elle passée avec succès oui/non ?");
    if(tests === "non" && recette === "non") {
        console.log("Veuillez effectuer les corrections et rééssayer");
    } else {
        console.log("MEP autorisée");
    }
}