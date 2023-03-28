import styled, { css } from "styled-components";


export const StyledCard = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.grey_light};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;

  ${({ centered }) => centered && css`
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;