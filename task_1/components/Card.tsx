import Image, { StaticImageData } from "next/image";

interface Props {
  imageUrl: StaticImageData;
  heading: string;
  secondHead: string;
  paragraph: string;
  bgColor: string;
  imagePosition?: "left" | "right";
  imageWidthHeigth?: string;
  cardIndex: number;
}

const Card = ({
  imageUrl,
  heading,
  secondHead,
  paragraph,
  bgColor,
  imagePosition = "left",
  imageWidthHeigth,
  cardIndex,
}: Props) => {
  const isRight = imagePosition === "right";

  return (
    <div
      className={`${bgColor} relative rounded-2xl flex items-center justify-center w-120 h-60 overflow-visible ${cardIndex === 3 ? "animate-div-move" : "animate-div-bounce"}  shadow`}
    >
      <div
        className={`absolute ${isRight ? (imageWidthHeigth ? imageWidthHeigth : "-right-10 top-0") : imageWidthHeigth ? imageWidthHeigth : "-left-10 top-8 "}`}
      >
        <Image
          src={imageUrl}
          alt={heading}
          width={200}
          height={240}
          className={`object-contain object-bottom  animate-slow-bounce ${imageWidthHeigth}`}
        />
      </div>

      <div
        className={`${isRight ? "mr-44 pl-8" : cardIndex === 3 ? "ml-50 pr-20" : "ml-50 pr-10"}  text-white flex flex-col gap-3`}
      >
        <div className="flex flex-col gap-1">
          <h4
            className={`text-2xl whitespace-nowrap font-bold leading-tight ${isRight ? "text-left" : "text-right"}`}
          >
            {heading}
          </h4>
          <span
            className={`text-md font-bold ${isRight ? "text-left" : "text-right"}`}
          >
            {secondHead}
          </span>
        </div>

        <p
          className={`text-sm leading-relaxed text-white mt-1 ${cardIndex === 3 && "ml-10"} w-65 ${isRight ? "text-left" : "text-right"}`}
        >
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default Card;
