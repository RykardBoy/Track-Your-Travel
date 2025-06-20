import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import RegisterPage from './RegisterPage';
import MainNavigation from '../navigations/MainNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useScrollToTop } from '@react-navigation/native';


const LoginPage = ({ navigation }) => { 
    
    // COMMANDE QU'IL FAUT LANCER POUR NGROK : ngrok http http://localhost:8000
    
    const base = "http://172.20.10.2:8000/api/login"; // --> changer l'adresse à chaque lancement d'ngrok
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [id_user, setIdUser] = useState('');
    const [errorMessage, setErrorMessage] = useState('');


    const handleLogin = async () => {
    setErrorMessage(''); // Réinitialise le message d'erreur à chaque tentative
    try {
        const response = await fetch(`${base}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        const text = await response.text();
        console.log('Réponse brute du serveur :', text);

        const data = JSON.parse(text);
        let token = data['token'];
        let tokenCorriger = token?.substring(4, 100);
        console.log(tokenCorriger);

        if (response.ok && tokenCorriger) {
            await AsyncStorage.setItem('token', tokenCorriger);
            const id = data['user']['id_user'];
            await AsyncStorage.setItem('id_user', id.toString());
            console.log("Connexion Réussie !");
            navigation.navigate('Home');
        } else {
            setErrorMessage('Wrong username or password ! Please try again');
        }
    } catch (error) {
        console.log('Erreur de connexion', error);
        setErrorMessage('Erreur de connexion au serveur.');
    }
};


    const handleRegister = () => {
        navigation.navigate('Register'); // Redirection vers la page d'inscription
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome Back!</Text>
            <Text style={styles.subtitle}>Login to your account</Text>

            <TextInput
                style={styles.input}
                placeholder="Username"
                placeholderTextColor="#777"
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
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
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <Text style={styles.registerText}>Don't have an account?</Text>
            <TouchableOpacity onPress={handleRegister}>
                <Text style={styles.registerLink}>Register here</Text>
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
    subtitle: {
        fontSize: 16,
        color: '#777',
        marginBottom: 30,
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
    loginButton: {
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
    },
    registerText: {
        marginTop: 20,
        fontSize: 16,
        color: '#333',
    },
    registerLink: {
        fontSize: 16,
        color: '#4A90E2',
        fontWeight: 'bold',
        marginTop: 5,
    }, errorText: {
    color: 'red',
    fontSize: 14,
    marginBottom: 10,
    textAlign: 'center',
},

});

export default LoginPage;
