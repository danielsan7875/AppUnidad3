import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Nav = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.bottomTabs}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Ionicons name="home" size={30} color="#ffffffff" />
        <Text style={styles.Text}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Agregar')}>
        <Ionicons name="duplicate" size={30} color="#6b6b6bff" />
        <Text style={styles.Text}>Agregar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Opciones')}>
        <Ionicons name="options-sharp" size={30} color="#6b6b6bff" />
        <Text style={styles.Text}>Opciones</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomTabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#070707ff',
    backgroundColor: '#4b5ae4',
  },
  Text: {
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'arial',
    alignItems: 'center',
    color: '#fff',
  },
});

export default Nav;
