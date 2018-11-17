import anecdoteService from '../services/anecdotes'

const reducer = (store = [], action) => {
  if (action.type==='VOTE') {
    const old = store.filter(a => a.id !==action.id)
    const voted = store.find(a => a.id === action.id)
    return [...old, { ...voted, votes: voted.votes+1} ]
  }
  if (action.type==='CREATEANECDOTE') { 
    return [...store, action.content]
  }
  if (action.type==='INIT_ANECDOTES') {
    return action.content
  }
  return store
}

export const newAnecdote = (anecdote) => {
  console.log('CREATING')
  return async (dispatch) => {
    const savedAnecdote = await anecdoteService.createNew(anecdote)
    console.log('Saved:', savedAnecdote)
    dispatch({ 
      type: 'CREATEANECDOTE', 
      content: savedAnecdote 
    })  
  }
}

export const addVote = (anecdote) => {
  console.log('VOTING')

  return async (dispatch) => {
    const votedAnecdote = {...anecdote, votes: anecdote.votes+1}
    console.log('Voted:', votedAnecdote)
    console.log('votedAnecdote', votedAnecdote)
    const response = await anecdoteService.update(votedAnecdote)
    dispatch ({ 
      type: 'VOTE', 
      id: response.id 
    })  
  }
}

export const initAnecdotes = () => {

  return async (dispatch) => {
    console.log('dispatching action creator')
    const data = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      content: data
    })
  }
}

export default reducer