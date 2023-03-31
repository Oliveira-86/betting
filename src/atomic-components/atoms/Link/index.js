import React from 'react'
import { Text } from '../Text'
import { StyledLink } from './styles'

const Link = (props) => {
  return (
    <StyledLink style={props.style}>
      <Text {...props}>
        {props.children}
      </Text>
    </StyledLink>
  )
}

export default Link