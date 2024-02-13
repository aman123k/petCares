import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { RxDotFilled } from "react-icons/rx";

import one_bed from "../../images/1-rabbit.jpeg";
import food from "../../images/2-food.jpeg";
import game from "../../images/3-exercise.jpg";
import companion from "../../images/4-rabbit.jpeg";
import vet from "../../images/6-vet.jpg";

function PreparingRabbit() {
  return (
    <>
      <Header />
      <section className=" bg-[#F9F9F9] max-[650px]:py-8 py-12 px-10 max-[650px]:px-5">
        <section
          className=" font-Nunito flex flex-col bg-white drop-shadow-xl max-[650px]:w-full max-[650px]:rounded-3xl
    max-[850px]:gap-4 max-[650px]:gap-0 rounded-[32px] py-14 px-8 max-[650px]:py-10"
        >
          <section className=" px-[17%] flex flex-col gap-4 mb-4 max-[850px]:px-5 max-[650px]:px-0 text-[#595959]">
            <h1 className="font-bold text-4xl max-[650px]:text-3xl">
              How to prepare for your new rabbit:
            </h1>
            <h3 className="font-bold text-3xl max-[650px]:text-2xl">
              5 things you must do
            </h3>
            <p className=" mt-3 text-base">
              Adopting a rabbit is a wonderful thing to do, but these small
              creatures come with a big responsibility. Sadly, rabbits are
              regularly neglected and not given the complex care they need…
            </p>
            <p className=" mt-3 text-base">
              Just like cats and dogs, rabbits are protected by the India’s
              Animal Welfare Act. This means you’re legally obliged to give your
              rabbit:
            </p>
            <ul className=" mt-4 flex flex-col  gap-2">
              <li className=" flex items-center text-[#595959] gap-2">
                <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                A suitable place to live
              </li>
              <li className=" flex items-center text-[#595959] gap-2">
                <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                A healthy diet and access to clean water
              </li>
              <li className=" flex items-center text-[#595959] gap-2">
                <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                The ability to behave normally
              </li>
              <li className=" flex items-center text-[#595959] gap-2">
                <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                Appropriate company
              </li>
              <li className=" flex items-center text-[#595959] gap-2">
                <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                Protection from pain, injury, suffering and disease
              </li>
            </ul>
            <p>
              To ensure your new pet's happiness, health, and safety, we've
              compiled a list of five essential tasks to complete before their
              arrival. Additionally, our veterinarian, Harriet, has created a
              video packed with valuable advice on how to prepare for your
              rabbit.
            </p>
          </section>

          <section
            className=" flex mx-14 px-5 mt-16 gap-4 pb-12 items-center border-b max-[650px]:mt-10
       max-[850px]:flex-col-reverse max-[850px]:w-full max-[850px]:mx-3 max-[650px]:mx-0 max-[650px]:px-0 "
          >
            <img
              src={one_bed}
              alt=""
              className="w-[50%]  max-[850px]:w-[80%] max-[650px]:w-full min-[1350px]:h-[28rem] object-contain"
            />
            <div className=" flex flex-col gap-3 max-[850px]:w-full w-[50%]">
              <h1 className=" font-bold text-2xl ">
                1. Set up a spacious and safe place to live
              </h1>
              <ul className=" mt-4 flex flex-col  gap-4 text-[#595959]">
                <li>
                  If your rabbit has been accustomed to living outdoors, you
                  should provide housing for them outside. Conversely, if they
                  have been accustomed to indoor living, you should arrange
                  their habitat indoors. In either case, their living
                  environment must be safe, spacious, dry, clean, quiet, and
                  partially sheltered.
                </li>
                <li>
                  The enclosure should provide distinct areas for various
                  activities, including hiding and sleeping, playing and
                  exercising, eating and drinking, and going to the toilet.
                </li>
                <li>
                  For a pair of small-to-medium sized rabbits, it's recommended
                  to provide a minimum space of 3m x 2m x 1m or 10ft x 6.5ft x
                  3.5ft (length x width x height) for their enclosure. However,
                  the more space your rabbits have, the better.
                </li>
                <li>
                  Adding cozy blankets on top of wardrobes, shelves, and
                  windowsills is an excellent method to provide your cat with
                  elevated hiding spots.
                </li>
                <li>
                  If your rabbit resides indoors, it's essential to rabbit-proof
                  your house by placing houseplants, wires, and other hazardous
                  objects out of their reach. Conversely, if they live outdoors,
                  they must be protected from predators such as cats, dogs, and
                  foxes at all times.
                </li>
              </ul>
            </div>
          </section>

          <section
            className=" flex mx-14 px-5 mt-16 gap-4 pb-12 items-center border-b max-[650px]:mt-10
       max-[850px]:flex-col max-[850px]:w-full max-[850px]:mx-3 max-[650px]:mx-0 max-[650px]:px-0 "
          >
            <div className=" flex flex-col gap-3 max-[850px]:w-full w-[50%]">
              <h1 className=" font-bold text-2xl ">2. Buy the right food</h1>

              <ul className=" mt-4 flex flex-col  gap-4 text-[#595959]">
                <li>
                  Abrupt changes in your rabbit's diet can lead to health
                  issues. Therefore, it's important to learn about your rabbit's
                  previous diet from their previous owner and ensure you have an
                  adequate supply of the same food to avoid any sudden changes.
                </li>
                <li>
                  Rabbits need constant access to clean, fresh water so make
                  sure you buy a water bottle or bowl.
                </li>
                <li>
                  A rabbit's diet typically consists of 85% dust-free hay/grass,
                  10% leafy greens, and 5% rabbit nuggets daily, adjusted based
                  on age and health. Consult a vet for optimal diet guidance.
                </li>
              </ul>
            </div>
            <img
              src={food}
              alt=""
              className="w-[50%]  max-[850px]:w-[80%] max-[650px]:w-full min-[1350px]:h-[28rem] object-contain"
            />
          </section>

          <section
            className=" flex mx-14 px-5 mt-16 gap-4 pb-12 items-center border-b max-[650px]:mt-10
       max-[850px]:flex-col-reverse max-[850px]:w-full max-[850px]:mx-3 max-[650px]:mx-0 max-[650px]:px-0 "
          >
            <img
              src={game}
              alt=""
              className="w-[50%]  max-[850px]:w-[80%] max-[650px]:w-full min-[1350px]:h-[28rem] object-contain"
            />
            <div className=" flex flex-col gap-3 max-[850px]:w-full w-[50%]">
              <h1 className=" font-bold text-2xl ">
                3. Give them opportunities to play and exercise
              </h1>

              <ul className=" mt-4 flex flex-col  gap-4 text-[#595959]">
                <li>
                  To maintain the happiness and health of rabbits, provide ample
                  physical and mental stimulation due to their active, athletic,
                  and intelligent nature.
                </li>
                <li>
                  Rabbits should have continuous access to their exercise area
                  for foraging, digging, and hopping, alongside access to
                  resting and hiding places at all times to fulfill their
                  natural behaviors and needs.
                </li>
                <li>
                  Rabbits typically dislike being picked up as it stresses them
                  and increases nervousness. To interact with your rabbit, sit
                  on the floor and allow them to approach you at their own pace.
                </li>
              </ul>
            </div>
          </section>

          <section
            className=" flex mx-14 px-5 mt-16 gap-4 pb-12 items-center border-b max-[650px]:mt-10
       max-[850px]:flex-col max-[850px]:w-full max-[850px]:mx-3 max-[650px]:mx-0 max-[650px]:px-0 "
          >
            <div className=" flex flex-col gap-3 max-[850px]:w-full w-[50%]">
              <h1 className=" font-bold text-2xl ">4. Find a companion</h1>

              <ul className=" mt-4 flex flex-col  gap-4 text-[#595959]">
                <li>
                  Rabbits are social creatures that thrive in the company of
                  other rabbits. If you've adopted a single rabbit, consider
                  finding them a suitable companion promptly. If adopting for an
                  existing pet, ensure the rabbits get along and have time to
                  bond.
                </li>
                <li>
                  Ensuring rabbits have compatible personalities and introducing
                  them gradually in a neutral environment can facilitate a
                  positive relationship and enrich their social lives.
                </li>
              </ul>
            </div>
            <img
              src={companion}
              alt=""
              className="w-[50%]  max-[850px]:w-[80%] max-[650px]:w-full min-[1350px]:h-[28rem] object-contain"
            />
          </section>

          <section
            className=" flex mx-14 px-5 mt-16 gap-4 pb-12  items-center max-[650px]:mt-10
       max-[850px]:flex-col-reverse max-[850px]:w-full max-[850px]:mx-3 max-[650px]:mx-0 max-[650px]:px-0 "
          >
            <img
              src={vet}
              alt=""
              className="w-[50%]  max-[850px]:w-[80%] max-[650px]:w-full min-[1350px]:h-[28rem] object-contain"
            />
            <div className=" flex flex-col gap-3 max-[850px]:w-full w-[50%]">
              <h1 className=" font-bold text-2xl ">6. Register with a vet</h1>
              <ul className=" mt-4 flex flex-col  gap-4 text-[#595959]">
                <li>
                  Registering with a veterinarian as soon as possible is
                  essential to fulfill your responsibility in keeping your
                  rabbit free from pain, injury, suffering, and disease. Vets
                  will provide necessary vaccines and educate you on diet,
                  routine care, and how to conduct essential health checks like
                  examining your rabbit's teeth.
                </li>
                <li>
                  Gathering as much information as possible about your rabbit's
                  health from their previous owner is crucial for their
                  well-being. Obtain relevant details before your new pet
                  arrives to ensure proper care and understanding of their
                  health history.
                </li>
              </ul>
            </div>
          </section>
        </section>
      </section>
      <Footer />
    </>
  );
}

export default PreparingRabbit;
