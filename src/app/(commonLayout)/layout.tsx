import { Navbar } from "@/components/Shared/Navbar";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";

const CommonLayout = async ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <Navbar session={session} />
      <section> {children}</section>
    </div>
  );
};

export default CommonLayout;
