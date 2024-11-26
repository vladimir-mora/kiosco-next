import ProductCart from "@/components/products/ProductCart";
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";

async function getProducts(category: string) {
  const products = await prisma.product.findMany({
    where: {
      category: {
        slug: category,
      },
    },
  });
  return products;
}

export default async function OrderPage({
  params,
}: {
  params: { category: string };
}) {
  const { category } = await Promise.resolve(params);
  const products = await getProducts(category);

  return (
    <>
      <Heading>Elige y personaliza tu pedido a continuacion</Heading>
      <div className="grid grid-cols-1  xl:grid-cols-2 2xl:grid-cols-3  gap-4 items-start">
        {products.map((product) => (
          <ProductCart key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
