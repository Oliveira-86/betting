import styled from "styled-components";

export const StyledBottomBar = styled.div`
  position: ${({ scrollingDown }) => !scrollingDown ? 'fixed' : 'absolute'};
  bottom: ${({ scrollingDown }) => !scrollingDown ? '0px' : '5000px'};
  left: 0px;
  padding: 15px 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.colors.black};
  width: 100%;
  border-radius: 20px 20px 0px 0px;
`