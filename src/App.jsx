
import { useEffect } from 'react';
import { AnecdoteForm } from './components/AnecdoteForm';
import { AnecdotesList } from './components/AnecdotesList';
import { Filterform } from './components/Filterform';
import { useDispatch } from 'react-redux';
import { initializeAnecdotes} from './reducers/anecdoteReducer';


const App = () => {
  const dispatch = useDispatch();

 useEffect(() => {
  dispatch(initializeAnecdotes())
 },[])
  return (
    <div>
      <h2>Anecdotes</h2>
      <Filterform />
      <AnecdotesList />
      <AnecdoteForm />
    </div>
  )
}

export default App