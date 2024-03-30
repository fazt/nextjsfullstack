import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { Button, Card, Input, Label } from "@/components/ui";


export const metadata: Metadata = {
  title: "Contact Page",
  description: "Contact Page generated by create next app",
};


function contactPage() {
  return (
    <section>
    <Navbar />
      <div>
        contactPage
      </div>
    </section>
  );
}
export default contactPage;