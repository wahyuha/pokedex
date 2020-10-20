import { useState } from 'react'

import { parseCover, parseAbilities, generateColorByType } from '@utils/parserPokemon'

import styles from './styles.scss'

export default function PokemonDetail({ detail }) {
  const { stats, types, abilities, height, weight, base_experience } = detail
  const { name } = detail
  const [firstTypes] = types
  const colorType = generateColorByType(firstTypes.type.name)

  const renderTypes = () => {
    return (
      <>
        <style jsx>{styles}</style>
        <div className="typeWrapper">
          {types.map(value => {
            const typeName = value.type.name
            return <div key={`tp-${typeName}`} className="statType" style={{ backgroundColor: generateColorByType(typeName) }}>{typeName}</div>
          })}
        </div>
      </>
    )
  }

  const renderStats = () => {
    return (
      <>
        <style jsx>{styles}</style>
        {stats.map(value => {
          const statName = value.stat.name
          return (
            <div className="statChart" key={`st-${statName}`}>
              <div className="statText">{statName}</div>
                <div className="chartBar">
                  <div className="chartBarFilled" style={{ backgroundColor: colorType, width: `${value.base_stat}%` }}>{value.base_stat}</div>
                </div>
            </div>
          )
        })}
      </>
    )
  }

  return (
    <>
      <style jsx>{styles}</style>
      <div className="container" style={{ backgroundColor: colorType }}>
        <div className="card">
          <h1 className="pokTitle">{name}</h1>
          <div className="panel">
            <div className="stat">
              <img src={parseCover(detail)} alt={name} className="cover" />
              <div className="statInfo">
                {renderTypes()}
                {renderStats()}
              </div>
            </div>
          </div>
          <div className="subTitle">Profile</div>
          <div className="panel">
            <div className="profileInfo">Abilities : {parseAbilities(abilities)}</div>
            <div className="profileInfo">Height : {height}</div>
            <div className="profileInfo">Weight : {weight}</div>
            <div className="profileInfo">Base Experience : {base_experience}</div>
          </div>
          {/* <div className="subTitle">Damage When Attacked</div>
          <div className="panel">Ground</div>
          <div className="subTitle">Evolutions</div>
          <div className="panel">from this to this</div> */}
        </div>
      </div>
    </>
  )
}
