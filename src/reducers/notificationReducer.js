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
  
export const notifyActionCreator = {
  newNotification(content) {
    console.log('NEW notification')
    return { 
      type: 'SHOW', 
      content: content
    }
  },
  emptyNotification() {
    return {
      type: 'HIDE'
    }
  }
}

export default notificationReducer