import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import MemoriesDetails from '../components/MemoriesDetails';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MemoriesPage = () => {
    const [memories, setMemories] = useState([]);
    const [selectedMemory, setSelectedMemory] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    const baseUrl = "http://172.20.10.2:8000/api/getImages";

    useEffect(() => {
    const fetchMemories = async () => {
        try {
            const id_user = await AsyncStorage.getItem("id_user");
            const token = await AsyncStorage.getItem('token');
            if (!id_user || !token) {
                console.error("ID utilisateur ou token manquant.");
                return;
            }

            const response = await fetch(`${baseUrl}`, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });

            const data = await response.json();
            console.log("Souvenirs :", data); // pour debug
            setMemories(data);
        } catch (error) {
            console.error("Erreur lors du chargement des souvenirs :", error);
        }
    };

    fetchMemories();
}, []);


    const openMemoryDetails = (memory) => {
        setSelectedMemory(memory);
        setModalVisible(true);
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => openMemoryDetails(item)}>
            <View style={styles.card}>
                <Image 
                    source={{ uri: `http://172.20.10.2:8000/${item.image}` }}
                    style={styles.image}
                />
                <Text style={styles.cardTitle}>Country #{item.id_country}</Text>
                <Text style={styles.cardDescription}>{item.description}</Text>
                <Text style={styles.cardRating}>⭐ {item.nb_stars}/5</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.view1}>
            <Text style={styles.titre}>Travel Memories</Text>
            <FlatList 
                data={memories}
                keyExtractor={(item) => item.id_user_country.toString()}
                renderItem={renderItem}
                contentContainerStyle={{ alignItems: 'center' }}
            />

            <MemoriesDetails 
                visible={modalVisible} 
                memory={selectedMemory} 
                onClose={() => setModalVisible(false)} 
            />
        </View>
    );
};

const styles = StyleSheet.create({
    view1: {
        flex: 1,
        padding: 20,
        backgroundColor: '#afd2e0',
        alignItems: 'center',
    },
    titre: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'black',
    },
    card: {
        backgroundColor: '#9fc977',
        padding: 15,
        marginVertical: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        width: '90%',
        alignItems: 'center',
    },
    image: {
        width: 250,
        height: 150,
        borderRadius: 8,
        marginBottom: 10,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    cardDescription: {
        fontSize: 14,
        color: '#555',
        textAlign: 'center',
        marginTop: 5,
    },
    cardRating: {
        marginTop: 5,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    }
});

export default MemoriesPage;
