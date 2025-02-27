import * as React from 'react';
import { View, Text, Image } from "react-native"
import { StyleSheet } from 'react-native';

const ProfilePage = () => {
    return (
        <View style={styles.view1}>
            <Text style={styles.titre1}>Hi Ricardo !</Text>
            <View>
                <Image source={require('../assets/boy.png')} style={styles.image1}></Image>
            </View>
            <View>
                <View>
                    <Text name="username">Nom d'utilisateur : ricardo.flugel</Text>
                    <Text name="email">Email : rf@gmail.com</Text>
                    <Text name="pays">Pays : Suisse</Text>
                </View>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    view1:{
        backgroundColor : "#afd2e0",
        height:"100%"
    },
    titre1:{
        fontSize:40,
        textAlign:"center"
    },
    image1:{
        width:200,
        height:200,
        alignSelf:"center",
        marginTop:50
    }
})


export default ProfilePage;