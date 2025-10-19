import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

const Hear = () => {
  return (
    <View style={styles.header}>
  
    <Text style={styles.logoText}>UniFlow</Text>
    <View style={styles.headerIcons}>
      <TouchableOpacity>
        
        <Ionicons
          name="school"
          size={28}
          color="white"
          style={styles.iconButton}
        />
      </TouchableOpacity>
    </View>
  </View>
  );
};


const styles = StyleSheet.create({
  // Header
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#1200B5',
    backgroundColor:'#4b5ae4' ,
  },
  logoText: {
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'arial', 
    color:'#fff',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: 20,
  },
});

export default Hear;
