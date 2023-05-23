export const setAuthToken = (idToken) => {
    localStorage.setItem('idToken', idToken);
};

export const getAuthToken = () => {
    return localStorage.getItem('idToken');
};

export const clearAuthToken = () => {
    localStorage.removeItem('idToken');
};
