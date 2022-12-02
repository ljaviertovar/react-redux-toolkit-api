import { useState } from "react"
import { useDispatch } from "react-redux"
import { addFoodToCustomer } from "../store/features"
interface Props {
	id: string
	name: string
	food: string[]
}

const CustomerCard = ({ id, name, food }: Props) => {
	const [foodAdd, setFoodAdd] = useState("")

	const dispatch = useDispatch()

	const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
		setFoodAdd(e.currentTarget.value)
	}

	const hanldeClick = () => {
		if (!foodAdd) return
		dispatch(addFoodToCustomer({ id, food: foodAdd }))
		setFoodAdd("")
	}

	return (
		<div className='customer-food-card-container'>
			<p>{name}</p>
			<div className='customer-foods-container'>
				<div className='customer-food'>
					{food.map(f => (
						<p key={f}>{f}</p>
					))}
				</div>
				<div className='customer-food-input-container'>
					<input type='text' name='food' placeholder='Food' onChange={handleChange} value={foodAdd} />
					<button type='button' onClick={() => hanldeClick()}>
						Add
					</button>
				</div>
			</div>
		</div>
	)
}

export default CustomerCard
