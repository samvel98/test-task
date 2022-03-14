import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({

  baseQuery: fetchBaseQuery({
    baseUrl: "https://reqres.in",
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
    usersList: builder.query({
      query: ({ page, perPage }) => `/api/users?page=${page}&per_page=${perPage}`,
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
        body: data
      }) 
    }),
    deleteUser: builder.mutation({
      query: ({ id }) => ({
        url: `/api/users/${id}`,
        method: 'DELETE'
      })
    })
  }),
});

export const {
  useLazyUsersListQuery,
  useUpdateUserMutation,
  useCreateUserMutation,
  useDeleteUserMutation,
  useUsersListQuery,
  useGetUserQuery,
  useLoginMutation
} = apiSlice;

export default apiSlice.reducer;