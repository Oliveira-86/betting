import styled from "styled-components";
import { StyledCard } from "../../atoms/Card/styles";

export const StyledBarside = styled.section`
  display: flex;
  flex-direction: column;
`

export const SyledSportsBarsides = styled(StyledCard)`
  height: 600px;
  width: 100%;
  margin-right: 10px;
  padding: 12px 25px 12px 25px;
  
`

export const StyledItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin: 15px 0px;
  padding: 8px;
  cursor: pointer;
  color: ${({ theme, active }) => active 
    ? theme.colors.secondary
    : 'transparent'
  };
  background-color: ${({ theme, active }) => active 
    ? theme.colors.shadow_secondary
    : 'transparent'
  };
  border-radius: ${({ active }) => active && '10px'};

  &:hover {
    background-color: ${({ theme }) => theme.colors.shadow_secondary};
    width: 100%;
    padding: 8px;
    border-radius: 10px;
    color: ${({ theme }) => theme.colors.secondary}
  }

`