import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { store } from './store/store';

import Loader from './componentes/loader';
import Nav from './componentes/nav';
import AppNavigator from './routes/Navigator';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <SafeAreaProvider > 
        <Provider store={store}>
      {isLoading ? (
        <Loader onFinish={() => setIsLoading(false)} />
      ) : (
        <SafeAreaView style={styles.container}>
          <NavigationContainer>
              <View style={{ flex: 1 }}>
                <AppNavigator />
              </View>
           
            </NavigationContainer>
        </SafeAreaView>
      )}
       </Provider>
    </SafeAreaProvider>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b9b9b9ff',
  },
});

export default App;
