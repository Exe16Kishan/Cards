import React ,{useState} from "react";
import brain from "./brain.png";
import search from "./search.png";
import { CiMenuBurger } from "react-icons/ci";

function Nav({searchInput,sidebar}) {
 
 
   // store data entered by user
   const[input,setinput]=useState("")
   const[active,setactive]=useState(false)

  // function to handle button click
  function handleChange(e) {
    const searchText =e.target.value;
    setinput(searchText);
    if (input.trim() !== "") {
      searchInput(input); // Notify the parent component of the search input
    } else{
      //  console.log("invalid")
      }
  }


  // for sidenav baar
  function HandleClick() {
    setactive(!active)
    sidebar(active)
  }
  return (
    <>
      <div className=" flex justify-between px-10  flex-wrap  w-screen items-center bg-slate-500 ">
      
        <div className="flex items-center gap-12 ">
          <div ><CiMenuBurger onClick={HandleClick} className=" text-black cursor-pointer text-3xl hover:rotate-90 duration-150  "/></div>
          <div className="flex items-center">
          <img src={brain} className=" h-16 w-16" />
          <h3 className="font-extrabold">Knowledge</h3>
          </div>
        </div>

        

        <div className="flex items-center px-5 bg-slate-400 rounded-full">
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
