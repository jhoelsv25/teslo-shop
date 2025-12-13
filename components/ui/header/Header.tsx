import Link from "next/link";
import { IoCartOutline,  IoMenuOutline, IoSearchOutline } from "react-icons/io5";
export function Header() {
  return (
    <header className=" flex px-5 py-3 justify-between items-center w-full">
      <div>
        <Link href="/" className="text-2xl font-bold">
          <h1>Shop Teslo</h1>
        </Link>
      </div>
      <div className="hidden md:flex gap-4">
        <Link href="/category/men" className="text-lg">
          Hombre
        </Link>
        <Link href="/category/women" className="text-lg">
          Mujeres
        </Link>
        <Link href="/category/kids" className="text-lg">
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
            <span className="absolute -top-4 -right-2 font-bold text-xs z-10 bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center">0</span>
          </div>
        </Link>
        <button className="ml-4 text-lg">
          <IoMenuOutline className="text-gray-500 size-5" />
        </button>
      </div>
    </header>
  );
}
