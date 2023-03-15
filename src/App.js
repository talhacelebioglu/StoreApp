import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import AuthNavigator from './navigations/AuthNavigator';
import BottomTabNavigator from './navigations/BottomTabNavigator';

export default function App() {
  const userSession = useSelector(state => state.user.user);

  return (
    <NavigationContainer>
      {!userSession ? <AuthNavigator /> : <BottomTabNavigator />}
    </NavigationContainer>
  );
}
