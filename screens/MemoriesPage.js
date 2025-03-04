import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const memories = [
    {
        id: '1',
        title: 'Philippines',
        description: 'We ate a lot and swam with whale sharks',
        image: require('../assets/ph.jpg')
    },
    {
        id: '2',
        title: 'Hiking in Switzerland',
        description: 'Exploring the Swiss Alps with breathtaking views.',
        image: require('../assets/ph.jpg')
    },
    {
        id: '3',
        title: 'Street Food in Bangkok',
        description: 'Tasting delicious street food in the vibrant markets of Bangkok.',
        image: require('../assets/ph.jpg')
    }
];

const MemoriesPage = () => {
    return (
        <View style={styles.view1} pointerEvents="auto"> 
            <Text style={styles.titre}>Travel Memories</Text>
            <FlatList 
                data={memories}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Image source={item.image} style={styles.image} /> 
                        <Text style={styles.cardTitle}>{item.title}</Text>
                        <Text style={styles.cardDescription}>{item.description}</Text>
                    </View>
                )}
                contentContainerStyle={{ alignItems: 'center' }}
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
    }
});

export default MemoriesPage;
