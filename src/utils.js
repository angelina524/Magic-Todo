import { weekday } from './constants/timeDate'

export const formatDate = (date)=>{
  let formatted_date = (date.getMonth() + 1) + "/" + date.getDate() + " " + weekday[date.getDay()]
  return formatted_date;
}

export const setAuthToken = (token) => {
  localStorage.setItem('userToken', token)
}

export const getAuthToken = () => {
  return localStorage.getItem('userToken') || ''
}
