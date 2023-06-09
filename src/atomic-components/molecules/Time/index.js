import React from 'react'
import { Text } from '../../atoms/Text'
import { StyledTime } from './styles'
import Dot from '../../atoms/Dot'
import { MdLiveTv } from 'react-icons/md'
import theme from '../../../global/styles/theme'


function Time({ time, dot, variant }) {
  return (
    <StyledTime>
      {dot ? <Dot /> :  <MdLiveTv size={15} color={theme.colors.grey} />}
      <Text variant={variant} marginLeft='3px' xsmall>
        {time}
      </Text>
    </StyledTime>
  )
}

export default Time