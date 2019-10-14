const pokedex = document.getElementById("pokedex");

const fetchPokemon = async () => {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=150`;
  const res = await fetch(url);
  const data = await res.json();
  const pokemon = data.results.map((result, index) => ({
    name: result.name,
    id: index + 1,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index +
      1}.png`
  }));
  displayPokemon(pokemon);
};

const displayPokemon = pokemon => {
  console.log(pokemon);
  const pokemonHTMLstring = pokemon
    .map(
      pokeman =>
        `<li class="card" onclick="selectPokemon(${pokeman.id})">
        <img class="card-image" src="${pokeman.image}">
            <p class="card-subtitle">#${pokeman.id}</p>
            <h2 class="card-title">${pokeman.name}</h2>
             </li>`
    )
    .join("");
  pokedex.innerHTML = pokemonHTMLstring;
};

const selectPokemon = async id => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const pokeman = await res.json();
  displayPopUp(pokeman);
};

const displayPopUp = pokeman => {
  const type = pokeman.types.map(type => type.type.name).join(", ");
  const image = pokeman.sprites["front_default"];
  const HTMLstring = `
      <div class="popup">
          <button id="closeBtn" onclick="closePopUp()">Close</button>
          <li class="card"">
          <img class="card-image" src="${image}">
          <p class="card-subtitle">#${pokeman.id}</p>
          <h2 class="card-title">${pokeman.name}</h2>
      </li>
      <p>Height: ${pokeman.height} | Weight: ${pokeman.weight} | Type: ${pokeman.type}</p>
      </div>
      
    `;
  pokedex.innerHTML = HTMLstring + pokedex.innerHTML;
  console.log(HTMLstring);
};

const closePopUp = () => {
  const popup = document.querySelector(".popup");
  popup.parentElement.removeChild(popup);
};

fetchPokemon();