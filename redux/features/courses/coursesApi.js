import { apiSlice } from "./../api/apiSlice";

export const courseApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createCourse: builder.mutation({
      query: (data) => ({
        url: "course/create-course",
        method: "POST",
        body: data,
        credentials: "include",
      }),
    }),
  }),
});

export const { useCreateCourseMutation } = courseApi;
