import { View, Text, StyleSheet } from 'react-native';
import ButtonCustom from './ButtonCustom';

export default function TaskCard({ task, onEdit, onDelete }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{task.title}</Text>
      <Text style={styles.description2}> Descripcion:</Text>
      <Text style={styles.description}> {task.description}</Text>
      <Text style={styles.status}>Estado: {task.completed ? '♥ Completada' : 'Pendiente'}</Text>

      <View style={styles.buttonRow}>
        <ButtonCustom
          label="Editar"
          onPress={onEdit}
          bgColor="#1125dbff"
          textColor="#fff"
        />
        <ButtonCustom
          label="Eliminar"
          onPress={onDelete}
          bgColor="#e53935"
          textColor="#fff"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 15,
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 6,
    color: '#333',
  },
  description: {
    fontSize: 15,
    marginBottom: 5,
    color: '#555',
  },
   description2: {
    fontSize: 15,
    marginBottom: 0,
    color: '#4680ffff',
  },
  status: {
    fontSize: 14,
    marginBottom: 20,
    color: '#313030ff',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});


