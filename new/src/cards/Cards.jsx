import React from "react";
import Images from "../const";
function Cards() {
  return (
    <>
      <div className=" flex flex-wrap justify-around ">
        {Images.map((img, index) => (
          <div
            className="bg-slate-700 m-3 rounded-lg object-cover w-52 shadow-lg
             shadow-slate-500 hover:scale-105 duration-300 "
            key={index}
          >
            <img src={img.img} className="" />
            <h3 className=" text-center text-white">{img.info}</h3>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cards;
