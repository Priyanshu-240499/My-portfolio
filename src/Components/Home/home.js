import React from "react";
import "./home.css";
import NavigateBtn from "../NavigateButton/NavigateBtn";
import MyIntroList from "./MyIntroList";
import { motion } from "framer-motion";
function Home() {
  const homeIntroData = [
    "Name:Priyanshu Choudhary",
    "Fathers Name:Bhagwat S. Choudhary",
    "Mothers Name:Pramila Choudhary",
    "Hobbies:Badminton,Painting,Learning new Technology,Cooking",
  ];

  return (
    <div className="Home">
      <motion.div
        className="blob"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{delay:0.2, duration: 0.8 }}
      >
        <svg
          viewBox="0 0 500 500"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="100%"
          id="blobSvg"
        >
          <defs>
            <clipPath id="shape">
              <path id="blob" fill="#d1d8e0">
                <animate
                  attributeName="d"
                  dur="10000ms"
                  repeatCount="indefinite"
                  values="M427,309Q412,368,365,414.5Q318,461,259,432Q200,403,155.5,377Q111,351,92.5,300.5Q74,250,76,187.5Q78,125,133.5,94Q189,63,251,59Q313,55,355.5,99Q398,143,420,196.5Q442,250,427,309Z;M428.5,304Q399,358,357.5,406.5Q316,455,247,464Q178,473,149.5,408Q121,343,75.5,296.5Q30,250,58.5,190.5Q87,131,134,84Q181,37,251,33.5Q321,30,355,89.5Q389,149,423.5,199.5Q458,250,428.5,304Z;M423.5,304Q399,358,353.5,394Q308,430,244.5,447Q181,464,124,423.5Q67,383,71,316.5Q75,250,73,185Q71,120,130.5,92Q190,64,250.5,62.5Q311,61,362.5,96Q414,131,431,190.5Q448,250,423.5,304Z;M437.5,321Q445,392,376.5,410Q308,428,251.5,423.5Q195,419,124.5,405.5Q54,392,50,321Q46,250,56.5,183.5Q67,117,122.5,73Q178,29,248.5,34Q319,39,369.5,83Q420,127,425,188.5Q430,250,437.5,321Z;M429.5,301.5Q392,353,354.5,404Q317,455,248,461.5Q179,468,149,406.5Q119,345,82,297.5Q45,250,61,187Q77,124,137.5,106.5Q198,89,254.5,76.5Q311,64,374,89Q437,114,452,182Q467,250,429.5,301.5Z;M427,309Q412,368,365,414.5Q318,461,259,432Q200,403,155.5,377Q111,351,92.5,300.5Q74,250,76,187.5Q78,125,133.5,94Q189,63,251,59Q313,55,355.5,99Q398,143,420,196.5Q442,250,427,309Z"
                ></animate>
              </path>
            </clipPath>
          </defs>
          <image
            x="0"
            y="0"
            width="100%"
            height="100%"
            clipPath="url(#shape)"
            xlinkHref="https://i.postimg.cc/Zn98t0m3/Whats-App-Image-2022-11-07-at-4-47-55-AM.jpg"
            preserveAspectRatio="none"
          ></image>
        </svg>
      </motion.div>

      <div className="home-intro">
        {homeIntroData.map((item, index) => (
          <MyIntroList key={item} data={item} index={index} rotate={5}/>
        ))}
        <NavigateBtn pathto="/About" pathname="About" animDuration="1.6"/>
        <NavigateBtn pathto="/nav" pathname="NavBar" animDuration="2.3"/>
        
      </div>
    </div>
  );
}

export default Home;
