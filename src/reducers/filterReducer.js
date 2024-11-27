const initialState = "";

export function reducer(state = initialState, action) {
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
}