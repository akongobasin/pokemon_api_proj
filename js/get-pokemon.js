//var url = 'https://pokeapi.co/api/v2/pokemon/'
//

var template = $('.template')
  .clone()
  .removeClass('template')
  .detach();

function loadPokemon(pokemon) {
      $.each(pokemon.results, function(i, pokemon) {
          //addPokemon(pokemon.name);
          console.log(pokemon.name);

          //logs pokemon name results in the console
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
  success: loadPokemon
});
