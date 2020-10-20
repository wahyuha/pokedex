import App from '@components/App'
import PokemonList from '@components/PokemonList'

const ListPage = ({ pokemons, types }) => {
  return (
    <App>
      <PokemonList pokemons={pokemons} types={types} />
    </App>
  );
}

ListPage.getInitialProps = async () => {
  const result = await fetch('https://pokeapi.co/api/v2/pokemon/');
  const pokemons = await result.json()

  const resultTypes = await fetch('https://pokeapi.co/api/v2/type/');
  const types = await resultTypes.json()

  return { pokemons, types: types.results };
};

export default ListPage;
