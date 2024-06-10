import { getCurrentUserInfo } from "@/auth/utils";
import { updateUserFolders } from "@/services/user";
import { sendMsg } from "@/utils";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(request: NextRequest) {
  const user = await getCurrentUserInfo();
  if (!user) return sendMsg.error("", 401);
  const data: string[] = await request.json();
  try {
    const res = await updateUserFolders(user.username, data);
    revalidatePath(`/manage-backlogs`);
    return NextResponse.json({ message: "updated", res }, { status: 200 });
  } catch (error) {
    return sendMsg.error(error);
  }
}