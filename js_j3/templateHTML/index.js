/**************************************************************/
/*                          Consigne                          */
/**************************************************************/
/*

L'objectif est de générer une page web à partir d'un modèle HTML.
(à la manière des modèles de documents de Word).
Ce type de pratique est très utilisée pour générer des pages web
et / ou des emails personnalisées par les données propres au client.

TODO
- Dans template, remplacer les tags {{...}} par le contenu de data :
  - {{title}} par le champ title de data
  - {{text}} par le champ text de data

- Pour effectuer le remplacement, utiiser la méthode
   template.replaceAll(
     <chaine à remplacer>,
     <chaine de substitution>
   )

- Afficher le résultat

*/
/**************************************************************/
/*                            Data                            */
/**************************************************************/

// DO NOT EDIT

let template = '\
  <html>\n\
    <head>\n\
      <title>{{title}}</title>\n\
    </head>\n\
    <body>\n\
      <h1>{{title}}</h1>\n\
      <p>{{text}}</p>\n\
    </body>\n\
  </html>'
;

let data = {
  title: 'My page',
  text: 'This is my page'
};

/**************************************************************/
/*                        Main Program                        */
/**************************************************************/
for(const key in data) {
    let val = "{{"+key+"}}"
    template = template.replaceAll(val, data[key]);
}
console.log(template);

