import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setResults, setLoading, setError } from "../Redux/Features/MediaSlice";
import { fetchPhoto, fetchVideo } from "../Services/MediaApi";

function GridLayout() {
  const dispatch = useDispatch();
  const { query, activeTab,results } = useSelector((state) => state.search);

  useEffect(() => {
    // Hello
    if (!query) return;

    const fetchData = async () => {
      try {
        dispatch(setLoading(true));

        if (activeTab === "photo") {
          const photos = await fetchPhoto(query);
          dispatch(setResults(photos));
          console.log("Fetched photos:", photos);
        }
        if (activeTab === "videos") {
          const photos = await fetchVideo(query);
          dispatch(setResults(photos));
          console.log("Fetched videos:", photos);
        }
      } catch (error) {
        console.error("Error fetching media:", error);
        dispatch(setError("Failed to fetch media"));
      } finally {
        dispatch(setLoading(false));
        console.log("finally ngggggg",results)
      }
    };

    fetchData();
  }, [query, activeTab, dispatch]);

  return <div className="text-white">GridLayout</div>;
}

export default GridLayout;
