import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


import Hear from './componentes/hear';
import Nav from './componentes/nav';


const App = () => {
  return (
   
    <SafeAreaProvider>
    <SafeAreaView style={styles.container}>

      <View style={{flex: 1}}>

        <ScrollView>

          <Hear />
    
  
        </ScrollView>
      </View>

      <Nav />

    </SafeAreaView>
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
