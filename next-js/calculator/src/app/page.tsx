import CalBtn from "@/components/CalBtn";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import Form from "../components/Form"

export default function Home() {
  let btnstxt = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return (
    <>
      <div className="grid grid-cols-3 w-2/4 m-auto gap-2.5">
        {btnstxt.map((txt) => (
          <CalBtn btnTxt={txt.toString()} />
        ))}
      </div>
      <ContactForm/>
          <Form/>
    </>
  );
}
