import { notFound } from "next/navigation";

interface CategoryPageProps {
  params: {
    id: string;
  };
}
export default async function CategoryPage({ params }: CategoryPageProps) {
  const { id } = await params;
  console.log({ id });
  const validCategories = ["men", "women", "kids"];
  if (!validCategories.includes(id)) {
    notFound();
  }

  return (
    <div>
      <h1>Category: {id}</h1>
      <p>Display products for the {id} category here.</p>
    </div>
  );
}
