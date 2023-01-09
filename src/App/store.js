import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../services/criptoApi";
import { cryptoNewsApi } from "../services/criptoNewsApi";
export const store = configureStore({
    reducer: {
        [cryptoApi.reducerPath]:cryptoApi.reducer,
        [cryptoNewsApi.reducerPath]:cryptoNewsApi.reducer,

    },
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(cryptoApi.middleware).concat(cryptoNewsApi.middleware),

})