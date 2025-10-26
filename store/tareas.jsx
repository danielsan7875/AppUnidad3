import { createSlice } from '@reduxjs/toolkit';

const Tareas = createSlice({
  name: 'Tareas',
  initialState: [],
  reducers: {
    addTareas: (state, action) => {
      state.push({ id: Date.now(), ...action.payload });
    },
    updateTareas: (state, action) => {
      const index = state.findIndex(t => t.id === action.payload.id);
      if (index !== -1) state[index] = action.payload;
    },
    deleteTareas: (state, action) => {
      return state.filter(t => t.id !== action.payload);
    },
  },
});

export const { addTareas, updateTareas, deleteTareas } = Tareas.actions;
export default Tareas.reducer;
