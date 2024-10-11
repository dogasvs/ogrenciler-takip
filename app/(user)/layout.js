import Header from "@/components/header";

export default function AdminLayout({ children }) {
  return (
    <html lang="en">
        <Header />
        {children}
    </html>
  );
}