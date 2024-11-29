import { useDispatch } from "react-redux";
import { createAnecdote} from "../reducers/anecdoteReducer";
import {setNotification } from "../reducers/notificationReducer";

export function AnecdoteForm() {
    const dispatch = useDispatch();
    const handleAdd = async e => {
        e.preventDefault();
        const newAnecdote = e.target.anecdote.value;
        e.target.anecdote.value = '';
        dispatch(createAnecdote(newAnecdote))
        dispatch(setNotification(`Added : ${newAnecdote}`, 3000))
    }
    return (
        <>
            <h2>create new</h2>
            <form onSubmit={handleAdd}>
                <div><input name="anecdote" /></div>
                <button>create</button>
            </form>
        </>
    );
}