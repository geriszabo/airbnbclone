import { DateRange } from "react-day-picker";
import {create} from "zustand"
import { Booking } from "./types";


interface PropertyState {
    propertyId: string,
    price: number,
    bookings: Booking[]
    range: DateRange | undefined
}

//Creating the store
export const useProperty = create<PropertyState>(() => {
    return {
        propertyId: "",
        bookings: [],
        price: 0,
        range: undefined
    }
})