import axios from "axios"

const endpoint = "http://localhost:3001/anecdotes"
export async function getAll() {
    const response = await axios.get(endpoint)
    return response.data
}

