"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

interface Props {
  imageUrl: StaticImageData;
  wow: StaticImageData;
  baground: string;
  wowTwo: StaticImageData;
  text: string;
}

const BagroundCard = ({ imageUrl, baground, wow, wowTwo, text }: Props) => {
  return (
    <div className={`w-120 h-60 relative rounded-3xl   ${baground}`}>
      {text.toLowerCase() === "clarity".toLowerCase() ? (
        <>
          <div className="absolute left-8">
            {" "}
            <Image
              src={wowTwo}
              alt="PersonOne"
              width={300}
              height={300}
              className="w-25 h-25"
            />
          </div>
          <div className="absolute right-18 bottom-6">
            {" "}
            <Image
              src={wow}
              alt="PersonOne"
              width={300}
              height={300}
              className="w-30 h-30"
            />
          </div>
        </>
      ) : null}
      <div
        className={`rounded-3xl ml-2   relative z-10 ${text.toLowerCase() === "clarity".toLowerCase() ? "flex p-8  justify-between items-center bottom-5" : "  flex flex-row-reverse  -bottom-7 right-2"}      overflow-hidden`}
      >
        <Image
          src={imageUrl}
          alt="PersonOne"
          width={300}
          height={300}
          className={`${text.toLowerCase() === "clarity".toLowerCase() ? "w-150 h-57 " : "w-90 h-53"} `}
        />

        <div className=" text-white  text-md font-semibold">
          {text.toLowerCase() === "clarity".toLowerCase() ? (
            <p className="mb-30">
              Clarity unlocked-stickers, sips, and skills all in one go!
            </p>
          ) : (
            <p className="ml-15 mb-30  w-[155%]">
              Focused faces—learning mode: ON!
            </p>
          )}
        </div>
      </div>

      <button className="cursor-pointer   absolute -left-6 top-1/2 -translate-y-1/2 bg-white p-5 rounded-full  transition">
        <div className="rounded-full border border-gray-50 p-2 shadow-md">
          <FaArrowLeftLong size={20} />
        </div>
      </button>
      <button className=" cursor-pointer absolute -right-6 top-1/2 -translate-y-1/2 bg-white p-4 rounded-full  transition">
        <div className="rounded-full border border-gray-50 p-2 shadow-md">
          <FaArrowRightLong size={20} />
        </div>
      </button>
    </div>
  );
};

export default BagroundCard;
