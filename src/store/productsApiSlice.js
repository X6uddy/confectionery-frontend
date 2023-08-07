import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const productsApiSlice = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://127.0.0.1:3004/'}),
    endpoints: (builder) => ({
            getSumProducts: builder.query({ 
                query: () => `products/sum`, // products/sum здесь является добоплнение к baseUrl
            }),
            getProductsCatalog: builder.query({ 
                query: (skip = '0') => `products/catalog?skip=${skip}`,
                 
            })
    })
});
export { productsApiSlice}
export const {useGetSumProductsQuery,useGetProductsCatalogQuery} = productsApiSlice;
