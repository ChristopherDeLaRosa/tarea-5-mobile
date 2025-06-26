// MomentsScreen.jsx
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

const MomentsScreen = ({ navigation }) => {
  const moments = [
    {
      id: '1',
      title: 'Desembarco en Normandía',
      image: require('../assets/images/moment-beach.jpg'),
      videoId: 'risVbp9vjBk',
      description: 'Una de las secuencias de guerra más realistas jamás filmadas.',
    },
    {
      id: '2',
      title: 'El Francotirador',
      image: require('../assets/images/moment-sniper.jpg'),
      videoId: 'GDhI4f-0jTY',
      description: 'La tensa escena del francotirador que mantiene al espectador al borde del asiento.',
    },
    {
      id: '3',
      title: 'Batalla del Puente',
      image: require('../assets/images/moment-bridge.jpg'),
      videoId: 'I-6o-eqJ5EI',
      description: 'La batalla final en el puente de Ramelle, donde se decide el destino de todos.',
    },
  ];

  const renderMoment = ({ item }) => (
    <View style={styles.momentCard}>
      {/* Imagen previa */}
      <TouchableOpacity onPress={() => navigation.navigate('MomentDetail', { moment: item })}>
        <Image source={item.image} style={styles.momentImage} />
      </TouchableOpacity>

      {/* Título y descripción */}
      <View style={styles.momentInfo}>
        <Text style={styles.momentTitle}>{item.title}</Text>
        <Text style={styles.momentDescription}>{item.description}</Text>
      </View>

     
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={moments}
        renderItem={renderMoment}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  listContainer: {
    padding: 20,
  },
  momentCard: {
    backgroundColor: '#2c3e50',
    borderRadius: 10,
    marginBottom: 25,
    overflow: 'hidden',
  },
  momentImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  momentInfo: {
    padding: 15,
  },
  momentTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  momentDescription: {
    color: '#bdc3c7',
    fontSize: 14,
  },
  videoContainer: {
    marginTop: 10,
  },
});

export default MomentsScreen;
