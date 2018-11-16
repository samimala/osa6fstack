import React from 'react'
import {newAnecdote} from '../reducers/anecdoteReducer'
import {newNotification, emptyNotification} from '../reducers/notificationReducer'
import {connect} from 'react-redux'

class AnecdoteForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault()
    const content = e.target.anecdote.value
    this.props.newAnecdote(content)
    this.props.newNotification('You added: ' + content)
    setTimeout(() => {
      this.props.emptyNotification()      
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

const mapDispatchToProps = {
  newAnecdote,
  newNotification,
  emptyNotification 
}

const ConnectedAnecdoteForm = connect(
  null,
  mapDispatchToProps
) (AnecdoteForm)

export default ConnectedAnecdoteForm
