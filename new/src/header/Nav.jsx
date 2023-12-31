import React ,{useState} from "react";
import brain from "./brain.png";
import search from "./search.png";
function Nav({searchInput}) {
  // Used in map func 
  const links = [{ name: "Git" },
   { name: "Contact" }, 
   { name: "CV" }];
 
   // store data entered by user
   const[input,setinput]=useState("")

  // function to handle button click
  function handleChange(e) {
    const searchText = e.target.value;
    setinput(searchText);
    searchInput(searchText); // Notify the parent component of the search input
  }

  
  return (
    <>
      <div className=" flex justify-around flex-wrap w-screen items-center bg-slate-500">

        <div className="flex items-center ">
          <img src={brain} className=" h-16 w-16" />
          <h3 className="font-extrabold">Brain Strom</h3>
        </div>

        <div className=" inline-flex gap-10 text-center">
          {links.map((link,index) => (
            <h3 key={index} className="cursor-pointer text-xl font-semibold 
            border-b-2 border-transparent hover:border-white duration-500">{link.name}</h3>
          ))}
        </div>

        <div className="flex items-center  bg-slate-400 rounded-full">
          <input type="text" className="outline-none border-none bg-transparent px-3" onChange={handleChange} />
          <img onClick={()=>searchInput(input)}
            src={search}
            className=" cursor-pointer h-8 px-2 py-1"
            
          />
        </div>
      </div>
    </>
  );
}

export default Nav;
