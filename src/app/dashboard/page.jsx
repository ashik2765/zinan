"use client";


import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return; // Ensure router is ready
  }, [router]);

  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Admin Dashboard
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            className="p-6 bg-blue-500 text-white rounded-lg shadow-md cursor-pointer hover:bg-blue-600"
            onClick={() => handleNavigation("/dashboard/uploadData")}
          >
            <h2 className="text-xl font-semibold text-center">Upload New Data</h2>
          </div>

          <div
            className="p-6 bg-yellow-500 text-white rounded-lg shadow-md cursor-pointer hover:bg-yellow-600"
            onClick={() => handleNavigation("/dashboard/updateData")}
          >
            <h2 className="text-xl font-semibold text-center">Update Data</h2>
          </div>

          <div
            className="p-6 bg-red-500 text-white rounded-lg shadow-md cursor-pointer hover:bg-red-600"
            onClick={() => handleNavigation("/dashboard/DeleteData")}
          >
            <h2 className="text-xl font-semibold text-center">Delete Data</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
