import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdoteText.value
    event.target.anecdoteText.value = ''
    dispatch(createAnecdote(content))
  }


  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name="anecdoteText"/></div>
        <button>create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm