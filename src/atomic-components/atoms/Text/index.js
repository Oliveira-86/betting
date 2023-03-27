import React from 'react'
import PropTypes from 'prop-types'
import { StyledH1, StyledH2, StyledH3, StyledParagraph } from './styles'

const Title = (props) => {
  const { level } = props

  switch (level) {
    case 3:
      return <StyledH3 {...props}>{props.children}</StyledH3>
    case 2:
      return <StyledH2 {...props}>{props.children}</StyledH2>

    case 1:
    default:
      return <StyledH1 {...props}>{props.children}</StyledH1>
  }
}

const Text = (props) => {
  return <StyledParagraph {...props}>{props.children}</StyledParagraph>
}

export { Title, Text }