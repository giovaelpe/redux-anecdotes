import axios from "axios"

const endpoint = "http://localhost:3001/anecdotes"
export async function getAll() {
    const response = await axios.get(endpoint)
    return response.data
}

export async function uploadAnecdote(data) {
    const response = await axios.post(endpoint, {content: data, votes: 0});
    return response.data
}