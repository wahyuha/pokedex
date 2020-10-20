import { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroller';

import LoadingSkeleton from './LoadingSkeleton'
import ListDetail from './Item'

import styles from './styles.scss'


export default function PokemonList({ pokemons }) {
  const [pokemonList, setPokemonList] = useState(pokemons)
  const { results, next } = pokemonList

  const _fetchMore = async () => {
    const result = await fetch(next);
    const morePokemons = await result.json()
    setPokemonList({ ...morePokemons, results: [...results, ...morePokemons.results] })
  }

  return (
    <>
      <style jsx>{styles}</style>
      <div className="container">
        <div className="main">
          <InfiniteScroll
            pageStart={0}
            loadMore={_fetchMore}
            hasMore={Boolean(next)}
            threshold={10}
            loader={<LoadingSkeleton />}
          >
            <div className="pokemonContainer">
              {results.map(item => <ListDetail key={`itm-${item.name}`} {...item} />)}
            </div>
          </InfiniteScroll>
        </div>
      </div>
    </>
  )
}
