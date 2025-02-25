import { StyleSheet, Text, View } from 'react-native'; // ce sont des composants qui vont s'affecter à un objet. Il faut toujours importer les composants.
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeNavigation from './screens/HomePage';
import ProfilePage from './screens/ProfilePage';

const Stack = createNativeStackNavigator(); // permettre de faire les écrans

export default function App() { // App est un composant qui return des composants imbriqués
  return ( // toujours avoir un composant racine.
    
    // écrans
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeNavigation} />
        <Stack.Screen name="Profile" component={ProfilePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Style
const styles = StyleSheet.create({
  titre_1: {
    marginTop: 50,
    color: 'red',
    fontSize:30,
    textAlign:"center"
  },
});
