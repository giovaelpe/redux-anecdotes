
import { useEffect } from 'react';
import { AnecdoteForm } from './components/AnecdoteForm';
import { AnecdotesList } from './components/AnecdotesList';
import { Filterform } from './components/Filterform';
import {getAll} from '../Services/AnecdoteService'
import { useDispatch } from 'react-redux';
import { setAll } from './reducers/anecdoteReducer';


const App = () => {
  const dispatch = useDispatch();

 useEffect(() => {
  getAll().then(data => dispatch(setAll(data)));
 },[dispatch])
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