import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const NutshellPage = () => {
    const [expanded, setExpanded] = useState(null);
    const [favoriteCountry, setFavoriteCountry] = useState('Loading...');
    const [kmTravelled, setKmTravelled] = useState('Loading...');
    const [picturesTaken, setPicturesTaken] = useState('');
    const [nbVisitedCountries, setNbVisitedCountries] = useState('');

    const toggleExpand = (id) => {
        setExpanded(expanded === id ? null : id);
    };

    useEffect(() => {
        const fetchFavoriteCountry = async () => {
            try {
                const id_user = await AsyncStorage.getItem('id_user');
                const token = await AsyncStorage.getItem('token');
                if (!id_user || !token) {
                    console.warn("ID utilisateur ou token manquant");
                    return;
                }

                const response = await fetch(`http://172.20.10.2:8000/api/favorite-country/${id_user}`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                })
                
                const res = await response.json();

                console.log(res);
                setFavoriteCountry(res.favorite_country + " | visits : " + res.visits);
                
                
            } catch (error) {
                console.error("Erreur lors de la récupération du pays favori :", error);
                setFavoriteCountry("Error");
            }
        };

        const fetchKmTravelled = async () => {
            try{
                const id_user = await AsyncStorage.getItem('id_user');
                const token = await AsyncStorage.getItem('token');
                if (!id_user || !token) {
                    console.warn("ID utilisateur ou token manquant");
                    return;
                }

                const response = await fetch(`http://172.20.10.2:8000/api/countryKmTravelled/${id_user}`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                })
                
                const res = await response.json();

                console.log(res);
                setKmTravelled(res.total_km + " KM");
            }catch{
                console.error("Erreur lors de la récupération des KM :", error);
                setKmTravelled("Error");
            }
        }

        const fetchNbPictures = async () => {
            try{
                const id_user = await AsyncStorage.getItem('id_user');
                const token = await AsyncStorage.getItem('token');
                if (!id_user || !token) {
                    console.warn("ID utilisateur ou token manquant");
                    return;
                }

                const response = await fetch(`http://172.20.10.2:8000/api/countUserPhotos/${id_user}`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                })
                
                const res = await response.json();

                console.log(res);
                setPicturesTaken(res.total_photos + " pictures taken");
            } 
            catch {
                setPicturesTaken("Error");
            }
        }

        const fetchNbVisitedCountries = async () => {
            try{
                const id_user = await AsyncStorage.getItem('id_user');
                const token = await AsyncStorage.getItem('token');
                if (!id_user || !token) {
                    console.warn("ID utilisateur ou token manquant");
                    return;
                }

                const response = await fetch(`http://172.20.10.2:8000/api/countVisitedCountries/${id_user}`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                })
                
                const res = await response.json();

                console.log(res);
                setNbVisitedCountries(res.countries_visited + " countries visited");
            } catch {
                setNbVisitedCountries("Error")
            }
        }

        fetchFavoriteCountry();
        fetchKmTravelled();
        fetchNbPictures();
        fetchNbVisitedCountries();
    }, []);

    const data = [
        {
            id: '1',
            icon: 'map-marker-alt',
            title: 'Favorite Country',
            details: [favoriteCountry],
        },
        {
            id: '2',
            icon: 'plane',
            title: 'Numbers of KM traveled',
            details: [kmTravelled]
        },
        {
            id: '3',
            icon: 'calendar-alt',
            title: 'Number of pictures taken',
            details: [picturesTaken]
        },
        {
            id: '4',
            icon: 'globe',
            title: 'Numbers of countries visited',
            details: [nbVisitedCountries]
        }
    ];

    return (
        <View style={styles.view1}>
            <Text style={styles.titre1}>Your Travel Summary</Text>
            <FlatList 
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.cardContainer}>
                        <TouchableOpacity style={styles.card} onPress={() => toggleExpand(item.id)}> 
                            <FontAwesome5 name={item.icon} size={26} color="#4A90E2" />
                            <Text style={styles.text}>{item.title}</Text>
                        </TouchableOpacity>
                        {expanded === item.id && (
                            <View style={styles.detailsContainer}>
                                {item.details.map((detail, index) => (
                                    <Text key={index} style={styles.detailText}>- {detail}</Text>
                                ))}
                            </View>
                        )}
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    view1: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        backgroundColor: '#afd2e0',
    },
    titre1: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
        textAlign: 'center',
    },
    cardContainer: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 15,
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingVertical: 18,
        paddingHorizontal: 20,
        marginVertical: 8,
        borderRadius: 12,
        width: '90%',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
        borderWidth: 0.5,
        borderColor: '#ddd',
    },
    text: {
        fontSize: 20,
        color: '#333',
        marginLeft: 15,
        fontWeight: '500',
    },
    detailsContainer: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 8,
        marginTop: 5,
        marginLeft: 20,
        width: '90%',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 4,
        borderLeftWidth: 5,
        borderLeftColor: '#4A90E2',
    },
    detailText: {
        fontSize: 16,
        color: '#333',
        marginBottom: 5,
    },
});

export default NutshellPage;
