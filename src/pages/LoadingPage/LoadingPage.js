import styled from 'styled-components'

const Wrapper = styled.div`
  background: #CECECE;
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: white;
  z-index: 10;
`

const LoadingPage = () => {
  return (
    <Wrapper>Loading...</Wrapper>
  )
}

export default LoadingPage