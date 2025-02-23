import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeNavigation from './HomeNavigation';
import ProfileNavigation from './ProfileNavigation';

const Stack = createNativeStackNavigator();

const MonStack = () => {
    return(
        <NavigationContainer>

            <Stack.Navigator>

                <Stack.Screen name="home" component={HomeNavigation} options={{title:"HomeScreen"}} ></Stack.Screen>
                <Stack.Screen name="profile" component={ProfileNavigation} options={{title:"ProfileScreen"}} ></Stack.Screen>

            </Stack.Navigator>

        </NavigationContainer>
    )
}

export default MonStack;