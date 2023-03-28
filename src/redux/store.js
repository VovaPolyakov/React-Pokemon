import { configureStore } from "@reduxjs/toolkit";
import { pokemonReducer } from "../ducks/pokemon/pokemon-slice";
import { pokemonApi } from "../ducks/pokemon/pokemon-api";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer:{
        [pokemonApi.reducerPath]:pokemonApi.reducer,
        pokemon:pokemonReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware,pokemonApi.middleware) 
})

setupListeners(store.dispatch)
sagaMiddleware.run(rootSaga)