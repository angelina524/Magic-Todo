import styled from 'styled-components'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { hatIcon } from '../../components/icons'
import { months } from '../../constants/timeDate'
import Wrapper from '../../components/Wrapper'

const CardWrapper = styled.div`
  min-height: 300px;
  margin: 20px auto;
  background: #F0AA0E;
  padding: 5.5rem 1.5rem;
  text-align: center;
  font-size: 1.6rem;
  margin-bottom: 1.5rem;
`

const DateTime = styled.span`
  font-size: 3rem;
`

const Month = styled.span`
  font-size: 2rem;
`

const Text = styled.div`
  padding-top: 2rem;
`

const HomePage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  }

  return (
    <Wrapper>
      <Slider {...settings}>
        <CardWrapper>
          <DateTime>{new Date().getDate()} </DateTime>
          <Month>{months[new Date().getMonth()]}</Month>
          <Text>Let’s be productive!</Text>
        </CardWrapper>
        <CardWrapper>
          <div>{hatIcon('lg')}</div>
          <Text>Magic Todo</Text>
        </CardWrapper>
      </Slider>
    </Wrapper>
  )
}

export default HomePage