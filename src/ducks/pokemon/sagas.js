import {takeLatest,put} from 'redux-saga/effects'
import { pokemonAction } from './pokemon-slice'

function* getAdditialPokemonData(action){
    console.log(action)
    try{
        const res = yield fetch(action.payload)
        const data = yield res.json()
        yield put(pokemonAction.getPokemonData(data))
    }catch(e){
        yield put(pokemonAction.getPokemonDataError(e))
    }
}

export default function* pokemonSaga(){
    yield takeLatest(pokemonAction.getAdditialPokemonDataRequested().type,getAdditialPokemonData)
}