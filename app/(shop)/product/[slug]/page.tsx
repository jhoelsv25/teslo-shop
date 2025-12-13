
interface ProductPageProps {
  params: {
    slug: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const { slug } = params;

  return (
    <div>
      <h1>Product: {slug}</h1>
      <p>Display product details for {slug} here.</p>
    </div>
  );
}