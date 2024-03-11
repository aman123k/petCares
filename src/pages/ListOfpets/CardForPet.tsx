import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import addFavourite from "../../function/addFaviourite";
import { Toaster } from "react-hot-toast";
import day from "../../function/getDay";
interface petList {
  _id: string;
  petImage: string[];
  characteristics: { petAge: number; petBreed: string; petName: string };
  postAddTime: string;
  Auth: { name: string };
}

function CardForPet({ PetsData }: { PetsData: petList }) {
  return (
    <>
      <section className=" bg-white drop-shadow-xl p-5 rounded-xl relative max-[650px]:w-full font-Nunito">
        <section className=" relative">
          <Link to={`/adopt-a-pet/${PetsData._id}`}>
            <img
              src={PetsData.petImage[0]}
              alt=""
              className=" w-full h-52 rounded-lg max-[650px]:h-52 object-cover"
            />
            {day(PetsData.postAddTime) === "Today" ||
            day(PetsData.postAddTime) === "Yesterday" ? (
              <p className=" absolute top-2.5 left-3.5 text-white bg-[#3E4C66] px-2 text-sm py-1 rounded-md tracking-wide">
                New
              </p>
            ) : (
              ""
            )}
          </Link>
          <div className=" flex items-center absolute w-full text-white bottom-3.5 px-4 justify-between">
            <h2 className=" font-bold tracking-wide text-lg">
              {PetsData.characteristics.petAge} year old
            </h2>
            <div
              onClick={() => addFavourite({ id: PetsData._id })}
              className="bg-black opacity-55 p-2 hover:bg-[#5F9F0C] cursor-pointer rounded-lg"
            >
              <FaRegHeart className="  " />
            </div>
          </div>
        </section>
        <Link to={`/adopt-a-pet/${PetsData._id}`}>
          <div className=" flex flex-col gap-1 my-4">
            <h3 className=" text-[#5F9F0C] text-sm tracking-wide">
              {PetsData.characteristics.petBreed}
            </h3>
            <h1 className=" capitalize font-bold text-[#595959] text-xl my-1">
              {PetsData.characteristics?.petName}
            </h1>
            <div className=" flex items-center gap-2 text-[#8d8c8c] text-sm font-semibold tracking-wide">
              <CiLocationOn /> Milton Delhi
            </div>
          </div>
          <div className=" border-t text-[#8d8c8c] py-4">
            <h6 className=" text-sm my-1 font-semibold">Ad Posted</h6>
            <p className=" text-[#595959]">{day(PetsData.postAddTime)}</p>
          </div>
        </Link>
      </section>
      <Toaster />
    </>
  );
}

export default CardForPet;
