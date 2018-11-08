import React from 'react'
import {actionCreator} from '../reducers/anecdoteReducer'
import {notifyActionCreator} from '../reducers/notificationReducer'

class AnecdoteForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault()
    const content = e.target.anecdote.value
    this.props.store.dispatch(actionCreator.newAnecdote(content))
    this.props.store.dispatch(notifyActionCreator.newNotification('You added: ' + content))
    setTimeout(() => {
      this.props.store.dispatch(notifyActionCreator.emptyNotification())      
    }, 5000)
    e.target.anecdote.value = ''
  }
  render() {
    return (
      <div>
        <h2>create new</h2>
        <form onSubmit={this.handleSubmit}>
          <div><input name='anecdote'/></div>
          <button>create</button> 
        </form>
      </div>
    )
  }
}

export default AnecdoteForm
