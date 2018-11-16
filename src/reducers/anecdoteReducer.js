
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
  return { 
    type: 'CREATEANECDOTE', 
    content: anecdote 
  }
}

export const addVote = (id) => {
  console.log('VOTING')
  return { 
    type: 'VOTE', 
    id: id 
  }
}

export const initAnecdotes = (data) => {
  return {
    type: 'INIT_ANECDOTES',
    content: data
  }
}

export default reducer