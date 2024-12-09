import React, { useContext } from "react";
import {
  AnimalDropDown,
  ReasonDropDown,
  TimeDropDown,
} from "./helper/DropdownForFirstStep";
import toast from "react-hot-toast";
import { ListingContext } from "../../globleContext/ListingContext";
import { useNavigate } from "react-router-dom";

function FirstStep() {
  const { pet, reason, time } = useContext(ListingContext) as {
    pet: string;
    reason: string;
    time: string;
  };

  const navigator = useNavigate();
  const nextPage = () => {
    if (!pet) return toast.error("Select a pet to rehouse...");
    else if (!reason) return toast.error("Select a reason of rehousing...");
    else if (!time) return toast.error("Select time...");
    else {
      navigator("/rehouse-a-pet/about-you");
      window.scrollTo(0, 0);
    }
  };

  return (
    <>
      <section
        className=" mx-28 max-[950px]:mx-16 max-[650px]:ml-0 max-[650px]:mx-0
      max-[650px]:px-10 max-[650px]:py-4  py-8 font-Nunito 
        min-[2000px]:ml-[50%] min-[2000px]:translate-x-[-50%]"
      >
        <h1 className=" font-bold text-[#121212] text-3xl mb-2">
          Before you start…
        </h1>
        <p className=" text-[#777777] tracking-wide my-2.5">
          Please make sure you’ve read and agree to these points before you
          create a listing.
        </p>
        <ul className="text-[#777777] flex flex-col gap-3 my-7">
          <li>
            1. Listing your pet with our Site is free of charge, but{" "}
            <span className="font-bold"> you won't receive payment </span> for
            your pet.
          </li>
          <li>
            2.{" "}
            <span className="font-bold">
              Emergency rehousing assistance is not provided.
            </span>{" "}
            You must be able to care for your pet for at{" "}
            <span className="font-bold">least 4-6 weeks before rehousing,</span>{" "}
            with longer periods required during peak holiday times.
          </li>
          <li>
            3.{" "}
            <span className="font-bold">
              All pet listings are subject to approval by the PetCares team.
            </span>{" "}
            Your pet's profile will be thoroughly checked before posting, and we
            may reach out to you if we have any questions.
          </li>
          <li>
            4. Listings must include a detailed description of your pet along
            with <span className="font-bold"> 4 high-quality photos.</span>{" "}
            Failure to provide this information will result in{" "}
            <span className="font-bold">rejection of the listing,</span>{" "}
            requiring resubmission.
          </li>
          <li>
            5. We are not a rescue center and cannot take pets directly into our
            care.{" "}
            <span className="font-bold">
              Our role is to assist in finding a suitable adopter{" "}
            </span>{" "}
            for your pet.
          </li>
          <li>
            6. Our rehousing support is exclusively for pets residing in the{" "}
            <span className="font-bold">Delhi, Punjab, and Haryana. </span>
          </li>
          <li>
            7. Messages exchanged between{" "}
            <span className="font-bold">
              rehousers and adopters are monitored to ensure safety for all
              parties
            </span>{" "}
            involved.
          </li>
          <li>
            8. Prior to listing your pet, please ensure you agree to the{" "}
            <span className="font-bold">terms outlined above.</span>
          </li>
          <li>
            9. By submitting a listing, you acknowledge your responsibility to
            <span className="font-bold">
              {" "}
              provide accurate information about your pet{" "}
            </span>
            and to abide by our rehousing process.
          </li>
          <li>
            10. Our aim is to facilitate a{" "}
            <span className=" font-bold">
              smooth and responsible transition for pets{" "}
            </span>{" "}
            in need of rehousing, while prioritizing their welfare and safety.
          </li>
        </ul>
      </section>
      <section className="bg-[#DCEAC9]">
        <section
          className=" px-28 max-[950px]:px-16 max-[650px]:ml-0 max-[650px]:mx-0
      max-[650px]:px-10 max-[650px]:py-10 flex flex-col gap-8 py-16 font-Nunito   min-[2000px]:ml-[50%] min-[2000px]:translate-x-[-50%]"
        >
          <div
            className=" flex gap-8 justify-between max-[650px]:flex-col max-[650px]:w-full
        items-center"
          >
            <h1 className=" text-lg font-bold text-[#151515]">
              Are you rehoming a dog, cat or other pet?
            </h1>
            <AnimalDropDown />
          </div>
          <div
            className=" flex gap-8 justify-between max-[650px]:flex-col max-[650px]:w-full
        items-center"
          >
            <h1 className=" text-lg font-bold text-[#151515]">
              Why do you need to rehome your pet?
            </h1>
            <ReasonDropDown />
          </div>
          <div
            className=" flex gap-8 justify-between max-[650px]:flex-col max-[650px]:w-full
        items-center"
          >
            <h1 className=" text-lg font-bold text-[#151515]">
              How long are you able to keep your pet while we help find a
              suitable new home?
            </h1>
            <TimeDropDown />
          </div>
          <button
            className=" ml-auto border-[#5FA501] hover:text-[#5FA501] bg-[#5FA501]
        hover:bg-white px-20 max-[650px]:ml-0 border-2 text-white rounded-lg font-semibold py-3
        drop-shadow-md"
            onClick={nextPage}
          >
            Next
          </button>
        </section>
      </section>
    </>
  );
}

export default FirstStep;
