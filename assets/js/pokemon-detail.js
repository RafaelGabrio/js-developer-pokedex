const urlParams = new URLSearchParams(window.location.search);
const pokemonId = urlParams.get("id");

const headerPokemonDetail = document.getElementById("headerPokemonDetail");
const articlePokemonDetail = document.getElementById("articlePokemonDetail");
const container = document.querySelector("#container");
const body = document.querySelector("body");

if (pokemonId) {
  getPokemonDetail(pokemonId).then((pokemon) => {
    //Adiciona a cor no fundo conforme o tipo
    // container.classList.add(pokemon.type);
    body.classList.add(pokemon.type);

    const elementsHeader = convertPokemonDataToItensHeader(pokemon);
    const elementsArticle = convertPokemonDataToSections(pokemon);
    headerPokemonDetail.innerHTML += elementsHeader;
    articlePokemonDetail.innerHTML += elementsArticle;
  });
}

function convertPokemonDataToItensHeader(pokemon) {
  return `
            <div id="titlePokemon">
                <h1>${pokemon.name}</h1>
                <span>#${pokemon.number}</span>
            </div>
            
            <ol class="types">
                ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join("")}
            </ol>

            <figure>
                <img src="${pokemon.photo}" alt="img ${pokemon.name}">
            </figure>
            

  `;
}

function convertPokemonDataToSections(pokemon) {
  return `<section>
            <h2>About</h2>
            <dl class="pokemonAttributes">
                <dt>Species</dt>
                <dd>${pokemon.species}</dd>
                <dt>Height</dt>
                <dd>${pokemon.height}</dd>
                <dt>Weight</dt>
                <dd>${pokemon.weight}</dd>
                <dt>Abilities</dt>
                <dd>${pokemon.abilities.map((abilities) => abilities).join(", ")}</dd>
                <dt>States</dt>
                <dd>${pokemon.states.map((states) => `${states.name}: ${states.value}`).join("</br>")}</dd>
            </dl>
          </section>
  `;
}

function getPokemonDetail(pokemonId) {
  return pokeApi.getPokemonById(pokemonId).then(convertPokeApiDetailToPokemon);
}
