import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    idHall: '',
    codeReservation: '',
    customerName: '',
    reservationConfirmed: '',
    reservationDate: '',
    dateFormatted: '',
};

export const reservationSlice = createSlice({
    name: 'reservation',
    initialState,
    reducers: {
        addNewReservation: (state, action) => {
            const {idHall,  reservationDate, dateFormatted} = action.payload;
            state.idHall = idHall;
            state.reservationDate = reservationDate;
            state.dateFormatted = dateFormatted;
        }
    }
});

export const { addNewReservation } = reservationSlice.actions;
export default reservationSlice.reducer;