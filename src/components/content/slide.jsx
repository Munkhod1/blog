import { useState } from "react";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";

const Slide = () => {
  const [index, setIndex] = useState(0);
  const handleClick = () => {
    if (index >= 2) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  const handlePrev = () => {
    setIndex(index - 1);
  };

  const images = [
    "./images/Image1.png",
    "./images/Logo1.png",
    "./images/Rectangle 38 (1).png",
  ];

  console.log("index", index);
  return (
    <>
      <div className="absolute flex-row bg-white w-[560px] rounded-2xl mt-80 ml-40 p-8 ">
        <button className="bg-indigo-600 rounded-md px-2 py-1 text-white ">
          Technology
        </button>
        <p className=" font-bold my-2 text-4xl text-wrap  ">
          Grid system for better Design User Interface
        </p>
        <p className="font-thin">August 20, 2022</p>
      </div>
      <div className="flex mt-10 overflow-hidden">
        {images.map((image) => (
          <img
            className="min-w-full h-160 mx-auto"
            style={{ transform: `translateX(-${index * 100}%)` }}
            src={image}
            alt=""
          />
        ))}
        {/* <img className="w-30 h-160 mx-auto" src="./images/Image1.png" alt="" />
        <img className="w-30 h-160 mx-auto" src="./images/Image1.png" alt="" />
        <img className="w-30 h-160 mx-auto" src="./images/Image1.png" alt="" /> */}
      </div>

      {/* button sextion */}
      <div className=" flex justify-end my-4 mx-40 gap-2">
        <button
          className="flex items-center justify-center border-2 h-10 w-10 "
          onClick={handlePrev}
        >
          <BsChevronLeft />
        </button>
        <button
          className="flex items-center justify-center border-2 h-10 w-10 "
          onClick={handleClick}
        >
          <BsChevronRight />
        </button>
      </div>
    </>
  );
};
export default Slide;
