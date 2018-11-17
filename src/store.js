import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import reducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer' 
import filterReducer from './reducers/filterReducer'

const combreducer = combineReducers({
  anecdotes: reducer,
  notification: notificationReducer,
  filter: filterReducer
})

const store = createStore(combreducer, applyMiddleware(thunk))

console.log(store.getState())

export default store