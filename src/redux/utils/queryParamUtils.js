export const updateQueryParams = (idToken) => {
    const queryParams = new URLSearchParams(window.location.search);
    queryParams.set('isAuthenticated', 'true');
    queryParams.set('idToken', idToken);
    window.history.replaceState(null, '', `${window.location.pathname}?${queryParams.toString()}`);
};

export const getQueryParameter = (parameterName) => {
    const queryParams = new URLSearchParams(window.location.search);
    return queryParams.get(parameterName);
};

export const updateQueryParameter = (parameterName, parameterValue) => {
    const queryParams = new URLSearchParams(window.location.search);
    queryParams.set(parameterName, parameterValue);
    window.history.replaceState(null, '', `${window.location.pathname}?${queryParams.toString()}`);
};

export const deleteQueryParameter = (parameterName) => {
    const queryParams = new URLSearchParams(window.location.search);
    queryParams.delete(parameterName);
    window.history.replaceState(null, '', `${window.location.pathname}?${queryParams.toString()}`);
};

export const setAuthToken = (idToken) => {
    localStorage.setItem('idToken', idToken);
};

export const getAuthToken = () => {
    return localStorage.getItem('idToken');
};

export const clearAuthToken = () => {
    localStorage.removeItem('idToken');
};
