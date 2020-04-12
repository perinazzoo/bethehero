import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';

import useAuthContext from './hooks/useAuthContext';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const {
    authenticated,
    loading,
    handleLogin,
    handleRegister,
    logout,
  } = useAuthContext();

  return (
    <AuthContext.Provider
      value={{ authenticated, handleLogin, logout, handleRegister, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('Component must be within the Context Provider');
  }
  const {
    handleLogin,
    logout,
    authenticated,
    handleRegister,
    loading,
  } = context;
  return { handleLogin, logout, authenticated, handleRegister, loading };
}

AuthProvider.propTypes = {
  children: PropTypes.node,
};

AuthProvider.defaultProps = {
  children: null,
};

export { AuthProvider, useAuth };
