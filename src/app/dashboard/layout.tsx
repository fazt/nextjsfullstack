import NavbarDashboard from "./components/Navbar";
import SidebarDashboard from "./components/Sidebar";

export default function dashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <NavbarDashboard />
      <SidebarDashboard />
      {children}
    </section>

  )
}
