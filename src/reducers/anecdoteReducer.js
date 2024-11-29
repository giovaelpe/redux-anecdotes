import { createSlice } from "@reduxjs/toolkit"

const getId = () => (100000 * Math.random()).toFixed(0)


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

export const { add, vote, setAll } = anecdoteReducer.actions;
export default anecdoteReducer.reducer;