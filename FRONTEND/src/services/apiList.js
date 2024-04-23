

//* AUTH API URLS
export const authEndPoints={
    LOGIN_API:'/auth/login',
    FORGOT_PASSWORD_TOKEN_API:'/auth/reset-password-token',
    SEND_OTP_API:'/auth/sendotp',
    REGISTER_API:'/auth/signup',
    RESET_PASSWORD_VALID_TOKEN:(resetToken)=>`/auth/reset-password/${resetToken}`,
    RESET_PASSWORD:'/auth/reset-password',
    LOGOUT_API:'/auth/logout'
}

//* User API URLS
export const userApiEndpoints={
    CHANGE_PASSWORD_API:'/auth/changepassword',
    CHANGE_IMAGE_API:'/profile/updateDisplayPicture',
    CHANGE_PROFILE_INFO_API:'/profile/updateProfile',
    DELETE_ACCOUNT_API:'/profile/deleteProfile'
}

//* Public API URLS
export const publicApi={
    SHOW_ALL_CATEGORY:'/course/showAllCategories',
    CHECK_ALREADY_LOGGED_IN:'/auth/checkalreadyLoggedIn',
}

//* Course API URLS

export const courseApi={
    MY_COURSES:'/course/mycourses',
    DELETE_PARTICULAR_COURSE:(id)=>`/course/deleteCourse/${id}`,
    ADD_COURSE:'/course/createCourse'
}