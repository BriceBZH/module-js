let chrono = document.querySelector("#chrono");
let startStopButton = document.querySelector(".startStop");
let clearButton = document.querySelector(".clear");
let time = "";

function startStop() {
    clearTimeout(time);
}

function clear() {
    clearTimeout(time);
    chrono.textContent = "00:00:00";
}
startStopButton.addEventListener('click', startStop); 
clearButton.addEventListener('click', clear); 

function chronometre () {
    let sec = 0;
    let min = 0;
    
    function up() {
        sec++;
        if(sec === 60) {
            min++;
            sec = 0;
        }
        chrono.textContent = min+":"+sec;
        time = setTimeout(up, 1000);
    }
    up();
}
function chronoTime () {
    let secBase = Date.now();
    let sec = 0;
    let cent = 0;
    let min = 0;
    let mil = 0
    function up() {
        mil =Number( Date.now() - secBase);
        sec = Number(Math.round(mil / 1000));
        cent = Number(Math.round((mil - (sec * 1000))/10));
        if(sec >= 60) {
            min = Number(Math.round(sec / 60));
        }
        sec = sec - (60  * Number(min));
        chrono.textContent = min+":"+sec+":"+cent;
        time = setTimeout(up, 1000);
    }
    up();
}
//chronometre();
chronoTime();