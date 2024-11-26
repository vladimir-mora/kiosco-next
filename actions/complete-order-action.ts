"use server";

import { prisma } from "@/src/lib/prisma";
import { revalidatePath } from "next/cache";

export async function completeOrder(formData: FormData) {
  const orderId = formData.get("orderId")!;
  try {
    await prisma.order.update({
      where: {
        id: +orderId,
      },
      data: {
        status: true,
        oderReadyAt: new Date(Date.now()),
      },
    });
    revalidatePath("/admin/orders");
  } catch (error) {
    console.log(error);
  }
}
