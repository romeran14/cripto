import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"

const cryptoNewsHeaders =   {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key':  import.meta.env.VITE_RAPID_API_KEY_NEWS ,
    'X-RapidAPI-Host': import.meta.env.VITE_RAPID_API_HOST_NEWS
  }

  const baseUrl = import.meta.env.VITE_RAPID_API_BASE_URL_NEWS



  const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

  export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({
      getCryptoNews: builder.query({
        query: ({ newsCategory, count }) =>
         createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
      }),
    }),
  });
  
  export const { useGetCryptoNewsQuery } = cryptoNewsApi;