import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"

import ReservationCard from "./components/ReservationCard"

import type { RootState } from "./store/store"
import { addReservation } from "./store/features"

import "./App.css"

function App() {
	const [reservationName, setReservationName] = useState("")

	const reservations = useSelector((state: RootState) => state.reservations.value)
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
							{reservations.map((name: string) => (
								<ReservationCard key={name} name={name} />
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
					<div className='customer-food-card-container'>
						<p>Selena Gomez</p>
						<div className='customer-foods-container'>
							<div className='customer-food'></div>
							<div className='customer-food-input-container'>
								<input />
								<button>Add</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
