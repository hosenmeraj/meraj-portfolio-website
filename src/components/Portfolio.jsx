import React from "react";
import arrayDestruct from "../assets/portfolio/mongodb.PNG";
import installNode from "../assets/portfolio/authorization.PNG";
import navbar from "../assets/portfolio/api.PNG";
import reactParallax from "../assets/portfolio/authorization.PNG";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: arrayDestruct,
      description:"Users can create an account with custom email and social login system.Users manage product , add and delete item.Users can update an item like: restock quantity and deliver an item",
      link:"https://amar-cycle-firebase-auth.web.app/",
      code:"https://github.com/ProgrammingHeroWC4/warehouse-management-client-side-hosenmeraj"
    },
    {
      id: 2,
      src: reactParallax,
      description:"Users can create an account with custom email.  Service details page auth required .Home page is responsive mobile and desktop",
      link:"https://dantist-mrs-sabrina.web.app/",
      code:"https://github.com/programming-hero-web-course-4/independent-service-provider-hosenmeraj"
    },
    {
      id: 3,
      src: navbar,
      description:" A customer can Search a phone. He Choose a phone and see details information phone.",
      link:"https://hosenmeraj.github.io/finding-phone-assignment/",
      code:"https://github.com/programming-hero-web-course2/phone-hunter-hosenmeraj"
    },
   
  ];

  return (
    <div
      name="portfolio"
      className=" bg-gradient-to-b from-black to-gray-800 w-full text-white  md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-6">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,link,description,code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <p className="px-3 text-justify py-3">{description}</p>
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={link} target="blank">Demo</a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                <a href={code} target="blank">Code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
