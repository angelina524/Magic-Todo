import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

import { filterAllTodo, filterCompletedTodo, filterActiveTodo } from '../redux/reducers/todoFilterReducer'
import Todo from './Todo'
import { getAllTodo } from '../redux/reducers/todoReducer'

const TodoListWrapper = styled.div`
  padding-bottom: 5rem;
`

const TodoNavbar = styled.div`
  display: flex;
  align-items: center;
  gap: 0 1rem;
`

const TodoFilterDate = styled.input`
  border: none;
  max-width: 135px;
  padding: 0.5rem;
  background: none;
  border-bottom: 1px solid #CECECE;
`

const TodoFilter = styled.div`
  padding: 0.5rem 0;
  ${props => props.active && `
    border-bottom: 2px solid #249CB4;
  `}
`


const TodoList = () => {
  const filter = useSelector(state => state.todoFilter.filter)
  // const user = useSelector(state => state.user.user)
  // const isLoading = useSelector(state => state.todos.isLoading)
  const todos = useSelector(state => state.todos.todos)
  const dispatch = useDispatch()

  const [filterDate, setFilterDate] = useState(new Date().toLocaleDateString().replaceAll('/', '-'))

  useEffect(() => {
    (async () => {
      await dispatch(getAllTodo())
    })()
  }, [dispatch])

  return (
    <TodoListWrapper>
      <TodoNavbar>
        <TodoFilterDate value={filterDate} onChange={e => setFilterDate(e.target.value)} type="date" />
        <TodoFilter onClick={() => dispatch(filterAllTodo())} active={filter === 'all'}>All</TodoFilter>
        <TodoFilter onClick={() => dispatch(filterCompletedTodo())} active={filter === 'completed'}>Completed</TodoFilter>
        <TodoFilter onClick={() => dispatch(filterActiveTodo())} active={filter === 'active'}>Active</TodoFilter>
      </TodoNavbar>
      <div>
        {todos && todos
          .filter(todos => new Date(todos.date).toLocaleDateString().replaceAll('/', '-') === filterDate)
          .filter(todos => {
            if (filter === 'completed') return todos.isDone
            if (filter === 'active') return !todos.isDone
            return todos
          })
          .map(todo => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </div>
    </TodoListWrapper>
  )
}

export default TodoList
