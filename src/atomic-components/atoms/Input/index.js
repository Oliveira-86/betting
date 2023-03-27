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
        {!isFocus && (
          <StyledSearch {...props}>
            <BiSearch size={25} />
          </StyledSearch>
        )}
        <InputStyle
          {...props}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          placeholderTextColor={theme.colors.black}
        />
      </StyledInput>
    </>
  );
};

export default Input;