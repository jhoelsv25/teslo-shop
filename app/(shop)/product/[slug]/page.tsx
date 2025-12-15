import { initialData } from "@/database/seed/product";
import { notFound } from "next/navigation";
import Image from "next/image";
import { QuantitySelector } from "@/components/product/quantity-selector/QauntitySelector";
import { AddToCart } from "@/components/product/add-to-cart/AddToCart";

interface ProductPageProps {
  params: {
    slug: string;
  };
}
const products = initialData.products;
export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) {
    return notFound();
  }
  // UI: slider de imágenes y detalles a la derecha
  return (
    <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto py-10 px-4">
      {/* Slider de imágenes */}
      <div className="flex-1 flex flex-col items-center">
        <div className="w-full max-w-md aspect-square relative">
          <Image
            src={`/products/${product.images[0]}`}
            alt={product.title}
            fill
            className="object-contain rounded-lg bg-gray-100"
            priority
          />
        </div>
        <div className="flex gap-2 mt-4">
          {product.images.map((img) => (
            <div
              key={img}
              className="w-16 h-16 relative border rounded overflow-hidden bg-gray-50"
            >
              <Image
                src={`/products/${img}`}
                alt={product.title}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
      {/* Detalles del producto */}
      <div className="flex-1 flex flex-col justify-center">
        <h1 className="text-2xl font-bold mb-2 text-gray-800">
          {product.title}
        </h1>
        <p className="text-gray-500 mb-2 capitalize">
          {product.gender} / {product.type}
        </p>
        <p className="text-lg font-semibold text-green-600 mb-4">
          ${product.price}
        </p>
        <div className="mb-4">
          <span className="font-semibold">Tallas:</span>
          <div className="flex gap-2 mt-1">
            {product.sizes.map((size) => (
              <span
                key={size}
                className="px-3 py-1 border rounded cursor-pointer bg-gray-50 hover:bg-green-100 text-gray-700 text-sm"
              >
                {size}
              </span>
            ))}
          </div>
        </div>
        <QuantitySelector quantity={product.inStock || 1} />
        <p className="mb-6 text-gray-700">{product.description}</p>
        <AddToCart product={product} label="Agregar al carrito" quantity={1} />
        <p className="mt-4 text-xs text-gray-400">
          Stock disponible: {product.inStock}
        </p>
      </div>
    </div>
  );
}