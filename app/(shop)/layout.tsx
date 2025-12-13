import { Header, Sidebar } from "@/components";

export default function ShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="  min-h-screen">
    <Header />
    <Sidebar />
    {children}
  </main>;
}