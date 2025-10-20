import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const OptionsScreen = () => (
    <View style={styles.container}>
          <Image
            source={require('../assets/logo2.png')} // Asegúrate que el logo esté en assets
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.title}>UniFlow | Unidad 3</Text>
              <Text style={styles.title}>Estudiante:</Text>
                  <Text style={styles.title}>Daniel Sanchez V-30716541</Text>
                      <Text style={styles.title}>Erick Torrealba V-</Text>
     </View>
     
);

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#1e3a8a',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffffffff',
  },
});

export default OptionsScreen;
