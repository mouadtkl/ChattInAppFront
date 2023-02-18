import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as navigationService from '@app/services/navigation/navigationService';
import OffAPPStack from './OffAPPStack';

const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer ref={(nav) => navigationService.setNavigator(nav)}>
      <Stack.Navigator initialRouteName="OffAPPStack">
        <Stack.Screen
          name="OffAPPStack"
          component={OffAPPStack}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
