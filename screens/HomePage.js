import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native';

const MonStack = createNativeStackNavigator();

const HomeNavigation = ({navigation}) => {
    return(
        <View style={styles.view1}>
            <Text style={styles.titre1}>Track Your Travels !</Text>
            <View>
                <Text style={styles.sous_titre1}>Enregistrer tes voyages ici </Text>

            </View>
            <View style={styles.text_container}>
                <Text style={styles.text1} onPress={() => navigation.navigate('Profile')}>Profile</Text>
                <Text style={styles.text1}>Revisit</Text>
                <Text style={styles.text1}>Add</Text>
            </View>
            <View>
                <Text>A propos</Text>
            </View>
        </View>

    )

}

const styles = StyleSheet.create({
    view1:{
        backgroundColor: "#defffa",
        height:"100%"
        },
    titre1:{
        color:"green",
        textAlign:"center",
        fontSize:50
    },
    sous_titre1:{
        fontSize:24,
        textAlign:"center",
        marginTop:40
    },
    text_container:{
        flexDirection:"row",
        justifyContent:"space-between",
        margin:40
    },
    text1:{
        
        alignContent:"center"
    }
})




export default HomeNavigation;