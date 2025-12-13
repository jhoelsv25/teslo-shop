import { Product } from "@/types/product.types";
import { ProductGridItem } from "./ProductGridItem";
interface Props {
    products: Product[];
}


export function ProductGrid({ products }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductGridItem key={product.slug} product={product} />
      ))}
    </div>
  );
}