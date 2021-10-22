import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'

const MenuWrapper = styled.div`
  position: fixed;
  width: 100%;
  z-index: 5;
  top: 0;
  padding-top: 4rem;
  background: #F4EEDE;
`

const OptionsWrapper = styled.div`
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 4rem;
`

const Option = styled(Link)`
  font-size: 1.2rem;
  color: black;
  font-weight: 500;

  ${props => props.active && `
    position: relative;
    font-size: 2rem;
    font-weight: 700;

    &:after {
      z-index: -1;
      content: '';
      position: absolute;
      top: -1rem;
      left: 1.2rem;
      width: 3rem;
      height: 4rem;
      transform:rotate(-55deg);
      border-radius: 2rem;
      background: white;
    }
  `}
`

const CurrentYear = styled.div`
    position: relative;
    z-index: 2;
    margin-top: 1.4rem;
    text-align: center;
    font-size: 1.4rem;
    font-weight: 700;
`

const Menu = () => {
  const location = useLocation()

  return (
    <MenuWrapper>
      <OptionsWrapper>
        <Option active={location.pathname === '/' ? 'active' : ''} to="/">Home</Option>
        <Option active={location.pathname === '/todo' ? 'active' : ''}to="/todo">Todo</Option>
      </OptionsWrapper>
      <CurrentYear>{new Date().getFullYear()}</CurrentYear>

    </MenuWrapper>
  )
}

export default Menu