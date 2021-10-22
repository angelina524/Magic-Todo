import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  filter: 'all'
}

export const todoFilterSlice = createSlice({
  name: 'todoFilter',
  initialState,
  reducers: {
    filterAllTodo: (state) => {
      state.filter = 'all'
    },
    filterCompletedTodo: (state) => {
      state.filter = 'completed'
    },
    filterActiveTodo: (state) => {
      state.filter = 'active'
    }
  }
})

export const { filterAllTodo, filterCompletedTodo, filterActiveTodo } = todoFilterSlice.actions
export default todoFilterSlice.reducer
