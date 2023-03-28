import React from 'react'
import styles from '../../styles/Block.module.scss'
import { pokemonSelector } from '../../ducks/pokemon/pokemon-slice'
import { useSelector } from 'react-redux'

const PokemonBlock = () => {
    const pokemonData = useSelector(pokemonSelector)
  return (
    <div className={styles.block}>
        <div className={styles.container}>
            {pokemonData.length !== 0 ?  <div className={styles.row}>
                                <div className={styles.pokemon_img}>
                                    <img alt='pokemon' src={pokemonData?.sprites?.other.home.front_default}></img>
                                </div>
                                <div className={styles.pokemon_additialinfo}>
                                    <div className={styles.pokemon_row}>
                                        <h1>{pokemonData.name?.toUpperCase()}</h1>
                                        <p>Wieght: {pokemonData.weight}kg</p>
                                        <p>Height: {pokemonData.height}</p>
                                        <p className={styles.pokemon_types}>Type:
                                                {pokemonData.types?.map((item) => (
                                                    <p>
                                                        {item.type.name}   
                                                    </p>
                                                ))}
                                        </p>
                                        <p className={styles.pokemon_ability}>Ability:
                                                {pokemonData.abilities?.map((item) => (
                                                    <p>{item.ability.name}</p>
                                                ))}
                                        </p>
                                    </div>
                                </div>
                </div> : ''}
        </div>
    </div>
  )
}

export default PokemonBlock
