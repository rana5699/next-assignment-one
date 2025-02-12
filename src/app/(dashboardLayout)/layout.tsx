import DashboardSidebar from "@/components/ui/dashboard/DashboardSidebar";

const DashboardLayout = async ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="min-h-screen flex ">
      {/* Sidebar - Responsive */}
      <aside className="">
        <DashboardSidebar />
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <main className="p-6 w-full container mx-auto">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
