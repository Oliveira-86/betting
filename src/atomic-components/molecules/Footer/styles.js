import styled, { css } from "styled-components";
import { StyledLink } from "../../atoms/Link/styles";

export const ItemContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const StyledFooter = styled.div`
  width: 100%;
  padding: 20px 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.colors.dark};
  padding-bottom: 50px;
  margin-top: 30px;

  ${({ isMobile }) => isMobile && css`
    padding: 20px 20px 50px 20px;
  `}
`

export const Link = styled.a`
  margin: 5px 0px;
  text-decoration: none;
  cursor: pointer;
  margin-top: ${({ first }) => first && '20px'};
`

export const Row = styled(Link)`
  margin-top: 30px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-evenly;
`

export const Column = styled(StyledLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
`