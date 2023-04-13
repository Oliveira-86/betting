import styled, { css } from 'styled-components'

const BaseStyle = css`
  line-height: 1em;
  margin: 0;

  ${({ verticalMargin }) => verticalMargin && css`
    margin-top: ${verticalMargin};
    margin-bottom: ${verticalMargin};
  `}

  ${(props) => {
    switch (props.variant) {
      case "white":
        return `color: ${props.theme.colors.white}`;
      case "ice":
        return `color: ${props.theme.colors.ice}`;
      case "grey":
        return `color: ${props.theme.colors.grey}`;
      case "black":
        return `color: ${props.theme.colors.black}`;
      case "dark":
        return `color: ${props.theme.colors.dark}`;
      case "secondary":
        return `color: ${props.theme.colors.secondary}`;
      default:
        return `color: ${props.theme.colors.black}`;
    }
  }};
  
  ${({ isClickable }) => isClickable && css`
    cursor: pointer;
  `}
  ${({ noMargin }) => noMargin && css`
    margin: 0 !important;
    margin-bottom: 0 !important;
  `}
  ${({ MarginRight }) => MarginRight && css`
    margin-right: ${MarginRight};
  `}
  ${({ marginLeft }) => marginLeft && css`
    margin-left: ${marginLeft};
  `}
   ${({ MarginTop }) => MarginTop && css`
    margin-top: ${MarginTop};
  `}
  ${({ marginBottom }) => marginBottom && css`
    margin-top: ${marginBottom};
  `}
  ${({ verticalPadding }) => verticalPadding && css`
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  `}
  ${({ textAlign }) => textAlign && css`
    text-align: ${textAlign}
  `}
`

export const CssH1 = css`
  ${BaseStyle}
  font-weight: 900;
  font-size: 1.5em;
  text-transform: uppercase;
`

export const CssH2 = css`
  ${BaseStyle}
  font-weight: 600;
  font-size: 1.2em;
`

export const CssH3 = css`
  ${BaseStyle}
  font-weight: 600;
  font-size: 1.2em;
  
`

export const StyledParagraph = styled.p`
  ${BaseStyle}
  font-weight: 400;
  font-size: 1em;
  line-height: 1.45em;
  margin-top: 0;
  margin-bottom: 0rem;
  ${({ bold }) => bold && css`
      font-weight: bold;
  `}

  ${({ centered }) => centered && css`
      text-align: center;
  `}
  ${(props) =>
    props.big &&
    `
      font-size: 1.2em;
    `}

  ${(props) =>
    props.small &&
    css`
      font-size: 0.85em;
    `}
    ${(props) =>
    props.xsmall &&
    css`
      font-size: 0.7em;
    `}
     ${(props) =>
    props.xxsmall &&
    css`
      font-size: 0.6em;
    `}

    ${({ hoverSecondary }) => hoverSecondary && css`
      &:hover {
        color: ${({ theme }) => theme.colors.secondary}
      }
    `}
`;

export const StyledH1 = styled.h1`
  ${CssH1}
`;

export const StyledH2 = styled.h2`
  ${CssH2}
`;

export const StyledH3 = styled.h3`
  ${CssH3}
`