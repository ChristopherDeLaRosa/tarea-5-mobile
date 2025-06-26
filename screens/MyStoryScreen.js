// MyStoryScreen.jsx
import React, { useState, useCallback } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';   // ⬅️ nuevo

const { width, height } = Dimensions.get('window');

const MyStoryScreen = () => {
  const [playing, setPlaying] = useState(true);  // arranca en reproducción

  const onStateChange = useCallback((state) => {
    if (state === 'ended') setPlaying(false);    // pausa al terminar
  }, []);

  return (
    <View style={styles.container}>
      <YoutubePlayer
        width={width}
        height={height - 100}     
        videoId="aKVDmXbV7ys"     
        play={playing}
        onChangeState={onStateChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MyStoryScreen;
