import { configureStore } from "@reduxjs/toolkit";
import reservationsReducer from "./ReservationsSlice";
import reservationReducer from "./ReservationSlice";

export const store = configureStore({
    reducer: {
        reservations: reservationsReducer,
        reservation: reservationReducer
    }
});

export default store;