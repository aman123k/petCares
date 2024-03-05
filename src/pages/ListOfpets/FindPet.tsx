import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CardForPet from "./CardForPet";
import { FaAngleDown } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import InfiniteScroll from "react-infinite-scroll-component";
import loader from "../../images/loader.gif";
import useRecivePets from "../../customHooks/RecivePetsData";

function FindPet() {
  const { allPetsdata, setPage, totalDoc } = useRecivePets();
  const hasModedata = () => {
    setPage((pre) => pre + 1);
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
          next={hasModedata}
          hasMore={allPetsdata.length < (totalDoc ?? 0)}
          pullDownToRefreshThreshold={1000000}
          loader={
            <h1 className="pb-8">
              <img
                src={loader}
                className=" h-16 w-16 absolute left-[50%] translate-x-[-50%] "
                alt=""
              />
            </h1>
          }
          dataLength={allPetsdata.length}
          className=" grid grid-cols-3 justify-center max-[650px]:grid-cols-1
            max-[650px]:px-8 max-[650px]:gap-y-4 max-[650px]:py-8 gap-8 min-[1200px]:grid-cols-4 px-10 py-14"
        >
          {allPetsdata?.map((petData, index) => {
            return <CardForPet key={index} PetsData={petData} />;
          })}
        </InfiniteScroll>
      </section>
      <section id="footer">
        <Footer />
      </section>
    </>
  );
}

export default FindPet;
