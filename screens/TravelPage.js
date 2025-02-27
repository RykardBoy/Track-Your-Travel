import * as React from 'react';
import { View, Text } from "react-native";
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native';

const TravelPage = () => {
    const [number, onChangeNumber] = React.useState('');
    return(
        <View style={styles.view1}>
            <View>
                <Text style={styles.titre1}>Where did you go ?</Text>
            </View>
            <View>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder='Destination'
                />
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
    },input: {
        height: 30,
        margin: 12,
        borderWidth: 1,
        padding: 5,
      }
})


export default TravelPage;