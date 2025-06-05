import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Alert } from 'react-native';
import MemoriesDetails from '../components/MemoriesDetails';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MemoriesPage = () => {
    const [memories, setMemories] = useState([]);
    const [selectedMemory, setSelectedMemory] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [countryNames, setCountryNames] = useState({});

    const baseUrl = "http://172.20.10.2:8000/api";

    useEffect(() => {
        fetchMemories();
    }, []);

    const fetchMemories = async () => {
        try {
            const token = await AsyncStorage.getItem('token');

            const response = await fetch(`${baseUrl}/getImages`, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });

            const countryResponse = await fetch(`${baseUrl}/countries`, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });

            const data = await response.json();
            const countries = await countryResponse.json();

            const nameMap = {};
            countries.forEach(country => {
                nameMap[country.id_country] = country.name;
            });

            setCountryNames(nameMap);
            setMemories(data);
        } catch (error) {
            console.error("Error fetching memories:", error);
        }
    };

    const confirmDelete = (id_country) => {
        Alert.alert(
            "Confirm Deletion",
            "Are you sure you want to delete this memory?",
            [
                { text: "Cancel", style: "cancel" },
                { text: "Delete", style: "destructive", onPress: () => handleDelete(id_country) }
            ]
        );
    };

    const handleDelete = async (id_country) => {
        try {
            const token = await AsyncStorage.getItem("token");

            const response = await fetch(`${baseUrl}/deleteSouvenir`, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id_country }),
            });

            const result = await response.json();

            if (response.ok) {
                Alert.alert("Success", result.message || "Memory deleted");
                fetchMemories(); // refresh list
            } else {
                Alert.alert("Error", result.message || "Failed to delete");
            }
        } catch (error) {
            console.error("Delete error:", error);
            Alert.alert("Error", "An error occurred while deleting.");
        }
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => setSelectedMemory(item)}>
            <View style={styles.card}>
                <Image
                    source={{ uri: `http://172.20.10.2:8000/${item.image}` }}
                    style={styles.image}
                />
                <Text style={styles.cardTitle}>
                    {countryNames[item.id_country] || `Country #${item.id_country}`}
                </Text>
                <Text style={styles.cardDescription}>{item.description}</Text>
                <Text style={styles.cardRating}>⭐ {item.nb_stars}/5</Text>

                <TouchableOpacity
                    style={styles.deleteButton}
                    onPress={() => confirmDelete(item.id_country)}
                >
                    <Text style={styles.deleteText}>Delete</Text>
                </TouchableOpacity>
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
    },
    deleteButton: {
        marginTop: 10,
        paddingVertical: 6,
        paddingHorizontal: 20,
        backgroundColor: '#d9534f',
        borderRadius: 8,
    },
    deleteText: {
        color: 'white',
        fontWeight: 'bold',
    }
});

export default MemoriesPage;
