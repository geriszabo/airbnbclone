import { calculateDaysBetween } from "./calendar"


interface BookingDetailsProps {
    checkIn: Date,
    checkOut: Date,
    price: number
}

export const calculateTotals = ({checkIn, checkOut, price}: BookingDetailsProps) => {
    const totalNights = calculateDaysBetween({checkIn, checkOut })
    const subTotal = totalNights * price
    const cleaning = totalNights * 20
    const service = totalNights * 24
    const tax = subTotal * 0.18
    const orderTotal = subTotal + cleaning + service + tax
    return {orderTotal, totalNights, subTotal, cleaning, service, tax}

}