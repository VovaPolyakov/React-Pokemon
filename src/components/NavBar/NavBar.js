import React from 'react'
import {useGetPokemonDataQuery} from '../../ducks/pokemon/pokemon-api'
import styles from '../../styles/NavBar.module.scss'
import { pokemonAction } from '../../ducks/pokemon/pokemon-slice'
import { useDispatch } from 'react-redux'

const NavBar = () => {
    const {data} = useGetPokemonDataQuery()
    const dispatch = useDispatch()
    console.log(data)

    const getMoreInfo = (e) => {
        data.results.map((item,idx) => {
            if(idx === Number(e.target.id)){
                console.log(item)
                dispatch(pokemonAction.getAdditialPokemonDataRequested(item.url))
            }
        })
    }
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <nav className={styles.row}>
            <ul className={styles.menu}>
                {data?.results.map((item,idx) => (
                    <li onClick={getMoreInfo} id={idx} className={styles.menu_li} key={idx}>{item.name}</li>
                ))}
            </ul>
        </nav>
      </div>
    </div>
  )
}

export default NavBar
