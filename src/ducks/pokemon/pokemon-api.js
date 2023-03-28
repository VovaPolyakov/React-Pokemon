import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const pokemonApi = createApi({
    reducerPath:'pokemon/api',
    baseQuery:fetchBaseQuery({
        baseUrl:'https://pokeapi.co'
    }),
    endpoints:(build) => ({
        getPokemonData:build.query({
            query: () => ({
                url:'/api/v2/pokemon'
            })
        })
    })
})

export const {useGetPokemonDataQuery} = pokemonApi;