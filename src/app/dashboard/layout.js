"use client";

import { useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";

export default function DashboardLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar for larger screens */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Sidebar for smaller screens */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 bg-gray-800 bg-opacity-75">
          <Sidebar />
          <button
            className="absolute top-4 right-4 text-white text-2xl"
            onClick={() => setIsSidebarOpen(false)}
          >
            &times;
          </button>
        </div>
      )}

      {/* Toggle Button */}
      <button
        className="hidden fixed top-4 left-4 z-50 bg-blue-600 text-white p-2 rounded"
        onClick={() => setIsSidebarOpen(true)}
      >
        ☰
      </button>

      {/* Main Content */}
      <main className="flex-grow p-6 ml-0 md:ml-64">{children}</main>
    </div>
  );
}
