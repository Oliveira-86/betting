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
  color: ${({ theme }) => theme.colors.grey_strong};
  background-color: ${({ theme }) => theme.colors.card};
  border: none;
  border-radius: ${({ hasSearch }) => hasSearch ?  '0px 15px 15px 0px' : '15px 15px 15px 15px'};
  width: 100%;

  ${({ small}) => small && css`
    width: 80px; 
    height: 30px; 
    background-color:  ${({ theme }) => theme.colors.ice}; 
    border-radius: 4px; 
    font-size: 1rem;
  `}

  &:focus {
      outline: none;
  }

  ::placeholder {
    color: ${({ theme }) => theme.colors.ice};
    font-size: 1rem;

    ${({ small }) => small && css`
      text-align: end;
      color: ${({ theme }) => theme.colors.grey_strong};
    `}
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