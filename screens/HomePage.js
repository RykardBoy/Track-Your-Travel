import * as React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';

const HomePage = ({ navigation }) => {
    return (
        <View style={styles.view1}>
            <Text style={styles.titre1}>Track Your Travels</Text>

            <Image 
                source={require("../assets/avion.png")} 
                style={styles.img1}
            />

            <View>
                <View style={styles.text_container}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Profile')}>
                        <Text style={styles.text1}>Your Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Travel')}>
                        <Text style={styles.text1}>Add a Travel</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.text_container}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Memories')}>
                        <Text style={styles.text1}>Memories</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Nutshell')}>
                        <Text style={styles.text1}>In a Nutshell</Text>
                    </TouchableOpacity>
                </View>
            </View>
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
        marginBottom: 20,
        color: "#333",
    },
    img1: {
        width: 150,
        height: 150,
        marginBottom: 40,
    },
    text_container: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "80%",
        marginBottom: 15,
    },
    button: {
        backgroundColor: "#9fc977",
        borderRadius: 10,
        width: 140,
        height: 45,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3,
    },
    text1: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
    },
});

export default HomePage;
