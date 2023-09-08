import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const backendApi = process.env.REACT_APP_API_URL;


const productsApiSlice = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({baseUrl: `${backendApi}/`}),
    endpoints: (builder) => ({
            getOneProduct: builder.query({
                query: (id) => `products/${id}`
            }),
    })
});
export { productsApiSlice }
export const { useGetOneProductQuery } = productsApiSlice;
