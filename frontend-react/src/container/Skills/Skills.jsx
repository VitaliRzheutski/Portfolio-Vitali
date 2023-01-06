import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {} from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Skills.scss";

const Skills = () => {
  const [education, setEducation] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "education"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setEducation(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Skills & Education</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="app__work-portfolio">
          {education.map((education, index) => (
            <div className="app__work-item-portfolio app__flex" key={index}>
              <div className="app__work-img app__flex">
                <img src={urlFor(education.imgUrl)} alt={education.name} />
              </div>

              <div className="app__work-content app__flex">
                <h4 className="bold-text">{education.title}</h4>
                <p className="p-text" style={{ marginTop: 10 }}>
                  {education.description}
                </p>

                <div className="app__work-tag app__flex">
                  <p className="p-text">{education.tags}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
