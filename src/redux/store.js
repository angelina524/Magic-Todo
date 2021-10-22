import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './reducers/todoReducer'
import todoFilterReducer from './reducers/todoFilterReducer'
import userReducer from './reducers/userReducer'

export default configureStore({
  reducer: {
    todos: todoReducer,
    todoFilter: todoFilterReducer,
    user: userReducer
  }
})