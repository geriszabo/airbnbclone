import Stripe from "stripe";
import { type NextRequest, type NextResponse } from "next/server";
import db from "@/utils/db";
import { formatDate } from "@/utils/format";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const POST = async (request: NextRequest, response: NextResponse) => {
  const requestHeaders = new Headers(request.headers);
  const origin = requestHeaders.get("origin");
  const { bookingId } = await request.json();

  const booking = await db.booking.findUnique({
    where: {
      id: bookingId,
    },
    include: {
      property: {
        select: {
          name: true,
          image: true,
        },
      },
    },
  });
  if (!booking) {
    return Response.json(null, {
      status: 404,
      statusText: "Booking ID not found",
    });
  }
  const {
    totalNights, 
    orderTotal,
    checkIn,
    checkOut,
    property: { image, name },
  } = booking;

  try {
    const session = await stripe.checkout.sessions.create({
      ui_mode: "embedded",
      metadata: { bookingId: booking.id },
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "eur",
            product_data: {
              name: `${name}`,
              images: [image],
              description: `Stay in this wonderful place for ${totalNights} nights, from ${formatDate(
                checkIn
              )} to ${formatDate(checkOut)}`,
            },
            unit_amount: orderTotal * 100
          },
        },
      ],
      mode: "payment",
      return_url: `${origin}/api/confirm?session_id={CHECKOUT_SESSION_ID}`
    });
    return Response.json({clientSecret: session.client_secret})
  } catch (error) {
    console.log(error)
    return Response.json(null, {
        status: 500,
        statusText: "Internal Server Error During Payment"
    })
  }
};
