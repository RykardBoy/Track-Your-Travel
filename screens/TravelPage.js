import * as React from 'react';
import { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput } from "react-native";
import StarRating from '../components/StarRating';

const TravelPage = () => {
    const [number, onChangeNumber] = React.useState('');
    const [rating, setRating] = useState(0);
    return(
        <View style={styles.view1}>
            <View style={styles.espacement}>
                <Text style={styles.titre1}>Where did you go ?</Text>
            </View>

            <View style={styles.espacement}>
                <View>
                    <Text style={[styles.texte, {paddingBottom:10}] }>Choose a destination
                        <Image source={require('../assets/destination.png')} style={styles.image}></Image>
                    </Text>
                </View>
                    <select name="listePays">
                        <option name="CR">Croatie</option>
                        <option name="PH">Philippines</option>
                        <option name="BR">Brésil</option>
                        <option name="JA">Japon</option>
                        <option name="ES">Espagne</option>
                    </select>
            </View>

            <View style={styles.espacement}>
                <Text style={[styles.texte, {paddingBottom:10}]}>Describe your activities
                    <Image source={require('../assets/extracurricular-activities.png')} style={styles.image}></Image>
                </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder='snorkling, sleeping..'
                />
            </View>

            <View style={styles.espacement}>
                <Text style={[styles.texte, {paddingBottom:10}] }>Save your adventure with pictures
                    <Image source={require('../assets/pictures.png')} style={styles.image}></Image> 
                </Text>
                <TouchableOpacity style={{ backgroundColor:'#9fc977', padding:10, borderRadius:5  }}>
                    <Text style={{ color: 'black', fontSize: 16, textAlign:"center"}}>Add pictures 
                </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.espacement} >
                <Text style={[styles.texte, {paddingBottom:10}] }>Give a grade to this trip 
                    <Image source={require('../assets/grades.png')} style={styles.image}></Image>
                </Text>
                <StarRating rating={rating} onRate={setRating} />
            </View>
            <View style={styles.espacement}>
                <TouchableOpacity style={{ backgroundColor:'#9fc977', padding:10, borderRadius:5, alignItems:"center"  }}>
                    <Image source={require('../assets/diskette.png')} style={styles.image}></Image>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    view1:{
        backgroundColor : "#afd2e0",
        height:"100%"
    },
    texte:{
        fontSize:18
    }, 
    titre1:{
        fontSize:40,
        textAlign:"center"
    },input:{
        height: 40,
        
        borderWidth: 1,
        padding: 5,
    },
    espacement:{
        margin:10,
        padding:5
    },image:{
        width:30,
        height:30
    }
})


export default TravelPage;