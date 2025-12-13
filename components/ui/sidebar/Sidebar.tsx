import Link from "next/link";
import { IoCloseCircle, IoCloseCircleOutline, IoCloseOutline, IoPersonOutline, IoLogInOutline, IoLogOutOutline, IoBagOutline, IoListOutline, IoPeopleOutline } from "react-icons/io5";

export function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-lg fixed top-0 right-0 h-full z-20">
          {/* background black */}
          <div className="fixed inset-0 z-10 bg-black opacity-30"></div>
          {/* BLUR */}
          <div className="fixed inset-0 z-10 backdrop-blur-xs backdrop-filter"></div>
        {/* Sidebar content */}
        <nav className="fixed p-5 top-0 right-0 w-125 h-screen bg-white  overflow-y-auto transform transition-all duration-300 ease-in-out z-20">
          
          <header className="flex items-center justify-end mb-4">
            <button>
                <IoCloseOutline size={30} />
            </button>
          </header>
          {/* search input */}
          <div className="mt-2">
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-2 bg-green-50 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* menú de usuario */}
          <ul className="mt-6 space-y-4">
            <li className="flex items-center">
              <Link href="/profile" className="w-full text-gray-700 hover:text-green-500 hover:bg-green-50 flex items-center rounded-md px-2 py-2 transition-colors">
              <IoPersonOutline size={20} className="inline mr-2" />
                Mi Perfil
              </Link>
            </li>
            <li className="flex items-center">
              <Link href="/login" className="w-full text-gray-700 hover:text-green-500 hover:bg-green-50 flex items-center rounded-md px-2 py-2 transition-colors">
                <IoLogInOutline size={20} className="inline mr-2" />
                Ingresar
              </Link>
            </li>
            <li className="flex items-center">
              <button className="w-full flex items-center justify-center text-gray-700 hover:text-white hover:bg-red-500 rounded-md py-2 transition-colors">
                <IoLogOutOutline size={20} className="inline mr-2" />
                Salir
              </button>
            </li>
          </ul>
          <hr className="my-6 border-gray-200" />
          {/* menú de administración */}
          <ul className="space-y-4">
            <li className="flex items-center">
              <Link href="/admin/products" className="w-full text-gray-700 hover:text-green-500 hover:bg-green-50 flex items-center rounded-md px-2 py-2 transition-colors">
                <IoBagOutline size={20} className="inline mr-2" />
                Productos
              </Link>
            </li>
            <li className="flex items-center">
              <Link href="/admin/orders" className="w-full text-gray-700 hover:text-green-500 hover:bg-green-50 flex items-center rounded-md px-2 py-2 transition-colors">
                <IoListOutline size={20} className="inline mr-2" />
                Órdenes
              </Link>
            </li>
            <li className="flex items-center">
              <Link href="/admin/users" className="w-full text-gray-700 hover:text-green-500 hover:bg-green-50 flex items-center rounded-md px-2 py-2 transition-colors">
                <IoPeopleOutline size={20} className="inline mr-2" />
                Usuarios
              </Link>
            </li>
          </ul>
        </nav>
    </aside>
  );
}
