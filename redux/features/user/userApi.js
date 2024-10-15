import { apiSlice } from "./../api/apiSlice";

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    updateAvatar: builder.mutation({
      query: (avatar) => ({
        url: "user/social-auth",
        method: "POST",
        body: avatar,
        credentials: "include",
      }),
    }),
    editProfile: builder.mutation({
        query: ({ name }) => ({
          url: "user/update-user",
          method: "PUT",
          body: { name },
          credentials: "include",
        }),
      }),
    updateUserPassword: builder.mutation({
        query: (oldPassword, newPassword) => ({
          url: "user/update-password",
          method: "PUT",
          body: { oldPassword, newPassword },
          credentials: "include",
        }),
      }),
      getAllUsers: builder.query({
        query: () => ({
          url: "user/get-users",
          method: "GET",
          credentials: "include",
        }),
      }),
  }),
});

export const {
  useUpdateAvatarMutation,
  useEditProfileMutation,
  useUpdateUserPasswordMutation,
  useGetAllUsersQuery,
} = userApi;
