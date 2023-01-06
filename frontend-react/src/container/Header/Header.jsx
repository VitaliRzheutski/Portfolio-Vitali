import React from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import "./Header.scss";
import { AppWrap } from "../../wrapper";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};
const Header = () => (
  <div className="app__header app__flex">
    <div className="header-text">
      <h4>Hi, my name is</h4>
      <h1>Vitali Rzheutski.</h1>
      <h1>I build things for the web.</h1>
      <p>
        I am a Software Engineer based in New York, specializing in building
        exceptional websites,
        <br /> applications, and everything in between. Currently, I'm focused
        on building new projects along with enchancing my knowledge in Data
        Structures.
      </p>
    </div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[images.react, images.redux, images.node, images.javascript].map(
        (circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="profile_bg" />
          </div>
        )
      )}
    </motion.div>
  </div>
);

export default AppWrap(Header, "home");
