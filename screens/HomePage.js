import * as React from 'react';
import { Text, View, Image} from 'react-native';
import { StyleSheet } from 'react-native';

const HomePage = ({navigation}) => {
    return(
        <View style={styles.view1}>
            <Text style={styles.titre1}>Track Your Travels</Text>
            
            <Image source={require("../assets/avion.png")} style={[styles.img1, {width: 150, height: 150}, {marginBottom:100}]}></Image>
            
            <View>
                <View style={styles.text_container}>
                    <Text style={styles.text1} onPress={() => navigation.navigate('Profile')}>Your Profile</Text>
                    <Text style={styles.text1} onPress={() => navigation.navigate('Travel')}>Add a Travel</Text>
                </ View>
                <View style={styles.text_container}>
                    <Text style={styles.text1} onPress={() => navigation.navigate('Memories')}>Memories</Text>
                    <Text style={styles.text1} onPress={() => navigation.navigate('Nutshell')}>In a Nutshell</Text>
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
        fontSize:30,
        textAlign:"center",
        margin:"10%",
        color:"black"
    },
    text_container:{

        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        margin:10
    },
    text1:{
        backgroundColor:"#9fc977",
        borderRadius:5,
        width:120,
        height:35,
        textAlign:"center",
        margin:10,
        fontSize:18
    },
    img1:{
        alignSelf:"center",
        
    }
})
export default HomePage;