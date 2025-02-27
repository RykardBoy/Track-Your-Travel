import * as React from 'react';
import { View, Text, Image, Pressable } from "react-native"
import { StyleSheet } from 'react-native';

const ProfilePage = () => {
    return (
        <View style={styles.view1}>
            <Text style={styles.titre1}>Hi Ricardo !</Text>
            <View>
                <Image source={require('../assets/boy.png')} style={styles.image1}></Image>
            </View>
            <View>
                <View style={styles.container1}>
                    <Text name="username" style={{fontSize:17}}>Username : ricardo.flugel</Text>
                    <Text name="email" style={{fontSize:17}}>Email : rf@gmail.com</Text>
                    <Text name="telephone" style={{fontSize:17}}>Mobile phone : 076 353 12 63</Text>
                    <Text name="pays" style={{fontSize:17}}>Country : Suisse</Text>
                </View>
                <View>
                    <Text style={styles.bouton1}>Modify Personnal Information</Text>
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
        width:150,
        height:150,
        alignSelf:"center",
        marginTop:30,
        marginBottom:30
    },
    container1:{
        alignSelf:"center",
        backgroundColor:"#9fc977",
        borderRadius:5,
        padding:20
    },
    bouton1:{
        alignSelf:"center",
        backgroundColor:"#9fc977",
        borderRadius:5,
        marginTop:15,
        padding:18,
        fontSize:17
    }
})


export default ProfilePage;