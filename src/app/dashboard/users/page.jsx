"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { GiReturnArrow } from "react-icons/gi";
import { MdAdminPanelSettings } from "react-icons/md";
import { FaUsers } from "react-icons/fa";

export default function UsersPage() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users/all-users`);
                if (!response.ok) {
                    throw new Error("Failed to fetch users");
                }
                const data = await response.json();
                setUsers(data.data); // Assuming the API returns { success: true, data: [...] }
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading) {
        return <div className="p-4 md:p-8">Loading...</div>;
    }

    if (error) {
        return <div className="p-4 md:p-8 text-red-600">Error: {error}</div>;
    }

    return (
        <div className="p-4 md:p-8">
            <h1 className="text-xl md:text-2xl font-bold mb-6">User List</h1>
            <div className="hidden md:block">
                <table className="table-fixed min-w-full border-collapse bg-white rounded-lg shadow-md">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="w-1/4 px-2 md:px-4 py-2 text-left text-sm md:text-base">Name</th>
                            <th className="w-1/3 px-2 md:px-4 py-2 text-left text-sm md:text-base">Email</th>
                            <th className="w-1/6 px-2 md:px-4 py-2 text-left text-sm md:text-base">Role</th>
                            <th className="w-1/6 px-2 md:px-4 py-2 text-left text-sm md:text-base">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user._id} className="border-t">
                                <td className="px-2 md:px-4 py-2 text-sm md:text-base truncate">{user.name}</td>
                                <td className="px-2 md:px-4 py-2 text-sm md:text-base truncate">{user.email}</td>
                                <td className="px-2 md:px-4 py-2 text-sm md:text-base">
                                    {user.role === "Admin" ? (
                                        <MdAdminPanelSettings className="text-2xl text-blue-600" />
                                    ) : (
                                        <FaUsers className="text-2xl text-blue-600" />
                                    )}
                                </td>
                                <td className="px-2 md:px-4 py-2">
                                    <div className="dropdown dropdown-end">
                                        <div tabIndex={0} role="button" className="btn btn-xs md:btn-sm m-1">Click</div>
                                        <ul
                                            tabIndex={0}
                                            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-44 p-2 shadow"
                                        >
                                            <li className="btn btn-xs md:btn-sm btn-primary">Admin</li>
                                            <li className="btn btn-xs md:btn-sm btn-primary mt-2">Moderator</li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="md:hidden">
                {users.map((user) => (
                    <div
                        key={user._id}
                        className="bg-white shadow-md rounded-lg p-4 mb-4 flex flex-col gap-2"
                    >
                        <div>
                            <span className="font-bold">Name:</span> {user.name}
                        </div>
                        <div>
                            <span className="font-bold">Email:</span> {user.email}
                        </div>
                        <div>
                            <span className="font-bold">Role:</span>{" "}
                            {user.role === "Admin" ? (
                                <MdAdminPanelSettings className="inline text-2xl text-blue-600" />
                            ) : (
                                <FaUsers className="inline text-2xl text-blue-600" />
                            )}
                        </div>
                        <div>
                            <button className="btn btn-xs btn-primary">Admin</button>
                            <button className="btn btn-xs btn-secondary ml-2">Moderator</button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-end items-center pt-6 text-red-600">
                <Link href="/dashboard" className="flex items-center gap-1 text-sm md:text-base">
                    Go Back <GiReturnArrow className="text-red-600 text-lg md:text-2xl" />
                </Link>
            </div>
        </div>
    );
}
