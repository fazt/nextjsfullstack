import Sidebar from "@/components/dashboard/Sidebar";

interface Props {
  children: React.ReactNode;
}

function DashboardLayout({ children }: Props) {
  return (
    <div className="flex gap-x-2">
      <Sidebar />
      {children}
    </div>
  );
}

export default DashboardLayout;
