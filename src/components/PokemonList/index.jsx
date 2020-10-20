import { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroller';

import { parseFromTypes } from '@utils/model'

import LoadingSkeleton from './LoadingSkeleton'
import ListDetail from './Item'

import styles from './styles.scss'

const renderLoader = () => {
  return (
    <>
      <style jsx>{styles}</style>
      <div className="pokemonContainer loadWrapper">
        <LoadingSkeleton />
        <LoadingSkeleton />
        <LoadingSkeleton />
      </div>
    </>
  )
}

export default function PokemonList({ pokemons, types }) {
  const [isLoading, setLoading] = useState(false)
  const [pokemonList, setPokemonList] = useState(pokemons)
  const { results, next } = pokemonList

  const _fetchMore = async () => {
    if (!next) return
    const result = await fetch(next);
    const morePokemons = await result.json()
    setPokemonList({ ...morePokemons, results: [...results, ...morePokemons.results] })
  }

  const _filterPokemons = async (typeUrl) => {
    setLoading(true)
    const result = await fetch(typeUrl);
    const filtered = await result.json()
    setPokemonList(parseFromTypes(filtered))
    setLoading(false)
  }

  const renderFilter = () => {
    return (
      <>
        <style jsx>{styles}</style>
        <div className="filterWrap">
          <select onChange={e => _filterPokemons(e.target.value)}>
            {types.map(value => <option value={value.url}>{value.name}</option>)}
          </select>
        </div>
      </>
    )
  }

  if (isLoading) {
    return renderLoader()
  }

  return (
    <>
      <style jsx>{styles}</style>
      <div className="container">
        {renderFilter()}
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
