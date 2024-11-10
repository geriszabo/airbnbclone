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
import { deleteRentalAction, fetchRentals } from "@/utils/actions";
import { formatCurrency } from "@/utils/format";
import Link from "next/link";

async function RentalsPage() {
  const rentals = await fetchRentals();
  if (rentals.length === 0) {
    <EmptyList
      heading="No rentals to display yet"
      message="Add a rental of your own."
    />;
  }

  return (
    <div className="mt-16">
      <h4 className="mb-4 capitalize">active properties: {rentals.length}</h4>
      <Table>
        <TableCaption>A list of all your properties</TableCaption>
        <TableHeader>
          <TableRow>
            {rentalTableHeads.map((tableHead) => (
              <TableHead key={tableHead} >{tableHead}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {rentals.map((rental) => {
            const {
              id: propertyId,
              name,
              price,
              totalNightsSum,
              orderTotalSum,
            } = rental;
            return (
              <TableRow key={propertyId}>
                <TableCell>
                  <Link href={`/properties/${propertyId}`}>{name}</Link>
                </TableCell>
                <TableCell>{formatCurrency(price)}</TableCell>
                <TableCell>{totalNightsSum ?? 0}</TableCell>
                <TableCell>{formatCurrency(orderTotalSum)}</TableCell>
                <TableCell className="flex items-center gap-x-2">
                  <Link href={`/rentals/${propertyId}/edit`}>
                    <IconButton actionType="edit" />
                  </Link>
                  <DeleteRental propertyId={propertyId} />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

export default RentalsPage;

function DeleteRental({propertyId}: {propertyId: string}) {
  const deleteRental = deleteRentalAction.bind(null, {propertyId})

  return <FormContainer action={deleteRental} title="Delete Rental" >
    <IconButton actionType="delete"/>
  </FormContainer>
}



const rentalTableHeads = [
  "Property Name",
  "Nightly Rate",
  "Nights Booked",
  "Total Income",
  "Actions",
];
