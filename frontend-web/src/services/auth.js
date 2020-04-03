export const STORAGE_KEY = '@bethehero';
export const isAuthenticated = () => {
  const current = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (current.logout === true) {
    return false;
  }
  if (new Date() < current.expireAt) {
    return true;
  }
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({ ...current, expired: true })
  );
  return false;
};
export const login = (token, name, expireAt) => {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      token,
      name,
      logout: false,
      expired: false,
      expireAt,
    })
  );
};

export const logout = () => {
  localStorage.removeItem(STORAGE_KEY);
};
