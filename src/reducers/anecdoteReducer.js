import { createSlice } from "@reduxjs/toolkit"

const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)
/*
const anecdoteReducer = (state = initialState, action) => {
  switch(action.type) {
    case "VOTE" :
      return state.map(anecdote => {
        return anecdote.id === action.payload ? {...anecdote, votes: anecdote.votes+1} : anecdote
      });
    case "ADD" :
      return state.concat(asObject(action.payload))
    default :
      return state;
  }
}

export const vote = id => {
  return {
    type : "VOTE",
    payload : id
  }
}

export const add = note => {
  return {
    type : "ADD",
    payload: note
  }
}

export default anecdoteReducer*/

const anecdoteReducer = createSlice({
  name: "anecdotes",
  initialState,
  reducers: {
    add(state, action) {
      return state.concat({
        content: action.payload,
        id: getId(),
        votes: 0
      })
    },
    vote(state, action) {
      return state.map(anecdote => {
        return anecdote.id === action.payload ? { ...anecdote, votes: anecdote.votes + 1 } : anecdote;
      })
    }
  }
})

export const { add, vote } = anecdoteReducer.actions;
export default anecdoteReducer.reducer;