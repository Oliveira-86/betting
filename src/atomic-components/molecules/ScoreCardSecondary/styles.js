import styled, { css } from "styled-components";

export const StyledScoreCardSecondary = styled.div`
  padding: 15px;
  border: 2px solid ${({ theme }) => theme.colors.ice};
  border-radius: 8px;
  margin-bottom: 10px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
  ${({ marginVertical }) => marginVertical && css`
     margin:10px 0px;
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