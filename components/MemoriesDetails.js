import React from 'react';
import { Modal, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const MemoriesDetails = ({ visible, memory, onClose }) => {
    if (!memory) return null;

    return (
        <Modal transparent={true} visible={visible} animationType="slide">
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Image source={memory.image} style={styles.image} />
                    <Text style={styles.title}>{memory.title}</Text>
                    <Text style={styles.description}>{memory.description}</Text>
                    <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                        <Text style={styles.closeButtonText}>Close</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        width: '80%',
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 120,
        borderRadius: 8,
        marginBottom: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    description: {
        fontSize: 16,
        color: '#555',
        textAlign: 'center',
        marginBottom: 10,
    },
    closeButton: {
        backgroundColor: '#9fc977',
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    closeButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
});

export default MemoriesDetails;
