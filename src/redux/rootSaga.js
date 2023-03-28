import {fork} from 'redux-saga/effects'

import pokemonSaga from '../ducks/pokemon/sagas'

export default function* rootSaga(){
    yield fork(pokemonSaga)
}