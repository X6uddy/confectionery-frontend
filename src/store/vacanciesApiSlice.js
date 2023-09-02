import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const vacanciesApiSlice = createApi({
    reducerPath: 'vacanciesApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://127.0.0.1:3004/'}),
    endpoints: (builder) => ({
        getAllVacancies: builder.query({
            query: () => 'vacancies',
            method: 'GET',
        }),
    })
});
export { vacanciesApiSlice }
export const {useGetAllVacanciesQuery} = vacanciesApiSlice;