import * as React from 'react';
import { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput, Alert } from "react-native";
import { Picker } from "@react-native-picker/picker";
import StarRating from '../components/StarRating';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TravelPage = () => {
    const base = "http://172.20.10.2:8000/api/countries";
    const id = AsyncStorage.getItem("id_user");
    const token = AsyncStorage.getItem("token");
    const [countries, setCountries] = useState([]);
    const [number, onChangeNumber] = useState('');
    const [rating, setRating] = useState(0);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [saved, setSaved] = useState(false);

    
    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const token = await AsyncStorage.getItem("token");
                if (!token) {
                    console.error("Token manquant !");
                    return;
                }

                const response = await fetch(base, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                });

                const data = await response.json();
                console.log("Réponse API /countries :", data);

                if (Array.isArray(data)) {
                    setCountries(data);
                    if (data.length > 0) {
                        setSelectedCountry(data[0]['id_country']);
                    }
                } else {
                    console.error("Réponse inattendue :", data);
                }
            } catch (error) {
                console.error("Erreur réseau ou parsing :", error);
            }
        };

        fetchCountries();
    }, []);
    
    const handleSave = () => {
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
    };

    return (
        <View style={styles.view1}>
            <Text style={styles.titre1}>Where did you go?</Text>

            {/* Destination Selection */}
            <View style={styles.section}>
                <Text style={styles.texte}>Choose a destination:</Text>
                <Image source={require('../assets/destination.png')} style={styles.image} />
            </View>
            <Picker
                style={styles.picker}
                selectedValue={selectedCountry}
                onValueChange={(itemValue) => setSelectedCountry(itemValue)}
            >
                {countries.map((country) => (
                    <Picker.Item
                        key={country.id_country}
                        label={country.name}    
                        value={country.id_country}     
                    />
                ))}
            </Picker>

            {/* Activity Input */}
            <View style={styles.section}>
                <Text style={styles.texte}>Describe your activities:</Text>
                <Image source={require('../assets/extracurricular-activities.png')} style={styles.image} />
            </View>
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder='snorkeling, sleeping..'
                placeholderTextColor="#777"
            />

            {/* Add Pictures Button */}
            <View style={styles.section}>
                <Text style={styles.texte}>Save your adventure with pictures:</Text>
                <Image source={require('../assets/pictures.png')} style={styles.image} />
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Add pictures</Text>
            </TouchableOpacity>

            {/* Rating */}
            <View style={styles.section}>
                <Text style={styles.texte}>Give a grade to this trip:</Text>
                <Image source={require('../assets/grades.png')} style={styles.image} />
            </View>
            <StarRating rating={rating} onRate={setRating} />

            {/* Save Button */}
            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                <Image source={require('../assets/diskette.png')} style={styles.image} />
            </TouchableOpacity>

            {/* Save Confirmation Message */}
            {saved && <Text style={styles.savedMessage}>Trip saved successfully!</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    view1: {
        flex: 1,
        backgroundColor: "#afd2e0",
        paddingHorizontal: 20,
        paddingTop: 30,
        alignItems: "center",
    },
    titre1: {
        fontSize: 32,
        fontWeight: "bold",
        textAlign: "center",
        color: "#333",
        marginBottom: 20,
    },
    section: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    texte: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
        marginRight: 10,
    },
    image: {
        width: 30,
        height: 30,
    },
    picker: {
        width: "100%",
        backgroundColor: "#fff",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#ccc",
        marginBottom: 15,
    },
    input: {
        height: 45,
        width: "100%",
        backgroundColor: "#fff",
        borderRadius: 10,
        paddingHorizontal: 10,
        fontSize: 16,
        borderWidth: 1,
        borderColor: "#ccc",
        marginBottom: 15,
    },
    button: {
        backgroundColor: "#9fc977",
        borderRadius: 10,
        paddingVertical: 12,
        paddingHorizontal: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3,
        marginBottom: 15,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#fff",
        textAlign: "center",
    },
    saveButton: {
        backgroundColor: "#9fc977",
        borderRadius: 10,
        padding: 12,
        marginTop: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3,
    },
    savedMessage: {
        marginTop: 15,
        fontSize: 16,
        fontWeight: "bold",
        color: "green",
    },
});

export default TravelPage;
