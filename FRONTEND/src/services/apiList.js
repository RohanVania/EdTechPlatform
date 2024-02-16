

//* AUTH API URLS
export const authEndPoints={
    LOGIN_API:'/auth/login',
    FORGOT_PASSWORD_TOKEN_API:'/auth/reset-password-token',
    SEND_OTP_API:'/auth/sendotp',
    REGISTER_API:'/auth/signup',
    RESET_PASSWORD_VALID_TOKEN:(resetToken)=>`/auth/reset-password/${resetToken}`,
    RESET_PASSWORD:'/auth/reset-password'
}

//* User API URLS
export const userApiEndpoints={
    CHANGE_PASSWORD_API:'/auth/changepassword',
    CHANGE_IMAGE_API:'/profile/updateDisplayPicture'
}

//* Public API URLS
export const publicApi={
    SHOW_ALL_CATEGORY:'/course/showAllCategories',
    CHECK_ALREADY_LOGGED_IN:'/auth/checkalreadyLoggedIn',
}