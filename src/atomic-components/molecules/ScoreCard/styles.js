import styled, { css } from "styled-components";
import { StyledCard } from "../../atoms/Card/styles";


export const StyledScoreCard = styled(StyledCard)`
  padding: 15px;
  margin: 25px 0px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  ${({ marginTop }) => marginTop && css`
   margin-top: 15px;
  `}

`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 28%;
  max-height: 70%;
  ${({ justifyContent }) => justifyContent && css`
   justify-content: space-around;
  `}
`;