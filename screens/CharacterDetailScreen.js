import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const CharacterDetailScreen = ({ route }) => {
  const { character } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={character.image} style={styles.characterImage} />
      <View style={styles.contentContainer}>
        <Text style={styles.characterName}>{character.name}</Text>
        <Text style={styles.characterDescription}>{character.description}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  characterImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  contentContainer: {
    padding: 20,
  },
  characterName: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  characterDescription: {
    color: '#bdc3c7',
    fontSize: 16,
    lineHeight: 24,
  },
});

export default CharacterDetailScreen;