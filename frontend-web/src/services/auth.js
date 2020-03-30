import api from './api';

export const TOKEN_KEY = '@bethehero/token';
export const isAuthenticated = async () => {
  if (localStorage.getItem(TOKEN_KEY) !== null) {
    try {
      const { data } = await api.get('/test');

      return { isAuth: true, data };
    } catch (err) {
      return false;
    }
  } else {
    return false;
  }
};
export const login = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
};
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};
