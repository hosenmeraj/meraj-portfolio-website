import React from "react";
import HeroImage from "../assets/portfolio/kauser.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
        <p className="text-white font-semibold py-3">Looking for a Jr. Front End Developer !</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            I'm  <span className="text-lime-500">Meraj</span> Hosen
          </h2>
          <p className="text-gray-500 py-4 max-w-md text-justify">
          I am excellent in planning, analyzing, designing, and developing. I am interested to work as a Mainframe web developer and my goal is to get good opportunities on the same profile in your company.
          </p>

          <div>
            <a
              href="https://drive.google.com/file/d/1QQqNzuzkDt9abvSAPKfPAeqiBWAK4e7K/view?usp=sharing" target="blank" download
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Download CV
              {/* <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span> */}
            </a>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/4 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
