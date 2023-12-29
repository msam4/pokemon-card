const url = " https://pokeapi.co/api/v2/pokemon/";
const card = document.getElementById("card");
const btn = document.getElementById("btn");

let getPokeData = () => {
  // Generate a random number between 1 and 150

  let id = Math.floor(Math.random() * 150) + 1;
  // console.log(id);

  // Combine the pokeapi url with pokemon id
  const  finalUrl = url + id;
  // console.log(finalUrl);

  //Fetch generated URL
  fetch(finalUrl)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      generateCard(data);
    });
};

btn.addEventListener("click", getPokeData);
window.addEventListener("load", getPokeData);
