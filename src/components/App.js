import { useState } from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Navbar from './Navbar'
import Menu from './Menu'
import Footer from './Footer'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import TodoPage from '../pages/TodoPage'
import LoadingPage from '../pages/LoadingPage'

const App = () => {
  const isLoading = useSelector(state => state.todos.isLoading)
  const [isAddTodoFormOpen, setIsAddTodoFormOpen] = useState(false)

  return (
    <Router>
      {isLoading && <LoadingPage />}
      <Switch>
        <Route exact path="/">
          <Navbar background='#F0AA0E' content="home" />
          <Menu />
          <HomePage />
          <Footer background='#249CB4' />
        </Route>
        <Route exact path="/login">
          <Navbar background='#F0AA0E' content="home" />
          <Menu />
          <LoginPage />
          <Footer background='#249CB4' />
        </Route>
        <Route exact path="/register">
          <Navbar background='#F0AA0E' content="home" />
          <Menu />
          <RegisterPage />
          <Footer background='#249CB4' />
        </Route>
        <Route exact path="/todo">
          <Navbar setIsAddTodoFormOpen={setIsAddTodoFormOpen} background='#249CB4' content="todo" />
          <Menu />
          <TodoPage isAddTodoFormOpen={isAddTodoFormOpen} setIsAddTodoFormOpen={setIsAddTodoFormOpen} />
          <Footer background='#249CB4' />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
