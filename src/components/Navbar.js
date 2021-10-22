import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { getAuthToken, setAuthToken } from '../utils'
import { logout } from '../redux/reducers/userReducer'

const NavbarWrapper = styled.div`
  position: fixed;
  z-index: 6;
  top: 0;
  left: -1rem;
  display: flex;
  padding: 0.8rem 1.5rem 0.8rem 2rem;
  border-radius: 1.5rem;
  color: white;
  background: ${props => props.background};
  font-weight: 500;
  gap: 0.5rem;
`

const Option = styled(Link)`
  color: white;
`

const AddButton = styled.div`
  cursor: pointer;
`

const Navbar = ({ background, content, setIsAddTodoFormOpen }) => {
  const dispatch = useDispatch()

  const handleLogout = async () => {
    setAuthToken('')
    await dispatch(logout())
  }

  const renderHomeNavbar = () => (
    <>
      {!getAuthToken() && (
        <>
          <Option to="/register">Register</Option>
          <div>/</div>
          <Option to="/login">Login</Option>
        </>
      )}
      {getAuthToken() && <Option to="/login" onClick={handleLogout}>Logout</Option>}
    </>
  )

  const renderTodoNavbar = () => (
    <AddButton onClick={() => setIsAddTodoFormOpen(prev => !prev)}>Add</AddButton>
  )

  return (
    <NavbarWrapper background={background}>
      {content === 'home' && renderHomeNavbar()}
      {content === 'todo' && renderTodoNavbar()}
    </NavbarWrapper>
  )
}

export default Navbar