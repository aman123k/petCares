import React, { useContext, useEffect, useRef, useState } from "react";
import Header from "../../components/Header";
import Count from "./Count";
import Footer from "../../components/Footer";
import { Characteristics, KeyFacts, User } from "../../interface/interface";
import { ThemeContext } from "../../globleContext/context";
import { ListingContext } from "../../globleContext/ListingContext";
import { useNavigate } from "react-router-dom";
import ThirdHelperPhoto from "./ThirdHelperPhoto";
import { InputCard, KeyFect, PetAge, PetName } from "./DropdownForThirdStep";
import { RxDot } from "react-icons/rx";
import { BsArrowRightCircle } from "react-icons/bs";
import {
  catBread,
  colors,
  dogBread,
  gender,
  parrotBread,
  rabbitBread,
  size,
} from "../../data/data";
import ThirdHelperContent from "./ThirdHelperContent";

function ThirdStep() {
  const { userDetails }: { userDetails?: User } = useContext(ThemeContext);
  const [activeSection, setActiveSection] = useState<string>("");
  const navigator = useNavigate();
  const viewBox = useRef<{ [key: string]: HTMLDivElement | null }>({
    photos: null,
    characteristics: null,
    keyFacts: null,
  });

  const {
    pet,
    reason,
    time,
    characteristics,
    petStory,
    setPetStory,
    keyFact,
    petImage,
  } = useContext(ListingContext) as {
    pet: string;
    reason: string;
    time: string;
    characteristics: Characteristics;
    petStory: string;
    keyFact: KeyFacts;
    petImage: string[];
    setPetStory: React.Dispatch<React.SetStateAction<string>>;
  };

  // if (!pet || !reason! || !time) {
  //   navigator("/rehouse-a-pet");
  // }
  if (!userDetails) {
    navigator("/login");
  }
  useEffect(() => {
    const handleScroll = () => {
      let active = "";
      Object.keys(viewBox.current).forEach((key) => {
        const ref = viewBox.current[key];
        if (ref) {
          const top = ref.getBoundingClientRect().top;
          if (top <= window.innerHeight / 2) {
            active = key;
          }
        }
      });
      setActiveSection(active);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleView = (arg: string) => {
    const targetRef = viewBox.current[arg];
    if (targetRef) {
      targetRef.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <Header />
      <Count />
      <ThirdHelperContent />
      <section className=" flex max-[950px]:flex-col my-8 max-[950px]:gap-8 ">
        <section
          className=" w-[20%] flex-shrink-0 px-6 max-[950px]:px-8 max-[950px]:w-full sticky 
        max-[950px]:relative max-[950px]:top-auto top-44 border-b-2 pb-6 border-dotted h-max
        font-Nunito"
        >
          <ul className=" flex flex-col gap-7 select-none max-[950px]:px-10 max-[950px]:py-4 max-[650px]:px-6  text-[#4A4949]">
            <li
              onClick={() => handleView("Photos")}
              className=" flex text-lg items-center justify-between font-bold
              cursor-pointer"
            >
              Photos
              <BsArrowRightCircle
                className={`text-3xl  ${
                  activeSection === "Photos"
                    ? "text-[#5FA501]"
                    : "text-[#9a9999]"
                } `}
              />
            </li>
            <li
              onClick={() => handleView("Characteristics")}
              className=" flex text-lg items-center justify-between font-bold 
              cursor-pointer"
            >
              Characteristics
              <BsArrowRightCircle
                className={`text-3xl  ${
                  activeSection === "Characteristics"
                    ? "text-[#5FA501]"
                    : "text-[#9a9999]"
                } `}
              />
            </li>
            <li
              onClick={() => handleView("KeyFacts")}
              className=" flex text-lg items-center justify-between font-bold 
              cursor-pointer"
            >
              Key Facts
              <BsArrowRightCircle
                className={`text-3xl  ${
                  activeSection === "KeyFacts"
                    ? "text-[#5FA501]"
                    : "text-[#9a9999]"
                } `}
              />
            </li>
            <li
              onClick={() => handleView("PetLocation")}
              className=" flex text-lg items-center justify-between font-bold 
              cursor-pointer"
            >
              Pet's Location
              <BsArrowRightCircle
                className={`text-3xl  ${
                  activeSection === "PetLocation"
                    ? "text-[#5FA501]"
                    : "text-[#9a9999]"
                } `}
              />
            </li>
            <li
              onClick={() => handleView("Petstory")}
              className=" flex text-lg items-center justify-between font-bold
              cursor-pointer"
            >
              Pet's Story
              <BsArrowRightCircle
                className={`text-3xl  ${
                  activeSection === "Petstory"
                    ? "text-[#5FA501]"
                    : "text-[#9a9999]"
                } `}
              />
            </li>
          </ul>
        </section>

        <section
          className=" rounded-3xl bg-[#F0F0F0] px-14 max-[650px]:px-8 mx-5 max-[650px]:mx-6 py-10
        max-[950px]:mx-10 max-[650px]:py-6 font-Nunito"
        >
          <section
            ref={(el) => el && (viewBox.current.Photos = el as HTMLDivElement)}
            className=" my-8  max-[650px]:my-4"
          >
            <h1 className=" text-[#4A4949] text-3xl font-bold">Photos</h1>
            <p className="text-[#777777] font-semibold my-5 ">
              You can add up to 4 photos (.jpg, .png, .jpeg). For the best
              results please upload landscape or square images.
            </p>
            <ThirdHelperPhoto />
          </section>
          <section
            ref={(el) =>
              el && (viewBox.current.Characteristics = el as HTMLDivElement)
            }
            className=" py-8"
          >
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
              {pet === "dog" ? (
                <InputCard Name="petBreed" Data={dogBread} label="Breed(s)" />
              ) : pet === "cat" ? (
                <InputCard Name="petBreed" Data={catBread} label="Breed(s)" />
              ) : pet === "rabbit" ? (
                <InputCard
                  Name="petBreed"
                  Data={rabbitBread}
                  label="Breed(s)"
                />
              ) : (
                <InputCard
                  Name="petBreed"
                  Data={parrotBread}
                  label="Breed(s)"
                />
              )}
            </form>
          </section>
          <section
            ref={(el) =>
              el && (viewBox.current.KeyFacts = el as HTMLDivElement)
            }
            className=" py-8"
          >
            <h1 className=" text-[#4A4949] text-3xl font-bold">Key Facts</h1>
            <section className=" my-8 w-[60%] flex flex-col gap-6">
              <KeyFect label="Microchipped" keyname="Microchipped" />
              <KeyFect label="House trained" keyname="HouseTrained" />
              <KeyFect label="Good with Cat" keyname="GoodWithCat" />
              <KeyFect label="Good with Dog" keyname="GoodWithDog" />
              <KeyFect label="Good with Child" keyname="GoodWithChild" />
              <KeyFect label="Behaviour Issues" keyname="BehaviourIssues" />
              <KeyFect label="Purebred" keyname="purebred" />
            </section>
          </section>
          <section
            ref={(el) =>
              el && (viewBox.current.PetLocation = el as HTMLDivElement)
            }
            className=" my-6"
          >
            <h1 className=" text-[#4A4949] text-3xl font-bold">
              Pet's Location
            </h1>
            <div className=" mt-6">
              <div className=" w-[40%] flex flex-col gap-3">
                <p className=" capitalize text-[#777777] tracking-wide font-Nunito ">
                  please enter the postcode of your pet's address
                </p>
                <input
                  type="text"
                  className="w-full py-3 px-3.5 rounded-lg "
                  placeholder="Start typing your postcode"
                />
              </div>
            </div>
          </section>
          <section
            ref={(el) =>
              el && (viewBox.current.Petstory = el as HTMLDivElement)
            }
            className=" flex flex-col gap-3 py-6"
          >
            <div className="text-[#777777] font-Nunito">
              <h1 className=" text-[#4A4949] text-3xl font-bold">
                Pet's Story
              </h1>
              <p className=" my-3 tracking-wide">
                Share anything here about your pet. (Your pet profile will be
                visible to the public. For your safety, do not include any
                personal details or contact information). Include information
                such as:
              </p>
              <ul className=" my-3 px-4 flex flex-col max-[650px]:px-0  gap-2">
                <li className=" flex items-center gap-2">
                  <RxDot className=" flex-shrink-0 text-xl font-bold" />
                  <span>
                    <span className=" font-bold">Your pet’s history:</span> how
                    long you’ve had them, where you got them from and why you
                    need to rehome them
                  </span>
                </li>
                <li className=" flex items-center gap-2">
                  <RxDot className=" flex-shrink-0 text-xl font-bold" />
                  <span>
                    {" "}
                    <span className=" font-bold">
                      {" "}
                      Details about who your pet has lived
                    </span>{" "}
                    with, eg children and other pets
                  </span>
                </li>
                <li className=" flex items-center gap-2">
                  <RxDot className=" flex-shrink-0 text-xl font-bold" />
                  <span>
                    {" "}
                    Your pet’s <span>favourite activities</span>
                  </span>
                </li>
                <li className=" flex items-center gap-2">
                  <RxDot className=" flex-shrink-0 text-xl font-bold" />
                  <span>
                    A description of their{" "}
                    <span className=" font-bold">
                      personality, preferences and habits
                    </span>
                  </span>
                </li>
                <li className=" flex items-center gap-2">
                  <RxDot className=" flex-shrink-0 text-xl font-bold" />
                  <span>
                    <span className=" font-bold">
                      Anything they’re scared of{" "}
                    </span>
                    such as fireworks, people in uniform, other animals
                  </span>
                </li>
                <li className=" flex items-center gap-2">
                  <RxDot className=" flex-shrink-0 text-xl font-bold" />
                  <span>
                    {" "}
                    <span className=" font-bold">
                      {" "}
                      The type of food they eat
                    </span>{" "}
                    including the brand and amount.
                  </span>
                </li>
                <li className=" flex items-center gap-2">
                  <RxDot className=" flex-shrink-0 text-xl font-bold" />
                  <span>
                    {" "}
                    <span className=" font-bold">
                      {" "}
                      Allergies, health conditions,
                    </span>{" "}
                    and any medications your pet takes
                  </span>
                </li>
              </ul>
            </div>
            <textarea
              name=""
              id=""
              cols={30}
              rows={8}
              value={petStory}
              className=" px-3.5 py-3 w-full my-2 rounded-lg"
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setPetStory(e.currentTarget.value)
              }
            ></textarea>
          </section>
        </section>
      </section>

      <Footer />
    </>
  );
}

export default ThirdStep;
