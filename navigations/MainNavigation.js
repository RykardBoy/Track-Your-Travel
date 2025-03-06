import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from '../screens/HomePage';
import ProfilePage from '../screens/ProfilePage';
import MemoriesPage from '../screens/MemoriesPage';
import NutshellPage from '../screens/NutshellPage';
import TravelPage from '../screens/TravelPage';
import LoginPage from '../screens/LoginPage';
import RegisterPage from '../screens/RegisterPage';


const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{title : 'Login'}}
        />
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
        <Stack.Screen 
          name="Memories" 
          component={MemoriesPage} 
          options={{title: 'Your Memories'}}
        />
        <Stack.Screen 
          name="Nutshell" 
          component={NutshellPage} 
          options={{title: 'Statistics'}}
        />
        <Stack.Screen 
          name="Travel" 
          component={TravelPage} 
          options={{title: 'Travel'}}
        />
        <Stack.Screen 
        name="Register" 
        component={RegisterPage} 
        options={{title: 'Register'}}
      />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;