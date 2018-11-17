import axios from 'axios'

const url = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(url)
  return response.data
}

const createNew = async (content) => {
  console.log('createNew', {content, votes:0})
  const response = await axios.post(url, {content, votes:0})
  return response.data
}

const update = async (content) => {
  console.log('Thinking to update:',url + '/' + content.id)
  const response = await axios.put(url + '/' + content.id, content)
  return response.data
}

export default { getAll, createNew, update }