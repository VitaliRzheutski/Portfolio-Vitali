import "./About.scss";
import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
const About = () => {
  return (
    <>
      <h2 className="head-text">About me</h2>
      <div className="aboutMe">
        <div className="text-aboutMe">
          <p>
            Enthusiastic Software Engineer who is passionate about building web
            applications, learning new technologies, creating something new.
            Quick learner, creative, easy-going. Always looking forward to
            leveraging my knowledge and experience in order to build a better
            future for the company!
          </p>
        </div>
        <div className="photo">
          {[images.me].map((portrait, index) => (
            <div className="portrait" key={index}>
              <img src={portrait} alt="portrait" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
