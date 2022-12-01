import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

export interface ReservationState {
	value: string[]
}

const initialState: ReservationState = {
	value: ["Selena"],
}

export const reservationSlice = createSlice({
	name: "reservations",
	initialState,
	reducers: {
		addReservation: (state, action: PayloadAction<string>) => {
			state.value.push(action.payload)
		},
	},
})

export const { addReservation } = reservationSlice.actions

export default reservationSlice.reducer
