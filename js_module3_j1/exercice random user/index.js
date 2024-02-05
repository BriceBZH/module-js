/* 
  Récupérer depuis l'API un utilisateur généré aléatoirement
  Puis afficher les informations récupérées dans la console
*/
const container = document.querySelector(".container");
let refresh = document.querySelector(".refresh");
let article = "";
let donnees = "";
let valeur = "";
let lib = "";
let p = "";
let h2 = "";
let img = "";
let count = 0;
let delImg = "";

const apiUrl = "https://randomuser.me/api";

function delArticle (target) {
  let valClass = target.split(" ");
  let aDel = document.querySelector(valClass[1]);
  console.log(valClass+" "+valClass[1])
  while (aDel.firstChild) {
    aDel.removeChild(aDel.firstChild);
  }
}


function displayData(data) {
  count ++; 
  article = document.createElement("article");
  article.className = "article"+count;
  delImg = document.createElement("img");
  delImg.src = "img/iconeCroixN.png";
  delImg.className = "croix";
  delImg.classList.add("article"+count);
  article.appendChild(delImg);
  sec.appendChild(article);
  donnees = data.results;
  //console.log(donnees[0]);
  for(let i =0; i<donnees.length; i++) {
    for(const key in donnees[i]) {
      lib = key;
      if(typeof(donnees[i][key]) === 'object') {
        h2 = document.createElement("h2");
        h2.textContent = lib;
        article.appendChild(h2);
        for(const keybis in donnees[i][key]) {
          lib = keybis;
          //console.log(keybis+" : "+donnees[i][key][keybis]);
          if(typeof(donnees[i][key][keybis]) === 'object') {
            h2 = document.createElement("h2");
            h2.textContent = lib;
            article.appendChild(h2);
            for(const keybisbis in donnees[i][key][keybis]) {
              lib = keybisbis;
              valeur = donnees[i][key][keybis][keybisbis];
              p = document.createElement("p");
              p.textContent = lib+" : "+valeur;
              article.appendChild(p);
              //console.log(keybisbis+" : "+donnees[i][key][keybis][keybisbis]);
            }
          } else {
            valeur = donnees[i][key][keybis];
            p = document.createElement("p");
            p.textContent = lib+" : "+valeur;
            article.appendChild(p);
            if(lib === "medium") {
              img = document.createElement("img");
              img.src = valeur;
              article.appendChild(img);
            }
          }
        }
      } else {
        valeur = donnees[i][key];
        p = document.createElement("p");
        p.textContent = lib+" : "+valeur;
        article.appendChild(p);
        //console.log(key+" : "+donnees[i][key]);
      }
    }
  }
}

function api() {
  fetch(apiUrl).then(function (response) {
    if (response.ok) {
      response.json().then(displayData)
    }
  });
}

let h1 = document.createElement("h1");
h1.textContent = "Liste Users";
container.appendChild(h1);

let sec = document.createElement("section");
container.appendChild(sec);

api();
refresh.addEventListener('click', api); 


document.addEventListener('click', function(event) {
  /*console.log(event.target.className);
  console.log(event.target.className.indexOf('croix'));
  if(event.target.className.indexOf('croix')) {
    console.log(event.target.className+" croixxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
  }*/
  delArticle(event.target.className);
});