import { authOptions } from "@/libs/authOptions";
import { getServerSession } from "next-auth";

async function PageProfile() {
  const session = await getServerSession(authOptions);

  return <div>
    profile
  </div>;
}
export default PageProfile;
