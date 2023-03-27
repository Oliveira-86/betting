import styled, { css } from "styled-components";
import { devices } from "../../../global/styles/devices";

export const StyledInput = styled.div`
  width: 100%;
  border-radius: 15px;
  ${({ margintop }) => margintop && css`
    margin-top: ${margintop};s
  `};
  ${({ marginBottom }) => marginBottom && css`
    margin-bottom: ${marginBottom};s
  `};
`;

export const InputStyle = styled.input`
  padding: 10px 15px;
  font-size: 1.25rem;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.ice};
  border: none;
  border-radius: 15px;
  width: 100%;

  &:focus {
      outline: none;
  }

  ::placeholder {
    color: ${({ theme }) => theme.colors.black};
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
  position: absolute;
  display: flex;
  align-items: end;
  justify-content: end;
  padding: 10px 0px 5px 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  right: 40px;
`;