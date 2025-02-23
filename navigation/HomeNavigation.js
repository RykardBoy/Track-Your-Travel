import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HomeNavigation = ({navigation}) => {
    return(
        <Button title="Go to a profil" onPress={()=> navigation.navigate('profile', {name:'Ricardo'})}></Button>
    )

}

export default HomeNavigation;