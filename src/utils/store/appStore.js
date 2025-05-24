import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slice/userSlice";
import feedReducer from "../slice/feedSlice";
import navbarDropdownSlice from "../slice/navbarDropdownSlice";

const appStore = configureStore({
    reducer: {
        user: userReducer,
        feed: feedReducer,
        navbarDropdown: navbarDropdownSlice
    }
});

export default appStore;