import { useState } from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity, Text, Modal, } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { deleteTareas } from '../store/tareas';
import CardRegistro from '../componentes/CardRegistro';
import Header from '../componentes/Header';
import Nav from '../componentes/nav';

import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  const Tareas = useSelector(state => state.Tareas);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const total = Tareas.length;

  const [selectedId, setSelectedId] = useState(null);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const manejadorEliminar = id => {
    setSelectedId(id);
    setShowConfirmModal(true);
  };

  const confirmarEliminar = () => {
    dispatch(deleteTareas(selectedId));
    setShowConfirmModal(false);
    setShowSuccessModal(true);
    setTimeout(() => setShowSuccessModal(false), 2000);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#f2f2f2' }}>
      <Header title="Mis Tareas" />

      <View style={styles.topBar}>
        <Text style={styles.sectionTitle}>Tareas</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate('Agregar')}
        >
          <Text style={styles.addButtonText}>+ Agregar Tarea</Text>
        </TouchableOpacity>
      </View>

    <View style={styles.topGuarda}>
        <Text style={styles.sectionTitle}>Mis tareas guardadas</Text>
          <View style={styles.totalBox}>
            <Text style={styles.totalText}>Total: {Tareas.length}</Text>
          </View>
    </View>


      <FlatList
        data={Tareas}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <CardRegistro
            task={item}
            onEdit={() => navigation.navigate('Agregar', { Tareas: item })}
            onDelete={() => manejadorEliminar(item.id)}
          />
        )}
        contentContainerStyle={{ paddingBottom: 80 }}
/>


     
      <Modal transparent visible={showConfirmModal} animationType="fade">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
          
            <Text style={styles.modalText}>¿Estás seguro de eliminar esta tarea?</Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, { backgroundColor: '#e53935' }]}
                onPress={confirmarEliminar}
              >
                <Text style={styles.modalButtonText}>Eliminar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, { backgroundColor: '#ccc' }]}
                onPress={() => setShowConfirmModal(false)}
              >
                <Text style={[styles.modalButtonText, { color: '#333' }]}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Modal de éxito */}
      <Modal transparent visible={showSuccessModal} animationType="fade">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={[styles.modalText, { color: '#4b5ae4' }]}>
              ♥ Tarea eliminada exitosamente
            </Text>
          </View>
        </View>
      </Modal>

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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    elevation: 5,
  },
  modalText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  modalButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  modalButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
topGuarda: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingHorizontal: 20,
  paddingTop: 15,
  paddingBottom: 15,
},
sectionTitle: {
  fontSize: 20,
  fontWeight: 'bold',
  color: '#000',
  fontFamily: 'arial',
},
totalBox: {
  backgroundColor: '#000000ff',
  paddingVertical: 6,
  paddingHorizontal: 12,
  borderRadius: 8,
},
totalText: {
  color: '#fff',
  fontWeight: 'bold',
  fontSize: 14,
  fontFamily: 'arial',
},
});
