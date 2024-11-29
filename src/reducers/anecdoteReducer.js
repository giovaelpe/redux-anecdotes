import { createSlice } from "@reduxjs/toolkit"
import { getAll } from "../../Services/AnecdoteService";


const anecdoteReducer = createSlice({
  name: "anecdotes",
  initialState : [],
  reducers: {
    add(state, action) {
      return state.concat({
        content: action.payload,
        votes: 0
      })
    },
    vote(state, action) {
      return state.map(anecdote => {
        return anecdote.id === action.payload ? { ...anecdote, votes: anecdote.votes + 1 } : anecdote;
      })
    },
    setAll(state, action) {
      return action.payload;
    }
  }
})

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await getAll();
    dispatch(setAll(anecdotes));
  }
}

export const { add, vote, setAll } = anecdoteReducer.actions;
export default anecdoteReducer.reducer;