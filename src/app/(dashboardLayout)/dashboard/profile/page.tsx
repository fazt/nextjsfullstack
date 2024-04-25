import { Avatar } from "@/components/ui";
import { authOptions } from "@/libs/authOptions";
import { getServerSession } from "next-auth";

export const dynamic = "force-dynamic";

async function PageProfile() {
  const session = await getServerSession(authOptions);

  return (
    <div className="text-center py-10">
       <h1 className="text-2xl text-white font-bold">{session?.user?.name}</h1>
       <h2 className="text-2xl text-white font-bold mb-4">{session?.user?.email}</h2>
       <Avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
    </div>
  )
}
export default PageProfile;
