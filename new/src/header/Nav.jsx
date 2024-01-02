import React ,{useState} from "react";
import brain from "./brain.png";
import search from "./search.png";
import { CiMenuBurger } from "react-icons/ci";

function Nav({searchInput,sidebar}) {
  // Used in map func 
  const links = [{ name: "Git" },
   { name: "Contact" }, 
   { name: "CV" }];
 
   // store data entered by user
   const[input,setinput]=useState("")
   const[active,setactive]=useState(false)

  // function to handle button click
  function handleChange(e) {
    const searchText = e.target.value;
    setinput(searchText);
    searchInput(searchText); // Notify the parent component of the search input
  }

  // for sidenav baar
  function HandleClick() {
    setactive(!active)
    sidebar(active)
  }
  return (
    <>
      <div className=" flex justify-evenly  flex-wrap  w-screen items-center bg-slate-500">
      
        <div className="flex items-center gap-20 ">
          <div onClick={HandleClick}><CiMenuBurger className=" text-black cursor-pointer text-3xl hover:rotate-90 duration-150  "/></div>
          <div className="flex items-center">
          <img src={brain} className=" h-16 w-16" />
          <h3 className="font-extrabold">Knowledge</h3>
          </div>
        </div>

        <div className=" inline-flex gap-10 text-center">
          {links.map((link,index) => (
            <h3 key={index} className="cursor-pointer text-xl font-semibold 
            border-b-2 border-transparent hover:border-white duration-500">{link.name}</h3>
          ))}
        </div>

        <div className="flex items-center  bg-slate-400 rounded-full">
          <input type="text" className="outline-none border-none bg-transparent " onChange={handleChange} />
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
