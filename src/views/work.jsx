import React, { useState } from "react";
import { motion } from "framer-motion";
import { Flipper } from "../components";
import { projectList } from "../utils/projects";
import { Link } from "react-scroll";

const Work = () => {
  const [title, setTitle] = useState(projectList[0].name);
  const [subTitle, setSubTitle] = useState(projectList[0].description);
  const [gitHub, setGithub] = useState(projectList[0].github);

  const handleView = (index) => {
    setTitle(projectList[index].name);
    setSubTitle(projectList[index].description);
    setGithub(projectList[index].github);
  };
  /*<motion.div
          
          className="bg-red-500 h-20 w-20"
        ></motion.div> */

  return (
    <div
      className="w-full h-screen flex sm:flex-row flex-col place-items-center place-content-center"
      id="work"
    >
      <div className="sm:w-1/3 w-full sm:h-full h-1/2  flex place-content-center place-items-center relative ">
        <div className="flex flex-col place-content-start place-items-start gap-3 w-[60%]">
          <motion.p
            key={title}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            initial="hidden"
            animate={"visible"}
            transition={{ duration: 1, delay: 0.25 }}
            className="text-3xl font-helvetica font-bold"
          >
            {title}
          </motion.p>

          <motion.p
            key={subTitle}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            initial="hidden"
            animate={"visible"}
            transition={{ duration: 1, delay: 0.25 }}
            className="text-sm font-helvetica font-light"
          >
            {subTitle}
          </motion.p>
          <Link to="/" spy={true} smooth={true} offset={50} duration={500}>
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.1 },
                visible: { opacity: 1, scale: 1 },
              }}
              initial="hidden"
              animate={"visible"}
              transition={{ duration: 1, delay: 0.25 }}
              className="absolute sm:top-10 sm:left-10 top-3 left-3 sm:w-32 w-20 duration-300 h-10 border hover:bg-zinc-500 hover:animate-wiggle animate-duration-75 hover:text-white hover:shadow-2xl rounded-full text-xs flex place-content-center place-items-center p-3 cursor-pointer font-helvetica text-zinc-400 border-zinc-400 "
            >
              Back
            </motion.div>
          </Link>
          {gitHub !== "" ? (
            <a href={gitHub} target="_blank" rel="noreferrer">
              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0.1 },
                  visible: { opacity: 1, scale: 1 },
                }}
                initial="hidden"
                animate={"visible"}
                transition={{ duration: 1, delay: 0.25 }}
                className="duration-300 h-10 border hover:bg-zinc-500 hover:animate-wiggle animate-duration-75 hover:text-white hover:shadow-2xl rounded-full text-xs flex place-content-center place-items-center p-3 cursor-pointer font-helvetica text-zinc-400 border-zinc-400 "
              >
                View Github
              </motion.div>
            </a>
          ) : (
            <></>
          )}
        </div>
      </div>

      <Flipper view={handleView} />
    </div>
  );
};

export default Work;
