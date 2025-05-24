import { createSlice } from "@reduxjs/toolkit";

const connectionSlice = createSlice({
    name: 'connections',
    initialState: {
        connectionData: null,
        numberOfConnections: 0
    },
    reducers: {
        addConnectionData: (state, action) => {
            state.connectionData = action.payload
        },
        removeConnectionData: (state) => {
            state.connectionData = null
        },
        setNumberOfConnections: (state, action) => {
            state.numberOfConnections = action.payload
        },
        clearNumberOfConnections: (state) => {
            state.numberOfConnections = 0
        }
    }
})

export const { addConnectionData, removeConnectionData, setNumberOfConnections, clearNumberOfConnections } = connectionSlice.actions;
export default connectionSlice.reducer;