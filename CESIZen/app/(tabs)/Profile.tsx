import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


function Profil() {
  return (
    <View style={styles.container}>
      <Ionicons name="person-circle-outline" size={30} color="purple" />
      <Text style={styles.title}>Mon Profil</Text>
      <Text style={styles.text}>
        Bienvenue sur votre profil....
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
});

export default Profil;
