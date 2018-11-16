import React from 'react'
import {addVote} from '../reducers/anecdoteReducer'
import {emptyNotification, newNotification} from '../reducers/notificationReducer'
import {connect} from 'react-redux'


class AnecdoteList extends React.Component {

  voteAnecdote = (anecdote) => {
    this.props.addVote(anecdote.id)
    this.props.newNotification('You voted: ' + anecdote.content)
    setTimeout(() => {
      this.props.emptyNotification()
    }, 5000)
  }

  render() {
    const filterString = this.props.filter
    console.log('Filter now: ', filterString)
    const anecdotes = this.props.anecdotes
      .filter(anecdote=>anecdote.content.indexOf(filterString)>-1)
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

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    filter: state.filter
  }
}

const mapDispatchToProps = {
  addVote,
  newNotification,
  emptyNotification
}

const ConnectedAnecdoteList = connect(
  mapStateToProps,
  mapDispatchToProps
) (AnecdoteList)

export default ConnectedAnecdoteList
