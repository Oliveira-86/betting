import styled, { css } from "styled-components";
import { StyledCard } from "../../atoms/Card/styles";

export const StyledTableRow = styled(StyledCard)`
  min-width: 100%;
  padding: 15px 20px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  ${({ isMobile }) => isMobile && css`
     margin-bottom: 0px;
     border-radius: 0px;
     border-left: none;
     border-right: none;
  `}
`

export const StyledTableItem = styled.div`
  width: 100%;
  margin-bottom: 8px;
  display: flex;
  flex-direction: row;
  margin-top: 5px;
  border-bottom: 0.1px solid ${({ theme }) => theme.colors.dark_seconday};
  padding-bottom: 8px;

  /* &:hover {
    background-color: ${({ theme }) => theme.colors.ice};
  } */
  
`


export const Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const StyledTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;