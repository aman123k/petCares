import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { FaRegHeart } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import Slider from "./Slider";
import getFavorites from "../../function/getFavorites";
import addFavorite from "../../function/addFavorite";
import { Toaster } from "react-hot-toast";
import { ThemeContext } from "../../globalContext/context";
import { User } from "../../interface/interface";
import { GoPerson } from "react-icons/go";
import checkFee from "../../function/checkFeeFun";
import useCreateChat from "../../customHooks/CreateChat";
import useReceivePets, {
  PetsDataType,
} from "../../customHooks/ReceivePetsData";
import { KeyFact } from "../../data/data";
import { GoCheck } from "react-icons/go";
import useStripe from "../../customHooks/UseStripe";
const url = process.env.REACT_APP_URL as string;

function PetDetails() {
  const { id } = useParams();
  const { userDetails }: { userDetails?: User } = useContext(ThemeContext);
  const [showImage, setShowImage] = useState<boolean>(false);
  const { allPetsData } = useReceivePets("all", "all");
  const [favorites, setFavorites] = useState<Array<PetsDataType> | null>(null);
  const [currentPetsInfo, setCurrentPetInfo] = useState<
    PetsDataType | undefined | null
  >();
  const fee = checkFee(
    currentPetsInfo?.petType,
    currentPetsInfo?.characteristics.petAge
  );
  useEffect(() => {
    getFavorites({ setItems: setFavorites });
  }, []);
  const petData: PetsDataType = allPetsData.filter(
    (pets) => pets._id === id
  )[0];

  const favPet: PetsDataType | null =
    favorites?.filter((pets) => pets._id === id)[0] ?? null;

  useEffect(() => {
    if (favPet) {
      setCurrentPetInfo(favPet);
    } else {
      setCurrentPetInfo(petData);
    }
  }, [petData, favPet]);
  const [showFav, setShowFav] = useState<boolean>(false);

  useEffect(() => {
    if (currentPetsInfo?.Favorites?.includes(userDetails?.email ?? "")) {
      setShowFav(
        currentPetsInfo?.Favorites?.includes(userDetails?.email ?? "")
      );
    }
  }, [currentPetsInfo, userDetails]);
  const { chat } = useCreateChat({ url, email: currentPetsInfo?.Auth?.email });

  const { checkOut } = useStripe({
    id: id,
    fee: fee,
  });
  return (
    <section
      className={`${
        showImage ? "h-screen overflow-hidden" : ""
      } capitalize bg-[#F9F9F9]`}
    >
      <Header />
      <section
        className=" font-Nunito max-[650px]:px-6 px-8 flex items-center justify-between py-10
      min-[2000px]:ml-[50%] min-[2000px]:translate-x-[-50%]"
      >
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
            addFavorite({ id: currentPetsInfo?._id ?? "" });
            setShowFav(!showFav);
          }}
        >
          {showFav ? (
            <div title="remove from your favorite list">
              <FaHeart
                title="Add Pet in your favorite list"
                className=" text-white text-xl"
              />
            </div>
          ) : (
            <FaRegHeart
              title="Add Pet in your favorite list"
              className=" text-white text-xl"
            />
          )}
        </div>
      </section>
      <section
        className=" max-[650px]:px-6 px-8 flex gap-[2.5%] max-[650px]:gap-10 max-[650px]:flex-col pb-10 h-max
      min-[2000px]:ml-[50%] min-[2000px]:translate-x-[-50%]"
      >
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
      <section
        className=" max-[650px]:px-6 px-8 flex gap-[3%] border-t capitalize py-10 max-[650px]:flex-col
      min-[2000px]:ml-[50%] min-[2000px]:translate-x-[-50%]"
      >
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
                  <span className="text-[#595959]">Reason for re homing: </span>
                  <span className=" font-bold">{currentPetsInfo?.reason}</span>
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
                  <span className="text-[#595959]">Color: </span>
                  <span className=" font-bold">
                    {currentPetsInfo?.characteristics?.petColor}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className=" bg-white drop-shadow-lg rounded-lg px-8 py-6">
            <h1 className=" my-3 font-bold  text-xl text-[#595959]">
              Features
            </h1>
            <div className=" grid grid-cols-2 gap-3 max-[650px]:grid-cols-1 mt-2 text-sm tracking-wider">
              <div
                className={`flex items-center gap-3 ${
                  currentPetsInfo?.keyFact.Microchipped === "yes"
                    ? "block"
                    : "hidden"
                }`}
              >
                <GoCheck className=" text-xl flex-shrink-0 text-[#9BCC3A]" />
                {currentPetsInfo?.keyFact.Microchipped ? KeyFact[0] : ""}
              </div>
              <div
                className={`flex items-center gap-3 ${
                  currentPetsInfo?.keyFact.HouseTrained === "yes"
                    ? "block"
                    : "hidden"
                }`}
              >
                <GoCheck className=" text-xl flex-shrink-0 text-[#9BCC3A]" />
                {currentPetsInfo?.keyFact.HouseTrained ? KeyFact[1] : ""}
              </div>
              <div
                className={`flex items-center gap-3 ${
                  currentPetsInfo?.keyFact.GoodWithDog === "yes"
                    ? "block"
                    : "hidden"
                }`}
              >
                <GoCheck className=" text-xl flex-shrink-0 text-[#9BCC3A]" />
                {currentPetsInfo?.keyFact.GoodWithDog ? KeyFact[2] : ""}
              </div>
              <div
                className={`flex items-center gap-3 ${
                  currentPetsInfo?.keyFact.GoodWithCat === "yes"
                    ? "block"
                    : "hidden"
                }`}
              >
                <GoCheck className=" text-xl flex-shrink-0 text-[#9BCC3A]" />
                {currentPetsInfo?.keyFact.GoodWithCat ? KeyFact[3] : ""}
              </div>
              <div
                className={`flex items-center gap-3 ${
                  currentPetsInfo?.keyFact.GoodWithChild === "yes"
                    ? "block"
                    : "hidden"
                }`}
              >
                <GoCheck className=" text-xl flex-shrink-0 text-[#9BCC3A]" />
                {currentPetsInfo?.keyFact.GoodWithChild ? KeyFact[4] : ""}
              </div>
              <div
                className={`flex items-center gap-3 ${
                  currentPetsInfo?.keyFact.SpecialNeed === "yes"
                    ? "block"
                    : "hidden"
                }`}
              >
                <GoCheck className=" text-xl flex-shrink-0 text-[#9BCC3A]" />
                {currentPetsInfo?.keyFact.SpecialNeed ? KeyFact[5] : ""}
              </div>
              <div
                className={`flex items-center gap-3 ${
                  currentPetsInfo?.keyFact.BehaviorIssues === "yes"
                    ? "block"
                    : "hidden"
                }`}
              >
                <GoCheck className=" text-xl flex-shrink-0 text-[#9BCC3A]" />
                {currentPetsInfo?.keyFact.BehaviorIssues ? KeyFact[6] : ""}
              </div>
              <div
                className={`flex items-center gap-3 ${
                  currentPetsInfo?.keyFact.purebred === "yes"
                    ? "block"
                    : "hidden"
                }`}
              >
                <GoCheck className=" text-xl flex-shrink-0 text-[#9BCC3A]" />
                {currentPetsInfo?.keyFact.purebred ? KeyFact[7] : ""}
              </div>
            </div>
          </div>
        </section>
        <section className="w-[35%] font-Nunito max-[650px]:w-full flex-col flex gap-5 max-[650px]:mt-5">
          <div className=" bg-white drop-shadow-md px-6 py-4 rounded-lg">
            <h1 className=" my-4 text-[#595959] font-bold text-lg">
              Animal Location
            </h1>
            <p className=" text-[#a49f9f] font-semibold  tracking-wide">
              I'm being cared for by:
            </p>
            <p className=" my-2 text-[#595959] font-bold text-lg">
              Private Owner, {currentPetsInfo?.Auth?.name}
            </p>
            <div className=" flex justify-between items-center max-[650px]:flex-col gap-3 max-[650px]:items-start">
              <p className=" text-[#96C830] font-bold text-lg">
                Adoption Fee: ₹ {fee}
              </p>
              {currentPetsInfo?.Auth?.email !== userDetails?.email &&
              userDetails ? (
                <button
                  className="bg-[#96C830] text-white px-3 py-1.5 font-semibold rounded-lg
              border-[#96C830] border-2 hover:bg-white hover:text-[#96C830]"
                  onClick={() => chat()}
                >
                  Chat with owner
                </button>
              ) : (
                ""
              )}
            </div>
            {userDetails &&
              currentPetsInfo?.Auth?.email !== userDetails?.email && (
                <button
                  className="bg-[#96C830] text-white px-3 py-1.5 my-2 font-semibold rounded-lg
              border-[#96C830] border-2 w-full hover:bg-white hover:text-[#96C830]"
                  onClick={checkOut}
                >
                  Get Your New Best Friend
                </button>
              )}
          </div>
          {!userDetails && (
            <div
              className=" bg-white drop-shadow-md px-6 py-4 rounded-lg flex-col flex
           gap-5 p-3 font-Nunito"
            >
              <h1 className="text-[#595959] font-bold text-lg">
                Thinking about adoption...
              </h1>
              <p className=" tracking-wide text-[#A49F9F] font-semibold text-[1rem]">
                If you would like to make an application, please log in or
                register. As a first step, you will need to complete your
                adopter's profile.
              </p>

              <Link
                to="/login"
                className=" text-white bg-[#96C830] font-bold  py-2 border-[#96C830] border-2
                flex items-center gap-2 tracking-wide rounded-lg hover:text-[#96C830]
                hover:bg-white justify-center"
              >
                <GoPerson className=" text-xl" /> Login to Apply
              </Link>
            </div>
          )}
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
