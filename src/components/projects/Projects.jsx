import React from "react";
import Title from "../layouts/Title";
import ProjectsCard from "./ProjectsCard";
import ikonic from "/projects/ikonic.png";
import unlimitedNow from "/projects/unlimitedNow.png";
import celleey from "/projects/celleey.png";
import harage from "/projects/harage.png";
import result from "/projects/result.png";

import {
  ikonicLink,
  unlimitedNowIosLink,
  unlimitedNowAndroidLink,
  celleeyAndroidLink,
  celleeyIosLink,
  resultManagementLink,
} from "../../utils/data/proejcts";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="iKonic - Be a College Celeb"
          des="The premier social networking app for college students"
          src={ikonic}
          appStoreLink={ikonicLink}
        />
        <ProjectsCard
          title="Unlimited NOW"
          des="Action-focused companion for mindfulness, affirmations, daily inspiration, and goal tracking."
          src={unlimitedNow}
          appStoreLink={unlimitedNowIosLink}
          playStoreLink={unlimitedNowAndroidLink}
        />
        <ProjectsCard
          title="Celleey"
          des="An E-commerce app for electronics, Celleey offers unlimited cash back rewards on every purchase."
          src={celleey}
          appStoreLink={celleeyIosLink}
          playStoreLink={celleeyAndroidLink}
        />

        <ProjectsCard
          title="Harage - Refurbished App"
          des="A dynamic eCommerce platform where users can seamlessly buy and sell items."
          src={harage}
        />

        <ProjectsCard
          title="Result Management System"
          des="Web app for managing college results."
          src={result}
          websiteLink={resultManagementLink}
        />
      </div>
    </section>
  );
};

export default Projects;
