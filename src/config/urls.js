export const BASE_API_URL = 'https://dev.pressure.vision/api';
export const getApiUrl = (endpoint) => BASE_API_URL + endpoint;
export const REGISTER = getApiUrl("/register"); 