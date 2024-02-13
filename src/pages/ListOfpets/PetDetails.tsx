import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { FaRegHeart } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import img from "../../images/parrot.jpeg";
import Slider from "./Slider";

function PetDetails() {
  const { id } = useParams();
  const [showImage, setShowImage] = useState<boolean>(false);
  console.log(id);
  return (
    <section className={`${showImage ? "h-screen overflow-hidden" : ""}`}>
      <Header />
      <section className=" bg-[#F9F9F9] font-Nunito px-8 flex items-center justify-between py-10">
        <div>
          <Link to="/adopt-a-pet">
            <p className=" flex items-center gap-2 text-[#99CB36] font-semibold text-sm">
              <IoMdArrowRoundBack className=" text-lg" /> Back to search results
            </p>
          </Link>
          <h1 className=" text-[#202020] font-bold text-4xl my-2 max-[650px]:text-2xl">
            Beans And Waffles
          </h1>
          <p className=" text-sm font-semibold text-[#8F8E8E] max-[650px]:text-xs">
            Domestic Shorthair, Domestic Longhair |{" "}
            <span className="text-[#99CB36] ">3 years old</span>
          </p>
        </div>
        <div>
          <FaRegHeart className=" text-[#8F8E8E] text-xl" />
        </div>
      </section>
      <section className="bg-[#F9F9F9] px-8 flex gap-[3%] max-[650px]:gap-10 max-[650px]:flex-col pb-10 h-max">
        <div
          className=" w-[63%] rounded-lg overflow-hidden drop-shadow-md max-[650px]:w-full max-[650px]:h-auto 
        max-[950px]:h-auto items-start h-[30rem]"
        >
          <img
            src={img}
            alt=""
            className=" w-full object-cover rounded-lg"
            onClick={() => setShowImage(true)}
          />
        </div>
        <div className=" w-[35%] grid grid-cols-2 gap-6 h-max max-[650px]:w-full">
          <img
            src={img}
            alt=""
            className="object-cover rounded-lg drop-shadow-xl"
            onClick={() => setShowImage(true)}
          />
          <img
            src={img}
            alt=""
            className="object-cover rounded-lg drop-shadow-xl"
            onClick={() => setShowImage(true)}
          />
          <div
            className=" relative overflow-hidden rounded-lg cursor-pointer"
            onClick={() => setShowImage(true)}
          >
            <img src={img} alt="" className="object-cover  drop-shadow-xl" />
            <div
              className=" absolute top-0 left-0 items-center flex justify-center
             bg-black w-full h-full font-bold text-white text-3xl opacity-60 font-Nunito"
            >
              3+
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#F9F9F9] px-8 flex gap-[3%] border-t py-10 max-[650px]:flex-col">
        <section className="w-[63%] max-[650px]:w-full font-Nunito flex flex-col gap-6">
          <div className=" bg-white drop-shadow-lg rounded-lg px-8 py-6">
            <h1 className=" my-3 font-bold  text-2xl text-[#595959]">
              Description
            </h1>
            <p className=" text-[#8F8E8E] tracking-wide">
              I have had Mylo since he was 8 weeks, we got him from a trusted
              breeder. Unfortunately, I’m relocating to Australia, I’m unable to
              keep him with my parents and I also don’t have any family members
              willing to take him. Mylo loves other dogs, he is very playful. He
              has never been around cats, so I wouldn’t be able to advise on
              this. He has only lived with myself and my mum, he hasn’t really
              been around younger children. He has been around my 10 year old
              niece, and they are very playful together but he has not grown up
              around younger children. Mylo’s favourite activities is walking
              and playing with a ball. Mylo is a loving boy, loves cuddles and
              kisses and will follow you around the house everywhere. He’s not
              really scared of much, but he is a big baby. He eats a RAW diet,
              from Natures Menu. No allergies or health conditions.
            </p>
          </div>
          <div className=" bg-white drop-shadow-lg rounded-lg px-8 py-6">
            <h1 className=" my-3 font-bold  text-xl text-[#595959]">
              Additional details
            </h1>
            <div className=" flex gap-5 max-[650px]:flex-col max-[650px]gap-2">
              <div>
                <div className=" flex gap-7">
                  <span className="text-[#595959]">Sex: </span>
                  <span className=" font-bold">Male</span>
                </div>
                <div className=" flex gap-5">
                  <span className="text-[#595959]">Size: </span>
                  <span className=" font-bold">Large</span>
                </div>
                <div className=" flex gap-5">
                  <span className="text-[#595959]">Age: </span>
                  <span className=" font-bold">2</span>
                </div>
                <div className=" flex gap-5">
                  <span className="text-[#595959]">Reason for rehoming: </span>
                  <span className=" font-bold">
                    Change in family circumstances
                  </span>
                </div>
              </div>
              <div>
                <div className=" flex gap-5">
                  <span className="text-[#595959]">Breed: </span>
                  <span className=" font-bold">Large</span>
                </div>
                <div className=" flex gap-5">
                  <span className="text-[#595959]">Colour: </span>
                  <span className=" font-bold">2</span>
                </div>
                <div className=" flex gap-5">
                  <span className="text-[#595959]">Spayed or Neutered: </span>
                  <span className=" font-bold">2</span>
                </div>
              </div>
            </div>
          </div>
          <div className=" bg-white drop-shadow-lg rounded-lg px-8 py-6">
            <h1 className=" my-3 font-bold  text-lg text-[#595959]">
              Featuress
            </h1>
            <div></div>
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
          <Slider setShowImage={setShowImage} />
        </div>
      ) : (
        ""
      )}
    </section>
  );
}

export default PetDetails;
