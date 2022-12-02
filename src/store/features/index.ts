import { addReservation, removeReservation } from "./reservation-slice"
import { addCustomer, addFoodToCustomer } from "./customer-slice"

export { default as reservationReducer } from "./reservation-slice"
export { default as customerReducer } from "./customer-slice"

export { addReservation, addCustomer, removeReservation, addFoodToCustomer }
