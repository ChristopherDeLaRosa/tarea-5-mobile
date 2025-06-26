import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Linking, Alert } from 'react-native';

const ContactScreen = () => {
  const handleEmailPress = () => {
    Linking.openURL('mailto:tu.email@ejemplo.com')
      .catch(() => Alert.alert('Error', 'No se pudo abrir el cliente de email'));
  };

  const handleLinkedInPress = () => {
    Linking.openURL('https://www.linkedin.com/in/tu-perfil')
      .catch(() => Alert.alert('Error', 'No se pudo abrir LinkedIn'));
  };

  const handleGitHubPress = () => {
    Linking.openURL('https://github.com/tu-usuario')
      .catch(() => Alert.alert('Error', 'No se pudo abrir GitHub'));
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={require('../assets/images/mi_foto.png')}
          style={styles.profileImage}
        />
        <Text style={styles.name}>Christopher de la Rosa</Text>
        <Text style={styles.title}>Desarrollador React Native</Text>
      </View>

      <View style={styles.contactContainer}>
        <TouchableOpacity style={styles.contactButton} onPress={handleEmailPress}>
          <Text style={styles.contactButtonText}>Enviar Email</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.contactButton} onPress={handleLinkedInPress}>
          <Text style={styles.contactButtonText}>Ver LinkedIn</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.contactButton} onPress={handleGitHubPress}>
          <Text style={styles.contactButtonText}>Ver GitHub</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>
          ¡Hola! Soy un desarrollador apasionado por crear aplicaciones móviles increíbles. 
          Esta app sobre "Rescatando al Soldado Ryan" demuestra mis habilidades en React Native y Expo.
        </Text>
        <Text style={styles.description}>
          ¿Tienes un proyecto en mente? ¡Contáctame y trabajemos juntos!
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    padding: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  title: {
    color: '#e74c3c',
    fontSize: 18,
    marginBottom: 20,
  },
  contactContainer: {
    marginBottom: 30,
  },
  contactButton: {
    backgroundColor: '#34495e',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
  },
  contactButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  descriptionContainer: {
    marginTop: 20,
  },
  description: {
    color: '#bdc3c7',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 15,
  },
});

export default ContactScreen;