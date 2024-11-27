import { createSlice } from "@reduxjs/toolkit";

//const initialState = "";

/*export default function filterReducer(state = initialState, action) {
    switch(action.type) {
        case "FILTER" :
            return action.payload ;
        default :
            return state;
    }
}

export function filter(text) {
    return {
        type : "FILTER",
        payload : text
    }
}*/

const filterReducer = createSlice({
    name: "filter",
    initialState: "",
    reducers : {
        filter(state, action) {
            return action.payload;
        }
    }
});

export const {filter} = filterReducer.actions;
export default filterReducer.reducer;