import { createStore, combineReducers } from 'redux'
import reducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer' 
import filterReducer from './reducers/filterReducer'

const combreducer = combineReducers({
  anecdotes: reducer,
  notification: notificationReducer,
  filter: filterReducer
})

const store = createStore(combreducer)

console.log(store.getState())

export default store