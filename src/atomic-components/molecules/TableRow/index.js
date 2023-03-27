import React from 'react'
import Badge from '../../atoms/Badge'
import { Text } from '../../atoms/Text'
import { StyledTableRow, Column, Row } from './styles'

const TableRow = ({ team1, team2, time, bet1, bet2, bet3, id }) => {
  return (
    <StyledTableRow id={id}>
      <Column>
        <Text variant='grey' small>{team1}</Text>
        <Text variant='grey' small>{team2}</Text>
       <Row>
          <Text variant='grey' xsmall>{time}</Text>
          <Badge centered  paddingProps='3px' variant='secondary'><Text variant={'white'} xsmall>ao vivo</Text></Badge>
        </Row> 
      </Column>
      <Row>
        <Badge centered widthProps='28%' heightProps='80%'  paddingProps='5px' variant='ice'><Text small>{bet1}</Text></Badge>
        <Badge centered widthProps='28%' heightProps='80%' paddingProps='5px' variant='ice'><Text small>{bet2}</Text></Badge>
        <Badge centered widthProps='28%' heightProps='80%' paddingProps='5px' variant='ice'><Text small>{bet3}</Text></Badge>
      </Row>
    </StyledTableRow>
  )
}

export default TableRow