import 'expo-router/entry';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React from 'react';
import { Link, useRouter } from 'expo-router';
import styles from './StyleSheet';
import { painData } from './painData';

const painHow = () => {
  const router = useRouter();

  if (painData.painRegion === 1){
    return (
      <View style={stylesP.container}>
        <Text style={styles.header}>Bitte wählen Sie die entsprechende Schmerzart aus:</Text>
        <View style={stylesP.bottom}>

          <Link href={'./intensityBefore'} asChild>
            <TouchableOpacity 
              style={stylesP.buttonSmall}                         
              onPress={() => {
                            painData.painType = 1;
                            painData.painToString = 'Druckschmerz im Schulter-Nacken-Bereich';
                        }}>
              <Image source={require('../../assets/gifs/1druck.gif')} style={stylesP.image} />
              <Text style={stylesP.buttonText}>{'\n'}Druckschmerz im Bereich Schulter-Nacken</Text>
            </TouchableOpacity>
          </Link>

          <Link href={'./intensityBefore'} asChild>
            <TouchableOpacity 
              style={stylesP.buttonSmall}                        
              onPress={() => {
                            painData.painType = 2;
                            painData.painToString = 'Ziehende Schmerzen im Schulter-Nacken-Bereich';
                        }}>
            <Text style={stylesP.buttonText}>{'\n'}Ziehende Schmerzen im Bereich Schulter-Nacken</Text>
            <Image source={require('../../assets/gifs/1zieh.gif')} style={stylesP.image} />
              
            </TouchableOpacity>
          </Link>

          <Link href={'./intensityBefore'} asChild>
            <TouchableOpacity style={stylesP.buttonSmall}
              onPress={() => {
              painData.painType = 3;
              painData.painToString = 'Druckschmerz im oberen Schulterblatt- oder Rücken-Bereich';
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
                          painData.painToString = 'Druckschmerz im mittleren Rückenbereich';
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
                          painData.painToString = 'Ziehende Schmerzen entlang der Brustwirbelsäule';
                      }}>
          <Text style={stylesP.buttonText}>{'\n'}Ziehende Schmerzen entlang der Brustwirbelsäule</Text>
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
                          painData.painToString = 'Druckschmerz im unteren Rückenbereich';
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
                          painData.painToString = 'Ziehende Schmerzen entlang der Lendenwirbelsäule/im Kreuzbeinbereich';
                      }}>
          <Text style={stylesP.buttonText}>{'\n'}Ziehende Schmerzen entlang der Lendenwirbelsäule/im Kreuzbeinbereich</Text>
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
                          painData.painToString = 'Druckschmerz im Becken- Gesäßbereich';
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
    height: '100%',
    backgroundColor: '#fffff',
  },
  bottom: {
    flex: 1,
    marginTop: '-5%',
    width: '80%',
    marginBottom: '6%',
    alignItems: 'center',
  },
  image: {
    height: '100%',
    width: '50%',
    resizeMode: 'stretch',
  },
  button: {
    flexDirection: 'row',
    height: '35%',
    width: '100%',
    backgroundColor: '#10069F',
    borderRadius: 20,
    marginTop: '6%',
  },
  buttonSmall: {
    flexDirection: 'row',
    height: '30%',
    width: '100%',
    backgroundColor: '#10069F',
    borderRadius: 20,
    marginTop: '6%',
  },
  buttonText: {
    width: '50%',
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
  },
});

export default painHow;
