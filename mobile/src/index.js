import 'react-native-gesture-handler';

import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useColorScheme, StatusBar } from 'react-native';

import { HeaderContext } from './contexts/HeaderContext';
import dark from './styles/themes/dark';
import light from './styles/themes/light';
import Routes from './routes';

export default function App() {
  const theme = useColorScheme();

  return (
    <ThemeProvider theme={theme === 'light' ? light : dark}>
      <HeaderContext theme={theme}>
        <StatusBar
          barStyle={theme === 'light' ? 'dark-content' : 'light-content'}
          backgroundColor={
            theme === 'light' ? light.colors.background : dark.colors.background
          }
        />
        <Routes />
      </HeaderContext>
    </ThemeProvider>
  );
}
