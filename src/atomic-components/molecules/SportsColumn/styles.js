import styled from "styled-components";
import { StyledCard } from "../../atoms/Card/styles";

export const StyledRightColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const StyledSportsColumn = styled(StyledCard)`
  min-width: 100%;
  padding: 15px 20px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`

export const StyledCasinoGames = styled(StyledCard)`
  min-width: 100%;
  padding: 15px 20px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`

export const StyledTableItem = styled.div`
  width: 100%;
  margin-bottom: 8px;
  display: flex;
  flex-direction: row;
  margin-top: 5px;
  border-bottom: 0.3px solid ${({ theme }) => theme.colors.ice};
  padding-bottom: 8px;
`


export const Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`