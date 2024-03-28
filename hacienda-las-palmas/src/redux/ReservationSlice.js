import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    idHall: '',
    codeReservation: '',
    customerName: '',
    reservationConfirmed: '',
    reservationDate: ''
};

export const reservationSlice = createSlice({
    name: 'reservation',
    initialState,
    reducers: {
        addNewReservation: (state, action) => {
            const {idHall,  reservationDate} = action.payload;
            state.idHall = idHall;
            state.reservationDate = reservationDate;
        }
    }
});

export const { addNewReservation } = reservationSlice.actions;
export default reservationSlice.reducer;