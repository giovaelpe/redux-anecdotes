import { createSlice } from "@reduxjs/toolkit";

const notificationReducer = createSlice({
    name: "notifications",
    initialState: "",
    reducers: {
        set(state, action) {
            return action.payload;
        },
        clear(state, action) {
            return null
        }
    }
});

export const {set, clear} = notificationReducer.actions;
export default notificationReducer.reducer;