import React, { useContext } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CardForPet from "./CardForPet";
import { FaAngleDown } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import InfiniteScroll from "react-infinite-scroll-component";
import {
  FindingPetContext,
  PetsdataType,
} from "../../globleContext/FindPetContext";

function FindPet() {
  const { fetchPetData, allPetsdata, totalDoc } = useContext(
    FindingPetContext
  ) as {
    fetchPetData: () => {};
    allPetsdata: Array<PetsdataType>;
    totalDoc: number;
  };

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
        </section>
        <InfiniteScroll
          next={fetchPetData}
          hasMore={allPetsdata.length < (totalDoc ?? 0)}
          loader={<h4>Loading...</h4>}
          dataLength={allPetsdata.length}
          className=" grid grid-cols-3 justify-center max-[650px]:grid-cols-1
            max-[650px]:px-8 max-[650px]:gap-y-4 max-[650px]:py-8 gap-8 min-[1200px]:grid-cols-4 px-10 py-14"
        >
          {allPetsdata?.map((petData, index) => {
            return <CardForPet key={index} PetsData={petData} />;
          })}
        </InfiniteScroll>
      </section>

      <Footer />
    </>
  );
}

export default FindPet;
