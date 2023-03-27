import styled from "styled-components";

export const StyledDot = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: ${({ theme, active }) => active 
    ? theme.colors.secondary 
    : theme.colors.ice
  };
  border: ${({ theme, active }) => active 
    ? `3px solid ${theme.colors.secondary}` 
    : `3px solid ${theme.colors.ice}`
  };
`;