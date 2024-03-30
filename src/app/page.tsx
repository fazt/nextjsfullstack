import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Home Page",
  description: "Home Page generated by create next app",
};

function homePage() {
  return (
    <section>
      <Navbar />
      <div>
        homePage
      </div>
    </section>
  )
}
export default homePage