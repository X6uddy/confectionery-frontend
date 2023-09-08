import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const vacanciesApiSlice = createApi({
    reducerPath: 'vacanciesApi',
    baseQuery: fetchBaseQuery({baseUrl: `${backendApi}/`}),
    endpoints: (builder) => ({
        getAllVacancies: builder.query({
            query: () => 'vacancies',
            method: 'GET',
        }),
        getSingleVacancy: builder.query({
            query: (id) => `vacancies/${id}`,
            method: 'GET',
        })
    })
});
export { vacanciesApiSlice }
export const {useGetAllVacanciesQuery,useGetSingleVacancyQuery} = vacanciesApiSlice;