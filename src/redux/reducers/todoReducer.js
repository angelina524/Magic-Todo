import { createSlice } from '@reduxjs/toolkit'
import { getAllTodoAPI, addTodoAPI, updateTodoAPI, updateTodoIsDoneAPI, deleteTodoAPI } from '../../webAPI/todoAPI'

const initialState = {
  isLoading: false,
  todos: []
}

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload
    },
    setAllTodo: (state, action) => {
      state.todos = action.payload
    }
  }
})

export const { setIsLoading, setAllTodo } = todoSlice.actions

export const getAllTodo = () => async (dispatch) => {
  dispatch(setIsLoading(true))
  const res = await getAllTodoAPI()
  dispatch(setAllTodo(res.todos))
  dispatch(setIsLoading(false))
  return res
}

export const addTodo = (content, date) => async (dispatch) => {
  dispatch(setIsLoading(true))
  const res = await addTodoAPI(content, date)
  dispatch(setIsLoading(false))
  return res
}

export const updateTodo = (id, content, date) => async (dispatch) => {
  dispatch(setIsLoading(true))
  const res = await updateTodoAPI(id, content, date)
  dispatch(setIsLoading(false))
  return res
}

export const updateTodoIsDone = (id, isDone) => async (dispatch) => {
  dispatch(setIsLoading(true))
  const res = await updateTodoIsDoneAPI(id, isDone)
  dispatch(setIsLoading(false))
  return res
}

export const deleteTodo = (id) => async (dispatch) => {
  dispatch(setIsLoading(true))
  const res = await deleteTodoAPI(id)
  dispatch(setIsLoading(false))
  return res
}

export default todoSlice.reducer
