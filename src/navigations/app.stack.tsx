import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AppStackParamList} from '../types';
import {Home, Detail} from '../screens';

const Stack = createStackNavigator<AppStackParamList>();

export default function AppStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'HOME'} component={Home} />
      <Stack.Screen name={'DETAIL'} component={Detail} />
    </Stack.Navigator>
  );
}
