import React from 'react'
import Badge from '../../atoms/Badge'
import { Text, Title } from '../../atoms/Text'
import { StyledTableRow, StyledTableItem, Column, Row } from './styles'
import { BiTimeFive } from 'react-icons/bi'
import theme from '../../../global/styles/theme'

const TableRow = ({ heading, tableRowData }) => {
  return (
    <StyledTableRow>
      <Title 
        level={2}
        verticalMargin={'20px'} 
        variant='grey'       
        style={{ padding: 10 }}
      >
        {heading}
      </Title> 
      {tableRowData?.map((item) =>  (  
          <StyledTableItem key={item.id}>
            <Column>
                <Row style={{ width: item.goals.team2 ? '75%' : '50%', height: 20 }}>
                  <Text variant='grey' bold xsmall>{item.team1}</Text>
                  {item.goals.team1 && <Text variant='grey' bold>{item.goals.team1}</Text>}
                </Row>
                <Row style={{ width: item.goals.team2 ? '75%' : '50%', height: 20 }}>
                  <Text variant='grey' bold xsmall>{item.team2}</Text>   
                  {item.goals.team2 && <Text variant='grey' bold>{item.goals.team2}</Text>}
                </Row>
                <Row style={{ width: '30%' }}>
                  <Text variant='grey' xxsmall>{item.time.hour}</Text>
                  {item.time.live && 
                    <Badge centered  paddingProps='2px' variant='secondary'>
                      <Text variant={'white'} xxsmall>
                        ao vivo
                      </Text>
                    </Badge>
                  }
                </Row>
            </Column>
            <Row style={{ width: '40%' }}>
              {!item.goals.team1 && <BiTimeFive size={25} color={theme.colors.grey} />}
            </Row>
            <Row style={{ width: '130%' }}>
              <Badge centered widthProps='28%' heightProps='60%' variant='ice'><Text small>{item.bet[0]}</Text></Badge>
              <Badge centered widthProps='28%' heightProps='60%' variant='ice'><Text small>{item.bet[1]}</Text></Badge>
              <Badge centered widthProps='28%' heightProps='60%' variant='ice'><Text small>{item.bet[2]}</Text></Badge>
            </Row>       
        </StyledTableItem>
      ))}
    </StyledTableRow>
  )
}

export default TableRow