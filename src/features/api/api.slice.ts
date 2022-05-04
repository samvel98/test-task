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
    getSettings: builder.query({
      query: () => '/admin/settings',
    }),
    updateOrCreateSettings: builder.mutation({
      query: ({ data }) => ({
        url: '/admin/settings/update',
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
      query: () => `/admin/orders`,
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
    }),
    listFAQ: builder.query({
      query: () => `/admin/faq`,
    }),
    getFAQ: builder.query({
      query: ({ id }) => `/admin/faq/${id}`,
    }),
    createFAQ: builder.query({
      query: ({ data }) => ({
        url: `/admin/faq/create`,
        method: 'POST',
        body: data
      })
    }),
    editFAQ: builder.query({
      query: ({ data, id }) => ({
        url: `/admin/faq/update/${id}`,
        method: 'POST',
        body: data
      })
    }),
    deleteFAQ: builder.mutation({
      query: ({ id }) => ({
        url: `/admin/faq/delete/${id}`,
        method: 'DELETE'
      })
    }),
    listTeamMember: builder.query({
      query: () => `/admin/teammembers`,
    }),
    getTeamMember: builder.query({
      query: ({ id }) => `/admin/teammembers/${id}`,
    }),
    deleteTeamMember: builder.mutation({
      query: ({ id }) => ({
        url: `/admin/teammembers/delete/${id}`,
        method: 'DELETE'
      })
    }),
    createTeamMember: builder.query({
      query: ({ data }) => ({
        url: `/admin/teammembers/create`,
        method: 'POST',
        body: data
      })
    }),
    editTeamMember: builder.query({
      query: ({ data, id }) => ({
        url: `/admin/teammembers/update/${id}`,
        method: 'POST',
        body: data
      })
    }),
    
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
  useLazyCreateFAQQuery,
  useGetFAQQuery,
  useLazyEditFAQQuery,
  useListFAQQuery,
  useDeleteFAQMutation,
  useUpdateOrCreateSettingsMutation,
  useGetSettingsQuery,
  useLazyCreateTeamMemberQuery,
  useLazyEditTeamMemberQuery,
  useDeleteTeamMemberMutation,
  useListTeamMemberQuery,
  useGetTeamMemberQuery,
  useGetUserQuery,
  useLoginMutation
} = apiSlice;

export default apiSlice.reducer;