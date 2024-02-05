'use strict';

/***********************************************************************************/
/* *********************************** DONNEES *************************************/
/***********************************************************************************/
let fire = document.querySelector("#firing-button");
let cancel = document.querySelector("#cancel-button");
let compt = document.querySelector("#billboard span");
let rocket = document.querySelector("#rocket");
let main = document.querySelector("main");
let time = "";

/***********************************************************************************/
/* ********************************** FONCTIONS ************************************/
/***********************************************************************************/

function compteur () {
    rocket.src = "images/rocket2.gif";
    cancel.classList.remove("disabled");
    let sec = 10;
    function up() {
        sec--;
        console.log(sec);
        compt.textContent = sec;
        if(sec > 0) {
            time = setTimeout(up, 1000);
        } else {
            clearTimeout(time);
            rocket.src = "images/rocket3.gif";
            rocket.classList.add("tookOff");
            cancel.classList.add("disabled");
        }
    }
    up();
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
    fire.classList.add("disabled");
    compteur();
}
star();




/************************************************************************************/
/* ******************************** CODE PRINCIPAL **********************************/
/************************************************************************************/
fire.addEventListener('click', decolage);
cancel.removeEventListener('click', decolage);