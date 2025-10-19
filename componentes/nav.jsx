import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { Ionicons } from '@expo/vector-icons';


const Nav = () => {
  return (
   <View style={styles.bottomTabs}>
       <TouchableOpacity>
         <Ionicons name="home" size={30} color="#ffffffff" />
            <Text  style={styles.Text}>Home</Text>
       </TouchableOpacity>
       <TouchableOpacity>
         <Ionicons name="duplicate" size={30} color="#6b6b6bff" />
         <Text style={styles.Text}>Agregar</Text>
       </TouchableOpacity>
     </View>
  );
};


const styles = StyleSheet.create({
// Bottom Tabs
  bottomTabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#1200B5',
    backgroundColor: '#1E3A8A',
  },
   Text: {
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'arial', 
    alignItems: 'center',
    color:'#fff',
  },
});

export default Nav;
