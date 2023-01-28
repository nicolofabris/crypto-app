import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
          'X-RapidAPI-Key': 'cf1d55325cmsh0984e3116c9f682p101bedjsn6423915760f0',
          'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'

}


const baseUrl = 'https://coinranking1.p.rapidapi.com/coins'

const createRequest = (url) => ({ url, headers: cryptoApiHeaders })


export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        })
    })
})
export const {
    useGetCryptosQuery
} = cryptoApi