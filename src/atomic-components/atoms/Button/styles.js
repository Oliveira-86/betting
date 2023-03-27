import styled, { css } from "styled-components";
import { devices } from "../../../global/styles/devices";

export const BaseStyled = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 8px;

  ${(props) => {
    switch (props.variant) {
      case "disabled":
        return `
                    background-color: ${props.theme.colors.gray};
                    border: 1px solid transparent;
                `;
      case "outlined":
        return `
                    background-color: ${props.theme.colors.background};
                    border: 1px solid ${props.theme.colors.white}
                `;
      case "outlinedSecondary":
        return `
                    background-color: ${props.theme.colors.background};
                    border: 1px solid ${props.theme.colors.secondary}
                `;
      case "outlinedPrimary":
        return `
                    background-color: ${props.theme.colors.background};
                    border: 0.85px solid ${props.theme.colors.primary};
                    opacity: 0.3;
                `;
      default:
        return `
                    background-color: ${props.theme.colors.primary};
                    border: 1px solid ${props.theme.colors.primary};
                `;
    }
  }};
`

export const StyledButton = styled.button`
  display: flex;
  position: relative;
  padding: ${({ large }) => (large ? "15px" : "10px")};
  border-radius: 4px;
  cursor: pointer;
  font-weight: 700;
  width: 100%;
  justify-content: center;
  margin-bottom: 10px;
  align-items: center;
  ${(props) => props.small && `height: 36px;`}
  ${(props) => {
    switch (props.variant) {
      case "disabled":
        return `
                    background-color: ${props.theme.colors.gray};
                    border: 1px solid transparent;
                `;
      case "outlined":
        return `
                    background-color: ${props.theme.colors.background};
                    border: 1px solid ${props.theme.colors.white}
                `;
      case "outlinedSecondary":
        return `
                    background-color: ${props.theme.colors.primary};
                    border: 1px solid ${props.theme.colors.secondary}
                `;
      case "outlinedPrimary":
        return `
                    background-color: ${props.theme.colors.background};
                    border: 0.85px solid ${props.theme.colors.primary};
                    opacity: 0.3;
                `;
          case "secondary":
              return `
                        background-color: ${props.theme.colors.secondary};
                        border: 0.85px solid ${props.theme.colors.secondary};
                    `;
      
      default:
        return `
                    background-color: ${props.theme.colors.primary};
                    border: 1px solid ${props.theme.colors.primary};
                `;
    }
  }};
  
  ${({ heightProps}) => heightProps && css`
      height: ${heightProps};
  `}
  ${({ margintop }) => margintop && css`
      margin-top: ${margintop}
  `}
`;

export const ButtonText = styled.p`
  font-size: 13px;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.bold};
  text-transform: uppercase;
  ${(props) => props.small && `font-size: 8px; margin-left: 30px;`}
  ${(props) => {
    switch (props.variant) {
      case "white-secondary":
        return `color: ${props.theme.colors.secondary}`;
      case "outlinedSecondary":
        return `color: ${props.theme.colors.secondary}`;
      case "outlinedPrimary":
        return `color: ${props.theme.colors.primary}; opacity: 1`;
       case "secondary":
        return `color: ${props.theme.colors.secondary}`;
      default:
        return `color: ${props.theme.colors.white}`;
    }
  }};
`;

export const StyledSquaredButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) => {
    switch (props.variant) {
      case "disabled":
        return `
                    background-color: ${props.theme.colors.gray};
                    border: 1px solid transparent;
                `;
      case "outlined":
        return `
                    background-color: ${props.theme.colors.background};
                    border: 1px solid ${props.theme.colors.white}
                `;
      case "outlinedSecondary":
        return `
                    background-color: ${props.theme.colors.background};
                    border: 1px solid ${props.theme.colors.secondary}
                `;
      case "outlinedPrimary":
        return `
                    background-color: ${props.theme.colors.background};
                    border: 0.85px solid ${props.theme.colors.primary};
                    opacity: 0.3;
                `;
      default:
        return `
                    background-color: ${props.theme.colors.primary};
                    border: 1px solid ${props.theme.colors.primary};
                `;
    }
  }};

  
  ${({ margintop }) => margintop && css`
    margin-top: ${margintop}
  `}

  ${({ justifyContent }) => justifyContent && css`
    justify-content: ${justifyContent}
  `}

  ${({ textAlign }) => textAlign && css`
    text-align: ${textAlign}
  `}
`