import db from "@/utils/db";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export const GET = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url);
  const session_id = searchParams.get("session_id");

  if (!session_id) {
    throw new Error("Invalid session ID");
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(session_id);
    const bookingId = session.metadata?.bookingId;

    if (session.status !== "complete" || !bookingId) {
      throw new Error("Session is not complete, or invalid booking Id");
    }
    await db.booking.update({
      where: {
        id: bookingId,
      },
      data: {
        paymentStatus: true,
      },
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(null, {
      status: 500,
      statusText: "Internal server error",
    });
  }
  redirect("/bookings");
};
