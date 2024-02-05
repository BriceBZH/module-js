'use strict'

let body = document.querySelector("body");
body.style.width = "100%"
body.style.height = "100%";
let ball;

window.addEventListener('load', function () {
	// Zone du DOM qui contient le texte des FPS
	ball  =  document.querySelector('#ball');

	// on demande l'execution d'une fonction lors du rafraichissement
	window.requestAnimationFrame(moveBall);
});

function moveBall () {
    window.requestAnimationFrame(moveBall);
    ball.style.maxWidth = "100%"
    ball.style.transform = "translate(100%)";
    ball.style.transition = "bottom 20s ease, left 15s, transform 5s 1s";
    //setTimeout(moveBall, 1000);
}