'use client'

import { useState } from "react";
import NavbarDashboard from "./components/Navbar";
import SidebarDashboard from "./components/Sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode; }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen">
      <SidebarDashboard isOpen={isSidebarOpen} />
      <div className="flex flex-col flex-grow">
        <NavbarDashboard toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <main className={`bg-gray-100 flex-grow overflow-y-auto p-4 transition-all duration-300 ${isSidebarOpen ? 'ml-0' : 'ml-0'}`}>
          {children}
        </main>
      </div>
    </div>
  );
}
