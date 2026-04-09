"use client";

import BagroundCard from "@/components/BagroundCard";
import Card from "@/components/Card";
import user1 from "@/public/assets/User1.png";
import user2 from "@/public/assets/User2.png";
import user3 from "@/public/assets/User3.png";
import user4 from "@/public/assets/User4.png";
import personOne from "@/public/assets/PersonOne.png";
import twoPersons from "@/public/assets/twoPersons.png";
import personWow from "@/public/assets/wow.png";
import wowTwo from "@/public/assets/wow2.png";
import { useState } from "react";

export default function Home() {
  const [activeDiv, setActiveDiv] = useState<number>(-1);

  return (
    <div className="p-10">
      <div className="mb-10">
        <h1 className="text-[24px] font-medium">Your SkillShikshya Journey</h1>
        <h1 className="text-[32px] text-black font-bold">
          <span className="text-[#1DA077]">Step</span> In.
          <span className="text-[#1DA077]">Skill</span> Up.
          <span className="text-[#1DA077]">Stand</span> Out
        </h1>
      </div>
      <div className="flex gap-10 absolute">
        <div
          className={`transform transition-all duration-500 ease-in-out ${
            activeDiv === 1
              ? "translate-x-0 opacity-100"
              : "-translate-x-12 opacity-0"
          }`}
        >
          <BagroundCard
            baground="bg-[#F45B5B]"
            imageUrl={personOne}
            wow={personWow}
            wowTwo={wowTwo}
            text="clarity"
          />
        </div>
        <div
          className={`transform transition-all duration-500 ease-in-out ${
            activeDiv === 2
              ? "translate-x-0 opacity-100"
              : "-translate-x-12 opacity-0"
          }`}
        >
          <BagroundCard
            baground="bg-[#5492A0]"
            imageUrl={twoPersons}
            wow={personWow}
            wowTwo={wowTwo}
            text=""
          />
        </div>
      </div>
      <div className="flex mt-10 gap-10 text-white">
        <div className="flex flex-col gap-10">
          <div
            onMouseEnter={() => setActiveDiv(1)}
            onMouseLeave={() => setActiveDiv(-1)}
            className={`transform transition-all duration-500 ease-in-out ${
              activeDiv === 1
                ? "-translate-x-12 opacity-0"
                : "translate-x-0 opacity-100"
            }`}
          >
            <Card
              cardIndex={1}
              bgColor="bg-[#F45B5B]"
              imagePosition="left"
              imageUrl={user1}
              heading="Start with Clarity"
              secondHead="Step into a better learning path."
              paragraph="Overwhelmed by too many learning options? SkillShikshya provides a clear, curated roadmap from the start. Whether you're a beginner or upskilling, we have a path tailored to your growth."
            />
          </div>
          <Card
            cardIndex={3}
            bgColor="bg-[#6C64A8]"
            imagePosition="left"
            imageUrl={user3}
            imageWidthHeigth="w-70 -left-14 top-16"
            heading="Get Mentored & Supported"
            secondHead="You're not learning alone."
            paragraph="Stuck or need feedback? SkillShikshya's community of mentors and learners has your back with live support, interactive discussions, and expert insights. You're never on your own."
          />
        </div>
        <div className="flex flex-col gap-10">
          <div
            onMouseEnter={() => setActiveDiv(2)}
            onMouseLeave={() => setActiveDiv(-1)}
            className={`transform transition-all duration-500 ease-in-out ${
              activeDiv === 2
                ? "-translate-x-12 opacity-0"
                : "translate-x-0 opacity-100"
            }`}
          >
            <Card
              cardIndex={2}
              bgColor="bg-[#5492A0] z-10"
              imagePosition="right"
              imageUrl={user2}
              imageWidthHeigth="w-46 -right-5 top-0 z-10"
              heading="Learn by Doing"
              secondHead="Practical skills, real projects."
              paragraph="Theory is great, but action is better. At SkillShikshya, you learn by doing. Hands-on projects and real-world scenarios help you build, break, and create—leading to true mastery."
            />
          </div>

          <Card
            cardIndex={4}
            bgColor="bg-[#A88964]"
            imagePosition="right"
            imageUrl={user4}
            imageWidthHeigth="w-65 -right-12 top-6"
            heading="Achieve & Showcase"
            secondHead="Build your portfolio, get job-ready."
            paragraph="Your journey ends with achievement. Each completed project builds a portfolio showcasing your skills and job readiness, bringing you closer to that dream job, promotion, or your own venture."
          />
        </div>
      </div>
    </div>
  );
}
