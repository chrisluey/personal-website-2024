"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Trans Name Generator",
    description: "JavaScript mobile app that suggests names for people transitioning given the phonetic spelling of their previous name",
    image: "/images/projects/1.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/ahon54/Name-Generator",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Avoid The Virus",
    description: "2D platformer/turn-based RPG hybrid single-player video game using native C++ and OpenGL",
    image: "/images/projects/2.png",
    tag: ["All"],
    gitUrl: "https://github.com/chrisluey/avoid-the-virus",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Discord Bots For Fun",
    description: "Discord bots that could send text messages in servers and play/pause audio in voice channels",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/chrisluey/discord-bots-for-fun",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Portgrid",
    description: "Vue.js social network platform web app for developers wanting to share personal projects or look for collaborators",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/chrisluey/portgrid",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section 
      id="projects" 
      className="pt-16 md:pt-24 pb-16 md:pb-0 md:min-h-screen flex flex-col"
    >
      <h2 className="text-center text-4xl font-bold text-white mb-8">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <div className="flex-grow flex items-start justify-center">
        <ul ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto px-4">
          {filteredProjects.map((project, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectsSection;