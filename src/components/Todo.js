import { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'

import { updateTodo, updateTodoIsDone, deleteTodo, getAllTodo } from '../redux/reducers/todoReducer'
import { InputText } from './Form'
import { starIcon, deleteIcon, editIcon, doneIcon } from './icons'

const Item = styled.div`
  margin: 1rem 0;
  background: white;
  border-radius: 1rem;
  padding: 1rem 0.5rem;
  word-break: break-all;
  box-shadow: 0 0 20px 2px rgba(0,0,0,.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const TodoContent = styled.span`
  ${props => props.isDone && `
    text-decoration: line-through;
    color: #CECECE;
  `}
`

const OptionsWrapper = styled.div`
  flex-wrap: wrap;
  flex-shrink: 0;
`

const Option = styled.button`
  border: none;
  background: none;
  padding: 0 0.5rem;
  cursor: pointer;
`

const Todo = ({ todo }) => {
  const { id, isDone } = todo
  const dispatch = useDispatch()
  const [content, setContent] = useState(todo.content || '')
  const [date, setDate] = useState(new Date(todo.date).toLocaleDateString().replaceAll('/', '-'))
  const [isEditTodo, setIsEditTodo] = useState(false)

  const handleEditTodo = async () => {
    if (!content.trim() || !date) {
      alert('請選擇日期及輸入代辦事項')
      return
    }

    await dispatch(updateTodo(id, content, date))
    await dispatch(getAllTodo())
    setIsEditTodo(false)
  }

  const handleTodoIsDone = async () => {
    await dispatch(updateTodoIsDone(id, !isDone))
    await dispatch(getAllTodo())
  }

  const handleDeleteTodo = async () => {
    await dispatch(deleteTodo(id))
    await dispatch(getAllTodo())
  }

  return (
    <>
      <Item>
        <div>
          {!isEditTodo && <span onClick={handleTodoIsDone}>{starIcon('lg', isDone ? '#F4EEDE' : '#249CB4')}  </span>}
          {!isEditTodo && <TodoContent isDone={isDone}>{content}</TodoContent>}
          {isEditTodo && <InputText value={date} onChange={e => setDate(e.target.value)} type="date" />}
          {isEditTodo && <InputText value={content} onChange={e => setContent(e.target.value)} placeholder="Enter todo"/>}
        </div>
        <OptionsWrapper>
          {!isEditTodo && <Option onClick={() => setIsEditTodo(prev => !prev)}>{editIcon('lg', '#CECECE')}</Option>}
          {isEditTodo && <Option onClick={handleEditTodo}>{doneIcon('lg', '#CECECE')}</Option>}
          <Option onClick={handleDeleteTodo}>{deleteIcon('lg', '#CECECE')}</Option>
        </OptionsWrapper>
      </Item>
    </>
  )
}

export default Todo