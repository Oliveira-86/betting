import React from 'react'
import Badge from '../../atoms/Badge';
import { Text, Title } from '../../atoms/Text'
import ImagesCarousel from '../ImagesCarousel';
import Time from '../Time';
import { StyledScoreCardSecondary, Row } from './styles'

function ScoreCardSecondary({ 
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
    <StyledScoreCardSecondary>
      <Text small variant='grey'>{league}</Text>
      <Row>
        <Row>
          <img style={{ width: 25, height: 25 }} src={logo1} alt={altTeam1} />
          <Text marginLeft='5px' textAlign={'center'} variant='ice' small bold>{nameTeam1}</Text>
        </Row>
          <Title variant='ice' textAlign={'center'} small bold>{goalsTeam1}</Title>
      </Row>
      <Row>
        <Row>
          <img style={{ width: 25, height: 25 }}  src={logo2} alt={altTeam2} />
          <Text marginLeft='5px' textAlign={'center'} variant='ice' MarginTop={'5px'} small bold>{nameTeam2}</Text>
        </Row>
          <Title textAlign={'center'} variant='ice' small bold>{goalsTeam2}</Title>
      </Row>
      <Row marginVertical>
          <Time variant='ice'time={time} />
      </Row>
      <Row>
        <Badge 
          centered 
          widthProps='28%' 
          heightProps='30px' 
          textVariant='ice' 
          name={bet[0]} 
          variant='black' 
        />
        <Badge 
          centered 
          widthProps='28%' 
          heightProps='30px' 
          textVariant='ice' 
          name={bet[1]} 
          variant='black' 
        />
        <Badge 
          centered 
          widthProps='28%' 
          heightProps='30px' 
          textVariant='ice' 
          name={bet[2]} 
          variant='black' 
        />
      </Row>
    </StyledScoreCardSecondary>
  )
}

export default ScoreCardSecondary