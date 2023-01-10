
  import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

  const baseUrl = import.meta.env.VITE_RAPID_API_BASE_URL

  const criptoApiHeader = {
    'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
    'X-RapidAPI-Host': import.meta.env.VITE_RAPID_API_HOST
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

   
    getCryptoHistory: builder.query({   
      query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timePeriod=${timeperiod}`),
    }),

  }),
});
  
  export const {
    useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery

  } = cryptoApi;