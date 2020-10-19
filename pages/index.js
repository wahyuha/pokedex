import App from '@components/App'
import PokemonList from '@components/PokemonList'

const ListPage = ({ pokemons }) => {
  return (
    <App>
      <PokemonList pokemons={pokemons} />
    </App>
  );
}

ListPage.getInitialProps = async ({ isServer }) => {
  const result = await fetch('https://pokeapi.co/api/v2/pokemon/');
  const pokemons = await result.json()

  return { pokemons };
};

export default ListPage;
