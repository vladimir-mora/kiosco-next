import AddProductForm from "@/components/products/AddProductForm";
import ProductForm from "@/components/products/ProducForm";
import Heading from "@/components/ui/Heading";
import React from "react";

export default function page() {
  return (
    <>
      <Heading>Crear Producto</Heading>
      <AddProductForm>
        <ProductForm />
      </AddProductForm>
    </>
  );
}
