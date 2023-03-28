import { createSlice } from "@reduxjs/toolkit";


export const pokemonSlice = createSlice({
    name:'pokemon',
    initialState:{
        data:[],
        isLoading:false,
        error:''
    },
    reducers:{
        getPokemonData:(state,action) => {
            state.data = (action.payload)
            state.isLoading = false
        },
        getAdditialPokemonDataRequested:(state,action) => {
            state.isLoading = true
        },
        getPokemonDataError:(state,action) => {
            state.error = (action.payload)
        }
    }
})

export const pokemonReducer = pokemonSlice.reducer;
export const pokemonAction = pokemonSlice.actions;
export const pokemonSelector = (state) => state.pokemon.data;