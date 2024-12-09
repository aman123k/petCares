import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { RxDotFilled } from "react-icons/rx";

import one_bed from "../../images/6.png";
import food from "../../images/5.png";
import game from "../../images/4.png";
import companion from "../../images/7.png";
import vet from "../../images/6-vet.jpg";
function PreparingParrot() {
  return (
    <>
      <>
        <Header />
        <section className=" bg-[#F9F9F9] max-[650px]:py-8 py-12 px-10 max-[650px]:px-5">
          <section
            className=" font-Nunito flex flex-col bg-white drop-shadow-xl max-[650px]:w-full max-[650px]:rounded-3xl
    max-[850px]:gap-4 max-[650px]:gap-0 rounded-[32px] py-14 px-8 max-[650px]:py-10
    min-[2000px]:ml-[50%] min-[2000px]:translate-x-[-50%]"
          >
            <section className=" px-[17%] flex flex-col gap-4 mb-4 max-[850px]:px-5 max-[650px]:px-0 text-[#595959]">
              <h1 className="font-bold text-4xl max-[650px]:text-3xl">
                How to prepare for your new parrot:
              </h1>
              <h3 className="font-bold text-3xl max-[650px]:text-2xl">
                6 things you must do
              </h3>
              <p className=" mt-3 text-base">
                Adopting a parrot is a wonderful thing to do, but these vibrant
                creatures come with a significant responsibility. Unfortunately,
                parrots are often neglected and deprived of the intricate care
                they require to thrive.
              </p>
              <p className=" mt-3 text-base">
                Similar to cats and dogs, parrots are protected by India's
                Animal Welfare Act. This legal framework mandates that owners
                are obligated to provide their parrots with:
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
                arrival. Furthermore, our veterinarian, Harriet, has crafted a
                video brimming with invaluable advice on how to prepare for your
                parrot.
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
                    If your parrot is accustomed to outdoor living, provide
                    outdoor housing; if indoors, arrange an indoor habitat.
                    Ensure safety, space, dryness, cleanliness, quietness, and
                    partial shelter for their living environment.
                  </li>
                  <li>
                    The enclosure should offer separate spaces for activities
                    like hiding and sleeping, playing and exercising, eating and
                    drinking, and toileting to ensure the well-being of your
                    parrot.
                  </li>

                  <li>
                    Adding cozy blankets atop wardrobes, shelves, and
                    windowsills is an excellent way to offer elevated hiding
                    spots for your parrot, providing comfort and security.
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
                    Abrupt changes in your parrot's diet can lead to health
                    issues. Therefore, it's important to learn about your
                    parrot's previous diet from their previous owner and ensure
                    you have an adequate supply of the same food to avoid any
                    sudden changes.
                  </li>
                  <li>
                    Parrots need constant access to clean, fresh water, so be
                    sure to provide a water bottle or bowl for them.
                  </li>
                  <li>
                    A parrot's diet typically consists of a variety of foods
                    including pellets, fresh fruits, vegetables, nuts, and
                    seeds. It's important to provide a balanced diet tailored to
                    your parrot's species and individual needs. Consulting with
                    a veterinarian or avian nutritionist can help ensure your
                    parrot receives optimal nutrition.
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
                    To maintain the happiness and health of parrots, provide
                    ample physical and mental stimulation due to their active,
                    athletic, and intelligent nature. This can include toys,
                    puzzles, interactive games, and regular social interaction
                    with their human caregivers.
                  </li>
                  <li>
                    Parrots should have continuous access to their exercise area
                    for flying, climbing, and exploring, alongside access to
                    resting and hiding places at all times to fulfill their
                    natural behaviors and needs.
                  </li>
                  <li>
                    Parrots typically dislike being picked up as it stresses
                    them and increases nervousness. To interact with your
                    parrot, sit at eye level with them and allow them to
                    approach you at their own pace.
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
                    Parrots are social creatures that thrive in the company of
                    other parrots. If you've adopted a single parrot, consider
                    finding them a suitable companion promptly. If adopting for
                    an existing pet, ensure the parrots get along and have time
                    to bond.
                  </li>
                  <li>
                    Ensuring parrots have compatible personalities and
                    introducing them gradually in a neutral environment can
                    facilitate a positive relationship and enrich their social
                    lives.
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
                    parrot free from pain, injury, suffering, and disease. Vets
                    will provide necessary vaccines and educate you on diet,
                    routine care, and how to conduct essential health checks
                    like examining your parrot's beak and nails.
                  </li>
                  <li>
                    Gathering as much information as possible about your
                    parrot's health from their previous owner is crucial for
                    their well-being. Obtain relevant details before your new
                    pet arrives to ensure proper care and understanding of their
                    health history.
                  </li>
                </ul>
              </div>
            </section>
          </section>
        </section>
        <Footer />
      </>
    </>
  );
}

export default PreparingParrot;
