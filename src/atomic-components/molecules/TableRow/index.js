import React, { useEffect, useState } from 'react'
import Badge from '../../atoms/Badge'
import { Text, Title } from '../../atoms/Text'
import { StyledTableRow, StyledTableItem, Column, Row, StyledTitle } from './styles'
import { BiTimeFive } from 'react-icons/bi'
import theme from '../../../global/styles/theme'
import Switch from '../../atoms/Switch'
import useDeviceDetect from '../../../hook/useDeviceDetect'
import useWindowDimensions from '../../../hook/useWindowDimensions'
import { useDispatch, useSelector } from 'react-redux'
import { addGame, addBet, removeBet, removeGame } from '../../../features/betting/bettingSlice'

const TableRow = ({ heading, tableRowData, swicth, tennis, setBet1, setBet2, setBet3 }) => {
  const [activeIndexBet0, setActiveIndexBet0] = useState(null)
  const [activeIndexBet1, setActiveIndexBet1] = useState(null)
  const [activeIndexBet2, setActiveIndexBet2] = useState(null)
  const [activeItemBet0, setActiveItemBet0] = useState(null)
  const [activeItemBet1, setActiveItemBet1] = useState(null)
  const [activeItemBet2, setActiveItemBet2] = useState(null)
  const [bet0, setbet0] = useState(false)
  const [bet1, setbet1] = useState(false)
  const [bet2, setbet2] = useState(false)

  const dispatch = useDispatch()
  const gameList = useSelector((state) => state.betting.gameList)

  const { isMobile } = useDeviceDetect()
  const windowDimensions  = useWindowDimensions()
  const { width } = windowDimensions

  const onHandleBet0 = (item, betItem, betIndex) => {
    const gameWidthOdd = {
      ...item,
      odd: betItem?.odd,
      type: betIndex === 0 ? item?.team1 : betIndex === 2 ? item?.team2 : 'Empate',
      betId: item?.id + betItem?.odd 
    }
    const existBet = gameList.find((game) => game.betId === gameWidthOdd.betId)
    setbet0(!bet0)
    if (existBet) {
      dispatch(removeGame(gameWidthOdd.betId))
      return
    }
    dispatch(addGame(gameWidthOdd))
    dispatch(addBet(item))

   
  }

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
      {tableRowData?.map((item, index) =>  (  
          <StyledTableItem key={item.id}>
            {tennis ? (
                <Column>
                  <Row style={{  minWidth: width <= 1600 ? '88%' : item.points.team2 ? '75%' :  '50%', height: 20 }}>
                    <Text style={{  minWidth: '60%' }} variant='grey' bold xsmall>{item.team1}</Text>
                    <Text style={{  minWidth: '20%' }} variant='secondary' bold>{item.sets.team1}</Text>
                    <Text style={{  minWidth: '20%' }} variant='grey' bold>{item.games.team1}</Text>
                    <Text style={{  minWidth: '20%' }} variant='grey' bold>{item.points.team1}</Text>
                  </Row>
                  <Row style={{ minWidth: width <= 1600 ? '88%' : item.points.team1 ? '75%' : '50%', height: 20 }}>
                    <Text style={{  minWidth: '60%' }} variant='grey' bold xsmall>{item.team2}</Text>   
                    <Text style={{  minWidth: '20%' }} variant='secondary' bold>{item.sets.team2}</Text>
                    <Text style={{  minWidth: '20%' }} variant='grey' bold>{item.games.team2}</Text>
                    <Text style={{  minWidth: '20%' }} variant='grey' bold>{item.points.team2}</Text>
                  </Row>
                  <Row style={{ width: isMobile ? '60%' : width <= 1600 ? '60%' :'30%' }}>
                    <Text variant='grey' xxsmall>{item.time.hour}</Text>
                    {item.time.live && 
                      <Badge centered  paddingProps='2px' variant='secondary' name='ao vivo' textVariant='white' xxsmall />
                    }
                  </Row>
              </Column>
            ) : (
              <>
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
              </>
            )}
          <Row style={{ width: '130%' }}>
            {item.bet.slice(0, 3).map((betItem, betIndex) => {
              return (              
                <Badge 
                  key={betItem.id}
                  name={betItem.odd} 
                  centered 
                  widthProps='28%' 
                  heightProps='60%' 
                  variant={activeIndexBet0 === betIndex && index === activeItemBet0 
                    ? 'ice' : activeIndexBet1 === betIndex && index === activeItemBet1 
                    ? 'ice' : activeIndexBet2 === betIndex && index === activeItemBet2 
                    ? 'ice' : 'background'
                  } 
                  textVariant={activeIndexBet0 === betIndex && index === activeItemBet0 
                    ? 'background' : activeIndexBet1 === betIndex && index === activeItemBet1 
                    ? 'background' : activeIndexBet2 === betIndex && index === activeItemBet2 
                    ? 'background' : 'ice'
                  }
                  onClick={() => {
                    if (betIndex === index) {
                      if (activeIndexBet0 !== betIndex && activeItemBet0 !== index) {
                        setActiveIndexBet0(betIndex)
                        setActiveItemBet0(index)
                      } else if (activeIndexBet0 === betIndex && activeItemBet0 === index) {
                        setActiveIndexBet0(false)
                        setActiveItemBet0(false)
                      }
                    }
                    if (betIndex === index + 1) {
                      if (activeIndexBet1 !== betIndex && activeItemBet1 !== index) {
                        setActiveIndexBet1(betIndex)
                        setActiveItemBet1(index)
                      } else if (activeIndexBet1 === betIndex && activeItemBet1 === index) {
                        setActiveIndexBet1(false)
                        setActiveItemBet1(false)
                      }
                    } if (betIndex === index+ 2) {
                      if (activeIndexBet2 !== betIndex && activeItemBet2 !== index) {
                        setActiveIndexBet2(betIndex)
                        setActiveItemBet2(index)
                      } else if (activeIndexBet2 === betIndex && activeItemBet2 === index) {
                        setActiveIndexBet2(false)
                        setActiveItemBet2(false)
                      }
                    }
                    onHandleBet0(item, betItem, betIndex)}} 
                />
              )})
            }
          </Row>       
        </StyledTableItem>
      ))}
    </StyledTableRow>
  )
}

export default TableRow