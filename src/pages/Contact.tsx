import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import contactBanner from "../images/contact.png";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";
import toast, { Toaster } from "react-hot-toast";
import useContactPetCares from "../customHooks/contactPetCares";
interface petCaresContect {
  name: string;
  email: string;
  phone: string;
  enquriyAbout: string;
  enquriyIs: string;
}
const url = process.env.REACT_APP_URL as string;

function Contact() {
  const [contectPetCares, setContactPetCares] = useState<petCaresContect>({
    name: "",
    email: "",
    phone: "",
    enquriyAbout: "",
    enquriyIs: "",
  });

  const handelChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setContactPetCares({
      ...contectPetCares,
      [e.target.name]: e.target.value,
    });
  };
  const { contactPetCares } = useContactPetCares({
    url,
    name: contectPetCares.name,
    email: contectPetCares.email,
    phone: contectPetCares.phone,
    enquriyAbout: contectPetCares.enquriyAbout,
    enquriyIs: contectPetCares.enquriyIs,
  });
  const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!contectPetCares.name) {
      toast.error("Please enter name");
    } else if (!contectPetCares.email) {
      toast.error("Please enter email");
    } else if (
      !contectPetCares.phone &&
      !contectPetCares.phone.match(/^[1-9]\d{9}$|^(?!0{10})\d{10}$/)
    ) {
      toast.error("please enter phone number");
    } else if (!contectPetCares.enquriyAbout) {
      toast.error("Enter what is your enquiry about");
    } else if (!contectPetCares.enquriyIs) {
      toast.error("Enter what is your enquiry ");
    } else {
      contactPetCares();
      setContactPetCares({
        name: "",
        email: "",
        phone: "",
        enquriyAbout: "",
        enquriyIs: "",
      });
    }
  };
  return (
    <>
      <Header />
      <section
        className="bg-[#5EAE46] h-96 max-[650px]:h-56 flex overflow-hidden justify-between max-[650px]:justify-normal
       object-cover relative text-white font-Nunito"
      >
        <section
          className=" py-24 px-20  mb-28  max-[650px]:pl-8 max-[650px]:pr-0
        max-[650px]:py-14 max-[650px]:mb-0 max-[400px]:py-14 max-[650px]:absolute"
        >
          <h1 className="font-semibold tracking-wider text-lg max-[650px]:text-sm">
            <Link to="/">Home </Link>/ Contact Us
          </h1>
          <h3 className=" font-bold text-4xl tracking-wide max-[650px]:text-2xl mt-2">
            Contact Us
          </h3>
        </section>
        <img
          src={contactBanner}
          alt=""
          className=" object-cover max-[850px]:w-[55%] max-[650px]:w-full py-8 max-[650px]:py-0 "
        />
      </section>
      <section className=" bg-[#EEEEEE] font-Nunito p-8 max-[850px]:px-14 max-[650px]:px-6">
        <section className=" flex gap-7 drop-shadow-lg max-[850px]:flex-col max-[850px]:gap-9">
          <div className=" bg-white px-8 py-10 flex rounded-lg flex-col gap-5 w-max max-[850px]:w-full">
            <h3 className=" text-xl font-bold">Contact Us</h3>
            <p className=" text-[#9BA3AF] text-sm tracking-wide">
              Please use the form below to get in touch with us. Let us know
              what the enquiry is about and we'll respond as soon as we can.
            </p>
            <form
              action="#"
              onSubmit={handelSubmit}
              className=" grid grid-cols-2 gap-y-5 gap-x-6 max-[650px]:grid-cols-1"
            >
              <input
                type="text"
                placeholder="Full name"
                value={contectPetCares?.name}
                onChange={handelChange}
                name="name"
                className=" border rounded-lg px-4 py-3 outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={contectPetCares?.email}
                onChange={handelChange}
                className=" border rounded-lg px-4 py-3 outline-none"
              />
              <input
                type="text"
                placeholder="Phone number"
                name="phone"
                value={contectPetCares.phone}
                onChange={handelChange}
                className=" border rounded-lg px-4 py-3 outline-none"
              />
              <input
                type="text"
                placeholder="What is your enquiry about"
                name="enquriyAbout"
                value={contectPetCares.enquriyAbout}
                onChange={handelChange}
                className=" border rounded-lg px-4 py-3 outline-none"
              />
              <textarea
                name="enquriyIs"
                placeholder="What is your enquiry"
                className=" border rounded-lg col-span-2 px-4 py-3 outline-none max-[650px]:col-auto"
                rows={5}
                cols={50}
                id=""
                value={contectPetCares.enquriyIs}
                onChange={handelChange}
              ></textarea>
              <button className=" text-white bg-[#5EAE46] font-semibold py-3.5 rounded-lg">
                Send Message
              </button>
            </form>
          </div>
          <div className=" bg-white h-max px-8 py-8 flex rounded-lg flex-col gap-5 w-[35%] max-[850px]:w-full">
            <h2 className=" text-xl font-bold">Follow Us</h2>
            <div className=" flex gap-5">
              <Link to="https://www.facebook.com/profile.php?id=100031828202887">
                <IoLogoFacebook className=" bg-[#F7F7F7] p-3 text-5xl rounded-lg" />
              </Link>
              <Link to="https://www.instagram.com/aman_kashyap2.0">
                <FaInstagram className=" bg-[#F7F7F7] p-3 text-5xl rounded-lg" />
              </Link>
              <Link to="https://twitter.com/Sudeesh76639641">
                <FaTwitter className=" bg-[#F7F7F7] p-3 text-5xl rounded-lg" />
              </Link>
            </div>
          </div>
        </section>
      </section>
      <Footer />
      <Toaster />
    </>
  );
}

export default Contact;
