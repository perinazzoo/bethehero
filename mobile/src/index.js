import 'react-native-gesture-handler';

import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useColorScheme, StatusBar } from 'react-native';

import dark from './styles/themes/dark';
import light from './styles/themes/light';
import Routes from './routes';

export default function App() {
  const theme = String(useColorScheme());

  return (
    <ThemeProvider theme={theme === 'light' ? light : dark}>
      <StatusBar
        barStyle={theme === 'light' ? 'dark-content' : 'light-content'}
        backgroundColor={
          theme === 'light' ? light.colors.background : dark.colors.background
        }
      />
      <Routes tema={theme} />
    </ThemeProvider>
  );
}
