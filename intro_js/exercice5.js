const nombre1 = prompt("Donnez un 1er nombre");
const operateur = prompt("Donnez un opérateur");
const nombre2 = prompt("Donnez un 2ème nombre");
const number1 = Number(nombre1);
const number2 = Number(nombre2);
console.log(nombre1+operateur+nombre2);
document.write(nombre1+operateur+nombre2);
if(!isNaN(number1) && !isNaN(number2)) {
    if(operateur === "*") {
        console.log(Number(nombre1)*Number(nombre2));
        document.write(Number(nombre1)*Number(nombre2));
    } else if(operateur === "+") {
        console.log(Number(nombre1)+Number(nombre2));
        document.write(Number(nombre1)+Number(nombre2));
    } else if(operateur === "-") {
        console.log(Number(nombre1)-Number(nombre2));
        document.write(Number(nombre1)-Number(nombre2));
    } else if(operateur === "/") {
        console.log(Number(nombre1)/Number(nombre2));
        document.write(Number(nombre1)/Number(nombre2));
    } else {
        console.error("Opérateur "+operateur+" inconnu");
        document.write("Opérateur "+operateur+" inconnu");
    }
} else {
    console.error("Un des 2 nombres n'est pas un nombre");
    document.write("Un des 2 nombres n'est pas un nombre");
}
