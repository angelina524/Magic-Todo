const BASE_URL = 'https://glacial-fjord-12254.herokuapp.com'

export const registerAPI = (username, password) => {
  return fetch(`${BASE_URL}/register`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      username,
      password
    })
  }).then((res) => res.json())
}

export const loginAPI = (username, password) => {
  return fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      username,
      password
    })
  }).then((res) => res.json())
}