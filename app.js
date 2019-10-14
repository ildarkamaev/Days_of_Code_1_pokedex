const pokedex = document.getElementById('pokedex');

const fetchPokemon = () => {
    const promises = [];
  for (let i = 1; i <= 150; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    promises.push(fetch(url).then((res) => res.json()));
  }

  Promise.all(promises).then(results =>{
      const pokemon = results.map((data)=>({
        name: data.name,
          id: data.id,
          image: data.sprites["front_default"],
          type: data.types.map(type => type.type.name).join(", ")
      }));
      displayPokemon(pokemon);
      console.log(pokemon.type);
  })
  
};

<<<<<<< HEAD
const displayPokemon = pokemon => {
  console.log(pokemon);
  const pokemonHTMLstring = pokemon
    .map(
      pokeman =>
        `<li class="card" onclick="selectPokemon(${pokeman.id})">
            <div class="img-bg>
              <img class="card-image" src="${pokeman.image}">
            </div>
=======
const displayPokemon = (pokemon =>{
    console.log(pokemon);
    const pokemonHTMLstring = pokemon
      .map(
        pokeman =>
          `<li class="card">
            <img class="card-image" src="${pokeman.image}">
>>>>>>> parent of 83fd761... created popup in js
            <p class="card-subtitle">#${pokeman.id}</p>
            <h2 class="card-title">${pokeman.name}</h2>
            <p class="card-subtitle">${pokeman.type}</p>
        </li>`
      )
      .join("");
    pokedex.innerHTML = pokemonHTMLstring;
})

fetchPokemon();
