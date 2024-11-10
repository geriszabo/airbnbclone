import { EmptyList } from '@/components/home/EmptyList'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { fetchReservations } from '@/utils/actions'

import { tableRows } from '../bookings/page'
import { formatCurrency, formatDate } from '@/utils/format'
import Link from 'next/link'
import { CardCountryFlagAndName } from '@/components/card/CardCountryFlagAndName'
import { Stats } from '@/components/reservations/Stats'
async function ReservationsPage  () {
const reservations = await fetchReservations()
if(reservations.length === 0) {
  <EmptyList/>
}
  return (
    <>
    <Stats/>
    <div className="mt-16">
      <h4 className="mb-4 capitalize">
        total reservations: {reservations.length}
      </h4>
      <Table>
        <TableCaption>A list of your reservations</TableCaption>
        <TableHeader>
          <TableRow>
            {tableRows.map(tableRow => tableRow !== "Actions" && <TableHead key={tableRow}>{tableRow}</TableHead>)}
          </TableRow>
        </TableHeader>
        <TableBody>
          {reservations.map(reservation => {
            const {id, orderTotal, totalNights, checkIn, checkOut, property: {id: propertyId, name, country}} = reservation
            const startDate = formatDate(checkIn)
            const endDate = formatDate(checkOut)
            
            return <TableRow key={id} >
              <TableCell>
                <Link className='underline text-muted-foreground tracking-wide'  href={`/properties/${propertyId}`} >
                {name}
                </Link>
              </TableCell>
              <TableCell>
                <CardCountryFlagAndName countryCode={country} />
              </TableCell>
              <TableCell>{totalNights}</TableCell>
              <TableCell>{formatCurrency(orderTotal)}</TableCell>
              <TableCell>{startDate}</TableCell>
              <TableCell>{endDate}</TableCell>
            </TableRow>
            
          })}
        </TableBody>
      </Table>
    </div>
    </>
  )
}

export default ReservationsPage