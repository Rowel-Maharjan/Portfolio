import { useEffect, useRef, useState } from "react";
import Globe from "react-globe.gl";
import Button from "../components/Button.jsx";
import { useInView } from "react-intersection-observer";
import { grid1, grid2, grid3, grid4, tick, copy, CV } from "../assets/index.js";
import { useMediaQuery } from "react-responsive";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const globeEl = useRef();
  const isMobile = useMediaQuery({ maxWidth: 912 });

  const { ref, inView } = useInView({
    triggerOnce: isMobile ? false : true,
    threshold: 0.1,
  }); // Detect when the section is in view

  const handleCopy = () => {
    navigator.clipboard.writeText("rowelmhj@gmail.com");
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  useEffect(() => {
    if (inView && globeEl.current) {
      // Only set the pointOfView when the globe is in view
      globeEl.current.pointOfView(
        { lat: 27.6644, lng: 85.3188, altitude: 1.5 },
        1000
      );
    }
  }, [inView]); // Re-run when `inView` changes

  return (
    <section className="c-space my-20 max-w-7xl mx-auto text-white" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        {/* First Section */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src={grid1}
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Hi, I’m Rowel Maharjan</p>
              <p className="grid-subtext">
                With 1 years of experience, I have developed strong skills in
                both frontend and backend development, creating dynamic and
                responsive websites.
              </p>
            </div>
          </div>
        </div>

        {/* Second Section */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src={grid2}
              alt="grid-2"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in a diverse range of programming languages,
                frameworks, and tools, including JavaScript, React, Node.js,
                Express.js, MongoDB and many more. My expertise enables me to
                build robust, scalable, and efficient web applications that meet
                user and business needs.
              </p>
            </div>
          </div>
        </div>

        {/* Third Section */}
        <div className="col-span-1 xl:row-span-4">
          <div ref={ref} className="grid-container">
            <div className="rounded-3xl cursor-pointer w-full sm:h-[326px] h-fit flex justify-center items-center">
              {/* {inView && ( */}
              <Globe
                ref={globeEl}
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 27.6644,
                    lng: 85.3188,
                    text: "Lalitpur, Nepal",
                    color: "white",
                    size: 105,
                  },
                ]}
              />
              {/* )} */}
            </div>

            <div>
              <p className="grid-headtext">
                I’m very flexible with time zone communications & locations
              </p>
              <p className="grid-subtext">
                I&apos;m based in Lalitpur, Nepal and open to remote work
                worldwide.
              </p>
              <a href="#contact">
                <Button
                  name="Contact Me"
                  isBeam
                  containerClass="w-full mt-10"
                />
              </a>
              <a href={CV} download={true}>
                <Button name="Download CV" containerClass="w-full mt-2" />
              </a>
            </div>
          </div>
        </div>

        {/* Fourth Section */}
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src={grid3}
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code.
                Programming isn&apos;t just my profession—it&apos;s my passion.
                I enjoy exploring new technologies, and enhancing my skills.
              </p>
            </div>
          </div>
        </div>

        {/* Fifth Section */}
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src={grid4}
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />
            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? tick : copy} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  rowelmhj@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
