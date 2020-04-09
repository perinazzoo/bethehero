import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import Incidents from './pages/Incidents';

// import { Container } from './styles';

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Home" component={Main} />
        <Screen name="Incidents" component={Incidents} />
      </Navigator>
    </NavigationContainer>
  );
}
