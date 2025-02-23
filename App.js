import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native'; // ce sont des composants qui vont s'affecter à un objet. Il faut toujours importer les composants.
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import HelloWorld from './components/HelloWorld';
import CustomButton from './components/CustomButton';
import BoxContainer from './components/BoxContainer';
import { NavigationContainer } from '@react-navigation/native';
import MonStack from './navigation/MonStack';
import HomeNavigation from './navigation/HomeNavigation';

export default function App() { // App est un composant qui return des composants imbriqués
  return ( // toujours avoir un composant racine.
    <NavigationContainer>
      <SafeAreaProvider> 
      <SafeAreaView>
        <Text style={styles.titre_1}>Track Your Travels now !</Text>
        <HelloWorld />
        <CustomButton />
        <BoxContainer />
      </SafeAreaView>
      </SafeAreaProvider>
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
