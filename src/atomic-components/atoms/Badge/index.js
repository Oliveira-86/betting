import React from 'react';
import { StyledBadge } from './styles';

function Badge(props) {

  return (
    <StyledBadge onClick={props.onClick} style={props.style} {...props}>{props.children}</StyledBadge>
  )
}

export default Badge