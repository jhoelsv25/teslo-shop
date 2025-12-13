"use client";

import { Product } from "@/types/product.types";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Props {
  product: Product;
}

export function ProductGridItem({ product }: Props) {
  const [image, setImage] = useState(product.images[0]);
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block"
      onMouseEnter={() => setImage(product.images[1] || product.images[0])}
      onMouseLeave={() => setImage(product.images[0])}
    >
      <div className="rounded-md overflow-hidden fade-in">
        <Image
          src={`/products/${image}`}
          alt={product.title}
          className="w-full  object-cover mb-4 transition-transform duration-300 hover:scale-105 rounded-md"
          width={500}
          height={500}
        />
        <div className=" p-4 flex flex-col">
          <h3 className="text-sm font-semibold mb-2 group-hover:underline group-hover:text-foreground">{product.title}</h3>
          <span className="text-xl font-bold">${product.price.toFixed(2)}</span>
        </div>
      </div>
    </Link>
  );
}
