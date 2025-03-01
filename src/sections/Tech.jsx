import React from "react";
// import Ball from "../components/Ball";
import { technologies } from "../config";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; // Import the hook
import { useMediaQuery } from "react-responsive";
import './tech.css'

import { topPart, middlePart, bottomPart } from "../config";

const Tech = () => {
  const isMobile = useMediaQuery({ maxWidth: 912 });
  return (
    <section className="my-20 ">
      <h3 className="head-text mb-14 max-w-7xl mx-auto c-space">My Tech Stack</h3>
      {/* <div className='flex flex-row flex-wrap justify-center gap-10'>
                {technologies.map((technology) => {
                    const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 }); // Detect when the section is in view
                    return (
                        isMobile ?
                            (
                                <div
                                    ref={ref}
                                    className='w-28 h-28 cursor-pointer' key={technology.name}>
                                    {inView && <Ball icon={technology.icon} />}
                                </div>
                            )
                            :
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                ref={ref}
                                className='w-28 h-28 cursor-pointer' key={technology.name}>
                                <Ball icon={technology.icon} />
                            </motion.div>

                    )

                })}
            </div> */}
      <div className="stacks">
        <div className="scrollingWrapper">
          <div className="scrollingLeftContent">
            {[...topPart, ...topPart].map((item, index) => (
              <div key={index} className="tech">
                <img
                  src={item.image}
                  alt={item.name}
                  width={30}
                  height={32}
                />
                <div className="techName title4">
                  {item.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="scrollingWrapper">
          <div className="scrollingRightContent">
            {[...middlePart, ...middlePart].map((item, index) => (
              <div key={index} className="tech">
                <img
                  src={item.image}
                  alt={item.name}
                  width={30}
                  height={32}
                />
                <div className="clsxtechName title4">
                  {item.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="scrollingWrapper">
          <div className="scrollingLeftContent">
            {[...bottomPart, ...bottomPart].map((item, index) => (
              <div key={index} className="tech">
                <img
                  src={item.image}
                  alt={item.name}
                  width={30}
                  height={32}
                />
                <div className="techName title4">
                  {item.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tech;
