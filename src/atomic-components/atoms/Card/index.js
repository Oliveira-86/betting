import React from 'react';
import { StyledCard } from './styles';

function Card(props) {

  return (
    <StyledCard {...props}>{props.children}</StyledCard>
  )
}

export default Card