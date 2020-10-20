import Link from 'next/link'
import styles from './styles.scss'

export default function ListItem (item) {
  const pokemonId = item.url.split('/')[6]
  const imageSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`

  return (
    <>
      <style jsx>{styles}</style>
      <div className="poContainer">
      <Link 
        href={`/_detail?pokemonSlug=${item.name}`} 
        as={`/${item.name}`}>
          <a>
          <div className="pokemonCard">
            <div className="cardFront">
              <div className="coverWrap"><img src={imageSrc} alt={item.nam} /></div>
              <div className="circle"></div>
              <h5 className="pokeId"> #{pokemonId} </h5>
              <h5 className="pokeName">{item.name}</h5>
            </div>
          </div>
          </a>
        </Link>
      </div>
    </>
  )
}

