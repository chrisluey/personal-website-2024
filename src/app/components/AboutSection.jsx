"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Languages",
    id: "languages",
    content: (
      <ul className="list-disc pl-2 grid grid-cols-2 sm:grid-cols-3">
        <li>Java</li>
        <li>JavaScript</li>
        <li>Python</li>
        <li>C</li>
        <li>C++</li>
        <li>SQL</li>
        <li>HTML/CSS</li>
        <li>R</li>
        <li>PHP</li>
        <li>Golang</li>
        <li>TypeScript</li>
      </ul>
    ),
  },
  {
    title: "Frameworks",
    id: "frameworks",
    content: (
      <ul className="list-disc pl-2 grid grid-cols-1 sm:grid-cols-2">
        <li>React.js</li>
        <li>Node.js</li>
        <li>JUnit</li>
        <li>Vue.js</li>
        <li>Electron</li>
        <li>AJAX</li>
        <li>jQuery</li>
      </ul>
    ),
  },
  {
    title: "Developer Tools",
    id: "developer_tools",
    content: (
      <ul className="list-disc pl-2 grid grid-cols-1 sm:grid-cols-2">
        <li>Git</li>
        <li>Google Cloud Platform</li>
        <li>VS Code</li>
        <li>IntelliJ</li>
        <li>PlatformIO</li>
        <li>DynamoDB</li>
        <li>Jenkins</li>
      </ul>
    ),
  },
  {
    title: "Libraries",
    id: "libraries",
    content: (
      <ul className="list-disc pl-2">
        <li>MATLAB</li>
        <li>Numpy</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Bachelor of Science (Computer Science), UBC</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("languages");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section 
      className="text-white pb-16 md:pb-0 pt-8 md:pt-0 md:min-h-screen flex flex-col justify-center" 
      id="about"
    >
      <div className="md:grid md:grid-cols-2 gap-8 items-center px-4 xl:gap-16 xl:px-16">
        <div className="flex justify-center mb-8 md:mb-0">
          <Image 
            className="rounded-md w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto object-contain" 
            src="/images/stock-software-dev.png" 
            width={500} 
            height={500} 
            alt="Profile Image"
          />
        </div>
        <div className="text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Welcome! I&apos;m Christopher Luey, a software engineer with a passion for creating innovative solutions.
            With extensive job experience in full-stack development, I enjoy tackling complex problems and collaborating with diverse teams.
            I&apos;m driven by a curiosity to explore new technologies and a commitment to continuous learning.
            Feel free to explore my projects and connect with me if you&apos;d like to collaborate or learn more about my work.
          </p>
          <div className="flex flex-row flex-wrap justify-start mt-8 gap-2">
            <TabButton
              selectTab={() => handleTabChange("languages")}
              active={tab === "languages"}
            >
              Languages
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("frameworks")}
              active={tab === "frameworks"}
            >
              Frameworks
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("developer_tools")}
              active={tab === "developer_tools"}
            >
              Dev Tools
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("libraries")}
              active={tab === "libraries"}
            >
              Libraries
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;