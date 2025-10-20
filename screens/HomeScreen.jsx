import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Hear from '../componentes/hear';

const HomeScreen = () => (
   
  <View>
         <Hear />
    <View style={styles.container}>
        <Text style={styles.text}>Pantalla Home</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1,
     justifyContent: 'center',
      alignItems: 'center' },
  text: { 
    fontSize: 20 
},
});

export default HomeScreen;