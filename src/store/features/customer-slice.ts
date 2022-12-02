import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

interface CustomerSate {
	value: Customer[]
}

interface Customer {
	id: string
	name: string
	food: string[]
}

interface FoodCustomer {
	id: string
	food: string
}

const initialState: CustomerSate = {
	value: [],
}

export const customerSlice = createSlice({
	name: "custonmers",
	initialState,
	reducers: {
		addCustomer: (state, action: PayloadAction<Customer>) => {
			state.value.push(action.payload)
		},
		addFoodToCustomer: (state, action: PayloadAction<FoodCustomer>) => {
			state.value.forEach(customer => {
				if (customer.id === action.payload.id) {
					customer.food.push(action.payload.food)
				}
			})
		},
	},
})

export const { addCustomer, addFoodToCustomer } = customerSlice.actions

export default customerSlice.reducer
