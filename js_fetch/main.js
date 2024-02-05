/* etape 1 */
/*
const api = "https://jsonplaceholder.typicode.com/posts/1";
fetch(api).then(function (response) {
    if (response.ok) {
      response.json().then((data) => {
        let title = document.getElementById("post-title");
        let body = document.getElementById("post-body");
        
        title.innerText = data.title;
        body.innerText = data.body;
       console.log(data); 
    });
    }
  });
  */
  
/* etape 2 */
/*const api = "https://jsonplaceholder.typicode.com/posts";
fetch(api).then(function (response) {
    if (response.ok) {
        response.json().then((data) => {
            for(let i = 1; i<5; i++ ) {
                let title = document.querySelector("#post-"+i+" .post-title");
                let body = document.querySelector("#post-"+i+" .post-body");
                
                title.innerText = data[i].title;
                body.innerText = data[i].body;
            }
        });
        
    }
});*/

/* etape 3 */
/*
const post = JSON.stringify({
	title : "Ceci est le titre de mon nouveau post",
	body : "Ceci est le contenu de mon nouveau post",
	userId: 2
});

const options = {
    method: 'POST',
    body: post,
    headers: {
    'Content-type': 'application/json; charset=UTF-8',
  }
}; // Je configure les options

const api = "https://jsonplaceholder.typicode.com/posts";

fetch(api, options).then(function (response) {
    if (response.ok) {
        
        response.json().then((data) => {
            console.log(data);
            let title = document.getElementById("post-title");
            let body = document.getElementById("post-body");
            
            title.innerText = data.title;
            body.innerText = data.body;
        });
        
    }
});*/

/* etape 4 */

let button = document.querySelector("#submit");
button.addEventListener("click", function(even) {
    event.preventDefault();
    const post = JSON.stringify({
    	title : document.querySelector("#title").value,
    	body : document.querySelector("#content").value,
    	userId: 1
    });
    
    const options = {
        method: 'POST',
        body: post,
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    }; // Je configure les options
    
    const api = "https://jsonplaceholder.typicode.com/posts";
    
    fetch(api, options).then(function (response) {
        if (response.ok) {
            
            response.json().then((data) => {
                console.log(data);
                let title = document.getElementById("post-title");
                let body = document.getElementById("post-body");
                
                title.innerText = data.title;
                body.innerText = data.body;
            });
            
        }
    });
    
});
