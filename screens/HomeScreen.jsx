import { View, FlatList, StyleSheet, TouchableOpacity, Text} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../store/tasksSlice';
import TaskCard from '../componentes/TaskCard';
import Header from '../componentes/Header';
import Nav from '../componentes/nav';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: '#f2f2f2' }}>
      <Header title="Mis Tareas" />

        <View style={styles.topBar}>
      <Text style={styles.sectionTitle}>Tareas</Text>
      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('Agregar')}>
        <Text style={styles.addButtonText}>+ Agregar Tarea</Text>
      </TouchableOpacity>
    </View>

    <Text style={styles.subTitle}>Mis tareas guardadas</Text>

      <FlatList
        data={tasks}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TaskCard
            task={item}
            onEdit={() => navigation.navigate('Agregar', { task: item })}
            onDelete={() => dispatch(deleteTask(item.id))}
          />
        )}
      />
    <Nav />
    </View>
  );
}

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: '#ffffffff',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000ff',
    fontFamily: 'arial',
  },
  addButton: {
    backgroundColor: '#3771eeff',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  addButtonText: {
    color: '#ffffffff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 25,
    marginLeft: 20,
    color: '#333',
  },
});
