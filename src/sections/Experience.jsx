import { VerticalTimeline } from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";
import ExperienceCard from "../components/ExperienceCard";
import { experiences } from "../config";

const Experience = () => {
  return (
    <>
      <motion.div className="my-20 c-space max-w-7xl mx-auto" id="experience">
        <h3 className="head-text max-w-7xl mx-auto">Work Experience</h3>
        <p className="grid-subtext">What I have done so far</p>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Experience;
