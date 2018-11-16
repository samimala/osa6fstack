
const reducer = (store = [], action) => {
  switch(action.type) {
  case 'VOTE':
    const old = store.filter(a => a.id !==action.id)
    const voted = store.find(a => a.id === action.id)
    return [...old, { ...voted, votes: voted.votes+1} ]

  case 'CREATEANECDOTE': 
    return [...store, { content: action.content }]
  case 'INIT_ANECDOTES':
    return action.content
  default:
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