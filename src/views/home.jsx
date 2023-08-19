import React, { useRef, useEffect, useState } from "react";
import flutterlogo from "../assets/flutter.png";
import fb from "../assets/fb.png";
import lkd from "../assets/linkedin.png";
import wa from "../assets/wa.png";
import clogo from "../assets/c.png";
import reactlogo from "../assets/react.png";
import dylan from "../assets/dylan.jpg";
import { Link } from "react-scroll";
import { motion, useInView, useAnimation } from "framer-motion";
import emailjs from "@emailjs/browser";

const Home = () => {
  const [contact, setContact] = useState(false);
  const [sending, setSending] = useState(false);

  const form = useRef();
  const [errormessage, setErrorMessage] = useState("");

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();
  const url =
    "https://drive.google.com/file/d/1K74VhPm3u33AvPWwEw4PraSuFmIIn1Pn/view?usp=sharing";

  useEffect(() => {
    if (isInView) {
      controls.start("final");
    }
  }, [isInView]);

  const sendMessage = (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSending(true);
    emailjs
      .sendForm(
        "service_jxsbzcp",
        "template_fjo7h1a",
        form.current,
        "ZDUAhF_lawaa_kCDd"
      )
      .then(
        (result) => {
          setErrorMessage("Message sent");
          setSending(false);
          console.log(result.text);
        },
        (error) => {
          setErrorMessage("Failed to send please try again");
          setSending(false);
          console.log(error.text);
        }
      );
  };
  return (
    <div className="flex sm:flex-row flex-col-reverse w-full h-screen bg-white">
      <div className="w-full h-full  flex place-content-center place-items-center  flex-col p-4  ">
        <div className="sm:w-1/2 w-full flex flex-col sm:place-items-start place-items-center gap-5">
          <div className="relative h-10 w-full">
            <p className="text-3xl  font-helvetica font-bold text-left">
              Dylan Karimagoko
            </p>
            <motion.div
              variants={{
                initial: { width: "100%" },
                final: { width: "0" },
              }}
              initial="initial"
              animate={controls}
              transition={{ duration: 0.7, delay: 0.25, ease: "linear" }}
              className=" h-full w-full bg-slate-100 absolute z-[999] top-0 right-0"
            ></motion.div>
          </div>
          <div className="relative">
            <motion.div
              variants={{
                initial: { width: "100%" },
                final: { width: "0" },
              }}
              initial="initial"
              animate={controls}
              transition={{ duration: 0.7, delay: 0.25, ease: "linear" }}
              className="h-full w-full bg-slate-100 absolute z-[999] top-0 right-0"
            ></motion.div>
            <p className="text-[12px] text-zinc-400 text-left font-helvetica">
              {" "}
              Hi my name is dylan, i am a front end software developer mainly
              specialising in mobile applications development and desktop
              development. I would love to here your ideas maybe I or we can
              work on them together.
            </p>
          </div>
          <div className="flex place-content-start  gap-2 w-full text-center ">
            <a href={url} target="_blank" rel="noreferrer">
              <div className="duration-300 h-10 border hover:bg-zinc-500 hover:animate-wiggle animate-duration-75 hover:text-white hover:shadow-2xl rounded-full text-xs flex place-content-center place-items-center p-3 cursor-pointer font-helvetica text-zinc-400 border-zinc-400 ">
                Download CV
              </div>
            </a>

            <div
              onClick={() => {
                setContact(!contact);
              }}
              className="duration-300 h-10 border hover:bg-zinc-500 hover:animate-wiggle animate-duration-75  hover:text-white hover:shadow-2xl rounded-full text-xs flex place-content-center place-items-center p-3 cursor-pointer font-helvetica text-zinc-400 border-zinc-400 "
            >
              Contact
            </div>
            <Link to="work" spy={true} smooth={true} offset={50} duration={500}>
              <div className="duration-300 h-10 border hover:bg-zinc-500 hover:animate-wiggle animate-duration-75 hover:text-white hover:shadow-2xl rounded-full text-xs flex place-content-center place-items-center p-3 cursor-pointer font-helvetica text-zinc-400 border-zinc-400 ">
                My Work
              </div>
            </Link>
            <a
              href="https://github.com/DylanKarimagoko"
              target="_blank"
              rel="noreferrer"
            >
              <div className="duration-300 hover:animate-wiggle animate-duration-75 h-10 border hover:bg-zinc-500 hover:shadow-2xl  hover:text-white  rounded-full text-xs flex place-content-center place-items-center p-3 cursor-pointer font-helvetica text-zinc-400 border-zinc-400 ">
                Github
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex place-content-center place-items-center  relative">
        <a href="https://flutter.dev/" target="_blank" rel="noreferrer">
          <div className="absolute top-[2vh] left-[1vh] animate-wiggle animate-infinite animate-duration-[2000ms] animate-ease-linear animate-alternate bg-gray-400 shadow-2xl shadow-slate-700 flex place-content-center place-items-center  bg-clip-padding backdrop-filter backdrop-blur-sm border border-slate-100 bg-opacity-20  rounded-lg z-20 w-20 h-20">
            <img
              src={flutterlogo}
              alt="Flutter Logo"
              className="w-[3rem] h-[3.4rem]"
            />
          </div>
        </a>

        <a
          href="https://learn.microsoft.com/en-us/dotnet/csharp/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="absolute sm:bottom-[20vh] bottom-[10vh] animate-bounce animate-infinite animate-duration-[2000ms] animate-ease-linear animate-alternate left-[5vh] bg-gray-400 shadow-2xl shadow-slate-700 flex place-content-center place-items-center  bg-clip-padding backdrop-filter backdrop-blur-sm border border-slate-100 bg-opacity-20  rounded-lg z-20 w-12 h-12">
            <img src={clogo} alt="C# Logo" className="w-[2rem] h-[2.4rem]" />
          </div>
        </a>

        <a href="https://react.dev/" target="_blank" rel="noreferrer">
          <div className="absolute top-[10vh] animate-fade-up animate-infinite animate-duration-[2000ms] animate-ease-linear animate-alternate right-[5vh] bg-gray-400 shadow-2xl drop-shadow-2xl shadow-slate-700 flex place-content-center place-items-center  bg-clip-padding backdrop-filter backdrop-blur-sm border border-slate-100 bg-opacity-20  rounded-lg z-20 w-16 h-16">
            <img
              src={reactlogo}
              alt="React Logo"
              className="w-[2rem] h-[2.1rem]"
            />
          </div>
        </a>

        <motion.img
          ref={ref}
          variants={{
            initial: { opacity: 0, x: 50, scale: 0.5 },
            final: { opacity: 1.5, x: 0, scale: 1 },
          }}
          initial="initial"
          animate={controls}
          transition={{ duration: 1, delay: 0.25, ease: "linear" }}
          src={dylan}
          alt="Flutter Logo"
          className="cursor-pointer border w-[30vh] h-[35vh] sm:w-[20rem] sm:h-[23rem] border-zinc-300 rounded-xl flex-shrink-0 flex hover:shadow-2xl duration-500"
        />
      </div>

      {contact && (
        <div className="absolute top-0 left-0 w-full h-full flex place-content-center place-items-center z-[9999999]">
          <div
            className="w-full h-full  bg-zinc-500/70 cursor-pointer"
            onClick={() => {
              setContact(!contact);
              setErrorMessage("");
            }}
          ></div>
          <motion.div
            variants={{
              initial: { opacity: 0, scale: 0.5 },
              final: { opacity: 1.5, scale: 1 },
            }}
            initial="initial"
            animate="final"
            transition={{ duration: 1, delay: 0.25, ease: "linear" }}
            className="sm:w-[23rem] sm:h-[30rem] w-[95%] h-[75%] bg-white absolute z-20 flex flex-col p-2"
          >
            <div
              onClick={() => {
                setContact(!contact);
                setErrorMessage("");
              }}
              className="w-20 place-self-end duration-300 hover:animate-wiggle animate-duration-75 h-8 border hover:bg-zinc-500 hover:shadow-2xl  hover:text-white  rounded-full text-xs flex place-content-center place-items-center p-3 cursor-pointer font-helvetica text-zinc-400 border-zinc-400 "
            >
              Close
            </div>

            <div className="p-5 flex flex-col w-full h-full">
              <h4>Get In Touch</h4>
              <div className="text-[12px] text-zinc-400 text-left font-helvetica">
                You can contact me using the following
                <form ref={form} onSubmit={sendMessage}>
                  <div className="flex flex-col mt-8 gap-3">
                    <input
                      required
                      type="text"
                      className="w-full h-7  border-b  p-3 caret-slate-300 focus:bg-zinc-100"
                      placeholder="Name"
                      name="user_name"
                    />
                    <input
                      required
                      type="text"
                      className="w-full h-7  border-b  p-3 caret-slate-300 focus:bg-zinc-100"
                      placeholder="Email"
                      name="user_email"
                    />
                    <textarea
                      required
                      className="w-full border-b  p-3 caret-slate-300 focus:bg-zinc-100 "
                      minLength={10}
                      placeholder="Message"
                      name="message"
                    />
                    <input
                      type="submit"
                      value="Send"
                      className="w-full mt-5 place-self-end duration-300 hover:animate-wiggle animate-duration-75 h-10 border hover:bg-zinc-500 hover:shadow-2xl  hover:text-white  rounded-full text-xs flex place-content-center place-items-center p-3 cursor-pointer font-helvetica text-zinc-400 border-zinc-400 "
                    />

                    {errormessage !== "" ? (
                      <div
                        className={
                          errormessage === "Message sent"
                            ? "w-full h-10 flex place-content-center place-items-center bg-green-500 rounded-md"
                            : "w-full h-10 flex place-content-center place-items-center bg-red-500 rounded-md"
                        }
                      >
                        <p className="text-xs text-black">{errormessage}</p>
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                </form>
                <div className="flex gap-1 place-items-center mt-5">
                  <hr className="w-full mr-3" />
                  <p className="text-xs">Or</p>
                  <hr className="w-full ml-3" />
                </div>
              </div>

              <div className="flex place-content-center place-items-center w-full gap-2 mt-5">
                <a
                  href="https://linkedin.com/in/dylan-karimagoko-7b6a291a0"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="w-12 h-12 place-self-end duration-300 hover:animate-wiggle animate-duration-75 border hover:bg-[#0077b5] hover:shadow-2xl  hover:text-white  rounded-lg text-xs flex place-content-center place-items-center p-3 cursor-pointer font-helvetica text-zinc-400 border-zinc-400 ">
                    <img
                      src={lkd}
                      alt=" Linkedin Logo"
                      className="w-full h-full"
                    />
                  </div>
                </a>
                <a
                  href="https://www.facebook.com/nitrocodetechzw/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="w-12 h-12 place-self-end duration-300 hover:animate-wiggle animate-duration-75 border hover:bg-[#1778f2] hover:shadow-2xl  hover:text-white  rounded-lg text-xs flex place-content-center place-items-center p-3 cursor-pointer font-helvetica text-zinc-400 border-zinc-400 ">
                    <img src={fb} alt=" fb Logo" className="w-full h-full" />
                  </div>
                </a>
                <a
                  href="https://wa.me/0786232255"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="w-12 h-12 place-self-end duration-300 hover:animate-wiggle animate-duration-75 border hover:bg-[#59ce72] hover:shadow-2xl  hover:text-white  rounded-lg text-xs flex place-content-center place-items-center p-3 cursor-pointer font-helvetica text-zinc-400 border-zinc-400 ">
                    <img src={wa} alt=" wa Logo" className="w-full h-full" />
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          {sending && (
            <div className="sm:w-[23rem] sm:h-[30rem] w-[90%] h-[75%] bg-white/70 absolute z-20 flex place-content-center place-items-center p-2">
              {" "}
              <p className="text-xs">Sending please wait...</p>{" "}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
