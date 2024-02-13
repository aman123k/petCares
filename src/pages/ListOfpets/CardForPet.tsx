import React from "react";
import img from "../../images/parrot.jpeg";
import { CiLocationOn } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";

function CardForPet() {
  return (
    <>
      <section className=" bg-white drop-shadow-xl p-5 rounded-xl relative max-[650px]:w-full font-Nunito">
        <section className=" relative">
          <img
            src={img}
            alt=""
            className=" w-full rounded-lg max-[650px]:h-52 object-cover"
          />
          <p className=" absolute top-2.5 left-3.5 text-white bg-[#3E4C66] px-2 text-sm py-1 rounded-md tracking-wide">
            New
          </p>
          <div className=" flex items-center absolute w-full text-white bottom-3.5 px-4 justify-between">
            <h2 className=" font-bold tracking-wide text-lg">2 year old</h2>
            <div className="bg-black opacity-55 p-2 hover:bg-[#5F9F0C] cursor-pointer rounded-lg">
              <FaRegHeart className="  " />
            </div>
          </div>
        </section>
        <div className=" flex flex-col gap-1 my-4">
          <h3 className=" text-[#5F9F0C] text-sm tracking-wide">
            Labrador Retriever
          </h3>
          <h1 className=" font-bold text-[#595959] text-xl my-1">Mylo</h1>
          <div className=" flex items-center gap-2 text-[#8d8c8c] text-sm font-semibold tracking-wide">
            <CiLocationOn /> Milton Keynes
          </div>
        </div>
        <div className=" border-t text-[#8d8c8c] py-4">
          <h6 className=" text-sm my-1 font-semibold">Ad Posted</h6>
          <p className=" text-[#595959]">today</p>
        </div>
      </section>
    </>
  );
}

export default CardForPet;
