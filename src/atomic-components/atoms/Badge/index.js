import React from 'react';
import { StyledCard } from './styles';

function Badge(props) {

  return (
    <StyledCard onClick={props.onClick} {...props}>{props.children}</StyledCard>
  )
}

export default Badge