import React from "react";
import "./Projects.css";
import ProjectsCard from "./ProjectsCard";
import NavigateBtn from "../NavigateButton/NavigateBtn";
function Projects() {
  const ProjectData = [
    {
      title: "Shopify",
      href: "https://shopify-shopping-app.netlify.app/",
      technology: "React",
      description:
        "It is a shopping app. Key points to observe are form validation, Redux, animations, browser storage, data fetching, routing, different array methods etc.",
        bgcolor:"linear-gradient(to right, #f12711, #f5af19)"
       
    },
    {
        title: "Social-Media",
        href: "https://socialmedia-posting-app.netlify.app/",
        technology: "React",
        description:
          "It is a basic social media app. Key points to observe are data fetching, use of different react hooks like context api, useEffect, useState, routing concepts etc",
          bgcolor:"linear-gradient(to right, #ff416c, #ff4b2b)"
        },
      {
        title: "My-Gallery",
        href: "https://my-photo-search-app.netlify.app/",

        technology: "React",
        description:
          "It is a Gallery app. Key points to observe are data hadling, infinit scrolling, usage of react components, lazy image loading etc",
         bgcolor:"linear-gradient(to right, #654ea3, #eaafc8)"
        },
        {
          title: "Random-Quiz",
          href: "https://my-random-quiz-app.netlify.app/",
  
          technology: "React",
          description:
            "It is a Quiz app. Key points to observe are usage of async function, logic building, randomizing test questions every time it is newly loaded, props drilling",
           bgcolor:"linear-gradient(to right, #fbd3e9, #bb377d)"
          },
      {
        title: "My-Recipe",
        href: "https://react-assignment-useeffect002.netlify.app/ ",
        technology: "React",
        description:
          "It is a Recipe app. Key points to observe are  data fetching, data handling, useEffect, usage of higher order, bootstrap library, psedo classes array methods etc",
        bgcolor:"linear-gradient(to right, #f2994a, #f2c94c)"
        },
      {
        title: "Password-Generator",
        href: "https://password-generator-assignment.netlify.app/",
        technology: "React",
        description:
          "It is a Password-Generator app. Key points to observe are logical reasoning, usage of math function, condition handling, call back functions, responsive behaviour etc",
      bgcolor:"linear-gradient(to right, #12c2e9, #c471ed, #f64f59)"
        },
      {
        title: "Image-Search",
        href: "https://priyanshu-240499.github.io/MCT-Web/Search-Image/search-image.html",
        technology: "Vanilla-Js",
        description:
          "It is a Image-Search app. It is pure Js based project. Key points to observe are form searching, data handling, useinterval functions, bootstrap, DOM manipulation, etc",
        bgcolor:"linear-gradient(to right, #659999, #f4791f)"
        },
      {
        title: "LeaderBoard",
        href: "https://priyanshu-240499.github.io/WebAssignment/4-Advance-JS/408-leaderboard/AdvanceJS-408-01/index.html",
        technology: "Vanilla-Js",
        description:
          "It is a shopping app.It is pure Js based project. Key points to observe are Dom manipulation, adding delete and edit buttons, bootstrap, UI creation etc",
         bgcolor:"linear-gradient(to right, #3a1c71, #d76d77, #ffaf7b)"
        },
      {
        title: "Weight-Calculator",
        href: "https://priyanshu-240499.github.io/WebAssignment/4-Advance-JS/404-Mini-Project-Solar%20System/AdvanceJS-404-01/index.html",
        technology: "Vanilla-Js",
        description:
          "It is a shopping app.It is pure Js based project. Key points to observe are DOM Manipulation, logical reasoning, Event Listners, bootstrap",
          bgcolor:"linear-gradient(to right, #4ecdc4, #556270)"
        },
      {
        title: "Country-List",
        href: "https://priyanshu-240499.github.io/WebAssignment/4-Advance-JS/406-Data-visualization/AdvanceJS-406-01/index.html",
        technology: "Vanilla-Js",
        description:
          "It is a shopping app.It is pure Js based project. Key points to observe are Data filtering on search, DOM Manipulation, Event Listners, bootstrap  etc",
        bgcolor:"linear-gradient(to right, #56ab2f, #a8e063)"
        },
  ];
  return (
    <div className="Projects">
        {ProjectData.map((item, index) => (
          <ProjectsCard key={item.title} data={item} index={index} />
        ))}
        <NavigateBtn pathto="/Contact" pathname="Contact" animDuration="2.5"/>
    </div>
  );
}

export default Projects;
