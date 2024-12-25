import Link from "next/link";

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="All Orders" link="/dashboard/orders" />
        <Card title="All Products" link="/dashboard/products" />
        <Card title="User List" link="/dashboard/users" />
        <Card title="Upload A Product" link="/dashboard/uploadProduct" />
      </div>
    </div>
  );
}

function Card({ title, link }) {
  return (
    <Link href={link}>
      <div className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm text-gray-500">Manage {title.toLowerCase()}</p>
      </div>
    </Link>
  );
}
