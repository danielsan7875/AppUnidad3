import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import Loader from './componentes/loader';
import Nav from './componentes/nav';
import AppNavigator from './routes/AppNavigator';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <SafeAreaProvider>
      {isLoading ? (
        <Loader onFinish={() => setIsLoading(false)} />
      ) : (
        <SafeAreaView style={styles.container}>
          <NavigationContainer>
              <View style={{ flex: 1 }}>
                <AppNavigator />
              </View>
              <Nav />  
            </NavigationContainer>
        </SafeAreaView>
      )}
    </SafeAreaProvider>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F3FF',
  },
});

export default App;
