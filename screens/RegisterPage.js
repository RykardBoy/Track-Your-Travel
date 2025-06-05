import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const RegisterPage = ({ navigation }) => {
    const base = "http://172.20.10.2:8000/api/registerUser";
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [country, setCountry] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');


    const handleRegister = async () => {
    setErrorMessage(''); // reset error before processing

    if (!firstname || !lastname || !username || !email || !country || !password) {
        setErrorMessage('All fields are required.');
        return;
    }

    try {
        const response = await fetch(base, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"  
            },
            body: JSON.stringify({ firstname, lastname, username, email, country, password })
        });

        const rep = await response.text();
        const reponseServer = JSON.parse(rep);
        console.log(rep);

        if (response.ok) {
            alert('Registration successful!');
            navigation.navigate('Login');
        } else {
            setErrorMessage(reponseServer['message'] || 'Registration failed. Please try again.');
        }

    } catch (error) {
        console.log("Erreur d'enregistrement : " + error);
        setErrorMessage('An error occurred during registration.');
    }
    };



    return (
        <View style={styles.container}>
            <Text style={styles.title}>Create an Account</Text>
            <TextInput
                style={styles.input}
                placeholder="Firstname"
                placeholderTextColor="#777"
                value={firstname}
                onChangeText={setFirstname}
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Lastname"
                placeholderTextColor="#777"
                value={lastname}
                onChangeText={setLastname}
                
            />
            <TextInput
                style={styles.input}
                placeholder="Username"
                placeholderTextColor="#777"
                value={username}
                onChangeText={setUsername}
                
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#777"
                value={email}
                onChangeText={setEmail}
                
            />
            <TextInput
                style={styles.input}
                placeholder="Country"
                placeholderTextColor="#777"
                value={country}
                onChangeText={setCountry}
                
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#777"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />

            {errorMessage !== '' && (
                <Text style={styles.errorText}>{errorMessage}</Text>
            )}

            <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#afd2e0',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    input: {
        width: '90%',
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 15,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 15,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    registerButton: {
        backgroundColor: '#4A90E2',
        borderRadius: 10,
        paddingVertical: 12,
        paddingHorizontal: 40,
        marginTop: 10,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
    }, errorText: {
        color: 'red',
        fontSize: 14,
        marginBottom: 10,
        textAlign: 'center',
    }

});

export default RegisterPage;