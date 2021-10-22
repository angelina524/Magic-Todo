import styled from 'styled-components'

export const FormWrapper = styled.form`
  width: 85%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto 2rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 0 20px 2px rgba(0,0,0,.1);
  gap: 1.8rem;
`

export const Title = styled.div`
  font-weight: 500;
  font-size: 1.4rem;
  margin: 1rem 0.5rem;
`

export const InputText = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid #CECECE;
  padding: 0.5rem;

  &::placeholder {
    color: #CECECE;
  }
`

export const SubmitButton = styled.button`
  width: 100%;
  font-size: 1rem;
  padding: 0.8rem;
  color: white;
  background: ${props => props.background};
  border: none;
`
