import { createSlice } from "@reduxjs/toolkit"
import { getAll, uploadAnecdote, voteBackend } from "../../Services/AnecdoteService";


const anecdoteReducer = createSlice({
  name: "anecdotes",
  initialState : [],
  reducers: {
    add(state, action) {
      return state.concat(action.payload)
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

export const createAnecdote = (data) => {
  return async dispatch => {
    const anecdote = await uploadAnecdote(data);
    console.log(anecdote)
    dispatch(add(anecdote));
  }
}

export const voteAnecdote = (anecdote) => {
  return async dispatch => {
    const votedAnecdote = await voteBackend(anecdote);
    dispatch(vote(votedAnecdote.id));
  }
}

export const { add, vote, setAll } = anecdoteReducer.actions;
export default anecdoteReducer.reducer;