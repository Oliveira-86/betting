import React from 'react';
import { StyledBadge } from './styles';

function Badge(props) {

  return (
    <StyledBadge onClick={props.onClick} {...props}>{props.children}</StyledBadge>
  )
}

export default Badge