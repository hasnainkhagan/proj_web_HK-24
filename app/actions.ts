"use server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import prisma from "./lib/db";

export async function postData(formData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    throw new Error("Unauthorized");
  }

  const message = formData.get("message") as string;

  const data = await prisma.gBEntry.create({
    data: {
      userId: user.id,
      message: message,
    },
  });
}
