import React from "react";

function Count() {
  const checkStage =
    window.location.href.split("/")[window.location.href.split("/").length - 1];
  return (
    <>
      <section className=" bg-[#FEFEFE] py-8 px-10 max-[950px]:px-8">
        <section
          className=" bg-white rounded-3xl font-Nunito drop-shadow-md py-14
        max-[650px]:w-full px-8 max-[950px]:px-4 flex justify-evenly items-center 
        max-[650px]:flex-col max-[650px]:items-start max-[650px]:py-8 max-[650px]:gap-5 
        max-[650px]:px-8 min-[2000px]:ml-[50%] min-[2000px]:translate-x-[-50%] "
        >
          <div
            className={` flex items-center gap-3 text-xl font-bold  ${
              checkStage === "rehouse-a-pet"
                ? "text-[#333333]"
                : "text-[#999999]"
            }`}
          >
            <div
              className={` px-4 py-2 text-white rounded-full ${
                checkStage === "rehouse-a-pet" ? "bg-[#5FA501]" : "bg-[#B0D290]"
              }`}
            >
              1
            </div>
            Start
          </div>
          <div
            className={` flex items-center gap-3 text-xl font-bold  ${
              checkStage === "about-you" ? "text-[#333333]" : "text-[#999999]"
            }`}
          >
            <div
              className={`px-4 py-2 text-white rounded-full ${
                checkStage === "about-you" ? "bg-[#5FA501]" : "bg-[#B0D290]"
              }`}
            >
              2
            </div>
            About you
          </div>
          <div
            className={` flex items-center gap-3 text-xl font-bold  ${
              checkStage === "your-pet" ? "text-[#333333]" : "text-[#999999]"
            }`}
          >
            <div
              className={`px-4 py-2 text-white rounded-full ${
                checkStage === "your-pet" ? "bg-[#5FA501]" : "bg-[#B0D290]"
              }`}
            >
              3
            </div>
            Your pet
          </div>
          <div
            className={` flex items-center gap-3 text-xl font-bold  ${
              checkStage === "confirm" ? "text-[#333333]" : "text-[#999999]"
            }`}
          >
            <div
              className={`px-4 py-2 text-white rounded-full ${
                checkStage === "confirm" ? "bg-[#5FA501]" : "bg-[#B0D290]"
              }`}
            >
              4
            </div>
            Confirm
          </div>
        </section>
      </section>
    </>
  );
}

export default Count;
