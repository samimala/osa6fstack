const filterAtStart = ''

const initialState = filterAtStart

const filterReducer = (store = initialState, action) => {
  switch(action.type) {
  case 'NEWFILTER':
    return action.content 
  default:
  }
  return store
}
  
export const newFilter = (content) => {
  console.log('NEW filter')
  return { 
    type: 'NEWFILTER', 
    content: content
  }
}


export default filterReducer