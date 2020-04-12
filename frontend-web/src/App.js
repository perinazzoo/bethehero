import React from 'react';
import { ToastContainer } from 'react-toastify';

import { AuthProvider } from './contexts/AuthContext';

import Routes from './routes';

import GlobalStyle from './styles/global';

function App() {
  return (
    <AuthProvider>
      <GlobalStyle />
      <Routes />
      <ToastContainer pauseOnFocusLos={false} autoClose={3000} />
    </AuthProvider>
  );
}

export default App;
