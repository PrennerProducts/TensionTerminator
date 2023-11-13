import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Image,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const GameStatusGif = ({ visible, onClose }) => {
  const [showGif, setShowGif] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGif(false); // Dies setzt den Zustand in profileScreen
    }, 3000); // Schließt das Modal nach 3 Sekunden

    return () => clearTimeout(timer);
  }, []);
  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <Image
          source={{
            uri: 'https://media.giphy.com/media/3o7TKMCv3R3zeB3FzG/giphy.gif',
          }}
          style={{ width: screenWidth, height: screenHeight }}
        />
        <View style={styles.textOverlay}>
          <Text style={styles.statusText}>
            Dein aktueller Gamestatus: Level 1
          </Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textOverlay: {
    position: 'absolute',
    top: '50%', // Feinabstimmung basierend auf Ihrem Layout
    width: '100%',
    alignItems: 'center',
    zIndex: 10, // Stellen Sie sicher, dass der Text über dem Bild liegt
  },
  statusText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});

export default GameStatusGif;

// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   Modal,
//   Image,
//   Dimensions,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';

// const screenWidth = Dimensions.get('window').width;
// const screenHeight = Dimensions.get('window').height;
// const GameStatusGif = () => {
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowGameStatusGif(false); // Dies setzt den Zustand in profileScreen
//     }, 3000); // Schließt das Modal nach 3 Sekunden

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <Modal
//       transparent={true}
//       animationType="fade"
//       visible={true}
//       onRequestClose={() => setShowGameStatusGif(false)}
//     >
//       {/* Ihr Modal-Inhalt */}
//     </Modal>
//   );
// };

// const styles = StyleSheet.create({
//   overlay: {
//     flex: 1,
//     width: screenWidth,
//     height: screenHeight,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   gifStyle: {
//     width: screenWidth,
//     height: screenHeight,
//     position: 'absolute',
//     zIndex: 1,
//   },
//   textContainer: {
//     zIndex: 2,
//     position: 'absolute',
//     top: '10%', // Anpassen, basierend auf Ihrem Layout
//     width: '100%',
//     alignItems: 'center',
//     padding: 10,
//   },
//   statusText: {
//     color: 'white',
//     fontSize: 24,
//     fontWeight: 'bold',
//     textShadowColor: 'rgba(0, 0, 0, 0.75)',
//     textShadowOffset: { width: -1, height: 1 },
//     textShadowRadius: 10,
//   },
// });

// export default GameStatusGif;
