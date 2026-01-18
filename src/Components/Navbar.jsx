import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const Navigate = useNavigate();
  return (
    <>
      <nav className="w-full bg-[#1C4D8D]   px-10 py-5 text-white sm:flex items-center justify-between hidden">
        <div className="text-white text-xl font-semiBold cursor-pointer">
          MediaSearch
        </div>
        <div className="flex items-center gap-x-5">
          <button
            className="bg-white text-black px-5 hover:animate-pulse py-1.5 rounded"
            onClick={() => Navigate("/")}
          >
            Search
          </button>{" "}
          <button
            className="bg-white text-black px-5 hover:animate-pulse py-1.5 rounded"
            onClick={() => Navigate("/collections")}
          >
            Collection
          </button>
        </div>
      </nav>

      <nav className="w-full bg-[#1C4D8D]   px-3 py-4 text-white flex items-center justify-between sm:hidden">
        <div className="text-white text-lg font-semiBold cursor-pointer">
          MediaSearch
        </div>
        <div className="flex items-center gap-x-3 text-xs">
          <button
            className="bg-white text-black px-4 hover:animate-pulse py-1.5 rounded"
            onClick={() => Navigate("/")}
          >
            Search
          </button>{" "}
          <button
            className="bg-white text-black px-4 hover:animate-pulse py-1.5 rounded"
            onClick={() => Navigate("/collections")}
          >
            Collection
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
