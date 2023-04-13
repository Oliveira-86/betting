import React, { useState } from 'react'
import { Text } from '../../atoms/Text'
import Input from '../../atoms/Input'
import Badge from '../../atoms/Badge'
import {Button} from '../../atoms/Button'
import {  StyledBettingCard, Container, Row, TextContainer } from './styles'
import { AiFillCloseSquare } from 'react-icons/ai'
import theme from '../../../global/styles/theme'
import { useDispatch, useSelector } from 'react-redux'
import { addBet, removeGame } from '../../../features/betting/bettingSlice'
import { floatToBRL } from '../../../utils/currency'

const BettingCard = () => {
  const [activeIndex, setActiveIndex] = useState(false)
  const [value, setValue] = useState('');
  const [totalAmount, setTotalAmount] = useState('');

  const dispatch = useDispatch()
  const gameList = useSelector((state) =>  state.betting.gameList)

  // const betItems = useSelector((state) => {
  //   console.log("State: ", state.betting.items)
  //   const transformedBetItems = []

  //   for (const betId in state.betting.items) {
  //     transformedBetItems.push({
  //       betId: betId,
  //       betPrice: state.betting.items[betId].betPrice,
  //       sum: state.betting.items[betId].sum
  //     })
  //   }
  // })

  const onHandleInput = (event) => {
    const value = event.target.value

    setValue(value)
  }

  const onHandleBlur = (odd) => {
   setTotalAmount(value * odd)
  }

  return (
    <StyledBettingCard>
      <TextContainer>       
        <Text variant='ice' bold centered>Minhas Apostas</Text>
      </TextContainer>
      {gameList.length === 0 && <StyledBettingCard centered={!gameList.length}>
          <Text variant='ice' bold big centered>Não há Apostas</Text>
        </StyledBettingCard>
      }
      {gameList?.map((item) => {
        console.log("Item: ", item)
        return (
        <Container>
          <Row>
            <Row>
              <AiFillCloseSquare style={{ cursor: 'pointer' }} onClick={() => dispatch(removeGame(item.betId))} color={theme.colors.grey_strong} />
              <Text marginLeft={'10px'} variant='ice'>{item.type}</Text>
            </Row>
            <Text variant='ice'>x{item.odd}</Text>
          </Row>
          <Row>
            <div style={{ width: '350%' }}> 
              <Text  style={{ marginTop: 5 }} small variant='ice'>{item.team1} x {item.team2}</Text>
            </div>
          </Row>
          <Row>
            <Input 
              small  
              placeholder='Valor' 
              name={item.id}
              value={value ? value : item.value} 
              onChange={(e) => onHandleInput(e)} 
              onBlur={() => onHandleBlur(item.odd)}
            />
            <div style={{ width: '70%', marginLeft: -50 }}> 
              <Text small variant='ice'>Resultado</Text>
            </div>
            <div style={{ width: '70%' }}> 
              <Text small variant='ice'>R$ {floatToBRL(value * item.odd) }</Text>
            </div>
          </Row>
          <Row style={{  marginTop: 20, marginBottom: 20}}>
            <Badge style={{ width: '18%', background: theme.colors.ice }} centered textVariant='grey_strong' name='+25' xsmall />
            <Badge style={{ width: '18%', background: theme.colors.ice }} centered textVariant='grey_strong' name='+50' xsmall />
            <Badge style={{ width: '18%', background: theme.colors.ice }} centered textVariant='grey_strong' name='+100' xsmall />
            <Badge style={{ width: '18%', background: theme.colors.ice }} centered textVariant='grey_strong' name='+150' xsmall />
            <Badge style={{ width: '18%', background: theme.colors.ice }} centered textVariant='grey_strong' name='+200' xsmall />
          </Row>
        </Container>
      )})}
       {gameList.length && (
          <Button style={{ width: '95%', marginLeft: 8 }} variant='outlinedSecondary'>
            <Text MarginRight='20px' variant='ice' bold big>Fazer Aposta</Text>
            <Text variant='secondary' bold big>R$ {floatToBRL(totalAmount)}</Text>
          </Button>
        )}
    </StyledBettingCard>
  )
}

export default BettingCard