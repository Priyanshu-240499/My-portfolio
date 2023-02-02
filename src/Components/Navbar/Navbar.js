import "./navbar.css";
import React from "react";
import Navcards from "./Navcards";

function Navbar() {
  const cardData = [
    {
      src: "https://i.gifer.com/PTYI.gif",
      title: "Home",
    },
    {
      src: "https://thumbs.gfycat.com/SlowDenseGlassfrog-max-1mb.gif",
      title: "About",
    },
    {
      src: "https://i.pinimg.com/originals/19/97/f3/1997f3da28e8d29289097871f45b04fd.gif",
      title: "Education",
    },
    {
      src: "https://i.pinimg.com/originals/0f/65/c2/0f65c227b3198b5e00e6f19a2b4712de.gif",
      title: "Projects",
    },
      {
        src: "https://cdn.dribbble.com/users/790118/screenshots/3894553/mail-gif.gif",
        title: "Contact",
      },
    {
      src: "https://ik.imagekit.io/njzqmguob/IMG20230104114558.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1672814964495",
      title: "Resume",
    },
  ];

  return (
    <div className="navbar">
      <div className="nav-cards1">
          {cardData.map((item,index) => (
            <Navcards key={item.title} data={item} index={index}/>
          ))}
      </div>
    </div>
  );
}

export default Navbar;
