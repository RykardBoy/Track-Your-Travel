import * as React from 'react';
import { View, Text } from "react-native"

const ProfilePage = ({navigation}) => {
    return (
        <View>
            <Text>Your profile</Text>
            <Text onPress={() => navigation.navigate('Home')}>Retourner à la page d'accueil</Text>
        </View>
    )
}




export default ProfilePage;