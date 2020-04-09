import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PropTypes from 'prop-types';

import Main from './pages/Main';
import Incidents from './pages/Incidents';

// import { Container } from './styles';

const { Navigator, Screen } = createStackNavigator();

export default function Routes({ tema }) {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Home" component={Main} initialParams={{ theme: tema }} />
        <Screen
          name="Incidents"
          component={Incidents}
          initialParams={{ theme: tema }}
        />
      </Navigator>
    </NavigationContainer>
  );
}

Routes.propTypes = {
  tema: PropTypes.string.isRequired,
};
