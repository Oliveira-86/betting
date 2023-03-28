import React from 'react'
import { Text, Title } from '../../atoms/Text'
import { SyledSportsBarsides, StyledItem } from './styles'
import { v4 as uuidv4 } from "uuid";
import { MdCasino, MdSportsHockey } from 'react-icons/md'
import { GiAmericanFootballBall, GiBasketballBall, GiBoxingGlove, GiCycling, GiSoccerBall } from 'react-icons/gi';
import { FaVolleyballBall } from 'react-icons/fa';
import theme from '../../../global/styles/theme';
import { IoMdTennisball } from 'react-icons/io';

const sportsList = [
  {
    id: uuidv4(),
    name: 'Futebol',
    icon: <GiSoccerBall size={15} color={theme.colors.grey} />
  },
  {
    id: uuidv4(),
    name: 'Basquete',
    icon: <GiBasketballBall size={15} color={theme.colors.grey} />
  },
  {
    id: uuidv4(),
    name: 'Volei',
    icon: <FaVolleyballBall size={15} color={theme.colors.grey} />
  },
  {
    id: uuidv4(),
    name: 'Casino',
    icon: <MdCasino size={15} color={theme.colors.grey} />
  },
  {
    id: uuidv4(),
    name: 'Boxe',
    icon: <GiBoxingGlove size={15} color={theme.colors.grey} />
  },
  {
    id: uuidv4(),
    name: 'Football',
    icon: <GiAmericanFootballBall size={15} color={theme.colors.grey} />
  },
  {
    id: uuidv4(),
    name: 'Ciclismo',
    icon: <GiCycling size={15} color={theme.colors.grey} />
  },
  {
    id: uuidv4(),
    name: 'Tênis',
    icon: <IoMdTennisball size={15} color={theme.colors.grey} />
  },
  {
    id: uuidv4(),
    name: 'Hóquei',
    icon: <MdSportsHockey size={15} color={theme.colors.grey} />
  },
]

const SportsBarside = ({ heading }) => {

  const Item = ({ icon, name }) => (
    <StyledItem>
      {icon}
      <Text bold variant='grey' style={{ marginLeft: 20 }}>
        {name}
      </Text>
    </StyledItem>
  )

  return (
    <SyledSportsBarsides>
      <Title 
        level={2}
        verticalMargin={'30px'} 
        variant='grey'       
        style={{ padding: 10, }}
      >
        {heading}
      </Title> 
      {sportsList.map((item) => (
        <Item  
          icon={item.icon}
          name={item.name}
        />
      ))}
    </SyledSportsBarsides>
  )
}

export default SportsBarside