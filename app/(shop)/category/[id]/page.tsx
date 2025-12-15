import { ProductGrid, Title } from "@/components";
import { initialData, ValidGenders } from "@/database/seed/product";
import { notFound } from "next/navigation";

interface CategoryPageProps {
  params: {
    id: ValidGenders;
  };
}
export default async function CategoryPage({ params }: CategoryPageProps) {
  const { id } = await params;

  const validCategories = ["men", "women", "kid"];
  if (!validCategories.includes(id)) {
    notFound();
  }
  const products = initialData.products.filter(
    (product) => product.gender === id
  );
  const label: Record<ValidGenders, string> = {
    men: "Hombres",
    women: "Mujeres",
    kid: "Niños",
    unisex: "Unisex",
  };
  return (
    <div>
      <Title
        title={`Productos de : ${label[id]}`}
        subtitle={`Encuentra los mejores productos para ${label[id]}`}
      />
      <ProductGrid products={products} />
    </div>
  );
}
