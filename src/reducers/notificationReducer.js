const notificationAtStart = ''

const initialState = notificationAtStart

const notificationReducer = (store = initialState, action) => {
  switch(action.type) {
  case 'SHOW':
    return action.content 
  case 'HIDE':
    return '' 
  default:
  }
  return store
}
  

export const notify = (content, displayTime) => {
  console.log('New notify')
  return (dispatch) => {
    dispatch ({ 
      type: 'SHOW', 
      content: content
    })
    setTimeout(() => {
      dispatch (emptyNotification())
    }, displayTime * 1000)      
  }

}

export const emptyNotification = () => {
  return {
    type: 'HIDE'
  }
}

export default notificationReducer