function parseFromTypes(types, typeName) {
  if(typeName === 'all') {
    return types;
  }

  const { pokemon } = types
  const results = pokemon.map(value => value.pokemon)
  return { count: null, next: null, previous: null, results }
}

module.exports = {
  parseFromTypes
}