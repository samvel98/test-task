import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({

  baseQuery: fetchBaseQuery({
    baseUrl: "https://demo.treblle.com/api/v1",
  }),

  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ email, password }) => ({
        url: '/auth/login',
        method: 'POST',
        body: {
          email,
          password
        }
      }) 
    }),
    register: builder.mutation({
      query: ({ name, email, password }) => ({
        url: '/auth/register',
        method: 'POST',
        body: {
          name,
          email,
          password
        }
      }) 
    }),
    updateUser: builder.mutation({
      query: ({ id, data }) => ({
        url: `/api/users/${id}`,
        method: 'PATCH',
        body: data
      }) 
    }),

  }),
});

export const {
  useUpdateUserMutation,
  useLoginMutation,
  useRegisterMutation
} = apiSlice;

export default apiSlice.reducer;