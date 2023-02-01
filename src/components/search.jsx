import { React, useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import axios from "axios";

function search() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

useEffect(() => {
  let isCancelled = false;
  axios
    .get(
      "https://www.googleapis.com/books/v1/volumes?q='+query+'&key=AIzaSyBnHfUXLonUAGXzBmePUlfQGmiy2W6QANM" +
        "&maxResults=40"
    )
    .then((response) => {
      if (!isCancelled) {
        console.log(response.data.items);
        setData(response.data.items);
        setQuery("");
      }
    })
    .catch((error) => {
      if (!isCancelled) {
        console.error(error);
      }
    });

  return () => {
    isCancelled = true;
  };
}, [query]);


  const handleSearch = (e) => {
    e.preventDefault()
    setQuery(query);
  };



 return (
   <div className="flex items-center justify-center w-[100%] bg-[pink] mt-[50px]">
       <form className="flex justify-between text-white  border-b-2 border-[#D3D3D3] w-[300px] bg-[red]">
         <input
           type="text"
           value={query}
           onChange={(e) => setQuery(e.target.value)}
           className="bg-[#16171b] text-[#F5F5DC] border-none mr-3 px-2 leading-tight focus:outline-none w-full"
           autoComplete="off"
           required
           placeholder="Search"
         />
         <button type="submit" onClick={handleSearch}>
           <BsSearch />
         </button>
       </form>
       <div className="flex flex-wrap gap-32 mt-32 bg-purple-300 w-full">
       </div>
   </div>
 );
}

export default search;
