import { useSelector, useDispatch } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer';
import { clear, set } from '../reducers/notificationReducer';
import Notification from './Notification';

export function AnecdotesList() {
    const filtro = useSelector(state => state.filter);
    const anecdotes = useSelector(state => [...state.anecdotes].sort((a, b) => a.votes - b.votes).filter(anecdote => anecdote.content.toLowerCase().includes(filtro.toLowerCase())))
    const dispatch = useDispatch();
    const handleVote = anecdote => {
        dispatch(vote(anecdote.id))
        dispatch(set(`you voted : ${anecdote.content}`))
        setTimeout(() => {
            dispatch(clear())
        }, 5000);
    }
    return (
        <>
        <Notification />
        {
            anecdotes.map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => handleVote(anecdote)}>vote</button>
                    </div>
                </div>
            )
        }
        </>
    )
}