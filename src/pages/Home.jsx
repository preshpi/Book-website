import { React, useState, useEffect } from "react";
import Category from "../components/Category";
import Card from "../components/Card";
import { BsSearch } from "react-icons/bs";
import axios from "axios";

function Home() {
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
    e.preventDefault();
    setQuery(query);
  };
  return (
    <div className="pt-[30px] w-[100%] mx-auto">
      <div className="text-[#FFFFE0] text-center font-[Zodiak]  leading-9">
        <h1 className="text-3xl">
          Explore a vast <span className="">library</span> of books
        </h1>
        <p className="text-[#FFFFE0]" spellCheck="true">
          Your one-stop destination for all your reading needs.
        </p>
      </div>
      <div className="flex items-center justify-center mt-[60px]">
        <form className="flex justify-between text-white  border-b-2 border-[#D3D3D3] w-[300px]">
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
      </div>

      <div className="mt-[30px]">
        <Category />
      </div>

      <div className="mt-[50px]">
        {
          <Card
            book={data}
          />
        }
      </div>
    </div>
  );
}

export default Home;
