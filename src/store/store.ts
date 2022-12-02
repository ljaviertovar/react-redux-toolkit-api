import { configureStore } from "@reduxjs/toolkit"
import { reservationReducer, customerReducer } from "../store/features"

export const store = configureStore({
	reducer: {
		reservations: reservationReducer,
		customers: customerReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
