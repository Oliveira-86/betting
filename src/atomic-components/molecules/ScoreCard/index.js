import React from 'react'
import Badge from '../../atoms/Badge';
import { Text, Title } from '../../atoms/Text'
import Time from '../Time';
import { StyledScoreCard, Row, Column } from './styles'

function ScoreCard({ 
  id,
  logo1, 
  logo2, 
  altTeam1, 
  altTeam2, 
  nameTeam1, 
  nameTeam2, 
  league, 
  goalsTeam1, 
  goalsTeam2, 
  time 
}) {
  return (
    <StyledScoreCard id={id}>
      <Row>
        <Column>
          <img style={{ width: 48, height: 48 }} src={logo1} alt={altTeam1} />
          <Text textAlign={'center'} MarginTop={'5px'} xsmall bold>{nameTeam1}</Text>
        </Column>
        <Column justifyContent>
          <Text xsmall variant='grey'>{league}</Text>
          <Title>{goalsTeam1} : {goalsTeam2}</Title>
          <Time dot time={time} />
        </Column>
        <Column>
          <img style={{ width: 48, height: 48 }}  src={logo2} alt={altTeam2} />
          <Text textAlign={'center'} MarginTop={'5px'} xsmall bold>{nameTeam2}</Text>
        </Column>
      </Row>
      <Row marginTop>
        <Badge centered widthProps='33%' paddingProps='5px' variant='ice'><Text small>1.8</Text></Badge>
        <Badge centered widthProps='33%' paddingProps='5px' variant='ice'><Text small>1.8</Text></Badge>
        <Badge centered widthProps='33%' paddingProps='5px' variant='ice'><Text small>1.8</Text></Badge>
      </Row>
    </StyledScoreCard>
  )
}

export default ScoreCard