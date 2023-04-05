import React from 'react'
import Badge from '../../atoms/Badge'
import { Text, Title } from '../../atoms/Text'
import { StyledTableRow, StyledTableItem, Column, Row, StyledTitle } from './styles'
import { BiTimeFive } from 'react-icons/bi'
import theme from '../../../global/styles/theme'
import Switch from '../../atoms/Switch'
import useDeviceDetect from '../../../hook/useDeviceDetect'
import useWindowDimensions from '../../../hook/useWindowDimensions'

const TableRow = ({ heading, tableRowData, swicth }) => {
  const { isMobile } = useDeviceDetect()
  const windowDimensions  = useWindowDimensions()
  const { width } = windowDimensions
  console.log(width)

  return (
    <StyledTableRow isMobile={isMobile}>
       {heading && (
          <StyledTitle>
            <Title 
              level={2}
              verticalMargin={'20px'} 
              variant='grey'   
            >
              {heading}
            </Title>
          </StyledTitle>    
        )}
        {swicth 
          ? (
              <StyledTitle style={{ marginBottom: 20}}>
                <Text MarginRight={'5px'} small bold variant='grey'>
                  AO VIVO
                </Text>
                <Switch />
              </StyledTitle>
            ) 
        : null}
      {tableRowData?.map((item) =>  (  
          <StyledTableItem key={item.id}>
            <Column>
                <Row style={{  width: width <= 1600 ? '88%' : item.goals.team2 ? '75%' :  '50%', height: 20 }}>
                  <Text variant='grey' bold xsmall>{item.team1}</Text>
                  {item.goals.team1 && <Text variant='grey' bold>{item.goals.team1}</Text>}
                </Row>
                <Row style={{ width: width <= 1600 ? '88%' : item.goals.team2 ? '75%' : width <= 1600 ? '88%' : '50%', height: 20 }}>
                  <Text variant='grey' bold xsmall>{item.team2}</Text>   
                  {item.goals.team2 && <Text variant='grey' bold>{item.goals.team2}</Text>}
                </Row>
                <Row style={{ width: isMobile ? '60%' : width <= 1600 ? '60%' :'30%' }}>
                  <Text variant='grey' xxsmall>{item.time.hour}</Text>
                  {item.time.live && 
                    <Badge centered  paddingProps='2px' variant='secondary' name='ao vivo' textVariant='white' xxsmall />
                  }
                </Row>
            </Column>
            <Row style={{ width: '40%' }}>
              {!item.goals.team1 && <BiTimeFive size={25} color={theme.colors.grey} />}
            </Row>
            <Row style={{ width: '130%' }}>
              <Badge centered widthProps='28%' heightProps='60%' variant='black' textVariant='ice' name={item.bet[0]} />
              <Badge centered widthProps='28%' heightProps='60%' variant='black' textVariant='ice' name={item.bet[1]} />
              <Badge centered widthProps='28%' heightProps='60%' variant='black' textVariant='ice' name={item.bet[2]} />
            </Row>       
        </StyledTableItem>
      ))}
    </StyledTableRow>
  )
}

export default TableRow