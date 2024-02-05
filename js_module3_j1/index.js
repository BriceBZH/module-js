
fetch('https://catfact.ninja/fact').then(function (response) {
  console.log(response);
  if (response.ok) {
    response.json().then(function (data) {
      console.log(data);
    });
  }
});
