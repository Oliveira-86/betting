import React from 'react';
import { Title } from '../Text';
import { StyledCard } from './styles';

function Card(props) {

  return (
    <StyledCard {...props}>
     {props.heading && 
        <Title 
          level={2}
          verticalMargin={'30px'} 
          variant='grey'       
          style={{ padding: 10, }}
        >
          {props.heading}
        </Title>
      }
      {props.children}
    </StyledCard>
  )
}

export default Card