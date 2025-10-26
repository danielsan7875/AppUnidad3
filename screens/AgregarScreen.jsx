import { useState } from 'react';
import { View, TextInput, Switch, StyleSheet, Modal, Text, TouchableOpacity, } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { addTareas, updateTareas } from '../store/tareas';

import Header from '../componentes/Header';
import Nav from '../componentes/nav';
import Status from '../hooks/Status';

import { useNavigation, useRoute } from '@react-navigation/native';


export default function AgregarScreen() {
  const { params } = useRoute();
  const Tareas = params?.Tareas;
  const dispatch = useDispatch();
  const toggle = Status();
  const navigation = useNavigation();

  const [showModal, setShowModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);

  const { control, getValues } = useForm({
    defaultValues: {
      title: Tareas?.title || '',
      description: Tareas?.description || '',
      completed: Tareas?.completed || false,
    },
  });

  const onSubmit = () => {
    const { title, description, completed } = getValues();

    if (!title.trim()) {
      setErrorModal(true);
      setTimeout(() => setErrorModal(false), 2000);
      return;
    }

    const payload = { title, description, completed };

    if (Tareas) {
      dispatch(updateTareas({ ...Tareas, ...payload }));
    } else {
      dispatch(addTareas(payload));
    }

    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
      navigation.navigate('Home');
    }, 2000);
  };

  return (
   <View style={styles.container}>
      <Header title={Tareas ? 'Editar Tarea' : 'Nueva Tarea'} />

  <View style={styles.card}>
    <Text style={styles.label}>Título *</Text>
    <Controller
      control={control}
      name="title"
      render={({ field: { onChange, value } }) => (
        <TextInput
          placeholder="Escribe el título de la tarea"
          style={styles.input}
          onChangeText={onChange}
          value={value}
        />
      )}
    />

    <Text style={styles.label}>Descripción</Text>
    <Controller
      control={control}
      name="description"
      render={({ field: { onChange, value } }) => (
        <TextInput
          placeholder="Escribe una lista o pasos..."
          style={styles.textArea}
          onChangeText={onChange}
          value={value}
          multiline
          numberOfLines={4}
        />
      )}
    />

    <View style={styles.switchRow}>
      <Text style={styles.label}>¿Tarea completada?</Text>
      <Controller
        control={control}
        name="completed"
        render={({ field: { onChange, value } }) => (
          <Switch value={value} onValueChange={() => onChange(toggle(value))} />
        )}
      />
    </View>

    <TouchableOpacity style={styles.saveButton} onPress={onSubmit}>
      <Text style={styles.saveButtonText}>Guardar</Text>
    </TouchableOpacity>
  </View>

      {/* Modal de éxito */}
      <Modal transparent visible={showModal} animationType="fade">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              ♥ {Tareas ? 'Tarea actualizada' : 'Tarea agregada'} exitosamente
            </Text>
          </View>
        </View>
      </Modal>

      {/* Modal de error */}
      <Modal transparent visible={errorModal} animationType="fade">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={[styles.modalText, { color: '#e53935' }]}>
              ♦ El título es obligatorio
            </Text>
          </View>
        </View>
      </Modal>

     <Nav />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  card: {
    backgroundColor: '#fff',
    margin: 20,
    padding: 20,
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 16,
    backgroundColor: '#fafafa',
  },
  textArea: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    height: 250,
    textAlignVertical: 'top',
    backgroundColor: '#fafafa',
    marginBottom: 16,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  saveButton: {
    backgroundColor: '#1b59dd',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
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
    elevation: 5,
  },
  modalText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4b5ae4',
    textAlign: 'center',
  },
});
