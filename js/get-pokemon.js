var url = 'https://pokeapi.co/api/v2/ability/?limit=10&offset=20'

var sogo= 'https://www.google.com'

var template = $('.template')
  .clone()
  .removeClass('template')
  .detach();

function loadPokemon(pokemon) {
      $.each(pokemon.results, function(i, pokemon) {
      addPokemon(pokemon)
      $.each(pokemon.pokemon, function(i, entry){
      console.log(entry.pokemon.name);
    }):
  });
}

function addPokemon(pokemon) {
  var li = template.clone();

  li.find('.pokemon-name a')
    .text(pokemon.name)
    .attr('href', pokemon.url)
    .filter("#name")

  li.attr('data-name', pokemon.id);
  $('#pokemonList').append(li);


}


$.get({
  url: url,
  success: loadPokemon,
});
