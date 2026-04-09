"use client";
import reactIcon from "@/public/assets/React.png";
import likeIcon from "@/public/assets/Like.png";
import vueIcon from "@/public/assets/VueJs.png";
import pencilIcon from "@/public/assets/Pencil.png";
import Image from "next/image";
import arrow from "@/public/assets/arrow.png";
import { useState } from "react";

interface Props {
  number: string;
  title: string;
  description: string;
  id: number;
  isFlipped: boolean;
  expandedCard: number | null;
  prevCard: number | null;
  onClick: (id: number) => void;
}

const Card = ({
  number,
  title,
  description,
  id,
  isFlipped,
  expandedCard,
  prevCard,
  onClick,
}: Props) => {
  const [hoverCardNumber, setHoverCardNumber] = useState<number>(-1);

  const isHovering = hoverCardNumber === 1 || hoverCardNumber === 2;

  return (
    <>
      <div className={``}>
        {expandedCard === 0 && (
          <div
            className={`absolute top-36 opacity-0   z-10  gap-2 transition-opacity duration-300  pointer-events-none ${
              hoverCardNumber === 1
                ? "opacity-100 right-145 visible"
                : hoverCardNumber === 2
                  ? "  right-70 opacity-100 visible"
                  : "hidden"
            }`}
          >
            <p>Click me!</p>
            <Image
              src={arrow}
              width={100}
              height={100}
              alt="arrow"
              className="w-13 h-13 ml-4"
            />
          </div>
        )}
        <div
          onMouseEnter={() => setHoverCardNumber(id)}
          onMouseLeave={() => setHoverCardNumber(-1)}
          onClick={() => onClick(id)}
          className={`
         cursor-pointer rounded-2xl
        transition-all duration-700 ease-in-out
         flex  items-center justify-center
        ${isFlipped ? "w-200  text-white " : "w-70  flex-col bg-[#F9EBEC] text-[#C33241]"}
        h-120
        relative
        overflow-hidden
        transform-gpu
      `}
        >
          <div
            className={`absolute inset-0 rounded-2xl z-0 transition-all duration-700 ease-in-out transform-gpu will-change-[clip-path]
            ${isFlipped ? "bg-[#C33241] clip-open" : "bg-[#C33241] clip-close"}
            flex
            `}
          />
          <div className="flex gap-5">
            <p
              className={` transition-transform ease-in-out duration-300  absolute top-0 right-0   transform  ${isFlipped ? "visible  px-10 py-5" : "hidden"}`}
            >
              View Courses
            </p>
            {expandedCard === id && (
              <span
                className={`  absolute top-5 right-5 transform ml-5  translate-x-0 hover:translate-x-1 transition-transform duration-300 ease-in-out`}
              >
                →
              </span>
            )}
          </div>
          <div>
            <div
              className={` transition-all ease-in-out duration-200 text-center ${isFlipped ? "rotate-0 " : "-rotate-90"} `}
            >
              <div
                className={`absolute transition-all duration-700 ease-in-out space-x-10 flex
                        ${
                          isFlipped
                            ? "opacity-100 top-25 left-40 translate-x-0"
                            : prevCard !== null && id > prevCard
                              ? "opacity-0 -translate-x-100 "
                              : "opacity-0 translate-x-100"
                        }
                        mb-40`}
              >
                <Image
                  src={reactIcon}
                  width={80}
                  height={50}
                  alt="react"
                  className="w-25 h-25"
                />
                <Image
                  src={likeIcon}
                  width={120}
                  height={120}
                  alt="like"
                  className="w-25 h-25"
                />
                <Image
                  src={pencilIcon}
                  width={120}
                  height={120}
                  alt="pencil"
                  className="w-25 h-25"
                />
                <Image
                  src={vueIcon}
                  width={120}
                  height={120}
                  alt="vue"
                  className="w-25 h-25"
                />
              </div>
              <div
                className={`space-y-4 absolute mb-25 transition-all duration-700 ease-in-out transform-gpu ${
                  isFlipped
                    ? " -bottom-5 translate-y-0 opacity-100"
                    : " w-80  -bottom-40 -left-20 translate-y-5 opacity-100"
                }`}
              >
                <h1
                  className={`font-extrabold  transition-all duration-700 ease-in-out transform-gpu ${isFlipped ? "text-5xl text-left scale-100" : "text-4xl scale-90 "} `}
                >
                  {title}
                </h1>
                <p
                  className={` text-left  transition-all duration-700 ease-in-out transform-gpu ${isFlipped ? "w-full text-2xl px-2 opacity-100" : "w-55 ml-15 opacity-80"} `}
                >
                  {description}
                </p>
              </div>
            </div>
            <h1
              className={`text-center  absolute bottom-0 left-15 font-extrabold transition-all duration-700 ease-in-out transform-gpu  ${isFlipped ? "text-[200px] scale-100" : "sclae-90  text-9xl pb-10"}`}
            >
              {number}
              <span
                className={` absolute font-extrabold  transition-all duration-700 ease-in-out transform-gpu
                   ${isFlipped ? " top-8  left-62 text-8xl scale-100" : " -top-3 text-5xl scale-90"}
                    ${expandedCard === 0 && isHovering ? "translate-y-2" : "translate-y-0"}
                   
                   `}
              >
                +
              </span>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
