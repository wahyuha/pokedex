import App from '@components/App'
import PokemonDetail from '@components/PokemonDetail'

const ListPage = ({ detail }) => {
  return (
    <App>
      <PokemonDetail detail={detail} />
    </App>
  );
}

ListPage.getInitialProps = async ({ query }) => {
  const { pokemonSlug } = query
  const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonSlug}`);
  const detail = await result.json()

  return { detail };
};

export default ListPage;
