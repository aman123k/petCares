import React, { useContext, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Count from "./helper/Count";
import { ListingContext } from "../../globleContext/ListingContext";
import { ThemeContext } from "../../globleContext/context";
import { User } from "../../interface/interface";
import { Link, useNavigate } from "react-router-dom";
import { GoPerson } from "react-icons/go";
import toast, { Toaster } from "react-hot-toast";

function SecoundStep() {
  const navigator = useNavigate();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const { userDetails }: { userDetails?: User } = useContext(ThemeContext);
  const { pet, reason, time } = useContext(ListingContext) as {
    pet: string;
    reason: string;
    time: string;
  };
  if (!pet || !reason! || !time) {
    navigator("/rehouse-a-pet");
  }
  const nextPage = () => {
    if (!userDetails?.username)
      return toast.error("Please login to Continue...");
    navigator("/rehouse-a-pet/your-pet");
  };
  return (
    <>
      <Header />
      <Count />
      <section
        className="justify-center items-center max-[950px]:px-16 max-[650px]:ml-0  max-[650px]:mx-0
      max-[650px]:px-10 max-[650px]:py-10 flex flex-col gap-8 py-14 font-Nunito"
      >
        <p className=" w-[800px] text-[#777777] max-[950px]:w-[650px]  max-[650px]:w-full">
          Create a profile for your pet within 10 minutes, but{" "}
          <span className=" font-bold">
            you have up to 45 minutes to gather all the necessary information
            before starting.{" "}
          </span>
          Please refer to our guidelines for rehoming pets and the process
          involved to help you prepare.
        </p>
      </section>
      <section
        className="justify-center  items-center max-[950px]:px-16 max-[650px]:ml-0 bg-[#DCEAC9] max-[650px]:mx-0
      max-[650px]:px-10 max-[650px]:py-10 flex flex-col gap-8 py-16 font-Nunito"
      >
        {!userDetails && (
          <section className=" w-[800px] max-[950px]:w-[600px] flex-col flex gap-6 max-[650px]:w-full">
            <section className=" flex justify-between max-[650px]:items-start  pb-4 items-center max-[650px]:flex-col max-[650px]:gap-5">
              <h1 className=" text-lg tracking-wide text-[#131212] font-bold">
                Already registered?
              </h1>
              <Link
                to="/login"
                className="w-[350px] max-[950px]:w-[250px] max-[650px]:w-full  ml-auto bg-[#5FA501] border-[#5FA501] border-2
             rounded-lg py-3 px-3.5 text-white flex items-center gap-2 tracking-wide
              justify-center hover:bg-white hover:text-[#5FA501]"
              >
                <GoPerson className=" text-xl" />
                LogIn Here
              </Link>
            </section>
            <section className=" flex justify-between max-[650px]:items-start border-b border-[#777777] pb-5 items-center max-[650px]:gap-5 max-[650px]:flex-col">
              <h1 className=" text-lg tracking-wide text-[#131212] font-bold">
                Not registered?
              </h1>
              <Link
                to="/register"
                className="w-[350px] max-[950px]:w-[250px] max-[650px]:w-full  ml-auto bg-[#5FA501] border-[#5FA501] border-2
             rounded-lg py-3 px-3.5 text-white flex items-center gap-2 tracking-wide
              justify-center hover:bg-white hover:text-[#5FA501]"
              >
                <GoPerson className=" text-xl" />
                Registere Here
              </Link>
            </section>
          </section>
        )}
        <section className=" w-[800px] max-[950px]:w-[600px] flex-col flex gap-6 max-[650px]:w-full">
          <h1 className=" font-bold text-3xl text-[#181818] max-[650px]:text-2xl">
            Your Personal Information
          </h1>
          <div className=" flex gap-7 flex-col max-[650px]:w-full mt-8">
            <div
              className=" flex  justify-between gap-20 max-[650px]:flex-col max-[650px]:gap-4
            items-center max-[650px]:justify-normal max-[650px]:items-start"
            >
              <h2 className=" text-xl font-bold tracking-wide">Your name</h2>
              <input
                type="text"
                value={name ? name : userDetails?.username}
                placeholder="Your name"
                onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                  setName(e.currentTarget.value)
                }
                className={`w-[350px] max-[950px]:w-[250px] ${
                  userDetails?.username ? "bg-[#EAECEF] select-none" : ""
                }
                outline-none max-[650px]:w-full py-3 px-3 rounded-lg drop-shadow-md`}
              />
            </div>
            <div
              className=" flex  justify-between gap-20 max-[650px]:flex-col max-[650px]:gap-4
            items-center max-[650px]:justify-normal max-[650px]:items-start"
            >
              <h2 className=" text-xl font-bold tracking-wide">Your email</h2>
              <input
                type="text"
                value={email ? email : userDetails?.email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                  setEmail(e.currentTarget.value)
                }
                placeholder="Your email"
                className={`w-[350px] max-[950px]:w-[250px] ${
                  userDetails?.email ? "bg-[#EAECEF] select-none" : ""
                }
                outline-none max-[650px]:w-full py-3 px-3 rounded-lg drop-shadow-md`}
              />
            </div>
          </div>
          <section className=" flex justify-between max-[650px]:flex-col max-[650px]:gap-5">
            <button
              className=" border-[#96c16d] hover:text-[#5FA501] bg-[#96c16d]
        hover:bg-white px-20 border-2 text-white rounded-lg font-semibold py-3
        drop-shadow-md"
              onClick={() => navigator(-1)}
            >
              Previous
            </button>
            <button
              className="border-[#5FA501] hover:text-[#5FA501] bg-[#5FA501]
        hover:bg-white px-20 border-2 text-white rounded-lg font-semibold py-3
        drop-shadow-md"
              onClick={nextPage}
            >
              Next
            </button>
          </section>
        </section>
      </section>
      <Footer />
      <Toaster />
    </>
  );
}

export default SecoundStep;
