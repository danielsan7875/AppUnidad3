
import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Loader({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish(); // Llama a la función para continuar a la app
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logo.png')} // Asegúrate que el logo esté en assets
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>UniFlow</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
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
    color: '#1E3A8A',
  },
});
