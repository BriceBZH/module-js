function calculer() {
    let a = 1;
    let b = 2;
    
    let c = a + b;
    
    return c;
}

let result = calculer();

console.log(result);


/* Avec paramètres */

function calculerAB(a, b) {
    let c = a + b;
    
    return c;
}

let resultAB = calculerAB(5, 10);

console.log(resultAB);
