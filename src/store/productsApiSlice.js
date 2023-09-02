import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const productsApiSlice = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://127.0.0.1:3004/'}),
    endpoints: (builder) => ({
            getOneProduct: builder.query({
                query: (id) => `products/${id}`
            }),
    })
});
export { productsApiSlice }
export const { useGetOneProductQuery } = productsApiSlice;
