import styled from 'styled-components'

import { hatIcon } from '../components/icons'

const FooterWrapper = styled.div`
  width: 100%;
  position: fixed;
  z-index: 5;
  bottom: 0;
  color: white;
  background: ${props => props.background};
  padding: 0.6rem;
  text-align: center;
  font-weight: 500;
`


const Footer = ({ background }) => {
  return (
    <FooterWrapper background={background}>© Magic Todo {hatIcon('sm', 'white')} 2021</FooterWrapper>
  )
}

export default Footer