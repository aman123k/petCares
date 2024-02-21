import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { RxCross2 } from "react-icons/rx";

interface ShowImage {
  PetImage: string[] | undefined;
  setShowImage: React.Dispatch<React.SetStateAction<boolean>>;
}

const Slider: React.FC<ShowImage> = ({ setShowImage, PetImage }) => {
  return (
    <>
      <RxCross2
        className="text-3xl absolute z-50 cursor-pointer text-white left-[50%]"
        onClick={() => setShowImage(false)}
      />
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="w-full h-full overflow-hidden rounded-b-2xl select-none"
      >
        {PetImage?.map((img, index) => (
          <SwiperSlide className="py-8 text-white" key={index}>
            <img
              src={img}
              alt=""
              className="w-[650px] ml-[50%] translate-x-[-50%] h-full object-fill max-[650px]:w-[75%] drop-shadow-md rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute w-full h-full bg-black top-0 opacity-55"></div>
    </>
  );
};

export default Slider;
