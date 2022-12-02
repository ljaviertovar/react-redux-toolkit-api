import { useDispatch } from "react-redux"
import { v4 as uuid } from "uuid"

import { addCustomer, removeReservation } from "../store/features"

interface Props {
	name: string
	index: number
}

const ReservationCard = ({ name, index }: Props) => {
	const dispatch = useDispatch()

	const handleClick = () => {
		dispatch(removeReservation(index))
		dispatch(
			addCustomer({
				id: uuid(),
				name,
				food: [],
			})
		)
	}

	return (
		<div className='reservation-card-container' onClick={() => handleClick()}>
			{name}
		</div>
	)
}

export default ReservationCard
