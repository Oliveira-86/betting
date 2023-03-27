import React from 'react'
import { Text } from '../Text'
import { StyledLink } from './styles'

const Link = (props) => {
  return (
    <StyledLink>
      <Text {...props}>
        {props.children}
      </Text>
    </StyledLink>
  )
}

export default Link