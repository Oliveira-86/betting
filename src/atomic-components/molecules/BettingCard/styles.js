import styled, { css } from "styled-components";
import { StyledCard } from "../../atoms/Card/styles";

export const StyledBettingCard = styled(StyledCard)`
  width: 100%;
  margin-bottom: 10px;
  padding: 2px;
  min-height: 200px;
  ${({ centered }) => centered && css`
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`

export const Container = styled.div`
  padding: 6px;
  border-bottom-width: 1px solid ${({ theme }) => theme.colors.black};;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 8px 0px;
`


export const TextContainer = styled.div`
  width: 100%;
  padding: 8px;
  background-color: ${({ theme }) => theme.colors.grey_strong};
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
`