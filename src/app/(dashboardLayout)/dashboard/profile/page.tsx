import { authOptions } from "@/libs/authOptions";
import { getServerSession } from "next-auth";

export const dynamic = "force-dynamic";

async function PageProfile() {
  const session = await getServerSession(authOptions);

  return (
    <div className="text-center py-10">
       <h1 className="text-2xl text-white font-bold">{session?.user?.name}</h1>
       <h2 className="text-2xl text-white font-bold">{session?.user?.email}</h2>
    </div>
  )
}
export default PageProfile;
