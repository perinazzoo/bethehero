export const STORAGE_KEY = '@bethehero';
export const isAuthenticated = () => {
  const current = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (!current) {
    return false;
  }
  if (current.logout === true) {
    return false;
  }
  if (new Date() < new Date(current.expireAt * 1000)) {
    return true;
  }
  return false;
};
export const login = (token, name, expireAt) => {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      token,
      name,
      logout: false,
      expireAt,
    })
  );
};

export const logout = () => {
  const current = JSON.parse(localStorage.getItem(STORAGE_KEY));

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({ ...current, logout: true })
  );
};
