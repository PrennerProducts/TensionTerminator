import React, { useState, useEffect } from 'react';
//import { View, Text, Button } from 'react-native';
import { Audio } from 'expo-av';

const AudioPlayer = ({ audioUri }) => {
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const loadSound = async () => {
      const { sound } = await Audio.Sound.createAsync(audioUri);
      setSound(sound);
      await sound.playAsync();
      setIsPlaying(true);
    };
    loadSound();
    return () => {
      if (sound) {sound.unloadAsync();}
    };
  }, [audioUri]);

  const onPlaybackStatusUpdate = (status) => {
    setIsPlaying(status.isPlaying);
  };

  const togglePlayback = async () => {
    if (sound) {
      if (isPlaying) {
        await sound.pauseAsync();
      } else {
        await sound.playAsync();
      }
    }
  };

//   return (
//     <View>
//       <Text style={{ fontSize: 18, marginBottom: 10 }}>Audio Player</Text>
//       <Button title={isPlaying ? 'Pause' : 'Play'} onPress={togglePlayback} />
//     </View>
//   );
};

export default AudioPlayer;
