import React from 'react';
import { ToastContainer } from 'react-toastify';

import Routes from './routes';

import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes />
      <ToastContainer pauseOnFocusLos={false} autoClose={3000} />
    </>
  );
}

export default App;
