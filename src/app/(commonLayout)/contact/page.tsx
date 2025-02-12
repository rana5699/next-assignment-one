import Contact from "@/components/ui/conatct/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Contact",
};

const ContactPage = () => {
  return (
    <div>
      <Contact />
    </div>
  );
};

export default ContactPage;
