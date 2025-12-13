interface ShopLayoutProps {
  params: {
    id: string;
  };
}


export default function ShopLayout({ params }: ShopLayoutProps ) {
  const { id } = params;
  return (
    <div>
      <h1>Order Details for Order ID: {id}</h1>
      <p>Display order information and status here.</p>
    </div>
  );
}
