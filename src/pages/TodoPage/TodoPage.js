import { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'

import { addTodo, getAllTodo } from '../../redux/reducers/todoReducer'
import Wrapper from '../../components/Wrapper'
import TodoList from '../../components/TodoList'
import { FormWrapper, InputText, SubmitButton } from '../../components/Form'
import { getAuthToken } from '../../utils'

const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 1.5rem;
`

const TodoPage = ({ isAddTodoFormOpen, setIsAddTodoFormOpen }) => {
  const dispatch = useDispatch()

  const [content, setContent] = useState('')
  const [date, setDate] = useState(new Date().toLocaleDateString().replaceAll('/', '-'))
  const [errorMessage, setErrorMessage] = useState(null)

  const handleTodoSubmit = e => {
    e.preventDefault()
    if (!getAuthToken()) return setErrorMessage('請先至首頁登入')
    if (!content.trim() || !date) {
      setErrorMessage('請選擇日期及輸入代辦事項')
      return
    }

    dispatch(addTodo(content, date))
    dispatch(getAllTodo())
    setContent('')
    setIsAddTodoFormOpen(false)
  }

  return (
    <Wrapper>
      {isAddTodoFormOpen && (
        <FormWrapper onSubmit={handleTodoSubmit}>
          <InputsWrapper>
            <InputText value={date} onChange={e => setDate(e.target.value)} type="date" />
            <InputText value={content} onChange={e => setContent(e.target.value)} placeholder="Enter todo"/>
            {errorMessage && <div>{errorMessage}</div>}
            {!getAuthToken() && <div>請先至首頁登入</div>}
            <SubmitButton background='#249CB4'>Add</SubmitButton>
          </InputsWrapper>
        </FormWrapper>
      )}
      <TodoList />
    </Wrapper>
  )
}

export default TodoPage