import React from "react";
import "./Projects.css";
import ProjectsCard from "./ProjectsCard";
function Projects() {
  const ProjectData = [
    {
      title: "Shopify",
      href: "https://shopify-shopping-app.netlify.app/",
      technology: "React",
      description:
        "It is a shopping app.Key points to observe are form validation, animations, browser storage, data fetching, routing, data filtering, data mapping, other array methods etc.",
        bgcolor:"linear-gradient(to right, #f12711, #f5af19)"
       
    },
    {
        title: "Social-Media",
        href: "https://socialmedia-posting-app.netlify.app/",
        technology: "React",
        description:
          "It is a shopping app.Key points to observe are form validation, animations, browser storage, data fetching, routing, data filtering, data mapping, other array methods etc",
          bgcolor:"linear-gradient(to right, #ff416c, #ff4b2b)"
        },
      {
        title: "My-Gallery",
        href: "https://socialmedia-posting-app.netlify.app/",

        technology: "React",
        description:
          "It is a shopping app.Key points to observe are form validation, animations, browser storage, data fetching, routing, data filtering, data mapping, other array methods etc",
         bgcolor:"linear-gradient(to right, #654ea3, #eaafc8)"
        },
      {
        title: "My-Recipe",
        href: "https://socialmedia-posting-app.netlify.app/",
        technology: "React",
        description:
          "It is a shopping app.Key points to observe are form validation, animations, browser storage, data fetching, routing, data filtering, data mapping, other array methods etc",
        bgcolor:"linear-gradient(to right, #f2994a, #f2c94c)"
        },
      {
        title: "Password-Generator",
        href: "https://socialmedia-posting-app.netlify.app/",
        technology: "React",
        description:
          "It is a shopping app.Key points to observe are form validation, animations, browser storage, data fetching, routing, data filtering, data mapping, other array methods etc",
      bgcolor:"linear-gradient(to right, #12c2e9, #c471ed, #f64f59)"
        },
      {
        title: "Image-Search",
        href: "https://socialmedia-posting-app.netlify.app/",
        technology: "React",
        description:
          "It is a shopping app.Key points to observe are form validation, animations, browser storage, data fetching, routing, data filtering, data mapping, other array methods etc",
        bgcolor:"linear-gradient(to right, #659999, #f4791f)"
        },
      {
        title: "LeaderBoard",
        href: "https://socialmedia-posting-app.netlify.app/",
        technology: "React",
        description:
          "It is a shopping app.Key points to observe are form validation, animations, browser storage, data fetching, routing, data filtering, data mapping, other array methods etc",
         bgcolor:"linear-gradient(to right, #3a1c71, #d76d77, #ffaf7b)"
        },
      {
        title: "Weight-Calculator",
        href: "https://socialmedia-posting-app.netlify.app/",
        technology: "React",
        description:
          "It is a shopping app.Key points to observe are form validation, animations, browser storage, data fetching, routing, data filtering, data mapping, other array methods etc",
        bgcolor:"linear-gradient(to right, #2193b0, #6dd5ed)"
        },
      {
        title: "Country-List",
        href: "https://socialmedia-posting-app.netlify.app/",
        technology: "React",
        description:
          "It is a shopping app.Key points to observe are form validation, animations, browser storage, data fetching, routing, data filtering, data mapping, other array methods etc",
        bgcolor:"linear-gradient(to right, #56ab2f, #a8e063)"
        },
  ];
  return (
    <div className="Projects">
        {ProjectData.map((item, index) => (
          <ProjectsCard key={item.title} data={item} index={index} />
        ))}
    </div>
  );
}

export default Projects;
