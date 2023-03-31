import styled, { css } from "styled-components";

export const StyledHomeHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;