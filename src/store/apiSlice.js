import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseURL='https://portfolio-expensetrcker-backend-node.vercel.app'

export const apiSlice = createApi({
    baseQuery : fetchBaseQuery({ baseUrl : baseURL}),//make req to the server,we pass the func to base query
    endpoints : builder => ({     //to build the query
        // get categories
        getCategories : builder.query({
            // get: 'http://localhost:8000/api/categories'
            query: () => '/api/categories', // query-makes defaul t get rqeuest
            providesTags: ['categories']  //datas will be in getcategories
        }),

        // get labels
        getLabels : builder.query({
            // get: 'http://localhost:8000/api/labels'
            query : () => '/api/labels',
            providesTags: ['transaction']
        }),

        // add new Transaction
        addTransaction : builder.mutation({
            query : (initialTransaction) => ({
                  // post: 'http://localhost:8000/api/transaction'
                url: '/api/transaction',
                method: "POST",
                body: initialTransaction
            }),
            invalidatesTags: ['transaction']
        }),

        // delete record
        deleteTransaction : builder.mutation({
            query : recordId => ({
                // delete: 'http://localhost:8000/api/transaction'
                url : '/api/transaction',
                method : "DELETE",
                body : recordId
            }),
            invalidatesTags: ['transaction']
        })

    })
})

export default apiSlice;