import React, { useContext } from "react";
import { ListingContext } from "../../../globleContext/ListingContext";
import { IoCamera } from "react-icons/io5";
import { multiUploadImage } from "../../../components/uploadImage";
import { TiPlus } from "react-icons/ti";

function ThirdHelperPhoto() {
  const { petImage, setPetImage } = useContext(ListingContext) as {
    petImage: string[];
    setPetImage: React.Dispatch<React.SetStateAction<string[]>>;
  };

  const handleClick = (index: number) => {
    const inputElement = document.getElementById(
      `fileInput${index}`
    ) as HTMLInputElement;
    inputElement.click();
  };

  return (
    <>
      <div className=" grid grid-cols-2 gap-8 max-[650px]:grid-cols-1 max-[650px]:gap-5">
        {[0, 1, 2, 3].map((index) => (
          <div
            key={index}
            className="border-2 relative rounded-3xl drop-shadow-md border-dotted h-80 
      overflow-hidden bg-white flex items-center justify-center cursor-pointer
      max-[650px]:h-60"
            onClick={() => handleClick(index)}
          >
            <div
              className="absolute top-3 left-3 font-semibold bg-white px-2 
      py-1.5 rounded-md drop-shadow-md cursor-pointer"
            >
              {index + 1}. Main
            </div>
            {petImage[index] ? (
              <img
                src={petImage[index]}
                alt=""
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="text-6xl text-[#D4D4D4] relative py-2 px-3">
                <IoCamera />
                <TiPlus
                  className=" absolute bottom-0 right-0 text-4xl bg-[#A2B6B1] rounded-full
          text-white p-1"
                />
              </div>
            )}

            <input
              id={`fileInput${index}`}
              type="file"
              accept=".jpg, .jpeg, .png"
              className="hidden"
              onChange={(e) => multiUploadImage(e, petImage, setPetImage)}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default ThirdHelperPhoto;
