import React from "react";
import Pcard from "../Components/Pcard";

const projectData = [
  {
    name: "Attendance Management System",
    description:
      "This app is for teachers and students. The use is to take attendence of students and maintain that. Also show time table and average attendance.",
    skills: ["Android", "Firebase", "MaterialUI"],
    github: "https://github.com/MiteshPrajapati1082/portfolio-project-vnurture",
    linkedIn: "https://www.linkedin.com/in/mitesh-prajapati-1a3a25244"
  },
  {
    name: "Health care app",
    description:
      "This app is provide 1000+ exercise & details of all body parts from Rapid API and also provide Serach exercise option & exercise related youtube videos. ",
    skills: ["Android", "Firebase", "Chat API"],
    github: "https://github.com/MiteshPrajapati1082/portfolio-project-vnurture",
    linkedIn: "https://www.linkedin.com/in/mitesh-prajapati-1a3a25244"
  },
  {
    name: "To-Do List App",
    description:
      "This is To-list application is provide feature of create list of Items. This app store items in list for temporary time.",
    skills: ["React", "MaterialUI Icons", "Hooks"],
    github: "https://github.com/MiteshPrajapati1082/portfolio-project-vnurture",
    linkedIn: "https://www.linkedin.com/in/mitesh-prajapati-1a3a25244"
  }
];

const Project = () => {
  return (
    <div className="project-container">
      {projectData.map((item, index) => {
        return (
          <Pcard
            key={index}
            name={item.name}
            description={item.description}
            skills={item.skills}
            github={item.github}
            linkedIn={item.linkedIn}
          />
        );
      })}
    </div>
  );
};

export default Project;
