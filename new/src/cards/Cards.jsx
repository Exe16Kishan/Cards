import React, { useState } from "react";
// import { Images } from "../const";
import like from "../images/like.png";
import dlike from "../images/dlike.png";
function Cards({items}) {
  const initialLikedStates = items.map(() => true);
  const [Like, setlike] = useState(initialLikedStates);
  const [read, setread] = useState(initialLikedStates);

  const discription = items.map((img) => `${img.info.substring(0, 100)}...`);

  const toggleImage = (index) => {
    // Create a copy of the current likedStates array
    const updatedLikedStates = [...Like];

    // Toggle the liked state of the clicked card (index)
    updatedLikedStates[index] = !updatedLikedStates[index];

    // Update the state with the new array
    setlike(updatedLikedStates);
  };

  function toggleRead(index) {
    // Create a copy of the current readStates array
    const updateread = [...read];
    // Toggle the read state of the clicked card (index)
    updateread[index] = !updateread[index];
    // Update the state with the new array
    setread(updateread);
  }

  return (
    <>
      <div className=" flex flex-wrap justify-around ">
        {items.map((img, index) => (
          <div
            className="bg-slate-700  m-3 rounded-lg object-cover w-52 shadow-lg
             shadow-slate-500 hover:scale-105 duration-300 "
            key={index}
          >
            <img src={img.img} className="" />

            <div className=" text-center">
              <h3 className=" text-white">
                {read[index] ? discription[index] : img.info}
              </h3>
              <span className=" cursor-pointer text-red-500" onClick={() => toggleRead(index)}>
                {read[index] ? "showmore" : "showless"}
              </span>
            </div>

            <button
              onClick={() => toggleImage(index)}
              style={{
                backgroundColor: Like[index] ? "green" : "red",
              }}
            >
              <img src={Like[index] ? like : dlike} />
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cards;
