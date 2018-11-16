const notificationAtStart = ''

const initialState = notificationAtStart

const notificationReducer = (store = initialState, action) => {
  switch(action.type) {
  case 'SHOW':
    return action.content 
  case 'HIDE':
    return '' 
  }
  return store
}
  
export const newNotification = (content) => {
  console.log('NEW notification')
  return { 
    type: 'SHOW', 
    content: 'You added: ' + content
  }
}

export const emptyNotification = () => {
  return {
    type: 'HIDE'
  }
}


export default notificationReducer