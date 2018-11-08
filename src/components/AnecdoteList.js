import React from 'react'
import {actionCreator} from '../reducers/anecdoteReducer'
import {notifyActionCreator} from '../reducers/notificationReducer'

class AnecdoteList extends React.Component {

  voteAnecdote(anecdote) {
    this.props.store.dispatch(actionCreator.addVote(anecdote.id))
    this.props.store.dispatch(notifyActionCreator.newNotification('You voted: ' + anecdote.content))
    setTimeout(() => {
      this.props.store.dispatch(notifyActionCreator.emptyNotification())
    }, 5000)
  }
  render() {
    const anecdotes = this.props.store.getState().anecdotes
    return (
      <div>
        <h2>Anecdotes</h2>
        {anecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => 
                this.voteAnecdote(anecdote)
              }>
                vote
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default AnecdoteList
