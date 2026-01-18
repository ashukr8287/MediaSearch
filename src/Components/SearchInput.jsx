import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {setQuery} from "../Redux/Features/MediaSlice"


function SearchInput() {
  const [value, setValue] = useState("");
  const dispatch=useDispatch()
  const submitHandler = (e) => {
    e.preventDefault();
    if (value.trim().length > 0) {
      dispatch(setQuery(value))


    }
  };
  return (
    <div className="bg-[#0F2854] md:py-10 py-6">
      <form onSubmit={(e) => submitHandler(e)}>
        <div className="flex items-center md:px-10 px-4 md:gap-x-10 gap-x-4">
          <input
            type="text"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            placeholder="Search anything . . ."
            className="flex-1 border border-white rounded bg-transparent outline-none text-white  py-3 px-4 placeholder-white"
          />
          <button
            type="submit"
            disabled={!value.trim()}
            className={`bg-none text-white border border-white rounded px-8  py-3  ${value ? "cursor-pointer" : "cursor-not-allowed"} `}
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchInput;
