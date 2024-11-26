"use client";

import { useStore } from "@/src/store";
import { Product } from "@prisma/client";

type ProductCartProps = {
  product: Product;
};

export default function AddProductButton({ product }: ProductCartProps) {
  const addToCart = useStore((state) => state.addToCart);
  return (
    <button
      className="bg-indigo-600 hover:bg-indigo-800 text-white mt-5 p-3 w-full uppercase font-bold cursor-pointer"
      type="button"
      onClick={() => addToCart(product)}
    >
      Agregar
    </button>
  );
}
