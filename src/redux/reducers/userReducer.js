import { createSlice } from '@reduxjs/toolkit'
import { loginAPI, registerAPI } from '../../webAPI/userAPI'
import { setAllTodo } from '../reducers/todoReducer'

const initialState = {
  isUserLoading: false,
  user: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isUserLoading = action.payload
    },
    setUser: (state, action) => {
      state.user = action.payload
    }
  }
})

export const { setIsLoading, setUser } = userSlice.actions

export const register = (username, password) => async (dispatch) => {
  dispatch(setIsLoading(true))
  const res = await registerAPI(username, password)
  if (res.ok) {
    dispatch(setUser(res.id))
  }
  dispatch(setIsLoading(false))
  return res
}

export const login = (username, password) => async (dispatch) => {
  dispatch(setIsLoading(true))
  const res = await loginAPI(username, password)
  if (res.ok) {
    dispatch(setUser(res.id))
  }
  dispatch(setIsLoading(false))
  return res
}

export const logout = () => async (dispatch) => {
  dispatch(setUser(null))
  dispatch(setAllTodo([]))
}

export default userSlice.reducer
