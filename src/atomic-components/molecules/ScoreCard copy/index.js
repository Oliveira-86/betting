import React from 'react'
import { Text, Title } from '../../atoms/Text'
import Carousel from '../Carousel';
import Time from '../Time';
import { StyledScoreCardLive, Row } from './styles'

function ScoreCardLive({ 
  logo1, 
  logo2, 
  altTeam1, 
  altTeam2, 
  nameTeam1, 
  nameTeam2, 
  league, 
  goalsTeam1, 
  goalsTeam2, 
  time,
  bet 
}) {
  return (
    <StyledScoreCardLive>
      <Text small variant='grey'>{league}</Text>
      <Row>
        <Row>
          <img style={{ width: 25, height: 25 }} src={logo1} alt={altTeam1} />
          <Text marginLeft='5px' textAlign={'center'} variant='black' small bold>{nameTeam1}</Text>
        </Row>
          <Title textAlign={'center'} small bold>{goalsTeam1}</Title>
      </Row>
      <Row>
        <Row>
          <img style={{ width: 25, height: 25 }}  src={logo2} alt={altTeam2} />
          <Text marginLeft='5px' textAlign={'center'} MarginTop={'5px'} small bold>{nameTeam2}</Text>
        </Row>
          <Title textAlign={'center'} small bold>{goalsTeam2}</Title>
      </Row>
      <Row marginVertical>
          <Time variant='ice' time={time} />
      </Row>
      <Row>
        <Carousel bet={bet} />
      </Row>
    </StyledScoreCardLive>
  )
}

export default ScoreCardLive