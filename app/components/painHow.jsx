import 'expo-router/entry';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React from 'react';
import { Link, useRouter } from 'expo-router';
import styles from './StyleSheet';
import { painData } from './painData';

const painHow = () => {
  const router = useRouter();
  console.log(painData.painRegion);

  if (painData.painRegion === 1){
    return (
      <View style={stylesP.container}>
        <Text style={styles.header}>Bitte wählen Sie die entsprechende Schmerzart aus:</Text>
        <View style={stylesP.bottom}>

          <Link href={'./intensityBefore'} asChild>
            <TouchableOpacity 
              style={stylesP.button}                         
              onPress={() => {
                            painData.painType = 1;
                            //console.log('Druckschmerz im Schulter-Nacken-Bereich ausgewählt.');
                        }}>
              <Image source={require('../../assets/gifs/1druck.gif')} style={stylesP.image} />
              <Text style={stylesP.buttonText}>{'\n'}Druckschmerz im Bereich Schulter-Nacken</Text>
            </TouchableOpacity>
          </Link>

          <Link href={'./intensityBefore'} asChild>
            <TouchableOpacity 
              style={stylesP.button}                        
              onPress={() => {
                            painData.painType = 2;
                            //console.log('Ziehender Schmerz im Schulter-Nacken-Bereich ausgewählt.');
                        }}>
            <Text style={stylesP.buttonText}>{'\n'}Ziehender Schmerz im Bereich Schulter-Nacken</Text>
            <Image source={require('../../assets/gifs/1zieh.gif')} style={stylesP.image} />
              
            </TouchableOpacity>
          </Link>

          <Link href={'./intensityBefore'} asChild>
            <TouchableOpacity style={stylesP.button}
              onPress={() => {
              painData.painType = 3;
              //console.log('Druckschmerz im oberem Schulterblatt- oder Rücken-Bereich ausgewählt.');
                        }}>
            <Image source={require('../../assets/gifs/1druck2.gif')} style={stylesP.image} />
              <Text style={stylesP.buttonText}>{'\n'}Druckschmerz im Bereich oberes Schulterblatt- oder Rücken</Text>
            </TouchableOpacity>
          </Link>

        </View>
      </View>
    );
  }
  else if (painData.painRegion === 2){
    return (
      <View style={stylesP.container}>
      <Text style={styles.header}>Bitte wählen Sie die entsprechende Schmerzart aus:</Text>
      <View style={stylesP.bottom}>

        <Link href={'./intensityBefore'} asChild>
          <TouchableOpacity 
            style={stylesP.button}                         
            onPress={() => {
                          painData.painType = 1;
                          //console.log('Druckschmerz im mittleren Rückenbereich ausgewählt.');
                      }}>
            <Image source={require('../../assets/gifs/2druck.gif')} style={stylesP.image} />
            <Text style={stylesP.buttonText}>{'\n'}Druckschmerz im mittleren Rückenbereich</Text>
          </TouchableOpacity>
        </Link>

        <Link href={'./intensityBefore'} asChild>
          <TouchableOpacity 
            style={stylesP.button}                        
            onPress={() => {
                          painData.painType = 2;
                          //console.log('Ziehender Schmerz entlang der Brustwirbelsäule ausgewählt.');
                      }}>
          <Text style={stylesP.buttonText}>{'\n'}Ziehender Schmerz entlang der Brustwirbelsäule</Text>
          <Image source={require('../../assets/gifs/2zieh.gif')} style={stylesP.image} />
            
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
  }
  else if (painData.painRegion === 3){
    return (
      <View style={stylesP.container}>
      <Text style={styles.header}>Bitte wählen Sie die entsprechende Schmerzart aus:</Text>
      <View style={stylesP.bottom}>

        <Link href={'./intensityBefore'} asChild>
          <TouchableOpacity 
            style={stylesP.button}                         
            onPress={() => {
                          painData.painType = 1;
                          //console.log('Druckschmerz im unteren Rückenbereich ausgewählt.');
                      }}>
            <Image source={require('../../assets/gifs/3druck.gif')} style={stylesP.image} />
            <Text style={stylesP.buttonText}>{'\n'}Druckschmerz im unteren Rückenbereich</Text>
          </TouchableOpacity>
        </Link>

        <Link href={'./intensityBefore'} asChild>
          <TouchableOpacity 
            style={stylesP.button}                        
            onPress={() => {
                          painData.painType = 2;
                          //console.log('Ziehender Schmerz entlang der Lendenwirbelsäule/im Kreuzbeinbereich ausgewählt.');
                      }}>
          <Text style={stylesP.buttonText}>{'\n'}Ziehender Schmerz entlang der Lendenwirbelsäule/im Kreuzbeinbereich</Text>
          <Image source={require('../../assets/gifs/3zieh.gif')} style={stylesP.image} />
            
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
  }
  else if (painData.painRegion === 4){
    return (
      <View style={stylesP.container}>
      <Text style={styles.header}>Bitte wählen Sie die entsprechende Schmerzart aus:</Text>
      <View style={stylesP.bottom}>

        <Link href={'./intensityBefore'} asChild>
          <TouchableOpacity 
            style={stylesP.button}                         
            onPress={() => {
                          painData.painType = 1;
                          //console.log('Druckschmerz im Becken- Gesäßbereichausgewählt.');
                      }}>
            <Image source={require('../../assets/gifs/4druck.gif')} style={stylesP.image} />
            <Text style={stylesP.buttonText}>{'\n'}Druckschmerz im Becken- Gesäßbereich</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
  }
};

const stylesP = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fffff',
  },
  bottom: {
    flex: 1,
    marginTop: '6%',
    width: '90%',
    bottom: '6%',
    alignItems: 'center',
  },
  image: {
    height: '100%',
    width: '50%',
    resizeMode: 'cover',
  },
  button: {
    flexDirection: 'row',
    height: '28%',
    width: '100%',
    backgroundColor: '#10069F',
    borderBottomEndRadius: 0,
    marginTop: '5%',
  },
  buttonText: {
    width: '50%',
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },
});

export default painHow;
