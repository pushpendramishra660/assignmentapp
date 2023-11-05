import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './app.stack';

export default function AppNavigator() {
  const linking = {
    prefixes: ['assignmentapp://'],
  };

  return (
    <NavigationContainer linking={linking}>
      <AuthStack />
    </NavigationContainer>
  );
}
