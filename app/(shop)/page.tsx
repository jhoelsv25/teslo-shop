import { Title } from "@/components";
import { ProductGrid } from "@/components/products/ProductGrid";
import { initialData } from "@/database/seed/product";

const products = initialData.products;  
export default function Home() {
  return (
    <>
      <Title title="Teslo | Shop" subtitle="Todos los productos" className="my-custom-class" />
      <ProductGrid products={products} />
    </>
  );
}
