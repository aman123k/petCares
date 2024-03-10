import React from "react";

import Footer from "../../components/Footer";

import dakota from "../../images/dakota.png";
import harly from "../../images/harly.png";
import henry from "../../images/henry.png";
import salem from "../../images/salem.png";
import thumper from "../../images/thumper.png";
import turker from "../../images/turker.png";
import Header from "../../components/Header";
import { Link } from "react-router-dom";

function Testimonialsfromadopters() {
  return (
    <>
      <Header />
      <section className=" bg-[#F9F9F9] max-[650px]:py-8 py-12 px-10 max-[650px]:px-5">
        <section
          className=" font-Nunito flex flex-col bg-white drop-shadow-xl max-[650px]:w-full max-[650px]:rounded-3xl
    max-[850px]:gap-4 max-[650px]:gap-0 rounded-[32px] py-14 px-8 max-[650px]:py-10"
        >
          <section className="  text-center flex gap-2 flex-col text-[#595959]">
            <h1 className="font-bold text-3xl max-[650px]:text-3xl">
              Testimonials from Rehomers
            </h1>
            <p className="tracking-wide tex-[13px] ">
              We empathize with the challenges of parting with a pet. Our
              dedicated team of animal enthusiasts is committed to assisting you
              every
              <br /> step of the way. We strive to simplify the process,
              allowing you ton <br /> select your pet's new home with ease{" "}
              <br /> However, don't just take our word for it. Here are
              testimonials from individuals who have utilized our services to
              find their pet's new home.
            </p>
          </section>
          <section
            className=" flex mx-14 px-5 mt-16 gap-4 pb-12 items-center border-b max-[650px]:mt-10
       max-[850px]:flex-col-reverse max-[850px]:w-full max-[850px]:mx-3 max-[650px]:mx-0 max-[650px]:px-0 "
          >
            <img
              src={dakota}
              alt=""
              className="w-[50%]  max-[850px]:w-[80%] max-[650px]:w-full min-[1350px]:h-[28rem] object-contain"
            />
            <div className=" flex flex-col gap-3 max-[850px]:w-full w-[50%]">
              <h1 className=" font-bold text-2xl ">
                Here's what Ann said following the adoption of Oreo...
              </h1>
              <ul className=" mt-4 flex flex-col  gap-4 text-[#595959]">
                <li>
                  For cats to feel safe and secure, they require their own bed,
                  secluded hiding spots, and elevated areas to observe their
                  surroundings.
                </li>
                <li>
                  Purchase a cozy and warm cat bed, such as an igloo or hammock,
                  and place it in a quiet area. Consider acquiring multiple beds
                  and positioning them in various rooms for added comfort and
                  convenience.
                </li>
                <li>
                  You can also create beds and hiding places yourself. Simply
                  take an appropriately-sized cardboard box, turn it on its
                  side, and place a soft blanket inside. Once again, position
                  this homemade shelter in a quiet area for your cat's comfort.
                </li>
                <li>
                  Adding cozy blankets on top of wardrobes, shelves, and
                  windowsills is an excellent method to provide your cat with
                  elevated hiding spots.
                </li>
              </ul>
            </div>
          </section>
          <section
            className=" flex mx-14 px-5 mt-16 gap-4 pb-12 items-center border-b max-[650px]:mt-10
       max-[850px]:flex-col max-[850px]:w-full max-[850px]:mx-3 max-[650px]:mx-0 max-[650px]:px-0 "
          >
            <div className=" flex flex-col gap-3 max-[850px]:w-full w-[50%]">
              <h1 className=" font-bold text-2xl ">
                2. Set up a litter tray or outside toilet
              </h1>

              <ul className=" mt-4 flex flex-col  gap-4 text-[#595959]">
                <li>
                  Cats like to go to the toilet where they feel safe, and in a
                  place that allows them to bury their waste afterwards.
                </li>
                <li>
                  If your cat already uses a litter tray or you don’t have a
                  garden, you’ll need to set up a litter tray before they
                  arrive.
                </li>
                <li>
                  If your cat prefers to toilet outside and you’ve got a garden,
                  or you want to train them to toilet outside, pick an area
                  that’s close to the house yet private. Once they arrive, you
                  can encourage them to toilet there.
                </li>
              </ul>
            </div>
            <img
              src={thumper}
              alt=""
              className="w-[50%]  max-[850px]:w-[80%] max-[650px]:w-full min-[1350px]:h-[28rem] object-contain"
            />
          </section>
          <section
            className=" flex mx-14 px-5 mt-16 gap-4 pb-12 items-center border-b max-[650px]:mt-10
       max-[850px]:flex-col-reverse max-[850px]:w-full max-[850px]:mx-3 max-[650px]:mx-0 max-[650px]:px-0 "
          >
            <img
              src={turker}
              alt=""
              className="w-[50%]  max-[850px]:w-[80%] max-[650px]:w-full min-[1350px]:h-[28rem] object-contain"
            />
            <div className=" flex flex-col gap-3 max-[850px]:w-full w-[50%]">
              <h1 className=" font-bold text-2xl ">
                3. Stock up on the right food
              </h1>

              <ul className=" mt-4 flex flex-col  gap-4 text-[#595959]">
                <li>
                  Cats require healthy, balanced diets and constant access to
                  fresh water. Initially, it's advisable to stick to the food
                  the cat is accustomed to. Consult the person you're adopting
                  from to determine the cat's current diet and ensure an ample
                  supply of it.
                </li>
                <li>
                  Even if you intend to change their diet, it's essential to do
                  so gradually and under the guidance of your veterinarian.
                </li>
                <li>
                  Many cats enjoy eating a special type of grass called
                  Cocksfoot because it aids in clearing furballs. Having some in
                  the house can help prevent them from chewing on other
                  houseplants!
                </li>
              </ul>
            </div>
          </section>
          <section
            className=" flex mx-14 px-5 mt-16 gap-4 pb-12 items-center border-b max-[650px]:mt-10
       max-[850px]:flex-col max-[850px]:w-full max-[850px]:mx-3 max-[650px]:mx-0 max-[650px]:px-0 "
          >
            <div className=" flex flex-col gap-3 max-[850px]:w-full w-[50%]">
              <h1 className=" font-bold text-2xl ">4. Get a scratch post</h1>

              <ul className=" mt-4 flex flex-col  gap-4 text-[#595959]">
                <li>
                  Scratching is a natural behavior for cats. Encourage them to
                  engage in this behavior by investing in a proper scratching
                  post. This will not only fulfill their natural instincts but
                  also discourage them from scratching and stretching on your
                  furniture.
                </li>
                <li>
                  Place the scratching post near their bed so they can stretch
                  and scratch when they wake up, as this is a common behavior
                  for most cats.
                </li>
              </ul>
            </div>
            <img
              src={salem}
              alt=""
              className="w-[50%]  max-[850px]:w-[80%] max-[650px]:w-full min-[1350px]:h-[28rem] object-contain"
            />
          </section>
          <section
            className=" flex mx-14 px-5 mt-16 gap-4 pb-12 border-b  items-center max-[650px]:mt-10
       max-[850px]:flex-col-reverse max-[850px]:w-full max-[850px]:mx-3 max-[650px]:mx-0 max-[650px]:px-0 "
          >
            <img
              src={harly}
              alt=""
              className="w-[50%]  max-[850px]:w-[80%] max-[650px]:w-full min-[1350px]:h-[28rem] object-contain"
            />
            <div className=" flex flex-col gap-3 max-[850px]:w-full w-[50%]">
              <h1 className=" font-bold text-2xl ">5. Plan for holidays</h1>
              <ul className=" mt-4 flex flex-col  gap-4 text-[#595959]">
                <li>
                  Even though cats are relatively independent pets, they can’t
                  be left alone for long periods of time. When you go away,
                  you’ll need to find a cat-sitter or put them in a cattery.
                  Research your options early so you don’t end up in a difficult
                  situation.
                </li>
              </ul>
            </div>
          </section>
          <section
            className=" flex mx-14 border-b  px-5 mt-16 gap-4 pb-12  items-center max-[650px]:mt-10
       max-[850px]:flex-col max-[850px]:w-full max-[850px]:mx-3 max-[650px]:mx-0 max-[650px]:px-0 "
          >
            <div className=" flex flex-col gap-3 max-[850px]:w-full w-[50%]">
              <h1 className=" font-bold text-2xl ">6. Register with a vet</h1>
              <ul className=" mt-4 flex flex-col  gap-4 text-[#595959]">
                <li>
                  You have a continuous responsibility to maintain your cat's
                  health, so it's crucial to register your cat with a vet as
                  soon as possible. Watch Harriet's video to understand why this
                  step is vital.
                </li>
                <li>
                  As Harriet explains, it's important to gather as much
                  information as possible about your cat's health from their
                  previous owner. Be sure to ask for details such as their old
                  vet's contact information, vaccination records, any
                  information about existing health conditions and medications,
                  and whether or not they've been microchipped.
                </li>
              </ul>
            </div>
            <img
              src={henry}
              alt=""
              className="w-[50%]  max-[850px]:w-[80%] max-[650px]:w-full min-[1350px]:h-[28rem] object-contain"
            />
          </section>
          <button
            className="mt-10 text-white bg-[#5E9E3C] px-7 py-4 hover:bg-white hover:border-[#5E9E3C] hover:border hover:text-[#5E9E3C] tracking-wide font-semibold
   w-max ml-[50%] translate-x-[-50%] rounded-lg"
          >
            <Link to="/adopt-a-pet">Search for pet</Link>
          </button>
        </section>
      </section>
      <Footer />
    </>
  );
}

export default Testimonialsfromadopters;
