export type actionFunction = (
  prevState: unknown,
  formData: FormData
) => Promise<{ message: string }>;

export type PropertyCardProps = {
  image: string;
  id: string;
  name: string;
  tagline: string;
  country: string;
  price: number;
};

export interface DateRangeSelect {
  startDate: Date;
  endDate: Date;
  key: string;
}

export interface Booking {
  checkIn: Date;
  checkOut: Date;
}
