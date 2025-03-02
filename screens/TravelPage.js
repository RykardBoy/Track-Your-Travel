import * as React from 'react';
import { View, Text } from "react-native";
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native';
import { Button } from 'react-native-web';
import { StarRating } from '../components/StarRating';

const TravelPage = () => {
    const [number, onChangeNumber] = React.useState('');

    return(
        <View style={styles.view1}>
            <View>
                <Text style={styles.titre1}>Where did you go ?</Text>
            </View>
            <View>
                <Text> Choose a destination <br></br>
                    <select name="listePays">
                        <option name="CR">Croatie</option>
                        <option name="PH">Philippines</option>
                        <option name="BR">Brésil</option>
                        <option name="JA">Japon</option>
                        <option name="ES">Espagne</option>
                    </select>
                </Text>
                
            </View>
            <View>
                <Text>Describe your activities</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder='Describe your activities'
                />
            </View>
            <View>
                <Text>Save your adventure with pictures</Text>
                <Button>Add pictures</Button>
            </View>
            <View >
                <Text>Donnez votre appréciation :</Text>
                <StarRating />
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