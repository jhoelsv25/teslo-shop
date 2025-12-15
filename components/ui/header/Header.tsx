"use client";

import { useUiStore } from "@/store";
import { useCartStore } from "@/store/cart-store";
import Link from "next/link";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";
export function Header() {
  const isMenuOpen = useUiStore((state) => state.isSideMenuOpen);
  const toggleMenu = useUiStore((state) => state.openSideMenu);
  const productsInCart = useCartStore((state) => state.productsInCart);
  return (
    <header className=" flex px-5 py-3 justify-between items-center w-full">
      <div>
        <Link href="/" className="text-2xl font-bold flex items-center gap-1">
          <h1>Shop</h1> |<strong className="text-green-500">Teslo</strong>
        </Link>
      </div>
      <div className="hidden md:flex gap-4">
        <Link href="/category/men" className="text-lg hover:text-green-500">
          Hombre
        </Link>
        <Link href="/category/women" className="text-lg hover:text-green-500">
          Mujeres
        </Link>
        <Link href="/category/kid" className="text-lg hover:text-green-500">
          Niños
        </Link>
      </div>
      <div className="flex items-center">
        <Link href="/search" className="text-lg">
          <IoSearchOutline className="text-gray-500 size-5" />
        </Link>
        <Link href="/cart" className="ml-4 text-lg ">
          <div className="relative">
            <IoCartOutline className="text-gray-500 size-5 relative" />
            <span className="absolute -top-4 -right-2 font-bold text-xs z-10 bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
              {productsInCart.length}
            </span>
          </div>
        </Link>
        <button
          className="ml-4 flex items-center text-sm bg-green-500 text-white rounded-md px-2 py-1 cursor-pointer"
          onClick={toggleMenu}
        >
          <span>{isMenuOpen ? "Cerrar menú" : "Abrir menú"}</span>
        </button>
      </div>
    </header>
  );
}
