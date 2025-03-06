import React, { useState } from 'react';
import { View, Text, Image, Pressable, StyleSheet, Modal, TextInput } from "react-native";

const ProfilePage = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [prenom, setPrenom] = useState("Ricardo");
    const [nom, setNom] = useState("Flugel");
    const [username, setUsername] = useState("ricardo.flugel");
    const [email, setEmail] = useState("rf@gmail.com");
    const [phone, setPhone] = useState("076 353 12 63");
    const [country, setCountry] = useState("Suisse");

    return (
        <View style={styles.view1}>
            <Text style={styles.titre1}>Hi {prenom} !</Text>
            <Image source={require('../assets/boy.png')} style={styles.image1} />

            <View style={styles.container1}>
                <Text style={styles.infoText}><Text style={styles.bold}>Prénom:</Text> {prenom}</Text>
                <Text style={styles.infoText}><Text style={styles.bold}>Nom:</Text> {nom}</Text>
                <Text style={styles.infoText}><Text style={styles.bold}>Username:</Text> {username}</Text>
                <Text style={styles.infoText}><Text style={styles.bold}>Email:</Text> {email}</Text>
                <Text style={styles.infoText}><Text style={styles.bold}>Mobile phone:</Text> {phone}</Text>
                <Text style={styles.infoText}><Text style={styles.bold}>Country:</Text> {country}</Text>
            </View>

            <Pressable style={styles.bouton1} onPress={() => setModalVisible(true)}>
                <Text style={styles.boutonText}>Modify Personal Information</Text>
            </Pressable>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Edit Information</Text>
                        <TextInput style={styles.input} value={prenom} onChangeText={setPrenom} placeholder="Prénom" />
                        <TextInput style={styles.input} value={nom} onChangeText={setNom} placeholder="Nom" />
                        <TextInput style={styles.input} value={username} onChangeText={setUsername} placeholder="Username" />
                        <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder="Email" keyboardType="email-address" />
                        <TextInput style={styles.input} value={phone} onChangeText={setPhone} placeholder="Mobile phone" keyboardType="phone-pad" />
                        <TextInput style={styles.input} value={country} onChangeText={setCountry} placeholder="Country" />
                        <Pressable style={styles.bouton1} onPress={() => setModalVisible(false)}>
                            <Text style={styles.boutonText}>Save</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    view1: { flex: 1, backgroundColor: "#afd2e0", alignItems: "center", justifyContent: "center" },
    titre1: { fontSize: 32, fontWeight: "bold", textAlign: "center", color: "#333", marginBottom: 20 },
    image1: { width: 150, height: 150, marginBottom: 20 },
    container1: { backgroundColor: "#9fc977", borderRadius: 10, padding: 20, width: "85%", alignItems: "center", shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.2, shadowRadius: 3, elevation: 3, marginBottom: 20 },
    infoText: { fontSize: 18, color: "#333", marginBottom: 8 },
    bold: { fontWeight: "bold" },
    bouton1: { backgroundColor: "#9fc977", borderRadius: 10, paddingVertical: 12, paddingHorizontal: 20, shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.2, shadowRadius: 3, elevation: 3 },
    boutonText: { fontSize: 18, fontWeight: "bold", color: "#fff", textAlign: "center" },
    modalContainer: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0, 0, 0, 0.5)" },
    modalContent: { backgroundColor: "#fff", padding: 20, borderRadius: 10, width: "80%", alignItems: "center" },
    modalTitle: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
    input: { width: "100%", height: 40, borderColor: "#ccc", borderWidth: 1, borderRadius: 5, marginBottom: 10, paddingHorizontal: 10 }
});

export default ProfilePage;
