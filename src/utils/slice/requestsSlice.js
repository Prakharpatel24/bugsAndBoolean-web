import { createSlice } from "@reduxjs/toolkit";

const requestsSlice = createSlice({
    name: 'requests',
    initialState: {
        requestData: null,
        numberOfRequests: 0
    },
    reducers: {
        addRequestData: (state, action) => {
            state.requestData = action.payload;
        },
        removeRequestData: (state) => {
            state.requestData = null
        },
        setNumberOfRequests: (state, action) => {
            state.numberOfRequests = action.payload
        },
        clearNumberOfRequests: (state) => {
            state.numberOfRequests = 0
        }
    }
})

export const { addRequestData, removeRequestData, setNumberOfRequests, clearNumberOfRequests } = requestsSlice.actions;
export default requestsSlice.reducer;