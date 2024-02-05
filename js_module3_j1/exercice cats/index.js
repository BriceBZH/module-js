let par = document.querySelector(".fact");
let refresh = document.querySelector(".refresh");

function api () {
  fetch('https://catfact.ninja/fact').then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        par.textContent = data.fact;
      });
    }
  });
}

api();

refresh.addEventListener('click', api); 