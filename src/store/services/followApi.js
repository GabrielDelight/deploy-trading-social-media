import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const followAPI = createApi({
  reducerPath: "follow",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080",
  }),
  tagTypes: ["follow"],
  endpoints: (builder) => ({
    // Get reports
    getFollowRequest: builder.query({
      query: (params) => params,
      providesTags: ["follow"],
    }),

    // General follow request
    FollowPostRequest: builder.mutation({
      query: (initData) => ({
        url: initData.url,
        method: "POST",
        body: initData.body,
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        // credentials: "include",
      }),
      invalidatesTags: ["follow"],
    }),
  }),
});

export const { useFollowPostRequestMutation, useGetFollowRequestQuery } =
  followAPI;
