import styled, { css } from "styled-components";
import { devices } from "../../../global/styles/devices";

export const StyledInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  ${({ margintop }) => margintop && css`
    margin-top: ${margintop};
  `};
  ${({ marginBottom }) => marginBottom && css`
    margin-bottom: ${marginBottom};
  `};
`;

export const InputStyle = styled.input`
  padding: 10px 15px;
  font-size: 1.25rem;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.ice};
  background-color: ${({ theme }) => theme.colors.card};
  border: none;
  border-radius: 0px 15px 15px 0px;
  width: 100%;

  &:focus {
      outline: none;
  }

  ::placeholder {
    color: ${({ theme }) => theme.colors.ice};
    font-size: 1rem;
  }
  
  @media ${devices.mobileL} {
    font-size: 25px;
  };
  @media ${devices.tablet} {
    font-size: 25px;
  };
  @media ${devices.laptop} {
    font-size: 20px;
  }
  @media ${devices.laptopL} {
    font-size: 20px;
  }
`;

export const StyledSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px 0px 0px 15px;
  background-color:${({ theme }) => theme.colors.card};
  padding-left: 8px;
`;