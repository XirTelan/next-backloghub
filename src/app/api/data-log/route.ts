import { sendContactForm } from "@/services/log";
import { sendMsg } from "@/utils";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const data = await request.json();
  try {
    const res = await sendContactForm(data);
    if (res.isSuccess) return NextResponse.json("Success", { status: 200 });
  } catch (error) {
    return sendMsg.error(error);
  }
}
