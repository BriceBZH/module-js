'use strict';

/***********************************************************************************/
/* *********************************** DONNEES *************************************/
/***********************************************************************************/
let fire = document.querySelector("#firing-button");
let cancel = document.querySelector("#cancel-button");
let compt = document.querySelector("#billboard span");
let rocket = document.querySelector("#rocket");
let main = document.querySelector("main");
let timer;
let count = 10;

/***********************************************************************************/
/* ********************************** FONCTIONS ************************************/
/***********************************************************************************/

function go() {
    rocket.src = "images/rocket3.gif";
    rocket.classList.add("tookOff");
    cancel.classList.add("disabled");
}

function countDown() {
    compt.textContent = count;   
    count--; 
    if(count == -1 ) { 
        window.clearInterval(timer);
    }
}

function star () {
    for(let i = 0; i<150; i++) {
        let rand = Math.round(Math.random() * (2 - 0) + 0);
        let left = Math.round(Math.random() * (1000 - 0) + 0);
        let top = Math.round(Math.random() * (1000 - 0) + 0);
        let div = document.createElement("div");
        div.className = "star";
        div.style.left = left+"px";
        div.style.top = top+"px";
        main.appendChild(div);
        switch (rand) {
            case 0:
                div.classList.add("tiny");
                break;
            case 1:
                div.classList.add("normal");
                break;
            case 2:
                div.classList.add("big");
                break;
        }
    }
}

function decolage() {
    cancel.classList.remove("disabled");
    fire.classList.add("disabled");
    setTimeout(go, count * 1000);
    countDown();
    timer = window.setInterval(countDown, 1000);
    rocket.src = "images/rocket2.gif";
}

function cancelDecolage() {
    window.clearInterval(timer);
    fire.classList.remove("disabled");
    rocket.src = "images/rocket1.png";
    cancel.classList.add("disabled");
}
star();


/************************************************************************************/
/* ******************************** CODE PRINCIPAL **********************************/
/************************************************************************************/
fire.addEventListener('click', decolage);
cancel.addEventListener('click', cancelDecolage);