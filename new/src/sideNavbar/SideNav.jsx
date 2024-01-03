
import React, { useState } from "react";
import sni from "../images/sni.png";
import { AiOutlineClose } from "react-icons/ai";
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion";

function SideNav({ close }) {
  // Used in map func
  const links = [{ name: "Git" }, { name: "Contact" }, { name: "CV" }];

  function ToggleButton() {
    close((prevClose) => !prevClose);
  }

  const variants = {
        hidden: { x: "-100%" },
        visible: { x: 0 },
      };
 
  return (
    <motion.div
      className="fixed top-0 h-screen w-60 bg-slate-400"
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <div className="flex justify-end p-5">
        <button className="" onClick={ToggleButton}>
          <AiOutlineClose className=" w-6 h-6 hover:rotate-45 duration-150 " 
          variants={variants}
          
          animate="visible"
          exit="hidden" />
        </button>
      </div>

      <div className="my-4 flex flex-col gap-3 items-center">
        <img
          src={sni}
          className=" bg-slate-500 p-3 rounded-full size-40 object-contain"
        />
        <h3 className=" text-slate-700">@_the_Prince_Pandit</h3>

        
      </div>
      <div className="text-center my-20 ">
          {links.map((link, index) => (
            <h3
              key={index}
              className="cursor-pointer p-5 text-xl font-semibold 
             hover:bg-slate-300 duration-300 "
            >
              {link.name}
            </h3>
          ))}
        </div>

        <div className="flex justify-center gap-3 ">
        <SocialIcon className="hover:scale-125 duration-200" url="www.instagram.com" />
        <SocialIcon className="hover:scale-125 duration-200" url="www.twitter.com" />
        {/* <SocialIcon className="hover:scale-110 duration-200" url="www.facebook.com" /> */}
        <SocialIcon className="hover:scale-125 duration-200" url="www.discord.com" />
        </div>
    </motion.div>
  );
}

export default SideNav;

