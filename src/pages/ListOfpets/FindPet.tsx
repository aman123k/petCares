import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CardForPet from "./CardForPet";
import { FaAngleDown } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineMyLocation } from "react-icons/md";
import { Link } from "react-router-dom";

function FindPet() {
  return (
    <>
      <Header />
      <section className=" bg-[#EEEEEE]">
        <section
          className=" flex gap-3 justify-center pt-16 max-[650px]:flex-col max-[650px]:items-start
           max-[650px]:w-full max-[650px]:px-10 font-Nunito items-center"
        >
          <div className=" flex-col flex gap-3 relative w-max max-[650px]:w-full">
            <span className=" font-bold text-[#595959] ">
              Select animal type
            </span>
            <select
              className=" w-40 p-3 rounded-lg outline-none max-[650px]:w-full
             appearance-none cursor-pointer drop-shadow-md"
            >
              <option value="all">All</option>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="rabbit">Rabbit</option>
              <option value="perrot">Parrot</option>
            </select>
            <FaAngleDown className=" absolute bottom-4 right-2" />
          </div>
          <div className=" flex-col flex gap-3 relative w-max max-[650px]:w-full">
            <span className=" font-bold text-[#595959] ">Select breed</span>
            <div
              className=" p-3 flex items-center justify-between cursor-pointer max-[650px]:w-full
             rounded-lg outline-none drop-shadow-md bg-white w-max min-w-40"
            >
              All breed
              <BsThreeDotsVertical />
            </div>
          </div>
          <div className=" max-[650px]:w-full flex items-end">
            <div className=" flex-col flex gap-3 relative w-max max-[650px]:w-full">
              <span className=" font-bold text-[#595959] ">
                Select location
              </span>

              <input
                type="text"
                placeholder=" Start typing"
                className=" p-3 rounded-lg outline-none drop-shadow-md"
              />
            </div>
            <div className=" ml-5 cursor-pointer flex-shrink-0">
              <MdOutlineMyLocation className=" text-3xl text-[#96C830]" />
            </div>
          </div>
        </section>

        <section
          className="  grid grid-cols-3 justify-center max-[650px]:grid-cols-1
      max-[650px]:px-8 max-[650px]:gap-y-4 max-[650px]:py-8 gap-8 min-[1200px]:grid-cols-4 px-10 py-14"
        >
          <Link to="/adopt-a-pet/24">
            <CardForPet />
          </Link>
          <CardForPet />
          <CardForPet />
          <CardForPet />
          <CardForPet />
          <CardForPet />
          <CardForPet />
          <CardForPet />
          <CardForPet />
        </section>
      </section>
      <Footer />
    </>
  );
}

export default FindPet;
