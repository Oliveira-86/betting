import React, { useState } from 'react'
import { Text, Title } from '../../atoms/Text'
import { StyledBarside, SyledSportsBarsides, StyledItem } from './styles'
import Image from '../../atoms/Image'
import vertical_banner from '../../../assets/vertical_banner.jpg'
import useWindowDimensions from '../../../hook/useWindowDimensions'

const SportsBarside = ({ heading, style, sportsCategory }) => {
  const [activeIndex, setActiveIndex] = useState(false)

  const windowDimensions  = useWindowDimensions()
  const { width } = windowDimensions

  const Item = ({ icon, name, onClick, active, variant }) => (
      <StyledItem active={active} onClick={onClick}>
        {icon}
        <Text small={width <= 1200} bold variant={variant} style={{ marginLeft: 20 }}>
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
      {sportsCategory.map((item, index) => (
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