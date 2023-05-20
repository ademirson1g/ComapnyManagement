import { getAuthToken } from "../utils/queryParamUtils";

export const addAuthHeader = (config) => {
    const idToken = getAuthToken();
    if (idToken) {
        config.headers.Authorization = `Bearer ${idToken}`;
    }
    return config;
};