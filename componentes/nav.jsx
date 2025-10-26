import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

const Nav = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const tabs = [
    { name: 'Home', icon: 'home' },
    { name: 'Agregar', icon: 'duplicate' },
    { name: 'Opciones', icon: 'options-sharp' },
  ];

  return (
    <View style={styles.bottomTabs}>
      {tabs.map(tab => {
        const isActive = route.name === tab.name;
        const iconColor = isActive ? '#ffffff' : '#9c9c9cff';
        const textColor = isActive ? '#ffffff' : '#000000ff';

        return (
          <TouchableOpacity
            key={tab.name}
            style={styles.tabItem}
            onPress={() => navigation.navigate(tab.name)}
          >
            <Ionicons name={tab.icon} size={26} color={iconColor} />
            <Text style={[styles.tabText, { color: textColor }]}>{tab.name}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  bottomTabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#4b5ae4',
    borderTopWidth: 1,
    borderTopColor: '#1200B5',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    fontSize: 13,
    fontWeight: 'bold',
    fontFamily: 'arial',
    marginTop: 4,
  },
});

export default Nav;
