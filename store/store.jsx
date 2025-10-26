import { configureStore } from '@reduxjs/toolkit';
import TareasReducer from './tareas';

export const store = configureStore({
  reducer: {
    Tareas: TareasReducer,
  },
});
