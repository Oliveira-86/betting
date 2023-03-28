import styled from "styled-components";

export const StyledSportsRow = styled.div`
  border-top: 2px solid ${({ theme }) => theme.colors.ice};
  border-bottom: 2px solid ${({ theme }) => theme.colors.ice};
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: row;
`

export const Column = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`

export const Row = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`