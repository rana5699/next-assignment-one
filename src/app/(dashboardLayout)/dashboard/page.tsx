
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import DashboardHome from "@/components/ui/dashboard/DashboardHome";

const DashboardPage =async () => {
  const session = await getServerSession(authOptions);

  return (
    <>
      <div className="">
      <DashboardHome user={session?.user} />
      </div>
    </>
  );
};

export default DashboardPage;
