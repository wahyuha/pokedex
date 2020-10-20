import { useState } from 'react'

import InfiniteScroll from 'react-infinite-scroller';
import Skeleton from 'react-loading-skeleton';

import Link from 'next/link'
import Head from 'next/head'
import styles from './styles.scss'

const PokemonItem = (item) => {
  const pokemonId = item.url.split('/')[6]
  const imageSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`

  return (
    <>
      <style jsx>{styles}</style>
      <Link 
        href={`/_detail?pokemonSlug=${item.name}`} 
        as={`/${item.name}`}>
        <a className="pokemonItem">
          <img src={imageSrc} alt={item.name} className="pokemonImg" />
          <h2>{item.name}</h2>
        </a>
      </Link>
    </>
  )
}

const LoadingSkeleton = () => {
  return (
    <>
      <style jsx>{styles}</style>
      <div className="listWrapper">
        {[0, 1, 2, 3].map(item => {
          return (
            <div className="pokemonItem loaderSkeleton">
              <Skeleton width="100%" height="160px" />
            </div>
          )
        })}
      </div>
    </>
  )
}

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
        <Head>
          <title>Pokedex</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="main">
          <InfiniteScroll
            pageStart={0}
            loadMore={_fetchMore}
            hasMore={Boolean(next)}
            threshold={0}
            loader={<LoadingSkeleton />}
          >
            <div className="listWrapper">
              {results.map(item => <PokemonItem {...item} />)}
            </div>
          </InfiniteScroll>
        </div>
      </div>
    </>
  )
}
