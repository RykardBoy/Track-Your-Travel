import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from '../screens/HomePage';
import ProfilePage from '../screens/ProfilePage';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{title: 'Home'}}
        />
        <Stack.Screen 
          name="Profile" 
          component={ProfilePage} 
          options={{title: 'Your Profile'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;