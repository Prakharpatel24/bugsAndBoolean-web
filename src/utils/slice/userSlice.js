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
        deleteUser: (state) => {
            state.userInfo = null
        }
    }
})

export const { addUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;