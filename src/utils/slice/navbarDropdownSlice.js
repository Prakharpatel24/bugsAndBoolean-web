import { createSlice } from "@reduxjs/toolkit";

const navbarDropdownSlice = createSlice({
    name: 'navbarDropdown',
    initialState: {
        dropdown: false
    },
    reducers: {
        isOpen: (state, action) => {
            state.dropdown = action.payload
        }
    }
});

export const { isOpen } = navbarDropdownSlice.actions;
export default navbarDropdownSlice.reducer;