import * as React from 'react';
import { View } from "react-native"
import { StyleSheet } from 'react-native';

const ProfilePage = () => {
    return (
        <View>
            <Text style={styles.titre1}>Your profile</Text>
        </View>
    )
}

const styles = StyleSheet.create({    
    titre1:{
    color:"green",
    textAlign:"center",
    fontSize:50
}})



export default ProfilePage;