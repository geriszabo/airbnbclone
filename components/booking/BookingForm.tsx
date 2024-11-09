import { calculateTotals } from "@/utils/calculateTotal"
import { formatCurrency } from "@/utils/format"
import { useProperty } from "@/utils/store"
import { Card, CardTitle } from "../ui/card"
import { Separator } from "@radix-ui/react-dropdown-menu"


export const BookingForm = () => {
  const {range, price} = useProperty((state) => state)
  const checkIn = range?.from 
  const checkOut = range?.to

  if(!checkIn || !checkOut) {
    return null
  }

  const {totalNights, cleaning, orderTotal, service, subTotal, tax} = calculateTotals({checkIn, checkOut, price})
  return (
    <Card className="p-8 mb-4"  >
      <CardTitle  className="mb-8" >Summary</CardTitle>
      <FormRow label={`$${price} x ${totalNights} nights`} amount={subTotal} />
      <FormRow label="Cleaning Fee" amount={cleaning} />
      <FormRow label="Service Fee" amount={service} />
      <FormRow label="Tax" amount={tax} />
      <FormRow label="Cleaning Fee" amount={cleaning} />
      <Separator className="mt-4"/>
      <CardTitle className="mt-8" >
        <FormRow label="Booking Total" amount={orderTotal}/>
      </CardTitle>
    </Card>
  )
}

function FormRow({label, amount}: {label: string, amount: number} ){
  return <p className="flex justify-between text-sm mb-2">
    <span>{label}</span>
    <span>{formatCurrency(amount)}</span>
  </p>
}