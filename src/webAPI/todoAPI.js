import { getAuthToken } from '../utils'
const BASE_URL = 'https://glacial-fjord-12254.herokuapp.com'

export const getAllTodoAPI = () => {
  return fetch(`${BASE_URL}/todo`, {
    headers: {
      'content-type': 'application/json',
      'authorization': `Bearer ${getAuthToken()}`
    },
  }).then((res) => res.json())
}

export const addTodoAPI = (content, date) => {
  return fetch(`${BASE_URL}/todo`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'authorization': `Bearer ${getAuthToken()}`
    },
    body: JSON.stringify({
      content,
      date
    })
  }).then((res) => res.json())
}

export const updateTodoAPI = (id, content, date) => {
  return fetch(`${BASE_URL}/todo/${id}`, {
    method: 'PATCH',
    headers: {
      'content-type': 'application/json',
      'authorization': `Bearer ${getAuthToken()}`
    },
    body: JSON.stringify({
      content,
      date
    })
  }).then((res) => res.json())
}

export const updateTodoIsDoneAPI = (id, isDone) => {
  return fetch(`${BASE_URL}/todo/${id}/updateIsDone`, {
    method: 'PATCH',
    headers: {
      'content-type': 'application/json',
      'authorization': `Bearer ${getAuthToken()}`
    },
    body: JSON.stringify({
      isDone: isDone
    })
  }).then((res) => res.json())
}

export const deleteTodoAPI = (id) => {
  return fetch(`${BASE_URL}/todo/${id}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
      'authorization': `Bearer ${getAuthToken()}`
    }
  }).then((res) => res.json())
}