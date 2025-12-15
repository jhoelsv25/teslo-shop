"use client";

import { Product } from "@/types/product.types";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AddToCart } from "../product/add-to-cart/AddToCart";

interface Props {
  product: Product;
}

export function ProductGridItem({ product }: Props) {
  const [image, setImage] = useState(product.images[0]);
  return (
    <div className="rounded-md overflow-hidden fade-in p-4 flex flex-col w-full">
      <Link
        href={`/product/${product.slug}`}
        className="group block"
        onMouseEnter={() => setImage(product.images[1] || product.images[0])}
        onMouseLeave={() => setImage(product.images[0])}
      >
        <Image
          src={`/products/${image}`}
          alt={product.title}
          className="w-full object-cover mb-4 transition-transform duration-300 hover:scale-105 rounded-md"
          width={500}
          height={500}
        />
        <h3 className="text-sm font-semibold mb-2 group-hover:underline group-hover:text-green-500">
          {product.title}
        </h3>
      </Link>
      <AddToCart product={product} label={`$${product.price}`} />
    </div>
  );
}
