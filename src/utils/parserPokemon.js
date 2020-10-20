function parseCover(pokemon) {
  const { front_default, other: { dream_world: { front_default : frontHigh } } } = pokemon.sprites
  return frontHigh || front_default
}

function parseAbilities(abilities) {
  let result = ''
  abilities.map(value => {
    result = `${result}${result ? ', ' : ''} ${value.ability.name}`
  })
  return result
}

function generateColorByType(types) {
  const colors = {
    normal: '#A8A878',
    fire: '#F08030',
    fighting: '#C03028',
    water: '#6890F0',
    grass: '#78C850',
    poison: '#A040A0',
    electric: '#F8D030',
    ground: '#E0C068',
    rock: '#B8A038',
    bug: '#A8B820',
    dragon: '#7038F8',
    ghost: '#705898',
    dark: '#705848',
    fairy: '#EE99AC',
    steel: '#B8B8D0',
    psychic: '#F85888',
    ice: '#98D8D8',
    flying: '#A890F0'
  }
  return colors[types]
}

function injectResetTypes(results) {
  return [{ name: 'all', url: 'https://pokeapi.co/api/v2/pokemon/' }, ...results]
}

module.exports = {
  parseCover,
  parseAbilities,
  generateColorByType,
  injectResetTypes
}