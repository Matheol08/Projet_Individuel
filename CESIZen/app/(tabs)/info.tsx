import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


function Info() {
  return (
    <View style={styles.container}>
      <Ionicons name="information-circle-outline" size={30} color="blue" />
      <Text style={styles.title}>La Respiration : Un aspect fondamental de notre bien-être</Text>
      <Text style={styles.text}>
        La respiration est un processus vital qui nous permet de vivre. En plus d'être essentiel à notre survie...
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

export default Info;
