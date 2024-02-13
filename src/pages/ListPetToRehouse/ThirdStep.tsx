import React, { useContext } from "react";
import Header from "../../components/Header";
import Count from "./Count";
import Footer from "../../components/Footer";
import { Characteristics, User } from "../../interface/interface";
import { ThemeContext } from "../../globleContext/context";
import { ListingContext } from "../../globleContext/ListingContext";
import { useNavigate } from "react-router-dom";
import ThirdHelperPhoto from "./ThirdHelperPhoto";
import { InputCard, PetAge, PetName } from "./DropdownForThirdStep";
import { colors, gender, size } from "../../data/RehousingReason";

function ThirdStep() {
  const { userDetails }: { userDetails?: User } = useContext(ThemeContext);
  const navigator = useNavigate();

  const { pet, reason, time, characteristics } = useContext(ListingContext) as {
    pet: string;
    reason: string;
    time: string;
    characteristics: Characteristics;
  };

  // if (!pet || !reason! || !time) {
  //   navigator("/rehouse-a-pet");
  // }
  console.log(characteristics);
  if (!userDetails) {
    navigator("/login");
  }

  return (
    <>
      <Header />
      <Count />
      <section
        className="text-[#777777] text-center justify-center flex items-center px-40 font-Nunito
       max-[650px]:px-10 gap-5 max-[950px]:px-20 max-[650px]:text-start flex-col my-8 max-[650px]:my-4"
      >
        <p>
          In this section, you will be providing information about your pet.
          Please take the time to complete this section as fully as possible.
          <span className=" font-bold">
            {" "}
            This information forms the basis for your pet's listing, and you
            want to be sure you attract the best adopters!
          </span>
        </p>
        <p>
          Please choose great photos, and upload any useful documents.{" "}
          <span className=" font-bold">Please be honest about your pet.</span>{" "}
          PetCares is here to help people responsibly rehouse their pets, and we
          encourage rehousers to be truthful when describing their pets.{" "}
        </p>
        <p>
          <span className=" font-bold">
            DO NOT INCLUDE ANY PERSONAL IDENTIFYING INFORMATION IN THE 'PETS{" "}
            <br />
          </span>
          STORY' SECTION (Once approved by us, your "pet's story" section will
          be visible to the public)
        </p>
        <p className=" font-bold">
          Please note - if your pet is less than one year old, please select the
          age as 0
        </p>
      </section>
      <section className=" px-10 max-[650px]:px-6">
        <section className=" rounded-3xl bg-[#F0F0F0] px-14 max-[650px]:px-8 py-10 font-Nunito">
          <section className=" my-8  max-[650px]:my-4">
            <h1 className=" text-[#4A4949] text-3xl font-bold">Photos</h1>
            <p className="text-[#777777] font-semibold my-5 ">
              You can add up to 4 photos (.jpg, .png, .jpeg). For the best
              results please upload landscape or square images.
            </p>
            <ThirdHelperPhoto />
          </section>
          <section className=" my-8">
            <h1 className=" text-[#4A4949] text-3xl font-bold">
              Characteristics
            </h1>
            <form
              action=""
              className=" grid grid-cols-2 gap-5 my-4 max-[650px]:grid-cols-1 font-Nunito"
            >
              <PetName />
              <PetAge />
              <InputCard Name="petSize" Data={size} label="Size" />
              <InputCard Name="petSex" Data={gender} label="Sex" />
              <InputCard Name="petColor" Data={colors} label="Colours" />
            </form>
          </section>
        </section>
      </section>
      <Footer />
    </>
  );
}

export default ThirdStep;
