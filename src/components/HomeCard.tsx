import React from "react";
import { FaHandHoldingHeart } from "react-icons/fa6";
import { RxDotFilled } from "react-icons/rx";
import { Link } from "react-router-dom";

function HomeCard() {
  const checkStage =
    window.location.href.split("/")[window.location.href.split("/").length - 1];
  return (
    <section
      className=" grid grid-cols-3 gap-8 my-16 
   max-[850px]:grid-cols-2 max-[650px]:grid-cols-1"
    >
      <Link
        to="/about"
        className={`group flex flex-col gap-4 border px-8 
        py-14 rounded-xl  hover:drop-shadow-xl 
        shadow-[#595959] ease-in-out 
        ${checkStage === "about" ? "bg-white" : "hover:bg-white"}`}
      >
        <div className=" bg-[#AFD57D] group-hover:bg-[#5FA501] p-6 w-max rounded-full ml-[50%] translate-x-[-50%]">
          <FaHandHoldingHeart className=" text-6xl text-white" />
        </div>
        <div className=" text-center">
          <h1 className="text-xl font-bold text-[#595959]">Kind To Everyone</h1>
          <p>We believe that...</p>
        </div>
        <ul className=" mt-4 flex flex-col  gap-4">
          <li className=" flex  text-[#595959] gap-2">
            <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
            every pet enjoys safety, love, and respect is a fundamental belief.
          </li>
          <li className=" flex  text-[#595959] gap-2">
            <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
            Ideal adopters shouldn't be deterred by complex processes or rigid
            rules. Adoption should be accessible and adaptable for a positive
            experience.
          </li>
          <li className=" flex  text-[#595959] gap-2">
            <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
            Empower individuals rehoming pets to make decisions free from
            judgment, fostering a compassionate environment for responsible and
            thoughtful transitions.
          </li>
        </ul>
      </Link>
      <Link
        to="/about"
        className={`group flex flex-col gap-4 border px-8 py-14 rounded-xl hover:bg-white hover:drop-shadow-xl shadow-[#595959] ease-in-out 
        ${checkStage === "about" ? "bg-white" : "hover:bg-white"}`}
      >
        <div className=" bg-[#AFD57D] group-hover:bg-[#5FA501] p-6 w-max rounded-full ml-[50%] translate-x-[-50%]">
          <FaHandHoldingHeart className=" text-6xl text-white" />
        </div>
        <div className=" text-center mt-4">
          <h1 className="text-xl font-bold text-[#595959]">
            Advocate Adoption
          </h1>
          <div className=" mt-10 flex gap-8 flex-col text-[#595959]">
            <p>This value sits at the heart of everything we do.</p>
            <p>
              Adoption reduces the demand for puppy farming, industrial-scale
              breeding, illegal pet imports and other forms of exploitation and
              abuse.
            </p>
            <p>We’re proud supporters of #AdoptDontShop.</p>
          </div>
        </div>
      </Link>
      <Link
        to="/about"
        className={`group flex flex-col gap-4 border px-8 py-14 rounded-xl hover:bg-white hover:drop-shadow-xl shadow-[#595959] ease-in-out 
        ${checkStage === "about" ? "bg-white" : "hover:bg-white"}`}
      >
        <div className=" bg-[#AFD57D] group-hover:bg-[#5FA501] p-6 w-max rounded-full ml-[50%] translate-x-[-50%]">
          <FaHandHoldingHeart className=" text-6xl text-white" />
        </div>
        <div className=" text-center mt-4">
          <h1 className="text-xl font-bold text-[#595959]">
            Responsible Rehousing
          </h1>
          <div className=" mt-10 flex gap-8 flex-col text-center text-[#595959]">
            <p>We’re champions of rehoming. But not at any cost.</p>
            <p>
              We believe in finding the right match between adopters and pets,
              not taking risks or rushing.
            </p>
            <p>
              We always prioritise pet welfare. And we offer a safer, more
              ethical and professional alternative to online marketplaces like
              Preloved, Pets4Homes, Facebook and Gumtree.
            </p>
          </div>
        </div>
      </Link>
    </section>
  );
}

export default HomeCard;
