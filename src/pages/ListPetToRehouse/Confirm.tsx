import React, { useContext, useEffect, useRef } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Count from "./helper/Count";
import { ListingContext } from "../../globalContext/ListingContext";
import { Characteristics, KeyFacts } from "../../interface/interface";
import { useNavigate } from "react-router-dom";
import ConfirmHelper from "./helper/confirmHelper";
import toast, { Toaster } from "react-hot-toast";

function Confirm() {
  const {
    pet,
    reason,
    time,
    characteristics,
    petStory,
    keyFact,
    petImage,
    setPetImage,
    setPet,
    setReason,
    setTime,
    setKeyFact,
    setPetStory,
    setCharacteristics,
  } = useContext(ListingContext) as {
    pet: string;
    reason: string;
    time: string;
    characteristics: Characteristics;
    petStory: string;
    keyFact: KeyFacts;
    petImage: string[];
    setPetImage: React.Dispatch<React.SetStateAction<string[]>>;
    setPet: React.Dispatch<React.SetStateAction<string>>;
    setReason: React.Dispatch<React.SetStateAction<string>>;
    setTime: React.Dispatch<React.SetStateAction<string>>;
    setCharacteristics: React.Dispatch<React.SetStateAction<Characteristics>>;
    setKeyFact: React.Dispatch<React.SetStateAction<KeyFacts>>;
    setPetStory: React.Dispatch<React.SetStateAction<string>>;
  };
  const navigator = useNavigate();
  const toastId = useRef("");
  const url = process.env.REACT_APP_URL as string;
  useEffect(() => {
    if (
      !pet ||
      !reason ||
      !time ||
      !characteristics ||
      !petStory ||
      !petImage ||
      !keyFact
    ) {
      navigator("/rehouse-a-pet");
    }
  }, [
    keyFact,
    pet,
    reason,
    time,
    petStory,
    petImage,
    characteristics,
    navigator,
  ]);

  const handelSubmit = async () => {
    toastId.current = toast.loading("Please wait...");
    try {
      const response = await fetch(`${url}/listApet`, {
        method: "post",
        body: JSON.stringify({
          pet,
          characteristics,
          reason,
          time,
          keyFact,
          petImage,
          petStory,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const json = await response.json();
      if (json.success) {
        toast.success(json.response, {
          id: toastId.current,
        });
        setPet("");
        setReason("");
        setTime("");
        setCharacteristics({
          petName: "",
          petAge: 0,
          petSize: "",
          petColor: "",
          petSex: "",
          petBreed: "",
        });
        setKeyFact({
          Microchipped: "",
          HouseTrained: "",
          GoodWithCat: "",
          GoodWithDog: "",
          GoodWithChild: "",
          SpecialNeed: "",
          BehaviorIssues: "",
          purebred: "",
        });
        setPetImage([]);
        setPetStory("");
      } else {
        toast.error(json.response, {
          id: toastId.current,
        });
      }
    } catch {
      toast.success("Server error", {
        id: toastId.current,
      });
    }
  };

  return (
    <>
      <Header />
      <Count />
      <section
        className="text-[#777777] text-center justify-center flex items-center px-40 font-Nunito 
       max-[650px]:px-10 gap-5 max-[950px]:px-20 max-[650px]:text-start flex-col my-8 max-[650px]:my-4
        min-[2000px]:ml-[50%] min-[2000px]:translate-x-[-50%]"
      >
        <p>
          Thank you for providing information about your pet. We appreciate your
          <span className=" font-bold">
            {" "}
            effort in completing this section to ensure your pet's listing is
            accurate and attracts the best adopters.
          </span>
        </p>
        <p>
          if you're ready, please proceed to submit the information. If you have
          any questions or need assistance, feel free to reach out to us.
          <span className=" font-bold">
            Thank you for choosing PetCares.
          </span>{" "}
        </p>
      </section>
      <section className="bg-[#F0F0F0]">
        <section
          className=" rounded-3xl  px-14 max-[650px]:px-8 mx-5 max-[650px]:mx-6 py-10
        max-[950px]:mx-10 max-[650px]:py-6 font-Nunito mb-8  min-[2000px]:ml-[50%] min-[2000px]:translate-x-[-50%]"
        >
          <section className=" py-4 ">
            <h1 className=" text-[#4A4949] text-3xl font-bold">
              Besic Information
            </h1>
            <div className=" grid grid-cols-3 gap-5 my-4 max-[650px]:grid-cols-1 font-Nunito">
              <ConfirmHelper agr={pet} agr2="Rehousing Animal type" />
              <ConfirmHelper agr={reason} agr2="Reason of Rehousing" />
              <ConfirmHelper agr={time} agr2="How long will you keep" />
            </div>
          </section>
          <section className=" my-4  ">
            <h1 className=" text-[#4A4949] text-3xl font-bold mb-4">Photos</h1>
            <div className=" grid grid-cols-2 gap-8 max-[650px]:grid-cols-1 max-[650px]:gap-5">
              {petImage.map((img, index) => (
                <div
                  key={index}
                  className=" rounded-3xl drop-shadow-md  h-80 overflow-hidden max-[650px]:h-60"
                >
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </section>
          <section className=" py-4 ">
            <h1 className=" text-[#4A4949] text-3xl font-bold">
              Characteristics
            </h1>
            <div className=" grid grid-cols-3 gap-5 my-4 max-[650px]:grid-cols-2 font-Nunito">
              <ConfirmHelper agr={characteristics.petName} agr2="Pet's Name" />
              <ConfirmHelper agr={characteristics.petAge} agr2="Age" />
              <ConfirmHelper agr={characteristics.petSize} agr2="Size" />
              <ConfirmHelper agr={characteristics.petSex} agr2="Sex" />
              <ConfirmHelper agr={characteristics.petColor} agr2="Color" />
              <ConfirmHelper agr={characteristics.petBreed} agr2="Breed" />
            </div>
          </section>
          <section className=" py-4 ">
            <h1 className=" text-[#4A4949] text-3xl font-bold">Pet's Story</h1>
            <div className=" bg-white px-3.5 rounded-lg drop-shadow-md mt-6 py-3.5">
              {petStory}
            </div>
          </section>
          <section className=" py-4 ">
            <h1 className=" text-[#4A4949] text-3xl font-bold">Key Facts</h1>
            <div className=" grid grid-cols-4 gap-5 my-4 max-[650px]:grid-cols-2 font-Nunito">
              <ConfirmHelper agr={keyFact.Microchipped} agr2="Microchipped" />
              <ConfirmHelper agr={keyFact.HouseTrained} agr2="House trained" />
              <ConfirmHelper agr={keyFact.GoodWithCat} agr2="Good with Cat" />
              <ConfirmHelper agr={keyFact.GoodWithDog} agr2="Good with Dog" />
              <ConfirmHelper
                agr={keyFact.GoodWithChild}
                agr2="Good with Child"
              />
              <ConfirmHelper agr={keyFact.purebred} agr2="Purebred" />
              <ConfirmHelper
                agr={keyFact.BehaviorIssues}
                agr2="Behaviour Issues"
              />
              <ConfirmHelper
                agr={keyFact.SpecialNeed}
                agr2="Has Special needs"
              />
            </div>
          </section>
          <section className=" flex justify-between max-[650px]:flex-col max-[650px]:gap-5">
            <button
              className=" border-[#96c16d] hover:text-[#5FA501] bg-[#96c16d]
        hover:bg-white px-20 border-2 text-white rounded-lg font-semibold py-3
        drop-shadow-md"
              onClick={() => {
                navigator(-1);
                window.scrollTo(0, 0);
              }}
            >
              Previous
            </button>
            <button
              className="border-[#5FA501] hover:text-[#5FA501] bg-[#5FA501]
        hover:bg-white px-20 border-2 text-white rounded-lg font-semibold py-3
        drop-shadow-md"
              onClick={handelSubmit}
            >
              List My Pet
            </button>
          </section>
        </section>
      </section>
      <Footer />
      <Toaster />
    </>
  );
}

export default Confirm;
