import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import HallFrame from "../../images/tips-for-rehomers-single.jpg";

function TipsForAdop() {
  return (
    <>
      <Header />
      <section className=" bg-[#F9F9F9] max-[650px]:py-8 py-14 px-10 max-[650px]:px-5">
        <section
          className=" font-Nunito flex flex-col gap-6 bg-white drop-shadow-xl max-[650px]:w-full max-[650px]:rounded-3xl
        max-[850px]:gap-4 max-[650px]:gap-0 rounded-[32px] py-16 px-8 max-[650px]:py-10 text-[#595959]
         min-[2000px]:ml-[50%] min-[2000px]:translate-x-[-50%] "
        >
          <section className=" flex-col flex justify-center max-[1050px]:px-28 max-[850px]:px-16 max-[650px]:px-3.5 px-56 gap-4 max-[]:">
            <h1 className=" text-center text-4xl text-[#595959] font-bold max-[650px]:text-2xl">
              Top tips for adopters
            </h1>
            <img src={HallFrame} alt="" />
          </section>
          <section className=" flex-col flex justify-center max-[1050px]:px-28 max-[850px]:px-16 max-[650px]:px-3.5 px-56 gap-4 text-center  max-[]:">
            <h1 className=" text-center text-3xl text-[#595959] font-bold max-[650px]:text-xl max-[650px]:mt-5">
              How to make the adoption process go smoothly
            </h1>
            <p className=" text-lg max-[650px]:text-sm">
              At PetCares, we want all adoptions to be a ‘happy ever after’ –
              for humans and pets alike. So before you start the process, check
              out our top tips for a successful adoption
            </p>
          </section>
          <section className=" flex-col flex justify-center max-[1050px]:px-28 max-[850px]:px-16 max-[650px]:px-3.5 px-56 gap-6 mt-10 max-[]:">
            <div className="flex-col flex gap-4">
              <h1 className=" text-2xl text-[#0f0e0e] font-bold max-[650px]:text-xl">
                Create a strong profile
              </h1>
              <p className="  break-words text-[17px] tracking-wide max-[650px]:text-sm">
                <Link to="/login" className="text-[#8EC02B]">
                  {" "}
                  Create your adopter
                </Link>{" "}
                profile before you make an enquiry. Include lots of information
                about you, your home, your lifestyle, whether you’ve had pets
                before, and what kind of pet you’re looking for. You’re more
                likely to get chosen by a rehomer if you have a great profile.
              </p>
            </div>
            <div className="flex-col flex gap-4">
              <h1 className=" text-2xl text-[#0f0e0e] font-bold mt-2 max-[650px]:text-xl">
                Don’t take the conversation off PetCares
              </h1>
              <p className="  break-words text-[17px] tracking-wide max-[650px]:text-sm">
                To ensure the safety of everyone involved, exclusively utilize
                our online messaging service when communicating with rehomers.
                Avoid sharing any personal information, including email
                addresses, phone numbers, home addresses, or bank details. If
                anyone requests such information, please notify us immediately
                for appropriate action. Prioritizing privacy safeguards both
                parties involved in the adoption process.
              </p>
            </div>
            <div className="flex-col flex gap-4">
              <h1 className=" text-2xl text-[#0f0e0e] font-bold mt-2 max-[650px]:text-xl">
                Find a pet that suits your lifestyle
              </h1>
              <p className="  break-words text-[17px] tracking-wide max-[650px]:text-sm">
                To enhance your likelihood of a successful adoption, focus on
                applying for pets that align with your lifestyle and the level
                of commitment you can provide.
              </p>
              <p className="  break-words text-[17px] tracking-wide max-[650px]:text-sm">
                Consider the following examples: If you reside in a city and
                plan to frequent busy urban parks, avoid applying for a nervous
                dog accustomed to countryside living. If you require a pet that
                can handle occasional periods alone, refrain from applying for a
                pet with separation anxiety. Choose a cat accustomed to outdoor
                activities if you prefer a non-indoor cat. If you can't commit
                to regular daily dog walks, consider that a cat or rabbits might
                be a more suitable option for you. Matching your lifestyle and
                commitment level with the needs of the pet sets the foundation
                for a harmonious and fulfilling relationship.
              </p>
            </div>
            <div className="flex-col flex gap-4">
              <h1 className=" text-xl text-[#0f0e0e] font-bold mt-2 max-[650px]:text-xl">
                Ask lots of questions
              </h1>
              <p className="  break-words text-[17px] tracking-wide max-[650px]:text-sm">
                PetCares team and the rehouser. Asking numerous questions allows
                you to gather essential information and make informed decisions
                about your potential new furry companion.
              </p>
            </div>
            <div className="flex-col flex gap-4">
              <h1 className=" text-2xl text-[#0f0e0e] font-bold mt-2 max-[650px]:text-xl">
                Get the right paperwork
              </h1>
              <p className="  break-words text-[17px] tracking-wide max-[650px]:text-sm">
                Ensure to inquire with the rehouser for comprehensive details
                about the pet, including their current vet information,
                vaccination records, microchip details, flea and worming
                treatments, and any other pertinent paperwork. This information
                is crucial for the well-being and proper care of the pet.
              </p>
            </div>
            <div className="flex-col flex gap-4">
              <h1 className=" text-2xl text-[#0f0e0e] font-bold mt-2 max-[650px]:text-xl">
                Only go through with the adoption if you’re sure
              </h1>
              <p className="  break-words text-[17px] tracking-wide max-[650px]:text-sm">
                Once the pet is handed over to you, you assume legal ownership.
                It's important to note that there is no provision for returning
                the pet to its original home if you have a change of heart.
                Additionally, please be aware that PetRehomer is not a rescue
                service, and as such, we are unable to take the pet into our
                care in case you encounter difficulties. Responsible ownership
                entails a commitment to the well-being of the adopted pet for
                the entirety of their lives.
              </p>
              <p className="  break-words text-[17px] tracking-wide max-[650px]:text-sm">
                Commit to the adoption only if you are absolutely certain it is
                the right decision for you. If the rehomer concurs, consider
                visiting your potential new pet multiple times before reaching a
                final decision. Utilize our checklist during these visits to
                ensure that you've thoroughly addressed all the important
                considerations before proceeding with the adoption. Taking the
                time for these visits can contribute to a more informed and
                confident decision-making process.
              </p>
              <ul>
                <Link to="">
                  <li className="text-[#96C830] mt-2">
                    Checklist for cat adopters
                  </li>
                </Link>
                <Link to="">
                  <li className="text-[#96C830] mt-2">
                    Checklist for dog adopters
                  </li>
                </Link>
                <Link to="">
                  <li className="text-[#96C830] mt-2">
                    Checklist for rabbit adopters
                  </li>
                </Link>
                <Link to="">
                  <li className="text-[#96C830] mt-2">
                    Checklist for Parrot adopters
                  </li>
                </Link>
              </ul>
            </div>
            <div className="flex-col flex gap-4">
              <h1 className=" text-2xl text-[#0f0e0e] font-bold mt-2 max-[650px]:text-xl">
                Be sensitive and respectful towards the rehomer
              </h1>
              <p className="  break-words text-[17px] tracking-wide max-[650px]:text-sm">
                For most people, giving up a pet for adoption is heart-breaking.
                Please bear this in mind when you’re chatting to a rehomer.
                Don’t contact them once you’ve taken your new pet home – speak
                to us first.
              </p>
            </div>
            <div className="flex-col flex gap-4">
              <h1 className=" text-2xl text-[#0f0e0e] font-bold mt-2 max-[650px]:text-xl">
                Get in touch with us if you’re having problems
              </h1>
              <p className="  break-words text-[17px] tracking-wide max-[650px]:text-sm">
                PetCares is a direct rehousing service, not a rescue
                organisation. We don’t have the facilities or means to take pets
                into our care. However, we offer a post-adoption support service
                so please{" "}
                <Link to="/contact-petcares" className=" text-[#99C739]">
                  get in touch
                </Link>{" "}
                immediately if you’re having any issues or you’ve got any
                questions.
              </p>
            </div>
          </section>
          <button
            className="mt-10 text-white bg-[#5E9E3C] px-7 py-4 tracking-wider font-semibold
           w-max ml-[50%] translate-x-[-50%] rounded-lg "
          >
            <Link to="/adopt-a-pet">Browse available Pet</Link>
          </button>
        </section>
      </section>
      <Footer />
    </>
  );
}

export default TipsForAdop;
