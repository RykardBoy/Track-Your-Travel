import * as React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from "react-native";

const ProfilePage = () => {
    return (
        <View style={styles.view1}>
            <Text style={styles.titre1}>Hi Ricardo !</Text>

            <Image source={require('../assets/boy.png')} style={styles.image1} />

            <View style={styles.container1}>
                <Text style={styles.infoText}><Text style={styles.bold}>Username:</Text> ricardo.flugel</Text>
                <Text style={styles.infoText}><Text style={styles.bold}>Email:</Text> rf@gmail.com</Text>
                <Text style={styles.infoText}><Text style={styles.bold}>Mobile phone:</Text> 076 353 12 63</Text>
                <Text style={styles.infoText}><Text style={styles.bold}>Country:</Text> Suisse</Text>
            </View>

            <Pressable style={styles.bouton1} onPress={() => alert('Modify Info Pressed!')}>
                <Text style={styles.boutonText}>Modify Personal Information</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    view1: {
        flex: 1,
        backgroundColor: "#afd2e0",
        alignItems: "center",
        justifyContent: "center",
    },
    titre1: {
        fontSize: 32,
        fontWeight: "bold",
        textAlign: "center",
        color: "#333",
        marginBottom: 20,
    },
    image1: {
        width: 150,
        height: 150,
        marginBottom: 20,
    },
    container1: {
        backgroundColor: "#9fc977",
        borderRadius: 10,
        padding: 20,
        width: "85%",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3,
        marginBottom: 20,
    },
    infoText: {
        fontSize: 18,
        color: "#333",
        marginBottom: 8,
    },
    bold: {
        fontWeight: "bold",
    },
    bouton1: {
        backgroundColor: "#9fc977",
        borderRadius: 10,
        paddingVertical: 12,
        paddingHorizontal: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3,
    },
    boutonText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff",
        textAlign: "center",
    },
});

export default ProfilePage;
