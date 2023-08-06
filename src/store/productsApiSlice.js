import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const productsApiSlice = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://127.0.0.1:3004/'}),
    endpoints: (builder) => ({
            getProducts: builder.query({ 
                query: () => `products`, // products здесь является добоплнение к baseUrl
            })
    })
});
export { productsApiSlice}
export const {useGetProductsQuery} = productsApiSlice;
