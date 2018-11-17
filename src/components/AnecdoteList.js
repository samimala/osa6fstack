import React from 'react'
import {addVote} from '../reducers/anecdoteReducer'
import {emptyNotification, notify } from '../reducers/notificationReducer'
import {connect} from 'react-redux'

class AnecdoteList extends React.Component {

  voteAnecdote = (anecdote) => {
    this.props.addVote(anecdote)
    this.props.notify(`You voted: '${anecdote.content}'`, 5)
  }

  render() {
    return (
      <div>
        <h2>Anecdotes</h2>
        {this.props.anecdotes.map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => this.voteAnecdote(anecdote)}>
                vote
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

const selectAnecdotes = (anecdotes, filter) => {
  console.log('anecdotes:', anecdotes)
  return anecdotes
    .filter(anecdote=>anecdote.content.indexOf(filter)>-1)
    .sort((a, b) => b.votes - a.votes)
}

const mapStateToProps = (state) => {
  return {
    anecdotes: selectAnecdotes(state.anecdotes, state.filter)
  }
}

const mapDispatchToProps = {
  addVote,
  notify,
  emptyNotification
}

const ConnectedAnecdoteList = connect(
  mapStateToProps,
  mapDispatchToProps
) (AnecdoteList)

export default ConnectedAnecdoteList
