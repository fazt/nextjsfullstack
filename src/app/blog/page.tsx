import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { Button, Card, Input, Label } from "@/components/ui";

export const metadata: Metadata = {
  title: "Blog Page",
  description: "Blog Page generated by create next app",
};

function blogPage() {
  return (
    <section>
    <Navbar />
      <div>
        blogPage
      </div>
    </section>
  );
}
export default blogPage;