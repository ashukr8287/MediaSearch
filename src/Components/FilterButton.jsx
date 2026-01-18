import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../Redux/Features/MediaSlice";

function FilterButton() {
  const btnList = ["photos", "videos"];
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.search.activeTab);

  return (
    <div className="flex py-4 md:px-10 px-4 gap-x-3">
      {btnList.map((item) => (
        <button
          className={`${activeTab === item ? "bg-[#1546E3]" : " bg-[#6C7180]"}  transition cursor-pointer text-white text-xs px-5  py-2 rounded uppercase`}
          key={item}
          onClick={() => dispatch(setActiveTab(item))}

        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default FilterButton;
