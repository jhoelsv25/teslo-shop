import Link from "next/link";

export function PageNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl">Page Not Found</p>

      <Link href="/" className="mt-6 px-4 py-2 bg-green-500 text-white rounded font-semibold hover:bg-green-600 transition">
       Ir a la página principal
      </Link>
    </div>
  );
}