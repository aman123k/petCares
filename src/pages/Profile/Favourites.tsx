import Header from "../../components/Header";
import ProfileHeader from "../../components/ProfileHeader";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import getFavourites from "../../function/getFaviourite";
import CardForPet from "../ListOfpets/CardForPet";
import { PetsdataType } from "../../customHooks/RecivePetsData";

function Favourites() {
  const [favourites, setFavourites] = useState<Array<PetsdataType> | null>(
    null
  );

  useEffect(() => {
    getFavourites({ setItems: setFavourites });
  }, []);
  return (
    <>
      <Header />
      <ProfileHeader />
      <section className=" bg-[#EEEEEE] px-8 py-16 font-Nunito">
        <div className=" flex flex-col gap-3 mb-4">
          <h1 className=" text-[#484848] font-bold text-3xl">
            My Favourite Animals
          </h1>
          <p className=" text-[#848383] tracking-wide font-semibold">
            Find all of your favourite animals below
          </p>
        </div>

        {favourites?.length !== 0 ? (
          <section
            className=" grid grid-cols-3 justify-center max-[650px]:grid-cols-1
          max-[650px]:px-6 max-[650px]:gap-y-4 max-[650px]:py-8 gap-8 min-[1200px]:grid-cols-4 px-8 py-14"
          >
            {favourites?.map((favourite, index) => {
              return <CardForPet key={index} PetsData={favourite} />;
            })}
          </section>
        ) : (
          <div
            className=" bg-white rounded-lg drop-shadow-md gap-4 text-center
      py-8 flex-col flex  px-6 mt-6"
          >
            <h1 className=" text-[#484848] font-bold text-2xl">
              No favourites
            </h1>
            <p className=" text-[#848383] tracking-wide font-semibold">
              You do not have any favourited animals. Why don't you start
              looking now...
            </p>
            <Link to="/adopt-a-pet">
              <button
                className=" border-2 border-[#5FA501] py-3 px-6 rounded-full hover:bg-[#5FA501]
        tracking-wide hover:text-white text-[#5FA501]"
              >
                Start searching
              </button>
            </Link>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
}

export default Favourites;
