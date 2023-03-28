import styled from "styled-components";
import { StyledCard } from "../../atoms/Card/styles";

export const SyledSportsBarsides = styled(StyledCard)`
  height: 550px;
  min-width: 15%;
  margin-right: 10px;
   padding: 12px 25px 12px 25px;
  
`

export const StyledItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin: 25px 0px;

  :hover {
    background-color: ${({ theme }) => theme.colors.secondary_shadow};
    border-radius: 50%;
  }

`

