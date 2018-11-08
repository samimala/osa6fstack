import { createStore, combineReducers } from 'redux'
import reducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'

const combreducer = combineReducers({
  anecdotes: reducer,
  notification: notificationReducer
})

const store = createStore(combreducer)

console.log(store.getState())

export default store