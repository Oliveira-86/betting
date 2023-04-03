import React from 'react';
import { Text } from '../Text';
import { StyledBadge } from './styles';

function Badge(props) {

  return (
    <StyledBadge onClick={props.onClick} style={props.style} {...props}><Text xxsmall={props.xxsmall} variant={props.textVariant}>{props.name}</Text></StyledBadge>
  )
}

export default Badge