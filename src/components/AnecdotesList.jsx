import { useSelector, useDispatch } from 'react-redux'
import { vote } from './reducers/anecdoteReducer';

export function AnecdotesList() {
    const anecdotes = useSelector(state => state.sort((a, b) => a.votes - b.votes))
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