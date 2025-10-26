import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function ButtonCustom({ label, onPress, bgColor = '#000000ff', textColor = '#ffffffff' }) {
  return (
    <TouchableOpacity style={[styles.btn, { backgroundColor: bgColor }]} onPress={onPress}>
      <Text style={[styles.text, { color: textColor }]}> {label} </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 5,
    marginVertical: 5,
    flex: 1,
  },
  text: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
