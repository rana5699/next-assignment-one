import DashboardSidebar from "@/components/ui/dashboard/DashboardSidebar";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";

const DashboardLayout = async ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {

  const session = await getServerSession(authOptions);
  return (
    <div className="min-h-screen flex ">
      {/* Sidebar - Responsive */}
      <aside className="">
        <DashboardSidebar session={session}/>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <main className="p-6 w-full container mx-auto">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
