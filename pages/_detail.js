import App from '@components/App'

const ListPage = ({ detail }) => {
  return (
    <App>
      <div>Detail pokemon {detail.name}</div>
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
