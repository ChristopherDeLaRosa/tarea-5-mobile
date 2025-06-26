import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';

const CharactersScreen = ({ navigation }) => {
  const characters = [
    {
      id: '1',
      name: 'Capitán John Miller',
      image: require('../assets/images/character-miller.jpg'),
      description: 'Interpretado por Tom Hanks. Líder del escuadrón enviado a rescatar al soldado Ryan. Un hombre experimentado y compasivo que lucha por mantener unida a su unidad.',
    },
    {
      id: '2',
      name: 'Soldado Ryan',
      image: require('../assets/images/character-ryan.jpg'),
      description: 'Interpretado por Matt Damon. El joven paracaidista que debe ser rescatado después de que sus tres hermanos murieran en combate.',
    },
    {
      id: '3',
      name: 'Soldado Upham',
      image: require('../assets/images/character-upham.jpg'),
      description: 'Interpretado por Jeremy Davies. Traductor e intérprete del grupo, representa la inocencia perdida en la guerra.',
    },
  ];

  const renderCharacter = ({ item }) => (
    <TouchableOpacity
      style={styles.characterCard}
      onPress={() => navigation.navigate('CharacterDetail', { character: item })}
    >
      <Image source={item.image} style={styles.characterImage} />
      <View style={styles.characterInfo}>
        <Text style={styles.characterName}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={characters}
        renderItem={renderCharacter}
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
  characterCard: {
    backgroundColor: '#2c3e50',
    borderRadius: 10,
    marginBottom: 15,
    overflow: 'hidden',
  },
  characterImage: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
  },
  characterInfo: {
    padding: 15,
  },
  characterName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CharactersScreen;