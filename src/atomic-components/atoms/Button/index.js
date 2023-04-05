import React from "react";
import { StyledButton, StyledSquaredButton } from "./styles";

import BeatLoader from "react-spinners/BeatLoader";
import theme from "../../../global/styles/theme";
import { Text } from '../Text';

const Button = (props) => {
  return (
      <StyledButton style={props.style} {...props}>
        <Text variant={props.textVariant} bold={props.bold}>
          {!props.isLoading ? props.label : <BeatLoader  color={theme.colors.background} size={10} />}
        </Text>
        {props.children}
      </StyledButton>
    );
  };

  const SquaredButton = (props) => {
    return (
      <StyledSquaredButton {...props}>
        {props.children}
      </StyledSquaredButton>
    );
  };
export { Button, SquaredButton };