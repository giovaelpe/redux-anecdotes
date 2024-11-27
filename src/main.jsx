import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import store from './reducers/Store'



/*const reducer = combineReducers({
  anecdotes: anecdoteReducer,
  filter : filterReducer
})

const store = createStore(reducer)*/


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)