import { createSlice } from "@reduxjs/toolkit";

const MediaSlice = createSlice({
  name: "search",
  initialState: {
    query: "",
    activeTab: "photos",
    results: [],
    loading: false,
    error: null,
  },
  reducers: {
    setQuery: (state, actions) => {
      state.query = actions.payload;
    },
    setActiveTab: (state, actions) => {
      state.activeTab = actions.payload;
    },
    setResults: (state, actions) => {
      state.results.push(actions.payload)
      state.loading = false;
    },
    setLoading: (state) => {
      state.loading = true;
      state.error = null;
    },
    setError: (state, actions) => {
      state.error = actions.payload;
      state.loading = false;
    },
  },
});

export const { setQuery, setActiveTab, setResults, setLoading, setError } = MediaSlice.actions;

export default MediaSlice.reducer;
