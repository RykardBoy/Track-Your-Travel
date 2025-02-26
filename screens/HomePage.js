import * as React from 'react';
import { Text, View} from 'react-native';
import { StyleSheet } from 'react-native';

const HomePage = ({navigation}) => {
    return(
        <View style={styles.view1}>
            <Text style={styles.titre1}>Track Your Travels</Text>
            <View>
                <View style={styles.text_container}>
                    <Text onPress={() => navigation.navigate('Profile')}>Your Profile</Text>
                    <Text>Add a Travel</Text>
                    <Text>Revisit Memories</Text>
                    <Text>In a Nutshell</Text>

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
        fontSize:25,
        textAlign:"center",
        margin:"10%",
        color:"#27873e"
    },
    text_container:{
        flexDirection:"row",
        justifyContent:"space-around"
    }
})
export default HomePage;