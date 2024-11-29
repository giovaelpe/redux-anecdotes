import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';
import Notification from './Notification';

export function AnecdotesList() {
    const filtro = useSelector(state => state.filter);
    const anecdotes = useSelector(state => [...state.anecdotes].sort((a, b) => a.votes - b.votes).filter(anecdote => anecdote.content.toLowerCase().includes(filtro.toLowerCase())))
    const dispatch = useDispatch();
    const handleVote = anecdote => {
        dispatch(voteAnecdote(anecdote))
        dispatch(setNotification(`you voted : ${anecdote.content}`, 5000))
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