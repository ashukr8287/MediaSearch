import { configureStore } from "@reduxjs/toolkit";
import MediaReducer from "./Features/MediaSlice"

const store = configureStore({
  reducer: {
    search:MediaReducer
  },
});
export default store;
