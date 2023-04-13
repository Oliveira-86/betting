import styled from "styled-components";
import { devices } from "../../../global/styles/devices";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 20px;
  @media ${devices.tablet} {
    padding: 20px 30px;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 40px;
  width: 100%;
  min-height: 1020;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media ${devices.tablet} {
    width: 90%;
  }
  @media ${devices.laptop} {
    margin-left: 5%;
  }
`;

export const InputContainer = styled.div`
  margin-top: 40px;
  width: 100%;
  @media ${devices.tablet} {
    width: 90%;
  }
  @media ${devices.laptop} {
    margin-left: 5%;
  }
`;

export const ButtonText = styled.button`
  padding: 10px;
  color: ${({ theme }) => theme.colors.ice};
  background-color: ${({ theme }) => theme.colors.background};
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;

export const Centered = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 100px;

  @media ${devices.laptop} {
    border: 1px solid ${({ theme }) => theme.colors.grey_strong};
    border-radius: 15px;
    align-items: center;
    width: 60%;
    justify-content: center;
  }
  @media ${devices.laptopL} {
    border: 1px solid ${({ theme }) => theme.colors.grey_strong};
    border-radius: 15px;
    align-items: center;
    justify-content: center;
    width: 30%;
    padding: 20px
  }
`;