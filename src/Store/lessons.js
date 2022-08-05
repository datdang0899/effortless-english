import { createSlice } from "@reduxjs/toolkit";
import { getLessons, getLinkPage } from "../Assets/fakeData/fakeDataServices";

const lessonSlice = createSlice({
  name: "lessons",
  initialState: {
    list: [],
    links: [],
    loading: false,
  },
  reducers: {
    loadLessons: (lessons, action) => {
      lessons.list = getLessons();
    },
    loadLinkPage: (lessons, action) => {
      lessons.links = getLinkPage();
    },
  },
});

export const { loadLessons , loadLinkPage } = lessonSlice.actions;

export default lessonSlice.reducer;
