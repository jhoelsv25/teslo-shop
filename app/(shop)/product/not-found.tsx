import { ProductGrid } from "@/components";
import { initialData } from "@/database/seed/product";
import { IoAlertCircleOutline } from "react-icons/io5";

export default function NotFound() {
  const products = initialData.products.slice(0, 4); // Ejemplo: tomar los primeros 4 productos como recomendados
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <IoAlertCircleOutline size={60} className="text-red-400 mb-4" />
      <h1 className="text-2xl font-bold mb-2 text-gray-800">
        Producto no encontrado
      </h1>
      <p className="mb-6 text-gray-600">
        Lo sentimos, no pudimos encontrar el producto que estás buscando.
      </p>
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-4">
        <h2 className="text-lg font-semibold mb-4 text-green-700">
          Te recomendamos estos productos:
        </h2>
        <main>
          <ProductGrid products={products} />
        </main>
      </div>
    </div>
  );
}

