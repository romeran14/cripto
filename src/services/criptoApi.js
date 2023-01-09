
  import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

  const baseUrl = 'https://coinranking1.p.rapidapi.com'
 // const baseUrl = 'https://pokeapi.co/api/v2/pokemon'

  const criptoApiHeader = {
    'X-RapidAPI-Key': 'b7a59abbd5msha4848d595784442p17d2e2jsn0427cdcc0b59',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
  }

  const createRequest = (url) => ({ url, headers: criptoApiHeader });

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),

    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),

    // Note: Change the coin price history endpoint from this - `coin/${coinId}/history/${timeperiod} to this - `coin/${coinId}/history?timeperiod=${timeperiod}`
    getCryptoHistory: builder.query({    //https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/history?timePeriod=3y
      query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timePeriod=${timeperiod}`),
    }),

    // Note: To access this endpoint you need premium plan
    getExchanges: builder.query({
      query: () => createRequest('/exchanges'),
    }),
  }),
});
  
  export const {
    useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery, useGetExchangesQuery

  } = cryptoApi;