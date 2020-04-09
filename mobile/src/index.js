import 'react-native-gesture-handler';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useColorScheme } from 'react-native';

import dark from './styles/themes/dark';
import light from './styles/themes/light';
import Routes from './routes';

export default function App() {
  const theme = useColorScheme();

  return (
    <ThemeProvider theme={theme === 'light' ? light : dark}>
      <Routes />
    </ThemeProvider>
  );
}
