export const TOKEN_KEY = 'token';
export const USERNAME_KEY = 'userName';
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const login = token => {
  localStorage.setItem(TOKEN_KEY, token);
};
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  sessionStorage.removeItem(USERNAME_KEY);
};
export const getUserName = () => {
  sessionStorage.getItem(USERNAME_KEY);
}
export const isLogged = () => {
  if(localStorage.getItem(TOKEN_KEY) == null)
    return false
  else
    return true
}