import { useSelector, useDispatch } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer';

export function AnecdotesList() {
    const filtro = useSelector(state => state.filter);
    const anecdotes = useSelector(state => [...state.anecdotes].sort((a, b) => a.votes - b.votes).filter(anecdote => anecdote.content.toLowerCase().includes(filtro.toLowerCase())))
    const dispatch = useDispatch();
    return (
        <>
        {
            anecdotes.map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => dispatch(vote(anecdote.id))}>vote</button>
                    </div>
                </div>
            )
        }
        </>
    )
}