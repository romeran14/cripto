import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"

const cryptoNewsHeaders =   {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': 'b7a59abbd5msha4848d595784442p17d2e2jsn0427cdcc0b59',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
  }

  const baseUrl = 'https://bing-news-search1.p.rapidapi.com'



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