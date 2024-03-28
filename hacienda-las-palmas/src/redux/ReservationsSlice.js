import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  reservations: []
};

export const reservationsSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {
    addReservations: (state, action) => {
        //state.reservations.push(action.payload);
        state.reservations = action.payload;
    },
    removeReservation: (state, action) => {
      state.reservations = state.reservations.filter(reservation => reservation.idHall !== action.payload);
    }
  }
});

export const { addReservations, removeReservation } = reservationsSlice.actions;
export default reservationsSlice.reducer;
