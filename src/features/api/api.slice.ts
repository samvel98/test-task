import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({

  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3002",
  }),

  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ email, password }) => ({
        url: '/api/login',
        method: 'POST',
        body: {
          email,
          password
        }
      }) 
    }),
    listGiftboxes: builder.query({
      query: () => `/api/giftbox`,
    }),
    createGiftbox: builder.query({
      query: ({ data }) => ({
        url: '/api/giftbox/create',
        method: 'POST',
        body: data
      }) 
    }),
    usersList: builder.query({
      query: () => `/api/users`,
    }),
    getUser: builder.query({
      query: ({ id }) => `/api/users/${id}`,
    }),
    createUser: builder.mutation({
      query: ({ data }) => ({
        url: '/api/users',
        method: 'POST',
        body: data
      }) 
    }),
    updateUser: builder.mutation({
      query: ({ id, data }) => ({
        url: `/api/users/${id}`,
        method: 'PATCH',
        headers: {
          "Content-Type": "multipart/form-data",
        },
        body: data,
        
      }) 
    }),
    ordersList: builder.query({
      query: () => `/admin/order`,
    }),
    deleteUser: builder.mutation({
      query: ({ id }) => ({
        url: `/api/users/${id}`,
        method: 'DELETE'
      })
    }),
    deleteGiftbox: builder.mutation({
      query: ({ id }) => ({
        url: `/api/giftbox/delete/${id}`,
        method: 'DELETE'
      })
    })
  }),
});

export const {
  useLazyUsersListQuery,
  useListGiftboxesQuery,
  useUpdateUserMutation,
  useCreateUserMutation,
  useDeleteUserMutation,
  useDeleteGiftboxMutation,
  useOrdersListQuery,
  useCreateGiftboxQuery,
  useLazyCreateGiftboxQuery,
  useUsersListQuery,
  useGetUserQuery,
  useLoginMutation
} = apiSlice;

export default apiSlice.reducer;