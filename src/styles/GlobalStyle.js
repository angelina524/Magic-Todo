import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Josefin Sans', sans-serif, 微軟正黑體;
  }

  html, body, #root {
    background: #F4EEDE;
    letter-spacing: 0.05rem;
  }

  a {
    text-decoration: none;
  }
`

export default GlobalStyle