import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { CiSearch } from "react-icons/ci";
import { FcProcess } from "react-icons/fc";
import { Link } from "react-router-dom";
import HomeCard from "../components/HomeCard";
import homeScreen from "../images/homeScreen.png";
import golden_retriever from "../images/golden-retriever-Home.jpeg";
import senior_dog from "../images/senior_dog.avif";
import rabbit from "../images/rabbits-bonded-pairs.png";
import cat_home from "../images/cat_home.jpeg";
import parrot_home from "../images/home_parrot.jpeg";

function Home() {
  return (
    <div className=" ">
      <Header />
      <section
        className="bg-homeDod object-contain py-36 flex flex-col gap-14 px-20 text-white 
      max-[650px]:px-8 max-[650px]:py-10 max-[650px]:gap-10 bg-no-repeat min-[1500px]:bg-cover max-[1500px]:object-none "
      >
        <Link to="/adopt-a-pet">
          <div
            className=" flex gap-10 items-center bg-[#5FA501] w-[500px] py-10
          rounded-lg px-12 hover:scale-[1.1] duration-500 ease-in-out max-[650px]:w-full
          max-[650px]:px-6 max-[650px]:gap-5 max-[650px]:py-7 min-[2000px]:ml-[30%]"
          >
            <CiSearch
              className="text-7xl text-[#5FA501] bg-white p-3.5 rounded-lg max-[650px]:text-5xl 
            max-[650px]:p-1"
            />
            <div>
              <h1 className="font-bold text-2xl font-Nunito max-[650px]:text-xl">
                I Want to adopt a pet
              </h1>
              <p className="font-Nunito text-[16px] tracking-wide pt-2 max-[650px]:pt-1 ">
                Search the available pets listed on{" "}
                <br className="max-[650px]:hidden" />
                petCares
              </p>
            </div>
          </div>
        </Link>
        <Link to="/rehouse-a-pet">
          <div
            className=" flex gap-10 items-center bg-[#1e7629] w-[500px] py-10
          rounded-lg px-12 hover:scale-[1.1] duration-500 ease-in-out max-[650px]:w-full
          max-[650px]:px-6 max-[650px]:gap-5 max-[650px]:py-7 min-[2000px]:ml-[30%]"
          >
            <FcProcess
              className="text-[4.8rem] text-[#5FA501] bg-white px-3 py-0 rounded-lg 
            max-[650px]:text-[3rem] max-[650px]:px-2"
            />
            <div>
              <h1 className="font-bold text-2xl font-Nunito max-[650px]:text-xl">
                I Need to rehouse my pet
              </h1>
              <p className="font-Nunito text-[16px] tracking-wide pt-2 max-[650px]:pt-1  ">
                Start the process. It's free to liste your pet on petCares
              </p>
            </div>
          </div>
        </Link>
      </section>
      <section className="  my-10 font-Nunito px-8 min-[2000px]:ml-[50%] min-[2000px]:translate-x-[-50%] ">
        <div className="text-center flex-col flex-3">
          <h1 className=" text-3xl font-bold text-[#595959]">
            Why Choose PetCares?
          </h1>
          <p className=" text-[#595959] mt-4">
            Because we enable direct pet adoption, from one good home to
            another.
          </p>
        </div>
        <HomeCard />
      </section>
      <section className="bg-[#EEEEEE] ">
        <section
          className=" my-8 font-Nunito tracking-wide  text-center px-28 max-[950px]:px-16 max-[650px]:px-8
       py-8  flex-col flex gap-6 drop-shadow-md min-[2000px]:ml-[50%] min-[2000px]:translate-x-[-50%] "
        >
          <h1 className=" text-2xl font-bold text-[#595959]">
            Straightforward Pet Rehousing And Adoption
          </h1>
          <p>
            PetCares is an innovative digital platform where real individuals
            facilitate connections between prospective pet adopters and pet
            owners in need of rehousing their animals. Our platform simplifies
            the adoption process, ensuring that caring individuals find the
            perfect companion while increasing the likelihood of pets finding
            their forever homes.
          </p>
          <p className=" my-3">
            We provide a compassionate and non-judgmental service to pet owners
            seeking to re home their animals, empowering them with full control
            throughout the process.
          </p>
          <p>
            Moreover, we play a pivotal role in reducing the influx of animals
            entering shelters. By connecting pets directly with new homes, we
            alleviate the strain on shelters, allowing them to allocate their
            resources more effectively towards pets in urgent need of assistance
            or specialized care.
          </p>
        </section>
      </section>
      <section className=" text-center font-Nunito px-9 text-[#484848] max-[650px]:px-8 min-[2000px]:ml-[50%] min-[2000px]:translate-x-[-50%] ">
        <div className=" flex-col flex gap-3">
          <h1 className=" text-3xl font-bold">Popular Pet Searches</h1>
          <p className=" text-[#797979] font-semibold">
            Whilst you can use our filters to search for specific pets, we
            thought you'd like to try these popular pet searches!
          </p>
        </div>
        <section className=" grid grid-cols-3 my-10 gap-8 max-[650px]:grid-cols-1">
          <Link
            to="/adopt-a-pet"
            className=" border-2 border-[#DAD5D5] hover:border-b-[#AFD57D]
             rounded-lg overflow-hidden cursor-pointer group
              w-full  max-[650px]:col-auto relative"
          >
            <div className="hover:scale-110 duration-500 ease-in-out">
              <img
                src={homeScreen}
                alt=""
                className=" w-full h-[350px] max-[650px]:h-[220px] max-[950px]:h-auto max-[1050px]:h-[240px]"
              />
            </div>
            <div
              className=" absolute bottom-0 text-center w-full bg-[#DAD5D5] py-2 font-bold max-[650px]:font-semibold
               max-[650px]:py-1.5
            group-hover:bg-[#AFD57D] group-hover:text-white tracking-wide text-lg flex-col flex"
            >
              <span className=" max-[650px]:text-sm">Small Dogs</span>
              <span className=" text-[14px] group-hover:text-white  text-[#7b7878] -mt-1 max-[650px]:text-[12px]">
                View all animals
              </span>
            </div>
          </Link>
          <Link
            to="/adopt-a-pet"
            className=" border-2 border-[#DAD5D5] hover:border-b-[#AFD57D]
             rounded-lg overflow-hidden cursor-pointer group
              w-full col-span-2  max-[650px]:col-auto relative"
          >
            <div
              className="hover:scale-110 duration-500 
                ease-in-out"
            >
              <img
                src={golden_retriever}
                alt=""
                className=" w-full h-[350px] max-[650px]:h-[220px] max-[950px]:h-auto max-[1050px]:h-[240px]"
              />
            </div>
            <div
              className=" absolute bottom-0 text-center w-full bg-[#DAD5D5] py-2 font-bold max-[650px]:font-semibold
               max-[650px]:py-1.5
            group-hover:bg-[#AFD57D] group-hover:text-white tracking-wide text-lg flex-col flex"
            >
              <span className=" max-[650px]:text-sm">Large Dogs</span>
              <span className=" text-[14px] text-[#7b7878] group-hover:text-white -mt-1 max-[650px]:text-[12px]">
                View all animals
              </span>
            </div>
          </Link>
          <Link
            to="/adopt-a-pet"
            className=" border-2 border-[#DAD5D5] hover:border-b-[#AFD57D]
             rounded-lg overflow-hidden cursor-pointer group
              w-full col-span-2  max-[650px]:col-auto relative"
          >
            <div
              className="hover:scale-110 duration-500 
                ease-in-out"
            >
              <img
                src={rabbit}
                alt=""
                className=" w-full h-[350px] max-[650px]:h-[220px] max-[950px]:h-auto max-[1050px]:h-[240px]"
              />
            </div>
            <div
              className=" absolute bottom-0 text-center w-full bg-[#DAD5D5] py-2 font-bold max-[650px]:font-semibold
               max-[650px]:py-1.5
            group-hover:bg-[#AFD57D] group-hover:text-white tracking-wide text-lg flex-col flex"
            >
              <span className=" max-[650px]:text-sm">Rabbits</span>
              <span className=" text-[14px] text-[#7b7878] group-hover:text-white -mt-1 max-[650px]:text-[12px]">
                View all animals
              </span>
            </div>
          </Link>
          <Link
            to="/adopt-a-pet"
            className=" border-2 border-[#DAD5D5] hover:border-b-[#AFD57D]
             rounded-lg overflow-hidden cursor-pointer group
              w-full  max-[650px]:col-auto relative"
          >
            <div className="hover:scale-110 duration-500 ease-in-out">
              <img
                src={parrot_home}
                alt=""
                className=" w-full h-[350px] max-[650px]:h-[220px] max-[950px]:h-auto max-[1050px]:h-[240px]"
              />
            </div>
            <div
              className=" absolute bottom-0 text-center w-full bg-[#DAD5D5] py-2 font-bold max-[650px]:font-semibold
               max-[650px]:py-1.5
            group-hover:bg-[#AFD57D] group-hover:text-white tracking-wide text-lg flex-col flex"
            >
              <span className=" max-[650px]:text-sm">Parrots</span>
              <span className=" text-[14px] group-hover:text-white  text-[#7b7878] -mt-1 max-[650px]:text-[12px]">
                View all animals
              </span>
            </div>
          </Link>
          <Link
            to="/adopt-a-pet"
            className=" border-2 border-[#DAD5D5] hover:border-b-[#AFD57D]
             rounded-lg overflow-hidden cursor-pointer group
              w-full  max-[650px]:col-auto relative"
          >
            <div className="hover:scale-110 duration-500 ease-in-out">
              <img
                src={senior_dog}
                alt=""
                className=" w-full h-[350px] max-[650px]:h-[220px] max-[950px]:h-auto max-[1050px]:h-[240px]"
              />
            </div>
            <div
              className=" absolute bottom-0 text-center w-full bg-[#DAD5D5] py-2 font-bold max-[650px]:font-semibold
               max-[650px]:py-1.5
            group-hover:bg-[#AFD57D] group-hover:text-white tracking-wide text-lg flex-col flex"
            >
              <span className=" max-[650px]:text-sm">Senior Dogs</span>
              <span className=" text-[14px] group-hover:text-white  text-[#7b7878] -mt-1 max-[650px]:text-[12px]">
                View all animals
              </span>
            </div>
          </Link>
          <Link
            to="/adopt-a-pet"
            className=" border-2 border-[#DAD5D5] hover:border-b-[#AFD57D]
             rounded-lg overflow-hidden cursor-pointer group
              w-full col-span-2  max-[650px]:col-auto relative"
          >
            <div
              className="hover:scale-110 duration-500 
                ease-in-out"
            >
              <img
                src={cat_home}
                alt=""
                className=" w-full h-[350px] max-[650px]:h-[220px] max-[950px]:h-auto max-[1050px]:h-[240px]"
              />
            </div>
            <div
              className=" absolute bottom-0 text-center w-full bg-[#DAD5D5] py-2 font-bold max-[650px]:font-semibold
               max-[650px]:py-1.5
            group-hover:bg-[#AFD57D] group-hover:text-white tracking-wide text-lg flex-col flex"
            >
              <span className=" max-[650px]:text-sm">Cats</span>
              <span className=" text-[14px] text-[#7b7878] group-hover:text-white -mt-1 max-[650px]:text-[12px]">
                View all animals
              </span>
            </div>
          </Link>
        </section>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
