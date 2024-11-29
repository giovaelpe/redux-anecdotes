import { useDispatch } from "react-redux";
import { setAll} from "../reducers/anecdoteReducer";
import { getAll, uploadAnecdote } from "../../Services/AnecdoteService";

export function AnecdoteForm() {
    const dispatch = useDispatch();
    const handleAdd = async e => {
        e.preventDefault();
        const newAnecdote = e.target.anecdote.value;
        e.target.anecdote.value = '';
        await uploadAnecdote(newAnecdote);
        const newData = await getAll();
        dispatch(setAll(newData));
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