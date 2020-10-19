import { useState } from 'react'
import _ from 'lodash'
import Head from 'next/head'
import styles from './styles.scss'

const PokemonItem = (item) => {
  const pokemonId = item.url.split('/')[6]
  const imageSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`

  return (
    <>
      <style jsx>{styles}</style>
      <div className="pokemonItem">
        <img src={imageSrc} alt={item.name} className="pokemonImg" />
        <h2>{item.name}</h2>
      </div>
    </>
  )
}

export default function PokemonList({ pokemons }) {
  const [pokemonList, setPokemonList] = useState(pokemons)
  const { results, next } = pokemonList

  return (
    <>
      <style jsx>{styles}</style>
      <div className="container">
        <Head>
          <title>Pokedex</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="main">
          <div className="listWrapper">
            {results.map(item => <PokemonItem {...item} />)}
          </div>
        </div>
      </div>
    </>
  )
}
