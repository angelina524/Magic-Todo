import styled from 'styled-components'
import { MEDIA_QUERY_LG, MEDIA_QUERY_MD} from '../constants/style'

const Wrapper = styled.div`
  position: relative;
  height: calc(100vh - 2rem);
  width: 70%;
  ${MEDIA_QUERY_LG} {
    width: 85%;
  }
  ${MEDIA_QUERY_MD} {
    width: 90%;
  }
  margin: 0 auto;
  top: 10rem;
`

export default Wrapper