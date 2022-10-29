import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export const postAPi = createApi({
  reducerPath: "posts",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080",
  }),
  tagTypes: ["posts"],
  endpoints: (builder) => ({
    // Get reports
    getPosts: builder.query({
      query: (params) => params,
      providesTags: ["posts"],
    }),

    createPost: builder.mutation({
      query: ({ body, url }) => ({
        url: url,
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["posts"],
    }),

    // General post request
    // postRequest: builder.mutation({
    //   query: (initData) => ({
    //     url: initData.url,
    //     method: "POST",
    //     body: initData.body,
    //     headers: {
    //       Accept: "application/json, text/plain, */*",
    //       "Content-Type": "application/json",
    //     },
    //     // credentials: "include",
    //   }),
    //   invalidatesTags: ["post"],
    // }),
  }),
});

export const { useGetPostsQuery, useCreatePostMutation } = postAPi;
