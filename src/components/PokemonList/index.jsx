import { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroller';

import { parseFromTypes } from '@utils/model'
import { generateColorByType } from '@utils/parserPokemon'

import LoadingSkeleton from './LoadingSkeleton'
import ListDetail from './Item'

import styles from './styles.scss'

const renderLoader = (isLoading) => {
  if (!isLoading) return null
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
  const [selectedType, setType] = useState('all')
  const { results, next } = pokemonList

  const _fetchMore = async () => {
    if (!next) return
    const result = await fetch(next);
    const morePokemons = await result.json()
    setPokemonList({ ...morePokemons, results: [...results, ...morePokemons.results] })
  }

  const _filterPokemons = async ({ typeUrl, typeName }) => {
    setType(typeName)
    setLoading(true)
    const result = await fetch(typeUrl);
    const filtered = await result.json()
    setPokemonList(parseFromTypes(filtered, typeName))
    setLoading(false)
  }

  const renderFilterOptions = (types) => {
    return (
      <>
        <style jsx>{styles}</style>
        <div className="filterScroll">
          <div className="tabWrapper">
            {types.map(value => (
              <div
                onClick={() => _filterPokemons({ typeUrl: value.url, typeName: value.name })}
                className={`tabItem ${selectedType === value.name ? 'tabSelected' : ''}`}
                style={{ backgroundColor: generateColorByType(value.name) }}
                key={`tp-${value.name}`}
              >
              <img src="images/pokeball.png" alt="Electric" />
              <h3>{value.name}</h3>
            </div>
            ))}
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <style jsx>{styles}</style>
      <div className="container">
        <div className="landingBoard">
          <img src="images/pokemon.png" alt="Pokedex" />
          <h2>Choose your hero</h2>
        </div>
        {renderFilterOptions(types)}
        <div className="main">
          {renderLoader(isLoading)}
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
