import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import twilio from 'twilio';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, cakeName, cakeImageUrl, weight, message, deliveryDate } = body;

    // 1. Save the order in the database
    const order = await prisma.order.create({
      data: {
        customerName: name,
        phone,
        cakeName,
        cakeImageUrl: cakeImageUrl || null,
        weight,
        cakeMessage: message || null,
        deliveryDate,
      },
    });

    // 2. Format the WhatsApp message (matching requested template)
    const whatsappMessage = `
🔔 *NEW ORDER RECEIVED*

👤 *Customer Details*
Name: ${name}
Phone: ${phone}

🎂 *Order Details*
Cake: ${cakeName}
Weight: ${weight}
Cake Message: ${message || "None"}

🚚 *Delivery*
Date: ${deliveryDate}
Time: To be confirmed

💳 *Payment*
Amount: ₹${order.amount}
Status: ${order.status}

🆔 *Order ID:* #${order.id}
    `.trim();

    // 3. Send WhatsApp message using Twilio
    // Note: You must configure these environment variables in your .env file
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const twilioWhatsAppNumber = process.env.TWILIO_WHATSAPP_NUMBER; // e.g., 'whatsapp:+14155238886'
    const bakeryOwnerNumber = process.env.BAKERY_OWNER_NUMBER; // e.g., 'whatsapp:+919876543210'

    if (accountSid && authToken && twilioWhatsAppNumber && bakeryOwnerNumber) {
      const client = twilio(accountSid, authToken);
      
      const messageParams: any = {
        body: whatsappMessage,
        from: twilioWhatsAppNumber,
        to: bakeryOwnerNumber,
      };

      // Attach the cake image as a media message if it exists
      if (cakeImageUrl) {
        // Twilio expects a valid absolute URL for mediaUrl
        messageParams.mediaUrl = [cakeImageUrl];
      }

      await client.messages.create(messageParams);
      console.log(`WhatsApp message sent for order ${order.id}`);
    } else {
      console.warn("Twilio credentials not found in environment variables. Skipping WhatsApp notification.");
    }

    return NextResponse.json({ success: true, orderId: order.id }, { status: 200 });
  } catch (error) {
    console.error("Failed to process order:", error);
    return NextResponse.json({ success: false, error: "Failed to process order" }, { status: 500 });
  }
}
