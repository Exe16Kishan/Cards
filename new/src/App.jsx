import Cards from './cards/Cards'
import Nav from './header/Nav'

import { Images } from './const'
import React, { useState, useEffect } from "react";
function App() {
  const newConst =[...Images]
// to store data from child component
  const[search,setsearch]=useState('')
// to store the filterd array
const[filterdItems,setfilterdItems]=useState(newConst)
  // function to handle data recieved from child
  function toggleSearch(data) {
    setsearch(data)
  }

 
 // filtering the data
 function filterData() {
  // If the search term is empty, set the filtered items to the original array
  if (search === "") {
    setfilterdItems(newConst);
  } else {
    const filtered = newConst.filter(item =>
      item.info.toLowerCase().includes(search.toLowerCase())
    );
    setfilterdItems(filtered);
  }
}

// Call the filterData function when the search state variable changes
useEffect(() => {
  filterData();
}, [search]);


  return (
    <>
    {/* sending function as prop to get input from child nav bar component */}
    <Nav searchInput={toggleSearch}></Nav>
    {/* sending the filterd array to card component to render only the searched input */}
     <Cards items={filterdItems}></Cards>

    </>
  )
}

export default App
