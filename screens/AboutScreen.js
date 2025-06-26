import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const AboutScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Rescatando al Soldado Ryan</Text>
        <Text style={styles.subtitle}>Saving Private Ryan</Text>
        
        <View style={styles.infoSection}>
          <Text style={styles.label}>Director:</Text>
          <Text style={styles.value}>Steven Spielberg</Text>
        </View>

        <View style={styles.infoSection}>
          <Text style={styles.label}>Año:</Text>
          <Text style={styles.value}>1998</Text>
        </View>

        <View style={styles.infoSection}>
          <Text style={styles.label}>Duración:</Text>
          <Text style={styles.value}>169 minutos</Text>
        </View>

        <View style={styles.infoSection}>
          <Text style={styles.label}>Género:</Text>
          <Text style={styles.value}>Drama bélico</Text>
        </View>

        <View style={styles.infoSection}>
          <Text style={styles.label}>Premios:</Text>
          <Text style={styles.value}>5 Premios Oscar, incluyendo Mejor Director</Text>
        </View>

        <Text style={styles.description}>
          "Rescatando al Soldado Ryan" es una película épica de guerra que narra la historia de un grupo de soldados estadounidenses durante la Segunda Guerra Mundial, quienes reciben la misión de encontrar y rescatar al paracaidista James Francis Ryan, cuyos tres hermanos han muerto en combate.
        </Text>

        <Text style={styles.description}>
          La película es conocida por su representación realista y visceral de la guerra, especialmente la secuencia de apertura del Desembarco de Normandía, que ha sido aclamada como una de las mejores escenas de guerra jamás filmadas.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  contentContainer: {
    padding: 20,
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    color: '#bdc3c7',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 30,
    fontStyle: 'italic',
  },
  infoSection: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  label: {
    color: '#e74c3c',
    fontSize: 16,
    fontWeight: 'bold',
    width: 100,
  },
  value: {
    color: '#fff',
    fontSize: 16,
    flex: 1,
  },
  description: {
    color: '#bdc3c7',
    fontSize: 16,
    lineHeight: 24,
    marginTop: 20,
    textAlign: 'justify',
  },
});

export default AboutScreen;