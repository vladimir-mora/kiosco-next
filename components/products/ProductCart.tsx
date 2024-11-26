import { formatPrice, getImagePath } from "@/src/utils";
import { Product } from "@prisma/client";
import Image from "next/image";
import AddProductButton from "./AddProductButton";

type ProductCartProps = {
  product: Product;
};

export default function ProductCart({ product }: ProductCartProps) {
  const imagePath = getImagePath(product.image);
  return (
    <>
      <div className="border bg-white ">
        <Image src={imagePath} width={400} height={500} alt={product.name} />
        <div className="p-5">
          <h3 className="text-2xl font-bold ">{product.name}</h3>
          <p className="mt-5 font-black text-4xl text-amber-500">
            {formatPrice(product.price)}
          </p>
          <AddProductButton product={product} />
        </div>
      </div>
    </>
  );
}
