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

export const setNotification = (text, time) => {
    return dispatch => {
        dispatch(set(text))
        setTimeout(() => dispatch(clear()), time)
    }
}

export const {set, clear} = notificationReducer.actions;
export default notificationReducer.reducer;