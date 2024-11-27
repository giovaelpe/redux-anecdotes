import { AnecdoteForm } from './components/AnecdoteForm';
import { AnecdotesList } from './components/AnecdotesList';
import { Filterform } from './components/Filterform';

const App = () => {
 
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