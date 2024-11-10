import { CardCountryFlagAndName } from "@/components/card/CardCountryFlagAndName";
import { FormContainer } from "@/components/form/FormContainer";
import { IconButton } from "@/components/form/SubmitButton";
import { EmptyList } from "@/components/home/EmptyList";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { deleteBookingAction, fetchBookings } from "@/utils/actions";
import { tableRows } from "@/utils/categories";
import { formatCurrency, formatDate } from "@/utils/format";
import Link from "next/link";

interface DeleteBookingProps {
  bookingId: string;
}

async function BookingsPage() {
  const bookings = await fetchBookings();
  if (bookings.length === 0) {
    return <EmptyList />;
  }
  return (
    <div className="mt-16">
      <h4 className="mb-4 capitalize">total bookings: {bookings.length}</h4>
      <Table>
        <TableCaption>A list of your recent bookings</TableCaption>
        <TableHeader>
          <TableRow>
            {tableRows.map((tableRow) => (
              <TableHead key={tableRow}>{tableRow}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {bookings.map((booking) => {
            const {
              id,
              orderTotal,
              totalNights,
              checkIn,
              checkOut,
              property: { id: propertyId, name, country },
            } = booking;

            const startDate = formatDate(checkIn);
            const endDate = formatDate(checkOut);
            return (
              <TableRow key={id}>
                <TableCell>
                  <Link
                    href={`/properties/${propertyId}`}
                    className="underline text-muted-foreground tracking-wide"
                  >
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
                <TableCell><DeleteBooking bookingId={id}/></TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

export default BookingsPage;

function DeleteBooking({ bookingId }: DeleteBookingProps) {
  const deleteBooking = deleteBookingAction.bind(null, { bookingId });
  return (
    <FormContainer action={deleteBooking} title="Delete Booking">
      <IconButton actionType="delete" />
    </FormContainer>
  );
}