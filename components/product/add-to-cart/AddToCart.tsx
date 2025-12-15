"use client";

import { useCartStore } from "@/store/cart-store";
import { Product } from "@/types/product.types";
import { useState } from "react";

interface Props {
  product: Product;
  quantity?: number;
  label: string;
}

export function AddToCart({ product, quantity = 1, label='Agregar al carrito' }: Props) {
  const AddTocart = useCartStore((prev) => prev.AddToCart);
  const [displayTitle, setDisplayTitle] = useState(label)
  return (
    <button
      onClick={() => AddTocart({ ...product, quantity })}
      className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded transition-colors w-full md:w-auto px-8 cursor-pointer"
      onMouseEnter={() => setDisplayTitle('Agregar al carrito')}
      onMouseLeave={() => setDisplayTitle(label)}
    >
      {displayTitle}
    </button>
  );
}
