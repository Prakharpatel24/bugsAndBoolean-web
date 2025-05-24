import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slice/userSlice";
import feedReducer from "../slice/feedSlice";
import navbarDropdownSliceReducer from "../slice/navbarDropdownSlice";
import connectionsReducer from "../slice/connectionsSlice";
import requestsReducer from "../slice/requestsSlice";

const appStore = configureStore({
    reducer: {
        user: userReducer,
        feed: feedReducer,
        navbarDropdown: navbarDropdownSliceReducer,
        connections: connectionsReducer,
        requests: requestsReducer
    }
});

export default appStore;