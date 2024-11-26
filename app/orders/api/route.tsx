import { prisma } from "@/src/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET() {
  const orders = await prisma.order.findMany({
    take: 6,
    where: {
      oderReadyAt: {
        not: null,
      },
    },
    orderBy: {
      oderReadyAt: "desc",
    },
    include: {
      orderProducts: {
        include: {
          product: true,
        },
      },
    },
  });
  return Response.json(orders);
}
