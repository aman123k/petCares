import React from "react";
import { Link } from "react-router-dom";
import giveDogBg from "../images/desktop-banner-dog-light-green.jpg";
import Header from "../components/Header";
import Footer from "../components/Footer";
import donate_vet from "../images/donate_vet.jpeg";
import vet from "../images/5-vet.jpg";
import card from "../images/card.png";

function DonateNeuter() {
  return (
    <>
      <Header />
      <section className=" object-cover relative text-white font-Nunito ">
        <section className=" py-24 mb-28 px-20 max-[650px]:mb-0 max-[400px]:py-14 max-[400px]:px-8">
          <h1 className="font-semibold tracking-wider text-lg max-[650px]:text-sm min-[2000px]:ml-[28%]">
            <Link to="/">Home </Link>/ Donate To Our Neuter Fund
          </h1>
          <h3 className=" font-bold text-4xl tracking-wide max-[650px]:text-2xl mt-3 min-[2000px]:ml-[28%]">
            Donate To Our Neuter Fund
          </h3>
        </section>
        <img
          src={giveDogBg}
          alt=""
          className=" object-cover absolute top-0 -z-10 w-full  h-96 max-[650px]:h-56"
        />
      </section>
      <section
        className=" font-Nunito flex px-16 flex-col bg-[#F9F9F9] gap-8  max-[650px]:w-full
    max-[850px]:gap-6 max-[650px]:gap-0 max-[650px]:px-8 pb-7 max-[950px]:px-10"
      >
        <section
          className=" flex mx-6 mt-10 items-center max-[850px]:gap-4 max-[650px]:gap-5 gap-6
       max-[850px]:flex-col max-[850px]:w-full max-[850px]:mx-3 max-[650px]:mx-0 max-[650px]:px-0 
        min-[2000px]:ml-[50%] min-[2000px]:translate-x-[-50%] mix-blend-multiply"
        >
          <div className=" flex flex-col gap-5 max-[850px]:w-full w-[55%] text-[#595959]">
            <h1 className=" font-bold text-3xl text-[#484848]  tracking-wide">
              Help us to neuter the India's pets!
            </h1>

            <p className="tracking-wide text-[#777777]">
              Maybe the time isn't right for you to adopt a pet, however you can
              help in another way.
            </p>
            <p className="tracking-wide text-[#777777]">
              Every year thousands of dogs, cats, rabbits and parrot are brought
              into this world through accidental litters, yet we know we don't
              have enough homes for them!
            </p>
            <div className=" flex flex-col items-center gap-4">
              <h1 className=" font-bold text-3xl text-[#484848] tracking-wide">
                We don't want to turn away un-neutered pets at PetCares
              </h1>
              <p className="tracking-wide text-[#777777]">
                In an ideal scenario, pets should undergo neutering before
                finding new homes. However, in the real world, at Petcares, our
                priority is to facilitate the adoption of family pets by
                responsible individuals.
              </p>
              <p className="tracking-wide text-[#777777]">
                We understand that neutering can be an additional expense for
                adopters. Therefore, we've established our Neuter Fund to
                support PetCares adopters in taking the responsible step.
              </p>
              <p className="tracking-wide text-[#777777]">
                This initiative marks just the beginning of our journey. With
                your support, we aim to positively impact the lives of many
                dogs, cats, rabbits, and parrots across the India!
              </p>
            </div>
            <button
              className=" bg-[#5FA501] w-max text-white font-semibold px-16 py-3
            rounded-lg text-lg"
            >
              Donate Now
            </button>
            <span className=" h-8 w-72">
              <img
                src={card}
                alt=""
                className=" mix-blend-multiply w-full h-full"
              />
            </span>
          </div>
          <img
            src={donate_vet}
            alt=""
            className="w-[45%] max-[650px]:w-full  max-[850px]:w-[80%] min-[1350px]:h-[28rem] object-contain mix-blend-multiply"
          />
        </section>
        <section
          className=" flex mx-6 px-5 mt-10 items-center max-[650px]:mt-10 max-[850px]:gap-4 gap-6
       max-[850px]:flex-col-reverse max-[850px]:w-full max-[850px]:mx-3 max-[650px]:mx-0 max-[650px]:px-0 
        min-[2000px]:ml-[50%] min-[2000px]:translate-x-[-50%] mix-blend-multiply"
        >
          <img
            src={vet}
            alt=""
            className="w-[45%] max-[650px]:w-full  max-[850px]:w-[80%] min-[1350px]:h-[28rem] object-contain mix-blend-multiply"
          />
          <div className=" flex flex-col gap-5 max-[850px]:w-full w-[55%] text-[#595959]">
            <h3 className=" font-bold text-xl text-[#090808]  tracking-wide">
              How will it work?
            </h3>
            <p className="tracking-wide text-[#777777]">
              If you adopt a pet through the PetCares service and find that it
              hasn't been neutered, we may offer assistance with the associated
              expenses.
            </p>
            <p className="tracking-wide text-[#777777]">
              Pending availability of funds, we can reimburse a portion of the
              cost once the procedure has been performed by a qualified
              veterinarian at a veterinary practice in the India.
            </p>
            <p className="tracking-wide text-[#777777]">
              If you have used our service and would like to request our help,
              please{" "}
              <Link to="/contact-petcares" className=" text-[#97C936]">
                contact us with details.
              </Link>
            </p>
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
}

export default DonateNeuter;
