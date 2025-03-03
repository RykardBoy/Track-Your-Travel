import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useState } from 'react';

const NutshellPage = () => {
    
    const [expanded, setExpanded] = useState(null);

    const data = [
        {
            id: '1',
            icon: 'map-marker-alt',
            title: 'Favorite Country',
            details: ['Philippines']
        },
        {
            id: '2',
            icon: 'plane',
            title: 'Numbers of KM traveled',
            details: ['120000 KM']
        },
        {
            id: '3',
            icon: 'calendar-alt',
            title: 'Numbers of days spent abroad',
            details: ['22 days']
        },
        {
            id: '4',
            icon: 'globe',
            title: 'Numbers of countries visited',
            details: ['3 countries']
        }
    ];

    const toggleExpand = (id) => {
        setExpanded(expanded === id ? null : id);
    };


    return(
        <View style={styles.view1}>
            <Text style={styles.titre1}>Your Travel Summary</Text>
            <FlatList 
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View>
                        <TouchableOpacity style={styles.card} onPress={() => toggleExpand(item.id)}> 
                            <FontAwesome5 name={item.icon} size={24} color="#4A90E2" />
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
    )
}

const styles = StyleSheet.create({
    view1: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        backgroundColor: '#afd2e0',
    },
    titre1: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'black',
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#9fc977',
        padding: 15,
        marginVertical: 32,
        borderRadius: 10,
        width: '90%',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    text: {
        fontSize: 18,
        color: 'black',
        marginLeft: 10,
    },
    detailsContainer: {
        backgroundColor: '#E0E0E0',
        padding: 10,
        borderRadius: 8,
        marginTop: 5,
        marginLeft: 20,
        width: '80%'
    },
    detailText: {
        fontSize: 16,
        color: 'black',
    }
})

export default NutshellPage;