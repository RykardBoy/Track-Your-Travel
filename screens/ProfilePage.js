import React, { useState, useEffect } from 'react';
import { View, Text, Image, Pressable, StyleSheet, Modal, TextInput } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfilePage = () => {
    const base = "http://172.20.10.2:8000/api/users/";
    const [modalVisible, setModalVisible] = useState(false);
    const [prenom, setPrenom] = useState("");
    const [nom, setNom] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [country, setCountry] = useState("");

    const handleAffichage = async () => {
        try{
            const id_user = await AsyncStorage.getItem('id_user');
            const token = await AsyncStorage.getItem('token');
            console.log(id_user);
            const data = await fetch(base + id_user, {
                method: 'GET',
                headers: {
                    "Content-Type" : "application/json",
                    "Authorization" : `Bearer ${token}`
                }
                }
            )
            const text = await data.text();
            const json = await JSON.parse(text);
            setPrenom(json['firstname']);
            setNom(json['lastname']);
            setUsername(json['username']);
            setEmail(json['email']);
            setCountry(json['country']);
        } catch (error) {
            console.log("Erreur d'affichage : " + error);
        }
    }

    const handleUpdate = async () => {
        const updateBase = "http://172.20.10.2:8000/api/updateUser/";
        const id = await AsyncStorage.getItem('id_user')
        const token = await AsyncStorage.getItem('token');
        try{
            fetch(updateBase + id, {
            method: "PUT",
            headers: {
                "Content-Type" : "application/json",
                "Authorization" : `Bearer ${token}`
            },
            body: JSON.stringify({firstname: prenom, lastname: nom, username: username, email: email, country: country})
                
            }
            )
            .then((res)=>res.json())
            .then((res) => console.log(res));
        } catch (error) {
            console.log("Message du serveur : " + error)
        }
        

    }
    
    useEffect(()=>{
        handleAffichage();
    },[])
    
    return (
        <View style={styles.view1}>
            <Text style={styles.titre1}>Hi {prenom} !</Text>
            <Image source={require('../assets/boy.png')} style={styles.image1} />

            <View style={styles.container1}>
                <Text style={styles.infoText}><Text style={styles.bold}>Prénom:</Text> {prenom}</Text>
                <Text style={styles.infoText}><Text style={styles.bold}>Nom:</Text> {nom}</Text>
                <Text style={styles.infoText}><Text style={styles.bold}>Username:</Text> {username}</Text>
                <Text style={styles.infoText}><Text style={styles.bold}>Email:</Text> {email}</Text>
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
                        <TextInput style={styles.input} value={country} onChangeText={setCountry} placeholder="Country" />
                        <Pressable style={styles.bouton1}>
                            <Text style={styles.boutonText} onPress={()=> {
                                handleUpdate()
                                setModalVisible(false)
                                }}>Save</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    view1: { 
        flex: 1, 
        backgroundColor: "#afd2e0", 
        alignItems: "center", 
        justifyContent: "center" },
    titre1: { 
        fontSize: 32, 
        fontWeight: "bold", 
        textAlign: "center", 
        color: "#333", 
        marginBottom: 20 },
    image1: { 
        width: 150, 
        height: 150, 
        marginBottom: 20 },
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
        marginBottom: 20 },
    infoText: { 
        fontSize: 18, 
        color: "#333", 
        marginBottom: 8 },
    bold: { 
        fontWeight: "bold" },
    bouton1: { 
        backgroundColor: "#9fc977", 
        borderRadius: 10, 
        paddingVertical: 12, 
        paddingHorizontal: 20, 
        shadowColor: "#000", 
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 0.2, 
        shadowRadius: 3, 
        elevation: 3 },
    boutonText: { 
        fontSize: 18, 
        fontWeight: "bold", 
        color: "#fff", 
        textAlign: "center" },
    modalContainer: { 
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center", 
        backgroundColor: "rgba(0, 0, 0, 0.5)" },
    modalContent: { 
        backgroundColor: "#fff", 
        padding: 20, 
        borderRadius: 10, 
        width: "80%", 
        alignItems: "center" },
    modalTitle: { 
        fontSize: 22, 
        fontWeight: "bold", 
        marginBottom: 10 },
    input: { 
        width: "100%", 
        height: 40, 
        borderColor: "#ccc", 
        borderWidth: 1, 
        borderRadius: 5, 
        marginBottom: 10, 
        paddingHorizontal: 10 }
});

export default ProfilePage;
