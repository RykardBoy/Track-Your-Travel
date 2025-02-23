import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import BoxContainer from '../components/BoxContainer'

const HomeNavigation = () => {
    return(
        <View>
            <Text style={styles.titre1}>Track Your Travels !</Text>
            <Text style={styles.paragraphe1}>Vous pouvez enregistrer vos aventures ici : </Text>
            <BoxContainer></BoxContainer>
        </View>

    )

}

const styles = StyleSheet.create({
    titre1:{
        color:"black",
        backGroundColor:"blue",
        textAlign:"center",
        fontSize:50
    },
    paragraphe1:{
        fontSize:24,
        textAlign:"justify"
    }
})




export default HomeNavigation;