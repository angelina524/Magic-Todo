import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { register } from '../../redux/reducers/userReducer'
import { setAuthToken } from '../../utils'
import { FormWrapper, Title, InputText, SubmitButton } from '../../components/Form'
import Wrapper from '../../components/Wrapper'

const RegisterPage = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)

  const handleFormSummit = async (e) => {
    e.preventDefault()
    if (!username.trim() || !password.trim()) return setErrorMessage('請輸入帳號及密碼')

    const res = await dispatch(register(username, password))
    if (!res.ok) return setErrorMessage(res.message)

    setAuthToken(res.token)
    history.push('/')
  }

  return (
    <Wrapper>
      <FormWrapper onSubmit={handleFormSummit}>
        <Title>Register</Title>
        <InputText value={username} onChange={e => setUsername(e.target.value)} placeholder="Enter username" />
        <InputText type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter password" />
        {errorMessage && <div>{errorMessage}</div>}
        <SubmitButton background='#F0AA0E'>Submit</SubmitButton>
      </FormWrapper>
    </Wrapper>
  )
}

export default RegisterPage