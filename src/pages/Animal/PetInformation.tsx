import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

import dogWelfareBanner from "../../images/desktop-banner-petwelfare.jpg";
import { GiSittingDog } from "react-icons/gi";
import { PiCat } from "react-icons/pi";
import { GiRabbitHead } from "react-icons/gi";
import { GiParrotHead } from "react-icons/gi";

function PetInformation() {
  return (
    <>
      <Header />
      <section className=" object-cover relative text-white font-Nunito ">
        <section className=" py-24 mb-28 px-20 max-[650px]:mb-0 max-[400px]:py-14 max-[400px]:px-8">
          <h1 className="font-semibold tracking-wider text-lg max-[650px]:text-sm">
            <Link to="/">Home </Link>/ Pet Welfare
          </h1>
          <h3 className=" font-bold text-4xl tracking-wide max-[650px]:text-2xl mt-3">
            Pet Welfare
          </h3>
        </section>
        <img
          src={dogWelfareBanner}
          alt=""
          className=" object-cover absolute top-0 -z-10 w-full  h-96 max-[650px]:h-56"
        />
      </section>
      <section className=" bg-[#EEEEEE] font-Nunito py-8 text-[#595959] px-8">
        <div className=" text-center">
          <h1 className=" font-bold text-3xl">Pet Welfare Guides</h1>
          <p className=" mt-2">
            What you need to know about providing the right basic care for your
            dog, cat, rabbit or parrot
          </p>
        </div>
        <section className=" grid grid-cols-2 gap-5 mt-16 max-[650px]:grid-cols-1">
          <Link
            to="/preparing-for-your-dog"
            className=" group bg-white border p-14 rounded-xl flex flex-col gap-10 hover:drop-shadow-xl"
          >
            <div className="ml-[50%] translate-x-[-50%] w-max bg-[#AFD57D] group-hover:bg-[#5FA501] p-5 rounded-full">
              <GiSittingDog className=" text-white text-8xl" />
            </div>
            <div className=" text-center">
              <h1 className=" text-xl mb-3 font-bold">Dog Welfare</h1>
              <p>
                Here, you'll find out how to prepare for your new dog. Find out
                how to provide the right diet, exercise, companionship and
                veterinary care for your dog.
              </p>
            </div>
          </Link>
          <Link
            to="/preparing-for-your-cat"
            className=" group bg-white border p-14 rounded-xl flex flex-col gap-10 hover:drop-shadow-xl"
          >
            <div className="ml-[50%] translate-x-[-50%] w-max bg-[#AFD57D] group-hover:bg-[#5FA501] p-5 rounded-full">
              <PiCat className=" text-white text-8xl" />
            </div>
            <div className=" text-center">
              <h1 className=" text-xl mb-3 font-bold">Cat Welfare</h1>
              <p>
                Here, you'll find out how to prepare for your new cat. Find out
                how to provide the right diet, exercise, companionship and
                veterinary care for your cat.
              </p>
            </div>
          </Link>
          <Link
            to="/preparing-for-your-rabbit"
            className=" group bg-white border p-14 rounded-xl flex flex-col gap-10 hover:drop-shadow-xl"
          >
            <div className="ml-[50%] translate-x-[-50%] w-max bg-[#AFD57D] group-hover:bg-[#5FA501] p-5 rounded-full">
              <GiRabbitHead className=" text-white text-8xl" />
            </div>
            <div className=" text-center">
              <h1 className=" text-xl mb-3 font-bold">Rabbit Welfare</h1>
              <p>
                Here, you'll find out how to prepare for your new rabbit. Find
                out how to provide the right diet, exercise, companionship and
                veterinary care for your rabbit.
              </p>
            </div>
          </Link>
          <Link
            to="/preparing-for-your-parrot"
            className=" group bg-white border p-14 rounded-xl flex flex-col gap-10 hover:drop-shadow-xl"
          >
            <div className="ml-[50%] translate-x-[-50%] w-max bg-[#AFD57D] group-hover:bg-[#5FA501] p-5 rounded-full">
              <GiParrotHead className=" text-white text-8xl" />
            </div>
            <div className=" text-center">
              <h1 className=" text-xl mb-3 font-bold">Parrot Welfare</h1>
              <p>
                Here's a guide on how to prepare for your new parrot, covering
                aspects such as diet, exercise, companionship, and veterinary
                care:
              </p>
            </div>
          </Link>
        </section>
      </section>
      <Footer />
    </>
  );
}

export default PetInformation;
