import { createSlice } from "@reduxjs/toolkit"

const feedSlice = createSlice({
    name: 'feed',
    initialState: null,
    reducers: {
        addFeed: (state, action) => action.payload,
        removeFeed: (state, action) => action.payload = null,
        removeFromFeed: (state, action) => {
            return state?.filter(feed => feed?._id !== action.payload);
        }
    }
})

export const { addFeed, removeFeed, removeFromFeed } = feedSlice.actions;
export default feedSlice.reducer;