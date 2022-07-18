export const BASE_API_URL = 'https://dev.pressure.vision/api';
export const getApiUrl = (endpoint) => BASE_API_URL + endpoint;
export const REGISTER = getApiUrl("/register");
export const VERIFY_OTP = getApiUrl("/verify-otp")
export const RESEND_OTP = getApiUrl("/resend-otp");
export const UPDATE_PROFILE = getApiUrl("/edit-profile")

export const LOGIN = getApiUrl("/login");
