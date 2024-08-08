import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";

const Slide = () => {
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
      <div className="flex mt-10 ">
        <img className="w-30 h-160 mx-auto" src="./images/Image1.png" alt="" />
      </div>
      <div className=" flex justify-end my-4 mx-40 gap-2">
        <button className="flex items-center justify-center border-2 h-10 w-10 ">
          <BsChevronLeft />
        </button>
        <button className="flex items-center justify-center border-2 h-10 w-10 ">
          <BsChevronRight />
        </button>
      </div>
    </>
  );
};
export default Slide;
