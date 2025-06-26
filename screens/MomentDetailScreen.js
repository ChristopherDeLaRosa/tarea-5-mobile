import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';   // ⬅️ nuevo import

const { width } = Dimensions.get('window');

const MomentDetailScreen = ({ route }) => {
  const { moment } = route.params;      // moment.videoId viene de la lista
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === 'ended') setPlaying(false);
  }, []);

  return (
    <ScrollView style={styles.container}>
      {/* Reproductor de YouTube */}
      <YoutubePlayer
        width={width}
        height={250}
        videoId={moment.videoId}   // 👈 ID de YouTube
        play={playing}
        onChangeState={onStateChange}
        webViewStyle={{ opacity: 0.99 }}  // arregla un bug visual en Android
      />

      {/* Texto explicativo */}
      <View style={styles.contentContainer}>
        <Text style={styles.momentTitle}>{moment.title}</Text>
        <Text style={styles.momentDescription}>{moment.description}</Text>
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
  momentTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  momentDescription: {
    color: '#bdc3c7',
    fontSize: 16,
    lineHeight: 24,
  },
});

export default MomentDetailScreen;