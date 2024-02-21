import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { FaRegHeart } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import Slider from "./Slider";
import {
  FindingPetContext,
  PetsdataType,
} from "../../globleContext/FindPetContext";
import getFavourites from "../../function/getFaviourite";
import addFavourite from "../../function/addFaviourite";
import { Toaster } from "react-hot-toast";
import { ThemeContext } from "../../globleContext/context";
import { User } from "../../interface/interface";

function PetDetails() {
  const { id } = useParams();
  const { userDetails }: { userDetails?: User } = useContext(ThemeContext);
  const [showImage, setShowImage] = useState<boolean>(false);
  const { allPetsdata } = useContext(FindingPetContext) as {
    allPetsdata: Array<PetsdataType>;
  };
  const [favourites, setFavourites] = useState<Array<PetsdataType> | null>(
    null
  );
  const [currentPetsInfo, setCurentPetInfo] = useState<
    PetsdataType | undefined | null
  >();
  useEffect(() => {
    getFavourites({ setItems: setFavourites });
  }, []);
  const petdata: PetsdataType = allPetsdata.filter(
    (pets) => pets._id === id
  )[0];
  const favPet: PetsdataType | null =
    favourites?.filter((pets) => pets._id === id)[0] ?? null;
  useEffect(() => {
    if (favPet) {
      setCurentPetInfo(favPet);
    } else {
      setCurentPetInfo(petdata);
    }
  }, [petdata, favPet]);
  const [showFav, setShowFav] = useState<boolean>(false);
  useEffect(() => {
    if (currentPetsInfo?.Favourites?.includes(userDetails?.email ?? "")) {
      setShowFav(
        currentPetsInfo?.Favourites?.includes(userDetails?.email ?? "")
      );
    }
  }, [currentPetsInfo, userDetails]);

  return (
    <section
      className={`${showImage ? "h-screen overflow-hidden" : ""} capitalize`}
    >
      <Header />
      <section className=" bg-[#F9F9F9] font-Nunito px-8 flex items-center justify-between py-10">
        <div>
          <Link to="/adopt-a-pet">
            <p className=" flex items-center gap-2 text-[#99CB36] font-semibold text-sm">
              <IoMdArrowRoundBack className=" text-lg" /> Back to search results
            </p>
          </Link>
          <h1 className=" text-[#202020] font-bold text-4xl my-2 max-[650px]:text-2xl">
            {currentPetsInfo?.characteristics?.petName}
          </h1>
          <p className=" text-sm font-semibold text-[#8F8E8E] max-[650px]:text-xs">
            {currentPetsInfo?.characteristics?.petBreed} |{" "}
            <span className="text-[#73952e] ">
              {currentPetsInfo?.characteristics?.petAge} years old
            </span>
          </p>
        </div>
        <div
          className={`cursor-pointer  px-4 py-2 rounded-lg 
            bg-[#abe13f]
          `}
          onClick={() => {
            addFavourite({ id: currentPetsInfo?._id ?? "" });
            setShowFav(!showFav);
          }}
        >
          {showFav ? (
            <div title="remove from your favorite list">
              <FaHeart
                title="Add Pet in your favourite list"
                className=" text-white text-xl"
              />
            </div>
          ) : (
            <FaRegHeart
              title="Add Pet in your favourite list"
              className=" text-white text-xl"
            />
          )}
        </div>
      </section>
      <section className="bg-[#F9F9F9] px-8 flex gap-[2.5%] max-[650px]:gap-10 max-[650px]:flex-col pb-10 h-max">
        <div
          className=" w-[63%] rounded-lg overflow-hidden drop-shadow-md max-[650px]:w-full max-[650px]:h-auto 
        max-[950px]:h-auto items-start h-[30rem]"
        >
          <img
            src={currentPetsInfo?.petImage[0]}
            alt=""
            className=" w-full max-[650px]:h-48 max-[950px]:h-96 h-[620px] object-cover rounded-lg"
            onClick={() => setShowImage(true)}
          />
        </div>
        <div className=" w-[35%] grid grid-cols-2 gap-6 h-max max-[650px]:w-full">
          <img
            src={currentPetsInfo?.petImage[1]}
            alt=""
            className="object-cover h-44 w-full max-[650px]:h-28 max-[950px]:h-32 rounded-lg drop-shadow-xl"
            onClick={() => setShowImage(true)}
          />
          <img
            src={currentPetsInfo?.petImage[2]}
            alt=""
            className="object-cover h-44 w-full max-[650px]:h-28 max-[950px]:h-32 rounded-lg drop-shadow-xl"
            onClick={() => setShowImage(true)}
          />
          <div
            className=" relative h-44 w-full max-[650px]:h-28 max-[950px]:h-32 overflow-hidden rounded-lg cursor-pointer"
            onClick={() => setShowImage(true)}
          >
            <img
              src={currentPetsInfo?.petImage[3]}
              alt=""
              className="object-cover  drop-shadow-xl"
            />
            <div
              className=" absolute top-0 left-0 items-center flex justify-center
             bg-black w-full h-full font-bold text-white text-3xl opacity-60 font-Nunito"
            >
              3+
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#F9F9F9] px-8 flex gap-[3%] border-t capitalize py-10 max-[650px]:flex-col">
        <section className="w-[63%] max-[650px]:w-full font-Nunito flex flex-col gap-6">
          <div className=" bg-white drop-shadow-lg rounded-lg px-8 py-6">
            <h1 className=" my-3 font-bold  text-2xl text-[#595959]">
              Description
            </h1>
            <p className=" text-[#8F8E8E] tracking-wide">
              {currentPetsInfo?.petStory}
            </p>
          </div>
          <div className=" bg-white drop-shadow-lg rounded-lg px-8 py-6">
            <h1 className=" my-3 font-bold  text-xl text-[#595959]">
              Additional details
            </h1>
            <div className=" grid grid-cols-2 max-[650px]:grid-cols-1  max-[650px]gap-2">
              <div>
                <div className=" flex gap-7">
                  <span className="text-[#595959]">Sex: </span>
                  <span className=" font-bold ">
                    {currentPetsInfo?.characteristics?.petSex}
                  </span>
                </div>
                <div className=" flex gap-5">
                  <span className="text-[#595959]">Size: </span>
                  <span className=" font-bold">
                    {currentPetsInfo?.characteristics?.petSize}
                  </span>
                </div>
                <div className=" flex gap-5">
                  <span className="text-[#595959]">Colour: </span>
                  <span className=" font-bold">
                    {currentPetsInfo?.characteristics?.petColor}
                  </span>
                </div>
              </div>

              <div>
                <div className=" flex gap-5">
                  <span className="text-[#595959]">Age: </span>
                  <span className=" font-bold">
                    {currentPetsInfo?.characteristics?.petAge}
                  </span>
                </div>
                <div className=" flex gap-5">
                  <span className="text-[#595959]">Breed: </span>
                  <span className=" font-bold">
                    {currentPetsInfo?.characteristics?.petBreed}
                  </span>
                </div>

                <div className=" flex gap-5">
                  <span className="text-[#595959]">Reason for rehoming: </span>
                  <span className=" font-bold">{currentPetsInfo?.reason}</span>
                </div>
              </div>
            </div>
          </div>
          <div className=" bg-white drop-shadow-lg rounded-lg px-8 py-6">
            <h1 className=" my-3 font-bold  text-lg text-[#595959]">
              Featuress
            </h1>
            <div className=" grid grid-cols-2 gap-6"></div>
          </div>
        </section>
        <section className="w-[35%] font-Nunito max-[650px]:w-full max-[650px]:mt-5">
          <div className=" bg-white drop-shadow-md px-6 py-4 rounded-lg">
            <h1 className=" my-4 text-[#595959] font-bold text-lg">
              Animal Location
            </h1>
            <p className=" text-[#a49f9f] font-semibold  tracking-wide">
              I'm being cared for by:
            </p>
            <p className=" my-2 text-[#595959] font-bold text-lg">
              Private Owner, Glasgow
            </p>
            <p className=" text-[#96C830] font-bold text-lg">Adoption Fee: </p>
          </div>
        </section>
      </section>
      <Footer />
      {showImage ? (
        <div className=" absolute w-full h-screen top-0 z-50">
          <Slider
            setShowImage={setShowImage}
            PetImage={currentPetsInfo?.petImage}
          />
        </div>
      ) : (
        ""
      )}
      <Toaster />
    </section>
  );
}

export default PetDetails;
