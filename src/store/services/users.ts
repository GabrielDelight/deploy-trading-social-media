import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const usersApi = createApi({
  reducerPath: "users",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080",
  }),
  tagTypes: ["post"],
  endpoints: (builder) => ({
    // Get reports
    getRequest: builder.query({
      query: (params) => params,
      providesTags: ["post"],
    }),

    getWhoToFollow: builder.query({
      query: (params) => params,
      // providesTags: ["post"],
    }),

    // General post request
    postRequest: builder.mutation({
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
      invalidatesTags: ["post"],
    }),

    ReportFilePostRequest: builder.mutation({
      query: ({ body, url }) => ({
        url: url,
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["post"],
    }),
    UploadFile: builder.mutation({
      query: ({ body, url }) => ({
        url: url,
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["post"],
    }),
  }),
});

export const {
  useGetRequestQuery,
  useGetWhoToFollowQuery,
  useUploadFileMutation,
  usePostRequestMutation,
  useReportFilePostRequestMutation,
} = usersApi;
