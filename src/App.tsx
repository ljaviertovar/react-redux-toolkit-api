import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"

import ReservationCard from "./components/ReservationCard"

import type { RootState } from "./store/store"
import { addReservation } from "./store/features"

import "./App.css"
import CustomerCard from "./components/CustomerCard"

function App() {
	const [reservationName, setReservationName] = useState("")

	const reservations = useSelector((state: RootState) => state.reservations.value)
	const customers = useSelector((state: RootState) => state.customers.value)

	const dispatch = useDispatch()

	const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
		setReservationName(e.currentTarget.value)
	}

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (!reservationName) return null

		dispatch(addReservation(reservationName))

		setReservationName("")
	}

	return (
		<div className='App'>
			<div className='container'>
				<div className='reservation-container'>
					<div>
						<h5 className='reservation-header'>Reservations</h5>
						<div className='reservation-cards-container'>
							{reservations.map((name: string, index) => (
								<ReservationCard key={name} name={name} index={index} />
							))}
						</div>
					</div>
					<div className='reservation-input-container'>
						<input type='text' value={reservationName} name='name' placeholder='Name' onChange={handleChange} />
						<button type='button' onClick={handleClick}>
							Add
						</button>
					</div>
				</div>
				<div className='customer-food-container'>
					{customers.map(c => (
						<CustomerCard key={c.id} {...c} />
					))}
				</div>
			</div>
		</div>
	)
}

export default App
