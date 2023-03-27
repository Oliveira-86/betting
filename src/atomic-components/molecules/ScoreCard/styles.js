import styled, { css } from "styled-components";


export const StyledScoreCard = styled.div`
  padding: 15px;
  border: 1px solid ${({ theme }) => theme.colors.ice};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  margin-top: 25px;
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