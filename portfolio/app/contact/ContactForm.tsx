"use client";

import axios from "axios";
import { useState } from "react";
import { RiLoader5Fill } from "react-icons/ri";
import { validate } from "../../utils/validate";
import Input from "./Input";
import TextArea from "./TextArea";
import toast from "react-hot-toast";
import { Within } from "@theme-toggles/react";
interface IValues {
  name: string;
  email: string;
  message: string;
}
interface IErrors extends Partial<IValues> {}
const ContactForm = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<IErrors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [messageState, setMessageState] = useState("");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validate(values);
    if (errors && Object.keys(errors).length > 0) {
      return setErrors(errors);
    }
    setErrors({});
    setLoading(true);
    axios
      .post("/api/contact", {
        name: values.name,
        email: values.email,
        message: values.message,
      })
      .then((res) => {
        if (res.status === 200) {
          setValues({ name: "", email: "", message: "" });
          setLoading(false);
          setSuccess(true);
          setMessageState(res.data.message);
          toast.success("Your message was sent. I'll be in contact shortly.");
        } else {
          setLoading(false);
          setMessageState(res.data.message);
          toast.custom(res.data.message);
        }
      })
      .catch((err) => {
        setLoading(false);
        setMessageState(String(err.message));
        toast.error(err.message);
      });
    setLoading(false);
  };
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setValues((prevInput) => ({
      ...prevInput,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <Input
        value={values.name}
        onChange={handleChange}
        id="name"
        name="name"
        label="Your Name"
        placeholder="John Doe"
        error={!!errors.name}
        errorMessage={!!errors.name ? errors.name : ""}
      />
      <Input
        value={values.email}
        onChange={handleChange}
        id="email"
        name="email"
        label="Your Email"
        placeholder="you@example.com"
        error={!!errors.email}
        errorMessage={!!errors.email ? errors.email : ""}
      />
      <TextArea
        value={values.message}
        onChange={handleChange}
        id="message"
        name="message"
        label="Your Message"
        placeholder="Your message here..."
        error={!!errors.message}
        errorMessage={!!errors.message ? errors.message : ""}
      />
      <button
        className="bg-[#262F45] rounded-md 
              border border-solid border-[#7AA0F7]  
              text-[#5686f5] font-semibold text-sm leading-5 
              py-3 px-4 
              text-center 
              glow-on-hover
              w-full"
        type="submit"
        disabled={loading}
      >
        {loading !== true ? (
          "Submit message"
        ) : (
          <div className="flex h-full w-full items-center justify-center ">
            <RiLoader5Fill className="h-8 w-8 animate-spin" />
          </div>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
