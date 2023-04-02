import React, { useState } from 'react'
import { Text, Title } from '../../atoms/Text'
import { StyledBarside, SyledSportsBarsides, StyledItem } from './styles'
import { v4 as uuidv4 } from "uuid";
import { MdCasino, MdSportsHockey } from 'react-icons/md'
import { GiAmericanFootballBall, GiBasketballBall, GiBoxingGlove, GiCycling, GiSoccerBall } from 'react-icons/gi'
import { FaVolleyballBall } from 'react-icons/fa'
import theme from '../../../global/styles/theme'
import { IoMdTennisball } from 'react-icons/io'
import Image from '../../atoms/Image'
import vertical_banner from '../../../assets/vertical_banner.jpg'

const sportsList = [
  {
    id: uuidv4(),
    name: 'Futebol',
    icon: {
            active: <GiSoccerBall size={15} color={theme.colors.secondary} />,
            inactive: <GiSoccerBall size={15} color={theme.colors.grey} />
          }
  },
  {
    id: uuidv4(),
    name: 'Basquete',
    icon: {
            active: <GiBasketballBall size={15} color={theme.colors.secondary} />,
            inactive: <GiBasketballBall size={15} color={theme.colors.grey} />
          }
  },
  {
    id: uuidv4(),
    name: 'Volei',
    icon: {
      active: <FaVolleyballBall size={15} color={theme.colors.secondary} />,
      inactive: <FaVolleyballBall size={15} color={theme.colors.grey} />
    }
  },
  {
    id: uuidv4(),
    name: 'Casino',
    icon: {
            active: <MdCasino size={15} color={theme.colors.secondary} />,
            inactive: <MdCasino size={15} color={theme.colors.grey} />
          }
  },
  {
    id: uuidv4(),
    name: 'Boxe',
    icon: {
            active: <GiBoxingGlove size={15} color={theme.colors.secondary} />,
            inactive: <GiBoxingGlove size={15} color={theme.colors.grey} />
          }
  },
  {
    id: uuidv4(),
    name: 'Football',
    icon:  {
            active: <GiAmericanFootballBall size={15} color={theme.colors.secondary} />,
            inactive: <GiAmericanFootballBall size={15} color={theme.colors.grey} />
          } 
  },
  {
    id: uuidv4(),
    name: 'Ciclismo',
    icon: {
            active: <GiCycling size={15} color={theme.colors.secondary} />,
            inactive: <GiCycling size={15} color={theme.colors.grey} />
          }
  },
  {
    id: uuidv4(),
    name: 'Tênis',
    icon: {
            active: <IoMdTennisball size={15} color={theme.colors.secondary} />,
            inactive: <IoMdTennisball size={15} color={theme.colors.grey} />
          }
  },
  {
    id: uuidv4(),
    name: 'Hóquei',
    icon: {
            active: <MdSportsHockey size={15} color={theme.colors.secondary} />,
            inactive: <MdSportsHockey size={15} color={theme.colors.grey} />
          }
  },
]

const SportsBarside = ({ heading, style }) => {
  const [activeIndex, setActiveIndex] = useState(false)

  const Item = ({ icon, name, onClick, active, variant }) => (
      <StyledItem active={active} onClick={onClick}>
        {icon}
        <Text bold variant={variant} style={{ marginLeft: 20 }}>
          {name}
        </Text>
      </StyledItem>
  )

  return (
  <StyledBarside style={style}>
    <SyledSportsBarsides >
      <Title 
        level={2}
        verticalMargin={'30px'} 
        variant='grey'       
        style={{ padding: 10, }}
      >
        {heading}
      </Title> 
      {sportsList.map((item, index) => (
        <Item
          onClick={() => setActiveIndex(index)}
          icon={activeIndex === index ? item.icon.active : item.icon.inactive}
          name={item.name}
          active={activeIndex === index}
          variant={activeIndex === index ? 'secondary' : 'grey'}
        />
      ))}
    </SyledSportsBarsides>
    <Image src={vertical_banner} style={{ width: '100%', borderRadius: 8, marginTop: 10 }}  />
  </StyledBarside>
  )
}

export default SportsBarside