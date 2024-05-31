import {transporter } from "@/app/service/sendBookService";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	const data = await req.json();

  try {

    const mail = await transporter.sendMail({
      from: `"${data.name}" <${process.env.NEXT_PUBLIC_NODEMAILER_EMAIL}>`,
      to: process.env.NEXT_PUBLIC_NODEMAILER_EMAIL,
      subject: `Portfolio Message from "${data.name}"`,
      html: data.message
    })
  
  
    return NextResponse.json({ message: "Success: email was sent" })
  
  } catch (error) {
    console.log(error)
    NextResponse.json({ message: "COULD NOT SEND MESSAGE" }, { status: 500 })
  }
  
}

