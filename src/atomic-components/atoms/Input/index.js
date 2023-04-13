import React, { useState } from "react";
import theme from "../../../global/styles/theme";
import { StyledInput, InputStyle, StyledSearch } from "./styles";
import { BiSearch } from 'react-icons/bi'
import { Text } from "../Text";

const Input = (props) => {
  const [isFocus, setIsFocus] = useState(false);
  
  return (
    <>
      <StyledInput {...props}>
        {props.search && (
          <StyledSearch>
            <BiSearch size={25} color={theme.colors.ice} />
          </StyledSearch>
        )}
        <InputStyle
          {...props}
          onFocus={() => setIsFocus(true)}
          onBlur={props.onBlur}
          placeholderTextColor={theme.colors.black}
          hasSearch={props.search}
          small={props.small}
        />
      </StyledInput>
    </>
  );
};

export default Input;