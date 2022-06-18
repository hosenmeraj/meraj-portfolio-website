import React from "react";
// import "./style.css/About.css"
import kauser from "../assets/portfolio/kauser.png"

const About = () => {
  return (
    <div
    name="name"
    id="about"
    className="w-full h-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center w-full h-full">
      <div class="about-model ">
            <img src={kauser} alt="model"/>	
        </div>
        <div class="about-text lg:max-w-lg px-12 sm:px-0">
            
            <h2 className="text-white font-semibold text-4xl py-4 ">About Me</h2>
            <h3>Junior Front End <span className="text-lime-500">Developer</span></h3>
            <p className="text-xl py-3">I'm a React JS developer. I always want to make a website good-looking. Always looking for new technology. I have a lot of interest in UI. That's why I learned to react to js to make a user satisfied.</p>
            <p className="text-xl">I started learning to react a few months ago and I love using react on website because React is to be fast, scalable, and simple. It works only on user interfaces in the application.</p>
            <button className="btn bg-lime-500 rounded-md p-2 mt-3 font-bold">Hire Me</button>
        </div>
      </div>
    </div>
  );
};

export default About;
