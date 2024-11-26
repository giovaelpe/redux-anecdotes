import { useDispatch } from "react-redux";
import { add } from "../reducers/anecdoteReducer";

export function AnecdoteForm() {
    const dispatch = useDispatch();
    const handleAdd = e => {
        e.preventDefault();
        const newAnecdote = e.target.anecdote.value;
        e.target.anecdote.value = '';
        dispatch(add(newAnecdote));
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