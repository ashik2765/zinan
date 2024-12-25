import Link from "next/link";

const Sidebar = () => {
  const menuItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "All Orders", path: "/dashboard/orders" },
    { name: "All Products", path: "/dashboard/products" },
    { name: "User List", path: "/dashboard/users" },
  ];

  return (
    <aside className="w-64 bg-gray-800 text-white h-screen p-4 fixed">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">Admin Panel</h1>
      </div>
      <nav>
        <ul className="space-y-4">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.path}
                className="block p-2 rounded hover:bg-gray-700 hover:text-white transition"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
