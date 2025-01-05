import Link from "next/link";
import { GiReturnArrow } from "react-icons/gi";

export default function UsersPage() {
    const users = [
        { id: 1, name: "John Doe", email: "john@example.com" },
        { id: 2, name: "Jane Smith", email: "jane@example.com" },
    ];

    return (
        <div>
            <h1 className="text-2xl font-bold mb-6">User List</h1>
            <table className="w-full border-collapse bg-white rounded-lg shadow-md">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="px-4 py-2 text-left">Name</th>
                        <th className="px-4 py-2 text-left">Email</th>
                        <th className="px-4 py-2 text-left">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id} className="border-t">
                            <td className="px-4 py-2">{user.name}</td>
                            <td className="px-4 py-2">{user.email}</td>
                            <td className="px-4 py-2">
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn m-1">Click</div>
                                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                        <li className="btn btn-sm btn-primary  ">Admin</li>
                                        <li className="btn btn-sm btn-primary mt-5">Admin</li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex justify-end items-center pt-10 text-red-600">
                <Link href="/dashboard">
                    Go Back <span><GiReturnArrow className="text-red-600 text-2xl" /></span>
                </Link>
            </div>
        </div>
    );
}
