import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

function Profil() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        setIsLoggedIn(true);
        alert('Connexion réussie');
      } else {
        alert(data);
      }
    } catch (error) {
      alert('Erreur lors de la connexion');
    }
  };

  const handleCreateAccount = async () => {
    try {
      const response = await fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        alert('Compte créé avec succès');
      } else {
        alert(data);
      }
    } catch (error) {
      alert('Erreur lors de la création du compte');
    }
  };

  return (
    <View style={styles.container}>
      <Ionicons name="person-circle-outline" size={30} color="purple" />
      
      {isLoggedIn ? (
        <View>
          <Text style={styles.title}>Mon Profil</Text>
          <Text style={styles.text}>Bienvenue sur votre profil, utilisateur connecté !</Text>
        </View>
      ) : (
        <View>
          <Text style={styles.title}>Bienvenue sur votre profil</Text>
          <Text style={styles.text}>Veuillez vous connecter ou créer un compte pour accéder à votre profil.</Text>

          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Mot de passe"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          
          <TouchableOpacity onPress={handleLogin} style={styles.button}>
            <Text style={styles.buttonText}>Se connecter</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={handleCreateAccount} style={styles.button}>
            <Text style={styles.buttonText}>Créer un compte</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    marginBottom: 15,
  },
  button: {
    backgroundColor: 'purple',
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    width: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  input: {
    width: 200,
    padding: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
});

export default Profil;
