import React, { useState } from "react";
import Images from "../const";
import like from "../images/like.png";
import dlike from "../images/dlike.png";
function Cards() {
  const initialLikedStates = Images.map(() => true);
  const [Like, setlike] = useState(initialLikedStates);
 


  const toggleImage = (index) => {
    // Create a copy of the current likedStates array
    const updatedLikedStates = [...Like];
    
    // Toggle the liked state of the clicked card (index)
    updatedLikedStates[index] = !updatedLikedStates[index];
    
    // Update the state with the new array
    setlike(updatedLikedStates);
    
  };

  // const toggleImage = () => {
  //   setlike(!Like);
  // };
  return (
    <>
      <div className=" flex flex-wrap justify-around ">
        {Images.map((img, index) => (
          <div
            className="bg-slate-700  m-3 rounded-lg object-cover w-52 shadow-lg
             shadow-slate-500 hover:scale-105 duration-300 "
            key={index}
          >
            <img src={img.img} className="" />
            <h3 className=" text-center text-white">{img.info}</h3>
            <button  onClick={() => toggleImage(index)} style={{
                backgroundColor: Like[index] ? "green" : "red",
              }}>
              <img src={Like[index] ? like : dlike} />
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cards;

// import React, { useState } from "react";
// import Images from "../const";
// import like from '../images/like.png';
// import dlike from '../images/dlike.png';

// function Cards() {
//   // Initialize liked states for each card
//   const initialLikedStates = Images.map(() => true);
//   const [likedStates, setLikedStates] = useState(initialLikedStates);

//   const toggleImage = (index) => {
//     // Create a copy of the current likedStates array
//     const updatedLikedStates = [...likedStates];
//     // Toggle the liked state of the clicked card (index)
//     updatedLikedStates[index] = !updatedLikedStates[index];
//     // Update the state with the new array
//     setLikedStates(updatedLikedStates);
//   };

//   return (
//     <>
//       <div className="flex flex-wrap justify-around">
//         {Images.map((img, index) => (
//           <div
//             className="bg-slate-700 m-3 rounded-lg object-cover w-52 shadow-lg shadow-slate-500 hover:scale-105 duration-300"
//             key={index}
//           >
//             <img src={img.img} alt={img.info} />
//             <h3 className="text-center text-white">{img.info}</h3>
//             <button onClick={() => toggleImage(index)}>
//               <img src={likedStates[index] ? like : dlike} alt={likedStates[index] ? "Liked" : "Not Liked"} />
//             </button>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

// export default Cards;
