"use client";

import Card from "@/components/Card";
import { useState } from "react";

export default function Home() {
  const [expandedCard, setExpandedCard] = useState<number | null>(0);
  const [prevCard, setPrevCard] = useState<number | null>(null);

  const handleCardClick = (id: number) => {
    setPrevCard(expandedCard);
    setExpandedCard(id);
  };

  let courses = [
    {
      id: 0,
      number: "23",
      title: "All Courses",
      description: "courses you're powering through right now.",
    },
    {
      id: 1,
      number: "05",
      title: "Upcoming Courses",
      description: "exciting new courses waiting to boost your skills.",
    },
    {
      id: 2,
      number: "10",
      title: "Ongoing Courses",
      description: "currently hoping opening doors out on the action!",
    },
  ];

  return (
    <div>
      <div className="mt-10">
        <h1 className="text-center text-3xl">
          Note: Click the cards to view the animation
        </h1>

        <div className="px-10 mt-5 space-y-2 text-2xl">
          <h3>Explore our clases and master trending skills!</h3>
          <p className="font-bold">
            Dive into{" "}
            <span className="text-[#1DA077]">What's Ho Right Now!</span>
          </p>
        </div>
      </div>
      <div className=" px-5 mt-10">
        <div className="flex justify-center gap-6 ">
          {courses.map((card) => (
            <Card
              key={card.id}
              {...card}
              isFlipped={expandedCard === card.id}
              expandedCard={expandedCard}
              prevCard={prevCard}
              onClick={handleCardClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
