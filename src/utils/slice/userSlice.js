import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userInfo: null
    },
    reducers: {
        addUser: (state, action) => {
            state.userInfo = action.payload
        },
        removeUser: (state, action) => {
            state.userInfo = action.payload
        }
    }
})

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;