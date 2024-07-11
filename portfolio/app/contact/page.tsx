"use client"
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <main className="flex flex-col items-center justify-center gap-12">
      <div
        className="
        flex flex-col 
        w-full max-w-4xl
        items-center justify-center 
        font-bold text-3xl
        mt-[8rem]
        md:mt-[12rem]
        text-violet-50
        md:items-start
        "
      >
        <div>
          <h1>Contact</h1>
        </div>
      </div>
      <div className="flex w-full flex-col justify-center max-w-4xl space-y-5 p-6 md:p-0">
        <ContactForm />
      </div>
    </main>
  );
};

export default Contact;
