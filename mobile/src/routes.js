import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './components/Header';

import Main from './pages/Main';
import Incident from './pages/Incident';

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          header: () => <Header />,
        }}
      >
        <Screen name="Home" component={Main} />
        <Screen name="Incident" component={Incident} />
      </Navigator>
    </NavigationContainer>
  );
}
