// HomeScreen.jsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import ImageSlider from '../components/ImageSlider';

const HomeScreen = ({ navigation }) => {
  const sliderImages = [
    require('../assets/images/home-slider-1.jpg'),
    require('../assets/images/home-slider-2.jpg'),
    require('../assets/images/home-slider-3.jpg'),
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Carrusel de imágenes en la parte superior */}
      <ImageSlider images={sliderImages} />

      {/* Botones de navegación justo debajo */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Characters')}>
          <Text style={styles.buttonText}>Personajes</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Moments')}>
          <Text style={styles.buttonText}>Momentos Épicos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('About')}>
          <Text style={styles.buttonText}>Acerca de</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MyStory')}>
          <Text style={styles.buttonText}>En mi Vida</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.contactButton]}
          onPress={() => navigation.navigate('Contact')}
        >
          <Text style={styles.buttonText}>Contrátame</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  buttonsContainer: {
    padding: 20,
  },
  button: {
    backgroundColor: '#34495e',
    padding: 15,
    borderRadius: 10,
    marginVertical: 8,
    alignItems: 'center',
  },
  contactButton: {
    backgroundColor: '#e74c3c',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
