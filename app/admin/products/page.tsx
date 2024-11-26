import ProducstPagination from "@/components/products/ProducstPagination";
import ProductSearchForm from "@/components/products/ProductSearchForm";
import ProductTable from "@/components/products/ProductsTable";
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";
import Link from "next/link";
import { redirect } from "next/navigation";

async function productCount() {
  return prisma.product.count();
}

async function getProducts(page: number, pageSize: number) {
  const skip = (page - 1) * pageSize;
  return prisma.product.findMany({
    take: pageSize,
    skip,
    include: {
      category: true,
    },
  });
}

export type ProductsWithCategory = Awaited<ReturnType<typeof getProducts>>;

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Record<string, string | undefined>;
}) {
  const pageParam = (await searchParams)?.page || "1";
  const page = parseInt(pageParam, 10);

  if (isNaN(page) || page < 1) {
    redirect(`/admin/products`);
  }

  const pageSize = 10;

  const [products, totalProducts] = await Promise.all([
    getProducts(page, pageSize),
    productCount(),
  ]);

  const totalPages = Math.ceil(totalProducts / pageSize);

  if (page > totalPages) {
    redirect(`/admin/products`);
  }

  return (
    <>
      <Heading>Administrar Productos</Heading>
      <div className="flex flex-col lg:flex-row lg:justify-between gap-5">
        <Link
          href="/admin/products/new"
          className="bg-amber-400 w-full lg:w-auto text-xl px-10 py-3 text-center font-bold cursor-pointer"
        >
          Crear Producto
        </Link>
        <ProductSearchForm />
      </div>
      <ProductTable products={products} />
      <ProducstPagination page={page} totalPages={totalPages} />
    </>
  );
}
